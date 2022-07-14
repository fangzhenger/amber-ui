# TreeSelect 树选择

树形选择控件

## 何时使用

类似 Select 的选择控件,可选择的数据结构是一个树形结构时,可以使用 TreeSelect,如公司层级、学科系统、分类目录等

### 基础用法

::: demo

```html
<amber-tree-select
  :dataSource="data"
  v-model="value"
  placeholder="请输入关键词"
></amber-tree-select>
<script>
  export default {
    mounted() {
    },
    data() {
      return {
        value: '123',
        data: [
          {
            label: '一级菜单1',
            expand: true,
            children: [
              {
                label: '二级菜单1-1',
                expand: true,
                children: [
                  {
                    label: '三级菜单 1-1-1'
                  },
                  {
                    label: '三级菜单 1-1-2'
                  }
                ]
              },
              {
                label: '二级菜单1-2',
                children: [
                  {
                    label: '三级菜单 1-2-1'
                  },
                  {
                    label: '三级菜单 1-2-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级菜单2',
            expand: true,
            children: [
              {
                label: '二级菜单2-1',
                expand: true,
                children: [
                  {
                    label: '三级菜单 2-1-1'
                  },
                  {
                    label: '三级菜单 2-1-2'
                  }
                ]
              },
              {
                label: '二级菜单2-2',
                children: [
                  {
                    label: '三级菜单 3-2-1'
                  },
                  {
                    label: '三级菜单 3-2-2'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      // inputHandle() {
      //   // console.log('input', this.value)
      // }
    }
  }
</script>
```

:::
