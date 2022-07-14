module.exports = {
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  rules: {
    'vue/no-multiple-template-root': 'off', // 关闭模板根不允许使用指令v-for校验
    'vue/no-use-v-if-with-v-for': 'off', // 关闭模板根不允许使用指令v-if校验
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off'
  }
}
