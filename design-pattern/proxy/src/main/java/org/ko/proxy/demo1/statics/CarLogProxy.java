package org.ko.proxy.demo1.statics;

/**
 * 使用聚合的方式实现静态代理
 */
public class CarLogProxy implements MoveAble {

    //使用聚合的方式来实现代理
    private MoveAble moveAble;

    public CarLogProxy(MoveAble moveAble) {

        this.moveAble = moveAble;
    }

    public void move() {
        long startTime = System.currentTimeMillis();
        System.out.println("日志开始...");
        moveAble.move();
        long endTime = System.currentTimeMillis();
        System.out.println("日志结束...");
        System.out.println("共耗时" + (endTime - startTime) + "毫秒！");
    }
}
