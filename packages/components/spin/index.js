import Spin from './src/main.vue'

Spin.install = (Vue) => {
  Vue.component(Spin.name, Spin)
}

export default Spin
