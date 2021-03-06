---
title: Vue - 双向绑定原理
date: 2020-11-06
categories:
 - Vue
---

Vue的双向绑定是通过数据劫持和发布-订阅者功能来实现

1. 在`new Vue()`的时候会通过Object.defineProperty()来实现数据劫持，代理所有数据的setter、getter;
2. 每次数据的setter时候会都会通过dep通知订阅者(Watcher)，订阅者通过update来通知模板编译器(compiler)更新视图;

[引用原文](https://www.jianshu.com/p/9bd100c785ee)

## 模拟实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1 id="name"></h1>
<input type="text"/>

<script src="./observer.js"></script>
<script src="./watcher.js"></script>
<script>
	function myVue(data, el, exp) {
		this.data = data;
		observable(data);                      //将数据变的可观测
		el.innerHTML = this.data[exp];           // 初始化模板数据的值
		new Watcher(this, exp, function (value) {
			el.innerHTML = value;
		});
		return this;
	}

	const ele = document.querySelector('#name');
	const input = document.querySelector('input');

	const myTest = new myVue({
		name: 'hello world'
	}, ele, 'name');

	//改变输入框内容
	input.oninput = function (e) {
		myTest.data.name = e.target.value
	}

	//改变data内容
	function changeInput() {
		myTest.data.name = "重置下数据"

	}
</script>
</body>
</html>
```

### observer.js

```js
/**
 * 把一个对象的每一项都转化成可观测对象
 * @param { Object } obj 对象
 */
function observable(obj) {
	if (!obj || typeof obj !== 'object') {
		return;
	}
	let keys = Object.keys(obj);
	keys.forEach((key) => {
		defineReactive(obj, key, obj[key])
	})
	return obj;
}

/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, val) {
	let dep = new Dep();
	Object.defineProperty(obj, key, {
		get() {
			dep.depend();
			console.log(`${key}属性被读取了`);
			return val;
		},
		set(newVal) {
			val = newVal;
			console.log(`${key}属性被修改了`);
			dep.notify()                    //数据变化通知所有订阅者
		}
	})
}

class Dep {

	constructor() {
		this.subs = []
	}

	//增加订阅者
	addSub(sub) {
		this.subs.push(sub);
	}

	//判断是否增加订阅者
	depend() {
		if (Dep.target) {
			this.addSub(Dep.target)
		}
	}

	//通知订阅者更新
	notify() {
		this.subs.forEach((sub) => {
			sub.update()
		})
	}

}

Dep.target = null;
```

### watcher.js

```js
class Watcher {
	/**
	 *
	 * @param vm 一个Vue的实例对象；
	 * @param exp 是node节点的v-model或v-on：click等指令的属性值。如v-model="name"，exp就是name;
	 * @param cb 是Watcher绑定的更新函数;
	 */
	constructor(vm, exp, cb) {
		this.vm = vm;
		this.exp = exp;
		this.cb = cb;
		this.value = this.get();  // 将自己添加到订阅器的操作
	}

	get() {
		Dep.target = this;  // 缓存自己
		let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
		Dep.target = null;  // 释放自己
		return value;
	}

	update() {
		let value = this.vm.data[this.exp];
		let oldVal = this.value;
		if (value !== oldVal) {
			this.value = value;
			this.cb.call(this.vm, value, oldVal);
		}
	}
}
```
