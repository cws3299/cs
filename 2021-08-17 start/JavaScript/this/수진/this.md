# this

### ๐ฉthis ๋

this๋ ์ด๋ป๊ฒ ์ ์๋์๋๋๊ฐ ์๋๋ผ ์ด๋ป๊ฒ ํธ์ถ๋์๋๋์ ๋ฐ๋ผ ๊ฒฐ์ ๋๋ค.



### 1. ์ ์ญ์์์ this

:ballot_box_with_check: ์ ์ญ์์์ this๋ ๊ธฐ๋ณธ์ ์ผ๋ก window ๊ฐ์ฒด์ด๋ค.

```javascript
console.log(this); // window {...}
```



### 2. ์ผ๋ฐ ํจ์์ this

:ballot_box_with_check: ์ผ๋ฐ ํจ์์์์ this๋ window ๊ฐ์ฒด์ด๋ค. 

```javascript
function whatIsThis() {
    console.log(this);
}
whitIsThis(); // window {...}
```

์ ์ญ์์ ์คํ๋ ํจ์ ๋ด๋ถ์ this ๋ window๊ฐ ๋๋ค.

:white_check_mark: ๋จ, strict mode์์๋ undefined ์ด๋ค.

```javascript
function whatIsThis() {
    'use strict'
    console.log(this);
}
whitIsThis(); // undefined
```

```javascript
'use strict';
var name = 'july';
function foo() {
    console.log(this.name); // error
}
foo();
```

์ผ๋ฐ ํจ์ ์คํ ๋ฐฉ์์์ this๋ window ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํจ๋ค. ํ์ง๋ง strice mode์์ this๋ ๋ฌด์กฐ๊ฑด `undefined`์ด๋ค. 

undefined์๋ ์ด๋ ํ ์์ฑ๋ ์์ผ๋ฏ๋ก this.name์ ์คํ์ด ๋ถ๊ฐํ๊ณ  error๋ฅผ ์ถ๋ ฅํ๋ค. 

๋จ, ๋ฉ์๋๋ก ํธ์ถ์ this๊ฐ `undefined`๊ฐ ์๋๋ค.!, 

simple parameter๋ฅผ ๋ฐ๋ ํจ์๋ง use strict ๋ฐ๊ฒฌ ๊ฐ๋ฅ parameter๋ก default๊ฐ์ ์ฃผ๋ฉด non-simple parameter๋ผ error ์ผ๋ฐํจ์ํธ์ถ ์๋ use strict ์ฌ์ฉ์ this๊ฐ undefined๊ฐ ๋๋ค. ๋ฉ์๋ํจ์ํธ์ถ ์๋ use strict ์ฌ์ฉ์ ํด๋ this๊ฐ ๋ฉ์๋๋ฅผ ํธ์ถํ ๊ฐ์ฒด๊ฐ ๋๋ค.

#### 3. ๊ฐ์ฒด ๋ฉ์๋(method)์ this

:ballot_box_with_check: ๊ฐ์ฒด์ method๋ก ํธ์ถ๋  ๋ this๋ ํด๋น ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํจ๋ค.

```javascript
var apple = '๋์ด ๋  ์ฌ๊ณผ';
var home = {
    apple: '๋ง์๋ ์ฌ๊ณผ',
    eatApple: eatAppleFn
}
function eatAppleFn() {
    console.log(this)
    console.log(`๋ฐฑ์ค๊ณต์ฃผ๊ฐ ${this.apple}๋ฅผ ๋จน์ต๋๋ค.`);
}
// (1) ๊ฐ์ฒด method ํธ์ถ
home.eatApple(): // 
// (2) ํจ์ ์ง์  ํธ์ถ
eatAppleFn(); // 
```

(1) ๊ฐ์ฒด ๋ฉ์๋ ํธ์ถ(์คํ)

home.eatApple()๋ก `home์ ๋ฉ์๋๋ก ํธ์ถ`!  ๊ฐ์ฒด์ ๋ฉ์๋๋ก ํธ์ถ๋ ๊ฒฝ์ฐ this๋ ํธ์ถํ ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํจ๋ค. 

๋ฐ๋ผ์ ์ฌ๊ธฐ์์ this๋ home์ด ๋๊ณ  ๊ฐ์ฒด ๋ด๋ถ์ apple์ '๋ง์๋ ์ฌ๊ณผ' ๊ฐ ๋๋ค. 

(2) ํจ์ ์ง์  ํธ์ถ(์คํ)

