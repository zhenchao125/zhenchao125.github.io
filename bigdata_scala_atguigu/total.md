# 第 1 章 Scala 概述

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546646288.png)

# 1.1 为什么要学习 Scala

1. Spark 新一代内存级大数据计算框架，是大数据的重要内容。

2. <my>Spark 就是使用 Scala 编写的。因此为了更好的学习 Spark, 需要掌握 Scala 这门语言。</my>

3. Spark 的兴起，带动 Scala 语言的发展！

--- 

Scala combines object-oriented and functional programming in one concise, high-level language.

Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries.

---

- Groovy 创始人 James Strachan 曾经说过：
 > 我认为将来可能替代Java的就是Scala 。它实在太让我印象深刻了。我甚至可以诚实地说，如果有人在2003年把那本《Programming in Scala》拿给我看了的话，那我根本就不会再去发明Groovy了。
 
- JavaOne 会议期间，在一个参加的讲座中有人向 Java 之父 James Gosling 提了一个有意思的问题：
 > 除了Java之外，你现在还使用JVM上的那些语言？
 > Java之父的回答很迅速同时也很让人意外: Scala
 
# 1.2 Scala 语言诞生小故事

联邦理工学院的马丁·奥德斯基（Martin Odersky）于2001年开始设计Scala。

马丁·奥德斯基是编译器及编程的狂热爱好者，长时间的编程之后，希望发明一种语言，能够让写程序这样的基础工作变得高效，简单。

所以当接触到 JAVA 语言后，对 JAVA 这门便携式，运行在网络，且存在垃圾回收的语言产生了极大的兴趣，所以决定将函数式编程语言的特点融合到 JAVA 中，由此发明了两种语言（Pizza & Scala）。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543491152.png)


Pizza和Scala极大地推动了Java编程语言的发展。

- jdk5.0 的泛型，for循环增强, 自动类型转换等，都是从 Pizza 引入的新特性。

- jdk8.0 的类型推断，Lambda 表达式就是从 Scala 引入的特性。

Jdk5.0 和 Jdk8.0 的编辑器就是马丁·奥德斯基写的，因此马丁·奥德斯基一个人的战斗力抵得上一个 Java 开发团队。
# 1.3 Scala 和 Java 以及 JVM 的关系

一般来说，学 Scala 的人，都会 Java，而 Scala 是基于 Java 的，因此我们需要将Scala 和 Java 以及 JVM 之间的关系搞清楚，否则学习 Scala 你会蒙圈。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543491361.png-atguiguText)

# 1.4 Scala 语言特点

Scala 是一门以 Java 虚拟机（JVM）为运行环境并将面向对象和函数式编程的最佳特性结合在一起的<my>静态类型编程语言</my>。 

1. Scala 是一门<my>多范式</my>(multi-paradigm) 的编程语言，<my>Scala 支持面向对象和函数式编程</my>。

2. <my>Scala 源代码(.scala)会被编译成 Java 字节码(.class)，然后运行于 JVM 之上，并可以调用现有的 Java 类库，实现两种语言的无缝对接。</my>

3. Scala 单作为一门语言来看，非常的简洁高效。（三元运算，`++ ，--` 都取消了）

4. Scala 在设计时，马丁·奥德斯基是参考了 Java 的设计思想，可以说 Scala 是源于 Java，同时马丁·奥德斯基也加入了自己的思想，将函数式编程语言的特点融合到 JAVA 中, 因此，对于学习过 Java 的同学，只要在学习 Scala 的过程中，搞清楚Scala 和 Java 相同点和不同点，就可以快速的掌握 Scala 这门语言。

5. 快速有效掌握Scala的三点建议 
 - 学习Scala的特有的语法 
 - 区别Scala和Java 
 - 如何规范使用Scala


# 1.5 Scala 应用趋势

Scala 是个通用的编程语言。目前其 Web Framework Play 已经在很多企业得到应用。

Scala 的 Akka 也被不少企业应用于大型分布式应用的开发。

<my>大数据领域的新星Spark就是用Scala编写的。</my>

Twitter 内部应用大量使用 Scala。在国内，使用 Scala 的公司还不是很多。但可以预见，Scala 将会越来越流行。虽然 Java 8 的一些新特性和 Scala 很相似，但也有它的局限。# 第 2 章 Scala 开发环境搭建

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543492010.png-atguiguText)
# 2.1 Window 下搭建开发环境

## 步骤1: 确保 JDK8 安装成功, 并成功配置环境变量:`JAVA_HOME`, `Path`

## 步骤2: 下载对应的 scala 安装文件 `scala-2.11.8.zip`

## 步骤3: 解压 `scala-2.11.8.zip`，我这里解压到`C:/software/`

## 步骤4: 配置 Scala 环境变量:`SCALA_HOME`和`Path`

```bash
SCALA_HOME: C:\software\scala-2.11.8
Path: %SCALA_HOME%\bin
```

## 步骤5: 测试

打开控制台, 输入 Scala:

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543492951.png-atguiguText)
# 2.2  Linux 下搭建开发环境

在实际开发中，我们的项目是部署到 Linux,因此，我们需要在 Linux 下搭建 scala 的环境。

# 步骤1: 下载 Scala

下载对应的 scala 的安装软件 `scala-2.11.8.tgz`

## 步骤2: 把安装包 copy 到`/opt/software`目录下

## 步骤3: 在`/opt/module/`目录下，创建目录 scala

## 步骤4: 解压

```bash
tar -zxvf scala-2.11.8.tgz.tgz -C /opt/module/scala/
```

## 步骤5: 配置环境变量

```bash
export SCALA_HOME=/opt/module/scala/scala-2.11.8
export PATH=$PATH:$SCALA_HOME/bin
```

## 步骤6: 测试

输入`scala`进入交互式环境中: 

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543494109.png-atguiguText)
# 2.3 给 IDEA 安装开发插件

默认情况下 IDEA 不支持 Scala 的开发，需要安装 Scala 插件。

可以使用在线安装. 也可以离线安装.

## 2.3.1 在线安装方式

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544109907.png-atguiguText)


## 2.3.2 离线安装方式

## 步骤1: 下载插件安装包

下载地址: https://plugins.jetbrains.com/plugin/1347-scala/versions

根据的你的 idea 版本选择合适的插件版本.

`scala-intellij-bin-2018.2.11.zip`

## 步骤2: 建议把插件的安装包安装放在 Scala 根目录下

不要解压安装包

## 步骤3: 安装 Scala 插件

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543495963.png-atguiguText)

## 步骤4: 重启 idea



# 2.4 Scala 的 Hello world 案例

# 步骤1: 创建一个 Maven 工程

# 步骤2: 引入 Scala 框架

默认下，maven 不支持 scala 的开发，需要引入 scala 框架。

点击项目-> 右键 -> add framework support... ，在下图选择scala

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543496559.png-atguiguText)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543496621.png-atguiguText)

# 步骤3: 创建项目的源文件目录

在 `main` 下创建一个文件夹作为 scala 源文件的根目录, 比如目录名: `scala`, 然后标记为源文件根目录

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543496978.png-atguiguText)


## 步骤4: 创建 Scala 的类

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543497201.png-atguiguText)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543497233.png-atguiguText)

```scala
package com.atguigu.day01object Hello {  def main(args: Array[String]): Unit = {    println("hello scala")  }}
```

## 步骤5: 运行

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543497432.png-atguiguText)

## 可能碰到的问题:

如果运行的时候找不到主类, 在`pom.xml`添加上下面的打包插件试试:


```xml
<plugins>
    <!-- 打包插件, 否则 scala 类不会编译并打包进去 -->
    <plugin>
        <groupId>net.alchim31.maven</groupId>
        <artifactId>scala-maven-plugin</artifactId>
        <version>3.4.6</version>
        <executions>
            <execution>
                <goals>
                    <goal>compile</goal>
                    <goal>testCompile</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
</plugins>
```



# 2.5 通过反编译了解 Scala 的执行流程

我们刚才创建的`Hello.scala`会被编译成两个`class`: 

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543499655.png-atguiguText)

```java
package com.atguigu.day01;

import scala.reflect.ScalaSignature;
/*
1. object 在底层会生成两个类 Hello , Hello$
2. Hello 中有个main函数，调用 Hello$ 类的一个静态对象 MODULES$

*/
public final class Hello
{
    public static void main(String[] paramArrayOfString)
    {
        Hello..MODULE$.main(paramArrayOfString);
    }
}

```

```java
package com.atguigu.day01;

import scala.Predef.;

public final class Hello$
{
    //3. Hello$.MODULE$. 对象是静态的，通过该对象调用Hello$的main函数

    public static final  MODULE$;

    static
    {
        new ();
    }
    // 4.可以理解我们在main中写的代码在放在Hello$的main,在底层执行scala编译器做了一个包装

    public void main(String[] args)
    {
        Predef..MODULE$.println("hello scala");
    }

    private Hello$()
    {
        MODULE$ = this;
    }
}
```# 2.6 Scala 程序开发注意事项

1. Scala 源文件以`.scala` 为扩展名。

2. Scala 程序的执行入口是 `main()`函数。

3. Scala 语言严格区分大小写。 

4. Scala 方法由一条条语句构成，每个语句后不需要分号(Scala语言会在每行后自动加分号)。

5. 如果在同一行有多条语句，除了最后一条语句不需要分号，其它语句需要分号。
# 2.7 关联 Scala 源码

1. 下载 Scala 源码

 https://www.scala-lang.org/download/2.11.8.html
 
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543501077.png-atguiguText)
 
2. 查看源码，选择要查看的方法或者类，输入 `ctrl + b`, 或者 `ctrl` + 左键.
 没有管理源码的时候:
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543538801.png-atguiguText)

3. 把源码 copy 到 `lib` 目录下, 然后点击 Attach sources, 选择源码的文件夹. 然后就可以看到源码了.# 2.8 查看官方文档

1. 官方在线 API 文档    

 https://www.scala-lang.org/files/archive/nightly/2.11.x/api/2.11.x/#package

2. 也可以下载离线文档
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543539200.png-atguiguText)


# 第 3 章 变量和数据类型

本章介绍 Scala 的变量和数据类型

重点了解 Scala 的数据类型和 Java 的数据类型的区别.# 3.1 注释

和 Java 一样, Scala 也有 3 种注释:

1. 单行注释 
 ```scala
 // 这是单行注释
 ```

2. 多行注释
 ```scala
 /*
  这是多行注释
 */
 ```
 
3. 文档注释
 ```scala
 
 /**
  这是文档注释, 将来可以生产在文档中
 */
 ```
 
# 3.2 变量

在 Scala 中, 有 2 个关键字可以用来声明变量: `var, val`

> 语法:

```scala
var 变量名: 变量类型 = 初始值
val 常量名: 常量类型 = 常量的值
```
> #### *注意:*

- <my>用 var 声明的是变量</my>
- <my>用 val 声明的是常量</my>

例如:

```scala
package com.atguigu.day01

object VarDemo {
  def main(args: Array[String]): Unit = {
    var n1: Int = 10
    println(n1)
    n1 = 20
    println(n1)
    val n2: Int = 100
    println(n2)
    // n2 = 200 // 错误:  n2 是常量, 所以不能赋值
    // var n3:Int // 不管是变量和常量都必须在声明的时候进行初始化, 不能先声明再初始化
    var n4 = 2 // 声明变量的时候可以不指明类型, Scala 会根据你的初始化的数据进行类型推断
    println(n4)
    println(n4.getClass.getSimpleName)  // 得到这变量的类型
  }
}
```
> #### *说明:*

- 声明变量的时候必须同时进行初始化
- 声明变量可以不指明类型, Scala 会自动根据你的初始值进行类型推导
- 类型一旦确定, 就不能修改, 证明 Scala 是强类型的语言, 这和 JavaScrip 这种弱类型语言有本质的不同



# 3.3 数据类型

在 Scala 中<my>所有的数据都可以看成对象</my>, 所以 Scala 并没有刻意的去把数据分成基本数据类型和引用数据类型, 所以也就没有所谓的包装类型了.

Scala 整体把数据分成 2 种类型:

1. 值类型(`AnyVal`)
    等同于 Java 中的基本类型, 而且编译成 `class` 之后也确实就是用的 Java 的基本数据类型来表示
    但是比 Java 的基本数据类型多了几个"边界"类型

2. 引用类型(`AnyRef`)
    等同于 Java 引用数据类型(对象类型)
    
注意: 不管是值类型还是引用数据类型都是对象, 他们都继承自`Any`这个类.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543542547.png-atguiguText)

> #### *注意:*

- 在 Scala 中类型都是用类表示的, 所以都是使用的大写字母开头

 例如: Java 中的 `int`, 在 Scala 中就是 `Int`

- 其他的也是类似

---

## 3.3.1 Scala 几个特殊类型的理解

### 1. `Unit`

表示一种"无值", 等同于 Java 中的 `void`.

<my>用作不返回任何结果的方法(函数)的返回值类型。</my>

`Unit`只有一个实例值，写成`()`。

```java
package com.atguigu.day01

object UtilDemo {
  def main(args: Array[String]): Unit = {
    val a = foo()
    println(a)  // 输出 ()
  }

  def foo(): Unit ={
    println(1)
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543543230.png-atguiguText)

### 2. `Null`

`Null` 类型只有一个实例值`null`

和 Java 中的 `null` 值等同. 用于给引用数据类型赋值, 然后释放对象进行垃圾回收.

<my>不兼容值类型.</my>

```scala
var b = 10
b = null  // 因为 b 是 Int 类型, 所以这个地方会编译错误
```

### 3. `Nothing`

`Nothing` 类型在 Scala 的类层级的最低端；

<my>它是任何其他类型的子类型。</my>

并且他没有任何的实例.

有 2 个作用:

1. 用于定义`Nil`.(`List[Nothing]`)
  后面再讲
  
2. 作为一个<my>不能正常返回值</my>的函数的返回值类型.

  ```scala
 
  def foo(): Nothing = {
  
      throw new Exception()
  }
  ```


# 3.4 值类型转换

和 Java 一样, Scala 也分自动类型转换和强制类型转换

自动转换的规则和 Java 一致, 都是能够从范围小的类型自动转换到范围大的类型.

强制类型转换与 Java 的规则不一样.

Scala 是使用<my>调用方法的方式来完成转换</my>.

```scala
package com.atguigu.day01

object ConversionDemo {
  def main(args: Array[String]): Unit = {
    var a: Int = 128
    var b: Long = a //  自动类型转换

    //var c : Short = b // 错误: 范围大的类型的值不能自动转换到范围小的类型的值
    var c: Byte = b.toByte // 强制类型转换.
    println(c)
  }
}
```

# 3.5 字符串的一些基本操作

## 3.5.1 字符串的输出

1. 字符串，通过`+`号连接
2. `printf`用法字符串，通过`%`传值。
3. 字符串，通过`$`引用

```scala
object CharPrint {

  def main(args: Array[String]): Unit = {

    var name: String = "banzhang"
    var age: Int = 18

    // 1 字符串，通过+号连接
    println(name + " " + age)

    // 2 printf用法字符串，通过 % 传值
    printf("name=%s age=%d\n",name,age)

    //3 字符串，通过$引用
    println(s"name=$name age=$age")
  }
}
```

---

## 3.5.2 值类型和字符串类型的转换

```scala
object CharPrint {

  def main(args: Array[String]): Unit = {
    var a = "125"
    println(a.toInt)
    println(a.toDouble)
    // println(a.toBoolean) // 抛出异常
    println("true".toBoolean)

  }
}
```

> #### *注意:*

- 把字符串转成数字的时候, 必须保证字符的所有内容相对要转成的数字是合法的才可以.# 3.6 标识符的命名规则

1) Scala 中的标识符声明，基本和 Java 是一致的，但是细节上会有所变化。

2）传统: 首字符为字母，后续字符任意字母和数字，美元符号，可后接下划线`_`

3) 不能单独使用`_`作为标识符

4) 普通的数学操作符也可以作为标识符.(`+-*/%`等)

5）数字不可以开头。

6）用反引号`....`包括的任意字符串，即使是关键字(39个)也可以

```
hello    // ok
hello12 // ok
1hello  // error
h-b   // error
x h   // error
h_4   // ok
_ab   // ok
Int    // ok , 因为在scala Int 是预定义的字符
Float // ok 
_   // error ,因为在scala _ 有很多其他的作用。
Abc    // ok
+*-   // ok
+a  // error
```# 第 4 章 运算符

本章介绍 Scala 中的各种运算符

# 4.1 运算符总览

Scala 的运算符和 Java 的运算符从表面看起来没有区别, 用起来也没有差别. 

但是本质上却不一样!

在 Scala 中所有的运算符都是以<my>方法的形式</my>存在的.

> 例如:

```scala
package com.atguigu.day01

object OptDemo {
  def main(args: Array[String]): Unit = {
    var a = 10
    var b = 20
    /*
    下面的两行代码完全等价
     在Scala 中 + 其实就是个方法名
     由于在 Scala 中调用方法的时候, . 和 () 可以省略
     所以 a + b 就是在调用 a 的方法: + 
     */
    var c = a + b
    var d = a.+(b)

    println(c)
    println(d)
  }
}

```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543548362.png-atguiguText)

---

## Scala 支持的运算符

1. 算术运算符
2. 赋值运算符 
3. 比较运算符(关系运算符)
4. 逻辑运算符
5. 位运算符


# 4.3 Scala 语法结构的值和类型

大家很清楚, 在 Java 中只有表达式才会有值和类型.  普通的语句, 比如 `if` 语句,  循环语句等是没有任何的类型和值的.

但是, Scala 变的比较牛逼了:

<my>在 Scala 中, 任何的语法结构都有类型和值</my>

换句话说: if 语句, 循环语句, 等这些语法结构也是有值.

这个就给我们的代码带来了大大的便利和简洁.

他们的值: <my>总是这段代码执行结束的时候最后一行代码的值</my>

```scala
package com.atguigu.day01

object SyntatDemo {
  def main(args: Array[String]): Unit = {
    var a = 1
    var b = if (a == 1) {
      10  // 因为这是最后一样代码, 所以 10 就是这个 if语句的值
    } else {
      20
    }
    println(b)  // 10
  }
}
```

> #### *注意:*

- 赋值语句的值的类型是:`Unit`, 也就是说他的值是`()` 这个和 Java 是不一样的.
  ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543551002.png-atguiguText)
# 4.2 Scala 运算符的注意点

Scala 运算符的使用规则绝大部分和 Java 是一样, 所以此处不再赘述.

我们只介绍在 Scala 中需要注意的地方

---

## 4.2.1 不提供 `++,--` 操作符

Scala 不再提供 `++,--` 操作符.

如果有自增或者自减的需求就使用复合运算符: `a += 1 或者 a -= 1`

备注: `+=, -=` 其实也是方法名.

---

## 4.2.2 关于`%`的说明

`%` 在编程中使用较多. 他的值到底是真么计算出来的呢,如果正数, 还好理解, 如果是负数呢?

记住一句话: 余数的符号和被除数一致.

可以用下面的公式来计算余数:
```
a % b= a - a/b * b
```

---

## 4.2.3 逻辑运算符

Scala 中的逻辑运算符和 Java 完全一样也分短路和不短路.

---

## 4.2.4 Scala 不提供三运算符`? : `

在 Scala 中并没有提供 `? : `, 如果有这种需求就使用 `if...else` 语句.





# 4.4 从键盘读入数据

从键盘读取数据在大数据开发中几乎是不存在的, 但是我们平常的练习中还是会用的到的,
所以我们简单了解下:

```scala
package com.atguigu.day01

// 导入类
import scala.io.StdIn

object ReadData {
  def main(args: Array[String]): Unit = {
    val name = StdIn.readLine()
    val age = StdIn.readInt()
    println("name:" + name)
    println("age:" + name)
  }

}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543552235.png-atguiguText)
# 第 5 章 流程控制

任何语言都有流程控制, Scala 当然也不例外.

Scala 的语法与 Java 稍有不同# 5.1 分支

`if`语句的使用, 大部分情况和 Java 都是一样的, 此处不再赘述.

前面说过, `if` 是有值的, 所以, 在 Scala 中写起来更加的灵活.

比如: 替换 Java 中的`? :`

```scala
package com.atguigu

object day02 {
  def main(args: Array[String]): Unit = {
    var a = 10
    // 替换Java的三元运算符
    val b = if (a > 10) 100 else 200
    println(b)
  }
}
```

> #### *注意:*

- <my>Scala 没有提供 `switch` 分支,</my> 而且一些其他的语言也都不再提供 Switch 分支.

- Scala 用更加强大的模式匹配来替换了 `switch`.

- 模式匹配涉及到的知识点较为综合，因此我们放在后面讲解
# 5.2 循环

和 Java 类似, Scala 也提供了 3 种常见循环结构:
1. `for`
2. `while`
3. `do...while`

但是语法与 Java 有较大的区别.

其实, 从本质上来说, Scala 中的`for`不是循环, 而是一种<my>遍历</my>.

# 5.2.1 for 循环

Scala 的循环使用相比 Java 比较灵活. 

## 5.2.1.1 for 循基本使用

Scale 中 `for` 循环语法:

```scala
for(i <- 表达式){
    // 循环体
}
```

> #### *说明:*

- 这里的`i`是一个变量(名字是啥无关紧要, 知道是个变量名就行了)这里不需要`val`来声明, 他的类型是由后面的表达式来决定

- 这个`for`循环语法结构会让`i`去遍历表达式的所有值.

- 至于如何遍历, 取决于表达式值的类型. 不过, 这些都是 Scala 自动完成的.

- 表达式的类型最常用的有 3 种(目前): `Range.Inclusive` , `Rang` 和 `String`

- `Rang` 表示一个范围

- 如果需要倒序, 则使用`reverse()` 方法

---

> 例如: 

```scala
package com.atguigu.day02

object ForDemo {
  def main(args: Array[String]): Unit = {
    // [1, 10] 的一个闭区间
    val r1: Range.Inclusive = 1.to(10)
    println(r1)
    for (i <- r1) {
      print(i + " ")
    }

    println()

    // [1, 10) 前闭后开的区间
    val r2: Range = 1.until(10)
    println(r2)
    for (i <- r2) {
      print(i + " ")
    }
  }

}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543558020.png-atguiguText)

> 由于在方法调用的时候, `.` 和 `()` 可以省略, 所以一般使用下面的简介形式:

```scala
package com.atguigu.day02

object ForDemo2 {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 10) {
      print(i + " ")
    }
    println()
    for (i <- 1 until 10) {
      print(i + " ")
    }
  }

}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543558265.png-atguiguText)

---

> 倒序:

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543567608.png-atguiguText)



# 5.2.1.2 `for` 遍历字符串中的字符

> 正常写法:

```scala
package com.atguigu.day02

object ForDemo3 {
  def main(args: Array[String]): Unit = {
    val s: String = "abcdef"
    for (i <- 0 until  s.length) {
      print(s(i) + " ")
    }
  }
}
```

> 简洁写法:

```scala
package com.atguigu.day02

object ForDemo3 {
  def main(args: Array[String]): Unit = {
    val s: String = "abcdef"
    for(c <- s){
      print(c + " ")
    }
  }
}
```# 5.2.1.3 退出循环

