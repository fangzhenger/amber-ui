<template>
  <div class="amber-tree-select" :style="getTreeSelectWidth">
    <!-- 选择框 -->
    <div>
      <section class="amber-section-box" @click="isShow = !isShow" ref="amberSectionBox">
        <div class="amber-select">
          <!-- placeholder + 其他框 -->
          <div class="amber-select-selector" @mouseleave="onLeaveHandle">
            <span class="amber-select-selector-search">
              <input
                type="search"
                v-bind="$attrs"
                class="amber-select-selector-search-input"
                v-model="input"
                @input="handlerInpput"
                @mouseenter="onEnterHandle"
              >
               <!-- 搜索图标 -->
                <span class="amber-select-arrow">
                  <amber-icon
                    v-if="!isShow && !hasValue"
                    icon-class="xiangxiajiantou"
                    class="amber-select-arrow-icon"
                  ></amber-icon>
                  <amber-icon
                    v-if="isShow && !hasValue"
                    icon-class="sousuo_o"
                    class="amber-select-arrow-icon"
                  ></amber-icon>
                </span>
                  <!-- 鼠标悬在上面 出现的图标 -->
                <a href="javascript:void(0);" @click="resetHandle" v-if="hasValue">
                  <amber-icon
                      class="amber-select-selector-search-errorIcon"
                      icon-class="error"
                  ></amber-icon>
               </a>
              </input>
            </span>
          </div>
        </div>
      </section>
      <div class="amber-section-selectList" v-if="isShow" ref="amberSectionBox">
        <!-- 这里循环的时候treeList的值 -->
        <tree-select-node v-for="(item, index) in cloneData" :key="index" :data="item">
        </tree-select-node>
      </div>
    </div>
    <!-- 下拉框 -->
  </div>
</template>

<script>
import { deepCopy } from '../../../../utils/assist'
import TreeSelectNode from './node.vue'

export default {
  name: 'AmberTreeSelect',
  components: {
    TreeSelectNode
  },
  // 接收父组件传过来的数据
  props: {
    vWidth: {
      type: String,
      default: '340px'
    },
    // 为了在tree.vue组件中不破坏使用者传递的源数据dataSource,将在下面克隆一份数据(cloneData)
    dataSource: {
      typoe: Array,
      default() {
        return []
      }
    },
    value: [String, Number]
  },
  beforeRouteLeave(to, from, next) {
    this.$destroy()
    next()
  },
  mounted() {
    // mounted 初始化页面完成后，在对html 的dom节点进行一些需要的操作组件
    // 添加点击事件监听 document.addEventListener,假设点击区域不在改改区域上，关闭弹窗
    // this.init()
    window.addEventListener('click', this.init, false)
  },
  // 组件生产时
  created() {
    this.getTreeList()
  },
  // 监听data改变时
  watch: {
    data() {
      this.getTreeList()
    },
    input: {
      immediate: false,
      handler(newValue) {
        this.input = newValue
      }
    }
  },
  computed: {
    getTreeSelectWidth() {
      return {
        width: this.vWidth
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.init, false)
  },
  destroyted() {
    window.removeEventListener('click', this.init)
    console.log('销毁成功')
  },
  data() {
    return {
      isShow: false,
      hasValue :false,
      cloneData: [],
      input: '',
      tempTreeData: []
    }
  },
  methods: {
    getSelectStatus() {
      this.isShow = !this.isShow
    },
    getTreeList() {
      this.cloneData = deepCopy(this.dataSource)
      // 用来存储源数据 方便后续使用
      this.tempTreeData = deepCopy(this.dataSource)
    },
    init() {
      window.addEventListener(
        'click',
        (e) => {
          const { amberSectionBox } = this.$refs
          // 判断获取的节点是否是该页面的节点，否则会监听到全局的节点
          // const { className } = e.target
          if (amberSectionBox && !amberSectionBox.contains(e.target)) {
            this.isShow = false
          }
        },
        true
      )
    },
    handlerInpput(e) {
      // 每次输入查询条件的时候 都需要还原一下源数据 重新搜索
      this.cloneData = deepCopy(this.tempTreeData)
      const result = this.rebuildData(this.input, this.cloneData)
      // 如果有值 就展示出来
      if (result.length) {
        this.cloneData = result
      } else {
        this.cloneData = []
      }
    },
    // 嵌套数组查询数据
    /**
     * @value 要查询的值{string}
     * @arr  数据源{Array}
     */
    rebuildData(value, arr) {
      let newarr = []
      arr.forEach((element) => {
        // 第一层 先判断最外面一层
        if (element.children && element.children.length) {
          // 首先先查第级的
           if(element.label.indexOf(value)>-1){
            const obj={
              ...element
            }
            newarr.push(obj)
           }else{
              const ab = this.rebuildData(value, element.children)
              const obj = {
                ...element,
                children: ab
              }
              if (ab && ab.length) {
                newarr.push(obj)
              }
           }

        } else {
          if (this.trimAll(element.label).indexOf(value) > -1) {
            newarr.push(element)
          }
        }
      })
      return newarr
    },
    // 去除所有字符串
    trimAll(ele) {
      return ele.split('').join('')
    },
    resetHandle(){
      this.input =''
      this.hasValue = false

    },
    // 鼠标进入
    onEnterHandle(e){
      const value = e.target.value
       if(value){
        this.hasValue = true
       }
    },
    // 鼠标移除
    onLeaveHandle(){
        this.hasValue = false
    }
  }
}
</script>
