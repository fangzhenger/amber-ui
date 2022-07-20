<template>
  <amber-select v-model="input" ref="select">
    <amber-tree-fz :data="data"  @on-change-value="changeValue"></amber-tree-fz>
  </amber-select>
</template>

<script>
export default {
  name: 'treeSelect1',
  props: {
    /**选项列表数据(树形结构的对象数组) */
    data: {
      type: Array,
      default: []
    },
    vWidth: {
      type: String,
      default: '340px'
    }
  },
  data() {
    return {
      input: '请选择'
    }
  },
  mounted() {
  },
  methods: {
    changeValue(value) {
      this.input = value
      this.$refs.select.display()
    },
  }
}
</script>
