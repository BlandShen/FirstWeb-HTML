# sass
sass -i命令行使用  
变量定义：$name:width;  
变量使用： $name  
如果变量做选择器，要加#{}  
可以嵌套(属性嵌套，选择器嵌套)  
&引用父元素  
ep: &:hover{} &-header{}  
@mixin 名字（形参）{}  
@include 名字（实参）  
@import 'base'导入另一scss文件  
@extend 继承属性  

加减乘除：1000px+100  
1000px-100  
100*9px  
(100px)/5  
abs() round() ceil() floor()  percentage() min() max()  

## str
字符串拼接  
clear  
大小写转换  
to-lower-case()  
to-upper-case()  
str-length()  
str-index("hello","e")索引从1开始  
str-insert()  

## color
color:lighten(颜色,20%)更浅/darken(同前)更深  
color:opacify(颜色,.3)更不透明  
color:transparentize(颜色,.3)更透明  

## list
length()列表长度  
index()返回索引  
nth(5px 10px,2)取出索引对应的值  
append(5px 10px,10px)列表后追加  
join(5px 5px,10px 10px,comma)合并两列表，逗号分隔  

## map
$m:(light:#fff,dark:#000)  
map-get($m,light);取map里键为light的值(获取val)  
map-keys($m);  
mao-values($m);  
map-has-key($m,light);  
map-merge($m,(gray:#ccc));合并map  
map-remove($m,light);移除  

## function
```
@function foo($key){
    if($key == 0)
    @return red;
}
color: foo(0);
```
### 循环
for 适用于数字循环  
through包含5,to不包含5
```
@for $var from 1 to 5{
    .div-content-#{$var}{
        width:$var+"px";
    }
}
```
each 适用于数组循环
```
$lista: a b c d;
@each $var in $lista{
    .div-#{$var}{
        background:#000;
    }
}
```
while
```
$i:0;
@while ($i<10){
    .div-#{$i}{
       background:#fff;
    }
    $i:$i-1;
}
```
