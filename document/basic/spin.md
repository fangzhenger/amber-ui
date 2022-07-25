# spin 加载中

### Spin1
:::demo

```html
<div class="app">
  <amber-spin size="small" class="amber-spin" type="spin1" />
  <amber-spin class="amber-spin" type="spin1"/>
  <amber-spin size="large" class="amber-spin" type="spin1" />
</div>
<script></script>
<style>
  .app {
    display: flex;
    justify-content: flex-start;
  }
  .amber-spin {
      margin-left: 20px;
    }
</style>
```

:::

### Spin2
::: demo
```html
<div class="app">
  <amber-spin  class="amber-spin" type="spin2" size="small"/>
  <amber-spin  class="amber-spin" type="spin2" />
  <amber-spin  class="amber-spin" type="spin2" size="large"/>
</div>
<script></script>
<style>
  .app {
    display: flex;
    justify-content: flex-start;
  }
  .amber-spin {
      margin-left: 20px;
    }
</style>
```

:::



#### Spin Attributes


| 参数 | 说明 | 类型 | 是否必要 | 可选值 |默认值 |
| --- | ---  | --- |  ---    | --- |--- |
| size | 大小 | string | 否 | default/small/large |default |
| type | 类型 | string | 是 | spin1/spin2




#### Spin Active

| name | 说明 | 返回值 |
| --- | ---  | ---  | 