在 Scale 中没有提供`break`, `continu` 这两个会打破循环流程的关键字. 估计是因为 Scala 的发明人认为这两个关键字不够面向对象和函数式.

那么如何退出循环呢?

有 3 种方式可以退出循环:

1. <my>循环守卫(推荐)</my>

2. 使用`Breaks`对象中的`break`方法

3. 使用嵌套函数. --- 在函数中使用`return`语句.
    这种方式大家都比较好理解: 函数都结束了, 循环自然就结束了.
    
---

## 1. 循环守卫

循环守卫的意思就是在循环中加入条件表达式.

> 例如:

```scala
package com.atguigu.day02

object ForDemo4 {
  def main(args: Array[String]): Unit = {
    // 输出1 - 10之间的偶数

    for (i <- 1 to 10 if (i % 2 == 0)) { // if... 就叫循环守卫
      print(i + " ")
    }
  }

}
```

> #### *注意:*

- 循环守卫是类似于 Java 中的 `continue` 的存在, 当`if`中的条件是`false`的时候, 并不是结束整个循环.

> 那么如何彻底的不再执行循环中的代码? 需要使用一个`boolean`型的变量来配合:

```scala
package com.atguigu.day02

object ForDemo5 {
  def main(args: Array[String]): Unit = {
    var bound = false
    for (i <- 1 to 10 if !bound) {
      if(i >= 5) {
        bound = true
      }else{
        print(i + " ")
      }
    }
  }

}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543560407.png-atguiguText)

---

## 2. `Breaks`对象中的`break`方法

```scala
package com.atguigu.day02

import scala.util.control.Breaks

object ForDemo5 {
  def main(args: Array[String]): Unit = {

    for (i <- 1 to 10) {
      if(i >= 5){
        Breaks.break()
      } else {
        print(i + " ")
      }
    }
    println("循环结束了")
  }

}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543560826.png-atguiguText)

> 怎么让循环后面的代码也要执行吗?

捕捉异常!

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543561071.png-atguiguText)



# 5.2.1.4 引入变量

```scala
package com.atguigu.day02

import scala.util.control.Breaks

object ForDemo6 {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 10; j = 20; k = 30) {
      println(i + " " + j + " " + k)
    }

    // 等价于
    for (i <- 1 to 10; j = 20; k = 30) {
      println(i + " " + j + " " + k)
    }
  }

}
```# 5.2.1.5 循环嵌套

```scala
package com.atguigu.day02

object ForDemo7 {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 9; j <- 1 to i) {
      print(j + " * " + i + " = " + i * j + "\t");
      if (j == i) println
    }
  }
}
```

等价于下面的代码:

```scala
package com.atguigu.day02

object ForDemo7 {
  def main(args: Array[String]): Unit = {
    for (i <- 1 to 9) {
      for (j <- i to 9) {
        print(j + " * " + i + " = " + i * j + "\t");
      }
      println
    }
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543562337.png-atguiguText)

## 多了解一点:

其实`for()` 这里的圆括号`()`可以使用`{ }`来替换掉, 这样里面分号就可以省略了(当你使用多行的时候, 如果仍然在一行, 则不能省略)

```scala
package com.atguigu.day02

object ForDemo7 {
  def main(args: Array[String]): Unit = {
    for {
      i <- 1 to 9  // 后面的分号可以省略了
      j <- 1 to i
    } {
      print(j + " * " + i + " = " + i * j + "\t");
      if (j == i) println
    }

  }
}
```
# 5.2.1.6 循环的返回值

通过前面的学习我们已经知道任何的语法结构都有返回值, 所以`for`循环也不例外:

> 看下面的代码:

```scala
package com.atguigu.day02

object ForDemo8 {
  def main(args: Array[String]): Unit = {
    var j = for (i <- 1 to 9) i * i

    println(j)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543562686.png-atguiguText)

> #### *说明:*

- `for` 循环的默认值是`()`(`Unit`类型的唯一的一个实例)

> 在上面的例子中, 如果我们想要获取到每个`i * i`呢? 
使用关键字: `yield`

```scala
package com.atguigu.day02

object ForDemo8 {
  def main(args: Array[String]): Unit = {
    var j = for (i <- 1 to 9) yield i * i

    println(j)
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543562954.png-atguiguText)


> #### *说明:*

- 添加`yield`关键字之后, `for`循环的返回值是一个`Vector`集合.

- 每次循环都会生成`Vector`集合中的一个值.

- 这种循环也叫<my>`for`推导式</my>

- `Vector`照样可以使用`for`进行遍历循环











# 5.2.1.7 循环的步长

前面用 `to 和 until` 的时候, 默认的步长是 1, 我们可以传入第 2 个参数(`to, until` 其实就是函数而已), 来设置步长.

```scala
package com.atguigu.day02

object ForDemo9 {
  def main(args: Array[String]): Unit = {
    for(i <- 10 to (20, 2)){
      println(i)
    }
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543567326.png-atguiguText)

# 5.2.2 while 循环

`while` 循环和 Java 的基本是一致的.

```scala
package com.atguigu.day02

object WhileDemo1 {
  def main(args: Array[String]): Unit = {
    var a = 1
    while (a < 10){
      println(a)
      a += 1
    }
  }
}
```

> #### *说明:*

- `while` 返回值是`()`, 而且也不支持`yield`

- 因为 `while` 中没有返回值，所以当要用该语句来计算并返回结果时，就不可避免的使用变量，而变量需要声明在 `while` 循环的外部，那么就等同于循环的内部对外部的变量造成了影响，也就违背了函数式编程的重要思想(纯函数思想)，所以不推荐使用，而是推荐使用`for`循环。



# 5.2.3 do...while 循环

和 Java 的一样.

实际使用较少.# 第 6 章 函数式编程基础

本章来学习 Java 中没有的内容: 函数式编程

虽然从 JDK8 开始, Java 强行上了 lambda 表达式, 来模拟函数式编程. 

但是从本质上来说, Java 中的函数式编程仅仅是一种语法糖, 底层仍然是面向对象的那套东西.# 6.1 函数式编程的一些概念

## 6.1.1 函数式编程的定义

函数式编程又称泛函编程.

是一种编程范型，它将计算机运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。

函数编程语言最重要的基础是λ演算（lambda calculus）。

λ演算中最关键的要素就是函数被当作变量处理，能够参与运算。

函数式编程更加强调执行的结果而非执行过程，倡导利用若干简单的执行单元让计算结果不断演进，抽丝剥茧逐层推导复杂的运算，而不是设计一个复杂的运算过程


### 函数(function)和过程(procedure)的区别

函数和过程都会进行一系列的运算, 但是他们两个之间还是有一定的区别的.

<my>function 通过运算返回一个值，而 procedure 只执行一段代码，没有返回值</my>

---

### 6.1.2 什么是纯函数(Pure Function)

函数式编程中都喜欢追求纯函数, 那么什么样的函数才是纯函数? 

我们将满足下面 2 个条件的函数称为纯函数:

1. 函数不会产生side effect(副作用)
    
    除了返回值外，不修改程序的外部状态（比如全局变量、入参)
    
    常见的副作用:
    - 改变外部变量的值
    - 向磁盘中写入数据
    - 将页面上的一个按钮设置为可点击，或者不可点击
    
2. 引用透明
     指的是函数的运行不依赖于外部变量或“状态”，只依赖于输入的参数，任何时候只要参数相同，调用函数所得到的返回值总是相同的。
     
     <my>天然适应并发编程</my>，因为调用函数的结果具有一致性，所以根本不需要加锁，也就不存在死锁的问题。
     
     - 满足Referential Transparency的函数可以将可以将用函数计算的结果替换表达式本身，而不影响程序的逻辑。
     
     - 给定指定的参数，在任何时候返回的值都是相同的。不受其他外部条件影响。
     
> 纯函数

```scala
def sum(a,b): return a+b 
```

> 不是纯函数

```scala
int sum = 0
def plus(a,b){
  sum = a + b  // 修改了外部变量的值, 所以不是纯函数
  return sum
}
```

--- 

### 6.1.3 函数式编程的特点

正如封装、继承和多态是面向对象编程的三大特性。函数式编程也有自己的语言特性:

1. 数据不可变（immutable data):

 变量只赋值一次，如果想改变其值就创建一个新的变量。

2. 函数是第一公民（first class method）

 函数可以像普通变量一样去使用。
 
 函数可以像变量一样被创建，修改，并当成变量一样传递，返回或是在函数中嵌套函数。

3. 引用透明(referential transparency)

4. 尾递归（tail call optimization)

 函数调用要压栈保存现场，递归层次过深的话，压栈过多会产生性能问题。
 
 所以引入尾递归优化，每次递归时都会重用栈，提升性能。
 
---

### 6.1.4 函数式编程的好处
 
1. 当我们按照函数式编程的思想编写程序时，程序具有天然的模块属性，因为实现的函数为pure function，你可以任意组合这些 pure function。

2. pure function 不会产生side effect，不需要对外部的状态产生顾虑。

3. Memoization 优化

 满足引用透明的表达式（包括任意纯函数调用）满足这样一个特点，就是任意两次调用只要输入相同，其结果总是不变的。
 
 于是可以将第一次的计算结果缓存起来，遇到下一次执行时直接替换，依然能保证程序的正确性。这种优化方法称为Memoization。
 
4. 延迟求值 ( Lazy Evaluation ) 提升性能
 延迟求值是指表达式不在它被绑定到变量时就立即求值，而是在该值被用到的时候才计算求值。

 很显然，延迟求值的正确性需要纯函数的性质来保证——即在输入参数相同的情况下，无论什么时候被执行，结果总是不变的。

 延迟求值有利于程序性能的提升。
 
5. 可以使用 currying(函数) 技术进行函数封装
 curryiny 将接受多个参数的函数变换成接受其中部分参数，并且返回接受余下参数的新函数。（维基百科中的定义是接受一个单一参数的新函数，然而现实中 currying 技术的涵义被延伸了。）
 
 后面课程细讲
 
---
 
### 6.1.5 面向对象和函数编程的结合

<my>Scala 把面向对象编程和函数式编程完美的融合在一起.</my>

1. 函数式编程是从编程方式(范式)的角度来谈的，可以这样理解函数式编程把函数当做一等公民，充分利用函数支持的函数的多种使用方式.

 比如：在 Scala 当中，函数是一等公民，像变量一样，既可以作为函数的参数使用，也可以将函数赋值给一个变量. 函数的创建不用依赖于类或者对象，而在Java当中，函数的创建则要依赖于类、抽象类或者接口。

2. 面向对象编程是以对象为基础的编程方式。

3. 在 scala 中函数式编程和面向对象编程完美融合在一起了。

---

### 6.1.6 函数和方法的区别与联系

在 scala 中，方法和函数几乎可以等同(比如他们的定义、使用、运行机制都一样的)，只是函数的使用方式更加的灵活多样。

还有一点: 函数可以作为参数传递, 方法不行. 后面细讲

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543574567.png-atguiguText)












 
 # 6.2 Scala 中函数的基本语法

函数声明的基本语法:

```scala
def 函数名 ([参数名: 参数类型], ...)[[: 返回值类型] =] {
	// 语句...
	return 返回值
}

```

> #### *说明:*

- 函数声明的关键字是: `def`(definition)

- 表示函数的输入(就是参数列表), 可以没有。 如果有，多个参数使用逗号间隔

- 函数可以有指定返回值类型, 也可以不指定返回值类型

- 返回值形式1: 如果没有`=`, 这个函数的返回值类型总是`Unit`, 也即返回值是`()`, 换句话说这样的函数是没有返回值的.
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543583071.png-atguiguText)


- 返回值形式2: 如果有 `=`, 但是没有指定返回值类型, 则具体的类型是由 Scala 根据代码推导得来. 并且这个时候在函数体内<my>必须不能出现`return`语句</my>.
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543583003.png-atguiguText)

- 返回值形式3: 指定类型(`=`必须存在) 则必须返回这个类型的值, 函数体内可以用`return`显示返回值, 也可以不用`return`, 则返回的是最后一行代码的结果.
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543583357.png-atguiguText)# 6.3 函数调用过程


![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543583563.png-atguiguText)

函数调用的几个原则

1. 在编译器底层，当执行一个函数/方法时，就会开辟一个新的方法栈

2. 每个栈的空间是相互独立的，数据也是独立的

# 6.4 函数的声明和调用实操

## 案例1: 类型推导

#### 首先了解一点: 什么时候 scala 才会对我们的函数的返回值进行推断.

> <my>只有当你使用等号`=`将方法的声明和方法的主体部分区分开时</my>

```scala
package com.atguigu.day03

object FunDemo {
  def main(args: Array[String]): Unit = {
    println(sum(10, 20))
  }

  def sum(a: Int, b: Int) = {
    // return a + b  // 错误! 类型推导不能出现 return
    a + b
  }

}
```

## 案例2: 返回值类型是隐式的`Unit`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543584277.png-atguiguText)

## 案例3: 显示声明返回值是`Unit`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543584402.png-atguiguText)

## 案例4: 返回值使用`Any`

如果明确无返回值, 或者返回值类型不确定, 返回值类型就设置为`Any`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543584812.png-atguiguText)

## 案例5: 省略调用时的圆括号

如果<my>没有形参</my>, 则在调用的时候可以省略圆括号啊

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543585039.png-atguiguText)

## 案例6: 声明函数时省略圆括号

如果不需要传入参数, <my>声明函数的时候也可以省略圆括号, 但是这个时候调用就必须不能添加圆括号了.</my>

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543585188.png-atguiguText)
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543585375.png-atguiguText)

## 案例7: 参数的值不能修改

在 Scala 中, 函数参数默认是使用`val`来声明的,所以形参的值不能修改.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543585573.png-atguiguText)

## 案例8: 参数的默认值

Scala 运行形参带有默认值.

当调用函数的时候, 如果没有给这个参数传递值, 则会使用默认值, 这对那些不是必须要传值的参数很有用

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543585795.png-atguiguText)

没有默认值的参数, 我们一般称之为位置参数! 也就是说他们的值是按照位置的顺序来赋值的.

> 有一点需要注意: 如果想给位置参数赋值, 则前面的参数都必须传递数据过来赋值, 即使前面有默认值参数也不行.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543586068.png-atguiguText)

## 案例9: 命名参数

如果一个函数的参数比较多, 并且有些还是带默认值的. 我们在调用的时候根据需要有些参数不需要传值, 则可以使用<my>命名参数.</my>

命名参数: 就是指在<my>调用函数的时候</my>, 指明这个参数传递给哪个形参.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543586653.png-atguiguText)

## 案例10: 递归函数必须指明返回值类型

在递归函数执行前, 是没有办法推断出函数的返回值类型的, 所以递归函数必须指明返回值类型

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543587041.png-atguiguText)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543587202.png-atguiguText)

## 案例11: Scala 支持可变参数

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543587606.png-atguiguText)






# 6.6 惰性求值

当使用`val`(不是`var`)声明变量的时候, 在前面添加关键字`lazy`, 则这个常量的值计算将会推迟, 直到第一次访问这个常量的时候才会去计算这个常量的值.  这就是所谓的惰性求值!

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543627251.png-atguiguText)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543627360.png-atguiguText)

> #### *说明:*

- 懒值对于初始化开销很大的初始化语句很有用.还可以应对其他初始化问题, 比如循环依赖. 更重要的是他们是开发"懒数据结构"的基础

- 懒值并不是没有额外开销. 我们每次访问懒值, 都会有一个方法被调用, 这个方法将会以线程安全的方式检测该值是否已被初始化.#第 7 章 异常

作为一门比较优秀的语言, 异常处理肯定是少不了的.

Scala 的异常处理机制比 Java 改进了一些, 至少没有 Java 的异常处理机制那么令人讨厌. 比如去掉了令人生厌的受检异常

```scala
object Test {
  def main(args: Array[String]): Unit = {
    try {
      var n = 10 / 0
    } catch {
      case ex: ArithmeticException => println("发生算术异常")
      case ex: Exception => println("发生了异常1")
    } finally {
      println("finally")
    }
    println("异常处理结束")
  }
}
```

1. 我们将可疑代码封装在 `try` 块中。在`try`块之后使用了一个`catch`处理程序来捕获异常。如果发生任何异常，`catch`处理程序将处理它，程序将不会异常终止

2. Scala 的异常的工作机制和 Java 一样，但是 Scala 没有“checked(编译期)”异常，即 Scala 没有编译异常这个概念，异常都是在运行的时候捕获处理

3. 用 throw 关键字, 抛出一个异常对象. 所有异常都是 Throwable 的子类型. throw 表达式是有类型的, 就是 Nothing, 因为 Nothing 是所有类型的子类型, 所以throw 表达式可以用在需要类型的地方
  
  ```scala
  def test(): Nothing = {
    throw new Exception("不对")
  }
  ```
4. 在Scala里，借用了模式匹配的思想来做异常的匹配，因此，在catch的代码里，是一系列case子句来匹配异常。【前面案例可以看出这个特点, 模式匹配我们后面详解】

5. 异常捕捉的机制与其他语言中一样，如果有异常发生，catch 子句是按次序捕捉的。因此，在 catch 子句中，越具体的异常越要靠前，越普遍的异常越靠后，如果把越普遍的异常写在前，把具体的异常写在后，在 scala 中也不会报错，但这样是非常不好的编程风格

6. finally 子句用于执行不管是正常处理还是有异常发生时都需要执行的步骤，一般用于对象的清理工作，这点和 Java 一样

7. Scala 提供了 throws 关键字来声明异常，可以使用 throws 注解来声明异常

  ```scala
  object Test {
    def main(args: Array[String]): Unit = {
      f11()
    }
  
    @throws(classOf[NumberFormatException])
    def f11() = {
      "abc".toInt
    }
  }
```


# 8.1 类和对象

---

## 8.1.1 定义类

基本语法:

```scala
[修饰符] class 类名 {
   类体
} 
```
> #### *注意:*

- scala 语法中，类并不声明为`public`，所有这些类都具有公有可见性(即默认就是`public`)

- 一个 Scala 源文件可以包含多个类 

---

## 8.1.2 定义属性

属性是类的一个组成部分，一般是值数据类型，也可以是引用类型。

基本语法:

```scala
[修饰符] var 属性名称 [：类型] = 属性值
```
> 例如:

```scala
package com.atguigu.day03

object FunDemo4 {
  def main(args: Array[String]): Unit = {
    val p1 = new Person()
    p1.teacher = new Teacher()
    println(p1.age)
    println(p1.teacher.name)
  }
}

class Person {
  // 声明属性, 而且必须给该属性赋值
  var age = 10
  // 属性可以设置默认值:使用 _
  // 数值型的默认值: 0 布尔型的默认值是 false, 引用数据类型的默认值是 null
  var teacher: Teacher = _
}

class Teacher {
  var name = "大海哥"
}
```

---

## 8.1.3 Bean 属性

JavaBeans 规范定义了 Java 的属性是像`getXxx()`和`setXxx()`的方法。许多Java 工具（框架）都依赖这个命名习惯。

为了与Java的互操作性。将 Scala 字段加`@BeanProperty`时，这样会自动生成规范的`setXxx/getXxx`方法。

这时可以使用`对象.setXxx()` 和`对象.getXxx()`来调用属性。

```scala
package com.atguigu.day03

import scala.beans.BeanProperty

object FunDemo4 {
  def main(args: Array[String]): Unit = {
    val p1 = new Person()
    p1.teacher = new Teacher()
    println(p1.getAge())
    p1.setAge(100)
    println(p1.getAge)

  }
}

class Person {
  @BeanProperty
  var age = 10
  var teacher: Teacher = _
}

class Teacher {
  var name = "大海哥"
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543651205.png-atguiguText)

> #### *注意:*

- 访问方法的时候要不要带圆括号?  一般遵循这样的约定: 访问 `getXxx` 的时候一般不带括号, 访问`setXxx(参数)`的时候一般要带圆括号.

---

## 8.1.4 创建对象

基本语法:

```scala
val | var 对象名 [：类型]  = new 类型()
```
> #### *说明:*

- 如果我们不希望改变对象的引用(即：内存地址)，应该声明为`val`性质的，否则声明为`var`，
- scala 设计者推荐使用`val`，因为一般来说，在程序中，我们只是改变对象属性的值，而不是改变对象的引用。

---

## 8.1.5 方法

Scala 中的方法其实就是函数，只不过一般将对象中的函数称之为方法。声明规则请参考函数式编程中的函数声明。

---

## 8.1.6 构造器

和 Java 一样，Scala 构造对象也需要调用构造方法，并且可以有任意多个构造方法。

Scala 类的构造器包括：<my>主构造器和辅助构造器</my>

> 基本语法:

```scala
class 类名(形参列表) {  // 主构造器
   // 类体
   def  this(形参列表) {  // 辅助构造器
   }；
   def  this(形参列表) {  //辅助构造器可以有多个...
   }
} 
```

> #### *说明:*

- 主构造器和 Java 有很大不同. 主构造器位于类名之后.

- 辅构造器和 Java 类似. 只是在 Scala 中辅构造器的名字统一用`this`来表示.

- 主构造器只能有一个, 辅构造器可以有多个.

- 在创建对象的时候, 和 Java 一样也是通过传入的参数来选择构造器.

- 调用主构造器的时候, 会执行类中的所有语句(当然不包括类中定义的方法.)

### 案例1: 调用主构造函数

```scala
package com.atguigu.day04

object ObjDemo {
  def main(args: Array[String]): Unit = {
    val p = new Person("李四", 20)
    println(p.name + " " + p.age)
  }
}

class Person(inName: String, inAge: Int) { // 主构造器
  var name = inName
  var age = inAge
  // 类内也可以直接写代码,在调用主构造函数的时候会执行.
  // 有点类似 Java 中的构造代码块
  println("ok")

}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543653570.png-atguiguText)


### 案例2: 辅构造函数

```scala
package com.atguigu.day04

object ObjDemo {
  def main(args: Array[String]): Unit = {
    val p = new Person("李四", 30)
    println(p.name + " " + p.age)
  }
}

class Person { // 主构造器如果没有参数可以省略圆括号
  var name: String = _
  var age: Int = _
  println("ok")

  // 辅构造器
  def this(name: String) {
    // 构造器第一行必须要能调用到主构造器
    this()
    this.name = name

  }

  // 辅构造器
  def this(name: String, age: Int) {
    this(name)
    this.age = age
  }

  def sayHello(): Unit = {
    println("hello: " + this.name)
  }
}
```

> #### *说明:*

- 如果不想让外界通过主构造器创建对象, 可以把主构造器私有: 在类名和圆括号中间添加一个关键字`private`

- 辅构造器仍然可以调用私有的主构造器. 私有之后只是不能在外界调用而已.

---

## 8.1.7 构造器的形参的说明

Scala 中类的构造器的形参相比 Java 的构造器的形参具有更加灵活的功能

### 1. 普通形参(未添加任何修饰的形参)

未添加任何修饰的构造函数的形参, 在能访问到的范围内就是一个普通的局部变量

- 主构造函数的形参在整个类的内部都是当做局部变量使用
- 辅构造函数的形参只在当前构造函数内有效

