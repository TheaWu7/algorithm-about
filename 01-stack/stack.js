/**
 * by array
 *
 * 1. push
 * 2. pop
 * 3. peek: 返回栈顶元素
 * 4. isEmpty
 * 5. size(length)
 * 6. toString: 将栈内所有内容以字符串形式返回
 *
 */

// 封装栈类
function Stack() {
  // 栈中的属性
  this.items = [];

  // 栈的相关操作
  // 1.
  Stack.prototype.push = function (e) {
    this.items.push(e);
  };

  // 2.
  Stack.prototype.pop = function () {
    return this.items.pop();
  };

  // 3.
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  // 4.
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5.
  Stack.prototype.size = function () {
    return this.items.length;
  };

  // 6.
  Stack.prototype.toString = function () {
    return this.items.join(" ");
  };
}

// 栈的使用
const s = new Stack();

console.log(s.isEmpty());
s.push(121);
s.push(111);
s.push(456);
console.log(s.peek());
s.pop();
s.push(789);
console.log(s.size());
console.log(s);
console.log(s.toString());
console.log(s.isEmpty());
