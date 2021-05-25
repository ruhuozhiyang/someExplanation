package org.ko.proxy.demo1.dynamic.cglib;

import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

/**
 * 代理类
 * @author zhiyuan.shen
 */
public class CglibProxy implements MethodInterceptor {

    private Enhancer enhancer = new Enhancer();

    //得到代理类
    public Object getProxy (Class clazz) {
        //设置创建子类的类
        enhancer.setSuperclass(clazz);
        //设置回调
        enhancer.setCallback(this);
        //返回创建的实例
        return enhancer.create();
    }

    /**
     * 拦截所有目标类方法的调用
     * @param object 目标类的实例
     * @param method 目标方法的反射对象
     * @param args 方法的参数
     * @param methodProxy proxy代理类的实例
     * @return
     * @throws Throwable
     */
    @Override
    public Object intercept(Object object, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        System.out.println("log start..");
        methodProxy.invokeSuper(object, args);
        System.out.println("log end..");
        return null;
    }

}