```scala
package com.atguigu.day04

object ObjDemo1 {
  def main(args: Array[String]): Unit = {
    val p = new Stu("李四")
    p.sayHello()
  }
}
// 对主构造器来说, 未添加任何修饰的构造函数的形参, 在能访问到的范围内就是一个普通的局部常量
// 在整个主构造器内部都只能读取不能修改, 而且在内部也可以通过`this`来读取
// 观看反编译后的`class`, 发现会创建私有的属性, 并且没有给外界提供任何访问的方式
class Stu(name : String) {
  println(name)
  def sayHello(): Unit ={
    println("sayHello:" + name)
  }
}
```

### 2. 给形参添加`var`修饰

给形参添加`val`修饰, 那么这个时候的形参就是类的属性.  在类的内部可有直接`属性名`访问, 也可以`this.属性名`访问

在类的外部也可以访问.

```scala
package com.atguigu.day04

object ObjDemo1 {
  def main(args: Array[String]): Unit = {
    val p = new Stu("李四")
    p.sayHello()
  }
}
class Stu(var name : String) {
  println(name)
  this.name = "lisi"
  println(name)
  println(this.name)
  def sayHello(): Unit ={
    println("sayHello:" + this.name)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543655979.png-atguiguText)

### 3. 给形参添加`val`修饰

给形参添加`val`修饰, 这个时候的形参就是一个只读的属性.

```scala
package com.atguigu.day04

object ObjDemo1 {
  def main(args: Array[String]): Unit = {
    val p = new Stu("李四")
    println("外部p.name: "  + p.name)
    p.sayHello();
  }
}
class Stu(val name : String) {
  //    this.name = "lisi" // 会报错
  println(name)
  println(this.name)
  def sayHello(): Unit ={
    println("sayHello:" + this.name)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543656245.png-atguiguText)

### 4. 再添加`@BeanProperty`

再添加`@BeanProperty`, 就会给属性添加相应的`setter`和`getter`方法.(如果是`val`的则只有`getter`方法)

```scala
package com.atguigu.day04

import scala.beans.BeanProperty

object ObjDemo1 {
  def main(args: Array[String]): Unit = {
    val p = new Stu("李四")
    println(p.getName)
    p.setName("zs")
    println(p.getName)
  }
}
class Stu(@BeanProperty var name : String) {

}
```
---

## 8.1.8 对象创建流程分析

```scala
class Person {
  var age: Int = 90
  var name: String = _

  def this(n: String, a: Int) {
    this()
    this.name = n
    this.age = a
  }
}

var p: Person = new Person("小倩", 20)
```
流程分析(面试题)

1. 加载类信息(属性信息，方法信息)

2. 在堆中，给对象开辟空间

3. 调用主构造器对属性进行初始化

4. 使用辅助构造器对属性进行初始化

5. 把对象空间的地址，返回给`p`引用

----

## 8.1.9 查看 Scala 生成的字节码

```bash
# 编译 scala 文件
scalac Person.scala

# 查看编译后的字节码  -private 表示也查看私有的成员
javap -private Person
```
---

## 8.1.10 给类起别名

在使用一个大型类库写代码的时候你也许会遇到类名不符合自己心意的情况。类名要么 太长要么不灵巧，或者你只是觉得有一个更好的名字能够表达这种抽象。你拥有这种取别名 的自由，可以给一个类取一个赏心悦目的名字。

```scala
// 这是一个很长的类名, 将来使用的时候书写很不方便
class Person2Student

object Person {
    def main(args: Array[String]): Unit = {
        // 起个别名
        type p2s = Person2Student

        println(new p2s().getClass)
    }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546742863.png-atguiguText)

> #### *说明:*

- 虽然起了别名, 但是并没有改变类的真实类型.

- 别名只对当前作用域有效

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546742863.png-atguiguText)
- scala 标准库中很多类都起了别名. 例如，`Set` 就是一个别名，它指向 `immutable` 包中的 `Set` 版本， 而不是 `mutable` 包中的版本。

















# 8.2 包

Scala 中包的声明, 命名规则和 Java 完全一样, 在此不再赘述.

只学习下与 Java 不同的地方

---

## 8.2.1 包语句

Java 的中的包的声明一般是通过 `package x.y.z` 来声明.

Scala 不仅仅支持 Java 的这种声明方式, 还支持另外一种更加灵活的方式: <my>包语句</my>

```scala
package com{
  package atguigu{
    class Person{  // com.atguigu.Person

    }
  }
}

package com{
  package atguigu{
    package xx{
      class Person{  // com.atguigu.xx.Person

      }
    }
  }
}
```

> #### *说明:*

- 一个文件中的多个类可以使用不同的包
- 包的结构将来也和文件夹结构没有必然联系了
- 如果一个文件的中的所有的类都属于同一个包, 最好使用 Java 提供的<my>顶部标记法</my>, 而实际情况也确实是这样是最普遍的做法.

---

## 8.2.2 包对象

在 Java 中, 我们的一些工具函数或者常量需要专门添加到一个所谓的类中. 这种做法主要是 JVM 的限制, 但其实并不是很好的选择.

如果能把这些东西添加到包中是更好的一种选择.

Scala 提供的<my>包对象</my>解决了这个问题

<my>每个包都有一个包对象, 我们需要在类的父包中进行定义, 并且和父包的名字保持一致!</my>

```scala
package com.atguigu.day04

package abc {

  object Person {
    def main(args: Array[String]): Unit = {
      val p1 = new Person()
      p1.say()
    }
  }

}

package object abc {
  var A: Int = 3

  def foo() = {
    println("包对象中定义的函数...")
  }
}
package abc {

  class Person {
    def say() = {
      // 调用包对象中的属性和方法时, 直接调用即可, 不需要前缀
      println(A)
      foo()
    }
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543659675.png-atguiguText)

> #### *说明:*

- 在幕后, 包对象被编译成类, 名字就叫`package.class`, 放在相应的包下.

- 本例中放在包`com.atguigu.day04.abc`中
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543660022.png-atguiguText)

---

## 8.2.3 包的可见性

在 Java 中，访问权限分为: `public`，`private`，`protected`和`默认`。在Scala 中，你可以通过类似的修饰符达到同样的效果。但是使用上有区别。

1. 当方法访问权限为默认时，默认为`public`访问权限

2. 在 Scala 中没有`public`关键字，即不能用`public`显式的修饰属性和方法。

3. `private`为私有权限，只在类的内部和伴生对象中可用

 关于伴生对象和伴生类的概念, 后面再细说

 ```scala
   package com.atguigu.day04
  /*
  当在一个文件中, object 名和 class 名相同时
  object 叫伴生对象, class 叫伴生类
   */
  object AccessTest {
    def main(args: Array[String]): Unit = {
      val test = new AccessTest
      // 伴生对象内部可以访问伴生类内部的私有属性和方法
      println(test.a)
    }
  }
  
  class AccessTest{
    private var a = 10
  
    def foo(): Unit ={
      println(a)
    }
  }

  ```

4. `protected`为受保护权限，Scala 中受保护权限比 Java 中更严格，只能子类访问，同包无法访问。

5. 包访问权限
  一般是属性私有了, 可以增加包访问权限, 然后包内的其他类也可以访问到了. 这点体现出来了 Scala 包相比 Java 的灵活性.
  
  ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543668607.png-atguiguText)

---

## 8.2.4 包的导入

Scala 中导包用的关键字仍然是`import`

Scala 导入的特点:

### 1. 在 Scala 中，import 语句可以出现在任何地方，并不仅限于文件顶部.
 import语句的作用一直延伸到包含该语句的块末尾
 
 这种语法的好处是：在需要时在引入包，缩小import 包的作用范围，提高效率
 
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543669364.png-atguiguText)
 
### 2. Scala 使用`_`来导入一个包下的所有的类(Java 是`*`)
 
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543669530.png-atguiguText)

### 3. 如果不想要某个包中全部的类, 而是其中的几个类, 可以采用选取器(大括号)
 
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543669668.png-atguiguText)

### 4. 类的重命名

 如果引入的多个包中含有相同的类，那么可以将不需要的类进行重命名进行区分，这个就是重命名

```scala
package com.atguigu.day04

// Scala 提供的 HashMap
import scala.collection.mutable.HashMap

// 给 Java 的HashMap重命名为JavaHashMap
import java.util.{HashMap => JavaHashMap}


object PackDemo3 {
  def main(args: Array[String]): Unit = {
    // 使用重命名后的JavaHashMap
    val map1 = new JavaHashMap[String, String]()
    val map2 = new HashMap[String, String]()

  }
}
```

### 5. 如果某个冲突的类根本就不会用到，那么这个类可以直接隐藏掉

```scala
package com.atguigu.day04
// 隐藏scala.collection.mutable.HashMap
import scala.collection.mutable.{HashMap => _, _}
import java.util._
//import  java.util.{HashMap=>_, _}


object PackDemo3 {
  def main(args: Array[String]): Unit = {
    // 毫无疑问的指向了java.util.HashMap
    val map2 = new HashMap[String, String]()

  }
}
```

### 6. 隐式引入

下面 2 个包的所有类都被隐式引入:

```scala
import java.lang._
import scala._
```

和对象:
```scala
import scala.Predef._
```

`Predef` 对象中包含了类型、隐式转换以及在 Scala 中常用的一些方法。

所以，既然已经默认导入，那么无须任何前缀或者导入，就可以直接使用那些方法和隐式转换。

它们太方便了，以至于你开始相信它们是 Scala 的一部分，实际上它们是 Scala 标准库的一部分。

`Predef` 对象还提供了一些类型的别名，如 `scala.collection.immutable.Set` 和 `scala.collection.immutable.Map`。

因此，当使用 `Set` 或者 `Map` 的时候，实际使用的是 `Predef` 中对它们的定义，它们分别指向它们在 `scala.collection.immutable` 包中的定义。






# 8.3 封装

封装(encapsulation)就是把抽象出的数据和对数据的操作封装在一起，数据被保护在内部，程序的其它部分只有通过被授权的操作(成员方法)，才能对数据进行操作。

我们前面使用`@BeanProperty`已经很进行了相应的封装

---

## 8.3.1 默认访问修饰符

Scala 的访问修饰符（access modifier）和 Java 有如下不同点。

1. 如果不指定任何访问修饰符，那么 Java 会默认为包内部可见，而 Scala 则<my>默认为公开(`public`)</my>。

2. Java 主张全有或全无，也就是说，对当前包的所有类可见或者对所有都不可见。而 Scala 对可见性的控制是细粒度的。

3. Java 的 `protected` 是宽泛的，其作用域包括在任意包中的派生类和当前包中的任意类，而 Scala 的 `protected` 与 C++和 C#的类似，只有派生类能够访问。然而，在 Scala 中 `protected` 还有相当自由和灵活的用法。

4. Java 的封装是类级别的。可以在一个类的实例方法中访问该类的任何实例的所有私有 字段和方法，在 Scala 中也一样，不过，在 Scala 中也可以进行定制，让其只能在当 前的实例方法中访问，这样就和 Ruby 比较像了。

---

## 8.3.2 定制修饰符

在不使用任何访问修饰符的情况下， Scala 默认认为类、字段和方法都是公开的。

 如果想将一个成员标记为 `private` 或者 `protected` ， 只要像下面这样用相应的关键字标记即可。
 
```scala
class Person {
    def say() = println("say...")

    private def eat() = println("eat...")
}

object Demo {
    def main(args: Array[String]): Unit = {
        var p = new Person
        p.say() // ok
        p.eat() // 编译错误
    }
}
```

---

## 8.3.3 Scala 的 `protected`

在 Scala 中，`protected` 让所修饰的成员仅对自己和派生类可见。对于其他类来说，即使正好和所定义这个类处于同一个包中，也无法访问这些成员。更进一步，派生类在访问 `protected` 成员的时候，成员的类型也需要一致。

```scala
package bj

object Demo2{
    def main(args: Array[String]): Unit = {

    }
}

class Person{
    protected def say() = {}
}

class Student extends Person{
    def f1(): Unit ={
        this.say()  // ok
    }

    def f2(stu:Student): Unit ={
        stu.say() // ok
    }

    def f3(per:Person): Unit ={
        per.say()  // 编译错误. 
    }
}
```
# 8.4 继承

继承也是面向对象的一大特征, 本节讲解 Scala 中的继承.

本章只讨论一个类继承自另外一个类的情况. 

继承特质(类似于 Java 中的实现接口)的情况下章再讨论.

# 8.4.1 Scala 继承的基本语法

在 Scala 中扩展一个基类和 Java 中很像，只是多了两个非常好的限制：

- 其一，方法的重写必须用 `override` 关键字；

- 其二，只有主构造器能传递参数给基类的构造器。

```scala
class 子类名 extends 父类名  { 
    //类体 
}
```
> #### *说明:*

- 继承的关键字与 Java 一样, 也是使用 `extends`

- 可以继承父类的属性和方法

- Scala 支持单继承, 不支持多继承

```scala
package com.atguigu

object Student {
  def main(args: Array[String]): Unit = {
    val s = new Student
    println(s.age)
    s.say()
    s.study()
  }
}

class Student extends Person {
  def study(): Unit = {
    println(this.name + " good good study, day day up")
  }
}

class Person {
  var age = 10
  var name = "小明"

  def say(): Unit = {
    println("Person的say方法:" + this.age)
  }
}
```# 8.4.2 方法的重写

scala 明确规定，重写一个非抽象方法需要用`override`修饰符，明确需要调用超类的方法使用`super`关键字

```scala
package com.atguigu

object Student {
  def main(args: Array[String]): Unit = {
    val s = new Student
    s.say()
  }
}

class Student extends Person {
  def study(): Unit = {
    println(this.name + " good good study, day day up")
    super.say()
  }

  override def say(): Unit = {
    super.say()
    println("子类的say")
  }
}

class Person {
  var age = 10
  var name = "小明"

  def say(): Unit = {
    println("Person的say方法:" + this.age)
  }
}
```# 8.4.3 Scala 中类型检查和转换

要测试某个对象是否属于某个给定的类，可以用`isInstanceOf`方法。

用`asInstanceOf`方法将引用转换为子类的引用。

`classOf`获取类的`class`对象

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543722242.png-atguiguText)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543722264.png-atguiguText)

---

类型检查和转换的最大价值在于:

可以判断传入对象的类型,然后转成对应的子类对象,进行相关操作,这里也体现出多态的特点。


# 8.4.4 Scala 中超类的构造

大家都知道, 在 Java 中，创建子类对象时，子类的构造器总是去调用一个父类的构造器(显式或者隐式调用)

---

通过前面的学习我们知道, 在 Scala 中, 辅助构造器总是会调用到当前类的主构造器, 所以, 就不可能调用到父类的构造器.  

所以, <my>只有主构造器才能调用到父类的构造器</my>, 即可以调用父类的主构造器, 也可以调用父类的辅助构造器. 

在继承的时候, 我们必须指定父类, 也可以指定父类的构造器.

```scala
package com.atguigu

object ConstructDemo {
  def main(args: Array[String]): Unit = {
    val f1 = new Son("李四", 20)
    println(f1)
    f1.show()
  }
}

class Father(name: String) {
  var age: Int = _

  def this(name: String, age: Int) {
    this(name)
    this.age = age
  }
}
// 继承Father, 并调用父类的单个参数的构造器(主构造器) 类似于Java 的Super(name)
class Son(name: String, age: Int) extends Father(name) {

  override def toString: String = {
    this.name + " " + this.age
  }

  def show(): Unit ={
    println(this.name)
  }
}
```

# 8.4.5 重写字段

我们知道, 在 Java 中只能重写方法, 不能重写字段.  原因就是<my>隐藏字段</my>的存在.

由于 Java 中的隐藏字段的存在, 容易产生一些不太发现的 bug, 所以 Scala 没有采用 Java 的这种方式.

Scala 是允许重写字段的: 用到关键字`override`

> 字段的重写规则:

1. 用`val`去重写`val`或者不带参数的`def`(不能去重新`var`)
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543734511.png-atguiguText)

2. `var` 只能去重新另外一个抽象的`var`(没有初始值的变量, 只能放在抽象类中, 后面学习)
 学习抽象类的时候再了解
 


# 8.4.6 抽象类

Scala 的抽象类的概念和 Java 的抽象类的概念是一样的, 都是表示的不能实例化的类.

Scala 的抽象类也是使用的关键字`abstract`

抽象类能有哪些成员:

1. 普通类有的抽象类都可以有.

2. 抽象字段
    没有初始化值的字段
    ```scala
    var a
    ```

3. 抽象方法
    
    没有方法实现
    
    ```scala
    def foo(name:String)
    ```
    
下面就是一个抽象类: 

```scala
abstract class Animal {
  var name = "大黄" // 普通字段
  var age: Int // 抽象字段

  def say(): Unit ={ // 普通方法

  }
  def cry() // 抽象方法
}
```

> #### *说明:*

- `abstract` 关键字只用作`class`前, <my>抽象字段和抽象方法前不能添加 abstract 关键字.</my>

- 抽象类的价值更多是在于设计，是设计者设计好后，让子类继承并实现抽象类(即：实现抽象类的抽象方法)

- 抽象类不能被实例化

- 抽象类不一定要包含`abstract`方法。也就是说,抽象类可以没有`abstract`方法

- 一旦类包含了抽象方法或者抽象属性,则这个类必须声明为`abstract`

- 抽象方法不能有主体，不允许使用`abstract`修饰。

- 如果一个类继承了抽象类，则它必须实现抽象类的所有抽象方法和抽象属性，除非它自己也声明为`abstract`类

- 抽象方法和抽象属性不能使用`private`、`final` 来修饰，因为这些关键字都是和重写/实现相违背的。

- 子类重写抽象方法不需要`override`，写上也不会错。


# 8.4.7 匿名子类

Scala 的匿名类和 Java 的匿名类的概念是一样的.

一般也是只用在只使用一次的场景.

```scala
package com.atguigu.day05

object AnDemo {
  def main(args: Array[String]): Unit = {
    // 创建匿名类, 并创建匿名类的对象
    var a = new Animal1 {
      override var age: Int = _

      override def cry(): Int = {
        println("cry...")
        1
      }
    }
    a.cry()
  }
}

// 抽象类
abstract class Animal1() {
  var name = 100
  var age: Int

  def cry(): Int
}
```# 9.2 单例对象

单例是一种非常有用的设计模式.

单例易于理解, 但是在 Java 中要实现单例还是有一些困难的.

但是毕竟幸运的是, 在 Scala 中, 单例模式已经在语言层面完成了解决.

创建一个单例要使用关键字 `object` 而不是 `class`。

<my>因为不能实例化一个单例对象，所以不能传递参数给它的构造器。</my>

```scala
import scala.collection._

class Marker(val color: String) {
    println(s"Creating ${this}")

    override def toString = s"marker color $color"

}

object MarkerFactory {

    private val markers = mutable.Map(
        "red" -> new Marker("red"),
        "blue" -> new Marker("blue"),
        "yellow" -> new Marker("yellow"))

    def getMarker(color: String): Marker = markers.getOrElseUpdate(color, new Marker(color))

    def main(args: Array[String]): Unit = {
        println(MarkerFactory getMarker "blue")
        println (MarkerFactory getMarker "blue")
        println (MarkerFactory getMarker "red")
        println (MarkerFactory getMarker "red")
        println (MarkerFactory getMarker "green")
    }
}
```

> #### *说明:*

- 在这个例子中，`Marker` 类表示一个带有初始颜色的颜色标记器。`MarkerFactory` 是一个能够帮助我们复用预先创建好的 `Marker` 实例的单例。

- 可以直接用 `MarkerFactory` 这个名字访问这个单例—唯一的实例。
一旦定义了一个单例，它的名字就代表了这个单例对象的唯一实例。

- 然而，上面的代码中还有一个问题。我们不经过 `MarkerFactory` 就可以直接创建一个 `Marker` 的实例.

- 如何在相应单例工厂中限制一个类的实例的创建? 伴生对象!
# 9.2 独立对象和伴生对象

前面提到的 `MarkerFactory` 是一个独立对象（`stand-alone object`）。它和任何类都没有自动的联系，尽管我们用它来管理 `Marker` 的实例。

可以选择将一个单例关联到一个类。

这样的单例，其名字和对应类的名字一致，因此被 称为<my>伴生对象（companion object）</my>。相应的类被称为<my>伴生类</my>。我们在后面可以看到这种方式非常强大。

在前面的例子中，我们可以通过伴生对象来规范 `Marker` 实例的创建。

类与其伴生对象间没有边界---<my>它们可以相互访问对方私有字段和方法。</my>

一个类的构造器，包括主构造器，也可以标记为 `private`。 我们可以结合这两个特性来解决前一节末尾特别提出的问题。

下面是使用一个伴生对象对 Marker 这个例子进行的重写。

```scala
import scala.collection._

// 主构造函数私有. 将来只能在伴生对象中访问
class Marker private(val color: String) {
    println(s"Creating ${this}")

    override def toString = s"marker color $color"

}

object Marker {

    private val markers = mutable.Map(
        "red" -> new Marker("red"),
        "blue" -> new Marker("blue"),
        "yellow" -> new Marker("yellow"))

    def getMarker(color: String): Marker = markers.getOrElseUpdate(color, new Marker(color))

    def main(args: Array[String]): Unit = {
        println(Marker getMarker "blue")
        println(Marker getMarker "blue")
        println(Marker getMarker "red")
        println(Marker getMarker "red")
        println(Marker getMarker "green")
    }
}
```

> #### *说明:*

- `Marker` 的构造器被声明为 `private`；然而，它的伴生对象可以访问它。

- 因此，我们可 以在伴生对象中创建 `Marker` 的实例。

- 如果试着在类或者伴生对象之外创建 `Marker` 的实例， 就会收到错误提示。

- <my>每一个类都可以拥有伴生对象</my>，伴生对象和相应的伴生类可以放在同一个文件中。在 Scala 中，伴生对象非常常见，并且通常提供一些类层面的便利方法。

- 伴生对象还能作为一非常好的变通方案，弥补 Scala 中缺少 `static` 成员的事实



---

## Scala 中的 `static`

Scala 没有 `static` 关键字，直接在一个类中允许 `static` 字段和 `static` 方法会破坏 Scala 提供的纯面向对象模型。

与此同时，Scala 通过单例对象和伴生对象完整支持类级别的操作和属性。

如果能够从 `Marker` 中获得所支持的颜色，就非常棒。

但是，直接在这个类的任何实例中查询并没有意义，因为这是一个类级别的操作。

 换句话说，如果我们是在用 Java 写代码，就会在类 `Marker` 中把这个查询方法写成一个 `static` 方法。
 
但是，Scala 并不提供 `static`。一开始就是这样设计的，以至于这些方法在单例对象和伴生对象中作为常规方法存在。

我们来改一下 `Marker` 这个例子，并在伴生对象 中创建一些方法。

```scala
package scala.bj2

import scala.collection._

// 主构造函数私有. 将来只能在伴生对象中访问
class Marker private(val color: String) {
    println(s"Creating ${this}")

    override def toString = s"marker color $color"

}

object Marker {

    private val markers = mutable.Map(
        "red" -> new Marker("red"),
        "blue" -> new Marker("blue"),
        "yellow" -> new Marker("yellow"))

    def apply(color: String): Marker = markers.getOrElseUpdate(color, new Marker(color))

    def supportedColors = markers.keys

    def main(args: Array[String]): Unit = {
        println(Marker.supportedColors)
        println(Marker("blue"))
        println(Marker("yellow"))
    }
}

```

