<template>
  <div class="amber-container">
    <!-- 加载1 -->
    <span :class="['amber-container-spin1', getSize]" v-if="this.type === 'spin1'">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </span>

    <!-- 加载2 -->
    <span class="amber-container" v-if="this.type === 'spin2'">
      <span :class="['amber-container-spin2',getSize]"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AmberSpin',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      spinName: 'amber-container-spin'
    }
  },
  computed: {
    getSize() {
      if (this.type === 'spin1') {
        return this.spinName + '1-' + this.size
      }
      if(this.type === 'spin2'){
        return this.spinName + '2-' + this.size
      }
    },
    getType() {
      if (this.type === 'spin2') {
        console.log('spin2')
      }
    }
  },
  created() {}
}
</script>

<style></style>
