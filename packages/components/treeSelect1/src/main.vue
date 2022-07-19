<template>
  <amber-select v-model="input" ref="select">
    <amber-tree-fz :data="data" ref="selectTree" @on-change-value="changeValue"></amber-tree-fz>
  </amber-select>
  <!-- <amber-select :style="getWidth" class="select">
    <!-- 搜索 -->
  <!-- <amber-input> </amber-input> -->
  <!-- <amber-select-option class="options">
      <!-- 内置tree -->
  <!-- <amber-tree-fz class="options-tree" :data="data"></amber-tree-fz>
    </amber-select-option>
  </amber-select>  -->
</template>

<script>
import { findComponentUpward } from '../../../../utils/assist'

export default {
  name: 'treeSelect1',
  props: {
    // 配置项
    props: {
      type: Object,
      default: () => {
        return {
          value: 'id', // ID 字段名
          label: 'title', // 显示名称
          children: 'children' //子集字段名
        }
      }
    },
    /**选项列表数据(树形结构的对象数组) */
    data: {
      type: Array,
      default: []
    },
    /**初始值 */
    value: {
      type: Number,
      default: () => {
        return null
      }
    },
    /*可清空项*/
    clearable: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    vWidth: {
      type: String,
      default: '340px'
    }
  },
  data() {
    return {
      valueTitle: '',
      valueId: this.value, // 初始值
      filterText: '',
      selectTree: findComponentUpward(this, 'AmberSelect'),
      input: '请选择'
    }
  },
  computed: {
    getWidth() {
      return {
        width: this.vWidth
      }
    }
  },
  mounted() {
    this.initHandle()
  },
  methods: {
    changeValue(value) {
      console.log(value, 'calue')
      console.log(this.selectTree)
      this.input = value
      this.$refs.select.display()
      if (this.selectTree) {
        console.log(this.selectTree.selectVal)
        this.selectTree.selectVal = value
      }

      /* selectVal 拿到这个组件的这个值 */
    },
    // 初始值
    initHandle() {
      if (this.valueId) {
        // this.valueTitle = this.$refs.selectTree.$vNode.cloneData(this.valueId).data[this.props.label] // 初始化显示
        // console.log(this.valueTitle)
        // console.log("sss")
      }

      console.log(this.$refs.selectTree)
    }
  }
}
</script>