> #### *说明:*

- `println(s"Supported colors are : ${Marker.supportedColors}")` 可以直接在外面这样调用刚刚创建的方法, 就像在调用 Java 的静态方法.

---

## `apply`方法

如果不用 `new` 关键字就可以创建伴生类的实例, 是比较舒服的操作。 特殊的 `apply()`方法就是达到这种效果的关键。 

在前面的例子中， 当我们调用 `Marker ("blue")`时，实际上在调用 `Marker.apply("blue")`。这是一种创建或者获得实例的轻量级语法。

在字节码层面上，单例中方法会被创建为 `static` 方法。这从与 Java 的互操作性上讲，是一个好消息。

---


---

## 小结:

1. Scala 中伴生对象采用`object`关键字声明，伴生对象中声明的全是 "静态"内容，可以通过伴生对象名称直接调用

2. 伴生对象对应的类称之为伴生类，伴生对象的名称应该和伴生类名一致

3. 伴生对象中的属性和方法都可以通过伴生对象名(类名)直接调用访问

4. 从语法角度来讲，所谓的伴生对象其实就是类的静态方法和静态属性的集合

5. 伴生对象的声明应该和伴生类的声明在同一个源码文件中(如果不在同一个文件中会运行错误!)，但是如果没有伴生类，也就没有所谓的伴生对象了，所以放在哪里就无所谓了。

6. 类和伴生对象之间可以互相访问对方的私有成员.










# 9.3.1  Java 中的接口与 Scala 中的 trait

从面向对象来看，接口并不属于面向对象的范畴，Scala 是纯面向对象的语言，在 Scala 中，没有接口。

Scala 语言中，采用特质 `trait`（特征, 特质）来代替接口的概念，也就是说，多个类具有相同的特征（特质）时，就可以将这个特质（特征）独立出来，采用关键字`trait`声明。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543757879.png-atguiguText)

---

特质声明语法:

```scala
trait 特质名 {
  // 特质体
}
```

---

特质可以有抽象方法, 也可以有实体方法, 相比抽象类来说最大的优点就是可以实现多继承, 抽象类是类只能实现单继承.

# 9.3.2 最简单的特质: 当做接口使用的特质

```scala
package com.atguigu.day06

trait Logger {
  // 未被实现的方法就是抽象方法, 不需要加abstract关键字
  def log(msg: String)
}
```

子类实现:

```scala
class ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}
```

> #### *说明:*

- 实现特质方法的时候的, 可以加`override`, 也可以不加

- 如果一个类没有继承任何其他的类, 则使用`extends`来混入特质.否则只能使用`with`

- 如果你需要的特质不止一个, 可以通过`with`关键字来添加另外的特质.
 ```scala
 class ConsoleLogger extends Logger with Serializable with Cloneable {
  def log(msg: String): Unit = {
    println(msg)
  }
}
 ```

- 所有的 Java 接口都可以作为 Scala 中的特质使用.

- 和 Java 一样, Scala 只能继承一个类, 但是可以有任意多个特质

# 9.3.3 带有具体实现的特质

在 Scale 中, 特质也可以有非抽象的方法

```scala

trait ConsoleLogger extends Logger {
  def log(msg: String): Unit = {
    println(msg)
  }
}
```

# 9.3.4 带有特质的对象:动态混入

除了可以在类声明时继承特质以外，还可以在构建对象时混入特质，扩展目标类的功能.

```scala
package com.atguigu.day06

import java.sql.Connection

object TraitMix {
  def main(args: Array[String]): Unit = {
    // 创建 Mysql 对象的时候, 指定一个新的特质
    val mysql = new Mysql with BetterConnectDB

    mysql.connectToMysql()
    
    // 如果再创建新的对象, 也可以换另外的特质.  这就叫动态混入

  }
}

//这个特质用来连接数据库
trait ConnectToDB {
  // 什么都不做的实现方法
  def getConn() {}
}

class Mysql extends ConnectToDB {
  // 连接到Mysql
  def connectToMysql(): Unit = {
    // 获取连接
    getConn()
    //其他代码
  }
}

/*
上面的 getConn其实什么都没有做, 感觉没有什么用

但是我们创建 Mysql对象的时候, 可以给他指定一个更好的特质
 */

// 一个更好的特质 
trait BetterConnectDB extends ConnectToDB {
  override def getConn(): Unit = { // 注意这个时候需要添加override
    println("更好的获取连接....")
  }
}
```

> #### *说明:*

- 动态混入是Scala特有的方式（java没有动态混入），可在不修改类声明/定义的情况下，扩展类的功能，非常的灵活，耦合性低 

- 动态混入可以在不影响原有的继承关系的基础上，给指定的类扩展功能

# 9.3.5 叠加特质

构建对象的同时如果混入多个特质，称之为<my>叠加特质</my>，

```scala
package com.atguigu.day06

object OverflowTrait {
  def main(args: Array[String]): Unit = {
    val test = new Test with A with B with C
    test.foo()
  }
}
class Test{

}

trait Father{
  def foo(): Unit ={
    println("Father...")
  }
}

trait A extends Father{
  override def foo(): Unit = {
    println("A...")
    super.foo()
  }
}
trait B extends Father{
  override def foo(): Unit = {
    println("B...")
    super.foo()
  }
}

trait C extends Father{
  override def foo(): Unit = {
    println("C...")
    super.foo()
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543763333.png-atguiguText)

> #### *说明:*

- 当构建一个混入对象时，构建顺序和声明的顺序一致（从左到右），机制和类的继承一致. 所以对象中的`foo`方法一定是最后一个特质的方法.

- `super.foo()` 这里`super`并不会直接去找父特质, 而是按照顺序去找上一个特质.

- 如果不想按照顺序向上找, 可以直接指定该特质的直接父特质`super[Father].foo()`# 9.3.6 当做富接口使用的特质

富接口：即该特质中既有抽象方法，又有非抽象方法

```scala
trait Operate {
    def insert( id : Int ) //抽象
    def pageQuery(pageno:Int, pagesize:Int): Unit = { //实现
        println("分页查询")
    }
}
```# 9.3.7 特质中的具体字段

特质中的<my>字段可以是抽象的也可以是具体的</my>.

如果字段初始化了就是具体的, 如果没有初始化就是抽象的.

混入该特质(或者继承该特质)的类就具有了该字段，字段不是继承，而是直接加入类，成为自己的字段。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543799517.png-atguiguText)
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543799551.png-atguiguText)
# 9.3.8 特质的构造顺序

特质也是有构造器的，构造器中的内容由"字段的初始化"和一些其他语句构成.(类似于类的主构造器)

## 第1种特质构造顺序(声明类的同时混入特质)

1. 首先调用超类的构造器

2. 第一个特质的父特质构造器

3. 第一个特质的构造器

4. 第二个特质构造器的父特质构造器, 如果已经执行过，就不再执行

5. 第二个特质的构造器

    ....

6. 当前类的构造器


```scala
package com.atguigu.day07

object TDemo {
  def main(args: Array[String]): Unit = {
    val son = new Son
    println(son.a1)
  }
}

trait tr{
  val a1 = "最上面的特质的 a1"
  println("最上面特质的构造器")
}

trait tr1 extends tr{
  override val a1 = "第一个特质的 a1"
  println("第一个特质的构造器")
}

trait tr2 extends tr{
  override val a1 = "第二个特质的 a1"
  println("第二个特质的构造器")
}

class Father{
  val a1 = "父类的 a1"
  println("父类的构造器")
}
class Son extends Father with tr1 with tr2{
  override val a1 = "子类的 a1"
  println("子类的构造器")
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543801492.png-atguiguText)


---


## 第2种特质构造顺序(在构建对象时，动态混入特质)

1. 当前类的超类构造器

2. 当前类的构造器

3. 第一个特质的父特质构造器

4. 第一个特质的构造器

5. 第二个特质构造器的父特质构造器, 如果已经执行过，就不再执行

6. 第二个特质的构造器

    ....

```scala
package com.atguigu.day08

object TDemo2 {
  def main(args: Array[String]): Unit = {
    //动态混入特质
    val son = new Son with tr1 with tr2
  }
}

trait tr {
  println("最上面特质的构造器")
}

trait tr1 extends tr {
  println("第一个特质的构造器")
}

trait tr2 extends tr {
  println("第二个特质的构造器")
}

class Father {
  println("父类的构造器")
}

class Son extends Father {
  println("子类的构造器")
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543802773.png-atguiguText)

# 9.3.9 特质继承类

特质继承特质大家已经了解了.

在 Scala 中还有一种不太常用的手法: <my>特质继承类.</my>

将来这个被继承的类会自动成为所有混入了该特质的类的直接超类.

```scala
package com.atguigu.day08

object TDemo3 {
  def main(args: Array[String]): Unit = {
    println(new Son1)
  }
}

class TrFather {
  println("特质会继承这个类...")
}

trait Tr extends TrFather {
  println("特质...")
}

class Son1 extends Tr {
  println("子类...")
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543803685.png-atguiguText)

> #### *注意:*

- 如果混入该特质的类，已经继承了另一个类(A类)，则要求A类是特质超类的子类，否则就会出现了多继承现象，发生错误
  ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543803994.png-atguiguText)
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543804024.png-atguiguText)

# 9.3.10 自身类型

当特质A 继承类B 的时候, 编译器能够确保的一件事是所有混入该特质A 的类都认类B 作为自己的超类.

Scala 还有另外一套机制也可以保证这一点: 自身类型(self type)

当特质以如下代码开始定义:
```scala
this: 类型C =>
```
表示: 只能被类型C 的子类来混入.

```scala
package com.atguigu.day08



object SelfDemo {
  def main(args: Array[String]): Unit = {
    val console = new Console
  }
}

// Logger 即使自身类型的特质
trait Logger{
  // 告诉编译器: 我就是 Exception, 如果没有这句话 getMessage 没法调用
  // 同时告诉编译器, 混入本特质的类先继承 Exception或者 Exception 的子类
  this: Exception=>
  def log(): Unit ={
    println(getMessage)
  }
}

class Console extends Exception with Logger{

}
```# 9.4 嵌套类

在 Scala中，你几乎可以在任何语法结构中内嵌任何语法结构。如在类中可以再定义一个类，这样的类是嵌套类，其他语法结构也是一样。

嵌套类类似于 Java 中的内部类

```scala
package com.atguigu.day09

import com.atguigu
import com.atguigu.day09


object InnerDemo {
  def main(args: Array[String]): Unit = {
    // 创建外部类对象
    val outer = new Outer
    // 创建普通的成员内部类对象(内部类要持有外部类的对象)
    val inner = new outer.Inner

    outer.name = "张三"
    inner.foo();

    // 创建静态内部类对象
    val inner2 = new Outer.StaticInner
    inner2.foo()
  }
}


class Outer {
 // 给外部类添加别名
  my =>
  var name = "李四"

  // 普通的成员内部类
  class Inner {
    def foo(): Unit = {
      // 访问方式1
      println(name)
      // 访问方式2
      println(Outer.this.name)
      // 访问方式3 使用别名
      println(my.name)
    }
  }

}

object Outer {
  my=>
  var age = 10
  // 静态内部类. 因为伴生对象中的所有成员都会编译成Java中的静态的成员
  class StaticInner {
    def foo(): Unit ={
      // 访问方式1
      println(age)
      // 访问方式2
      println(Outer.age)
      // 访问方式3
      println(Outer.this.age)
      // 访问方式4
      println(my.age)

    }
  }

}
```

---

## 类型投影

> 看下面的问题:

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543816976.png-atguiguText)

如何解决问题呢?

<my>使用类型投影解决!</my>

在方法声明的时候使用`外部类#内部类`这样的类型, 表示忽略内部类的对象关系.

等同于Java中内部类的语法操作，我们将这种方式称之为 类型投影（即：忽略对象的创建方式，只考虑类型）

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543817183.png-atguiguText)













# 第 10 章 隐式转换和隐式参数

本章开始讲解 Scala 的一些高级功能

我们先从隐式转换开始# 10.1 隐式转换

为啥需要隐式转换? 

看下面的代码:

```scala
object Scala01 {
  def main(args: Array[String]): Unit = {
    // 当把范围大的数据类型的数据复制给小范围的类型的数据的时候, 必须要强制转换, 否则会报错. 有没有办法让这种情况也能按照我们想要的方自动转换呢? 
    val num : Int = 3.5 //?
    println(num)
  }
}
```


使用<my>隐式转换</my>可以完全我们上面的需求.

隐式转换需要执行隐式函数!

## 10.1.1 隐式函数基本介绍

隐式转换函数是以`implicit`关键字声明的带有<my>单个参数</my>的函数。

这种函数会根据需要将会自动被调用，将值从一种类型转换为另一种类型.

## 10.1.2 隐式函数快速入门

```scala
package com.atguigu.day10

object ImplicitDemo1 {
  def main(args: Array[String]): Unit = {
    // 隐式函数
    implicit def f1(d: Double): Int = {
      d.toInt
    }
    var a: Int = 3.9
    println(a)
  }
}
```

## 10.1.3 隐式函数底层工作原理

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543829652.png-atguiguText)


## 10.1.4 隐式转换的注意事项和细节

1. 隐式转换函数的函数名可以是任意的，隐式转换与函数名称无关，只与函数签名（<my>函数参数类型和返回值类型</my>）有关。

2. 隐式函数可以有多个(即：隐式函数列表)，但是需要保证在当前环境下，只有一个隐式函数能被识别

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543830036.png-atguiguText)

有两个隐式函数都可以实现从 `Double->Int`的转换, 所以报错.  有点类似于 Java 中方法重载一样.

3. 隐式转换函数的命名: 通俗的写法是`source2Targe`, 比如:`double2Int`








# 10.2 利用隐式函数丰富现有的类库

如果需要用到的一个现有类库, 但是很不幸, 里面缺少一个我们需要的方法.

比如: 如果`java.io.File` 能有个方法直接读取文件就好了, 我们就可以像下面这样使用:

```scala
var content = new File("b.txt").read
```

在 Java 中我们只能给 Oracle 公司请愿来添加这个功能.

但是在 Scala 中, 我们可以定制一个丰富的类型来提供想要的功能.

```scala
package com.atguigu.day10

import java.io.File

import scala.io.Source

object ImplicitDemo1 {
  def main(args: Array[String]): Unit = {
    implicit def file2RichFile(from: File): RichFile = {
      new RichFile(from)
    }

    println()
    // File 对象被隐式的转换成了RichFile对象
    val rl: RichFile = new File(getClass.getClassLoader.getResource("a.txt").getPath)
    println(rl.read)
  }

}

class RichFile(val from: File) {
  def read = Source.fromFile(from.getPath).mkString
}
```

---

另外一个例子:

```scala

import java.time.LocalDate

class DateHelper(val day: Int) {
    def days(when: String) = {
        val today: LocalDate = LocalDate.now
        if (when == "ago") {
            today.minusDays(this.day)
        } else {
            today.plusDays(this.day)
        }
    }
}

object DateHelper {
    def main(args: Array[String]): Unit = {
        implicit def int2DateHelper(day: Int) = new DateHelper(day)

        val ago = "ago"
        val from_now = "from_now"
        val past = 2 days ago // 2.days(ago)
        val future = 5 days from_now // 5.days(from_now)

        println(past)
        println(future)

    }
}
```# 10.3 隐式值

隐式值也叫隐式变量(也包括隐式形参).

将某个形参变量标记为`implicit`，所以编译器会在方法省略隐式参数的情况下去搜索作用域内的隐式值作为缺省参数

```scala
package com.atguigu.day10

object ImplicitDemo2 {
  // 隐式变量
  implicit var name: String = "jack"

  def main(args: Array[String]): Unit = {
    hello("hehe")
    // 当没有传递参数的时候, 会找类型为 String 的隐式变量
    hello
  }
  // 隐式参数
  def hello(implicit name: String): Unit = {
    val str: String = name + "你好..."
    println(str)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543838793.png-atguiguText)

总结: 

1. 调用函数的时候, 如果想使用隐式值就不能使用圆括号

2. 当匹配到多个隐式值就会报错(匹配时，是按照类型匹配)(演示)
# 10.4 隐式类

在 scala2.10 后提供了隐式类，可以使用`implicit`声明类，隐式类的非常强大，同样可以扩展类的功能，比前面使用隐式转换丰富类库功能更加的方便，在集合中隐式类会发挥重要的作用。

## 10.4.1 隐式类的几个特点

1. 其所带的构造参数有且只能有一个

2. 隐式类必须被定义在“类”或“伴生对象”或“包对象”里，即隐式类不能是顶级的(`top-level  objects`)。

3. 隐式类不能是`case class`样例类（case class在后续介绍）

4. 作用域内不能有与之相同名称的标示符


```scala
object ImplicitDemo3 {
  def main(args: Array[String]): Unit = {
    implicit class DB1(var m : Mysql1){
      def addSuffix(): String ={
        m + " scala"
      }

      def sayOk(): Unit ={
        println("db1 sayOk ...")
      }
    }
    
    val mysql: DB1 = new Mysql1
    mysql.sayOk()
    println(mysql.addSuffix())
  }
}

class Mysql1{
  def syaOk(): Unit ={
    println("sayOk...")
  }

  override def toString: String = "mysql1-tostring..."
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543840150.png-atguiguText)

---

另一个案例:

```scala
package day02.implicitclass

object DateHelper {

    implicit class DateHelper(val day: Int) {

        import java.time.LocalDate

        def days(when: String) = {
            val today: LocalDate = LocalDate.now
            if (when == "ago") {
                today.minusDays(this.day)
            } else {
                today.plusDays(this.day)
            }
        }
    }

    def main(args: Array[String]): Unit = {

        val ago = "ago"
        val from_now = "from_now"
        val past = 2 days ago // 2.days(ago)
        val future = 5 days from_now // 5.days(from_now)

        println(past)
        println(future)

    }
}
```

# 10.5 隐式转换时机


1. 当方法中的参数的类型与目标类型不一致时

2. 当对象调用所在类中不存在的方法或成员时，编译器会自动将对象进行隐式转换（根据类型）

# 10.5 隐式转换时机

即编译器是如何查找到缺失信息的，解析具有以下两种规则：

1. 首先会在当前代码作用域下查找隐式实体（隐式方法、隐式类、隐式对象）。(一般是这种情况)

2. 如果第一条规则查找隐式实体失败，会继续在隐式参数的类型的作用域里查找。类型的作用域是指与该类型相关联的全部伴生模块，一个隐式实体的类型T它的查找范围如下(第二种情况范围广且复杂在使用时，应当尽量避免出现)：

 - 如果T被定义为T with A with B with C,那么A,B,C都是T的部分，在T的隐式解析过程中，它们的伴生对象都会被搜索。
 
 - 如果T是参数化类型，那么类型参数和与类型参数相关联的部分都算作T的部分，比如List[String]的隐式搜索会搜索List的伴生对象和String的伴生对象。
# 10.7 隐式转换的前提

在进行隐式转换时，需要遵守两个基本的前提：

1. 不能存在二义性

2. 隐式操作不能嵌套

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543841739.png-atguiguText)
# 11.1 Scala 的集合概述

官方文档: https://docs.scala-lang.org/overviews/collections/overview.html

Scala 同时支持不可变集合和可变集合，<my>不可变集合可以安全的并发访问</my>

Scala 中涉及到集合的两个主要的包:

1. 可变集合：  `scala.collection.mutable`
    
 可以对集合中的元素进行增删改, 而且是更改的原集合. 所以处理可变集合意味着你需要去理解哪些代码的修改会导致集合的内容同时改变。

2. 不可变集合：`scala.collection.immutable`
  
  也可以对集合中的元素进行增删改, 但是并不会修改原集合, 只是会返回一个新的集合而已.  对原集合来说就可以做到多线程安全.


Scala <my>默认采用不可变集合</my>，对于几乎所有的集合类，Scala 都同时提供了可变和不可变的版本.  
例如你直接使用`set`就是不可变的, 想用可变的需要单独去导包.

---
> 图例:

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543886390.png-atguiguText)


## 高层次的包: `scala.collection`

这个包下都是一些高层的抽象类和`trait`, 这些抽象类和`trait`既有可变的实现也有不可变的实现.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543886045.png-atguiguText)



## 不可变集合继承层次 `scala.collection.immutable`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543886157.png-atguiguText)


---

## 可变集合继承层次`scala.collection.mutable`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543886252.png-atguiguText)


# 11.2 数组

数组并不属于集合中数据结构, 但是数组的使用比较频繁, 所以我们放在与数据结构一起讲解.


# 11.2.1 定长数组

如果需要一个长度不变的数组, 可以使用 Scala 的 `Array`. 在 JVM 中, Scala 的`Array`就是以 Java 数组的形式出现的.

```scala
package com.atguigu.day11.arr

object ArrayDemo1 {
  def main(args: Array[String]): Unit = {
    // 创建一个长度为 10 整形数组   这里的方括号就表示泛型[]
    val arr1 = new Array[Int](10) // 所有的元素初始化 0
    var arr2 = new Array[String](10)  // 所有的元素初始化为 null

    // 长度为 2 的 Array[String] ,类型是推断出来的
    var arr3 = Array("a", "b")

    // 使用 数组(下标)的方式来访问数组中的元素. 注意不是 []
    println(arr1(0))
    println(arr2(1))
    println(arr3(1))
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543889377.png-atguiguText)
# 11.2.2 变长数组

变长数组是指: 数组的长度根据需要来变化. 类似于 Java 中的 `ArrayList`

Scala 中等效的数据结构是`ArrayBuffer`

```scala
package com.atguigu.day11.arr

import scala.collection.mutable.ArrayBuffer


