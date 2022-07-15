<template>
  <ul class="tree-select-ul">
    <li class="tree-select-ul-list" :style="getTreeSelectWidth">
      <!-- 展示列表图标方向 -->
      <div class="tree-select-ul-list-expand">
        <span class="tree-select-ul-list-expand-icon" @click="handleExpand">
          <span v-if="data.children && data.children.length && !data.expand">
            <amber-icon icon-class="xiangyou"></amber-icon>
          </span>
          <span v-if="data.children && data.children.length && data.expand">
            <amber-icon icon-class="xiangxia"></amber-icon
          ></span>
        </span>
        <span class="tree-select-ul-list-expand-label" @click="pickHandle(data.label)">{{
          data.label
        }}</span>
      </div>

      <!-- 列表 ：递归：自己调自己 -->
      <!-- 当data.children不存在或者为空数组的时候，就不会渲染子节点了，递归就停止了 v-for是该递归的终结条件-->
      <tree-select-node
        v-if="data.expand"
        class="tree-select-node"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      >
      </tree-select-node>
    </li>
  </ul>
</template>

<script>
import { findComponentUpward } from '../../../../utils/assist'

export default {
  name: 'TreeSelectNode',
  props: {
    // 是对象而不是数组: 因为它只负责渲染当前的一个节点，并递归渲染下一个节点（即children),所以这里对cloneData 进行了循环，将每一项的节点数据赋值给了tree-select-node节点
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    vWidth: {
      type: String,
      default: '330px'
    }
  },
  watch: {
    'data.children': {
      handler(data) {
        if (data) {
          const checkedAll = !data.some((item) => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true
    }
  },
  computed: {
    getTreeSelectWidth() {
      return {
        width: this.vWidth
      }
    }
  },
  mounted() {
    this.getDataList()
  },
  data() {
    return {
      dataList: [],
      ispicked: false,
      tree: findComponentUpward(this, 'AmberTreeSelect'), // 向上找到最近的指定组件
      isTreeRoot: true,
      selectree: null
    }
  },
  methods: {
    getDataList() {},
    /** 是否展开 */
    handleExpand() {
      this.$set(this.data, 'expand', !this.data.expand)
    },
    handleCheck() {
      // this.updateTreeDown(this.data, checked)
      // if (this.tree) {
      //   this.tree.emitEvent('on-check-change', this.data)
      // }
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked)
      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          this.updateTreeDown(item, checked)
        })
      }
    },
    pickHandle(value) {
      // 用实例去赋值
      if (this.tree) {
        // 将值给输入框
        this.tree.input = value
        // 要关闭
        this.tree.isShow = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree-select-ul {
  width: 340px;
  background: #FFFFFF;
  overflow: hidden;
  font-size: 14px;
   box-sizing: border-box;
   margin 0px;
   padding 0px;
  &-list {
    list-style: none;
    margin-left: 10px;
    active:pink;
    &-expand{
      display: flex;
      justify-content: flex-start;
      &-icon{
        margin-right: 10px;
      }
      &-label{
        width: 100%;
        color: currentcolor;    /* 去除默认的颜色和点击后变化的颜色 */
      }
      &-label:hover{
       background-color:#BAE7FF
      }
      &-picked{
         background-color:#BAE7FF
      }
      .amber-svg-icon--color{
        color:#00000040  !important;
         width:12px !important;
        height:12px !important;
      }
    }
  }
}
</style>
