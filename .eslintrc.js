module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    "vue/require-valid-default-prop": 0,
    semi: [2, "always"], // 语句强制分号结尾
    "no-irregular-whitespace": 0, // 不能有不规则的空格
    "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
    "no-multiple-empty-lines": [
      2,
      {
        max: 1
      }
    ], // 空行最多不能超过1行
    "no-trailing-spaces": 2, // 一行结束后面不要有空格
    "no-undef-init": 2, // 变量初始化时不能直接给它赋值为undefined
    "no-underscore-dangle": 1, // 标识符不能以_开头或结尾
    "no-var": 1, // 禁用var，用let和const代替
    camelcase: 2, // 强制驼峰法命名
    "consistent-this": [2, "that"], // this别名
    "default-case": 2, // switch语句最后必须有default
    "new-parens": 2, // new时必须加小括号
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ], // 缩进风格
    "prefer-const": 2, // 首选const
    quotes: [2, "double"], // 引号类型 `` "" ''
    "no-empty": 2, // 块语句中的内容不能为空
    "no-use-before-define": 2, // 使用前未定义
    "no-unused-vars": 2, // 变量定义后未使用
    "no-extra-semi": 2, // 多余的分号
    "comma-dangle": [2, "never"], // 定义数组或对象最后多余的逗号
    "no-dupe-args": 2, // 参数重复
    "no-dupe-keys": 2, // 对象属性重复
    "no-duplicate-case": 2, // case重复
    "no-invalid-regexp": 2, // 无效的正则
    "space-before-function-paren": 0,
    "no-func-assign": 2, // 函数被赋值
    "valid-typeof": 2, // 必须使用合法的typeof的值
    "no-unreachable": 2, // 不可能执行到的代码
    "no-shadow-restricted-names": 2, // 关键词与命名冲突
    "no-undef": 0, // 不能有未定义的变量
    "no-native-reassign": 2, // 禁止覆盖原生对象
    "no-multi-spaces": 2, // 不允许多个空格
    "consistent-return": 0, // 函数返回值可能是不同类型
    "no-lone-blocks": 2, // 多余的{}嵌套 禁止不必要的嵌套块
    "no-loop-func": 0, // 禁止在循环体中定义函数
    "no-self-compare": 2, // 不允与自己比较作为条件
    "no-redeclare": [
      2,
      {
        builtinGlobals: true
      }
    ], // 不允许重复声明变量
    "no-with": 2, // 禁用with
    "no-const-assign": 2, // 禁止修改const声明的变量
    "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    curly: 2 // if()、else、while()、for()代码块必须使用{}包围
  }
};
