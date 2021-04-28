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

# Special Functions

> Standard library base special math functions.

<section class="installation">

## Installation

``` bash
$ npm install @stdlib/math-base-special
```

</section>

<section class="installation">

## Installation

``` bash
$ npm install @stdlib/math-base-special
```

</section>

<section class="installation">

## Installation

``` bash
$ npm install @stdlib/math-base-special
```

</section>

<section class="usage">

## Usage

```javascript
var special = require( '@stdlib/math-base-special' );
```

#### special

Standard library base special math functions.

```javascript
var fcns = special;
// returns {...}
```

### Exponential & Logarithmic Functions

<!-- <toc pattern="+(*log*|ln|exp*|*pow*)" ignore="logit" > -->

<div class="namespace-toc">

-   <span class="signature">[`exp( x )`][@stdlib/math-base-special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="signature">[`exp10( x )`][@stdlib/math-base-special/exp10]</span><span class="delimiter">: </span><span class="description">base `10` exponential function.</span>
-   <span class="signature">[`exp2( x )`][@stdlib/math-base-special/exp2]</span><span class="delimiter">: </span><span class="description">base `2` exponential function.</span>
-   <span class="signature">[`expit( x )`][@stdlib/math-base-special/expit]</span><span class="delimiter">: </span><span class="description">compute the standard logistic function.</span>
-   <span class="signature">[`expm1( x )`][@stdlib/math-base-special/expm1]</span><span class="delimiter">: </span><span class="description">compute `exp(x) - 1`.</span>
-   <span class="signature">[`expm1rel( x )`][@stdlib/math-base-special/expm1rel]</span><span class="delimiter">: </span><span class="description">compute the relative error exponential.</span>
-   <span class="signature">[`ln( x )`][@stdlib/math-base-special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm.</span>
-   <span class="signature">[`log( x, b )`][@stdlib/math-base-special/log]</span><span class="delimiter">: </span><span class="description">compute the base `b` logarithm.</span>
-   <span class="signature">[`log10( x )`][@stdlib/math-base-special/log10]</span><span class="delimiter">: </span><span class="description">evaluate the common logarithm].</span>
-   <span class="signature">[`log1mexp( x )`][@stdlib/math-base-special/log1mexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `1-exp(-|x|)`.</span>
-   <span class="signature">[`log1p( x )`][@stdlib/math-base-special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of `1+x`.</span>
-   <span class="signature">[`log1pexp( x )`][@stdlib/math-base-special/log1pexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `1+exp(x)`.</span>
-   <span class="signature">[`log2( x )`][@stdlib/math-base-special/log2]</span><span class="delimiter">: </span><span class="description">evaluate the binary logarithm.</span>
-   <span class="signature">[`logaddexp( x, y )`][@stdlib/math-base-special/logaddexp]</span><span class="delimiter">: </span><span class="description">evaluates the natural logarithm of `exp(x) + exp(y)`.</span>
-   <span class="signature">[`pow( base, exponent )`][@stdlib/math-base-special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>
-   <span class="signature">[`powm1( b, x )`][@stdlib/math-base-special/powm1]</span><span class="delimiter">: </span><span class="description">evaluate `bˣ - 1`.</span>
-   <span class="signature">[`xlog1py( x, y )`][@stdlib/math-base-special/xlog1py]</span><span class="delimiter">: </span><span class="description">compute `x * ln(y+1)` so that the result is `0` if `x = 0`.</span>
-   <span class="signature">[`xlogy( x, y )`][@stdlib/math-base-special/xlogy]</span><span class="delimiter">: </span><span class="description">compute `x * ln(y)` so that the result is `0` if `x = 0`.</span>

</div>

<!-- </toc> -->

### Trigonometric Functions

<!-- <toc pattern="*+(sin|cos|tan)*" ignore="+(kernel-sin|kernel-cos|kernel-tan)"> -->

<div class="namespace-toc">

-   <span class="signature">[`acos( x )`][@stdlib/math-base-special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a number.</span>
-   <span class="signature">[`acosh( x )`][@stdlib/math-base-special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a number.</span>
-   <span class="signature">[`acovercos( x )`][@stdlib/math-base-special/acovercos]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine.</span>
-   <span class="signature">[`acoversin( x )`][@stdlib/math-base-special/acoversin]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed sine.</span>
-   <span class="signature">[`ahavercos( x )`][@stdlib/math-base-special/ahavercos]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed cosine.</span>
-   <span class="signature">[`ahaversin( x )`][@stdlib/math-base-special/ahaversin]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed sine.</span>
-   <span class="signature">[`asin( x )`][@stdlib/math-base-special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a number.</span>
-   <span class="signature">[`asinh( x )`][@stdlib/math-base-special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a number.</span>
-   <span class="signature">[`atan( x )`][@stdlib/math-base-special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a number.</span>
-   <span class="signature">[`atan2( y, x )`][@stdlib/math-base-special/atan2]</span><span class="delimiter">: </span><span class="description">evaluate the arctangent of the quotient of two numbers.</span>
-   <span class="signature">[`atanh( x )`][@stdlib/math-base-special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a number.</span>
-   <span class="signature">[`avercos( x )`][@stdlib/math-base-special/avercos]</span><span class="delimiter">: </span><span class="description">compute the inverse versed cosine.</span>
-   <span class="signature">[`aversin( x )`][@stdlib/math-base-special/aversin]</span><span class="delimiter">: </span><span class="description">compute the inverse versed sine.</span>
-   <span class="signature">[`cos( x )`][@stdlib/math-base-special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="signature">[`cosh( x )`][@stdlib/math-base-special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a number.</span>
-   <span class="signature">[`cosm1( x )`][@stdlib/math-base-special/cosm1]</span><span class="delimiter">: </span><span class="description">compute `cos(x) - 1`.</span>
-   <span class="signature">[`cospi( x )`][@stdlib/math-base-special/cospi]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number times π.</span>
-   <span class="signature">[`covercos( x )`][@stdlib/math-base-special/covercos]</span><span class="delimiter">: </span><span class="description">compute the coversed cosine.</span>
-   <span class="signature">[`coversin( x )`][@stdlib/math-base-special/coversin]</span><span class="delimiter">: </span><span class="description">compute the coversed sine.</span>
-   <span class="signature">[`hacovercos( x )`][@stdlib/math-base-special/hacovercos]</span><span class="delimiter">: </span><span class="description">compute the half-value coversed cosine.</span>
-   <span class="signature">[`hacoversin( x )`][@stdlib/math-base-special/hacoversin]</span><span class="delimiter">: </span><span class="description">compute the half-value coversed sine.</span>
-   <span class="signature">[`havercos( x )`][@stdlib/math-base-special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="signature">[`haversin( x )`][@stdlib/math-base-special/haversin]</span><span class="delimiter">: </span><span class="description">compute the half-value versed sine.</span>
-   <span class="signature">[`risingFactorial( x, n )`][@stdlib/math-base-special/rising-factorial]</span><span class="delimiter">: </span><span class="description">compute the rising factorial.</span>
-   <span class="signature">[`sin( x )`][@stdlib/math-base-special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="signature">[`sinc( x )`][@stdlib/math-base-special/sinc]</span><span class="delimiter">: </span><span class="description">compute the cardinal sine of a number.</span>
-   <span class="signature">[`sincos( [out,] x )`][@stdlib/math-base-special/sincos]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number.</span>
-   <span class="signature">[`sincospi( [out,] x )`][@stdlib/math-base-special/sincospi]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number times π.</span>
-   <span class="signature">[`sinh( x )`][@stdlib/math-base-special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a number.</span>
-   <span class="signature">[`sinpi( x )`][@stdlib/math-base-special/sinpi]</span><span class="delimiter">: </span><span class="description">compute the sine of a number times π.</span>
-   <span class="signature">[`tan( x )`][@stdlib/math-base-special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>
-   <span class="signature">[`tanh( x )`][@stdlib/math-base-special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a number.</span>
-   <span class="signature">[`vercos( x )`][@stdlib/math-base-special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>
-   <span class="signature">[`versin( x )`][@stdlib/math-base-special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</div>

<!-- </toc> -->

### Bessel Functions

<!-- <toc pattern="*bessel*" > -->

<div class="namespace-toc">

-   <span class="signature">[`besselj0( x )`][@stdlib/math-base-special/besselj0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero.</span>
-   <span class="signature">[`besselj1( x )`][@stdlib/math-base-special/besselj1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order one.</span>
-   <span class="signature">[`bessely0( x )`][@stdlib/math-base-special/bessely0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero.</span>
-   <span class="signature">[`bessely1( x )`][@stdlib/math-base-special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</div>

<!-- </toc> -->

### Absolute Value and Rounding Functions

<!-- <toc pattern="*+(abs|ceil|floor|clamp|trunc|round|signum)*" > -->

<div class="namespace-toc">

-   <span class="signature">[`abs( x )`][@stdlib/math-base-special/abs]</span><span class="delimiter">: </span><span class="description">compute an absolute value.</span>
-   <span class="signature">[`abs2( x )`][@stdlib/math-base-special/abs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value.</span>
-   <span class="signature">[`ceil( x )`][@stdlib/math-base-special/ceil]</span><span class="delimiter">: </span><span class="description">round a numeric value toward positive infinity.</span>
-   <span class="signature">[`ceil10( x )`][@stdlib/math-base-special/ceil10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward positive infinity.</span>
-   <span class="signature">[`ceil2( x )`][@stdlib/math-base-special/ceil2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward positive infinity.</span>
-   <span class="signature">[`ceilb( x, n, b )`][@stdlib/math-base-special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="signature">[`ceiln( x, n )`][@stdlib/math-base-special/ceiln]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="signature">[`ceilsd( x, n[, b] )`][@stdlib/math-base-special/ceilsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward positive infinity with N significant figures.</span>
-   <span class="signature">[`clamp( v, min, max )`][@stdlib/math-base-special/clamp]</span><span class="delimiter">: </span><span class="description">restrict a value to a specified range.</span>
-   <span class="signature">[`floor( x )`][@stdlib/math-base-special/floor]</span><span class="delimiter">: </span><span class="description">round a numeric value toward negative infinity.</span>
-   <span class="signature">[`floor10( x )`][@stdlib/math-base-special/floor10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward negative infinity.</span>
-   <span class="signature">[`floor2( x )`][@stdlib/math-base-special/floor2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward negative infinity.</span>
-   <span class="signature">[`floorb( x, n, b )`][@stdlib/math-base-special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="signature">[`floorn( x, n )`][@stdlib/math-base-special/floorn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="signature">[`floorsd( x, n[, b] )`][@stdlib/math-base-special/floorsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward negative infinity with N significant figures.</span>
-   <span class="signature">[`labs( x )`][@stdlib/math-base-special/labs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a signed 32-bit integer.</span>
-   <span class="signature">[`maxabs( [x[, y[, ...args]]] )`][@stdlib/math-base-special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="signature">[`minabs( [x[, y[, ...args]]] )`][@stdlib/math-base-special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="signature">[`minmaxabs( [out,] x[, y[, ...args]] )`][@stdlib/math-base-special/minmaxabs]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>
-   <span class="signature">[`round( x )`][@stdlib/math-base-special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="signature">[`round10( x )`][@stdlib/math-base-special/round10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 on a linear scale.</span>
-   <span class="signature">[`round2( x )`][@stdlib/math-base-special/round2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two on a linear scale.</span>
-   <span class="signature">[`roundb( x, n, b )`][@stdlib/math-base-special/roundb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n on a linear scale.</span>
-   <span class="signature">[`roundn( x, n )`][@stdlib/math-base-special/roundn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n.</span>
-   <span class="signature">[`roundsd( x, n[, b] )`][@stdlib/math-base-special/roundsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number with `n` significant figures.</span>
-   <span class="signature">[`signum( x )`][@stdlib/math-base-special/signum]</span><span class="delimiter">: </span><span class="description">signum function.</span>
-   <span class="signature">[`trunc( x )`][@stdlib/math-base-special/trunc]</span><span class="delimiter">: </span><span class="description">round a numeric value toward zero.</span>
-   <span class="signature">[`trunc10( x )`][@stdlib/math-base-special/trunc10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward zero.</span>
-   <span class="signature">[`trunc2( x )`][@stdlib/math-base-special/trunc2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward zero.</span>
-   <span class="signature">[`truncb( x, n, b )`][@stdlib/math-base-special/truncb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward zero.</span>
-   <span class="signature">[`truncn( x, n )`][@stdlib/math-base-special/truncn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward zero.</span>
-   <span class="signature">[`truncsd( x, n[, b] )`][@stdlib/math-base-special/truncsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward zero with `n` significant figures.</span>

</div>

<!-- </toc> -->

### Other Special Functions

<!-- <toc ignore="*bessel*" ignore="*+(sin|cos|tan)*" ignore="+(*log*|ln|exp*|*pow*)" ignore="*+(abs|ceil|floor|clamp|trunc|round|signum)*" ignore="+(gamma-delta-ratio|gamma-lanczos-sum*|rempio2|kernel-*)" > -->

<div class="namespace-toc">

-   <span class="signature">[`acoth( x )`][@stdlib/math-base-special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent of a number.</span>
-   <span class="signature">[`bernoulli( n )`][@stdlib/math-base-special/bernoulli]</span><span class="delimiter">: </span><span class="description">compute the nth Bernoulli number.</span>
-   <span class="signature">[`beta( x, y )`][@stdlib/math-base-special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="signature">[`betainc( x, a, b[, regularized[, upper]] )`][@stdlib/math-base-special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="signature">[`betaincinv( p, a, b[, upper] )`][@stdlib/math-base-special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse of the incomplete beta function.</span>
-   <span class="signature">[`betaln( x, y )`][@stdlib/math-base-special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the Beta function.</span>
-   <span class="signature">[`binet( x )`][@stdlib/math-base-special/binet]</span><span class="delimiter">: </span><span class="description">evaluate Binet's formula extended to real numbers.</span>
-   <span class="signature">[`binomcoef( n, k )`][@stdlib/math-base-special/binomcoef]</span><span class="delimiter">: </span><span class="description">compute the binomial coefficient.</span>
-   <span class="signature">[`binomcoefln( n, k )`][@stdlib/math-base-special/binomcoefln]</span><span class="delimiter">: </span><span class="description">compute the natural logarithm of the binomial coefficient.</span>
-   <span class="signature">[`boxcox( x, lambda )`][@stdlib/math-base-special/boxcox]</span><span class="delimiter">: </span><span class="description">compute a one-parameter Box-Cox transformation.</span>
-   <span class="signature">[`boxcox1p( x, lambda )`][@stdlib/math-base-special/boxcox1p]</span><span class="delimiter">: </span><span class="description">compute a one-parameter Box-Cox transformation of `1+x`.</span>
-   <span class="signature">[`boxcox1pinv( y, lambda )`][@stdlib/math-base-special/boxcox1pinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation for `1+x`.</span>
-   <span class="signature">[`boxcoxinv( y, lambda )`][@stdlib/math-base-special/boxcoxinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a one-parameter Box-Cox transformation.</span>
-   <span class="signature">[`cbrt( x )`][@stdlib/math-base-special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root.</span>
-   <span class="signature">[`copysign( x, y )`][@stdlib/math-base-special/copysign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.</span>
-   <span class="signature">[`deg2rad( x )`][@stdlib/math-base-special/deg2rad]</span><span class="delimiter">: </span><span class="description">convert an angle from degrees to radians.</span>
-   <span class="signature">[`digamma( x )`][@stdlib/math-base-special/digamma]</span><span class="delimiter">: </span><span class="description">digamma function.</span>
-   <span class="signature">[`diracDelta( x )`][@stdlib/math-base-special/dirac-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Dirac delta function.</span>
-   <span class="signature">[`eta( s )`][@stdlib/math-base-special/dirichlet-eta]</span><span class="delimiter">: </span><span class="description">dirichlet eta function.</span>
-   <span class="signature">[`ellipe( m )`][@stdlib/math-base-special/ellipe]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the second kind.</span>
-   <span class="signature">[`ellipk( m )`][@stdlib/math-base-special/ellipk]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the first kind.</span>
-   <span class="signature">[`erf( x )`][@stdlib/math-base-special/erf]</span><span class="delimiter">: </span><span class="description">error function.</span>
-   <span class="signature">[`erfc( x )`][@stdlib/math-base-special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="signature">[`erfcinv( x )`][@stdlib/math-base-special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>
-   <span class="signature">[`erfinv( x )`][@stdlib/math-base-special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="signature">[`factorial( x )`][@stdlib/math-base-special/factorial]</span><span class="delimiter">: </span><span class="description">factorial function.</span>
-   <span class="signature">[`factorialln( x )`][@stdlib/math-base-special/factorialln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the factorial function.</span>
-   <span class="signature">[`fallingFactorial( x, n )`][@stdlib/math-base-special/falling-factorial]</span><span class="delimiter">: </span><span class="description">compute the falling factorial.</span>
-   <span class="signature">[`fibonacciIndex( F )`][@stdlib/math-base-special/fibonacci-index]</span><span class="delimiter">: </span><span class="description">compute the Fibonacci number index.</span>
-   <span class="signature">[`fibonacci( n )`][@stdlib/math-base-special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="signature">[`flipsign( x, y )`][@stdlib/math-base-special/flipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.</span>
-   <span class="signature">[`fresnel( [out,] x )`][@stdlib/math-base-special/fresnel]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integrals S(x) and C(x).</span>
-   <span class="signature">[`fresnelc( x )`][@stdlib/math-base-special/fresnelc]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral C(x).</span>
-   <span class="signature">[`fresnels( x )`][@stdlib/math-base-special/fresnels]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral S(x).</span>
-   <span class="signature">[`frexp( [out,] x )`][@stdlib/math-base-special/frexp]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a normalized fraction and an integer power of two.</span>
-   <span class="signature">[`gamma( x )`][@stdlib/math-base-special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="signature">[`gamma1pm1( x )`][@stdlib/math-base-special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">compute `gamma(x+1) - 1`.</span>
-   <span class="signature">[`gammainc( x, s[, regularized[, upper ]] )`][@stdlib/math-base-special/gammainc]</span><span class="delimiter">: </span><span class="description">incomplete gamma function.</span>
-   <span class="signature">[`gammaincinv( p, s[, upper ] )`][@stdlib/math-base-special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse of incomplete gamma function.</span>
-   <span class="signature">[`gammaln( x )`][@stdlib/math-base-special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>
-   <span class="signature">[`gcd( a, b )`][@stdlib/math-base-special/gcd]</span><span class="delimiter">: </span><span class="description">compute the greatest common divisor (gcd).</span>
-   <span class="signature">[`heaviside( x[, continuity] )`][@stdlib/math-base-special/heaviside]</span><span class="delimiter">: </span><span class="description">evaluate the Heaviside function.</span>
-   <span class="signature">[`hypot( x, y )`][@stdlib/math-base-special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>
-   <span class="signature">[`imul( a, b )`][@stdlib/math-base-special/imul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two signed 32-bit integers.</span>
-   <span class="signature">[`imuldw( [out,] a, b )`][@stdlib/math-base-special/imuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="signature">[`inv( x )`][@stdlib/math-base-special/inv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse.</span>
-   <span class="signature">[`kroneckerDelta( i, j )`][@stdlib/math-base-special/kronecker-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Kronecker delta.</span>
-   <span class="signature">[`lcm( a, b )`][@stdlib/math-base-special/lcm]</span><span class="delimiter">: </span><span class="description">compute the least common multiple (lcm).</span>
-   <span class="signature">[`ldexp( frac, exp )`][@stdlib/math-base-special/ldexp]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point number by an integer power of two.</span>
-   <span class="signature">[`lucas( n )`][@stdlib/math-base-special/lucas]</span><span class="delimiter">: </span><span class="description">compute the nth Lucas number.</span>
-   <span class="signature">[`max( [x[, y[, ...args]]] )`][@stdlib/math-base-special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="signature">[`min( [x[, y[, ...args]]] )`][@stdlib/math-base-special/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="signature">[`minmax( [out,] x[, y[, ...args]] )`][@stdlib/math-base-special/minmax]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>
-   <span class="signature">[`modf( [out,] x )`][@stdlib/math-base-special/modf]</span><span class="delimiter">: </span><span class="description">decompose a double-precision floating-point number into integral and fractional parts.</span>
-   <span class="signature">[`negafibonacci( n )`][@stdlib/math-base-special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>
-   <span class="signature">[`negalucas( n )`][@stdlib/math-base-special/negalucas]</span><span class="delimiter">: </span><span class="description">compute the nth negaLucas number.</span>
-   <span class="signature">[`nonfibonacci( n )`][@stdlib/math-base-special/nonfibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth non-Fibonacci number.</span>
-   <span class="signature">[`pdiff( x, y )`][@stdlib/math-base-special/pdiff]</span><span class="delimiter">: </span><span class="description">return the positive difference between `x` and `y`.</span>
-   <span class="signature">[`polygamma( n, x )`][@stdlib/math-base-special/polygamma]</span><span class="delimiter">: </span><span class="description">polygamma function.</span>
-   <span class="signature">[`rad2deg( x )`][@stdlib/math-base-special/rad2deg]</span><span class="delimiter">: </span><span class="description">convert an angle from radians to degrees.</span>
-   <span class="signature">[`ramp( x )`][@stdlib/math-base-special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>
-   <span class="signature">[`zeta( s )`][@stdlib/math-base-special/riemann-zeta]</span><span class="delimiter">: </span><span class="description">riemann zeta function.</span>
-   <span class="signature">[`rsqrt( x )`][@stdlib/math-base-special/rsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal of the principal square root.</span>
-   <span class="signature">[`sici( [out,] x )`][@stdlib/math-base-special/sici]</span><span class="delimiter">: </span><span class="description">compute the sine and cosine integrals.</span>
-   <span class="signature">[`spence( x )`][@stdlib/math-base-special/spence]</span><span class="delimiter">: </span><span class="description">spence’s function, also known as the dilogarithm.</span>
-   <span class="signature">[`sqrt( x )`][@stdlib/math-base-special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root.</span>
-   <span class="signature">[`sqrt1pm1( x )`][@stdlib/math-base-special/sqrt1pm1]</span><span class="delimiter">: </span><span class="description">compute `sqrt( 1 + x ) - 1`.</span>
-   <span class="signature">[`trigamma( x )`][@stdlib/math-base-special/trigamma]</span><span class="delimiter">: </span><span class="description">trigamma function.</span>
-   <span class="signature">[`uimul( a, b )`][@stdlib/math-base-special/uimul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two unsigned 32-bit integers.</span>
-   <span class="signature">[`uimuldw( [out,] a, b )`][@stdlib/math-base-special/uimuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>
-   <span class="signature">[`wrap( v, min, max )`][@stdlib/math-base-special/wrap]</span><span class="delimiter">: </span><span class="description">wrap a value on the half-open interval `[min,max)`.</span>

</div>

<!-- </toc> -->

Finally, the namespace exports the following kernel functions, which are mainly used internally. Beware that they may only be applicable for input values inside a certain number range and/or may not work as expected if not all arguments satisfy the parameter requirements.

<!-- <toc pattern="+(gammaDeltaRatio|gammaLanczosSum|gammaLanczosSumExpGScaled|rempio2|kernel-*)" > -->

<div class="namespace-toc">

-   <span class="signature">[`kernelBetainc( x, a, b, regularized, upper )`][@stdlib/math-base-special/kernel-betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function and its first derivative.</span>
-   <span class="signature">[`kernelBetaincinv( a, b, p, q )`][@stdlib/math-base-special/kernel-betaincinv]</span><span class="delimiter">: </span><span class="description">inverse of the lower incomplete beta function.</span>
-   <span class="signature">[`kernelCos( x, y )`][@stdlib/math-base-special/kernel-cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`kernelSin( x, y )`][@stdlib/math-base-special/kernel-sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`kernelTan( x, y, k )`][@stdlib/math-base-special/kernel-tan]</span><span class="delimiter">: </span><span class="description">compute the tangent of a number on `[-π/4, π/4]`.</span>
-   <span class="signature">[`rempio2( x, y )`][@stdlib/math-base-special/rempio2]</span><span class="delimiter">: </span><span class="description">compute `x - nπ/2 = r`.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var special = require( '@stdlib/math-base-special' );

console.log( objectKeys( special ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special/main/LICENSE

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special/main/LICENSE

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math-base-special/kernel-betainc]: https://github.com/stdlib-js/math-base-special/tree/main/kernel-betainc

[@stdlib/math-base-special/kernel-betaincinv]: https://github.com/stdlib-js/math-base-special/tree/main/kernel-betaincinv

[@stdlib/math-base-special/kernel-cos]: https://github.com/stdlib-js/math-base-special/tree/main/kernel-cos

[@stdlib/math-base-special/kernel-sin]: https://github.com/stdlib-js/math-base-special/tree/main/kernel-sin

[@stdlib/math-base-special/kernel-tan]: https://github.com/stdlib-js/math-base-special/tree/main/kernel-tan

[@stdlib/math-base-special/rempio2]: https://github.com/stdlib-js/math-base-special/tree/main/rempio2

[@stdlib/math-base-special/acoth]: https://github.com/stdlib-js/math-base-special/tree/main/acoth

[@stdlib/math-base-special/bernoulli]: https://github.com/stdlib-js/math-base-special/tree/main/bernoulli

[@stdlib/math-base-special/beta]: https://github.com/stdlib-js/math-base-special/tree/main/beta

[@stdlib/math-base-special/betainc]: https://github.com/stdlib-js/math-base-special/tree/main/betainc

[@stdlib/math-base-special/betaincinv]: https://github.com/stdlib-js/math-base-special/tree/main/betaincinv

[@stdlib/math-base-special/betaln]: https://github.com/stdlib-js/math-base-special/tree/main/betaln

[@stdlib/math-base-special/binet]: https://github.com/stdlib-js/math-base-special/tree/main/binet

[@stdlib/math-base-special/binomcoef]: https://github.com/stdlib-js/math-base-special/tree/main/binomcoef

[@stdlib/math-base-special/binomcoefln]: https://github.com/stdlib-js/math-base-special/tree/main/binomcoefln

[@stdlib/math-base-special/boxcox]: https://github.com/stdlib-js/math-base-special/tree/main/boxcox

[@stdlib/math-base-special/boxcox1p]: https://github.com/stdlib-js/math-base-special/tree/main/boxcox1p

[@stdlib/math-base-special/boxcox1pinv]: https://github.com/stdlib-js/math-base-special/tree/main/boxcox1pinv

[@stdlib/math-base-special/boxcoxinv]: https://github.com/stdlib-js/math-base-special/tree/main/boxcoxinv

[@stdlib/math-base-special/cbrt]: https://github.com/stdlib-js/math-base-special/tree/main/cbrt

[@stdlib/math-base-special/copysign]: https://github.com/stdlib-js/math-base-special/tree/main/copysign

[@stdlib/math-base-special/deg2rad]: https://github.com/stdlib-js/math-base-special/tree/main/deg2rad

[@stdlib/math-base-special/digamma]: https://github.com/stdlib-js/math-base-special/tree/main/digamma

[@stdlib/math-base-special/dirac-delta]: https://github.com/stdlib-js/math-base-special/tree/main/dirac-delta

[@stdlib/math-base-special/dirichlet-eta]: https://github.com/stdlib-js/math-base-special/tree/main/dirichlet-eta

[@stdlib/math-base-special/ellipe]: https://github.com/stdlib-js/math-base-special/tree/main/ellipe

[@stdlib/math-base-special/ellipk]: https://github.com/stdlib-js/math-base-special/tree/main/ellipk

[@stdlib/math-base-special/erf]: https://github.com/stdlib-js/math-base-special/tree/main/erf

[@stdlib/math-base-special/erfc]: https://github.com/stdlib-js/math-base-special/tree/main/erfc

[@stdlib/math-base-special/erfcinv]: https://github.com/stdlib-js/math-base-special/tree/main/erfcinv

[@stdlib/math-base-special/erfinv]: https://github.com/stdlib-js/math-base-special/tree/main/erfinv

[@stdlib/math-base-special/factorial]: https://github.com/stdlib-js/math-base-special/tree/main/factorial

[@stdlib/math-base-special/factorialln]: https://github.com/stdlib-js/math-base-special/tree/main/factorialln

[@stdlib/math-base-special/falling-factorial]: https://github.com/stdlib-js/math-base-special/tree/main/falling-factorial

[@stdlib/math-base-special/fibonacci-index]: https://github.com/stdlib-js/math-base-special/tree/main/fibonacci-index

[@stdlib/math-base-special/fibonacci]: https://github.com/stdlib-js/math-base-special/tree/main/fibonacci

[@stdlib/math-base-special/flipsign]: https://github.com/stdlib-js/math-base-special/tree/main/flipsign

[@stdlib/math-base-special/fresnel]: https://github.com/stdlib-js/math-base-special/tree/main/fresnel

[@stdlib/math-base-special/fresnelc]: https://github.com/stdlib-js/math-base-special/tree/main/fresnelc

[@stdlib/math-base-special/fresnels]: https://github.com/stdlib-js/math-base-special/tree/main/fresnels

[@stdlib/math-base-special/frexp]: https://github.com/stdlib-js/math-base-special/tree/main/frexp

[@stdlib/math-base-special/gamma]: https://github.com/stdlib-js/math-base-special/tree/main/gamma

[@stdlib/math-base-special/gamma1pm1]: https://github.com/stdlib-js/math-base-special/tree/main/gamma1pm1

[@stdlib/math-base-special/gammainc]: https://github.com/stdlib-js/math-base-special/tree/main/gammainc

[@stdlib/math-base-special/gammaincinv]: https://github.com/stdlib-js/math-base-special/tree/main/gammaincinv

[@stdlib/math-base-special/gammaln]: https://github.com/stdlib-js/math-base-special/tree/main/gammaln

[@stdlib/math-base-special/gcd]: https://github.com/stdlib-js/math-base-special/tree/main/gcd

[@stdlib/math-base-special/heaviside]: https://github.com/stdlib-js/math-base-special/tree/main/heaviside

[@stdlib/math-base-special/hypot]: https://github.com/stdlib-js/math-base-special/tree/main/hypot

[@stdlib/math-base-special/imul]: https://github.com/stdlib-js/math-base-special/tree/main/imul

[@stdlib/math-base-special/imuldw]: https://github.com/stdlib-js/math-base-special/tree/main/imuldw

[@stdlib/math-base-special/inv]: https://github.com/stdlib-js/math-base-special/tree/main/inv

[@stdlib/math-base-special/kronecker-delta]: https://github.com/stdlib-js/math-base-special/tree/main/kronecker-delta

[@stdlib/math-base-special/lcm]: https://github.com/stdlib-js/math-base-special/tree/main/lcm

[@stdlib/math-base-special/ldexp]: https://github.com/stdlib-js/math-base-special/tree/main/ldexp

[@stdlib/math-base-special/lucas]: https://github.com/stdlib-js/math-base-special/tree/main/lucas

[@stdlib/math-base-special/max]: https://github.com/stdlib-js/math-base-special/tree/main/max

[@stdlib/math-base-special/min]: https://github.com/stdlib-js/math-base-special/tree/main/min

[@stdlib/math-base-special/minmax]: https://github.com/stdlib-js/math-base-special/tree/main/minmax

[@stdlib/math-base-special/modf]: https://github.com/stdlib-js/math-base-special/tree/main/modf

[@stdlib/math-base-special/negafibonacci]: https://github.com/stdlib-js/math-base-special/tree/main/negafibonacci

[@stdlib/math-base-special/negalucas]: https://github.com/stdlib-js/math-base-special/tree/main/negalucas

[@stdlib/math-base-special/nonfibonacci]: https://github.com/stdlib-js/math-base-special/tree/main/nonfibonacci

[@stdlib/math-base-special/pdiff]: https://github.com/stdlib-js/math-base-special/tree/main/pdiff

[@stdlib/math-base-special/polygamma]: https://github.com/stdlib-js/math-base-special/tree/main/polygamma

[@stdlib/math-base-special/rad2deg]: https://github.com/stdlib-js/math-base-special/tree/main/rad2deg

[@stdlib/math-base-special/ramp]: https://github.com/stdlib-js/math-base-special/tree/main/ramp

[@stdlib/math-base-special/riemann-zeta]: https://github.com/stdlib-js/math-base-special/tree/main/riemann-zeta

[@stdlib/math-base-special/rsqrt]: https://github.com/stdlib-js/math-base-special/tree/main/rsqrt

[@stdlib/math-base-special/sici]: https://github.com/stdlib-js/math-base-special/tree/main/sici

[@stdlib/math-base-special/spence]: https://github.com/stdlib-js/math-base-special/tree/main/spence

[@stdlib/math-base-special/sqrt]: https://github.com/stdlib-js/math-base-special/tree/main/sqrt

[@stdlib/math-base-special/sqrt1pm1]: https://github.com/stdlib-js/math-base-special/tree/main/sqrt1pm1

[@stdlib/math-base-special/trigamma]: https://github.com/stdlib-js/math-base-special/tree/main/trigamma

[@stdlib/math-base-special/uimul]: https://github.com/stdlib-js/math-base-special/tree/main/uimul

[@stdlib/math-base-special/uimuldw]: https://github.com/stdlib-js/math-base-special/tree/main/uimuldw

[@stdlib/math-base-special/wrap]: https://github.com/stdlib-js/math-base-special/tree/main/wrap

[@stdlib/math-base-special/abs]: https://github.com/stdlib-js/math-base-special/tree/main/abs

[@stdlib/math-base-special/abs2]: https://github.com/stdlib-js/math-base-special/tree/main/abs2

[@stdlib/math-base-special/ceil]: https://github.com/stdlib-js/math-base-special/tree/main/ceil

[@stdlib/math-base-special/ceil10]: https://github.com/stdlib-js/math-base-special/tree/main/ceil10

[@stdlib/math-base-special/ceil2]: https://github.com/stdlib-js/math-base-special/tree/main/ceil2

[@stdlib/math-base-special/ceilb]: https://github.com/stdlib-js/math-base-special/tree/main/ceilb

[@stdlib/math-base-special/ceiln]: https://github.com/stdlib-js/math-base-special/tree/main/ceiln

[@stdlib/math-base-special/ceilsd]: https://github.com/stdlib-js/math-base-special/tree/main/ceilsd

[@stdlib/math-base-special/clamp]: https://github.com/stdlib-js/math-base-special/tree/main/clamp

[@stdlib/math-base-special/floor]: https://github.com/stdlib-js/math-base-special/tree/main/floor

[@stdlib/math-base-special/floor10]: https://github.com/stdlib-js/math-base-special/tree/main/floor10

[@stdlib/math-base-special/floor2]: https://github.com/stdlib-js/math-base-special/tree/main/floor2

[@stdlib/math-base-special/floorb]: https://github.com/stdlib-js/math-base-special/tree/main/floorb

[@stdlib/math-base-special/floorn]: https://github.com/stdlib-js/math-base-special/tree/main/floorn

[@stdlib/math-base-special/floorsd]: https://github.com/stdlib-js/math-base-special/tree/main/floorsd

[@stdlib/math-base-special/labs]: https://github.com/stdlib-js/math-base-special/tree/main/labs

[@stdlib/math-base-special/maxabs]: https://github.com/stdlib-js/math-base-special/tree/main/maxabs

[@stdlib/math-base-special/minabs]: https://github.com/stdlib-js/math-base-special/tree/main/minabs

[@stdlib/math-base-special/minmaxabs]: https://github.com/stdlib-js/math-base-special/tree/main/minmaxabs

[@stdlib/math-base-special/round]: https://github.com/stdlib-js/math-base-special/tree/main/round

[@stdlib/math-base-special/round10]: https://github.com/stdlib-js/math-base-special/tree/main/round10

[@stdlib/math-base-special/round2]: https://github.com/stdlib-js/math-base-special/tree/main/round2

[@stdlib/math-base-special/roundb]: https://github.com/stdlib-js/math-base-special/tree/main/roundb

[@stdlib/math-base-special/roundn]: https://github.com/stdlib-js/math-base-special/tree/main/roundn

[@stdlib/math-base-special/roundsd]: https://github.com/stdlib-js/math-base-special/tree/main/roundsd

[@stdlib/math-base-special/signum]: https://github.com/stdlib-js/math-base-special/tree/main/signum

[@stdlib/math-base-special/trunc]: https://github.com/stdlib-js/math-base-special/tree/main/trunc

[@stdlib/math-base-special/trunc10]: https://github.com/stdlib-js/math-base-special/tree/main/trunc10

[@stdlib/math-base-special/trunc2]: https://github.com/stdlib-js/math-base-special/tree/main/trunc2

[@stdlib/math-base-special/truncb]: https://github.com/stdlib-js/math-base-special/tree/main/truncb

[@stdlib/math-base-special/truncn]: https://github.com/stdlib-js/math-base-special/tree/main/truncn

[@stdlib/math-base-special/truncsd]: https://github.com/stdlib-js/math-base-special/tree/main/truncsd

[@stdlib/math-base-special/besselj0]: https://github.com/stdlib-js/math-base-special/tree/main/besselj0

[@stdlib/math-base-special/besselj1]: https://github.com/stdlib-js/math-base-special/tree/main/besselj1

[@stdlib/math-base-special/bessely0]: https://github.com/stdlib-js/math-base-special/tree/main/bessely0

[@stdlib/math-base-special/bessely1]: https://github.com/stdlib-js/math-base-special/tree/main/bessely1

[@stdlib/math-base-special/acos]: https://github.com/stdlib-js/math-base-special/tree/main/acos

[@stdlib/math-base-special/acosh]: https://github.com/stdlib-js/math-base-special/tree/main/acosh

[@stdlib/math-base-special/acovercos]: https://github.com/stdlib-js/math-base-special/tree/main/acovercos

[@stdlib/math-base-special/acoversin]: https://github.com/stdlib-js/math-base-special/tree/main/acoversin

[@stdlib/math-base-special/ahavercos]: https://github.com/stdlib-js/math-base-special/tree/main/ahavercos

[@stdlib/math-base-special/ahaversin]: https://github.com/stdlib-js/math-base-special/tree/main/ahaversin

[@stdlib/math-base-special/asin]: https://github.com/stdlib-js/math-base-special/tree/main/asin

[@stdlib/math-base-special/asinh]: https://github.com/stdlib-js/math-base-special/tree/main/asinh

[@stdlib/math-base-special/atan]: https://github.com/stdlib-js/math-base-special/tree/main/atan

[@stdlib/math-base-special/atan2]: https://github.com/stdlib-js/math-base-special/tree/main/atan2

[@stdlib/math-base-special/atanh]: https://github.com/stdlib-js/math-base-special/tree/main/atanh

[@stdlib/math-base-special/avercos]: https://github.com/stdlib-js/math-base-special/tree/main/avercos

[@stdlib/math-base-special/aversin]: https://github.com/stdlib-js/math-base-special/tree/main/aversin

[@stdlib/math-base-special/cos]: https://github.com/stdlib-js/math-base-special/tree/main/cos

[@stdlib/math-base-special/cosh]: https://github.com/stdlib-js/math-base-special/tree/main/cosh

[@stdlib/math-base-special/cosm1]: https://github.com/stdlib-js/math-base-special/tree/main/cosm1

[@stdlib/math-base-special/cospi]: https://github.com/stdlib-js/math-base-special/tree/main/cospi

[@stdlib/math-base-special/covercos]: https://github.com/stdlib-js/math-base-special/tree/main/covercos

[@stdlib/math-base-special/coversin]: https://github.com/stdlib-js/math-base-special/tree/main/coversin

[@stdlib/math-base-special/hacovercos]: https://github.com/stdlib-js/math-base-special/tree/main/hacovercos

[@stdlib/math-base-special/hacoversin]: https://github.com/stdlib-js/math-base-special/tree/main/hacoversin

[@stdlib/math-base-special/havercos]: https://github.com/stdlib-js/math-base-special/tree/main/havercos

[@stdlib/math-base-special/haversin]: https://github.com/stdlib-js/math-base-special/tree/main/haversin

[@stdlib/math-base-special/rising-factorial]: https://github.com/stdlib-js/math-base-special/tree/main/rising-factorial

[@stdlib/math-base-special/sin]: https://github.com/stdlib-js/math-base-special/tree/main/sin

[@stdlib/math-base-special/sinc]: https://github.com/stdlib-js/math-base-special/tree/main/sinc

[@stdlib/math-base-special/sincos]: https://github.com/stdlib-js/math-base-special/tree/main/sincos

[@stdlib/math-base-special/sincospi]: https://github.com/stdlib-js/math-base-special/tree/main/sincospi

[@stdlib/math-base-special/sinh]: https://github.com/stdlib-js/math-base-special/tree/main/sinh

[@stdlib/math-base-special/sinpi]: https://github.com/stdlib-js/math-base-special/tree/main/sinpi

[@stdlib/math-base-special/tan]: https://github.com/stdlib-js/math-base-special/tree/main/tan

[@stdlib/math-base-special/tanh]: https://github.com/stdlib-js/math-base-special/tree/main/tanh

[@stdlib/math-base-special/vercos]: https://github.com/stdlib-js/math-base-special/tree/main/vercos

[@stdlib/math-base-special/versin]: https://github.com/stdlib-js/math-base-special/tree/main/versin

[@stdlib/math-base-special/exp]: https://github.com/stdlib-js/math-base-special/tree/main/exp

[@stdlib/math-base-special/exp10]: https://github.com/stdlib-js/math-base-special/tree/main/exp10

[@stdlib/math-base-special/exp2]: https://github.com/stdlib-js/math-base-special/tree/main/exp2

[@stdlib/math-base-special/expit]: https://github.com/stdlib-js/math-base-special/tree/main/expit

[@stdlib/math-base-special/expm1]: https://github.com/stdlib-js/math-base-special/tree/main/expm1

[@stdlib/math-base-special/expm1rel]: https://github.com/stdlib-js/math-base-special/tree/main/expm1rel

[@stdlib/math-base-special/ln]: https://github.com/stdlib-js/math-base-special/tree/main/ln

[@stdlib/math-base-special/log]: https://github.com/stdlib-js/math-base-special/tree/main/log

[@stdlib/math-base-special/log10]: https://github.com/stdlib-js/math-base-special/tree/main/log10

[@stdlib/math-base-special/log1mexp]: https://github.com/stdlib-js/math-base-special/tree/main/log1mexp

[@stdlib/math-base-special/log1p]: https://github.com/stdlib-js/math-base-special/tree/main/log1p

[@stdlib/math-base-special/log1pexp]: https://github.com/stdlib-js/math-base-special/tree/main/log1pexp

[@stdlib/math-base-special/log2]: https://github.com/stdlib-js/math-base-special/tree/main/log2

[@stdlib/math-base-special/logaddexp]: https://github.com/stdlib-js/math-base-special/tree/main/logaddexp

[@stdlib/math-base-special/pow]: https://github.com/stdlib-js/math-base-special/tree/main/pow

[@stdlib/math-base-special/powm1]: https://github.com/stdlib-js/math-base-special/tree/main/powm1

[@stdlib/math-base-special/xlog1py]: https://github.com/stdlib-js/math-base-special/tree/main/xlog1py

[@stdlib/math-base-special/xlogy]: https://github.com/stdlib-js/math-base-special/tree/main/xlogy

<!-- </toc-links> -->

</section>

<!-- /.links -->
