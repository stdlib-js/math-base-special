<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Special Functions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) special math functions.



<section class="usage">

## Usage

To use in Observable,

```javascript
special = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var special = require( 'path/to/vendor/umd/math-base-special/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.special;
})();
</script>
```

#### special

Namespace for "base" (i.e., lower-level) special math functions.

```javascript
var fcns = special;
// returns {...}
```

### Exponential & Logarithmic Functions

<!-- <toc pattern="+(*log*|ln|exp*|*pow*)" ignore="logit" > -->

<div class="namespace-toc">

-   <span class="signature">[`exp( x )`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="signature">[`exp10( x )`][@stdlib/math/base/special/exp10]</span><span class="delimiter">: </span><span class="description">base `10` exponential function.</span>
-   <span class="signature">[`exp2( x )`][@stdlib/math/base/special/exp2]</span><span class="delimiter">: </span><span class="description">base `2` exponential function.</span>
-   <span class="signature">[`expit( x )`][@stdlib/math/base/special/expit]</span><span class="delimiter">: </span><span class="description">compute the standard logistic function.</span>
-   <span class="signature">[`expm1( x )`][@stdlib/math/base/special/expm1]</span><span class="delimiter">: </span><span class="description">compute `exp(x) - 1`.</span>
-   <span class="signature">[`expm1rel( x )`][@stdlib/math/base/special/expm1rel]</span><span class="delimiter">: </span><span class="description">compute the relative error exponential.</span>
-   <span class="signature">[`ln( x )`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="signature">[`log( x, b )`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">compute the base `b` logarithm.</span>
-   <span class="signature">[`log10( x )`][@stdlib/math/base/special/log10]</span><span class="delimiter">: </span><span class="description">evaluate the common logarithm.</span>
-   <span class="signature">[`log1mexp( x )`][@stdlib/math/base/special/log1mexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `1-exp(-|x|)`.</span>
-   <span class="signature">[`log1p( x )`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of `1+x`.</span>
-   <span class="signature">[`log1pexp( x )`][@stdlib/math/base/special/log1pexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `1+exp(x)`.</span>
-   <span class="signature">[`log1pmx( x )`][@stdlib/math/base/special/log1pmx]</span><span class="delimiter">: </span><span class="description">evaluate `ln(1+x) - x`.</span>
-   <span class="signature">[`log2( x )`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">evaluate the binary logarithm.</span>
-   <span class="signature">[`logaddexp( x, y )`][@stdlib/math/base/special/logaddexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `exp(x) + exp(y)`.</span>
-   <span class="signature">[`pow( base, exponent )`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>
-   <span class="signature">[`powm1( b, x )`][@stdlib/math/base/special/powm1]</span><span class="delimiter">: </span><span class="description">evaluate `bˣ - 1`.</span>
-   <span class="signature">[`xlog1py( x, y )`][@stdlib/math/base/special/xlog1py]</span><span class="delimiter">: </span><span class="description">compute `x * ln(y+1)` so that the result is `0` if `x = 0`.</span>
-   <span class="signature">[`xlogy( x, y )`][@stdlib/math/base/special/xlogy]</span><span class="delimiter">: </span><span class="description">compute `x * ln(y)` so that the result is `0` if `x = 0`.</span>

</div>

<!-- </toc> -->

### Trigonometric Functions

<!-- <toc pattern="*+(sin|cos|tan)*" ignore="+(kernel-sin|kernel-cos|kernel-tan)"> -->

<div class="namespace-toc">

-   <span class="signature">[`acos( x )`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a double-precision floating-point number.</span>
-   <span class="signature">[`acosh( x )`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>
-   <span class="signature">[`acovercos( x )`][@stdlib/math/base/special/acovercos]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine.</span>
-   <span class="signature">[`acoversin( x )`][@stdlib/math/base/special/acoversin]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed sine.</span>
-   <span class="signature">[`ahavercos( x )`][@stdlib/math/base/special/ahavercos]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed cosine.</span>
-   <span class="signature">[`ahaversin( x )`][@stdlib/math/base/special/ahaversin]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed sine.</span>
-   <span class="signature">[`asin( x )`][@stdlib/math/base/special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a double-precision floating-point number.</span>
-   <span class="signature">[`asinh( x )`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>
-   <span class="signature">[`atan( x )`][@stdlib/math/base/special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a double-precision floating-point number.</span>
-   <span class="signature">[`atan2( y, x )`][@stdlib/math/base/special/atan2]</span><span class="delimiter">: </span><span class="description">compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.</span>
-   <span class="signature">[`atanh( x )`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>
-   <span class="signature">[`avercos( x )`][@stdlib/math/base/special/avercos]</span><span class="delimiter">: </span><span class="description">compute the inverse versed cosine.</span>
-   <span class="signature">[`aversin( x )`][@stdlib/math/base/special/aversin]</span><span class="delimiter">: </span><span class="description">compute the inverse versed sine.</span>
-   <span class="signature">[`cos( x )`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="signature">[`cosh( x )`][@stdlib/math/base/special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a double-precision floating-point number.</span>
-   <span class="signature">[`cosm1( x )`][@stdlib/math/base/special/cosm1]</span><span class="delimiter">: </span><span class="description">compute `cos(x) - 1`.</span>
-   <span class="signature">[`cospi( x )`][@stdlib/math/base/special/cospi]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number times π.</span>
-   <span class="signature">[`covercos( x )`][@stdlib/math/base/special/covercos]</span><span class="delimiter">: </span><span class="description">compute the coversed cosine.</span>
-   <span class="signature">[`coversin( x )`][@stdlib/math/base/special/coversin]</span><span class="delimiter">: </span><span class="description">compute the coversed sine.</span>
-   <span class="signature">[`hacovercos( x )`][@stdlib/math/base/special/hacovercos]</span><span class="delimiter">: </span><span class="description">compute the half-value coversed cosine.</span>
-   <span class="signature">[`hacoversin( x )`][@stdlib/math/base/special/hacoversin]</span><span class="delimiter">: </span><span class="description">compute the half-value coversed sine.</span>
-   <span class="signature">[`havercos( x )`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="signature">[`haversin( x )`][@stdlib/math/base/special/haversin]</span><span class="delimiter">: </span><span class="description">compute the half-value versed sine.</span>
-   <span class="signature">[`risingFactorial( x, n )`][@stdlib/math/base/special/rising-factorial]</span><span class="delimiter">: </span><span class="description">compute the rising factorial.</span>
-   <span class="signature">[`sin( x )`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="signature">[`sinc( x )`][@stdlib/math/base/special/sinc]</span><span class="delimiter">: </span><span class="description">compute the cardinal sine of a number.</span>
-   <span class="signature">[`sincos( x )`][@stdlib/math/base/special/sincos]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number.</span>
-   <span class="signature">[`sincospi()`][@stdlib/math/base/special/sincospi]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number times π.</span>
-   <span class="signature">[`sinh( x )`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a double-precision floating-point number.</span>
-   <span class="signature">[`sinpi( x )`][@stdlib/math/base/special/sinpi]</span><span class="delimiter">: </span><span class="description">compute the sine of a number times π.</span>
-   <span class="signature">[`tan( x )`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>
-   <span class="signature">[`tanh( x )`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a double-precision floating-point number.</span>
-   <span class="signature">[`vercos( x )`][@stdlib/math/base/special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>
-   <span class="signature">[`versin( x )`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</div>

<!-- </toc> -->

### Bessel Functions

<!-- <toc pattern="*bessel*" > -->

<div class="namespace-toc">

-   <span class="signature">[`besselj0( x )`][@stdlib/math/base/special/besselj0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero.</span>
-   <span class="signature">[`besselj1( x )`][@stdlib/math/base/special/besselj1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order one.</span>
-   <span class="signature">[`bessely0( x )`][@stdlib/math/base/special/bessely0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero.</span>
-   <span class="signature">[`bessely1( x )`][@stdlib/math/base/special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</div>

<!-- </toc> -->

### Absolute Value and Rounding Functions

<!-- <toc pattern="*+(abs|ceil|floor|clamp|trunc|round|signum)*" > -->

<div class="namespace-toc">

-   <span class="signature">[`abs( x )`][@stdlib/math/base/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision floating-point number.</span>
-   <span class="signature">[`abs2( x )`][@stdlib/math/base/special/abs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a double-precision floating-point number.</span>
-   <span class="signature">[`abs2f( x )`][@stdlib/math/base/special/abs2f]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a single-precision floating-point number.</span>
-   <span class="signature">[`absf( x )`][@stdlib/math/base/special/absf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision floating-point number.</span>
-   <span class="signature">[`cabs( z )`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision complex floating-point number.</span>
-   <span class="signature">[`cabs2( z )`][@stdlib/math/base/special/cabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a double-precision complex floating-point number.</span>
-   <span class="signature">[`cabs2f( z )`][@stdlib/math/base/special/cabs2f]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a single-precision complex floating-point number.</span>
-   <span class="signature">[`cabsf( z )`][@stdlib/math/base/special/cabsf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision complex floating-point number.</span>
-   <span class="signature">[`cceil( z )`][@stdlib/math/base/special/cceil]</span><span class="delimiter">: </span><span class="description">round a double-precision complex floating-point number toward positive infinity.</span>
-   <span class="signature">[`cceilf( z )`][@stdlib/math/base/special/cceilf]</span><span class="delimiter">: </span><span class="description">round a single-precision complex floating-point number toward positive infinity.</span>
-   <span class="signature">[`cceiln( z, n )`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward positive infinity.</span>
-   <span class="signature">[`ceil( x )`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="signature">[`ceil10( x )`][@stdlib/math/base/special/ceil10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward positive infinity.</span>
-   <span class="signature">[`ceil2( x )`][@stdlib/math/base/special/ceil2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward positive infinity.</span>
-   <span class="signature">[`ceilb( x, n, b )`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="signature">[`ceilf( x )`][@stdlib/math/base/special/ceilf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point number toward positive infinity.</span>
-   <span class="signature">[`ceiln( x, n )`][@stdlib/math/base/special/ceiln]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="signature">[`ceilsd( x, n[, b] )`][@stdlib/math/base/special/ceilsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward positive infinity with N significant figures.</span>
-   <span class="signature">[`cfloor( z )`][@stdlib/math/base/special/cfloor]</span><span class="delimiter">: </span><span class="description">round a double-precision complex floating-point number toward negative infinity.</span>
-   <span class="signature">[`cfloorn( z, n )`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.</span>
-   <span class="signature">[`clamp( v, min, max )`][@stdlib/math/base/special/clamp]</span><span class="delimiter">: </span><span class="description">restrict a double-precision floating-point number to a specified range.</span>
-   <span class="signature">[`clampf( v, min, max )`][@stdlib/math/base/special/clampf]</span><span class="delimiter">: </span><span class="description">restrict a single-precision floating-point number to a specified range.</span>
-   <span class="signature">[`cround( z )`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest integer.</span>
-   <span class="signature">[`croundn( z, n )`][@stdlib/math/base/special/croundn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.</span>
-   <span class="signature">[`csignum( z )`][@stdlib/math/base/special/csignum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function of a double-precision complex floating-point number.</span>
-   <span class="signature">[`floor( x )`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>
-   <span class="signature">[`floor10( x )`][@stdlib/math/base/special/floor10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward negative infinity.</span>
-   <span class="signature">[`floor2( x )`][@stdlib/math/base/special/floor2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward negative infinity.</span>
-   <span class="signature">[`floorb( x, n, b )`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="signature">[`floorf( x )`][@stdlib/math/base/special/floorf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point numeric value toward negative infinity.</span>
-   <span class="signature">[`floorn( x, n )`][@stdlib/math/base/special/floorn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="signature">[`floorsd( x, n[, b] )`][@stdlib/math/base/special/floorsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward negative infinity with N significant figures.</span>
-   <span class="signature">[`labs( x )`][@stdlib/math/base/special/labs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a signed 32-bit integer.</span>
-   <span class="signature">[`maxabs( x, y )`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="signature">[`maxabsn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/maxabsn]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="signature">[`minabs( x, y )`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="signature">[`minabsn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/minabsn]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="signature">[`minmaxabs( x, y )`][@stdlib/math/base/special/minmaxabs]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>
-   <span class="signature">[`minmaxabsn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/minmaxabsn]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>
-   <span class="signature">[`round( x )`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="signature">[`round10( x )`][@stdlib/math/base/special/round10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 on a linear scale.</span>
-   <span class="signature">[`round2( x )`][@stdlib/math/base/special/round2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two on a linear scale.</span>
-   <span class="signature">[`roundb( x, n, b )`][@stdlib/math/base/special/roundb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n on a linear scale.</span>
-   <span class="signature">[`roundn( x, n )`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>
-   <span class="signature">[`roundsd( x, n[, b] )`][@stdlib/math/base/special/roundsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number with `n` significant figures.</span>
-   <span class="signature">[`signum( x )`][@stdlib/math/base/special/signum]</span><span class="delimiter">: </span><span class="description">signum function.</span>
-   <span class="signature">[`signumf( x )`][@stdlib/math/base/special/signumf]</span><span class="delimiter">: </span><span class="description">signum function.</span>
-   <span class="signature">[`trunc( x )`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>
-   <span class="signature">[`trunc10( x )`][@stdlib/math/base/special/trunc10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward zero.</span>
-   <span class="signature">[`trunc2( x )`][@stdlib/math/base/special/trunc2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward zero.</span>
-   <span class="signature">[`truncb( x, n, b )`][@stdlib/math/base/special/truncb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward zero.</span>
-   <span class="signature">[`truncf( x )`][@stdlib/math/base/special/truncf]</span><span class="delimiter">: </span><span class="description">round a single-precision floating-point number toward zero.</span>
-   <span class="signature">[`truncn( x, n )`][@stdlib/math/base/special/truncn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward zero.</span>
-   <span class="signature">[`truncsd( x, n[, b] )`][@stdlib/math/base/special/truncsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward zero with `n` significant figures.</span>

</div>

<!-- </toc> -->

### Other Special Functions

<!-- <toc ignore="*bessel*" ignore="*+(sin|cos|tan)*" ignore="+(*log*|ln|exp*|*pow*)" ignore="*+(abs|ceil|floor|clamp|trunc|round|signum)*" ignore="+(gamma-delta-ratio|gamma-lanczos-sum*|rempio2|kernel-*)" ignore="*fast*" > -->

<div class="namespace-toc">

-   <span class="signature">[`acot( x )`][@stdlib/math/base/special/acot]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent of a double-precision floating-point number.</span>
-   <span class="signature">[`acoth( x )`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent of a double-precision floating-point number.</span>
-   <span class="signature">[`acsc( x )`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="signature">[`acsch( x )`][@stdlib/math/base/special/acsch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosecant of a number.</span>
-   <span class="signature">[`asec( x )`][@stdlib/math/base/special/asec]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a number.</span>
-   <span class="signature">[`asech( x )`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="signature">[`bernoulli( n )`][@stdlib/math/base/special/bernoulli]</span><span class="delimiter">: </span><span class="description">compute the nth Bernoulli number.</span>
-   <span class="signature">[`beta( x, y )`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="signature">[`betainc( x, a, b[, regularized[, upper]] )`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="signature">[`betaincinv( p, a, b[, upper] )`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse of the incomplete beta function.</span>
-   <span class="signature">[`betaln( x, y )`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>
-   <span class="signature">[`binet( x )`][@stdlib/math/base/special/binet]</span><span class="delimiter">: </span><span class="description">evaluate Binet's formula extended to real numbers.</span>
-   <span class="signature">[`binomcoef( n, k )`][@stdlib/math/base/special/binomcoef]</span><span class="delimiter">: </span><span class="description">compute the binomial coefficient.</span>
-   <span class="signature">[`binomcoefln( n, k )`][@stdlib/math/base/special/binomcoefln]</span><span class="delimiter">: </span><span class="description">compute the natural logarithm of the binomial coefficient.</span>
-   <span class="signature">[`boxcox( x, lambda )`][@stdlib/math/base/special/boxcox]</span><span class="delimiter">: </span><span class="description">compute a one-parameter Box-Cox transformation.</span>
-   <span class="signature">[`boxcox1p( x, lambda )`][@stdlib/math/base/special/boxcox1p]</span><span class="delimiter">: </span><span class="description">compute a one-parameter Box-Cox transformation of `1+x`.</span>
-   <span class="signature">[`boxcox1pinv( y, lambda )`][@stdlib/math/base/special/boxcox1pinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation for `1+x`.</span>
-   <span class="signature">[`boxcoxinv( y, lambda )`][@stdlib/math/base/special/boxcoxinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation.</span>
-   <span class="signature">[`cbrt( x )`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of a double-precision floating-point number.</span>
-   <span class="signature">[`cbrtf( x )`][@stdlib/math/base/special/cbrtf]</span><span class="delimiter">: </span><span class="description">compute the cube root of a single-precision floating-point number.</span>
-   <span class="signature">[`ccis( z )`][@stdlib/math/base/special/ccis]</span><span class="delimiter">: </span><span class="description">evaluate the cis function for a double-precision complex floating-point number.</span>
-   <span class="signature">[`cexp( z )`][@stdlib/math/base/special/cexp]</span><span class="delimiter">: </span><span class="description">evaluate the exponential function for a double-precision complex floating-point number.</span>
-   <span class="signature">[`cflipsign( z, y )`][@stdlib/math/base/special/cflipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.</span>
-   <span class="signature">[`cflipsignf( z, y )`][@stdlib/math/base/special/cflipsignf]</span><span class="delimiter">: </span><span class="description">return a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.</span>
-   <span class="signature">[`cidentity( z )`][@stdlib/math/base/special/cidentity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of a double-precision complex floating-point number.</span>
-   <span class="signature">[`cidentityf( z )`][@stdlib/math/base/special/cidentityf]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of a single-precision complex floating-point number.</span>
-   <span class="signature">[`cinv( z )`][@stdlib/math/base/special/cinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a double-precision complex floating-point number.</span>
-   <span class="signature">[`copysign( x, y )`][@stdlib/math/base/special/copysign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.</span>
-   <span class="signature">[`copysignf( x, y )`][@stdlib/math/base/special/copysignf]</span><span class="delimiter">: </span><span class="description">return a single-precision floating-point number with the magnitude of `x` and the sign of `y`.</span>
-   <span class="signature">[`cot( x )`][@stdlib/math/base/special/cot]</span><span class="delimiter">: </span><span class="description">evaluate the cotangent of a number.</span>
-   <span class="signature">[`coth( x )`][@stdlib/math/base/special/coth]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cotangent of a number.</span>
-   <span class="signature">[`cphase( z )`][@stdlib/math/base/special/cphase]</span><span class="delimiter">: </span><span class="description">compute the argument of a double-precision complex floating-point number in radians.</span>
-   <span class="signature">[`cpolar( z )`][@stdlib/math/base/special/cpolar]</span><span class="delimiter">: </span><span class="description">compute the absolute value and phase of a double-precision complex floating-point number.</span>
-   <span class="signature">[`csch( x )`][@stdlib/math/base/special/csch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosecant of a number.</span>
-   <span class="signature">[`deg2rad( x )`][@stdlib/math/base/special/deg2rad]</span><span class="delimiter">: </span><span class="description">convert an angle from degrees to radians.</span>
-   <span class="signature">[`deg2radf( x )`][@stdlib/math/base/special/deg2radf]</span><span class="delimiter">: </span><span class="description">convert an angle from degrees to radians (single-precision).</span>
-   <span class="signature">[`digamma( x )`][@stdlib/math/base/special/digamma]</span><span class="delimiter">: </span><span class="description">digamma function.</span>
-   <span class="signature">[`diracDelta( x )`][@stdlib/math/base/special/dirac-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Dirac delta function.</span>
-   <span class="signature">[`eta( s )`][@stdlib/math/base/special/dirichlet-eta]</span><span class="delimiter">: </span><span class="description">dirichlet eta function.</span>
-   <span class="signature">[`ellipe( m )`][@stdlib/math/base/special/ellipe]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the second kind.</span>
-   <span class="signature">[`ellipj( u, m )`][@stdlib/math/base/special/ellipj]</span><span class="delimiter">: </span><span class="description">compute the Jacobi elliptic functions sn, cn, and dn.</span>
-   <span class="signature">[`ellipk( m )`][@stdlib/math/base/special/ellipk]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the first kind.</span>
-   <span class="signature">[`erf( x )`][@stdlib/math/base/special/erf]</span><span class="delimiter">: </span><span class="description">error function.</span>
-   <span class="signature">[`erfc( x )`][@stdlib/math/base/special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="signature">[`erfcinv( x )`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>
-   <span class="signature">[`erfcx( x )`][@stdlib/math/base/special/erfcx]</span><span class="delimiter">: </span><span class="description">scaled complementary error function.</span>
-   <span class="signature">[`erfinv( x )`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="signature">[`factorial( x )`][@stdlib/math/base/special/factorial]</span><span class="delimiter">: </span><span class="description">factorial function.</span>
-   <span class="signature">[`factorial2( n )`][@stdlib/math/base/special/factorial2]</span><span class="delimiter">: </span><span class="description">double factorial function.</span>
-   <span class="signature">[`factorialln( x )`][@stdlib/math/base/special/factorialln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the factorial function.</span>
-   <span class="signature">[`fallingFactorial( x, n )`][@stdlib/math/base/special/falling-factorial]</span><span class="delimiter">: </span><span class="description">compute the falling factorial.</span>
-   <span class="signature">[`fibonacciIndex( F )`][@stdlib/math/base/special/fibonacci-index]</span><span class="delimiter">: </span><span class="description">compute the Fibonacci number index.</span>
-   <span class="signature">[`fibonacci( n )`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="signature">[`flipsign( x, y )`][@stdlib/math/base/special/flipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.</span>
-   <span class="signature">[`flipsignf( x, y )`][@stdlib/math/base/special/flipsignf]</span><span class="delimiter">: </span><span class="description">return a single-precision floating-point number with the magnitude of `x` and the sign of `x*y`.</span>
-   <span class="signature">[`fresnel( x )`][@stdlib/math/base/special/fresnel]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integrals S(x) and C(x).</span>
-   <span class="signature">[`fresnelc( x )`][@stdlib/math/base/special/fresnelc]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral C(x).</span>
-   <span class="signature">[`fresnels( x )`][@stdlib/math/base/special/fresnels]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral S(x).</span>
-   <span class="signature">[`frexp( x )`][@stdlib/math/base/special/frexp]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a normalized fraction and an integer power of two.</span>
-   <span class="signature">[`gamma( x )`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="signature">[`gamma1pm1( x )`][@stdlib/math/base/special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">compute `gamma(x+1) - 1`.</span>
-   <span class="signature">[`gammainc( x, s[, regularized[, upper ]] )`][@stdlib/math/base/special/gammainc]</span><span class="delimiter">: </span><span class="description">incomplete gamma function.</span>
-   <span class="signature">[`gammaincinv( p, s[, upper ] )`][@stdlib/math/base/special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse of incomplete gamma function.</span>
-   <span class="signature">[`gammaln( x )`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>
-   <span class="signature">[`gammasgn( x )`][@stdlib/math/base/special/gammasgn]</span><span class="delimiter">: </span><span class="description">sign of the gamma function.</span>
-   <span class="signature">[`gcd( a, b )`][@stdlib/math/base/special/gcd]</span><span class="delimiter">: </span><span class="description">compute the greatest common divisor (gcd).</span>
-   <span class="signature">[`heaviside( x[, continuity] )`][@stdlib/math/base/special/heaviside]</span><span class="delimiter">: </span><span class="description">evaluate the Heaviside function.</span>
-   <span class="signature">[`hypot( x, y )`][@stdlib/math/base/special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>
-   <span class="signature">[`hypotf( x, y )`][@stdlib/math/base/special/hypotf]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow (single-precision).</span>
-   <span class="signature">[`identity( x )`][@stdlib/math/base/special/identity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of a double-precision floating-point number.</span>
-   <span class="signature">[`identityf( x )`][@stdlib/math/base/special/identityf]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of a single-precision floating-point number.</span>
-   <span class="signature">[`inv( x )`][@stdlib/math/base/special/inv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse of a double-precision floating-point number.</span>
-   <span class="signature">[`invf( x )`][@stdlib/math/base/special/invf]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse of a single-precision floating-point number.</span>
-   <span class="signature">[`kroneckerDelta( i, j )`][@stdlib/math/base/special/kronecker-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Kronecker delta.</span>
-   <span class="signature">[`kroneckerDeltaf( i, j )`][@stdlib/math/base/special/kronecker-deltaf]</span><span class="delimiter">: </span><span class="description">evaluate the Kronecker delta (single-precision).</span>
-   <span class="signature">[`lcm( a, b )`][@stdlib/math/base/special/lcm]</span><span class="delimiter">: </span><span class="description">compute the least common multiple (lcm).</span>
-   <span class="signature">[`ldexp( frac, exp )`][@stdlib/math/base/special/ldexp]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point number by an integer power of two.</span>
-   <span class="signature">[`lucas( n )`][@stdlib/math/base/special/lucas]</span><span class="delimiter">: </span><span class="description">compute the nth Lucas number.</span>
-   <span class="signature">[`max( x, y )`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="signature">[`maxn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/maxn]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="signature">[`min( x, y )`][@stdlib/math/base/special/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="signature">[`minmax( x, y )`][@stdlib/math/base/special/minmax]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>
-   <span class="signature">[`minmaxn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/minmaxn]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>
-   <span class="signature">[`minn( [x[, y[, ...args]]] )`][@stdlib/math/base/special/minn]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="signature">[`modf( x )`][@stdlib/math/base/special/modf]</span><span class="delimiter">: </span><span class="description">decompose a double-precision floating-point number into integral and fractional parts.</span>
-   <span class="signature">[`negafibonacci( n )`][@stdlib/math/base/special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>
-   <span class="signature">[`negalucas( n )`][@stdlib/math/base/special/negalucas]</span><span class="delimiter">: </span><span class="description">compute the nth negaLucas number.</span>
-   <span class="signature">[`nonfibonacci( n )`][@stdlib/math/base/special/nonfibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth non-Fibonacci number.</span>
-   <span class="signature">[`pdiff( x, y )`][@stdlib/math/base/special/pdiff]</span><span class="delimiter">: </span><span class="description">return the positive difference between `x` and `y`.</span>
-   <span class="signature">[`pdifff( x, y )`][@stdlib/math/base/special/pdifff]</span><span class="delimiter">: </span><span class="description">return the positive difference between `x` and `y`.</span>
-   <span class="signature">[`polygamma( n, x )`][@stdlib/math/base/special/polygamma]</span><span class="delimiter">: </span><span class="description">polygamma function.</span>
-   <span class="signature">[`rad2deg( x )`][@stdlib/math/base/special/rad2deg]</span><span class="delimiter">: </span><span class="description">convert an angle from radians to degrees.</span>
-   <span class="signature">[`ramp( x )`][@stdlib/math/base/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>
-   <span class="signature">[`rampf( x )`][@stdlib/math/base/special/rampf]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>
-   <span class="signature">[`rcbrt( x )`][@stdlib/math/base/special/rcbrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal of the principal cube root of a double-precision floating-point number.</span>
-   <span class="signature">[`zeta( s )`][@stdlib/math/base/special/riemann-zeta]</span><span class="delimiter">: </span><span class="description">riemann zeta function.</span>
-   <span class="signature">[`rsqrt( x )`][@stdlib/math/base/special/rsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal of the principal square root of a double-precision floating-point number.</span>
-   <span class="signature">[`rsqrtf( x )`][@stdlib/math/base/special/rsqrtf]</span><span class="delimiter">: </span><span class="description">compute the reciprocal of the principal square root of a single-precision floating-point number.</span>
-   <span class="signature">[`sici( x )`][@stdlib/math/base/special/sici]</span><span class="delimiter">: </span><span class="description">compute the sine and cosine integrals.</span>
-   <span class="signature">[`spence( x )`][@stdlib/math/base/special/spence]</span><span class="delimiter">: </span><span class="description">spence’s function, also known as the dilogarithm.</span>
-   <span class="signature">[`sqrt( x )`][@stdlib/math/base/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a double-precision floating-point number.</span>
-   <span class="signature">[`sqrt1pm1( x )`][@stdlib/math/base/special/sqrt1pm1]</span><span class="delimiter">: </span><span class="description">compute `sqrt( 1 + x ) - 1`.</span>
-   <span class="signature">[`sqrtf( x )`][@stdlib/math/base/special/sqrtf]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a single-precision floating-point number.</span>
-   <span class="signature">[`sqrtpi( x )`][@stdlib/math/base/special/sqrtpi]</span><span class="delimiter">: </span><span class="description">compute the principal square root of the product of π and a positive number.</span>
-   <span class="signature">[`tribonacci( n )`][@stdlib/math/base/special/tribonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Tribonacci number.</span>
-   <span class="signature">[`trigamma( x )`][@stdlib/math/base/special/trigamma]</span><span class="delimiter">: </span><span class="description">trigamma function.</span>
-   <span class="signature">[`wrap( v, min, max )`][@stdlib/math/base/special/wrap]</span><span class="delimiter">: </span><span class="description">wrap a value on the half-open interval `[min,max)`.</span>

</div>

<!-- </toc> -->

Fast algorithms of various special functions, which trade accuracy for increased speed, are available in the following sub-namespace:

<!-- <toc pattern="*fast*" > -->

<div class="namespace-toc">

-   <span class="signature">[`fast`][@stdlib/math/base/special/fast]</span><span class="delimiter">: </span><span class="description">fast math special functions.</span>

</div>

<!-- </toc> -->

Finally, the namespace exports the following kernel functions, which are mainly used internally. Beware that they may only be applicable for input values inside a certain number range and/or may not work as expected if not all arguments satisfy the parameter requirements.

<!-- <toc pattern="+(gammaDeltaRatio|gammaLanczosSum|gammaLanczosSumExpGScaled|rempio2|kernel-*)" > -->

<div class="namespace-toc">

-   <span class="signature">[`kernelBetainc( x, a, b, regularized, upper )`][@stdlib/math/base/special/kernel-betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function and its first derivative.</span>
-   <span class="signature">[`kernelBetaincinv( a, b, p, q )`][@stdlib/math/base/special/kernel-betaincinv]</span><span class="delimiter">: </span><span class="description">inverse of the lower incomplete beta function.</span>
-   <span class="signature">[`kernelCos( x, y )`][@stdlib/math/base/special/kernel-cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a double-precision floating-point number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`kernelSin( x, y )`][@stdlib/math/base/special/kernel-sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a double-precision floating-point number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`kernelTan( x, y, k )`][@stdlib/math/base/special/kernel-tan]</span><span class="delimiter">: </span><span class="description">compute the tangent of a double-precision floating-point number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`rempio2( x, y )`][@stdlib/math/base/special/rempio2]</span><span class="delimiter">: </span><span class="description">compute `x - nπ/2 = r`.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( special ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special

[test-image]: https://github.com/stdlib-js/math-base-special/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/special/kernel-betainc]: https://github.com/stdlib-js/math-base-special-kernel-betainc/tree/umd

[@stdlib/math/base/special/kernel-betaincinv]: https://github.com/stdlib-js/math-base-special-kernel-betaincinv/tree/umd

[@stdlib/math/base/special/kernel-cos]: https://github.com/stdlib-js/math-base-special-kernel-cos/tree/umd

[@stdlib/math/base/special/kernel-sin]: https://github.com/stdlib-js/math-base-special-kernel-sin/tree/umd

[@stdlib/math/base/special/kernel-tan]: https://github.com/stdlib-js/math-base-special-kernel-tan/tree/umd

[@stdlib/math/base/special/rempio2]: https://github.com/stdlib-js/math-base-special-rempio2/tree/umd

[@stdlib/math/base/special/fast]: https://github.com/stdlib-js/math-base-special-fast/tree/umd

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math-base-special-acot/tree/umd

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math-base-special-acoth/tree/umd

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math-base-special-acsc/tree/umd

[@stdlib/math/base/special/acsch]: https://github.com/stdlib-js/math-base-special-acsch/tree/umd

[@stdlib/math/base/special/asec]: https://github.com/stdlib-js/math-base-special-asec/tree/umd

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math-base-special-asech/tree/umd

[@stdlib/math/base/special/bernoulli]: https://github.com/stdlib-js/math-base-special-bernoulli/tree/umd

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta/tree/umd

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc/tree/umd

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math-base-special-betaincinv/tree/umd

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math-base-special-betaln/tree/umd

[@stdlib/math/base/special/binet]: https://github.com/stdlib-js/math-base-special-binet/tree/umd

[@stdlib/math/base/special/binomcoef]: https://github.com/stdlib-js/math-base-special-binomcoef/tree/umd

[@stdlib/math/base/special/binomcoefln]: https://github.com/stdlib-js/math-base-special-binomcoefln/tree/umd

[@stdlib/math/base/special/boxcox]: https://github.com/stdlib-js/math-base-special-boxcox/tree/umd

[@stdlib/math/base/special/boxcox1p]: https://github.com/stdlib-js/math-base-special-boxcox1p/tree/umd

[@stdlib/math/base/special/boxcox1pinv]: https://github.com/stdlib-js/math-base-special-boxcox1pinv/tree/umd

[@stdlib/math/base/special/boxcoxinv]: https://github.com/stdlib-js/math-base-special-boxcoxinv/tree/umd

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt/tree/umd

[@stdlib/math/base/special/cbrtf]: https://github.com/stdlib-js/math-base-special-cbrtf/tree/umd

[@stdlib/math/base/special/ccis]: https://github.com/stdlib-js/math-base-special-ccis/tree/umd

[@stdlib/math/base/special/cexp]: https://github.com/stdlib-js/math-base-special-cexp/tree/umd

[@stdlib/math/base/special/cflipsign]: https://github.com/stdlib-js/math-base-special-cflipsign/tree/umd

[@stdlib/math/base/special/cflipsignf]: https://github.com/stdlib-js/math-base-special-cflipsignf/tree/umd

[@stdlib/math/base/special/cidentity]: https://github.com/stdlib-js/math-base-special-cidentity/tree/umd

[@stdlib/math/base/special/cidentityf]: https://github.com/stdlib-js/math-base-special-cidentityf/tree/umd

[@stdlib/math/base/special/cinv]: https://github.com/stdlib-js/math-base-special-cinv/tree/umd

[@stdlib/math/base/special/copysign]: https://github.com/stdlib-js/math-base-special-copysign/tree/umd

[@stdlib/math/base/special/copysignf]: https://github.com/stdlib-js/math-base-special-copysignf/tree/umd

[@stdlib/math/base/special/cot]: https://github.com/stdlib-js/math-base-special-cot/tree/umd

[@stdlib/math/base/special/coth]: https://github.com/stdlib-js/math-base-special-coth/tree/umd

[@stdlib/math/base/special/cphase]: https://github.com/stdlib-js/math-base-special-cphase/tree/umd

[@stdlib/math/base/special/cpolar]: https://github.com/stdlib-js/math-base-special-cpolar/tree/umd

[@stdlib/math/base/special/csch]: https://github.com/stdlib-js/math-base-special-csch/tree/umd

[@stdlib/math/base/special/deg2rad]: https://github.com/stdlib-js/math-base-special-deg2rad/tree/umd

[@stdlib/math/base/special/deg2radf]: https://github.com/stdlib-js/math-base-special-deg2radf/tree/umd

[@stdlib/math/base/special/digamma]: https://github.com/stdlib-js/math-base-special-digamma/tree/umd

[@stdlib/math/base/special/dirac-delta]: https://github.com/stdlib-js/math-base-special-dirac-delta/tree/umd

[@stdlib/math/base/special/dirichlet-eta]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/tree/umd

[@stdlib/math/base/special/ellipe]: https://github.com/stdlib-js/math-base-special-ellipe/tree/umd

[@stdlib/math/base/special/ellipj]: https://github.com/stdlib-js/math-base-special-ellipj/tree/umd

[@stdlib/math/base/special/ellipk]: https://github.com/stdlib-js/math-base-special-ellipk/tree/umd

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math-base-special-erf/tree/umd

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math-base-special-erfc/tree/umd

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math-base-special-erfcinv/tree/umd

[@stdlib/math/base/special/erfcx]: https://github.com/stdlib-js/math-base-special-erfcx/tree/umd

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math-base-special-erfinv/tree/umd

[@stdlib/math/base/special/factorial]: https://github.com/stdlib-js/math-base-special-factorial/tree/umd

[@stdlib/math/base/special/factorial2]: https://github.com/stdlib-js/math-base-special-factorial2/tree/umd

[@stdlib/math/base/special/factorialln]: https://github.com/stdlib-js/math-base-special-factorialln/tree/umd

[@stdlib/math/base/special/falling-factorial]: https://github.com/stdlib-js/math-base-special-falling-factorial/tree/umd

[@stdlib/math/base/special/fibonacci-index]: https://github.com/stdlib-js/math-base-special-fibonacci-index/tree/umd

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/umd

[@stdlib/math/base/special/flipsign]: https://github.com/stdlib-js/math-base-special-flipsign/tree/umd

[@stdlib/math/base/special/flipsignf]: https://github.com/stdlib-js/math-base-special-flipsignf/tree/umd

[@stdlib/math/base/special/fresnel]: https://github.com/stdlib-js/math-base-special-fresnel/tree/umd

[@stdlib/math/base/special/fresnelc]: https://github.com/stdlib-js/math-base-special-fresnelc/tree/umd

[@stdlib/math/base/special/fresnels]: https://github.com/stdlib-js/math-base-special-fresnels/tree/umd

[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/math-base-special-frexp/tree/umd

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma/tree/umd

[@stdlib/math/base/special/gamma1pm1]: https://github.com/stdlib-js/math-base-special-gamma1pm1/tree/umd

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc/tree/umd

[@stdlib/math/base/special/gammaincinv]: https://github.com/stdlib-js/math-base-special-gammaincinv/tree/umd

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math-base-special-gammaln/tree/umd

[@stdlib/math/base/special/gammasgn]: https://github.com/stdlib-js/math-base-special-gammasgn/tree/umd

[@stdlib/math/base/special/gcd]: https://github.com/stdlib-js/math-base-special-gcd/tree/umd

[@stdlib/math/base/special/heaviside]: https://github.com/stdlib-js/math-base-special-heaviside/tree/umd

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math-base-special-hypot/tree/umd

[@stdlib/math/base/special/hypotf]: https://github.com/stdlib-js/math-base-special-hypotf/tree/umd

[@stdlib/math/base/special/identity]: https://github.com/stdlib-js/math-base-special-identity/tree/umd

[@stdlib/math/base/special/identityf]: https://github.com/stdlib-js/math-base-special-identityf/tree/umd

[@stdlib/math/base/special/inv]: https://github.com/stdlib-js/math-base-special-inv/tree/umd

[@stdlib/math/base/special/invf]: https://github.com/stdlib-js/math-base-special-invf/tree/umd

[@stdlib/math/base/special/kronecker-delta]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/umd

[@stdlib/math/base/special/kronecker-deltaf]: https://github.com/stdlib-js/math-base-special-kronecker-deltaf/tree/umd

[@stdlib/math/base/special/lcm]: https://github.com/stdlib-js/math-base-special-lcm/tree/umd

[@stdlib/math/base/special/ldexp]: https://github.com/stdlib-js/math-base-special-ldexp/tree/umd

[@stdlib/math/base/special/lucas]: https://github.com/stdlib-js/math-base-special-lucas/tree/umd

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math-base-special-max/tree/umd

[@stdlib/math/base/special/maxn]: https://github.com/stdlib-js/math-base-special-maxn/tree/umd

[@stdlib/math/base/special/min]: https://github.com/stdlib-js/math-base-special-min/tree/umd

[@stdlib/math/base/special/minmax]: https://github.com/stdlib-js/math-base-special-minmax/tree/umd

[@stdlib/math/base/special/minmaxn]: https://github.com/stdlib-js/math-base-special-minmaxn/tree/umd

[@stdlib/math/base/special/minn]: https://github.com/stdlib-js/math-base-special-minn/tree/umd

[@stdlib/math/base/special/modf]: https://github.com/stdlib-js/math-base-special-modf/tree/umd

[@stdlib/math/base/special/negafibonacci]: https://github.com/stdlib-js/math-base-special-negafibonacci/tree/umd

[@stdlib/math/base/special/negalucas]: https://github.com/stdlib-js/math-base-special-negalucas/tree/umd

[@stdlib/math/base/special/nonfibonacci]: https://github.com/stdlib-js/math-base-special-nonfibonacci/tree/umd

[@stdlib/math/base/special/pdiff]: https://github.com/stdlib-js/math-base-special-pdiff/tree/umd

[@stdlib/math/base/special/pdifff]: https://github.com/stdlib-js/math-base-special-pdifff/tree/umd

[@stdlib/math/base/special/polygamma]: https://github.com/stdlib-js/math-base-special-polygamma/tree/umd

[@stdlib/math/base/special/rad2deg]: https://github.com/stdlib-js/math-base-special-rad2deg/tree/umd

[@stdlib/math/base/special/ramp]: https://github.com/stdlib-js/math-base-special-ramp/tree/umd

[@stdlib/math/base/special/rampf]: https://github.com/stdlib-js/math-base-special-rampf/tree/umd

[@stdlib/math/base/special/rcbrt]: https://github.com/stdlib-js/math-base-special-rcbrt/tree/umd

[@stdlib/math/base/special/riemann-zeta]: https://github.com/stdlib-js/math-base-special-riemann-zeta/tree/umd

[@stdlib/math/base/special/rsqrt]: https://github.com/stdlib-js/math-base-special-rsqrt/tree/umd

[@stdlib/math/base/special/rsqrtf]: https://github.com/stdlib-js/math-base-special-rsqrtf/tree/umd

[@stdlib/math/base/special/sici]: https://github.com/stdlib-js/math-base-special-sici/tree/umd

[@stdlib/math/base/special/spence]: https://github.com/stdlib-js/math-base-special-spence/tree/umd

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt/tree/umd

[@stdlib/math/base/special/sqrt1pm1]: https://github.com/stdlib-js/math-base-special-sqrt1pm1/tree/umd

[@stdlib/math/base/special/sqrtf]: https://github.com/stdlib-js/math-base-special-sqrtf/tree/umd

[@stdlib/math/base/special/sqrtpi]: https://github.com/stdlib-js/math-base-special-sqrtpi/tree/umd

[@stdlib/math/base/special/tribonacci]: https://github.com/stdlib-js/math-base-special-tribonacci/tree/umd

[@stdlib/math/base/special/trigamma]: https://github.com/stdlib-js/math-base-special-trigamma/tree/umd

[@stdlib/math/base/special/wrap]: https://github.com/stdlib-js/math-base-special-wrap/tree/umd

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs/tree/umd

[@stdlib/math/base/special/abs2]: https://github.com/stdlib-js/math-base-special-abs2/tree/umd

[@stdlib/math/base/special/abs2f]: https://github.com/stdlib-js/math-base-special-abs2f/tree/umd

[@stdlib/math/base/special/absf]: https://github.com/stdlib-js/math-base-special-absf/tree/umd

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs/tree/umd

[@stdlib/math/base/special/cabs2]: https://github.com/stdlib-js/math-base-special-cabs2/tree/umd

[@stdlib/math/base/special/cabs2f]: https://github.com/stdlib-js/math-base-special-cabs2f/tree/umd

[@stdlib/math/base/special/cabsf]: https://github.com/stdlib-js/math-base-special-cabsf/tree/umd

[@stdlib/math/base/special/cceil]: https://github.com/stdlib-js/math-base-special-cceil/tree/umd

[@stdlib/math/base/special/cceilf]: https://github.com/stdlib-js/math-base-special-cceilf/tree/umd

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math-base-special-cceiln/tree/umd

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math-base-special-ceil/tree/umd

[@stdlib/math/base/special/ceil10]: https://github.com/stdlib-js/math-base-special-ceil10/tree/umd

[@stdlib/math/base/special/ceil2]: https://github.com/stdlib-js/math-base-special-ceil2/tree/umd

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math-base-special-ceilb/tree/umd

[@stdlib/math/base/special/ceilf]: https://github.com/stdlib-js/math-base-special-ceilf/tree/umd

[@stdlib/math/base/special/ceiln]: https://github.com/stdlib-js/math-base-special-ceiln/tree/umd

[@stdlib/math/base/special/ceilsd]: https://github.com/stdlib-js/math-base-special-ceilsd/tree/umd

[@stdlib/math/base/special/cfloor]: https://github.com/stdlib-js/math-base-special-cfloor/tree/umd

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/umd

[@stdlib/math/base/special/clamp]: https://github.com/stdlib-js/math-base-special-clamp/tree/umd

[@stdlib/math/base/special/clampf]: https://github.com/stdlib-js/math-base-special-clampf/tree/umd

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math-base-special-cround/tree/umd

[@stdlib/math/base/special/croundn]: https://github.com/stdlib-js/math-base-special-croundn/tree/umd

[@stdlib/math/base/special/csignum]: https://github.com/stdlib-js/math-base-special-csignum/tree/umd

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math-base-special-floor/tree/umd

[@stdlib/math/base/special/floor10]: https://github.com/stdlib-js/math-base-special-floor10/tree/umd

[@stdlib/math/base/special/floor2]: https://github.com/stdlib-js/math-base-special-floor2/tree/umd

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math-base-special-floorb/tree/umd

[@stdlib/math/base/special/floorf]: https://github.com/stdlib-js/math-base-special-floorf/tree/umd

[@stdlib/math/base/special/floorn]: https://github.com/stdlib-js/math-base-special-floorn/tree/umd

[@stdlib/math/base/special/floorsd]: https://github.com/stdlib-js/math-base-special-floorsd/tree/umd

[@stdlib/math/base/special/labs]: https://github.com/stdlib-js/math-base-special-labs/tree/umd

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math-base-special-maxabs/tree/umd

[@stdlib/math/base/special/maxabsn]: https://github.com/stdlib-js/math-base-special-maxabsn/tree/umd

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math-base-special-minabs/tree/umd

[@stdlib/math/base/special/minabsn]: https://github.com/stdlib-js/math-base-special-minabsn/tree/umd

[@stdlib/math/base/special/minmaxabs]: https://github.com/stdlib-js/math-base-special-minmaxabs/tree/umd

[@stdlib/math/base/special/minmaxabsn]: https://github.com/stdlib-js/math-base-special-minmaxabsn/tree/umd

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math-base-special-round/tree/umd

[@stdlib/math/base/special/round10]: https://github.com/stdlib-js/math-base-special-round10/tree/umd

[@stdlib/math/base/special/round2]: https://github.com/stdlib-js/math-base-special-round2/tree/umd

[@stdlib/math/base/special/roundb]: https://github.com/stdlib-js/math-base-special-roundb/tree/umd

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn/tree/umd

[@stdlib/math/base/special/roundsd]: https://github.com/stdlib-js/math-base-special-roundsd/tree/umd

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math-base-special-signum/tree/umd

[@stdlib/math/base/special/signumf]: https://github.com/stdlib-js/math-base-special-signumf/tree/umd

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc/tree/umd

[@stdlib/math/base/special/trunc10]: https://github.com/stdlib-js/math-base-special-trunc10/tree/umd

[@stdlib/math/base/special/trunc2]: https://github.com/stdlib-js/math-base-special-trunc2/tree/umd

[@stdlib/math/base/special/truncb]: https://github.com/stdlib-js/math-base-special-truncb/tree/umd

[@stdlib/math/base/special/truncf]: https://github.com/stdlib-js/math-base-special-truncf/tree/umd

[@stdlib/math/base/special/truncn]: https://github.com/stdlib-js/math-base-special-truncn/tree/umd

[@stdlib/math/base/special/truncsd]: https://github.com/stdlib-js/math-base-special-truncsd/tree/umd

[@stdlib/math/base/special/besselj0]: https://github.com/stdlib-js/math-base-special-besselj0/tree/umd

[@stdlib/math/base/special/besselj1]: https://github.com/stdlib-js/math-base-special-besselj1/tree/umd

[@stdlib/math/base/special/bessely0]: https://github.com/stdlib-js/math-base-special-bessely0/tree/umd

[@stdlib/math/base/special/bessely1]: https://github.com/stdlib-js/math-base-special-bessely1/tree/umd

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math-base-special-acos/tree/umd

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math-base-special-acosh/tree/umd

[@stdlib/math/base/special/acovercos]: https://github.com/stdlib-js/math-base-special-acovercos/tree/umd

[@stdlib/math/base/special/acoversin]: https://github.com/stdlib-js/math-base-special-acoversin/tree/umd

[@stdlib/math/base/special/ahavercos]: https://github.com/stdlib-js/math-base-special-ahavercos/tree/umd

[@stdlib/math/base/special/ahaversin]: https://github.com/stdlib-js/math-base-special-ahaversin/tree/umd

[@stdlib/math/base/special/asin]: https://github.com/stdlib-js/math-base-special-asin/tree/umd

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math-base-special-asinh/tree/umd

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math-base-special-atan/tree/umd

[@stdlib/math/base/special/atan2]: https://github.com/stdlib-js/math-base-special-atan2/tree/umd

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math-base-special-atanh/tree/umd

[@stdlib/math/base/special/avercos]: https://github.com/stdlib-js/math-base-special-avercos/tree/umd

[@stdlib/math/base/special/aversin]: https://github.com/stdlib-js/math-base-special-aversin/tree/umd

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/umd

[@stdlib/math/base/special/cosh]: https://github.com/stdlib-js/math-base-special-cosh/tree/umd

[@stdlib/math/base/special/cosm1]: https://github.com/stdlib-js/math-base-special-cosm1/tree/umd

[@stdlib/math/base/special/cospi]: https://github.com/stdlib-js/math-base-special-cospi/tree/umd

[@stdlib/math/base/special/covercos]: https://github.com/stdlib-js/math-base-special-covercos/tree/umd

[@stdlib/math/base/special/coversin]: https://github.com/stdlib-js/math-base-special-coversin/tree/umd

[@stdlib/math/base/special/hacovercos]: https://github.com/stdlib-js/math-base-special-hacovercos/tree/umd

[@stdlib/math/base/special/hacoversin]: https://github.com/stdlib-js/math-base-special-hacoversin/tree/umd

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math-base-special-havercos/tree/umd

[@stdlib/math/base/special/haversin]: https://github.com/stdlib-js/math-base-special-haversin/tree/umd

[@stdlib/math/base/special/rising-factorial]: https://github.com/stdlib-js/math-base-special-rising-factorial/tree/umd

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin/tree/umd

[@stdlib/math/base/special/sinc]: https://github.com/stdlib-js/math-base-special-sinc/tree/umd

[@stdlib/math/base/special/sincos]: https://github.com/stdlib-js/math-base-special-sincos/tree/umd

[@stdlib/math/base/special/sincospi]: https://github.com/stdlib-js/math-base-special-sincospi/tree/umd

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math-base-special-sinh/tree/umd

[@stdlib/math/base/special/sinpi]: https://github.com/stdlib-js/math-base-special-sinpi/tree/umd

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math-base-special-tan/tree/umd

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math-base-special-tanh/tree/umd

[@stdlib/math/base/special/vercos]: https://github.com/stdlib-js/math-base-special-vercos/tree/umd

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math-base-special-versin/tree/umd

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math-base-special-exp/tree/umd

[@stdlib/math/base/special/exp10]: https://github.com/stdlib-js/math-base-special-exp10/tree/umd

[@stdlib/math/base/special/exp2]: https://github.com/stdlib-js/math-base-special-exp2/tree/umd

[@stdlib/math/base/special/expit]: https://github.com/stdlib-js/math-base-special-expit/tree/umd

[@stdlib/math/base/special/expm1]: https://github.com/stdlib-js/math-base-special-expm1/tree/umd

[@stdlib/math/base/special/expm1rel]: https://github.com/stdlib-js/math-base-special-expm1rel/tree/umd

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln/tree/umd

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math-base-special-log/tree/umd

[@stdlib/math/base/special/log10]: https://github.com/stdlib-js/math-base-special-log10/tree/umd

[@stdlib/math/base/special/log1mexp]: https://github.com/stdlib-js/math-base-special-log1mexp/tree/umd

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math-base-special-log1p/tree/umd

[@stdlib/math/base/special/log1pexp]: https://github.com/stdlib-js/math-base-special-log1pexp/tree/umd

[@stdlib/math/base/special/log1pmx]: https://github.com/stdlib-js/math-base-special-log1pmx/tree/umd

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math-base-special-log2/tree/umd

[@stdlib/math/base/special/logaddexp]: https://github.com/stdlib-js/math-base-special-logaddexp/tree/umd

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math-base-special-pow/tree/umd

[@stdlib/math/base/special/powm1]: https://github.com/stdlib-js/math-base-special-powm1/tree/umd

[@stdlib/math/base/special/xlog1py]: https://github.com/stdlib-js/math-base-special-xlog1py/tree/umd

[@stdlib/math/base/special/xlogy]: https://github.com/stdlib-js/math-base-special-xlogy/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
