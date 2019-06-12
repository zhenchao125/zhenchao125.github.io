# 16.4.3 CustomerView.scala

```scala
package com.atguigu.chapter16.view

import com.atguigu.chapter16.bean.Customer
import com.atguigu.chapter16.service.CustomerService

import scala.io.StdIn

object App {
    def main(args: Array[String]): Unit = {
        new CustomerView().mainMenu
    }
}

class CustomerView {

    var key: Char = _ // 用户的的操作选择
    var isExit: Boolean = false // 是否退出系统
    val cs = new CustomerService // CustomerService 对象, 实际操作数据

    /**
      * 显示主菜单
      * -----------------客户信息管理软件-----------------
      *
      * 1 添 加 客 户
      * 2 修 改 客 户
      * 3 删 除 客 户
      * 4 客 户 列 表
      * 5 退       出
      *
      * 请选择(1-5)：_
      */
    def mainMenu() = {
        while (!isExit) {
            println()
            println("           1 添 加 客 户")
            println("           2 修 改 客 户")
            println("           3 删 除 客 户")
            println("           4 客 户 列 表")
            println("           5 退       出")
            print("\n请选择(1-5)：")
            // 接收用户的选择:
            key = StdIn.readChar()
            key match {
                case '1' => add
                case '2' => modify
                case '3' => del
                case '4' => list
                case '5' => isExit = true
                case _ => println("你的输入不正确, 请重新输入 1 - 5")
            }
        }
        println("\n欢迎下次光临!!!")
    }

    /**
      * 显示客户列表
      * ---------------------------客户列表---------------------------
      * 编号  姓名       性别    年龄   电话            邮箱
      * 1    张三       男      30     010-56253825   abc@email.com
      * 2    李四       女      23     010-56253825    lisi@ibm.com
      * 3    王芳       女      26     010-56253825   wang@163.com
      * -------------------------客户列表完成-------------------------
      */
    def list(): Unit = {
        println("\n---------------------------客户列表---------------------------\n")
        println("编号\t\t姓名\t\t性别\t\t年龄\t\t电话\t\t邮箱")
        // 1. 拿到列表数据
        val customers = cs.list()
        // 2. 显示
        for (customer <- customers) {
            println(customer)
        }
        println("\n-------------------------客户列表完成-------------------------\n")
    }

    /**
      * ---------------------添加客户---------------------
      * 姓名：张三
      * 性别：男
      * 年龄：30
      * 电话：010-56253825
      * 邮箱：zhang@abc.com
      * ---------------------添加完成---------------------
      */
    def add() = {
        val customer = new Customer
        println("\n---------------------添加客户---------------------\n")
        print("姓名: ")
        customer.name = StdIn.readLine()

        print("性别: ")
        customer.gender = StdIn.readLine()

        print("年龄: ")
        customer.age = StdIn.readInt()

        print("电话: ")
        customer.phone = StdIn.readLine()

        print("邮箱: ")
        customer.email = StdIn.readLine()

        if (cs.add(customer)) {
            print("\n---------------------添加完成---------------------\n")
        } else {
            print("\n---------------------添加失败---------------------\n")
        }
    }

    /**
      * 删除客户
      *
      * ---------------------删除客户---------------------
      * 请选择待删除客户编号(-1退出)：
      * 确认是否删除(Y/N)：
      * ---------------------删除完成---------------------
      */
    def del: Unit = {
        println("\n---------------------删除客户---------------------\n")
        print("请选择待删除客户编号(-1退出)：")
        val id = StdIn.readInt()
        if (id == -1) return
        print("确认是否删除(Y/N)：")
        val yesOrNo = StdIn.readLine().toLowerCase
        if (yesOrNo == "y") {
            if (cs.del(id)) {
                println("\n---------------------删除完成---------------------\n")
            } else {
                println("\n删除失败, 你删除的客户不存在\n")
            }
        }
    }

    /**
      * ---------------------修改客户---------------------
      *
      * 请选择待修改客户编号: (-1退出) : 2
      * 开始修改客户信息:<直接回车表示不修改>
      * 姓名(张三): 志玲
      * 性别(女): femal
      * 年龄(22): 0
      * 电话(120): 
      * email(zhangsan@sohu.com): 
      *
      * ---------------------修改完成---------------------
      */
    def modify: Unit = {
        println("\n---------------------修改客户---------------------\n")

        print("请选择待修改客户编号: (-1退出) : ")
        val id = StdIn.readInt()
        val index = cs.findCustomerIndex(id) // 查找待删除的客户的下标
        if (index == -1) {
            println("你要修改的客户不存在!!!")
            return
        }
        println("开始修改客户信息:<直接回车表示不修改>")
        val customer: Customer = cs.list()(index)

        print(s"姓名(${customer.name}): ")
        val name = StdIn.readLine
        if (name.length > 0) customer.name = name

        print(s"性别(${customer.gender}): ")
        val gender = StdIn.readLine
        if (gender.length > 0) customer.gender = gender

        print(s"年龄(${customer.age}): ")
        val age = StdIn.readLine
        if (age.length > 0) customer.age = age.toInt

        print(s"电话(${customer.phone}): ")
        val phone = StdIn.readLine
        if (phone.length > 0) customer.phone = phone

        print(s"email(${customer.email}): ")
        val email = StdIn.readLine
        if (email.length > 0) customer.email = email


        println("\n---------------------修改完成---------------------\n")
    }
}
```