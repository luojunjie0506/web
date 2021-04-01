let name = '小明'
let age = 18
let flag = true
function sum(num1, num2) {
  return num1 + num2
}
if(flag) {
  console.log(sum(20,30));
}

// 因为模块化,这里面的方法和变量外部不能使用,所以要使用export导出给别人使用
// 导出方式一:
export {
  flag,sum
}

// 导出方式二:
export let num1 = 1000
export let heigth = 2

// 导出函数或类
export function mul(num2,num3) {
  return num2 + num3
}

export class Person {
  fly() {
    console.log('我会飞');
  }
}

// export default 使用这个导出时,导入的人可以自己命名该变量或方法,但是导入或导出时有且只有一个变量或参数
// const address = '北京'
// export default address

export default function(argument) {
  console.log(argument);
}