<template>
  <amber-select :style="getWidth">
    <!-- 搜索 -->
    <!-- <amber-input> </amber-input> -->
    <amber-select-option>
      <!-- 内置tree -->
      <amber-tree :data="data"></amber-tree>
    </amber-select-option>
  </amber-select>
</template>

<script>
export default {
  name: 'treeSelect1',
  props: {
    data: {
      type: Array,
      default: []
    },
    vWidth: {
      type: String,
      default: '340px'
    }
  },
  computed: {
    getWidth() {
      return {
        width: this.vWidth
      }
    }
  }
}
</script>
