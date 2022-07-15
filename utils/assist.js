/**
 * 组件的通信：findComponents
 * findComponents组件最终都是返回组件的示例，进而可以读取或者调用该组件的数据和方法
 * @param {*} context 当前上下文 比如要基于哪个组件来向上寻找，一般是基于当前组的组件，也就是传入this
 * @param {*} componentName 要找的组件的name
 * @returns
 */

// 由一个组件,向上找到最近的指定组件（实例）
// 与dispatch 不同的是 findConponentUpward 是直接拿到实例，而非通过事件通知组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let { name } = parent.$options
  // while 语句里不断向上覆盖当前的parent对象，通过判断组件(即parent)的name与传入componentName是否一致，直到找到最近的一个组件为止
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export { findComponentUpward }

// 有一个组件，向上找到所有的指定组件
function findComponentsUpward(context, componentName) {
  const parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  }
  return []
}
export { findComponentsUpward }

// 有一个组件,向下找到最近的指定组件
function findComponentDownward(context, componentName) {
  const childrens = context.$children // 得到当前组件的所子组件
  let children = null

  // 找到有没有匹配到的组件name,如果没有找到，继续递归找每个$children的$children ，直到找到最近的一个位置
  if (childrens.length) {
    for (const child of childrens) {
      const { name } = child.$options

      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}
export { findComponentDownward }

function typeOf(obj) {
  // 使用toString 检测对象类型：Object.prototype.toString()，需要Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用
  const { toString } = Object.prototype
  const map = {
    '[Object Boolean]': 'boolean',
    '[Object Number]': 'number',
    '[Object String]': 'string',
    '[Object Function]': 'function',
    '[Object Array]': 'boolarrayean',
    '[Object Date]': 'date',
    '[Object RegExp]': 'regExp',
    '[Object Undefind]': 'undefined',
    '[Object Null]': 'null',
    '[Object Object]': 'object'
  }
  // map[] 判断map 中是否含有以上类型
  return map[toString.call(obj)]
}

function deepCopy(data) {
  const t = typeOf(data)
  let o
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }
  // deepCopy函数 会递归地对数组或者对象进行逐一判断，如果某项是数组或者对象，再拆分继续判断，而其他类型就直接复制了
  if (t === 'array') {
    for (let i = 0; i < data.length; i += 1) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (const i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export { deepCopy }
