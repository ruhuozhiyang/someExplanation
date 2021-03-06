# 责任链模式

## 0x01.定义与类型

- 定义：为请求创建一个接收此次请求对象的链
- 类型：行为型

## 0x02.适用场景

- 一个请求的处理需要多个对象当中的一个或几个协作处理

## 0x03.优点

- 请求的发送者和接收者（请求的处理）解耦
- 责任链可以动态组合

## 0x04.缺点

- 责任链太长或者处理时间过长，影响性能
- 责任链有可能过多

## 0x05.相关的设计模式

- 责任链模式和状态模式
    - 责任链模式各个对象并不指定下一个处理的对象是谁
    - 状态模式：让每个状态对象知道下一个对象是谁

## 0x06.源码中的责任链模式

- Servlet.FilterChainr#doFilter
- SpringSecurity