object ArrayDemo2 {
  def main(args: Array[String]): Unit = {
    // 创建数组缓冲方式1: new 的方式, 空的缓冲数组
    val arr1 = new ArrayBuffer[Int]()
    // 创建数组缓冲方式2
    //var arr2 = ArrayBuffer[Int]
    // 用 += 的方式在尾端添加元素
    arr1 += 1
    // 用 += 同时添加多个元素
    arr1 +=(2, 4, 5)
    println(arr1)

    // 使用 ++= 可以追加任何的集合
    arr1 ++= Array(100, 200, 300)
    println(arr1)

    // 移除最后 2个 元素
    arr1.trimEnd(2)  // 在数组的末尾添加和移除元素是一个高效的操作
    println(arr1)

    // 也可以在认为位置添加,是删除元素, 但是不高效! 因为后面的所有元素都需要向前或者向后移动
    // 从下标为 2 的位置插入元素 60
    arr1.insert(2, 60)
    println(arr1)
    // 从下标为 2 的位置开始插入 70, 80.  理论上可以插入任意多的元素
    arr1.insert(2, 70, 80)
    println(arr1)

    // 移除元素  : 移除下标为 1 的元素
    arr1.remove(1)
    println(arr1)
    // 从下标为 1 的位置开始移除 3 个元素
    arr1.remove(1, 3)
    println(arr1)

    // 数组缓冲转换成数组:
    val arr: Array[Int] = arr1.toArray

  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543890414.png-atguiguText)
# 11.2.3 遍历数组和数组缓冲

在 Java 中遍历数组和`ArrayList`是不一样的.

但是在 Scala 中都做了统一, 所以遍历数组和遍历数组缓冲是一致的.

```scala
package com.atguigu.day11.arr

import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer


object ArrayDemo3 {
  def main(args: Array[String]): Unit = {
    // for循环遍历数组
    val arr1 = Array(10, 20, 30, 40)
    for (i <- 0 until arr1.length) {
      println(i + ":" + arr1(i))
    }
    // for循环遍历数组缓冲
    val arr2:mutable.Buffer[Int] = arr1.toBuffer // 把一个数组转换成数组缓冲
    for (i <- 0 until arr1.length) {
      println(i + ":" + arr2(i))
    }

    println("-----")
    // 遍历的时候改变步长
    for (i <- 0 until(arr2.length, 2)) {
      println(i + ":" + arr2(i))
    }
    println("-----")
    // 从后向前遍历
    for (i <- (0 until(arr2.length, 2)).reverse) {
      println(i + ":" + arr2(i))
    }

    println("-----")
    // 如果不需要下标, 可以直接遍历
    for (ele <- arr2) {
      println(ele)
    }
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543891225.png-atguiguText)
# 11.2.4 数组的转换

前面我们仍然是用 Java 的思维方式使用 Scala 的数组.  实际上, Scala 的数组可以有更多新奇的玩法!

从数组或者数组缓冲出发, 对数组做某种意义上的转换是很简单的. 这些转换不会修改原数组, 而是产生一个新的数组.

## 使用`for`推导式

```scala
package com.atguigu.day11.arr

object ArrayDemo4 {
  def main(args: Array[String]): Unit = {
    var arr = Array(1, 2, 3, 4, 5, 6).toBuffer
    // 使用关键字 yield 会产生一个新的数组缓冲
    var arr2 = for (ele <- arr) yield ele * ele
    println(arr2)
  }
}
```

> #### *说明:*

- 如果是从数组出发, 得到的就是数组, 如果是数组缓冲出发, 得到的就是一个数组缓冲.  

- 结果就是`yield`后的表达式, 每个元素迭代一次

## 使用守卫

如果只想处理特别的元素, 可以添加守卫.

```scala
package com.atguigu.day11.arr


object ArrayDemo4 {
  def main(args: Array[String]): Unit = {
    var arr = Array(1, 2, 3, 4, 5, 6).toBuffer
    var arr2 = for (ele <- arr  if ele % 2 == 0) yield ele * ele
    println(arr2)
  }
}
```

> #### *说明:*

- 只处理偶数, 奇数的不处理. 注意: `if`前不需要添加逗号

- 注意: 这些操作都是产生新的的数组, 不会对原数组或者缓冲带来影响

- 另外还有一些高阶函数也可以完成这些功能, 后面再了解.  <my>高级函数的方式更加函数式编程</my>.# 11.2.5 常用算法


```scala
package com.atguigu.day11.arr


object ArrayDemo4 {
  def main(args: Array[String]): Unit = {
    var arr = Array(10, 21, 32, 4, 15, 46, 17)
    println(arr.sum) // 求和
    println(arr.max)
    println(arr.min)

    println(arr.mkString) // 把数组变成字符串
    println(arr.mkString(",")) // 把数组变成字符串, 元素之间用,隔开

    // 排序, 并返回一个排好序的数组 : 默认是升序
    val arrSorted: Array[Int] = arr.sorted
    println(arrSorted.mkString(","))
    // 降序
    var arrSorted1 = arr.sortWith(_ > _)
    println(arrSorted1.mkString(","))

  }
}

```


# 11.2.6 多维数组

和 Java 一样, 也是使用的一维数组模拟的多维数组.

```scala
package com.atguigu.day11.arr

object ArrayDemo5 {
  def main(args: Array[String]): Unit = {
    // 创建一个 2 * 3 的二维数组
    val matrix: Array[Array[Int]] = Array.ofDim[Int](2, 3)
    // 访问其中的元素使用两对圆括号
    matrix(0)(0) = 100
    val i: Int = matrix(0)(0)
    println(i)

    // 创建不规则的数组
    var matrix2 = new Array[Array[Int]](3)
    for (i <- 0 until matrix2.length) {
      matrix2(i) = new Array[Int](i + 1)
    }
  }
}

```
# 11.2.7 与数组的交互操作

由于 Scala 的数组就是用 Java 的数组实现的, 所以可以在 Java 和 Scala之间来回传递.

## 1. Scala 数组转 Java List(`List`)

```scala
package com.atguigu.day11.arr

import java.util

// 这个隐式函数用来把 scala数组转换成java List
import scala.collection.JavaConversions.bufferAsJavaList
import scala.collection.mutable
import scala.collection.mutable._


object ArrayDemo6 {
  def main(args: Array[String]): Unit = {
    val arrScala = ArrayBuffer("a", "b", "c")
    // 获取到Java的中的List对象
    val listJava: util.List[String] = arrScala
    println(listJava)  // ["a", "b", "c"]
  }
}
```

---

## 2. Java 数组转 Scala 数组

```scala
package com.atguigu.day11.arr

import java.util

// 这个隐式函数用来把 scala数组转换成java数组
import scala.collection.JavaConversions.bufferAsJavaList
// 这个隐式函数用来把 Java List 转换成 Scala数组
import scala.collection.JavaConversions.asScalaBuffer
import scala.collection.mutable
import scala.collection.mutable._


object ArrayDemo6 {
  def main(args: Array[String]): Unit = {
    val arrScala = ArrayBuffer("a", "b", "c")
    // 获取到Java的中的List对象
    val listJava: util.List[String] = arrScala
    println(listJava)  // ["a", "b", "c"]
    // 再把Java数组转换成Scala数组
    var buf : mutable.Buffer[String] = listJava
    println(buf.mkString(","))
  }
}

```# 11.2.8 其他操作方法

## 可变和不可变共同拥有的

1. `++`  连接两个数组
2. `++:` 连接两个数组
3. `:+`  一个数组连接一个元素
4. `+:`  一个数组连接一个元素
5. `/:`  左折叠
6. `:\`  右折叠
7. `head` 第一个元素(重要)
8. `tail` 除第一个元素为其他元素组成的数组(重要)
9. `last` 最后一个元素
10. `max` 找到最大值
11. `min` 找到最小值

## 可变数组拥有的

1. `++=` 添加数组的元素到原来的数组中
2. `++=:`
3. `+=` 添加元素到数组中
4. `+=:` 
5. `-` 返回新的去掉指定元素的数组
6. `--` 返回新的元素
7. `-=` 修改原数组. 去掉第一次指定出现的元素
8. `--=`



# 11.3 元组

元组(tuple)是 Java 中不存在的一种数据类型.

元组也是可以理解为一个容器，可以存放各种相同或不同类型的数据。
说的简单点，就是将多个无关的数据封装为一个整体，称为元组.

元组最多存储 22 个数据.

---

## 11.3.1 元组的创建

```scala
package com.atguigu.day11.tup

object TupleDemo1 {
  def main(args: Array[String]): Unit = {
    // 两种类型的写法: 推荐第一种
    val t1: (String, Int, String, Boolean) = ("a", 1, "2", true)
    val t2: Tuple4[String, Int, String, Boolean] = ("a", 1, "2", true)
    println(t1)
    println(t2)
  }
}
```

---

## 11.3.2 访问元组中的数据

访问元组中的数据使用方法`_1`, `_2` ...

```scala
package com.atguigu.day11.tup

object TupleDemo2 {
  def main(args: Array[String]): Unit = {

    val t1: (String, Int, String, Boolean) = ("a", 1, "2", true)
    // 是用 _1 开始
    println(t1._1)
    println(t1._2)
    println(t1 _1)
    println(t1.productElement(0)) //从0开始 等价于 t1._1
    println(t1 productElement 0) // 等价于 t1._1
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543920523.png-atguiguText)

## 11.3.3 遍历元组

```scala
package com.atguigu.day11.tup

object TupleDemo2 {
  def main(args: Array[String]): Unit = {

    val t1: (String, Int, String, Boolean) = ("a", 1, "2", true)
    // 遍历 元组的迭代器
    for (ele <- t1.productIterator){
      println(ele)
    }
  }
}
```

---

# 11.4 列表`List`

Scala中的 `List` 和 Java `List` 不一样，在 Java 中 `List`是一个接口，真正存放数据是`ArrayList`，而 Scala 的`List`可以直接存放数据，就是一个`object`，默认情况下 Scala 的 `List` 不可变的。

---

## 11.4.1 创建`List`

一般有两种方式构建列表:

1. 使用`List(元素1, 元素2,...)`

2. 使用`::`和`Nil`
    `Nil` 表示为一个空列表. `::` 作用是把元素添加到列表中.运算规则从右向左.


![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543929594.png-atguiguText)

---

## 11.4.2 访问`List`中的元素

```scala
list(下标)  // 从0开始的下标
```

## 11.4.3 向列表尾部追加元素

向列表中增加元素, 会返回新的列表/集合对象。注意：Scala 中`List`元素的追加形式非常独特，和 Java 不一样。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543928525.png-atguiguText)

## 11.4.4 向列表头部增加元素

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543928716.png-atguiguText)

## 11.4.5 连接列表

使用`:::`, `++`可以连接两个列表 (`concat()`方法也可以)

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543930696.png-atguiguText)


---

## 11.4.6 常用操作

可变的`List`, 可以使用`ListBuffer`

除了支持数组的类似操作, 还支持下面的操作符:

### 不可变

1. `::` 在前面添加 === `+:`

2. `:::` 在集体前面添加新的集合 ` ++ `

### 可变

操作和可变的数组类似

















# 11.6.1 Map 取值

## 方法1: `map(key)`

```scala
package com.atguigu.day11.map

import scala.collection.mutable

object MapDemo3 {
  def main(args: Array[String]): Unit = {

    val map1: mutable.Map[String, Int]
    = mutable.Map("a" -> 1, "c" -> 2, "b" -> 3)
    println(map1("a"))
    //        println(map1("d"))  // key 不存在所以会抛出异常
    // 取值前应该判这个key是否存在, 存在再取
    if(map1.contains("d")){
      println(map1("d"))
    }else{
      println("你要查找的key不存在")
    }
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543971883.png-atguiguText)

---

## 方法2: `map.get(key).get`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543972374.png-atguiguText)

---

## 方法3: `map.getOrElse`

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543972573.png-atguiguText)













# 11.6.2 映射的增删改

```scala
package com.atguigu.day11.map

import scala.collection.mutable

object MapDemo4 {
  def main(args: Array[String]): Unit = {

    val map1 =
      mutable.Map("a" -> 1, "c" -> 2, "b" -> 3)
    // 修改值
    map1("a") = 100
    // 添加键值对: key不存在的时候就是添加
    map1("aa") = 120
    println(map1)

    // 添加多个键值对
    map1 += ("bb" -> 11, "cc" -> 12)
    println(map1)

    // 删除映射关系
    map1 -= "a"
    println(map1)

    // 连接两个映射
    val map2 = map1 ++ Map("aaa"-> 4, "bbb" -> 5)
    println("map2 = " + map2)
    println("map1 = " + map1)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543973397.png-atguiguText)

> #### *注意:*

- 只能对可变映射进行增删改, 不能对不可变映射做这些操作
- 可以通过不可变映射获取到新的映射# 11.6.3 遍历 Map

```scala
package com.atguigu.day11.map

import scala.collection.mutable

object MapDemo5 {
  def main(args: Array[String]): Unit = {

    val map1 =
      mutable.Map("a" -> 1, "c" -> 2, "b" -> 3)
    //方法1: k v 一起遍历
    for ((k, v) <- map1) {
      println(k + " = " + v)
    }
    println("-----------")
    // 方法2: 只遍历key
    for (k <- map1.keys) {
      println("k = " + k)
    }
    println("-----------")
    // 方法3: 只遍历value
    for (v <- map1.values) {
      println("v = " + v)
    }
    println("-----------")
    // 方法4: 遍历出来tuple2, 然后 _1 _2 来获取k 和v
    for (kv <- map1) {
      println(kv._1 +" = " + kv._2)
    }
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543976712.png-atguiguText)
# 11.7 Set 集合

Scala 的 `Set` 和 Java 的 `Set` 很接近.

都是不重复的元素的集合.

而且不保留顺序, 默认以 `Hash` 集的形式实现.

在 Scala 中也分可变 `Set` 和不可变 `Set`(`scala.collection.mutable.Set`), 默认是不可变`Set`

---

## 11.7.1 创建可变`Set`和不可变`Set`

```scala
package com.atguigu.day11.set

object SetDemo1 {
  def main(args: Array[String]): Unit = {
    // 创建一个不可变Set
    val set1: Set[Any] = Set(10, 2, 5, 9, "a", "bb", "aa")
    println(set1)
    import scala.collection.mutable
    // 创建一个可变Set
    val set2: mutable.Set[String] = mutable.Set("a", "c", "b")
    println(set2)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543977621.png-atguiguText)

---

## 11.7.2 可变集合元素的增加和删除

```scala
package com.atguigu.day11.set

object SetDemo1 {
  def main(args: Array[String]): Unit = {
    import scala.collection.mutable
    val set1: mutable.Set[String] = mutable.Set("a", "c", "b")
    // 向Set集合中添加元素. set1会被更改
    set1 += "abc"
    println(set1)
    // 删除 Set 集合中的元素
    set1 -= "a"
    println(set1)
    // 删除不存在的元素也不会跑出异常
    set1 -= "aa"
    println(set1)

    // 会返回一个新的集合, 原集合不变

    val set2: mutable.Set[String] = set1.+("bb")
    println(set1)
    println(set2)
  }
}
```

## 11.7.3 集合的其他操作

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1543978369.png-atguiguText)




# 12.1 `map` 映射操作

有这样一个需求: 请将`List(3,5,7)` 中的所有元素都` * 2` ，将其结果放到一个新的集合中返回，即返回一个新的`list(6,10,14)`, 请编写程序实现.

```scala
package com.atguigu.day11.operate

import scala.collection.mutable

object MapDemo {
  def main(args: Array[String]): Unit = {
    val list1 = List(1, 2, 3, 4);
    // 比较low的做法
    val list2 = mutable.MutableList[Int]() // 创建一个可变的List集合
    for (elem <- list1) {
      list2 += elem * elem
    }
    println(list2)

    // 牛逼一点: for推导
    val list3: List[Int] = for(elem <- list1) yield elem * elem
    println(list3)

    // 高逼格: 函数式编程的做法
    val list4: List[Int] = list1.map(compare) // map 接收一个函数, 所以我们传递一个函数进去
    println(list4)
  }

  def compare(a : Int): Int={
    a * a
  }
}

```

## 初步了解高阶函数的概念


在 Scala 中, 函数是一级公民, 所以可以作为参数传递也可以作为参数返回.

<my>高阶函数: 接受函数作为参数, 或者返回函数作为返回值的函数, 都叫高阶函数.</my>

```scala
package com.atguigu.day11.operate

object HighLevelDemo {
  def main(args: Array[String]): Unit = {
    def f1(b: Int): Double = {
      b * b
    }

    val d: Double = foo(f1, 10) // 计算出来 10 的平方
    println(d)
  }

  /*
  说明:
  1. 参数 f
      Int => Double, a: Int 表示 f的类型是一个函数,
      Int 表示 f 这个函数的参数类型是 Int
      Double 表示 f 这个函数的参数类型是 Double
      => 语法格式
      
  2. a: Int 普通的参数
  
  foo 就是一个高阶函数
   */
  def foo(f: Int => Double, a: Int): Double = {
    // f 既然是函数, 所以我们可以调用他
    f(a)
  }
}
```

## 练习: 

请将 `val names = List("Alice", "Bob", "Nick")` 中的所有单词，全部转成字母大写，返回到一下新的`List`集合中.

分别使用 for 推倒 Map 映射来完成

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544003601.png-atguiguText)













# 11.7 迭代器

和 java 中集合的迭代器一个原理

通过`iterator`方法从集合获得一个迭代器，通过`while`循环和`for`表达式对集合进行遍历

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544017202.png-atguiguText)
# 11.10 线程安全的集合

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544020612.png-atguiguText)
# 11.11 并行集合

Scala 为了充分使用多核 CPU，提供了并行集合（有别于前面的串行集合），用于多核环境的并行计算。
主要用到的算法有:

1. Divide and conquer : 分治算法，Scala通过splitters，combiners等抽象层来实现，主要原理是将计算工作分解很多任务，分发给一些处理器去完成，并将它们处理结果合并返回

2. Work stealin算法，主要用于任务调度负载均衡（load-balancing），通俗点完成自己的所有任务之后，发现其他人还有活没干完，主动（或被安排）帮他人一起干，这样达到尽早干完的目的

```scala
package com.atguigu.day11.operate

import scala.collection.immutable
import scala.collection.parallel.immutable.ParSeq

object ParaDemo {
  def main(args: Array[String]): Unit = {
    // 串行
    (1 to 5).foreach(println(_))
    println()
    // 集合调用par方法,得到并行集合. 输出是按照每个任务来的
    (1 to 5).par.foreach(println(_))

    // 查看每个线程的执行情况
    val list1: immutable.IndexedSeq[String] = (1 to 10).map(a => {
      Thread.currentThread().getName + " -> " + a
    })
    val list2: ParSeq[String] = (1 to 10).par.map(a => {
      Thread.currentThread().getName + " -> " + a
    })

    println(list1)
    println(list2)

  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544022075.png-atguiguText)

# 11.12 排序

三种排序算子:

1. `sortBy`

2. `sortWith`

3. `sorted`# 11.13 分组

`groupBy` 算子# 第 13 章 模式匹配

Scala 中的模式匹配类似于 Java 中的 switch 语法，但是更加强大。


模式匹配语法中，采用`match`关键字声明，每个分支采用`case`关键字进行声明，当需要匹配时，会从第一个`case`分支开始，如果匹配成功，那么执行对应的逻辑代码，如果匹配不成功，继续执行下一个分支进行判断。

如果所有`case`都不匹配，那么会执行`case _ `分支，类似于 Java 中`default`语句





# 13.1 模式匹配的基本使用

```scala
package com.atguigu.day11.moshipipei

object MatchDemo {
  def main(args: Array[String]): Unit = {
    var a1 = 10
    var a2 = 20
    var res = 0
    var operChar = "0"
    operChar match {
      case "+" => {
        res = a1 + a2
      }
      case "-" => {
        res = a1 - a2
      }
      case "*" => {
        res = a1 * a2
      }
      case "/" => {
        res = a1 / a2
      }
      case _ => println("你是运算符有误")
    }
    println("res = " + res)
  }
}
```

> #### *说明:*

- 如果所有`case`都不匹配，那么会执行`case _` 分支，类似于 Java 中`default`语句

- 如果所有`case`都不匹配，又没有写`case _` 分支，那么会抛出`MatchError`

- 每个`case`中，不用`break`语句，自动中断`case`

- 可以`在match`中使用其它类型(任意类型)，而不仅仅是字符

- `=>` 等价于 java `swtich` 的 `:`

- `=> `后面的代码块到下一个 `case`， 是作为一个整体执行，可以使用`{}` 扩起来，也可以不括

---

## 模式匹配的值

模式匹配是表达式, 所以也有自己值(在 scala 中任何语法结构都有值)

上面的可以简化:

```scala
package com.atguigu.day11.moshipipei

object MatchDemo2 {
  def main(args: Array[String]): Unit = {
    var a1 = 10
    var a2 = 20

    var operChar = "*"
    val res = operChar match {
      case "+" => a1 + a2
      case "-" => a1 - a2
      case "*" => a1 * a2
      case "/" => a1 / a2
      case _ => "你的运算符负不正确"
    }
    println("res = " + res)
  }
}
```






# 13.2 守卫

如果想要表达匹配某个范围的数据，就需要在模式匹配中增加条件"守卫"

```scala
package com.atguigu.day11.moshipipei

object MatchDemo3 {
  def main(args: Array[String]): Unit = {
    for (ch <- "+-3&%") {
      var digit = 0
      val sign = ch match {
        case '+' => 1
        case '-' => -1
        case _ if Character.isDigit(ch) => digit = Character.digit(ch, 10)
        case _ => 0
      }
      println("ch = " + ch)
      println("sign = " + sign)
      println("digit = " + digit)
      println("---------")
    }
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544062283.png-atguiguText)

> #### *说明:*

- 守卫可以是任何的布尔条件

- 模式总是从上向下进行匹配. 如果带守卫的不能匹配, 则捕获所有的模式(`case _`)会被用来匹配.

# 13.3 模式中的变量和常量

如果在`case`关键字后跟变量名，那么`match`前表达式的值会赋给那个变量


```scala
package com.atguigu.day11.moshipipei

object MatchDemo4 {
  def main(args: Array[String]): Unit = {
    var ch = 0
    'z' match {
      case 'a' => println("a...")
      case 'b' => println("b...")
      case 'c' => println("c...")
      case ch => println("变量 ch = " + ch)
    }
  }
}
```
> #### *注意:*

- 如果`case ch`匹配成功了, 则后面即使跟上`case _` 也不会再匹配

- 其实`case _` 就是`case 变量名`的特例, 你可以把`_`当做一个变量来对待.

---

但是:

> 按照约定, Scala 期望模式变量名都以小写字母开头, 而常量名则是大写字母(只要首字母大写也可以)。

如果你使用大写字母的名称，Scala 将会在作用域范围内查找常量。

但是，如果使用的是非大写字母的名称，它将只假设其是一个<my>模式变量</my>—-在作用域范围内任何具有相同非大写字母的名称都将会被忽略。

在下面的代码中，我们定义了一个和字段具有相同名称的模式变量, 但是这段代码将不会给出我们想要的结果—--模式变量隐藏了（Sample 类的）`max` 字段。

```scala
object PatternTest {
    def main(args: Array[String]): Unit = {
        val sample = new Sample
        sample.process(1000)
    }
}

class Sample {
    val max = 10000
    def process(input: Int): Unit = {

        input match {
            case max => println(s"You matched max")
        }
    }
}
```

