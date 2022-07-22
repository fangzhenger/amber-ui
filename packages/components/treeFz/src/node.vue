<template>
  <ul class="tree-ul">
    <li class="tree-ul-list">
      <!-- 展示列表图标方向 -->
      <div class="tree-ul-list-expand" @click="handleExpand">
        <span class="tree-ul-list-expand-icon">
          <span v-if="data.children && data.children.length && !data.expand">
            <amber-icon icon-class="xiangyou"></amber-icon>
          </span>
          <span v-if="data.children && data.children.length && data.expand">
            <amber-icon icon-class="xiangxia"></amber-icon
          ></span>
        </span>
        <amber-checkbox
          v-if="showCheckbox"
          @change="handleCheck"
          :checked="data.checked"
        ></amber-checkbox>
        <!-- loading 加载 -->
        <span v-if="data.loading" >
          <amber-icon icon-class="xiangxia"></amber-icon
          >
          </span>
        <span class="tree-ul-list-expand-label" @click.stop="pickHandle(data)">{{
          data.label
        }}</span>
      </div>

      <!-- 列表 ：递归：自己调自己 -->
      <!-- 当data.children不存在或者为空数组的时候，就不会渲染子节点了，递归就停止了 v-for是该递归的终结条件-->
      <tree-node
        v-if="data.expand"
        class="tree-node"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      >
      </tree-node>
    </li>
  </ul>
</template>
<script>
import { findComponentUpward } from '../../../../utils/assist'
export default {
  name: 'TreeNode',
  props: {
    // 是对象而不是数组: 因为它只负责渲染当前的一个节点，并递归渲染下一个节点（即children),所以这里对cloneData 进行了循环，将每一项的节点数据赋值给了tree-node节点
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tree: findComponentUpward(this, 'AmberTreeFz')
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
  methods: {
    /** 是否展开 是否有children的图标 */
    handleExpand() {
      // 给对象增加一个属性，且更新视图
      this.$set(this.data, 'expand', !this.data.expand)
    },
    /**监听是否change了复选框 */
    handleCheck(checked) {
      this.updateTreeDown(this.data, checked)
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked)

      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          this.updateTreeDown(item, checked)
        })
      }
    },
    pickHandle(data) {
      if (this.tree) {
        this.tree.emitEvent('on-change-value', data.label)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree-ul {
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
