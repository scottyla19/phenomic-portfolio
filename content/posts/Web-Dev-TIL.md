# Web Dev TIL

## 5/31/17

**Javascript coercion** and the difference between implicit and explicit coercion when converting or comparing values. Loose equals `==` implicitly coerces a string value to a number value `'99.99' == 99.9`. While strict equals `===` does not convert types, so types must be the same and equal in strict equals.

**Comments**
- Code without comments is suboptimal.
- Too many comments (one per line, for example) is probably a sign of poorly written code.
- Comments should explain *why*, not what. They can optionally explain how if that's particularly confusing

### Scope

In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

 If one scope is nested inside another, code inside the innermost scope can access variables from either scope.

 ### Variables and Types

 The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties.

 The specific list of "falsy" values in JavaScript is as follows:

- "" (empty string)
- 0, -0, NaN (invalid number)
- null, undefined
- false

**WTF**
For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. You might think that two arrays with the same contents would be == equal, but they're not:
```javascript
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false
```
## 6/1/17

### Strict Mode

`"use strict"` starts strict mode (good for tighter rules for code) within the current scope.

### Immediately Invoked Function Expressions (IIFEs)

Automatically calls the function without having to call `foo();`.
```javascript
(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"
```

### Closure
```javascript
function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41

plusTen( 13 );		// 23 <-- 10 + 13

```
## 6/2/17

### Modules
```javascript
function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );

```

## 6/5/17
### Scope

If an RHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a `ReferenceError`.

By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in "Strict Mode" [^note-strictmode], then the global Scope will create a new variable of that name in the global scope.

*use strict mode* it is seems safer `use strict`

Now, if a variable is found for an RHS look-up, *but you try to do something with its value that is impossible*, such as trying to execute-as-function a non-function value, or reference a property on a null or undefined value, then Engine throws a `TypeError`.

`ReferenceError` is Scope resolution-failure related, whereas `TypeError` implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result.

**Scope look-up stops once it finds the first match.**

```javascript
function foo(a) {
	var b = 2;

	// some code

	function bar() {
		// ...
	}

	// more code

	var c = 3;
}
```
Because `a`, `b`, `c`, and `bar` all belong to the scope bubble of `foo(..)`, they are not accessible outside of `foo(..)`. That is, the following code would all result in `ReferenceError` errors, as the identifiers are not available to the global scope.

However, all these identifiers (a, b, c, foo, and bar) are accessible inside of foo(..), and indeed also available inside of bar(..) (assuming there are no shadow identifier declarations inside bar(..)).

**Do not use anonymous functions** i.e. `function(){...}` instead use:

**Inline function expressions** `function name(){...}`are powerful and useful -- the question of anonymous vs. named doesn't detract from that. Providing a name for your function expression quite effectively addresses all these draw-backs, but has no tangible downsides. The best practice is to always name your function expressions:

### let
Fortunately, ES6 changes that, and introduces a new keyword `let` which sits alongside `var` as another way to declare variables.

The `let` keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it's contained in. In other words, `let` implicitly hijacks any block's scope for its variable declaration.


## 6/6/17

### More on Closure

Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

### More on Modules

Below is an example of a "Revealing Module". Requirements for modules:
1. It is just a function and must be invoked for every instance. *There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).*
2. Returns an object `{key:value,...}` with access to the 'public' functions but not the inner 'private' variables. Performs like a public API. *The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/or modify that private state.*

```javascript
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```
Turn the function into an IIFE to create singleton objects.
```javascript
var foo = (function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

### this

To learn `this`, you first have to learn what `this` is not, despite any assumptions or misconceptions that may lead you down those paths. **`this` is neither a reference to the function itself, nor is it a reference to the function's lexical scope**.

`this` is actually a binding that is made when a function is invoked, and what it **references is determined entirely by the call-site where the function is called.**

```javascript
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`
```

Take care when analyzing code to find the actual call-site (from the call-stack), because it's the only thing that matters for this binding.

### this Binding rules
1. Default Binding: The default rule when all others do not apply.

   ```javascript
   function foo() {
	    console.log( this.a );
   }

   var a = 2;

   foo(); // 2
   ```
  Notice when `foo()` is called, `this.a` resolves to our global variable a. Why? Because in this case, the default binding for `this` applies to the function call, and so points `this` at the global object.

  If `strict` mode is in effect, the global object is not eligible for the default binding, so the `this` is instead set to undefined.

2. Implicit Binding: Does the call-site have a context object, also referred to as an owning or containing object.

  ```javascript
  function foo() {
  	console.log( this.a );
  }

  var obj = {
  	a: 2,
  	foo: foo
  };

  obj.foo(); // 2
  ```
  The call-site uses the `obj` context to reference the function, so you could say that the `obj` object "owns" or "contains" the function reference at the time the function is called.

  Whatever you choose to call this pattern, at the point that `foo()` is called, it's preceded by an object reference to `obj`. When there is a context object for a function reference, the implicit binding rule says that it's that object which should be used for the function call's this binding.

  Because `obj` is the `this` for the `foo()` call, `this.a` is synonymous with obj.a.

3. Explicit Binding: Directly stating what the `this` should be using either `call()`, `apply()`, or even `bind()`.

  `bind()` returns a function which will act like the original function but with `this` predefined. It is usually used when you want to pass a function to an event handler or other async callback.

  `call()` and `apply()` will call a function immediately letting you specify both the value of `this` and any arguments the function will receive.

4. New Binding: Using the `new` operator when creating a new variable. This dows four things:

    1. Creates a brand new object (aka, constructed) out of thin air
    2. The newly constructed object is [[Prototype]]-linked
    3. The newly constructed object is set as the `this` binding for that function call
    4. Unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

```javascript
    function foo(a) {
    	this.a = a;
    }

    var bar = new foo( 2 );
    console.log( bar.a ); // 2
```

### Determining this

1. Is the function called with new (new binding)? If so, this is the newly constructed object.

  `var bar = new foo()`

2. Is the function called with `call` or `apply` (explicit binding), even hidden inside a `bind` hard binding? If so, `this` is the explicitly specified object.

  `var bar = foo.call( obj2 )`

3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, `this` is that context object.

  `var bar = obj1.foo()`

4. Otherwise, default the `this` (default binding). If in `strict mode`, pick undefined, otherwise pick the global object.

  `var bar = foo()`


## 6/8/17

### Objects

The literal syntax for an object looks like this: **more popular**

```javascript
var myObj = {
	key: value
	// ...
};
```
The constructed form looks like this:
```javascript
var myObj = new Object();
myObj.key = value;
```
