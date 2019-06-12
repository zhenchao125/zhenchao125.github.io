# 第 12 章 配置 Hive 1.2.2 版本

由于 Hive2.3.3版本有点高, 和其他框架配合有时候会有一些问题.
所以本章介绍如何配置 Hive1.2.2

## 步骤1: 解压, 在 profile 文件中配置 hive的路径等.

## 步骤2: 配置 `hive-env.sh`文件

```
（a）配置HADOOP_HOME路径
export HADOOP_HOME=/opt/module/hadoop-2.7.2
（b）配置HIVE_CONF_DIR路径
export HIVE_CONF_DIR=/opt/module/hive/conf
```
## 步骤3: 在hadoop集群上创建目录
如果前面已经配置可以省略
```
[atguigu@hadoop102 hadoop-2.7.2]$ bin/hadoop fs -mkdir /tmp
[atguigu@hadoop102 hadoop-2.7.2]$ bin/hadoop fs -mkdir -p /user/hive/warehouse

[atguigu@hadoop102 hadoop-2.7.2]$ bin/hadoop fs -chmod g+w /tmp
[atguigu@hadoop102 hadoop-2.7.2]$ bin/hadoop fs -chmod g+w /user/hive/warehouse
```

## 步骤4: 配置 Mysql

配置方法和以前完全一样.

> #### *注意:*

- 1.2.2 没有任何权限的问题.