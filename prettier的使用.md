<!--
 * @Author: lxying
 * @Date: 2022-02-14 16:31:40
 * @Description: prettier的使用过程
 * @FilePath: /vue3/Users/xyingliu/code/learn/系统学习/code-prettier/prettier的使用.md
-->

### 如何使用 prettier

##### 安装 Prettier Extention

##### 手动格式化

1.  mac： CMD + Shift + P -> Format Document
    WIndows：Ctlr + Shift + P -> Format Document
2.  选择格式化规则：Prettier
    在什么样的后缀文件上使用，这种类型的文件要分别设置一次才可以产生上面的设置
3.  保存文件时自动格式化
    打开 VS Code 的设置界面
    Mac：CMD + ,
    Windows：Ctrl + ,
4.  提交代码的时候自动执行格式化
    - 四种方法：
      - lint-staged，
      - pretty-quick
      - pre-commit
      - precise-commits

##### lint-staged 的使用

###### 安装：

- 安装方法一：

```
npm install husky
npm install lint-staged
```

- 安装方法二：
  这一行就可以安装 husky 和 lint-stage，并且配置好 husky。

```
npx mrm lint-staged
```

- package.json 的配置项具体如下：

```
"devDependencies": {
    "husky": "^7.0.4",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,css,json,md}": [
      "prettier --write",
      "git add"
    ]
  }
```
