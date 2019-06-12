# 16.4.1 Customer.scala

```scala
package com.atguigu.chapter16.bean

class Customer {
    var id: Int = _
    var name: String = _
    var gender: String = _
    var age: Int = _
    var phone: String = _
    var email: String = _

    def this(id: Int, name: String, gender: String, age: Int, phone: String, email: String) {
        this
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    def this(name: String, gender: String, age: Int, phone: String, email: String) {
        this(-1, name, gender, age, phone, email)
    }

    override def toString = s"$id\t\t$name\t\t$gender\t\t$age\t\t$phone\t\t$email"


    def canEqual(other: Any): Boolean = other.isInstanceOf[Customer]

    override def equals(other: Any): Boolean = other match {
        case that: Customer =>
            (that canEqual this) &&
                id == that.id
        case _ => false
    }

    override def hashCode(): Int = {
        val state = Seq(id)
        state.map(_.hashCode()).foldLeft(0)((a, b) => 31 * a + b)
    }
}
```