 > #### *说明:*

- 你会发现 scala 把 `max`推断为模式变量, 而不是模式常量.

- 解决办法:
 - 办法1: 明确指定作用域:`this.max`
 - 办法2: 使用反引号类给 scala 提示. 
     ```scala
     case `max` => .....
     ```
 - 办法3: 把`max`变成大写: `MAX`
 
 









# 13.4 类型匹配

可以匹配对象的任意类型，这样做避免了使用`isInstanceOf`和`asInstanceOf`方法

```scala
package com.atguigu.day11.moshipipei

import scala.io.StdIn

object MatchType {
  def main(args: Array[String]): Unit = {

    //        var s: Any = Array(1, 2, 3)
    var s: Any = Map("a" -> 11, 2 -> 22)


    var result = s match {
      case a: Int => println(a); "匹配到的是 Int "
      case b: String => println(b); "匹配到的是 String "
      case c: Array[Int] => "匹配到的是 Array[Int] "
      case d: Map[Int, Int] => "匹配到的是Map[Int, Int]"
      case _: BigInt => "匹配到的是 BigInt"
      case _ => "啥都没有匹配到"

    }

    println(result)
  }
}

```

> #### *说明:*

- 在进行类型匹配时，编译器会预先检测是否有可能的匹配，如果没有则报错

- 如果类型匹配成功之后会把`s`的值赋值给`case`后面跟着的变量, 而不需要做类型的转换.

- 对数组来说提供数组中元素的类型是必要的,因为数组的底层类型确实是确定的.比如:`Array[Int]`这里的`Int`是必须的

- 但是对集合类型比如 `Map`, 提供泛型类型是无用的. 因为 Java 的"泛型擦除".  `Map[Int, String]和Map[Int, Int]` 在匹配的时候没有区别. 所以应该使用通用的泛型:`Map[_, _]`

```scala
package com.atguigu.day11.moshipipei

import scala.io.StdIn

object MatchType {
  def main(args: Array[String]): Unit = {
    var s: Any = Map("a" -> 11, "b" -> 22)

    var result = s match {
      case d: Map[_, _] => "匹配到的是Map"
      case _ => "啥都没有匹配到"

    }
    println(result)
  }
}
```# 13.5 匹配数组

这里的匹配数组不是指匹配类型, 而是指的<my>匹配数组的内容</my>.

要匹配数组的内容, 可以在模式中使用`Array`表达式.

```scala
package com.atguigu.day11.moshipipei

object MatchArray {
  def main(args: Array[String]): Unit = {
    val arr: Array[Int] = Array(1, 20, 11, 1)
    val res = arr match {
      case Array(0) => "Array(0)" // 匹配只有1个元素, 并且元素是0的数组
      case Array(0, 1) => "Array(0, 1)" // // 匹配只有2个元素, 并且元素是(0, 1)的数组
      // 匹配长度为3的数组, 并把元素一次赋值给 x, y, z
      case Array(x, y, z) => "x = " + x + ", y = " + y + ", z = " + z
      //case Array(1, _*) => "匹配任何以 1 作为第一个元素的数组"
      case Array(1, abc@_*) => println("Array"); abc.mkString(",")
      // 匹配长度为3的数组, 第一个必须是1, 最后一个也必须是1, 中间的没有限制
      //case Array(1, _, 1) => "1, _, 1"
      
      // 匹配任意数组
      case Array(_*) => "匹配任意数组"
      case _ => "啥也没有匹配到"
    }
    println(res)
  }
}
```# 13.6 匹配列表

```scala
package com.atguigu.day11.moshipipei

object MatchList {
  def main(args: Array[String]): Unit = {
    val arr: List[Int] = List(1, 2, 3, 5, 6)
    val res = arr match {
      //case List(1, 2) => "List(1, 2)"
      //case List(1, _*) => "匹配以 1 开头的列表"
      //case 1 :: 2 :: 3 :: Nil => "匹配List(1,2,3)"
      case 1 :: abc => println(abc); "匹配以 1 开头的列表"
      case _ => "啥也可没有匹配到"
    }
    println(res)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544068314.png-atguiguText)
# 13.7 匹配元组

```scala
package com.atguigu.day11.moshipipei

object MatchTuple {
  def main(args: Array[String]): Unit = {
    //        val tup1: (Int, Int) = (10, 20)
    val tup1: (Int, Int, Int) = (10, 20, 30)

    tup1 match {
      // 匹配第一个是10的两个元素的元组
      //            case (10, _) => println("(10, _)")
      //
      //            case (_, _, 30) => println("_, _, 30")
      case (a, b, c) => println(a + " " + b + " " + c)
      case _ => println("啥都不匹配")
    }
  }
}
```# 13.9 变量声明中的模式

在声明变量的时候, 也可以使用模式匹配的方式.(这个在其他语言中叫解构)

```scala
package com.atguigu.day11.moshipipei

object VarMatch {
  def main(args: Array[String]): Unit = {
    var (a: Int, b: Int) = (10, 20)
    println(s"a = $a, b=$b")

    val (aa, bb) = BigInt(10) /% 3
    println(s"aa = $aa, bb = $bb")

    val arr = Array(100, 200, 300, 400)
    val Array(c, _, d, _*) = arr  //
    println(s"c = $c, d = $d")
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544085757.png-atguiguText)
# 13.10 `for` 表达式中的模式 

```scala
package com.atguigu.day11.moshipipei

object MatchFor {
  def main(args: Array[String]): Unit = {
    val map = Map("a" -> 1, "b" -> 2, "c" -> 3, "d" -> 2)

    // 直接将Map中的K-V遍历出来
    for ((k, v) <- map) {
      println(s"k = $k, v = $v")
    }
    println("--------------")
    // 只遍历 v = 2的 k-v
    for((k, 2) <- map) {
      println(s"k = $k")
    }
    println("--------------")
    // 也可以使用 守卫: 遍历v > 1的
    for ((k, v) <- map if v > 1){
      println(s"k = $k, v = $v")
    }
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544089404.png-atguiguText)
# 13.11 样例类

<my>样例类是一种特别的类</my>, 他们经过优化, 然后被用于匹配模式.

如果一个类用`case`来修饰, 这样的类就是样例类.

```scala
package com.atguigu.day11.moshipipei

object CaseClassDemo1 {
  def main(args: Array[String]): Unit = {

  }
}
// 一个抽象类
abstract class Amount {}
// Dollar: 样例类 继承自 Amount
case class Dollar(value: Double) extends Amount {}

// Currency: 样例类
case class Currency(value: Double, unit : String){}
```

 > #### *说明:*

- 从反编译可以看到，当一个类是样例类(就是使用`case`来修饰类)，默认会生成一系列的方法.比如`apply,unapply,toString,copy,hashcode，equals`等等。

  ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544098539.png-atguiguText)

- 样例类是为模式匹配而优化的类

- 构造器中的每一个参数都成为`val`——除非它被显式地声明为`var`（不建议这样做）

- 在样例类对应的伴生对象中提供`apply`方法让你不用`new`关键字就能构造出相应的对象

- 提供`unapply`方法让模式匹配可以工作

- 将自动生成`toString、equals、hashCode`和`copy`方法(有点类似模板类，直接给生成，供程序员使用)

- 除上述外，样例类和其他类型完全一样。你可以添加方法和字段，扩展它们





# 12.11.1 样例类最佳实践1

当我们有一个类型为`Amount`的对象时，可以用模式匹配来匹配他的类型，并将属性值绑定到变量(即：把样例类对象的属性值提取到某个变量,该功能有用)

```scala
package com.atguigu.day11.moshipipei

object CaseClassDemo1 {
  def main(args: Array[String]): Unit = {
    val arr = Array(Dollar(1000), Currency(10000, "RMB"))

    for (ele <- arr) {
      val res = ele match {
        case Dollar(v) => "$" + v
        case Currency(v, u) => v + u
        case _ => ""
      }
      println(res)
    }
  }
}

// 一个抽象类
abstract class Amount {}

// Dollar: 样例类 继承自 Amount
case class Dollar(value: Double) extends Amount {}

// Currency: 样例类
case class Currency(value: Double, unit: String) {}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544099934.png-atguiguText)
# 12.11.2 样例类最佳实践2: 样例类的 copy 方法和带名参数

`copy`会创建一个与现有对象值相同的新对象，并可以通过带名参数来修改某些属性。

```scala
package com.atguigu.day11.moshipipei

object CaseClassDemo2 {
  def main(args: Array[String]): Unit = {
    val amt1: Currency = Currency(122.2, "美元")
    // 复制一个与 amt1 完全相同的对象
    val amt2: Currency = amt1.copy()
    val amt3: Currency = amt1.copy(value = 222.2)
    val amt4: Currency = amt1.copy(unit = "英镑")
    println(amt1)
    println(amt2)
    println(amt3)
    println(amt4)
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544100947.png-atguiguText)



# 13.12 `case`语句中的中置表示法

什么是中置表达式？1 + 2，这就是一个中置表达式

如果`unapply`方法产出一个元组，你可以在`case`语句中使用中置表示法.  

<my>这种匹配主要用来匹配序列的</my>

```scala
package com.atguigu.day11.moshipipei

object MidExpression {
  def main(args: Array[String]): Unit = {
    val list = List(1, 2, 3, 4)
    val res = list match {
      // one 会匹配第一个元素, two 会匹配第二个元素, rest 匹配剩下的所有元素
      case one :: two :: rest => s"one = $one, two = $two, rest = $rest"
      case _ => "没有任何的匹配"
    }
    println(res)
  }
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544102491.png-atguiguText)
# 13.13 匹配嵌套结构

样例类经常被用作嵌套结构.

例如: 某商场售卖货物, 经常把商品捆绑在一起进行打折销售.

案例:

1. 现在有一些商品，请使用 Scala 设计相关的样例类，完成商品可以捆绑打折出售。

2. 要求商品捆绑可以是单个商品，也可以是多个商品。

3. 打折时按照折扣xx元进行设计.

4. 能够统计出所有捆绑商品打折后的最终价格


```scala
package com.atguigu.day11.moshipipei

object MatchNest {
  def main(args: Array[String]): Unit = {
    val book1 = Book("九阳真经", 100)
    val book2 = Book("葵花宝典", 120)
    val bundle1 = Bundle("书籍", 20, book1, book2)

    println(price2(book1))
    println(price2(book2))
    println(price2(bundle1))

  }

  /**
    * 计算打包的销售的书的价格
    *
    * 方式1:
    */
  def price(item: Item): Double = {
    val money = item match {
      case Book(_, price) => price
      case Bundle(_, discount, items@_*) => {
        var sum = -discount
        for (elem <- items) {
          sum += price(elem)
        }
        sum
      }
      case _ => 0
    }
    money
  }
  // 方式2
  def price2(item: Item): Double = {
    item match {
      case Book(_, price) => price
      case Bundle(_, discount, items@_*) => {
        // 不用循环
        // 把每本书的价格映射到新的序列中, 然后再求和
        items.map(price2).sum - discount
      }
      case _ => 0
    }
  }
}

// 抽象类
abstract class Item

// 样式类 Book
case class Book(description: String, price: Double) extends Item

// 捆绑的样式类
case class Bundle(description: String, discount: Double, item: Item*) extends Item
```# 13.14 密封类

如果想让某个类的所有子类都必须在申明该类的相同的源文件中定义，可以将样例类的通用超类声明为`sealed`，这个超类称之为密封类。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544105684.png-atguiguText)

# 13.15 模拟枚举类

```scala
package com.atguigu.day11.moshipipei

object EnumDemo {
  def main(args: Array[String]): Unit = {
    val seasons = Array(Spring, Summer, Autumn, Winter)
    for (season <- seasons) {
      val msg = season match {
        case Spring => "春天"
        case Summer => "夏天"
        case Autumn => "秋天"
        case Winter => "冬天"
        case _ => "每在地球上"
      }
      println(msg)
    }
  }
}

sealed abstract class Season

case object Spring extends Season

case object Autumn extends Season

case object Summer extends Season

case object Winter extends Season
```# 第 14 章 函数式高级编程

本章是函数式编程的核心章节.# 14.1 偏函数

---

## 14.1.1 一个简单的需求

> 给你一个集合`val list = List(1, 2, 3, 4, "abc")` ，

> 请完成如下要求:
将集合`list`中的所有数字`+1`，并返回一个新的集合
要求忽略掉非数字的元素，即返回的新的集合形式为 `(2, 3, 4, 5)`

### 思路1: 使用`filter` + `map`

```scala
package com.atguigu.day12

object PianHanDemo1 {
  def main(args: Array[String]): Unit = {
    val list = List(1, 2, 3, 4, "abc")
    val list2: List[Int] = list.filter(f1).map(f2).map(f3)
    println(list2)
  }

  def f1(n: Any): Boolean = {
    n.isInstanceOf[Int]
  }

  def f2(n: Any): Int = {
    n.asInstanceOf[Int]
  }

  def f3(n: Int) = {
    n + 1
  }
}
```
### 思路2: 模式匹配

```scala
package com.atguigu.day12

object PianHanDemo2 {
  def main(args: Array[String]): Unit = {
    val list = List(1, 2, 3, 4, "abc")
    println(list.map(addOne))
  }

  def addOne(i: Any): Any = {
    i match {
      case x: Int => x + 1
      case _ =>
    }
  }
}
```

这种解决方法有问题!

<my>如果想优雅的解决前面的需求(在对符合某个条件，而不是所有情况进行逻辑操作), 偏函数可以完美的满足我们!</my>

---

## 14.1.2 偏函数基本概念

被大括号包含起来的一组`case`语句就是一个偏函数.

偏函数并非对所有的输入值都有定义.

偏函数是`PartialFunction[A,B]`特质的一个实例.(`A` 是参数类型, `B`是返回值类型)

### 1. 创建偏函数

```scala
package com.atguigu.day12

object ParDemo3 {
  def main(args: Array[String]): Unit = {

    val f1 = new PartialFunction[Any, Int] {
      // 接受传入的参数, 如果返回值值是true, 则会调用apply来创建对象
      override def isDefinedAt(x: Any): Boolean = x.isInstanceOf[Int]
      //
      override def apply(v1: Any): Int = v1.asInstanceOf[Int] + 1
    }

    val list = List(1, 2, 3, 4, "abc")
    val list2: List[Int] = list.collect(f1)
    println(list2)
  }
}
```

> #### *说明:*

- 创建偏函数需要重写两个方法:`isDefinedAt` 和 `apply`

- 接受传入的参数, 如果返回值值是`true`, 则会调用`apply`来创建对象, 如果`false`, 则不会调用`apply`方法, 相当于忽略了该元素.

- 构建偏函数时，参数形式 `[Any, Int]`是泛型，第一个表示参数类型，第二个表示返回参数
- 当使用偏函数时，会遍历集合的所有元素，编译器执行流程时先执行`isDefinedAt()`如果为`true` ,就会执行 `apply`, 构建一个新的`Int` 对象返回
执行`isDefinedAt()` 为`false` 就过滤掉这个元素，即不构建新的`Int`对象.

- `map`函数不支持偏函数，因为`map`底层的机制就是所有循环遍历，无法过滤处理原来集合的元素

- `collect`函数支持偏函数. 可以看成是支持偏函数的`map`

### 2. 创建偏函数的简写方式

```scala
package com.atguigu.day12

object ParDemo4 {
  def main(args: Array[String]): Unit = {

    val list = List(1, 2, 3, 4, "abc")
    // 简写方式1: 花括号内直接写case语句, 就是一个偏函数
    val f1: PartialFunction[Any, Int] = {
      case x: Int => x + 1
    }
    println(list.collect(f1))
    // 简写方式2:
    val list2: List[Int] = list.collect({ case x: Int => x + 1 })
    println(list2)
  }
}
```



















# 14.2 作为值的函数

在 Scala 中, 函数是一等公民.

所以, 函数也可以像数字一样, 存储在变量中.

```scala
package com.atguigu.day12

object ValDemo1 {
  def main(args: Array[String]): Unit = {
    // fun存放 isOdd这个函数
    // 后面的下划线表示: 我们确实是想用 fun 来存放函数, 而不是在调用这个函数
    // 现在 fun和isOdd是完全等价的
    val fun = isOdd _
    println(fun(11))
    println(isOdd(11))
  }
  def isOdd(x: Int): Boolean = x % 2 == 1
}
```

> 我们可以对函数做两件事情:

1. 调用它

2. 传递它:
 - 把它存放在变量中
 - 作为参数传递给另外一个函数
 

# 14.3 匿名函数

在 Scala 中, 可以不用给每个函数命名, 正如不用给每个数字命名一样.

没有函数名的函数就是<my>匿名函数</my>.

> 一个匿名函数:

