# 9.10 查看执行计划

执行语句前可以查看语句的执行计划(执行流程), 并不是真正的在执行.

语法:
```sql
EXPLAIN [EXTENDED|DEPENDENCY|AUTHORIZATION|LOCKS|VECTORIZATION] query
```

```sql
explain select * from emp;
explain extended select * from emp;
```

参考:
https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Explain


