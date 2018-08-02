# ES6

js中变量定义和函数定义都会都会提升到最前面。

立即执行函数 (function(形参){  函数体  })(实参)  
不用var声明相当于全局变量，函数中执行后才会定义

## 闭包
 1.内部函数可以访问外部函数的局部变量 2.可以完成变量在内存中的长时间保存（闭包过多造成内存溢出）  
通过return 内部函数，外部可以通过执行return返回的内部函数，完成对局部变量的访问

## let 定义
let定义的变量不在window下，无法通过this调用
let生成块级作用域  
不存在变量提升，作用域内变量定义前的区域都不可用这个变量，称为暂时性死区  
定义一个变量第二次报错  

## 解构赋值
数组的解构赋值 var [a,b,c]=['a','b','c']  
对象的解构赋值 var {name,age} ={name:"xiaoming",age:"20"}   
var {name:a,age:b} ={name:"xiaoming",age:"20"}别名为a,b  
字符串解构赋值 var [a,b,c]= "QAQ";  

函数体内 通过arguments可以不写形参，arguments就是参数   
1.通过解构，完成变量互换 var [a,b] = [b,a];  
2.a=[b,b=a][0];  

## 扩展运算符
 ...arg代替剩余参数，arg本身为一个数组  
如果arr为一个数组，...arr为数组内所有元素  
通过arr2 =[...arr]可以完成数组深克隆  
[...arr1,...arr2]一维数组合并  
也可以合并对象，后面的同名键值对会覆盖前面的（半深克隆）  
也可以和解构一起用  
扩展运算符要放在参数最后位置  
***
b.indexOf(a) 检索字符串a在b中首次出现的位置（索引值），没有输出则-1  
b.includes(a)返回布尔型,b在a中存不存在  
startswith endswith  
str.padStart(10,'xy') 前面以xy填充至十位  
str.padEnd(10,'xy') 同理  
str.repeat(2)重复两次
***
Number.isFinite()判断是否为数字
Number.isNaN()判断是否为NaN
注意window下和Number的isNaN的区别
Number.isSafeInteger(Math.pow(2,53)-1);
Number.MAX_SAFE_INTEGER()
Number.MIN_SAFE_INTEGER()
Math.trunc()
Math.sign()返回符号，正数1,复数-1, 0
***
函数名.length为没有默认值的参数个数，只计算值第一个有默认值的参数之前
函数名.name返回函数名
***
##'use strict'
1.严格模式下，变量必须显式声明
2.this无法指向window 构造函数必须new
3.函数不能有重名参数
4.禁止使用with语句
5.arguments.callee()
6....
##箭头函数
let fun =(a,b) => {a+b};
箭头函数下的this指向函数所在作用域
箭头函数里没有arguments,但可以用扩展运算符...arg