```scala
// 下面就是一个匿名函数: 接收一个 Double 类型的参数, 返回这个值的平方
(x: Double) => x * x
````

匿名函数一般用在 3 个地方:

1. 函数表达式
 ```scala
 // 把匿名函数作为值存储在变量中
 val square = (x: Double) => x * x
 println(square(100))
 ```

2. 作为参数传递
 ```scala
 val list: List[Int] = List(10, 20, 30).map((x: Int) => x * x)
 println(list)
 ```
3. 作为值返回
 ```scala
 object AnonymousDemo1 {
  def main(args: Array[String]): Unit = {
    val f1: Int => Int = foo()
    println(f1(10))
    println(foo()(1000))
  }

  def foo(): Int => Int = {
    // 匿名函数作为值返回
    x: Int => x * 2
  }
```# 14.4 作为参数的函数

在前面我们已经体会到, 一个函数 A 也可以作为参数传递到函数B的内部.  在函数B 的内部, 可以调用函数A.

很多情况下, 我们喜欢把匿名函数作为参数传递出去.

```scala
object ParamDemo1 {
  def main(args: Array[String]): Unit = {
    import scala.math._
    // 传入ceil函数 _ 表示在传递函数, 而不是调用函数
    println(evaluate(ceil _))
    println(evaluate(sqrt _))
    println(evaluate(floor _))
    // 传入一个匿名函数
    print(evaluate(x => x + 10))
  }

  /*
  接收一个函数作为参数.
  内部是调用接收到的函数
   */
  def evaluate(x: Double => Double): Double = {
    x(0.25)
  }
}
```

> #### *说明:*

- `evaluate(x: Double => Double)` 中的`x: Double => Double` 表示 x 的类型是一个函数: 这个函数只要一个`Double`类型的参数, 返回值为为 `Double` 类型的数据 


# 14.6 高阶函数

<my>能够接受函数作为参数或者把好函数作为返回值的函数就叫高阶函数.</my>

我们上节课学习自定义的`evaluate`函数, 还有以前学习过的`map, filter, reduce`等都是高阶函数.


> 几个常用的高阶函数:


## `map`
 一帮用来从一个简单的集合中得到一个想要的集合.
 
## `filter` 
 把一个集合中过滤掉不想要的集合
 
## `reduce`
 对一个集合中的所有元素进行归纳
```scala
// 计算 5 的阶乘 
// _ * _  表示一个二元函数(有两个参数的函数)
// 第一个 _ 表示第一个参数, 第二个 _ 表示第二个参数
println((1 to 5).reduce(_ * _))
```

## `foreach`
  和`map`有点类似, 也是会遍历集合中的每个元素. 但是`foreach`不会返回任何的值.
  ```scala
  // 打印一个三角形
  (1 to 9).map("*" * _).foreach(println _)
  ```
  ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544697543.png-atguiguText)
  
## `sortWith`
```scala
object HighLevelDemo1 {
  def main(args: Array[String]): Unit = {
    // 返回一个按长度递减的数组
    val arr1: Array[String] =
      "I love playing Game"
        .split(" ")
        .sortWith(_.length > _.length)
    println(arr1.toBuffer)
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544698547.png-atguiguText)

# 14.7 闭包

闭包是函数式编程中的一个比较重要的概念.

很多时候你没有意识到他的存在, 但是他确确实实在为我们工作.

## 14.7.1 什么是闭包

闭包就是一个函数和与其相关的引用环境（变量）组合的一个整体(实体)

<my>如果一个函数访问了外部函数的局部变量, 那么就可以把这个函数看成一个闭包.</my>

```scala
// 这个函数就会返回一个闭包
def foo():()=>Int = {
  var a = 10
  () => a += 10; a  // 返回值为这个闭包
}
```
---

## 14.7.2 使用闭包

```scala
object ClosureDemo1 {
  def main(args: Array[String]): Unit = {
    // 获取一个闭包
    val f1 = foo()

    println(f1())
    println(f1())

    // 又一闭包. 每个闭包都有自己的环境的值, 所以这个闭包的a又从10开始了
    val f2 = foo()
    println(f2())
    println(f2())

  }


  def foo() = {
    var a = 10
    () => a += 10; a
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544699949.png-atguiguText)

---

## 14.7.3 闭包最佳实践

需求:

1. 编写一个函数 `makeSuffix(suffix: String)`  可以接收一个文件后缀名(比如.jpg)，并返回一个闭包

2. 调用闭包，可以传入一个文件名，如果该文件名没有指定的后缀(比如.jpg) ,则返回 文件名.jpg , 如果已经有.jpg后缀，则返回原文件名。

3. 要求使用闭包的方式完成

```scala
package com.atguigu.day12

object ClosureDemo2 {
  def main(args: Array[String]): Unit = {
    val fun: String => String = makeSuffix("avi")
    println(fun("hadoop视频"))
    println(fun("scala视频"))
    println(fun("苍老师视频.avi"))
  }


  def makeSuffix(suffix: String): String => String = {
    fileName => if (fileName.endsWith(suffix)) fileName else fileName + "." + suffix
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544701633.png-atguiguText)

## 14.7.4 体会闭包的好处

1. 返回的匿名函数和 `makeSuffix (suffix string)` 的 `suffix` 变量 组合成一个闭包,因为 返回的函数引用到`suffix`这个变量

2. 我们体会一下闭包的好处，如果使用传统的方法，也可以轻松实现这个功能，但是传统方法需要每次都传入后缀名，比如 `.avi` 

3. 而闭包因为可以保留上次引用的某个值，所以我们传入一次就可以反复使用。大家可以仔细的体会一把！
# 14.7 函数柯里化

柯里化(currying, 以逻辑学家 Haskell Brooks Curry 的名字命名), 指定是把原来接收两个参数的函数变成新的接收一个参数的函数的过程.

新的函数会返回一个以原来的函数的第二个参数作为参数的函数.

> 看下面的例子: 计算两个数的乘积

```scala
object CurryingDemo1 {
  def main(args: Array[String]): Unit = {
    // 如果想计算 6 * 7, 6 * 8, 6 * 9 ...
    println(mul(6)(7))
    println(mul(6)(8))
    println(mul(6)(7))

  }
  // 正常写法
  def normalMul(x: Int, y: Int) => x * y
  
  // 函数柯里化
  def mul(x: Int): Int => Int = {
    y => x * y
  }
}
```

## 简写的柯里化写法

```scala
object CurryingDemo1 {
  def main(args: Array[String]): Unit = {
    println(mul(3)(4))
    println(mul(4)(5))

    val foo: Int => Int = mul(6)
    println(foo(7))
    println(foo(8))

  }

  // 柯里化简写
  def mul(x: Int)(y: Int): Int = x * y
}
```
![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1544702952.png-atguiguText)

# 14.9 控制抽象(`Control Abstraction`)

在 Scala 给我们提供了为数不多的几种控制: `if, for, while`等.

我们可以利用 Scala 强大的抽象能力, 可以自己实现控制结构.


> 看下面的高阶函数的代码:

```scala
package com.atguigu.day13

object ControlAbstract {
  def main(args: Array[String]): Unit = {
    // 定义一个可以在线程内执行传入的函数的函数
    def runInThread(foo: () => Unit): Unit = {
      new Thread() {
        override def run(): Unit = foo()
      }.start();
    }

    // 调用函数
    runInThread(() => println("thread...."))
  }
}
```

## 14.9 名调用表示法

由于 `runInThread` 的参数函数既没有参数又没有返回值, 所以可以使用<my>名调用</my>表示法: 

在参数声明和函数调用的地方省略`()`

变成下面的样式:

```scala
// 参数部分省略 (), 但是 => 不可以省略
def runInThread(foo: => Unit) {
  new Thread() {
    override def run(): Unit = foo // foo的调用则不能再添加()
  }.start();
}

// 调用函数的时候 ()=> 省略. 只写函数体即可
// 此处看起来更像一个代码块
runInThread {
  println("thread....")
  println("哈哈哈")
}
```

> #### * 说明:*

- 只有当参数函数为无参时候才可以这样省略.

- 看起来很爽: `runInThread` 像编程语言中的关键字.😁


---

## 14.10 定义`mywhile`"关键字"

我们利用前面的换名调用表示法和函数的柯里化来抽象出来一个类似系统的`while`的关键字:`mywhile`

```scala
package com.atguigu.day13

object MyWhile {
  def main(args: Array[String]): Unit = {
    var a = 0
    mywhile(a < 10) {
      println(a)
      a += 1
    }
  }

  def mywhile(condition: => Boolean)(foo: => Unit): Unit = {

    if (condition) {
      foo
      mywhile(condition) {
        foo
      }
    }
  }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545233808.png-atguiguText)

> 补充:

```scala
// 名调用和值调用
object NameValueCall {
    def main(args: Array[String]): Unit = {
        def f() = {
            println("f...")
            10
        }

        foo1(f())
        foo1(f())
        foo2(f())
        foo2(f())
        foo2(f())
        foo2 {
            println("f...")
            10
        }
    }

    // 值调用
    def foo1(num: Int) = {
        println(num)
        println(num)
    }

    // 名调用  换名调用
    def foo2(num: => Int) = {
        println(num) //
        println(num)
        println(num)
        println(num)
        println(num)
    }
}

/*
名调用
    一种特殊的情况.

值调用
    绝大部分情况都是值调用

 */
 ```
# 14.10  部分应用函数

<my>部分应用函数和偏函数不是一个概念!</my>

调用一个函数，实际上是在一些参数上应用这个函数。

如果传递了所有期望的参数，就是对这个函数的完整应用，就能得到这次应用或者调用的结果。

然而，如果传递的参数比所要求的参数少，就会得到另外一个函数。

<my>这个函数被称为部分应用函数。</my> 部分应用函数使绑定部分参数并将剩下的参数留到以后填写变得很方便。

```scala
object OperatorDemo3 {
    def main(args: Array[String]): Unit = {
        // 只绑定第一个参数, 使用 _ 表示第二个参数未绑定
        val f: Int => Int = foo(10, _: Int)
        println(f(20))
        println(f(30))
    }

    def foo(a: Int, b: Int): Int = {
        a * b
    }
}
```# 第 15 章 函数式编程中的递归思想

在通常的面向对象编程中, 递归用的不是太多.

但是在函数式编程语言中, 递归的使用相对比较频繁.
# 15.1 递归思想

## 编程范式:

1. 在所有的编程范式中，面向对象编程`（Object-Oriented Programming）`无疑是最大的赢家。

2. 但其实面向对象编程并不是一种严格意义上的编程范式，严格意义上的编程范式分为：
 - 命令式编程（Imperative Programming）
 - 函数式编程（Functional Programming)
 - 逻辑式编程（Logic Programming）
 
 面向对象编程只是上述几种范式的一个交叉产物，更多的还是继承了命令式编程的基 因。

3. 在传统的语言设计中，只有命令式编程得到了强调，那就是程序员要告诉计算机应该怎么做。 

4. 递归则通过灵巧的函数定义，<my>告诉计算机做什么</my>。因此在使用命令式编程思维的程序中，是现在多数程序采用的编程方式，递归出镜的几率很少，而在函数式编程中，大家可以随处见到递归的方式。

5. 使用解决子问题的方案解决一个问题，也就是递归，这种想法十分诱人。许多算法和 问题本质上都是递归的。一旦我们找到窍门，使用递归来设计解决方案就变得极富表现力且直观。

## 不建议使用循环

scala 中循环不建议使用 `while` 和 `do...while`,而建议使用递归。
# 15.2 应用实例

## 15.2.1 计算连续整数的和

### 循环解法
```scala
// 从 from 一直加到 to
// 循环解法:  
def sum1(from: BigInt, to: BigInt): BigInt = {
    var num = from
    var sum: BigInt = 0
    while (num <= to) {
        sum += num
        num += 1
    }
    sum
}
```

### 递归解法

```scala
// 递归解法
// f(m, n) = m + f(m + 1, n)
def sum2(from: BigInt, to: BigInt): BigInt = {
    if (from == to) from
    else from + sum2(from + 1, to)
}
```
> #### *说明:*

- 递归算法，一般来说比较简单，符合人们的思维方式，但是由于需要保持调用堆栈，效率比较低，在调用次数较多时，更经常耗尽内存。 

- 因此，程序员们经常用递归实现最初的版本，然后对它进行优化，改写为循环以提高性能。<my>尾递归</my>于是进入了人们的眼帘。

- <my>上面的这个递归调用不是尾递归, 因为有一次额外的加法调用</my>, 这导致每一次递归调用留在堆栈中的数据都必须保留. 所以很容易出现`StackOverflowError`.
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545271053.png-atguiguText)
 
### 什么是尾递归
 
 尾递归是指递归调用是函数的最后一个语句，而且其结果被直接返回，这是一类特殊的递归调用。 
 
 由于递归结果总是直接返回，尾递归比较方便转换为循环，因此编译器容易对它进行优化。现在很多编译器都对尾递归有优化，程序员们不必再手动将它们改写为循环。
 
> 上面的递归改成尾递归:

```scala
// 尾递归
def sum3(from: BigInt, to: BigInt, sum: BigInt): BigInt = {
    if (from == to) from + sum
    else sum3(from + 1, to, sum + from)
}
```

> #### *说明:*

- 以上的调用，由于调用结果都是直接返回，所以之前的递归调用留在堆栈中的数据可以丢弃，只需要保留最后一次的数据，这就是尾递归容易优化的原因所在

- 而它的秘密武器就是上面的`sum`，它是一个累加器（accumulator，习惯上翻译为累加器，其实不一定非是“加”，任何形式的积聚都可以），用来积累之前调用的结果，这样之前调用的数据就可以被丢弃了。

- scala 已经对尾递归做了优化, 可以放心使用.(TCO: tail call optimization)

- 如果自己不确定是否为尾递归, 可以加注解:`scala.annotation.tailrec`. Scala 可以判断是否为尾递归,如果不是则会报错.

- 将一个常规递归改写成尾递归并不难。我们可以做预计算，<my>将部分结果放置在参数中，而不是在递归调用方法返回的时候做乘法操作</my>。

### 循环和递归执行效率的测试

```scala
package com.atguigu.day14
import scala.annotation.tailrec
object RecursiveDemo1 {
    def main(args: Array[String]): Unit = {
        val start1 = System.currentTimeMillis();
        System.out.println("循环开始时间: " + start1);
        println("循环计算结果 :" + sum1(1, 100000000))
        System.out.println("循环耗时: " + (System.currentTimeMillis() - start1));


        val start2 = System.currentTimeMillis();
        System.out.println("递归开始时间: " + start2);
        println("递归计算结果 :" + sum3(1, 100000000, 0))
        System.out.println("递归耗时: " + (System.currentTimeMillis() - start1));

    }

    // 循环解法
    def sum1(from: BigInt, to: BigInt): BigInt = {
        var num = from
        var sum: BigInt = 0
        while (num <= to) {
            sum += num
            num += 1
        }
        sum
    }


    // 尾递归
    @tailrec
    def sum3(from: BigInt, to: BigInt, sum: BigInt): BigInt = {
        if (from == to) from + sum
        else sum3(from + 1, to, sum + from)
    }
}
```

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545273221.png-atguiguText)

> #### *注意:*

- 在数据量小的时候执行速度无差别.
- 在数据量大的时候, 递归执行效率会比循环差一些.

---

## 15.2.2 计算斐波那契数列第`n`项

### 非尾递归版本
```scala

def fibonacci(n: Int): Int = {
    if (n <= 2) 1
    // 不是直接返回函数调用, 而是有 + 运算, 所以不是尾递归
    else fibonacci(n - 1) + fibonacci(n - 2)  
}
```

### 尾递归版本

关键是找到前面所说的所谓"累加器".

```scala
/*
    n表示将来要计算第 n 项. 可以理解成需要计算 n 次
    acc2 就是我们要求的值
    假设计算第 5 项:
    第 1 次: f(5, 0, 1)  计算出来第 1 项
    第 2 次: f(4, 1, 1)  计算出来第 2 项
    第 3 次: f(3, 1, 2)  计算出来第 3 项
    第 4 次: f(2, 2, 3)  计算出来第 4 项
    第 5 次: f(1, 3, 5)  ...
 */
@tailrec
def fibonacci(n: Int, acc1: Int, acc2: Int): Int = {
    // 当 n==1 的时候表示是第 n 次计算, acc2就是我们需要的值了
    if (n == 1) acc2
    else fibonacci(n - 1, acc2, acc1 + acc2)
}
```

---

## 15.2.3 阶乘

```scala
@tailrec
def factorial(n: Int, acc: Long): Long = {
    if (n == 1) acc
    else factorial(n - 1, acc * n)
}
```

## 15.2.4 字符串翻转

```scala
@tailrec
def reverse(s: String, acc: String): String = {
    if (s.length == 0) acc
    else reverse(s.tail, s.head + acc)

}
```

## 15.2.5 计算最大值

```scala
@tailrec
def max(arr: Array[Int], m: Int): Int = {
    if (arr.length == 0) return m
    if (arr.head > m) max(arr.tail, arr.head) else max(arr.tail, m)
}
```

## 尾递归的局限

由于 JVM 的限制，对尾递归深层次的优化比较困难，因此，Scala 对尾递归的优化很有限，它只能优化形式上非常严格的尾递归。

1. 如果尾递归不是直接调用，而是通过函数值。  不能优化
    ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545287352.png-atguiguText)

2. 间接递归不会被优化 
   间接递归(有人叫做蹦床调用 trampoline call)，指不是直接调用自身，而是通过其他的函数最终调用自身的递归
    ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545287465.png-atguiguText)


---

## 总结:

- 使用递归可以对很多问题给出美观、直观以及富有表现力的解决方案。

- 然而，程序员往 往会避免递归或者不愿意使用递归，因为在输入值比较大的时候容易栈溢出。

- Scala 编译器内 置了递归优化，可以将尾部递归直接转化成迭代，从而避免栈溢出。这种优化让我们在能够使用递归简化代码时更加自由，无须担忧栈溢出。

- Java 没有对尾递归做优化, 所有在 Java 中使用不使用尾递归没有区别




# 第 16 章 并发编程模型: Akka

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545882135.png)


[Akka 官网](https://akka.io/)
# 16.1 Akka 概述

Akka 是一个免费开源的工具集, 用于构建高并发,分布式和灵活的消息驱动型的应用程序.

## 特点

- 并发和分布式
    
- 弹性设计

- 高性能

- 去中心化

- 高扩展

---

可以基于 Akka 构建高并发的 web 框架，也可以构建分布式系统（Spark）

---

Akka 是 Actor 并发模型的一种现代化实现。

现在的 Akka 可以认为是从许多其他技术发展演化而来的, 它借鉴了 Erlang 的 Actor 模型实现，同时又引入了许多新特性，帮助构建能够处理如今大规模问题的应用程序。

# 16.2 Actor 模型介绍

本结介绍 Actor 模型相关的知识

# 16.2.1 Actor 模型的起源

Actor 并发模型最早出现于一篇叫作《A Universal Modular Actor Formalism for Artificial Intelligence》的论文，该论文发表于 1973 年，提出了一种并发计算的理论模型， Actor 就源于该模型。
# 16.2.2 什么是 Actor

首先，让我们来定义什么是 Actor。

在 Actor 模型中，Actor 是一个并发原语；

更简单地说，可以把一个 Actor 看作是一个工人，就像能够工作或是处理任务的进程和线程一样。 

也可以把 Actor 理解成某个机构中拥有特定职位及职责的员工.# 16.2.3 Actor 和消息传递

在面向对象编程语言中，对象的特点之一就是能够被直接调用：一个对象可以访问或修改另一个对象的属性，也可以直接调用另一个对象的方法。

这在只有一个线程进行这些操作时是没有问题的，但是如果多个线程同时读取并修改同一个值，那么可能就需要进行同步并加锁。

---

Actor 和对象的不同之处在于其不能被直接读取、修改或是调用。反之, <my>Actor 只能通过消息传递的方式与外界进行通信。</my>

简单来说, 消息传递指的是一个 Actor 可以接收消息（消息可以是一个对象), 可以发送消息, 也可以对接收到的消息作出回复。

尽管我们可以将这种方式与向某个方法传递参数并接收返回值进行类比，但是消息传递与方法调用在本质上是不同的：

<my>消息传递是异步的。无论是处理消息还是回复消息，Actor 对外界都没有依赖。</my>


Actor 每次只同步处理一个消息。邮箱本质上是等待 Actor 处理的一个工作队列，如 

处理一个消息时，为了能够做出响应，Actor 可以修改内部状态，创建更多 Actor 或是将消息发送给其他 Actor。

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545896659.png-atguiguText)


## 几个重要的概念

1. Actor 

 一个表示工作节点的并发原语，同步处理接收到的消息。Actor 可以保存并修改内部状态。
 
2. 消息

 用于跨进程（比如多个 Actor 之间）通信的数据。
 
3. 消息传递

 一种软件开发范式, 通过传递消息来触发各种行为, 而不是直接触发行为。
 
4. 邮箱地址

 消息传递的目标地址，当 Actor 空闲时会从该地址获取消息进行处理。
 
5. 邮箱

 在 Actor 处理消息前具体存储消息的地方。可以将其看作是一个消息队列。
 
6. Actor 系统

 多个 Actor 的集合以及这些 Actor 的邮箱地址、邮箱和配置等。
 
# 16.2.4 Actor 模型及说明

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1545901042.png)

- Akka 处理并发的方法基于 Actor 模型。(示意图)

- 在基于 Actor 的系统里，所有的事物都是 Actor，就好像在面向对象设计里面所有的事物都是对象一样。

- Actor 模型是作为一个并发模型设计和架构的。Actor 与 Actor 之间只能通过消息通信，如图的信封

- Actor 与 Actor 之间只能用消息进行通信，当一个 Actor 给另外一个 Actor 发消息，消息是有 顺序的(消息队列)，只需要将消息投寄的相应的邮箱即可。

- 怎么处理消息是由接收消息的 Actor 决定的，发送消息 Actor 可以等待回复，也可以异步处理

- ActorSystem 的职责是负责创建并管理其创建的Actor， ActorSystem 是单 例 的( 可以理解为 ActorSystem 是一个工厂，专门创建 Actor)，一个 JVM 进程中有一个即可，而 Acotr 是可以有多个的。

- Actor 模型是对并发模型进行了更高的抽象。

- Actor 模型是异步、非阻塞、高性能的事件驱动编程模型。

- Actor 模型是轻量级事件处理（1GB 内存可容纳百万级别个 Actor），因此处理大并发性能高.# 16.3 Actor 模型快速入门

通过本节的学习可以快速的入门了解一个 Actor
# 16.3.1 剖析一个 Actor

下面是一个简单的 Actor

```scala
class HelloAkka extends Actor {
    override def receive: Receive = {        
            case "Hello" => sender() ! "world"
            case _ => sender() ! Status.Failure(new Exception("unknown message"))     
    }
}
```

- `Actor`: 
要定义一个 `Actor`, 首先要继承 `Actor` 基类. 。`Actor` 基类是基本的 `Scala Actor API`，非常简单，并且符合 `Scala` 语言的特性。

- `Receive`方法: 
在 `Actor` 中重写基类的 `receive` 方法。并且返回一个 `PartialFunction`.  
 - 需要注意的是`receive`方法返回的类型是 `Receive`类型
 - `Receive`表示一种定义的类型: `type Receive = PartialFunction[Any, Unit]`
 - 所以`Receive`是一个偏函数.
 
- `sender()`: 
通过调用该方法, 我们获取了发送者的`ActorRef`(发送者的 Actor 引用). 我们可以通过发送者的`ActorRef`给发送者发送消息, 对发送者做出相应.

- `!`方法: 
用于向发送方发送响应消息.  

- `Status.Failure`: 
在收到未知的消息时, 返回一个`Status.Failure`. `Actor` 本身在任何情况下都不会自己返回 `Failure`（即使 `Actor` 本身出现错误）。因此如果想要将发生的错误通知消息发送者，那么我们必 须要主动发送一个 `Failure` 给对方。发送回 `Failure` 会导致请求方的 `Future` 被标记为失败。# 16.3.2 Actor 的创建

访问 Actor 的方法和访问普通对象的方法有所不同。

我们从来都不会得到 `Actor` 的实例，从不调用 `Actor` 的方法，也不直接改变 `Actor` 的状态，反之，只向 `Actor` 发送消息。 

除此之外，我们也不会直接访问 `Actor` 的成员，而是通过消息传递来请求获取关于 `Actor` 状态的信息。

使用消息传递代替直接方法调用可以加强封装性。

通过使用基于消息的方法，我们可以相当完整地将 `Actor` 的实例封装起来。

如果只通过消息进行相互通信的话，那么永远都不会需要获取 `Actor` 的实例。<my>我们只需要一种机制来支持向 `Actor` 发送消息并接收响应。</my>

> 在 Akka 中，这个指向 `Actor` 实例的引用叫做 `ActorRef`。`ActorRef` 是一个无类型的引用，将其指向的 `Actor` 封装起来，提供了更高层的抽象，并且给用户提供了一种与 `Actor` 进行通信的机制。


`Actor` 系统就是包含所有 `Actor` 的地方。

有一点可能相当明显：我们也正是在 `Actor` 系统中创建新的 `Actor` 并获取指向 `Actor` 的引用。`actorOf` 方法会生成一个新的 `Actor`，并返回指向该 `Actor` 的引用。

```scala
val actor: ActorRef = actorSystem.actorOf(Props(classOf[HelloActor]))
```

`Actor` 都被封装起来了，不能够被直接访问。我们不能从外部代码中直接访问 `Actor` 的状态。

---

## `Props`

为了保证能够将 `Actor` 的实例封装起来，不让其被外部直接访问，我们将所有构造函数的参数传给一个 `Props` 的实例。

`Props` 允许我们传入 `Actor` 的类型以及一个变长的参数列表。

```scala
Props(classOf[HelloActor], arg1, arg2, argn)
```





















# 16.3.3 Actor 的 HelloWorld


## 步骤1: 添加 Akka 依赖

```xml
<dependency>    <groupId>com.typesafe.akka</groupId>    <artifactId>akka-actor_2.11</artifactId>    <version>2.5.19</version></dependency>
<dependency>
    <groupId>com.typesafe.akka</groupId>
    <artifactId>akka-remote_2.11</artifactId>
    <version>2.5.19</version>
</dependency>
```

## 步骤2: 创建文件`HelloAkka.scala`

```scala
package com.atguigu.akka

import akka.actor.{Actor, ActorRef, ActorSystem, Props, Status}

class HelloAkka extends Actor {
    override def receive: Receive = {
        {
            case "Hello" => {
                println("收到 Hello 消息")
            }
            case "ok" => {
                println("收到 ok 消息")
            }
            case _ => println("收到未知消息")
        }
    }
}

object HelloAkka{
    private val actorFactory: ActorSystem = ActorSystem("actorFactory")
    private val helloAkkaRef: ActorRef = actorFactory.actorOf(Props[HelloAkka], "helloAkka")
    def main(args: Array[String]): Unit = {
        helloAkkaRef ! "Hello"
        helloAkkaRef ! "ok"
        helloAkkaRef ! "hehe"
    }
}
```

> #### *说明:*

- `private val actorFactory: ActorSystem = ActorSystem("actorFactory")`: 这行代码创建一个 `ActorSystem`, 也是`Actor`的 Context, 所有的 `Actor` 都是 `ActorSystem` 的 child.

- `actorFactory.actorOf(Props[HelloAkka], "helloAkka")` 创建一个`Actor`(使用反射的方式), `"helloAkka"` 是给创建的 Actor 的命名. 并返回创建的 `Actor`的`ActorRef`

- `helloAkkaRef ! "Hello"`: 使用 `helloAkkaRef` 来发送信息. 把`"Hello"`发送到`helloAkkaRef`的`MailBox`

- 会在底层创建 `Dispather Message` ，是一个线程池，用于分发消息， 消息是发送到对应的 `Actor` 的 MailBox

- 会在底层创建 `HelloActor` 的 `MailBox` 对象，该对象是一个队列，可接收 `Dispatcher Message` 发送的消息

- `MailBox` 实现了 `Runnable` 接口， 是一个线程， 一直运行并调用 `Actor`的 `receive` 方法， 因此当 `Dispather` 发送消息到 `MailBox` 时，在`Actor` 的 `receive` 方法就可以得到信息.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546140205.png-atguiguText)















# 16.4 Actor 间通讯

快速入门应用中, 我们只是在外部给一个 Actor 发送信息.

在 Actor 应用中, 最有意义的是两个 Actor 间的通讯.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546221064.png)

> 需求: 编写两个 Actor, 实现两个 Actor 间的通讯

## `FansActor.scala`

```scala
package com.atguigu.akka.communication

import akka.actor.{Actor, ActorRef}



class FansActor(zhiling : ActorRef) extends Actor{

    override def receive: Receive = {
        case "start" => {
            println("粉丝开始发送信息....")
            zhiling ! "志玲你好"

        }
        case "粉丝你也好!" =>{
            println("粉丝收到的信息: 粉丝你也好!")
            zhiling ! "志玲你单身吗?"
        }

        case "小妹曾经单身!" =>{
            println("粉丝收到的信息: 小妹曾经单身!")
            zhiling ! "志玲, 晚上能不能深入交流一下(¯﹃¯)"
        }

        case _ =>{
            println("粉丝收到的信息: 未知信息")
        }
    }
}
```

## `ZhilingActor.scala`

```scala
package com.atguigu.akka.communication

import akka.actor.Actor


class ZhilingActor extends Actor{
    override def receive: Receive = {
        case "志玲你好" => {
            println("志玲收到信息: 志玲你好")
            sender() ! "粉丝你也好!"   // 给发送信息的人返回信息
        }
        case "志玲你单身吗?" =>{
            println("志玲收到的信息: 志玲你单身吗")
            sender() ! "小妹曾经单身!"
        }
        case _ =>{
            println("志玲收到的信息: 未知信息")
            sender() ! "你好坏, 不知道你在说啥呀!"
        }
    }
}
```

## `App.scala`

程序的入口

```scala
package com.atguigu.akka.communication

import akka.actor.{ActorRef, ActorSystem, Props}

object App {
    def main(args: Array[String]): Unit = {
        val communicationApp = ActorSystem("communicationApp")

        val zhiling: ActorRef = communicationApp.actorOf(Props[ZhilingActor], "zhiling")
        // 创建粉丝FansActor, 需要传递 ZhilingActor 的引用过去
        val fans: ActorRef = communicationApp.actorOf(Props(classOf[FansActor], zhiling), "fans")

        // 粉丝先发信息, 通话开始
        fans ! "start"

    }
}
```


















# 17.5 Akka 网络编程

这里的网络编程是指集群中的两台计算机通过 Akka 进行通讯.

# 16.5.1 Acctor 的寻址

---

## 理解 `ActorPath`

如果我们有一个 `ActorRef` 的话， 可以调用 `actorRef.path()`得到 `Actor `的 `URL`：

`akka://ActorSystem/user/actor`

`Actor` 的路径包含两部分
 - 源：`akka://ActorSystem` 
 - 路径：`/user/actor`
 
 
源可以在本地(`akka://ActorSystem`). 也可以在远程(`akka.tcp://Actor System@192.168.43.6`)
 
无论是本地还是远程 `Actor`, 路径的格式相同(例如`/user/actor`)。
 
`ActorRef` 除了包含 `ActorPath` 外还有 `Actor` 的 `UID`, 比如`#123456`. 

`ActorPath` 仅仅包 含了 `Actor` 的路径。 

---

## 获取远程 `Actor` 的 `ActorRef`

通过`ActorSystem.actorSelection`我们可以查询位于任意路径的 `Actor`，然后向其发送消息。

```scala
val actorSelection = actorSystem.actorSelection("akka.tcp://ActorSystem@192.168.43.6:10000/user/my-actor")
```
上面的语句会返回 `ActorSelection`, 我们可以向 `ActorSelection` 发送消息.

不过 `ActorSelection` 并不要求对应的 `Actor` 一定存在。

如果我们向 `ActorSelection` 发送消息而其对应的 `Actor` 不存在，消息就会丢失。




# 16.5.2 Actor通过网络通讯

## 服务器客服`Actor`

```scala
package com.atguigu.akka.net

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import com.typesafe.config.{Config, ConfigFactory}


class ServerActor extends Actor {
    override def receive: Receive = {
        case msg: String => {
            msg match {
                case "start" => println("客服可以开始工作了...")
                case a: String if a.contains("地址") => {
                    sender() ! "北京市 昌平路 xxxx"
                }
                case a: String if a.contains("学费") => {
                    sender() ! "大数据学费 20098 元"
                }
                case a: String if a.contains("技术") => {
                    sender() ! "大数据 java 前段 python 区块链"
                }
                case a: String => {
                    sender() ! "你说的话小妹没有听懂, 再说一遍..."
                }
            }
        }
    }
}

object ServerActor {
    def main(args: Array[String]): Unit = {
        // 创建Config对象, 并监听指定的ip地址和端口
        val config: Config = ConfigFactory.parseString(
            s"""
               |akka.actor.provider="akka.remote.RemoteActorRefProvider"
               |akka.remote.netty.tcp.hostname=192.168.43.250
               |akka.remote.netty.tcp.port=10000
            """.stripMargin)
        val actorSystem: ActorSystem = ActorSystem("Server", config)
        val serverActor: ActorRef = actorSystem.actorOf(Props(classOf[ServerActor]), "ServerActor")
        serverActor ! "start"
    }
}
```

## 客户`Actor`

```scala
package com.atguigu.akka.net

import akka.actor.{Actor, ActorRef, ActorSelection, ActorSystem, Props}
import com.typesafe.config.{Config, ConfigFactory}

import scala.io.StdIn

class ClientActor(serverHost: String, serverPort: Int) extends Actor {
    var serverSelection: ActorSelection = _

    /**
      * 当一个Actor启动的时候回调这个方法.
      * 通常在这个方法内部做一些初始化的工作
      */
    override def preStart(): Unit = {
        println(serverHost)
        serverSelection = context.actorSelection(s"akka.tcp://Server@${serverHost}:${serverPort}/user/ServerActor")
    }

    override def receive: Receive = {
        case "start" => {
            println("客户端已经开启, 可以向客服咨询问题...")
            // 使用serverSelection向服务器发送信息
            serverSelection ! StdIn.readLine()
        }
        case msg: String => {
            println("客服: " + msg)
            serverSelection ! StdIn.readLine() // 收到客服的恢复之后, 继续向客服咨询问题
        }
        case _ => {

        }
    }
}

object ClientActor {

    def main(args: Array[String]): Unit = {
        // 客户端监听配置
        val config: Config = ConfigFactory.parseString(
            s"""
               |akka.actor.provider="akka.remote.RemoteActorRefProvider"
               |akka.remote.netty.tcp.hostname=192.168.43.250
               |akka.remote.netty.tcp.port=9999
            """.stripMargin)
        val clientSystem: ActorSystem = ActorSystem("Client", config)
        val clientActor: ActorRef = clientSystem.actorOf(Props(classOf[ClientActor], "192.168.43.250", 10000), "clientActor")
        clientActor ! "start"
    }
}
```

## 测试

## 步骤1: 启动服务器端

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546246039.png-atguiguText)

## 步骤2: 启动客户端

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546246135.png-atguiguText)







# 16.5.3 Actor通过网络通讯升级版

前面的案例中, `Actor`通讯时使用的数据类型是字符串. 

当传递的数据比较多的时候, 只用字符串不太方便.

我们可以传递自定义类型的数据.

使用样例类做传递的数据类型最为方便.


## 把传递的数据类型改为样例类

### `MessageProtocol.scala`

```scala
package com.atguigu.akka.net2

/*
客户端发给服务器端的数据类型
 */
case class ClientMessage(msg: String)
/*
服务器发给客户端的数据类型
 */
case class ServerMessage(msg: String)
```

### `ServerActor.scala`

```scala
package com.atguigu.akka.net2

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import com.typesafe.config.{Config, ConfigFactory}


class ServerActor extends Actor {
    override def receive: Receive = {
        case "start" => println("客服可以开始工作了...")
        case ClientMessage(msg) => {
            msg match {
                case a: String if a.contains("地址") => {
                    sender() ! ServerMessage("北京市 昌平路 xxxx")
                }
                case a: String if a.contains("学费") => {
                    sender() ! ServerMessage("大数据学费 20098 元")
                }
                case a: String if a.contains("技术") => {
                    sender() ! ServerMessage("大数据 java 前段 python 区块链")
                }
                case a: String => {
                    sender() ! ServerMessage("你说的话小妹没有听懂, 再说一遍...")
                }
            }
        }
    }
}

object ServerActor {
    def main(args: Array[String]): Unit = {
        // 创建Config对象, 并监听指定的ip地址和端口
        val config: Config = ConfigFactory.parseString(
            s"""
               |akka.actor.provider="akka.remote.RemoteActorRefProvider"
               |akka.remote.netty.tcp.hostname=localhost
               |akka.remote.netty.tcp.port=10000
            """.stripMargin)
        val actorSystem: ActorSystem = ActorSystem("Server", config)
        val serverActor: ActorRef = actorSystem.actorOf(Props(classOf[ServerActor]), "ServerActor")
        serverActor ! "start"
    }
}
```

### `ClientActor`

```scala
package com.atguigu.akka.net2

import akka.actor.{Actor, ActorRef, ActorSelection, ActorSystem, Props}
import com.typesafe.config.{Config, ConfigFactory}

import scala.io.StdIn

class ClientActor(serverHost: String, serverPort: Int) extends Actor {
    var serverSelection: ActorSelection = _

    /**
      * 当一个Actor启动的时候回调这个方法.
      * 通常在这个方法内部做一些初始化的工作
      */
    override def preStart(): Unit = {
        println(serverHost)
        serverSelection = context.actorSelection(s"akka.tcp://Server@${serverHost}:${serverPort}/user/ServerActor")
    }

    override def receive: Receive = {
        case "start" => {
            println("客户端已经开启, 可以向客服咨询问题...")
            // 使用serverSelection向服务器发送信息
            serverSelection ! ClientMessage(StdIn.readLine())
        }
        case ServerMessage(msg) => {
            println("客服: " + msg)
            serverSelection ! ClientMessage(StdIn.readLine()) // 收到客服的恢复之后, 继续向客服咨询问题
        }
        case _ => {

        }
    }
}

object ClientActor {

    def main(args: Array[String]): Unit = {
        // 客户端监听配置
        val config: Config = ConfigFactory.parseString(
            s"""
               |akka.actor.provider="akka.remote.RemoteActorRefProvider"
               |akka.remote.netty.tcp.hostname=localhost
               |akka.remote.netty.tcp.port=9999
            """.stripMargin)
        val clientSystem: ActorSystem = ActorSystem("Client", config)
        val clientActor: ActorRef = clientSystem.actorOf(Props(classOf[ClientActor], "localhost", 10000), "clientActor")
        clientActor ! "start"
    }
}
```# 第 17 章 一些杂乱的知识

本章介绍一些 Scala 中的杂乱的知识
# 17.1 类型推断 

scala 具有强大的类型推断能力, 但是也不是所有的地方都可以推断出来类型, 下面的几种情况就<my>无法使用 scala 的类型推断</my>:

- 当定义没有初始值的类字段时`val a: Int = _`

- 当定义函数或方法的参数时；

- 当定义函数或方法的返回类型，仅当我们使用显式的 return 语句或者使用递归时

- 当将变量定义为另一种类型，而不是被直接推断出的类型时，如 `val d1: Double = 1`。


除了这几种情况, 类型信息都是可选的, 如果忽略类型, 则 scala 会进行推断.


# 17.2 基础类型

不仅可以在 Scala 中使用 Java 的任何类型，

而且同时也可以享受到由 Scala 提供的一些原生类型。

---

## `Any`类型

scala 的 `Any` 类型的所有超类型.

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1546755950.png-atguiguText)

