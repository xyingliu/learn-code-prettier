/*
 * @Author: your name
 * @Date: 2022-02-14 16:20:12
 * @LastEditTime: 2022-02-14 16:47:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3/Users/xyingliu/code/learn/系统学习/code-prettier/src/index.js
 */
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null;
  }

  // TODO: Don't use random in render
  let num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, "");

  return ( <
    div className = "HelloWorld"
    title = {
      `You are visitor number ${num}`
    }
    onMouseOver = {
      onMouseOver
    } >
    <
    strong > {
      " "
    } {
      greeting.slice(0, 1).toUpperCase() +
        greeting.slice(1).toLowerCase()
    } {
      " "
    } <
    /strong>{" "} {
      greeting.endsWith(",") ? (
        " "
      ) : ( <
        span style = {
          {
            color: "grey",
          }
        } >
        {
          " "
        }
        ", " {
          " "
        } <
        /span>
      )
    } {
      " "
    } <
    em > {
      greeted
    } < /em> {silent ? "." : "!"}{" "} <
    /div>
  );
}