# TreeSelect1 树选择1

### 示例
::: demo
```html
    <div id="app">
      <tree-select1 :data="data"/>
    </div>
      
<script>
   export default {
  data() {
    return {
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
}
   }
</script>

<style lang="stylus" scoped >
  #app{
    /* font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;  */
  }
</style>

```
:::

