# 第 10 章 Sqoop

![](http://lizhenchao.oss-cn-shenzhen.aliyuncs.com/1540456829.png-atguiguText)

[Sqoop官网](http://sqoop.apache.org/)

Sqoop 是一款开源的工具，<my>主要用于在 Hadoop(Hive) 与传统的数据库( mysql、postgresql... )间进行数据的传递</my>

可以将一个关系型数据库（例如 ： MySQL, Oracle, Postgres 等）中的数据导进到 Hadoop 的 HDFS 中，也可以将 HDFS 的数据导进到关系型数据库中。

Sqoop 项目开始于 2009 年，最早是作为 Hadoop 的一个第三方模块存在，后来为了让使用者能够快速部署，也为了让开发人员能够更快速的迭代开发，Sqoop 独立成为一个 Apache 项目。

最新的稳定版本是 1.4.7。Sqoop2 的最新版本是 1.99.7。请注意，1.99.7 与1.4.7 不兼容，且没有特征不完整，它并不打算用于生产部署。

我们仍然学习 1.4.7