eatAppleFn()์ ์ ์ญ์์ ๋๋ฆฝ์ ์ผ๋ก ์คํ! 

์ด ๊ฒฝ์ฐ this ๋ window๋ฅผ ๋ํ๋ธ๋ค. ๋ฐ๋ผ์ apple์ '๋์ด ๋  ์ฌ๊ณผ'๊ฐ ๋๋ค.

=> ๊ฐ์ eatAppleFn()๋ฅผ ์คํํ์ง๋ง `ํจ์๋ฅผ ์ด๋ป๊ฒ ํธ์ถํ๋๋`์ ๋ฐ๋ผ์ this๊ฐ ์ฐธ์กฐํ๋ ๊ฐ์ฒด๊ฐ ๋ฌ๋ผ์ง๋ค.!

```javascript
var homeApple = home.eatApple;
homeApple(); 
```

์ผ๋ฐ ํจ์์ ํํ๋ก ํธ์ถ๋๋ฏ๋ก this๋ window์ด๋ค. 



### 4. ๋ช๋ฐฑํ ๋ฐ์ธ๋ฉ call, bind, apply

:ballot_box_with_check: call, apply, bind๋ฅผ ์ด์ฉํ๋ฉด `this`๋ฅผ ์ํ๋ ๊ฐ์ฒด์ ์ฐ๊ฒฐํ  ์ ์๋ค.

์ฆ, this ์ ์ญํ ์ ์ฐ๋ฆฌ๊ฐ ์ง์  ๋ชํํ๊ฒ ์ง์ ํด์ค๋ค๋ ๋ป์ด๋ค.

```javascript
var apple = '๋์ด ๋  ์ฌ๊ณผ';
var home = {
    apple: '๋ง์๋ ์ฌ๊ณผ',
    eatApple: function() {
        eatAppleFn();
    },
    eatApppleCall: function() {
        // ์ฌ๊ธฐ์์ this๋ home
        eatAppleFn.call(this);
    },
    eatAppleBind: function() {
        // ์ฌ๊ธฐ์์ this๋ home
        (eatAppleFn.bind(this))();
    }
}
function eatAppleFn() {
  console.log(`๋ฐฑ์ค๊ณต์ฃผ๊ฐ ${this.apple}๋ฅผ ๋จน์ต๋๋ค.`);
}
home.eatApple();     // ๋ฐฑ์ค๊ณต์ฃผ๊ฐ ๋์ด ๋  ์ฌ๊ณผ๋ฅผ ๋จน์ต๋๋ค.
home.eatAppleCall(); // ๋ฐฑ์ค๊ณต์ฃผ๊ฐ ๋ง์๋ ์ฌ๊ณผ๋ฅผ ๋จน์ต๋๋ค.
home.eatAppleBind(); // ๋ฐฑ์ค๊ณต์ฃผ๊ฐ ๋ง์๋ ์ฌ๊ณผ๋ฅผ ๋จน์ต๋๋ค.
```



### 5. ์์ฑ์ ํจ์

:ballot_box_with_check: ์์ฑ์ ํจ์๋ก ๊ฐ์ฒด๋ฅผ ์์ฑํ  ๋, ์์ฑ์ ํจ์์ this ๋ ์๋ก ์์ฑ๋ ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํจ๋ค.

```javascript
function Person() {
    console.log(this);
}
new Person();
```

`new` ํค์๋๋ฅผ ์ฌ์ฉํด์ ์์ฑ์ ํจ์๋ฅผ ๋ง๋๋ ๊ฒฝ์ฐ this ๋ `๋น ๊ฐ์ฒด`๊ฐ ๋๋ค.

์์ ์์ฑ์ ํจ์๋ ๋น ๊ฐ์ฒด๋ฅผ return ํ๋ค. ! (return๋ฌธ์ด ์์ด๋ return ํ๋ ๊ฒ์ ์์ฑ์ ํจ์์ ํน์ง ์ค ํ๋์ด๋ค.!)

```javascript
function Person() {
    this.name = 'ken';
    console.log(this);
}
var ken = new Person();
console.log(ken);
```

์์ฑ์ ํจ์๋ก ์คํ => this๋ ๋น ๊ฐ์ฒด๋ฅผ ์์ฑ => name์์ฑ์ 'ken'์ ํ ๋น, return์ด์์ง๋ง ๊ฐ์ฒด๋ฅผ ๋ฆฌํด ! 





[์ฐธ๊ณ ]

- https://paperblock.tistory.com/44

- https://im-developer.tistory.com/96