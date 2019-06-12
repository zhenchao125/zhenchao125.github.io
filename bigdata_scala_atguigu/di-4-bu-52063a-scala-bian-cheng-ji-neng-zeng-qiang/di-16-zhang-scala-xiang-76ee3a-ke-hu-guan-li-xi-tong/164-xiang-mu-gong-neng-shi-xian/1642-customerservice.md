# 16.4.2 CustomerService

```scala
package com.atguigu.chapter16.service

import com.atguigu.chapter16.bean.Customer

import scala.collection.mutable.ListBuffer

class CustomerService {


    val customers: ListBuffer[Customer] = new ListBuffer[Customer]
    customers.append(new Customer(1, "李四", "男", 20, "110", "lisi@sohu.com"))
    customers.append(new Customer(2, "张三", "女", 22, "120", "zhangsan@sohu.com"))
    customers.append(new Customer(3, "王五", "男", 20, "119", "wangwu@sohu.com"))

    def list() = {
        customers
    }

    def add(customer: Customer): Boolean = {
        customer.id = customers.last.id + 1
        customers.append(customer)
        true
    }


    def del(id: Int): Boolean = {
        val index: Int = findCustomerIndex(id)
        if (index != -1) {
            customers.remove(index)
            true
        }
        else false
    }

    /**
      * 找到还要删除的客户的下标
      *
      * @param id
      * @return
      */
    def findCustomerIndex(id: Int): Int = {
        for (i <- 0 until customers.length) {
            if (customers(i).id == id) {
                return i
            }
        }
        -1
    }


}

object abc {
    def main(args: Array[String]): Unit = {
        val list = List("a", "b")

    }
}
```