`Any` 类型可以作为任意类型对象的一个通用引用。

`Any` 是一个抽象类，定义了如下方 法：
```
!=()
##()
==()
asInstanceOf
equals()
hashCode()
isInstanceOf
toString()
getClass()
```

---

## `AnyVal`和`AnyRef`

`Any` 类型的直接后裔是 `AnyVal` 和 `AnyRef` 类型。

`AnyVal` 是 Scala 中所有值类型（如 `Int、Double` 等）的基础类型，并映射到了 Java 中的原始类型，

而 `AnyRef` 是所有引用类型的基础类型。

尽管 `AnyVal` 没有什么额外的方法，但是 `AnyRef` 包含了 Java 的 `Object` 的方法，如 `notify()、wait()、finalize()`等。

`Any` 类型位于类型层次结构的最顶层，而最底层的类型是 `Nothing`。

---

## `Nothin`类型

在 Scala 中，`Nothing` 是一切类型的子类型。

我们很容易明白我们为何需要 `Any` 类型，但是 `Nothing` 类型在一开始看起来相当奇怪，特别是因为它代表了任何类型的子类型。


`Nothing` 类型在 Scala 的类型验证机制的支持上意义重大。

Scala 的类型推断尽可能地 确定表达式和方法的类型。如果推断出的类型太过宽泛，则不利于类型验证。

同时，我们确实也希望可以推断这样的表达式或函数的类型，例如: 在分支中, 其一个分支可以返回，如 `Int` 类型的结果， 而另一个分支抛出异常.

```scala
def someOp(number: Int) = {
    if (number < 10)
        number * 2
    else
        throw new RuntimeException("invalid argument")
}
```

在前面这种情况下，将该函数的返回类型推断为 `Any` 类型则太宽泛了，而且也没有什么用， 而将返回类型推断为 `Int` 则更为有用。

我们可以很容易地看出该算术表达式的计算结果类型为 `Int`。

此外，也必须要推断抛出异常的分支的结果类型，在这种情况下，需要为其返回一个 `Int` 类型或者 `Int` 类型的子类型，以便使其和推断的返回类型兼容。

但是，`throw` 语句的结果类型不能被推断为 `Int` 类型而被任意处理， 因为在任何地方都可能会引发异常。 `Nothing` 类型这时候就派上用场了—--通过作为所有类型的子类型，它使类型推断过程得以顺利进行。

因为`Nothing`是所有类型的子类型，所以它可以替代任何东西。

`Nothing` 是抽象的，因此在运行时永远都不会得到一个真正的 `Nothing` 实例。<my>它是一个纯粹的辅助类型，用于类型推断以及类型验证。</my>

---

## `Option`类型

Java 的空指针异常是所有程序员的梦魇.  Java 之父曾经也说过 `null`的设计师他的一个错误.

> 在 Joshua Bloch 的 Effective Java[Blo08] 一书中有这样的合理建议：
返回空集合，而不是 null 引用。

如果遵循这个建议，我们就不必忍受 `NullPointerException` 了。

即使结果 集合为空，迭代也会变得很容易。在使用集合的时候，这是很好的建议，但是在使用其他返回类型时，我们也需要类似的内容。

例如，在执行模式匹配时，匹配的结果可能是对象、列表、元组等，也可能不存在。从两方面来说，悄无声息地返回一个 null 是有问题的。
- 首先，可能没有结果值这个事实并没有被明确地（通过类型）表示出来。
- 其次，没有办法强制要求函数的调用者来检查是不存在 还是 `null`。

Scala 进一步指定了可能的不存在性。使用 Scala 的 `Option[T]`，可以进行有意图的编程，并指定打算不返回结果。

Scala 以类型安全的方式实现了这一点，因此可以在编译时强制 进行检查。

`Option`有两个子类:`Some`和`None`

当返回类型是`Option`的时候, 其实就是在告诉调用者: 哥们, 返回的值中有可能有`null`你要小心了.

```scala
object Test {
    def commentOnPractice(input: String) = { // 而不是返回 null
        if (input == "test")
            Some("good")
        else
            None
    }


    def main(args: Array[String]): Unit = {
        for (input <- Set("test", "hack")) {
            val comment = commentOnPractice(input)
            // 如果返回的是None, 则把参数返回
            val commentDisplay = comment.getOrElse("Found no comments")
            println(s"input: $input comment: $commentDisplay")
        }
    }
}
```

---

## `Either`类型

当一个函数调用的结果可能存在也可能不存在时，`Option` 类型很有用。

有时候，你可能希望从一个函数中返回两种不同类型的值之一。
这个时候，`Scala` 的 `Either` 类型就派上用场了。

<my>如果想要表明一个值可能不存在，就使用 `Option` 类型；但是，如果结果可能会在两个不同的值之间变化，就使用 `Either` 类型。</my>

`Either`本身是个抽象类, 他有两个直接的实现子类: `Left`和`Right`

左值(`Left`)（通常被认为是错误）和右值(`Right`)（通常被认为是正确的或者符合预期的值）。

```scala
object Test {
    def compute(input: Int): Either[String, Double] = {
        if (input > 0)
            Right(math.sqrt(input))
        else
            Left("Error computing, invalid input")
    }

    def displayResult(result: Either[String, Double]): Unit = {
        result match {
            case Left(value) => println(s"result = $value")
            case Right(error) => println(s"error = $error")
        }
    }

    def main(args: Array[String]): Unit = {
        // 使用模式匹配来取出其中的值
        displayResult(compute(10))
        displayResult(compute(-10))
    }
}
```
















# 第 18 章 类型参数

本章介绍 Sala 中的类型参数相关的信息.

# 18.1 泛型类


和 Java 一样, 类和特质可以带类型参数.

在 scala 中使用<my>方括号</my>来定义类型参数.

```scala
class Pair[T, V](a: T, b: V) {
    def foo(): T ={
        println(a, b)
        a
    }
}

object Pair {
    def main(args: Array[String]): Unit = {
        val pair = new Pair(3, "abc")
        pair.foo()

    }
}
```

> #### *说明:*

- 上面定义了一个带有两个泛型参数的类. 带有一个或多个类型参数的类就是泛型类.

- 在泛型类内部, 可以使用泛型参数来定义变量, 方法参数, 返回值类型.

- Scala 会从构造函数推断出实际类型, 这很省心.

- 也可以指定类型

---

练习: 定义可以存储不同消息类型的`Message`类
# 18.2 泛型函数

函数和方法也可以带类型参数.

```scala
def len[K](arg: Array[K]) ={
    arg(arg.length / 2)
}
```
Scala 会从调用该方法的实际参数类推断出该类型.

如有必要也可以指定具体的类型:

```scala
object Pair {
    def main(args: Array[String]): Unit = {
        println(len(Array(10, 20, 30, 40)))
        println(len[String](Array("a", "b", "c", "d")))
    }

    def len[K](arg: Array[K]) ={
        arg(arg.length / 2)
    }
}
```
# 18.3 类型变量界定

类型变量界定, 就类似于 Java 中的泛型上下限.


## 定义上界

> 需求: 一个函数接收两个参数, 返回较大的那个参数.

```scala
def max[T](a:T, b:T): T ={
    if(a.compareTo(b) > 0) a else b  // 错误: 因为scala并不能知道a中是否否有compareTo方法
}
```

我们可以给泛型`T`添加一个上界: `T <: Comparable[T]`

```scala

def max[T <: Comparable[T]](a:T, b:T): T ={
    if(a.compareTo(b) > 0) a else b  // 正确: 要求传来的参数必须实现Comparable接口. T 必须是 Comparable 的子类型.
}
```

### 上界测试题:

```scala
object LowerBoundsDemo {
    def main(args: Array[String]): Unit = {
        biophony(Seq(new Bird, new Bird)) //?
        biophony(Seq(new Animal, new Animal)) //?
        biophony(Seq(new Animal, new Bird)) //?
        biophony(Seq(new Earth, new Earth)) //?
    }

    def biophony[T <: Animal](things: Seq[T]) = things map (_.sound)
}

class Earth { //Earth 类
    def sound() { //方法
        println("hello !")
    }
}

class Animal extends Earth {
    override def sound() = { //重写了Earth的方法sound()
        println("animal sound")
    }
}

class Bird extends Animal {
    override def sound() = { //将Animal的方法重写
        print("bird sounds")
    }
}
```


## 定义下界

```scala
def foo[T >: Int](a: T): Unit = {

}
```

### 下界练习题

```scala
class Earth { //Earth 类
    def sound() { //方法
        println("hello !")
    }
}

class Animal extends Earth {
    override def sound() = { //重写了Earth的方法sound()
        println("animal sound")
    }
}

class Bird extends Animal {
    override def sound() = { //将Animal的方法重写
        print("bird sounds")
    }
}

class Moon
```

```scala
object LowerBoundsDemo {
    def main(args: Array[String]): Unit = {

        biophony(Seq(new Earth, new Earth)).map(_.sound())

        biophony(Seq(new Animal, new Animal)).map(_.sound())
        biophony(Seq(new Bird, new Bird)).map(_.sound())

        val res = biophony(Seq(new Bird))

        val res2 = biophony(Seq(new Object))
        val res3 = biophony(Seq(new Moon))
        println("\nres2=" + res2)
        println("\nres3=" + res2)

    }

    def biophony[T >: Animal](things: Seq[T]) = things
}
```


---

## 总结:

在实际使用中, 

- 一般上界用在函数的参数类型
- 下界用在函数的返回值类型


# 18.4 视图界定

`<%` 

```scala
def foo[T <% Comparable[T]]() {

}
```
> #### *说明:*

- 表示 `T` 可以隐式转换成`Comparable[T]` 类型

- 比如可以解决前面的出现的`Int`不是`Comparable`类型的问题.

- `Int` 没有继承`Comparable`, 但是`RichInt`继承了`Comparable`, 而且还提供了一个从`Int`到`RichInt`的隐式转换.

- 使用`Ordered`特质会更好, 因为它还提供了关系运算符.
    ```scala
    def max[T <% Ordered[T]](first: T, second: T) ={
        if(first > second) first else second
    }
    ```

---

## 案例:

前面计算最大值的例子修改为视图界定# 18.5 上下文界定

与 view bounds 一样 context bounds(上下文界定)也是隐式参数的语法糖。为语法上的方便， 引入了"上下文界定"这个概念

语法:
```scala
T:M
```

其中, `M`是另外一个泛型类. 他要求作用域中必须存在一个类型为`M[T]`的隐式值.

## 案例1:

```scala
object ContextBoundDemo {
    def main(args: Array[String]): Unit = {
        val pair = new Pair(1,2)
        println(pair.smaller)
    }
}

class Pair[T:Ordering](first: T, second: T){
    def smaller(implicit ord: Ordering[T]) ={
        if (ord.lt(first, second)) first else second
    }
}
```

> #### 说明

- 我们`new Pair(1,2)`的时候, Scala 会推断出`T`为`Int`, 由于`Predef`作用域中存在一个类型为`Ordering[Int]`的隐式值, 因此`Int`满足上下文界定. 这个`Ordering[Int]`类型的值就会传入需要该值的方法当中.

- 如果你愿意, 也可以获取这个隐式值(通过`Predef`对象的`implicitly`方法): 
 ![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1551618439.png-atguiguText)
 ```scala
 def smaller =
        // 从冥界召唤隐式值
        if (implicitly[Ordering[T]].lt(first, second)) first else second
```
    

---

## 案例2:

```scala
package Generic

import scala.runtime.RichInt

object GenericDemo1 {

    implicit val ord: Ordering[User] = new Ordering[User] {
        override def compare(x: User, y: User): Int = x.age - y.age
    }

    def main(args: Array[String]): Unit = {
        val pair = new Pair(new User(10), new User(20))
        println(pair.smaller)
    }
}

class User(val age: Int) {
    override def toString: String = s"age = $age"
}

class Pair[T: Ordering](val first: T, val second: T) {
    def smaller(implicit ord: Ordering[T]): T = {
        if (ord.compare(first, second) < 0)
            first
        else
            second
    }
}

```# 18.6 协变,逆变和不变

Scala 阻止我们将一个指向 `ArrayList[Int]`的引用赋值给一个指向 `Array List[Any]`的引用。这是一件好事情。

通常来说，一个派生类型的集合不应该赋值给一个基类型的集合。

如果在期望接收一个基类实例的集合的地方，能够使用一个子类实例的集合的能力叫作<my>协变(covariance)</my>。

如果而在期望接收一个子类实例的集合的地方，能够使用一个超类实例的集合的能力叫作<my>逆变(contravariance)</my>。

<my>在默认的情况下，Scala 都不允许, 即不变(invariance)。</my>

---

## 18.6.1 定制集合的型变

我们也可以在定义集合类的时候控制这一行为，让集合类直接支持协变和逆变.

使用`[+T]`支持协变, 使用`[-T]` 支持逆变.  `[T]`表示不变.

```scala
package day02.po

// Pet 类
class Pet(val name: String) {
    override def toString: String = name
}

// Dog类, 并继承 Pet类
class Dog(override val name: String) extends Pet(name)

// 定义支持协变的类
class MyList1[+T] {}

//  定义支持逆变的类
class MyList2[-T] {}

object Test {
    
    def main(args: Array[String]): Unit = {
        var pets1: MyList1[Pet] = new MyList1[Pet]
        var dogs1: MyList1[Dog] = new MyList1[Dog]
        pets1 = dogs1 // 编译正确  协变

        //------
        var pets2: MyList2[Pet] = new MyList2[Pet]
        var dogs2: MyList2[Dog] = new MyList2[Dog]
        dogs2 = pets2 // 编译正确  逆变
    }
}
```

在默认情况下，Scala 编译器将会严格检查型变。

我们也可以要求对协变或者逆变进行宽大处理。无论如何，Scala 都会检查型变是否可靠。


# 第 19 章 操作符

本章对 Scala 中的操作做一些提高# 19.2 中置操作符

我们以前经常这样写: `1 to 9`

这里的 `to` 就是一个操作符.  它带有两个参数: 一个隐式参数一个显示参数.

上面的表达式实际是在调用`1.to(9)`.

这样的表达式称为中置表达式, `to`这样的操作符称为中置操作符.

我们也可以在自己的类中定义操作符:

```scala
package com.atguigu.akka

/**
  * 表示一个分数 x / y
  *
  * @param x
