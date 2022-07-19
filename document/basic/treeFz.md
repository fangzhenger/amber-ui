# Tree 树形控件fz

### 基础用法
:::demo
```html
<amber-tree-fz :data="data"></amber-tree-fz>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "一级菜单1",
            children: [
              {
                label: "二级菜单1-1",
                children: [
                  {
                    label: "三级菜单 1-1-1",
                  },
                  {
                    label: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                label: "二级菜单1-2",
                children: [
                  {
                    label: "三级菜单 1-2-1",
                  },
                  {
                    label: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "一级菜单2",
            
            children: [
              {
                label: "二级菜单2-1",
                children: [
                  {
                    label: "三级菜单 2-1-1",
                  },
                  {
                    label: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                label: "二级菜单2-2",
                children: [
                  {
                    label: "三级菜单 3-2-1",
                  },
                  {
                    label: "三级菜单 3-2-2",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>

```
:::


### 可选择
适用于需要选择层级时使用
:::demo
```html
<amber-tree-fz :data="data"  show-checkbox ></amber-tree-fz>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "一级菜单1",
            children: [
              {
                label: "二级菜单1-1",
                children: [
                  {
                    label: "三级菜单 1-1-1",
                  },
                  {
                    label: "三级菜单 1-1-2",
                  },
                ],
              },
              {
                label: "二级菜单1-2",
                children: [
                  {
                    label: "三级菜单 1-2-1",
                  },
                  {
                    label: "三级菜单 1-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "一级菜单2",
            
            children: [
              {
                label: "二级菜单2-1",
                children: [
                  {
                    label: "三级菜单 2-1-1",
                  },
                  {
                    label: "三级菜单 2-1-2",
                  },
                ],
              },
              {
                label: "二级菜单2-2",
                children: [
                  {
                    label: "三级菜单 3-2-1",
                  },
                  {
                    label: "三级菜单 3-2-2",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>

```
:::


