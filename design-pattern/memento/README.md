# 备忘录模式

## 0x01.定义与类型

- 定义：保存一个对象的某个状态，以便在适当的时候恢复对象。
- “后悔药”
- 类型：行为型

## 0x02.适用场景

- 保存及恢复数据相关业务场景
- 后悔的时候，即向恢复到之前的状态

## 0x03.优点

- 为用户提供一种可恢复机制
- 存档信息的封装

## 0x04.缺点

- 资源占用

## 0x05.相关设计模式

- 备忘录模式和状态模式
    - 备忘录：用实例表示状态
    - 状态：用类来表示状态

## 0x06.源码中的备忘录模式

- spring webflow: StateManageableMessageContext
