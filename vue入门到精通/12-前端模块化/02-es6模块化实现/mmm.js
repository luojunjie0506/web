// 模块开发下,要使用其他模块的变量和方法时,则需要导入其他模块导出的东西
import {flag,heigth,mul,num1,Person,sum} from './aaa.js'

// 统一全部导入
// import * as aa from './aaa.js'
// 取导入的变量
// console.log(aa.flag);

if(flag) {
  console.log('我是天才');
  console.log(sum(500,1000));
}

console.log(heigth,num1);

console.log(mul(50,10)); 

const p = new Person()
p.fly()

// 导入使用export default导出的变量或参数
import adr from './aaa.js'
adr('你好')