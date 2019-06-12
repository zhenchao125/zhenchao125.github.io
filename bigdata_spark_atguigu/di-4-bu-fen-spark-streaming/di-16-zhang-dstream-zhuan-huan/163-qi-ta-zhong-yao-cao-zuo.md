# 16.3 其他重要操作

## 1. `transform` 操作

`Transform` 原语允许 `DStream`上执行任意的`RDD-to-RDD`函数。

可以用来执行一些 RDD 操作, 即使这些操作并没有在 SparkStreaming 中暴露出来.

该函数每一批次调度一次。其实也就是对`DStream`中的`RDD`应用转换。

```scala
// 只过滤出来 个数的大于 2 的
val count= wordAndOne.reduceByKey(_ + _).transform(rdd => {
    rdd.filter(_._2 > 2)
})
```

---

## 2. `join`操作

连接操作（`leftOuterJoin, rightOuterJoin, fullOuterJoin`也可以），可以连接`Stream-Stream`，`windows-stream to windows-stream`、`stream-dataset`

## `Stream-stream joins`

```scala
val stream1: DStream[String, String] = ...
val stream2: DStream[String, String] = ...
val joinedStream = stream1.join(stream2)
```

```scala
val windowedStream1 = stream1.window(Seconds(20))
val windowedStream2 = stream2.window(Minutes(1))
val joinedStream = windowedStream1.join(windowedStream2)
```
## `Stream-dataset joins`
```scala

val dataset: RDD[String, String] = ...
val windowedStream = stream.window(Seconds(20))...
val joinedStream = windowedStream.transform { rdd => rdd.join(dataset) }
```