// 由一个组件,向上找到最近的指定组件
/**
 * 组件的通信：findComponents
 * findComponents组件最终都是返回组件的示例，进而可以读取或者调用该组件的数据和方法
 * @param {*} context 当前上下文
 * @param {*} componentName
 * @returns
 */

function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let { name } = parent.$options

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export { findComponentUpward }

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

