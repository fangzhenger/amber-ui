<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    >
    </tree-node>
  </div>
</template>

<script>
import { deepCopy } from '../../../../utils/assist.js'
import TreeNode from './node.vue'

export default {
  name: 'AmberTreeFz',
  components: {
    TreeNode
  },
  // 接收父组件传过来的数据
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.getTreeList()
  },
  watch: {
    data() {
      this.getTreeList()
    }
  },
  computed: {},
  data() {
    return {
      cloneData: []
    }
  },
  methods: {
    getTreeList() {
      // 为了在tree.vue组件中不破坏使用者传递的源数据dataSource,将在下面克隆一份数据(cloneData)
      this.cloneData = deepCopy(this.data)
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data)
    }
  }
}
</script>
