# 15.1 文件数据源

前面我们学习了从一个 Socket 来得到一个数据源. 除了 Socket, 我们也看把文件作为输入源来创建 `DStream`

只要兼容 HDFS 的文件系统, 都可以从中读取文件来作为输入数据源.

```scala
streamingContext.fileStream[KeyClass, ValueClass, InputFormatClass](dataDirectory)
```

Spark Streaming 会监控目录`dataDirectory`, 然后会处理在这个目录下创建的任何文件(<my>不支持嵌套文件</my>)

> 需要注意的是:

1. 监控的文件夹内的所有文件必须有相同的数据集格式

2. 在`dataDirectory`目录下创建的文件必须是移动或者重命名得到的. 意思是说, 在监控的过程中, 新的文件要么是从外面 copy 多来的, 要么是内部的文件重命名才能被监控到. 如果修改已经存在的文件的内容则无法 被监控到.

3. 一旦文件创建成功, 则不能去更改. 所以, 如果在文件内追加内容, 追加的数据是不能被 Spark Streaming 读到的. 

4. `streamingContext.textFileStream(dataDirectory)`可以专门用来读取文本文件. 

## 案例实操: 读取 HDFS 目录下的文件

### 步骤1: 在 HDFS 上创建目录`/file-stream`

并在该目录下创建几个文本文件, 在文本文件内添加一些文本内容

### 步骤2: 编写代码

```scala
package day06

import org.apache.spark.SparkConf
import org.apache.spark.streaming.dstream.DStream
import org.apache.spark.streaming.{Seconds, StreamingContext}

object FileSourceDemo {
    def main(args: Array[String]): Unit = {
        // 1. 创建 SparkConf 对象
        val conf = new SparkConf().setAppName("FileSourceDemo1").setMaster("local[*]")
        // 2. 创建 StreamingContext
        val scc = new StreamingContext(conf, Seconds(10))
        // 3. 监控文件夹, 并创建 DStream
        val fileDS: DStream[String] = scc.textFileStream("hdfs://hadoop201:9000/file-stream")
        val wordsCountDS: DStream[(String, Int)] = fileDS.flatMap(_.split("""\s+""")).map((_, 1)).reduceByKey(_ + _)
        // 打印
        wordsCountDS.print
        scc.start()
        scc.awaitTermination()
    }
}
```
