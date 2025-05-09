/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import abs = require( '@stdlib/math-base-special-abs' );
import abs2 = require( '@stdlib/math-base-special-abs2' );
import abs2f = require( '@stdlib/math-base-special-abs2f' );
import absf = require( '@stdlib/math-base-special-absf' );
import acos = require( '@stdlib/math-base-special-acos' );
import acosd = require( '@stdlib/math-base-special-acosd' );
import acosf = require( '@stdlib/math-base-special-acosf' );
import acosh = require( '@stdlib/math-base-special-acosh' );
import acot = require( '@stdlib/math-base-special-acot' );
import acotd = require( '@stdlib/math-base-special-acotd' );
import acotf = require( '@stdlib/math-base-special-acotf' );
import acoth = require( '@stdlib/math-base-special-acoth' );
import acovercos = require( '@stdlib/math-base-special-acovercos' );
import acoversin = require( '@stdlib/math-base-special-acoversin' );
import acsc = require( '@stdlib/math-base-special-acsc' );
import acscd = require( '@stdlib/math-base-special-acscd' );
import acscdf = require( '@stdlib/math-base-special-acscdf' );
import acscf = require( '@stdlib/math-base-special-acscf' );
import acsch = require( '@stdlib/math-base-special-acsch' );
import ahavercos = require( '@stdlib/math-base-special-ahavercos' );
import ahaversin = require( '@stdlib/math-base-special-ahaversin' );
import asec = require( '@stdlib/math-base-special-asec' );
import asecd = require( '@stdlib/math-base-special-asecd' );
import asecdf = require( '@stdlib/math-base-special-asecdf' );
import asecf = require( '@stdlib/math-base-special-asecf' );
import asech = require( '@stdlib/math-base-special-asech' );
import asin = require( '@stdlib/math-base-special-asin' );
import asind = require( '@stdlib/math-base-special-asind' );
import asindf = require( '@stdlib/math-base-special-asindf' );
import asinf = require( '@stdlib/math-base-special-asinf' );
import asinh = require( '@stdlib/math-base-special-asinh' );
import atan = require( '@stdlib/math-base-special-atan' );
import atan2 = require( '@stdlib/math-base-special-atan2' );
import atand = require( '@stdlib/math-base-special-atand' );
import atanf = require( '@stdlib/math-base-special-atanf' );
import atanh = require( '@stdlib/math-base-special-atanh' );
import avercos = require( '@stdlib/math-base-special-avercos' );
import aversin = require( '@stdlib/math-base-special-aversin' );
import bernoulli = require( '@stdlib/math-base-special-bernoulli' );
import besselj0 = require( '@stdlib/math-base-special-besselj0' );
import besselj1 = require( '@stdlib/math-base-special-besselj1' );
import bessely0 = require( '@stdlib/math-base-special-bessely0' );
import bessely1 = require( '@stdlib/math-base-special-bessely1' );
import beta = require( '@stdlib/math-base-special-beta' );
import betainc = require( '@stdlib/math-base-special-betainc' );
import betaincinv = require( '@stdlib/math-base-special-betaincinv' );
import betaln = require( '@stdlib/math-base-special-betaln' );
import binet = require( '@stdlib/math-base-special-binet' );
import binomcoef = require( '@stdlib/math-base-special-binomcoef' );
import binomcoefln = require( '@stdlib/math-base-special-binomcoefln' );
import boxcox = require( '@stdlib/math-base-special-boxcox' );
import boxcox1p = require( '@stdlib/math-base-special-boxcox1p' );
import boxcox1pinv = require( '@stdlib/math-base-special-boxcox1pinv' );
import boxcoxinv = require( '@stdlib/math-base-special-boxcoxinv' );
import cabs = require( '@stdlib/math-base-special-cabs' );
import cabs2 = require( '@stdlib/math-base-special-cabs2' );
import cabs2f = require( '@stdlib/math-base-special-cabs2f' );
import cabsf = require( '@stdlib/math-base-special-cabsf' );
import cbrt = require( '@stdlib/math-base-special-cbrt' );
import cbrtf = require( '@stdlib/math-base-special-cbrtf' );
import cceil = require( '@stdlib/math-base-special-cceil' );
import cceilf = require( '@stdlib/math-base-special-cceilf' );
import cceiln = require( '@stdlib/math-base-special-cceiln' );
import ccis = require( '@stdlib/math-base-special-ccis' );
import ceil = require( '@stdlib/math-base-special-ceil' );
import ceil2 = require( '@stdlib/math-base-special-ceil2' );
import ceil10 = require( '@stdlib/math-base-special-ceil10' );
import ceilb = require( '@stdlib/math-base-special-ceilb' );
import ceilf = require( '@stdlib/math-base-special-ceilf' );
import ceiln = require( '@stdlib/math-base-special-ceiln' );
import ceilsd = require( '@stdlib/math-base-special-ceilsd' );
import cexp = require( '@stdlib/math-base-special-cexp' );
import cflipsign = require( '@stdlib/math-base-special-cflipsign' );
import cflipsignf = require( '@stdlib/math-base-special-cflipsignf' );
import cfloor = require( '@stdlib/math-base-special-cfloor' );
import cfloorn = require( '@stdlib/math-base-special-cfloorn' );
import cinv = require( '@stdlib/math-base-special-cinv' );
import clamp = require( '@stdlib/math-base-special-clamp' );
import clampf = require( '@stdlib/math-base-special-clampf' );
import copysign = require( '@stdlib/math-base-special-copysign' );
import copysignf = require( '@stdlib/math-base-special-copysignf' );
import cos = require( '@stdlib/math-base-special-cos' );
import cosd = require( '@stdlib/math-base-special-cosd' );
import cosh = require( '@stdlib/math-base-special-cosh' );
import cosm1 = require( '@stdlib/math-base-special-cosm1' );
import cospi = require( '@stdlib/math-base-special-cospi' );
import cot = require( '@stdlib/math-base-special-cot' );
import cotd = require( '@stdlib/math-base-special-cotd' );
import coth = require( '@stdlib/math-base-special-coth' );
import covercos = require( '@stdlib/math-base-special-covercos' );
import coversin = require( '@stdlib/math-base-special-coversin' );
import cphase = require( '@stdlib/math-base-special-cphase' );
import cpolar = require( '@stdlib/math-base-special-cpolar' );
import cround = require( '@stdlib/math-base-special-cround' );
import croundn = require( '@stdlib/math-base-special-croundn' );
import csc = require( '@stdlib/math-base-special-csc' );
import cscd = require( '@stdlib/math-base-special-cscd' );
import csch = require( '@stdlib/math-base-special-csch' );
import csignum = require( '@stdlib/math-base-special-csignum' );
import deg2rad = require( '@stdlib/math-base-special-deg2rad' );
import deg2radf = require( '@stdlib/math-base-special-deg2radf' );
import digamma = require( '@stdlib/math-base-special-digamma' );
import diracDelta = require( '@stdlib/math-base-special-dirac-delta' );
import eta = require( '@stdlib/math-base-special-dirichlet-eta' );
import ellipe = require( '@stdlib/math-base-special-ellipe' );
import ellipj = require( '@stdlib/math-base-special-ellipj' );
import ellipk = require( '@stdlib/math-base-special-ellipk' );
import erf = require( '@stdlib/math-base-special-erf' );
import erfc = require( '@stdlib/math-base-special-erfc' );
import erfcinv = require( '@stdlib/math-base-special-erfcinv' );
import erfcx = require( '@stdlib/math-base-special-erfcx' );
import erfinv = require( '@stdlib/math-base-special-erfinv' );
import exp = require( '@stdlib/math-base-special-exp' );
import exp2 = require( '@stdlib/math-base-special-exp2' );
import exp10 = require( '@stdlib/math-base-special-exp10' );
import expit = require( '@stdlib/math-base-special-expit' );
import expm1 = require( '@stdlib/math-base-special-expm1' );
import expm1rel = require( '@stdlib/math-base-special-expm1rel' );
import factorial = require( '@stdlib/math-base-special-factorial' );
import factorial2 = require( '@stdlib/math-base-special-factorial2' );
import factorialln = require( '@stdlib/math-base-special-factorialln' );
import fallingFactorial = require( '@stdlib/math-base-special-falling-factorial' );
import fast = require( '@stdlib/math-base-special-fast' );
import fibonacci = require( '@stdlib/math-base-special-fibonacci' );
import fibonacciIndex = require( '@stdlib/math-base-special-fibonacci-index' );
import flipsign = require( '@stdlib/math-base-special-flipsign' );
import flipsignf = require( '@stdlib/math-base-special-flipsignf' );
import floor = require( '@stdlib/math-base-special-floor' );
import floor2 = require( '@stdlib/math-base-special-floor2' );
import floor10 = require( '@stdlib/math-base-special-floor10' );
import floorb = require( '@stdlib/math-base-special-floorb' );
import floorf = require( '@stdlib/math-base-special-floorf' );
import floorn = require( '@stdlib/math-base-special-floorn' );
import floorsd = require( '@stdlib/math-base-special-floorsd' );
import fresnel = require( '@stdlib/math-base-special-fresnel' );
import fresnelc = require( '@stdlib/math-base-special-fresnelc' );
import fresnels = require( '@stdlib/math-base-special-fresnels' );
import frexp = require( '@stdlib/math-base-special-frexp' );
import gamma = require( '@stdlib/math-base-special-gamma' );
import gammaDeltaRatio = require( '@stdlib/math-base-special-gamma-delta-ratio' );
import gammaLanczosSum = require( '@stdlib/math-base-special-gamma-lanczos-sum' );
import gammaLanczosSumExpGScaled = require( '@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled' );
import gamma1pm1 = require( '@stdlib/math-base-special-gamma1pm1' );
import gammainc = require( '@stdlib/math-base-special-gammainc' );
import gammaincinv = require( '@stdlib/math-base-special-gammaincinv' );
import gammaln = require( '@stdlib/math-base-special-gammaln' );
import gammasgn = require( '@stdlib/math-base-special-gammasgn' );
import gcd = require( '@stdlib/math-base-special-gcd' );
import hacovercos = require( '@stdlib/math-base-special-hacovercos' );
import hacoversin = require( '@stdlib/math-base-special-hacoversin' );
import havercos = require( '@stdlib/math-base-special-havercos' );
import haversin = require( '@stdlib/math-base-special-haversin' );
import heaviside = require( '@stdlib/math-base-special-heaviside' );
import hypot = require( '@stdlib/math-base-special-hypot' );
import hypotf = require( '@stdlib/math-base-special-hypotf' );
import inv = require( '@stdlib/math-base-special-inv' );
import invf = require( '@stdlib/math-base-special-invf' );
import kernelBetainc = require( '@stdlib/math-base-special-kernel-betainc' );
import kernelBetaincinv = require( '@stdlib/math-base-special-kernel-betaincinv' );
import kernelCos = require( '@stdlib/math-base-special-kernel-cos' );
import kernelLog1p = require( '@stdlib/math-base-special-kernel-log1p' );
import kernelSin = require( '@stdlib/math-base-special-kernel-sin' );
import kernelTan = require( '@stdlib/math-base-special-kernel-tan' );
import kroneckerDelta = require( '@stdlib/math-base-special-kronecker-delta' );
import kroneckerDeltaf = require( '@stdlib/math-base-special-kronecker-deltaf' );
import labs = require( '@stdlib/math-base-special-labs' );
import lcm = require( '@stdlib/math-base-special-lcm' );
import ldexp = require( '@stdlib/math-base-special-ldexp' );
import ln = require( '@stdlib/math-base-special-ln' );
import log = require( '@stdlib/math-base-special-log' );
import log1mexp = require( '@stdlib/math-base-special-log1mexp' );
import log1p = require( '@stdlib/math-base-special-log1p' );
import log1pexp = require( '@stdlib/math-base-special-log1pexp' );
import log1pmx = require( '@stdlib/math-base-special-log1pmx' );
import log2 = require( '@stdlib/math-base-special-log2' );
import log10 = require( '@stdlib/math-base-special-log10' );
import logaddexp = require( '@stdlib/math-base-special-logaddexp' );
import logit = require( '@stdlib/math-base-special-logit' );
import lucas = require( '@stdlib/math-base-special-lucas' );
import max = require( '@stdlib/math-base-special-max' );
import maxabs = require( '@stdlib/math-base-special-maxabs' );
import maxabsn = require( '@stdlib/math-base-special-maxabsn' );
import maxn = require( '@stdlib/math-base-special-maxn' );
import min = require( '@stdlib/math-base-special-min' );
import minabs = require( '@stdlib/math-base-special-minabs' );
import minabsn = require( '@stdlib/math-base-special-minabsn' );
import minmax = require( '@stdlib/math-base-special-minmax' );
import minmaxabs = require( '@stdlib/math-base-special-minmaxabs' );
import minmaxabsn = require( '@stdlib/math-base-special-minmaxabsn' );
import minmaxn = require( '@stdlib/math-base-special-minmaxn' );
import minn = require( '@stdlib/math-base-special-minn' );
import modf = require( '@stdlib/math-base-special-modf' );
import negafibonacci = require( '@stdlib/math-base-special-negafibonacci' );
import negalucas = require( '@stdlib/math-base-special-negalucas' );
import nonfibonacci = require( '@stdlib/math-base-special-nonfibonacci' );
import pdiff = require( '@stdlib/math-base-special-pdiff' );
import pdifff = require( '@stdlib/math-base-special-pdifff' );
import polygamma = require( '@stdlib/math-base-special-polygamma' );
import pow = require( '@stdlib/math-base-special-pow' );
import powm1 = require( '@stdlib/math-base-special-powm1' );
import rad2deg = require( '@stdlib/math-base-special-rad2deg' );
import rad2degf = require( '@stdlib/math-base-special-rad2degf' );
import ramp = require( '@stdlib/math-base-special-ramp' );
import rampf = require( '@stdlib/math-base-special-rampf' );
import rcbrt = require( '@stdlib/math-base-special-rcbrt' );
import rcbrtf = require( '@stdlib/math-base-special-rcbrtf' );
import rempio2 = require( '@stdlib/math-base-special-rempio2' );
import zeta = require( '@stdlib/math-base-special-riemann-zeta' );
import risingFactorial = require( '@stdlib/math-base-special-rising-factorial' );
import round = require( '@stdlib/math-base-special-round' );
import round2 = require( '@stdlib/math-base-special-round2' );
import round10 = require( '@stdlib/math-base-special-round10' );
import roundb = require( '@stdlib/math-base-special-roundb' );
import roundn = require( '@stdlib/math-base-special-roundn' );
import roundsd = require( '@stdlib/math-base-special-roundsd' );
import rsqrt = require( '@stdlib/math-base-special-rsqrt' );
import rsqrtf = require( '@stdlib/math-base-special-rsqrtf' );
import secd = require( '@stdlib/math-base-special-secd' );
import sici = require( '@stdlib/math-base-special-sici' );
import signum = require( '@stdlib/math-base-special-signum' );
import signumf = require( '@stdlib/math-base-special-signumf' );
import sin = require( '@stdlib/math-base-special-sin' );
import sinc = require( '@stdlib/math-base-special-sinc' );
import sincos = require( '@stdlib/math-base-special-sincos' );
import sincospi = require( '@stdlib/math-base-special-sincospi' );
import sinh = require( '@stdlib/math-base-special-sinh' );
import sinpi = require( '@stdlib/math-base-special-sinpi' );
import spence = require( '@stdlib/math-base-special-spence' );
import sqrt = require( '@stdlib/math-base-special-sqrt' );
import sqrt1pm1 = require( '@stdlib/math-base-special-sqrt1pm1' );
import sqrtf = require( '@stdlib/math-base-special-sqrtf' );
import sqrtpi = require( '@stdlib/math-base-special-sqrtpi' );
import tan = require( '@stdlib/math-base-special-tan' );
import tand = require( '@stdlib/math-base-special-tand' );
import tanh = require( '@stdlib/math-base-special-tanh' );
import tribonacci = require( '@stdlib/math-base-special-tribonacci' );
import trigamma = require( '@stdlib/math-base-special-trigamma' );
import trunc = require( '@stdlib/math-base-special-trunc' );
import trunc2 = require( '@stdlib/math-base-special-trunc2' );
import trunc10 = require( '@stdlib/math-base-special-trunc10' );
import truncb = require( '@stdlib/math-base-special-truncb' );
import truncf = require( '@stdlib/math-base-special-truncf' );
import truncn = require( '@stdlib/math-base-special-truncn' );
import truncsd = require( '@stdlib/math-base-special-truncsd' );
import vercos = require( '@stdlib/math-base-special-vercos' );
import versin = require( '@stdlib/math-base-special-versin' );
import wrap = require( '@stdlib/math-base-special-wrap' );
import xlog1py = require( '@stdlib/math-base-special-xlog1py' );
import xlogy = require( '@stdlib/math-base-special-xlogy' );

/**
* Interface describing the `special` namespace.
*/
interface Namespace {
	/**
	* Computes the absolute value of a double-precision floating-point number `x`.
	*
	* @param x - input value
	* @returns absolute value
	*
	* @example
	* var v = ns.abs( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.abs( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.abs( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs( NaN );
	* // returns NaN
	*/
	abs: typeof abs;

	/**
	* Computes the squared absolute value of a double-precision floating-point number `x`.
	*
	* @param x - input value
	* @returns squared absolute value
	*
	* @example
	* var v = ns.abs2( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.abs2( 2.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.abs2( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs2( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs2( NaN );
	* // returns NaN
	*/
	abs2: typeof abs2;

	/**
	* Computes the squared absolute value of a single-precision floating-point number `x`.
	*
	* @param x - input value
	* @returns squared absolute value
	*
	* @example
	* var v = ns.abs2f( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.abs2f( 2.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.abs2f( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs2f( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs2f( NaN );
	* // returns NaN
	*/
	abs2f: typeof abs2f;

	/**
	* Computes the absolute value of single-precision floating-point number `x`.
	*
	* @param x - input value
	* @returns absolute value
	*
	* @example
	* var v = ns.absf( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.absf( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.absf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.absf( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.absf( NaN );
	* // returns NaN
	*/
	absf: typeof absf;

	/**
	* Computes the arccosine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosine (in radians)
	*
	* @example
	* var v = ns.acos( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.acos( 0.707 ); // ~pi/4
	* // returns ~0.7855
	*
	* @example
	* var v = ns.acos( NaN );
	* // returns NaN
	*/
	acos: typeof acos;

	/**
	* Computes the arccosine (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosine (in degrees)
	*
	* @example
	* var v = ns.acosd( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.acosd( 0.5 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.acosd( Math.sqrt( 2 ) / 2 );
	* // returns ~45.0
	*
	* @example
	* var v = ns.acosd( Math.sqrt( 3 ) / 2 );
	* // returns ~30.0
	*
	* @example
	* var v = ns.acosd( NaN );
	* // returns NaN
	*/
	acosd: typeof acosd;

	/**
	* Computes the arccosine of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosine (in radians)
	*
	* @example
	* var v = ns.acosf( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.acosf( 0.707 ); // ~pi/4
	* // returns ~0.7855
	*
	* @example
	* var v = ns.acosf( NaN );
	* // returns NaN
	*/
	acosf: typeof acosf;

	/**
	* Computes the hyperbolic arccosine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic arccosine
	*
	* @example
	* var v = ns.acosh( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.acosh( 2.0 );
	* // returns ~1.317
	*
	* @example
	* var v = ns.acosh( NaN );
	* // returns NaN
	*/
	acosh: typeof acosh;

	/**
	* Computes the inverse cotangent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns inverse cotangent (in radians)
	*
	* @example
	* var v = ns.acot( 2.0 );
	* // returns ~0.4636
	*
	* @example
	* var v = ns.acot( 0.0 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.acot( 0.5 );
	* // returns ~1.1071
	*
	* @example
	* var v = ns.acot( 1.0 );
	* // returns ~0.7854
	*
	* @example
	* var v = ns.acot( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.acot( Infinity );
	* // returns 0.0
	*/
	acot: typeof acot;

	/**
	* Computes the arccotangent (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arccotangent (in degrees)
	*
	* @example
	* var v = ns.acotd( 0.0 );
	* // returns 90.0
	*
	* @example
	* var v = ns.acotd( Math.sqrt(3) );
	* // returns ~30.0
	*
	* @example
	* var v = ns.acotd( 1 );
	* // returns 45.0
	*
	* @example
	* var v = ns.acotd( Math.sqrt(3) / 3 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.acotd( NaN );
	* // returns NaN
	*/
	acotd: typeof acotd;

	/**
	* Computes the inverse cotangent of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns inverse cotangent (in radians)
	*
	* @example
	* var v = ns.acotf( 2.0 );
	* // returns ~0.4636
	*
	* @example
	* var v = ns.acotf( 0.0 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.acotf( 0.5 );
	* // returns ~1.1071
	*
	* @example
	* var v = ns.acotf( 1.0 );
	* // returns ~0.7854
	*
	* @example
	* var v = ns.acotf( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.acotf( Infinity );
	* // returns 0.0
	*/
	acotf: typeof acotf;

	/**
	* Computes the inverse hyperbolic cotangent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns inverse hyperbolic cotangent
	*
	* @example
	* var v = ns.acoth( 2.0 );
	* // returns ~0.5493
	*
	* @example
	* var v = ns.acoth( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.acoth( 0.5 );
	* // returns NaN
	*
	* @example
	* var v = ns.acoth( 1.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.acoth( NaN );
	* // returns NaN
	*/
	acoth: typeof acoth;

	/**
	* Computes the inverse coversed cosine.
	*
	* @param x - input value
	* @returns inverse coversed cosine
	*
	* @example
	* var v = ns.acovercos( 0.0 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.acovercos( -3.141592653589793/2.0 );
	* // returns ~-0.6075
	*
	* @example
	* var v = ns.acovercos( -3.141592653589793/6.0 );
	* // returns ~0.4966
	*
	* @example
	* var v = ns.acovercos( NaN );
	* // returns NaN
	*/
	acovercos: typeof acovercos;

	/**
	* Computes the inverse coversed sine.
	*
	* @param x - input value
	* @returns inverse coversed sine
	*
	* @example
	* var v = ns.acoversin( 0.0 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.acoversin( 3.141592653589793/2.0 );
	* // returns ~-0.6075
	*
	* @example
	* var v = ns.acoversin( 3.141592653589793/6.0 );
	* // returns ~0.4966
	*
	* @example
	* var v = ns.acoversin( NaN );
	* // returns NaN
	*/
	acoversin: typeof acoversin;

	/**
	* Computes the arccosecant of a number.
	*
	* @param x - input value
	* @returns arccosecant (in radians)
	*
	* @example
	* var v = ns.acsc( 1.0 );
	* // returns ~1.57
	*
	* @example
	* var v = ns.acsc( 3.141592653589793 );
	* // returns ~0.32
	*
	* @example
	* var v = ns.acsc( -3.141592653589793 );
	* // returns ~-0.32
	*
	* @example
	* var v = ns.acsc( NaN );
	* // returns NaN
	*/
	acsc: typeof acsc;

	/**
	* Computes the arccosecant (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosecant (in degrees)
	*
	* @example
	* var v = ns.acscd( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.acscd( 2 * Math.sqrt( 3 ) / 3 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.acscd( Math.sqrt( 2 ) );
	* // returns ~45.0
	*
	* @example
	* var v = ns.acscd( 2 );
	* // returns ~30.0
	*
	* @example
	* var v = ns.acscd( 1 );
	* // returns 90.0
	*
	* @example
	* var v = ns.acscd( NaN );
	* // returns NaN
	*/
	acscd: typeof acscd;

	/**
	* Computes the arccosecant (in degrees) of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosecant (in degrees)
	*
	* @example
	* var v = ns.acscdf( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.acscdf( 2.0 );
	* // returns ~30.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.acscdf( 2.0 * sqrtf( 3.0 ) / 3.0 );
	* // returns ~60.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.acscdf( sqrtf( 2.0 ) );
	* // returns ~45.0
	*
	* @example
	* var v = ns.acscdf( 1.0 );
	* // returns 90.0
	*
	* @example
	* var v = ns.acscdf( NaN );
	* // returns NaN
	*/
	acscdf: typeof acscdf;

	/**
	* Computes the arccosecant of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arccosecant (in radians)
	*
	* @example
	* var v = ns.acscf( 1.0 );
	* // returns ~1.57
	*
	* @example
	* var v = ns.acscf( 3.141592653589793 );
	* // returns ~0.32
	*
	* @example
	* var v = ns.acscf( -3.141592653589793 );
	* // returns ~-0.32
	*
	* @example
	* var v = ns.acscf( NaN );
	* // returns NaN
	*/
	acscf: typeof acscf;

	/**
	* Computes the hyperbolic arccosecant of a number.
	*
	* @param x - input value
	* @returns hyperbolic arccosecant
	*
	* @example
	* var v = ns.acsch( 0 );
	* // returns NaN
	*
	* @example
	* var v = ns.acsch( -1.0 );
	* // returns ~-0.881
	*
	* @example
	* var v = ns.acsch( 1.0 );
	* // returns ~0.881
	*/
	acsch: typeof acsch;

	/**
	* Computes the inverse half-value versed cosine.
	*
	* @param x - input value
	* @returns inverse half-value versed cosine
	*
	* @example
	* var v = ns.ahavercos( 0.0 );
	* // returns ~3.1416
	*
	* @example
	* var v = ns.ahavercos( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.ahavercos( 0.5 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.ahavercos( NaN );
	* // returns NaN
	*/
	ahavercos: typeof ahavercos;

	/**
	* Computes the inverse half-value versed sine.
	*
	* @param x - input value
	* @returns inverse half-value versed sine
	*
	* @example
	* var v = ns.ahaversin( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.ahaversin( 1.0 );
	* // returns ~3.1416
	*
	* @example
	* var v = ns.ahaversin( 0.5 );
	* // returns ~1.5708
	*
	* @example
	* var v = ns.ahaversin( NaN );
	* // returns NaN
	*/
	ahaversin: typeof ahaversin;

	/**
	* Computes the inverse (arc) secant of a number.
	*
	* @param x - input value
	* @returns inverse (arc) secant
	*
	* @example
	* var v = ns.asec( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asec( 2.0 );
	* // returns ~1.0472
	*
	* @example
	* var v = ns.asec( NaN );
	* // returns NaN
	*/
	asec: typeof asec;

	/**
	* Computes the arcsecant (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsecant (in degrees)
	*
	* @example
	* var v = ns.asecd( 1 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asecd( 2 * Math.sqrt( 3 ) / 3 );
	* // returns ~30.0
	*
	* @example
	* var v = ns.asecd( Math.sqrt( 2 ) );
	* // returns ~45.0
	*
	* @example
	* var v = ns.asecd( 2 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.asecd( Infinity );
	* // returns 90.0
	*
	* @example
	* var v = ns.asecd( NaN );
	* // returns NaN
	*/
	asecd: typeof asecd;

	/**
	* Computes the arcsecant (in degrees) of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsecant (in degrees)
	*
	* @example
	* var v = ns.asecdf( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asecdf( 2.0 );
	* // returns ~60.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.asecdf( 2.0 * sqrtf( 3.0 ) / 3.0 );
	* // returns ~30.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.asecdf( sqrtf( 2.0 ) );
	* // returns 45.0
	*
	* @example
	* var v = ns.asecdf( Infinity );
	* // returns 90.0
	*
	* @example
	* var v = ns.asecdf( NaN );
	* // returns NaN
	*/
	asecdf: typeof asecdf;

	/**
	* Computes the inverse (arc) secant of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns inverse (arc) secant
	*
	* @example
	* var v = ns.asecf( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asecf( 2.0 );
	* // returns ~1.0472
	*
	* @example
	* var v = ns.asecf( NaN );
	* // returns NaN
	*/
	asecf: typeof asecf;

	/**
	* Computes the hyperbolic arcsecant of a number.
	*
	* @param x - input value
	* @returns hyperbolic arcsecant
	*
	* @example
	* var v = ns.asech( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asech( 0.5 );
	* // returns ~1.317
	*
	* @example
	* var v = ns.asech( NaN );
	* // returns NaN
	*/
	asech: typeof asech;

	/**
	* Computes the arcsine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsine (in radians)
	*
	* @example
	* var v = ns.asin( 0.0 );
	* // returns ~0.0
	*
	* @example
	* var v = ns.asin( 3.141592653589793/4.0 );
	* // returns ~0.903
	*
	* @example
	* var v = ns.asin( -3.141592653589793/6.0 );
	* // returns ~-0.551
	*
	* @example
	* var v = ns.asin( NaN );
	* // returns NaN
	*/
	asin: typeof asin;

	/**
	* Computes the arcsine (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsine (in degrees)
	*
	* @example
	* var v = ns.asind( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asind( 0.5 );
	* // returns ~30.0
	*
	* @example
	* var sqrt = require( '@stdlib/math-base-special-sqrt' );
	*
	* var v = ns.asindf( sqrt( 2.0 ) / 2.0 );
	* // returns ~45.0
	*
	* @example
	* var sqrt = require( '@stdlib/math-base-special-sqrt' );
	*
	* var v = ns.asindf( sqrt( 3.0 ) / 2.0 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.asind( NaN );
	* // returns NaN
	*/
	asind: typeof asind;

	/**
	* Computes the arcsine (in degrees) of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsine (in degrees)
	*
	* @example
	* var v = ns.asindf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asindf( 0.5 );
	* // returns ~30.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.asindf( sqrtf( 2.0 ) / 2.0 );
	* // returns ~45.0
	*
	* @example
	* var sqrtf = require( '@stdlib/math-base-special-sqrtf' );
	*
	* var v = ns.asindf( sqrtf( 3.0 ) / 2.0 );
	* // returns ~60.0
	*
	* @example
	* var v = ns.asindf( NaN );
	* // returns NaN
	*/
	asindf: typeof asindf;

	/**
	* Computes the arcsine of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arcsine (in radians)
	*
	* @example
	* var v = ns.asinf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asinf( 3.14/4.0 );
	* // returns ~0.903
	*
	* @example
	* var v = ns.asinf( -3.14/6.0 );
	* // returns ~-0.551
	*
	* @example
	* var v = ns.asinf( NaN );
	* // returns NaN
	*/
	asinf: typeof asinf;

	/**
	* Computes the hyperbolic arcsine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic arcsine
	*
	* @example
	* var v = ns.asinh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asinh( 2.0 );
	* // returns ~1.444
	*
	* @example
	* var v = ns.asinh( -2.0 );
	* // returns ~-1.444
	*
	* @example
	* var v = ns.asinh( NaN );
	* // returns NaN
	*/
	asinh: typeof asinh;

	/**
	* Computes the arctangent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arctangent (in radians)
	*
	* @example
	* var v = ns.atan( 0.0 );
	* // returns ~0.0
	*
	* @example
	* var PI = require( '@stdlib/constants-float64-pi' );
	*
	* var v = ns.atan( -PI/4.0 );
	* // returns ~-0.666
	*
	* @example
	* var PI = require( '@stdlib/constants-float64-pi' );
	*
	* var v = ns.atan( PI/4.0 );
	* // returns ~0.666
	*
	* @example
	* var v = ns.atan( NaN );
	* // returns NaN
	*/
	atan: typeof atan;

	/**
	* Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
	*
	* @param y - `y` coordinate
	* @param x - `x` coordinate
	* @returns angle (in radians)
	*
	* @example
	* var v = ns.atan2( 2.0, 2.0 ); // => atan(1.0)
	* // returns ~0.785
	*
	* @example
	* var v = ns.atan2( 6.0, 2.0 ); // => atan(3.0)
	* // returns ~1.249
	*
	* @example
	* var v = ns.atan2( -1.0, -1.0 ); // => atan(1.0) - π
	* // returns ~-2.356
	*
	* @example
	* var v = ns.atan2( 3.0, 0.0 ); // => π/2
	* // returns ~1.571
	*
	* @example
	* var v = ns.atan2( -2.0, 0.0 ); // => -π/2
	* // returns ~-1.571
	*
	* @example
	* var v = ns.atan2( 0.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.atan2( 3.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.atan2( NaN, 2.0 );
	* // returns NaN
	*/
	atan2: typeof atan2;

	/**
	* Computes the arctangent (in degrees) of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns arctangent (in degrees)
	*
	* @example
	* var v = ns.atand( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.atand( 0.5 );
	* // returns ~26.57
	*
	* @example
	* var v = ns.atand( 1 / Math.sqrt( 3 ) );
	* // returns ~30.0
	*
	* @example
	* var v = ns.atand( 1 );
	* // returns 45.0
	*
	* @example
	* var v = ns.atand( Infinity );
	* // returns 90.0
	*
	* @example
	* var v = ns.atand( NaN );
	* // returns NaN
	*/
	atand: typeof atand;

	/**
	* Computes the arctangent of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns arctangent (in radians)
	*
	* @example
	* var v = ns.atanf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var FLOAT32_PI = require( '@stdlib/constants-float32-pi' );
	*
	* var v = ns.atanf( FLOAT32_PI/4.0 );
	* // returns ~0.666
	*
	* @example
	* var FLOAT32_PI = require( '@stdlib/constants-float32-pi' );
	*
	* var v = ns.atanf( -FLOAT32_PI/4.0 );
	* // returns ~-0.666
	*
	* @example
	* var v = ns.atanf( NaN );
	* // returns NaN
	*/
	atanf: typeof atanf;

	/**
	* Computes the hyperbolic arctangent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic arctangent
	*
	* @example
	* var v = ns.atanh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.atanh( 0.9 );
	* // returns ~1.472
	*
	* @example
	* var v = ns.atanh( 1.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.atanh( -1.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.atanh( NaN );
	* // returns NaN
	*/
	atanh: typeof atanh;

	/**
	* Computes the inverse versed cosine.
	*
	* @param x - input value
	* @returns inverse versed cosine
	*
	* @example
	* var v = ns.avercos( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.avercos( -3.141592653589793/2.0 );
	* // returns ~2.1783
	*
	* @example
	* var v = ns.avercos( -3.141592653589793/6.0 );
	* // returns ~1.0742
	*
	* @example
	* var v = ns.avercos( NaN );
	* // returns NaN
	*/
	avercos: typeof avercos;

	/**
	* Computes the inverse versed sine.
	*
	* @param x - input value
	* @returns inverse versed sine
	*
	* @example
	* var v = ns.aversin( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.aversin( 3.141592653589793/2.0 );
	* // returns ~2.1783
	*
	* @example
	* var v = ns.aversin( 3.141592653589793/6.0 );
	* // returns ~1.0742
	*
	* @example
	* var v = ns.aversin( NaN );
	* // returns NaN
	*/
	aversin: typeof aversin;

	/**
	* Computes the nth Bernoulli number.
	*
	* @param n - the Bernoulli number to compute
	* @returns Bernoulli number
	*
	* @example
	* var y = ns.bernoulli( 0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.bernoulli( 1 );
	* // returns 0.5
	*
	* @example
	* var y = ns.bernoulli( 2 );
	* // returns ~0.167
	*
	* @example
	* var y = ns.bernoulli( 3 );
	* // returns 0.0
	*
	* @example
	* var y = ns.bernoulli( 4 );
	* // returns ~-0.033
	*
	* @example
	* var y = ns.bernoulli( 5 );
	* // returns 0.0
	*
	* @example
	* var y = ns.bernoulli( 20 );
	* // returns ~-529.124
	*
	* @example
	* var y = ns.bernoulli( 260 );
	* // returns -Infinity
	*
	* @example
	* var y = ns.bernoulli( 262 );
	* // returns Infinity
	*
	* @example
	* var y = ns.bernoulli( NaN );
	* // returns NaN
	*/
	bernoulli: typeof bernoulli;

	/**
	* Computes the Bessel function of the first kind of order zero.
	*
	* @param x - input value
	* @returns evaluated Bessel function
	*
	* @example
	* var v = ns.besselj0( 0.0 );
	* // returns 1.0
	*
	* v = ns.besselj0( 1.0 );
	* // returns ~0.765
	*
	* v = ns.besselj0( Infinity );
	* // returns 0.0
	*
	* v = ns.besselj0( -Infinity );
	* // returns 0.0
	*
	* v = ns.besselj0( NaN );
	* // returns NaN
	*/
	besselj0: typeof besselj0;

	/**
	* Computes the Bessel function of the first kind of order one.
	*
	* ## Notes
	*
	* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
	*
	* @param x - input value
	* @returns evaluated Bessel function
	*
	* @example
	* var v = ns.besselj1( 0.0 );
	* // returns 0.0
	*
	* v = ns.besselj1( 1.0 );
	* // returns ~0.440
	*
	* v = ns.besselj1( Infinity );
	* // returns 0.0
	*
	* v = ns.besselj1( -Infinity );
	* // returns 0.0
	*
	* v = ns.besselj1( NaN );
	* // returns NaN
	*/
	besselj1: typeof besselj1;

	/**
	* Computes the Bessel function of the second kind of order zero.
	*
	* ## Notes
	*
	* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
	*
	* @param x - input value
	* @returns evaluated Bessel function
	*
	* @example
	* var v = ns.bessely0( 0.0 );
	* // returns -Infinity
	*
	* v = ns.bessely0( 1.0 );
	* // returns ~0.088
	*
	* v = ns.bessely0( -1.0 );
	* // returns NaN
	*
	* v = ns.bessely0( Infinity );
	* // returns 0.0
	*
	* v = ns.bessely0( -Infinity );
	* // returns NaN
	*
	* v = ns.bessely0( NaN );
	* // returns NaN
	*/
	bessely0: typeof bessely0;

	/**
	* Computes the Bessel function of the second kind of order one.
	*
	* ## Notes
	*
	* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
	*
	* @param x - input value
	* @returns evaluated Bessel function
	*
	* @example
	* var v = ns.bessely1( 0.0 );
	* // returns -Infinity
	*
	* v = ns.bessely1( 1.0 );
	* // returns ~-0.781
	*
	* v = ns.bessely1( -1.0 );
	* // returns NaN
	*
	* v = ns.bessely1( Infinity );
	* // returns 0.0
	*
	* v = ns.bessely1( -Infinity );
	* // returns NaN
	*
	* v = ns.bessely1( NaN );
	* // returns NaN
	*/
	bessely1: typeof bessely1;

	/**
	* Evaluate the beta function.
	*
	* @param a - input value
	* @param b - input value
	* @returns evaluated beta function
	*
	* @example
	* var v = ns.beta( 0.0, 0.5 );
	* // returns Infinity
	*
	* @example
	* var v = ns.beta( 1.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.beta( -1.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.beta( 5.0, 0.2 );
	* // returns ~3.382
	*
	* @example
	* var v = ns.beta( 4.0, 1.0 );
	* // returns 0.25
	*
	* @example
	* var v = ns.beta( NaN, 2.0 );
	* // returns NaN
	*/
	beta: typeof beta;

	/**
	* Evaluates the incomplete beta function.
	*
	* ## Notes
	*
	* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
	* -   If provided `x < 0` or `x > 1`, the function returns `NaN`.
	* -   If provided `a < 0` or `b < 0`, the function returns `NaN`.
	*
	* @param x - function parameter
	* @param a - function parameter
	* @param b - function parameter
	* @param regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete beta function (default: true)
	* @param upper - boolean indicating if the function should return the upper tail of the incomplete beta function (default: false)
	* @returns function value
	*
	* @example
	* var y = ns.betainc( 0.5, 2.0, 2.0 );
	* // returns 0.5
	*
	* @example
	* var y = ns.betainc( 0.5, 2.0, 2.0, false );
	* // returns ~0.083
	*
	* @example
	* var y = ns.betainc( 0.2, 1.0, 2.0 );
	* // returns 0.36
	*/
	betainc: typeof betainc;

	/**
	* Computes the inverse of the lower incomplete beta function.
	*
	* ## Notes
	*
	* -   In contrast to a more commonly used definition, the first argument is the probability `p` and the second and third arguments are `a` and `b`, respectively.
	* -   By default, the function inverts the lower regularized incomplete beta function. To invert the upper function, set the `upper` argument to `true`.
	* -   If provided `NaN` as any argument, the function returns `NaN`.
	* -   If provided `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `a <= 0` or `b <= 0`, the function returns `NaN`.
	*
	* @param p - function parameter
	* @param a - function parameter
	* @param b - function parameter
	* @param upper - boolean indicating if the function should return the inverse of the upper tail of the incomplete beta function (default: false)
	* @returns function value
	*
	* @example
	* var y = ns.betaincinv( 0.2, 3.0, 3.0 );
	* // returns ~0.327
	*
	* @example
	* var y = ns.betaincinv( 0.4, 3.0, 3.0 );
	* // returns ~0.446
	*
	* @example
	* var y = ns.betaincinv( 0.4, 3.0, 3.0, true );
	* // returns ~0.554
	*
	* @example
	* var y = ns.betaincinv( 0.4, 1.0, 6.0 );
	* // returns ~0.082
	*
	* @example
	* var y = ns.betaincinv( 0.8, 1.0, 6.0 );
	* // returns ~0.235
	*/
	betaincinv: typeof betaincinv;

	/**
	* Evaluate the natural logarithm of the beta function.
	*
	* @param a - first input value
	* @param b - second input value
	* @returns natural logarithm of beta function
	*
	* @example
	* var v = ns.betaln( 0.0, 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.betaln( 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.betaln( -1.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.betaln( 5.0, 0.2 );
	* // returns ~1.218
	*
	* @example
	* var v = ns.betaln( 4.0, 1.0 );
	* // returns ~-1.386
	*
	* @example
	* var v = ns.betaln( NaN, 2.0 );
	* // returns NaN
	*/
	betaln: typeof betaln;

	/**
	* Evaluates Binet's formula extended to real numbers.
	*
	* @param x - input value
	* @returns real-valued result
	*
	* @example
	* var y = ns.binet( 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.binet( 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.binet( 2.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.binet( 3.0 );
	* // returns 2.0
	*
	* @example
	* var y = ns.binet( 4.0 );
	* // returns 3.0
	*
	* @example
	* var y = ns.binet( 5.0 );
	* // returns ~5.0
	*
	* @example
	* var y = ns.binet( 6.0 );
	* // returns ~8.0
	*
	* @example
	* var y = ns.binet( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.binet( 3.14 );
	* // returns ~2.12
	*
	* @example
	* var y = ns.binet( -1.0 );
	* // returns 1.0
	*/
	binet: typeof binet;

	/**
	* Computes the binomial coefficient of two integers.
	*
	* @param n - input value
	* @param k - second input value
	* @returns function value
	*
	* @example
	* var v = ns.binomcoef( 8, 2 );
	* // returns 28
	*
	* @example
	* var v = ns.binomcoef( 0, 0 );
	* // returns 1
	*
	* @example
	* var v = ns.binomcoef( -4, 2 );
	* // returns 10
	*
	* @example
	* var v = ns.binomcoef( NaN, 3 );
	* // returns NaN
	*
	* @example
	* var v = ns.binomcoef( 5, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.binomcoef( NaN, NaN );
	* // returns NaN
	*/
	binomcoef: typeof binomcoef;

	/**
	* Computes the natural logarithm of the binomial coefficient of two integers.
	*
	* ## Notes
	*
	* -   If `k < 0`, the function returns negative infinity.
	* -   The function returns `NaN` for non-integer `n` or `k`.
	*
	* @param n - input value
	* @param k - second input value
	* @returns function value
	*
	* @example
	* var v = ns.binomcoefln( 8, 2 );
	* // returns ~3.332
	*
	* @example
	* var v = ns.binomcoefln( 0, 0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.binomcoefln( -4, 2 );
	* // returns ~2.303
	*
	* @example
	* var v = ns.binomcoefln( 88, 3 );
	* // returns ~11.606
	*
	* @example
	* var v = ns.binomcoefln( NaN, 3 );
	* // returns NaN
	*
	* @example
	* var v = ns.binomcoefln( 5, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.binomcoefln( NaN, NaN );
	* // returns NaN
	*/
	binomcoefln: typeof binomcoefln;

	/**
	* Computes a one-parameter Box-Cox transformation.
	*
	* @param x - input value
	* @param lambda - power parameter
	* @returns Box-Cox transformation
	*
	* @example
	* var v = ns.boxcox( 1.0, 2.5 );
	* // returns 0.0
	*
	* @example
	* var v = ns.boxcox( 4.0, 2.5 );
	* // returns 12.4
	*
	* @example
	* var v = ns.boxcox( 10.0, 2.5 );
	* // returns ~126.0911
	*
	* @example
	* var v = ns.boxcox( 2.0, 0.0 );
	* // returns ~0.6931
	*
	* @example
	* var v = ns.boxcox( -1.0, 2.5 );
	* // returns NaN
	*
	* @example
	* var v = ns.boxcox( 0.0, -1.0 );
	* // returns -Infinity
	*/
	boxcox: typeof boxcox;

	/**
	* Computes a one-parameter Box-Cox transformation of `1+x`.
	*
	* @param x - input value
	* @param lambda - power parameter
	* @returns Box-Cox transformation of `1+x`
	*
	* @example
	* var v = ns.boxcox1p( 1.0, 2.5 );
	* // returns ~1.8627
	*
	* @example
	* var v = ns.boxcox1p( 4.0, 2.5 );
	* // returns ~21.9607
	*
	* @example
	* var v = ns.boxcox1p( 10.0, 2.5 );
	* // returns ~160.1246
	*
	* @example
	* var v = ns.boxcox1p( 2.0, 0.0 );
	* // returns ~1.0986
	*
	* @example
	* var v = ns.boxcox1p( -1.0, 2.5 );
	* // returns -0.4
	*
	* @example
	* var v = ns.boxcox1p( 0.0, -1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.boxcox1p( -1.0, -1.0 );
	* // returns -Infinity
	*/
	boxcox1p: typeof boxcox1p;

	/**
	* Computes the inverse of a one-parameter Box-Cox transformation for `1+x`.
	*
	* @param y - input value
	* @param lambda - power parameter
	* @returns inverse of the Box-Cox transformation
	*
	* @example
	* var v = ns.boxcox1pinv( 1.0, 2.5 );
	* // returns ~0.6505
	*
	* @example
	* var v = ns.boxcox1pinv( 4.0, 2.5 );
	* // returns ~1.6095
	*
	* @example
	* var v = ns.boxcox1pinv( 10.0, 2.5 );
	* // returns ~2.6812
	*
	* @example
	* var v = ns.boxcox1pinv( 2.0, 0.0 );
	* // returns ~6.3891
	*
	* @example
	* var v = ns.boxcox1pinv( -1.0, 2.5 );
	* // returns NaN
	*
	* @example
	* var v = ns.boxcox1pinv( 0.0, -1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.boxcox1pinv( 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.boxcox1pinv( NaN, 3.1 );
	* // returns NaN
	*/
	boxcox1pinv: typeof boxcox1pinv;

	/**
	* Computes the inverse of a one-parameter Box-Cox transformation.
	*
	* @param y - input value
	* @param lambda - power parameter
	* @returns inverse of the Box-Cox transformation
	*
	* @example
	* var v = ns.boxcoxinv( 1.0, 2.5 );
	* // returns ~1.6505
	*
	* @example
	* var v = ns.boxcoxinv( 4.0, 2.5 );
	* // returns ~2.6095
	*
	* @example
	* var v = ns.boxcoxinv( 10.0, 2.5 );
	* // returns ~3.6812
	*
	* @example
	* var v = ns.boxcoxinv( 2.0, 0.0 );
	* // returns ~7.3891
	*
	* @example
	* var v = ns.boxcoxinv( -1.0, 2.5 );
	* // returns NaN
	*
	* @example
	* var v = ns.boxcoxinv( 0.0, -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.boxcoxinv( 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.boxcoxinv( NaN, 3.1 );
	* // returns NaN
	*/
	boxcoxinv: typeof boxcoxinv;

	/**
	* Computes the absolute value of a double-precision complex floating-point number.
	*
	* ## Notes
	*
	* -   The absolute value of a complex number is its distance from zero.
	*
	* @param z - complex number
	* @returns absolute value
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var v = ns.cabs( new Complex128( 5.0, 3.0 ) );
	* // returns ~5.83
	*/
	cabs: typeof cabs;

	/**
	* Computes the squared absolute value of a double-precision complex floating-point number.
	*
	* ## Notes
	*
	* -   The absolute value of a complex number is its distance from zero.
	*
	* @param z - complex number
	* @returns squared absolute value
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var v = ns.cabs2( new Complex128( 5.0, 3.0 ) );
	* // returns 34.0
	*/
	cabs2: typeof cabs2;

	/**
	* Computes the squared absolute value of a single-precision complex floating-point number.
	*
	* ## Notes
	*
	* -   The absolute value of a complex number is its distance from zero.
	*
	* @param z - complex number
	* @returns squared absolute value
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	*
	* var v = ns.cabs2f( new Complex64( 5.0, 3.0 ) );
	* // returns 34.0
	*/
	cabs2f: typeof cabs2f;

	/**
	* Computes the absolute value of a single-precision complex floating-point number.
	*
	* ## Notes
	*
	* -   The absolute value of a complex number is its distance from zero.
	*
	* @param z - complex number
	* @returns absolute value
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	*
	* var v = ns.cabsf( new Complex64( 5.0, 3.0 ) );
	* // returns ~5.83
	*/
	cabsf: typeof cabsf;

	/**
	* Computes the cube root of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns cube root
	*
	* @example
	* var v = ns.cbrt( 64.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.cbrt( 27.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.cbrt( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.cbrt( -9.0 );
	* // returns ~-2.08
	*
	* @example
	* var v = ns.cbrt( NaN );
	* // returns NaN
	*/
	cbrt: typeof cbrt;

	/**
	* Computes the cube root of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns cube root
	*
	* @example
	* var v = ns.cbrtf( 64.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.cbrtf( 27.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.cbrtf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.cbrtf( -9.0 );
	* // returns ~-2.08
	*
	* @example
	* var v = ns.cbrtf( NaN );
	* // returns NaN
	*/
	cbrtf: typeof cbrtf;

	/**
	* Rounds each component of a double-precision complex floating-point number toward positive infinity.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cceil( new Complex128( -1.5, 2.5 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns -1.0
	*
	* var im = imag( v );
	* // returns 3.0
	*/
	cceil: typeof cceil;

	/**
	* Rounds a single-precision complex floating-point number toward positive infinity.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var real = require( '@stdlib/complex-float32-real' );
	* var imag = require( '@stdlib/complex-float32-imag' );
	*
	* var v = ns.cceilf( new Complex64( -1.5, 2.5 ) );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns -1.0
	*
	* var im = imag( v );
	* // returns 3.0
	*/
	cceilf: typeof cceilf;

	/**
	* Rounds each component of a double-precision complex number to the nearest multiple of `10^n` toward positive infinity.
	*
	* @param z - input value
	* @param n - integer power of 10
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cceiln( new Complex128( 5.555, -3.333 ), -2 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 5.56
	*
	* var im = imag( v );
	* // returns -3.33
	*/
	cceiln: typeof cceiln;

	/**
	* Evaluates the cis function for a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var z = new Complex128( 0.0, 0.0 );
	* // returns <Complex128>
	*
	* var out = cccis( z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 1.0
	*
	* var im = imag( out );
	* // returns 0.0
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var z = new Complex128( 1.0, 0.0 );
	* // returns <Complex128>
	*
	* var out = cccis( z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns ~0.540
	*
	* var im = imag( out );
	* // returns ~0.841
	*/
	ccis: typeof ccis;

	/**
	* Rounds a double-precision floating-point number toward positive infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.ceil( -4.2 );
	* // returns -4.0
	*
	* @example
	* var v = ns.ceil( 9.99999 );
	* // returns 10.0
	*
	* @example
	* var v = ns.ceil( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.ceil( NaN );
	* // returns NaN
	*/
	ceil: typeof ceil;

	/**
	* Rounds a numeric value to the nearest power of two toward positive infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.ceil2( 3.141592653589793 );
	* // returns 4.0
	*
	* @example
	* var v = ns.ceil2( 9.0 );
	* // returns 16.0
	*
	* @example
	* var v = ns.ceil2( -0.314 );
	* // returns -0.25
	*/
	ceil2: typeof ceil2;

	/**
	* Rounds a numeric value to the nearest power of `10` toward positive infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.ceil10( 3.141592653589793 );
	* // returns 10.0
	*
	* @example
	* var v = ns.ceil10( 9.0 );
	* // returns 10.0
	*
	* @example
	* var v = ns.ceil10( -0.314 );
	* // returns -0.1
	*/
	ceil10: typeof ceil10;

	/**
	* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward positive infinity.
	*
	* ## Notes
	*
	* -   Due to floating-point rounding error, rounding may not be exact.
	*
	* @param x - input value
	* @param n - integer power
	* @param b - base
	* @returns rounded value
	*
	* @example
	* // Round a value to 4 decimal places:
	* var v = ns.ceilb( 3.141592653589793, -4, 10 );
	* // returns 3.1416
	*
	* @example
	* // If n = 0 or b = 1, `ns.ceilb` behaves like `ceil`:
	* var v = ns.ceilb( 3.141592653589793, 0, 2 );
	* // returns 4.0
	*
	* @example
	* // Round a value to the nearest multiple of two toward positive infinity:
	* var v = ns.ceilb( 5.0, 1, 2 );
	* // returns 6.0
	*/
	ceilb: typeof ceilb;

	/**
	* Rounds a single-precision floating-point number toward positive infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.ceilf( -4.2 );
	* // returns -4.0
	*
	* @example
	* var v = ns.ceilf( 9.99999 );
	* // returns 10.0
	*
	* @example
	* var v = ns.ceilf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.ceilf( NaN );
	* // returns NaN
	*/
	ceilf: typeof ceilf;

	/**
	* Rounds a numeric value to the nearest multiple of `10^n` toward positive infinity.
	*
	* ## Notes
	*
	* -   When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
	*
	* @param x - input value
	* @param n - integer power of 10
	* @returns rounded value
	*
	* @example
	* // Round a value to 2 decimal places:
	* var v = ns.ceiln( 3.141592653589793, -2 );
	* // returns 3.15
	*
	* @example
	* // If n = 0, `ns.ceiln` behaves like `ceil`:
	* var v = ns.ceiln( 3.141592653589793, 0 );
	* // returns 4.0
	*
	* @example
	* // Round a value to the nearest thousand:
	* var v = ns.ceiln( 12368.0, 3 );
	* // returns 13000.0
	*/
	ceiln: typeof ceiln;

	/**
	* Rounds a numeric value to the nearest number toward positive infinity with \\(n\\) significant figures.
	*
	* @param x - input value
	* @param n - number of significant figures
	* @param b - base
	* @returns rounded value
	*
	* @example
	* var v = ns.ceilsd( 3.141592653589793, 5, 10 );
	* // returns 3.1416
	*
	* @example
	* var v = ns.ceilsd( 3.141592653589793, 1, 10 );
	* // returns 4.0
	*
	* @example
	* var v = ns.ceilsd( 12368.0, 2, 10 );
	* // returns 13000.0
	*
	* @example
	* var v = ns.ceilsd( 0.0313, 2, 2 );
	* // returns 0.046875
	*/
	ceilsd: typeof ceilsd;

	/**
	* Evaluates the exponential function for a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cexp( new Complex128( 0.0, 0.0 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 1.0
	*
	* var im = imag( v );
	* // returns 0.0
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cexp( new Complex128( 1.0, 0.0 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns ~2.718
	*
	* var im = imag( v );
	* // returns 0.0
	*/
	cexp: typeof cexp;

	/**
	* Returns a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
	*
	* @param z - input value
	* @param y - number from which to derive the sign
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cflipsign( new Complex128( -4.2, 5.5 ), -55.0 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 4.2
	*
	* var im = imag( v );
	* // returns -5.5
	*/
	cflipsign: typeof cflipsign;

	/**
	* Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
	*
	* @param z - input value
	* @param y - number from which to derive the sign
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var real = require( '@stdlib/complex-float32-real' );
	* var imag = require( '@stdlib/complex-float32-imag' );
	*
	* var v = ns.cflipsignf( new Complex64( -4.0, 5.0 ), -55.0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns 4.0
	*
	* var im = imag( v );
	* // returns -5.0
	*/
	cflipsignf: typeof cflipsignf;

	/**
	* Rounds a double-precision complex floating-point number toward negative infinity.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cfloor( new Complex128( 5.5, 3.3 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 5.0
	*
	* var im = imag( v );
	* // returns 3.0
	*/
	cfloor: typeof cfloor;

	/**
	* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.
	*
	* @param z - input value
	* @param n - integer power of 10
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = cfloor( new Complex128( 5.555, -3.333 ), -2 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 5.55
	*
	* var im = imag( v );
	* // returns -3.34
	*/
	cfloorn: typeof cfloorn;

	/**
	* Computes the inverse of a double-precision complex floating-point number.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.cinv( new Complex128( 2.0, 4.0 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 0.1
	*
	* var im = imag( v );
	* // returns -0.2
	*/
	cinv: typeof cinv;

	/**
	* Restricts a double-precision floating-point number to a specified range.
	*
	* @param v - input value
	* @param min - minimum value
	* @param max - maximum value
	* @returns value restricted to a specified range
	*
	* @example
	* var v = ns.clamp( 3.14, 0.0, 5.0 );
	* // returns 3.14
	*
	* v = ns.clamp( -3.14, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clamp( 10.0, 0.0, 5.0 );
	* // returns 5.0
	*
	* v = ns.clamp( -0.0, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clamp( 0.0, -0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clamp( NaN, 0.0, 5.0 );
	* // returns NaN
	*
	* v = ns.clamp( 0.0, NaN, 5.0 );
	* // returns NaN
	*
	* v = ns.clamp( 3.14, 0.0, NaN );
	* // returns NaN
	*/
	clamp: typeof clamp;

	/**
	* Restricts a single-precision floating-point number to a specified range.
	*
	* @param v - input value
	* @param min - minimum value
	* @param max - maximum value
	* @returns value restricted to a specified range
	*
	* @example
	* var v = ns.clampf( 3.14, 0.0, 5.0 );
	* // returns 3.14
	*
	* v = ns.clampf( -3.14, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clampf( 10.0, 0.0, 5.0 );
	* // returns 5.0
	*
	* v = ns.clampf( -0.0, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clampf( 0.0, -0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.clampf( NaN, 0.0, 5.0 );
	* // returns NaN
	*
	* v = ns.clampf( 0.0, NaN, 5.0 );
	* // returns NaN
	*
	* v = ns.clampf( 3.14, 0.0, NaN );
	* // returns NaN
	*/
	clampf: typeof clampf;

	/**
	* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
	*
	* @param x - number from which to derive a magnitude
	* @param y - number from which to derive a sign
	* @returns a double-precision floating-point number
	*
	* @example
	* var z = ns.copysign( -3.14, 10.0 );
	* // returns 3.14
	*
	* @example
	* var z = ns.copysign( 3.14, -1.0 );
	* // returns -3.14
	*
	* @example
	* var z = ns.copysign( 1.0, -0.0 );
	* // returns -1.0
	*
	* @example
	* var z = ns.copysign( -3.14, -0.0 );
	* // returns -3.14
	*
	* @example
	* var z = ns.copysign( -0.0, 1.0 );
	* // returns 0.0
	*/
	copysign: typeof copysign;

	/**
	* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `y`.
	*
	* @param x - number from which to derive a magnitude
	* @param y - number from which to derive a sign
	* @returns a single-precision floating-point number
	*
	* @example
	* var z = ns.copysignf( -3.0, 10.0 );
	* // returns 3.0
	*
	* @example
	* var z = ns.copysignf( 3.0, -1.0 );
	* // returns -3.0
	*
	* @example
	* var z = ns.copysignf( 1.0, -0.0 );
	* // returns -1.0
	*
	* @example
	* var z = ns.copysignf( -3.0, -0.0 );
	* // returns -3.0
	*
	* @example
	* var z = ns.copysignf( -0.0, 1.0 );
	* // returns 0.0
	*/
	copysignf: typeof copysignf;

	/**
	* Computes the cosine of a number.
	*
	* @param x - input value (in radians)
	* @returns cosine
	*
	* @example
	* var v = ns.cos( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.cos( 3.141592653589793/4.0 );
	* // returns ~0.707
	*
	* @example
	* var v = ns.cos( -3.141592653589793/6.0 );
	* // returns ~0.866
	*
	* @example
	* var v = ns.cos( NaN );
	* // returns NaN
	*/
	cos: typeof cos;

	/**
	* Computes the cosine of an angle measured in degrees.
	*
	* @param x - input value (in degrees)
	* @returns cosine
	*
	* @example
	* var v = ns.cosd( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.cosd( 60.0 );
	* // returns ~0.5
	*
	* @example
	* var v = ns.cosd( 90.0);
	* // returns 0
	*
	* @example
	* var v = ns.cosd( NaN );
	* // returns NaN
	*/
	cosd: typeof cosd;

	/**
	* Computes the hyperbolic cosine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic cosine
	*
	* @example
	* var v = ns.cosh( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.cosh( 2.0 );
	* // returns ~3.762
	*
	* @example
	* var v = ns.cosh( -2.0 );
	* // returns ~3.762
	*
	* @example
	* var v = ns.cosh( NaN );
	* // returns NaN
	*/
	cosh: typeof cosh;

	/**
	* Computes the cosine of a number minus one.
	*
	* @param x - input value (in radians)
	* @returns cosine minus one
	*
	* @example
	* var v = ns.cosm1( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.cosm1( 3.141592653589793/4.0 );
	* // returns ~-0.293
	*
	* @example
	* var v = ns.cosm1( -3.141592653589793/6.0 );
	* // returns ~-0.134
	*
	* @example
	* var v = ns.cosm1( NaN );
	* // returns NaN
	*/
	cosm1: typeof cosm1;

	/**
	* Computes the value of `cos(πx)`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.cospi( 0.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.cospi( 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = ns.cospi( 0.1 );
	* // returns ~0.951
	*
	* @example
	* var y = ns.cospi( NaN );
	* // returns NaN
	*/
	cospi: typeof cospi;

	/**
	* Evaluates the cotangent of a number.
	*
	* @param x - input value (in radians)
	* @returns cotangent
	*
	* @example
	* var v = ns.cot( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.cot( 3.141592653589793/2.0 );
	* // returns ~0.0
	*
	* @example
	* var v = ns.cot( -3.141592653589793/4.0 );
	* // returns ~-1.0
	*
	* @example
	* var v = ns.cot( 3.141592653589793/4.0 );
	* // returns ~1.0
	*
	* @example
	* var v = ns.cot( NaN );
	* // returns NaN
	*/
	cot: typeof cot;

	/**
	* Computes the cotangent of an angle measured in degrees
	*
	* @param x - input value (in degrees)
	* @returns cotangent
	*
	* @example
	* var v = ns.cotd( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.cotd( 60.0 );
	* // returns ~0.58
	*
	* @example
	* var v = ns.cotd( 90.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.cotd( NaN );
	* // returns NaN
	*/
	cotd: typeof cotd;

	/**
	* Computes the hyperbolic cotangent of a number.
	*
	* @param x - input value
	* @returns hyperbolic cotangent
	*
	* @example
	* var v = ns.coth( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.coth( 2.0 );
	* // returns ~1.0373
	*
	* @example
	* var v = ns.coth( -2.0 );
	* // returns ~-1.0373
	*
	* @example
	* var v = ns.coth( NaN );
	* // returns NaN
	*/
	coth: typeof coth;

	/**
	* Computes the coversed cosine.
	*
	* @param x - input value (in radians)
	* @returns coversed cosine
	*
	* @example
	* var v = ns.covercos( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.covercos( 3.141592653589793/2.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.covercos( -3.141592653589793/6.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.covercos( NaN );
	* // returns NaN
	*/
	covercos: typeof covercos;

	/**
	* Computes the coversed sine.
	*
	* @param x - input value (in radians)
	* @returns coversed sine
	*
	* @example
	* var v = ns.coversin( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.coversin( 3.141592653589793/2.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.coversin( -3.141592653589793/6.0 );
	* // returns 1.5
	*
	* @example
	* var v = ns.coversin( NaN );
	* // returns NaN
	*/
	coversin: typeof coversin;

	/**
	* Computes the argument of a double-precision complex floating-point number in radians.
	*
	* ## Notes
	*
	* -   The argument of a complex number, also known as the phase, is the angle of the radius extending from the origin to the complex number plotted in the complex plane and the positive real axis.
	*
	* @param z - complex number
	* @returns argument
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var phi = ns.cphase( new Complex128( 5.0, 3.0 ) );
	* // returns ~0.5404
	*/
	cphase: typeof cphase;

	/**
	* Computes the absolute value and the phase of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns absolute value and phase, respectively
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	*
	* var v = ns.cpolar( new Complex128( 5.0, 3.0 ) );
	* // returns [ ~5.83, ~0.5404 ]
	*/
	cpolar: typeof cpolar;

	/**
	* Rounds each component of a double-precision complex floating-point number to the nearest integer.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = cceil( new Complex128( -4.2, 5.5 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns -4.0
	*
	* var im = imag( v );
	* // returns 6.0
	*/
	cround: typeof cround;

	/**
	* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.
	*
	* ## Notes
	*
	* - When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
	*
	* @param z - input value
	* @param n - integer power of 10
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = cceil( new Complex128( 5.555, -3.333 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 5.56
	*
	* var im = imag( v );
	* // returns -3.34
	*/
	croundn: typeof croundn;

	/**
	* Computes the cosecant of a number.
	*
	* @param x - input value (in radians)
	* @returns cosecant
	*
	* @example
	* var v = ns.csc( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.csc( 3.141592653589793/2.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.csc( -3.141592653589793/6.0 );
	* // returns ~-2.0
	*
	* @example
	* var v = ns.csc( NaN );
	* // returns NaN
	*/
	csc: typeof csc;

	/**
	* Computes the cosecant of a degree.
	*
	* @param x - input value (in degrees)
	* @returns cosecant
	*
	* @example
	* var v = ns.cscd( 30.0 );
	* // returns ~2.0
	*
	* @example
	* var v = ns.cscd( 45.0 );
	* // returns ~1.41
	*
	* @example
	* var v = ns.cscd( 60.0 );
	* // returns ~1.15
	*
	* @example
	* var v = ns.cscd( 90.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.cscd( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.cscd( NaN );
	* // returns NaN
	*/
	cscd: typeof cscd;

	/**
	* Computes the hyperbolic cosecant of a number.
	*
	* @param x - input value
	* @returns hyperbolic cosecant
	*
	* @example
	* var v = ns.csch( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.csch( 2.0 );
	* // returns ~0.2757
	*
	* @example
	* var v = ns.csch( -2.0 );
	* // returns ~-0.2757
	*
	* @example
	* var v = ns.csch( NaN );
	* // returns NaN
	*/
	csch: typeof csch;

	/**
	* Evaluates the signum function of a double-precision complex floating-point number.
	*
	* @param z - input value
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var v = ns.csignum( new Complex128( -4.2, 5.5 ) );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns -0.6069136033622302
	*
	* var im = imag( v );
	* // returns 0.79476781392673
	*/
	csignum: typeof csignum;

	/**
	* Converts an angle from degrees to radians.
	*
	* @param x - angle in degrees
	* @returns angle in radians
	*
	* @example
	* var r = ns.deg2rad( 90.0 );
	* // returns ~1.571
	*
	* @example
	* var r = ns.deg2rad( -45.0 );
	* // returns ~-0.785
	*
	* @example
	* var r = ns.deg2rad( NaN );
	* // returns NaN
	*/
	deg2rad: typeof deg2rad;

	/**
	* Converts an angle from degrees to radians (single-precision).
	*
	* @param x - angle in degrees
	* @returns angle in radians
	*
	* @example
	* var r = ns.deg2radf( 90.0 );
	* // returns ~1.571
	*
	* @example
	* var r = ns.deg2radf( -45.0 );
	* // returns ~-0.785
	*
	* @example
	* var r = ns.deg2radf( NaN );
	* // returns NaN
	*/
	deg2radf: typeof deg2radf;

	/**
	* Evaluates the digamma function.
	*
	* ## Notes
	*
	* -   If `x` is zero or a negative integer, the function returns `NaN`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.digamma( -2.5 );
	* // returns ~1.103
	*
	* @example
	* var v = ns.digamma( 1.0 );
	* // returns ~-0.577
	*
	* @example
	* var v = ns.digamma( 10.0 );
	* // returns ~2.252
	*
	* @example
	* var v = ns.digamma( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.digamma( -1.0 );
	* // returns NaN
	*/
	digamma: typeof digamma;

	/**
	* Evaluates the Dirac delta function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.diracDelta( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.diracDelta( 3.14 );
	* // returns 0.0
	*
	* @example
	* var v = ns.diracDelta( NaN );
	* // returns NaN
	*/
	diracDelta: typeof diracDelta;

	/**
	* Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.
	*
	* @param s - input value
	* @returns function value
	*
	* @example
	* var v = ns.eta( 0.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.eta( -1.0 );
	* // returns 0.25
	*
	* @example
	* var v = ns.eta( 1.0 ); // => ln(2)
	* // returns ~0.6931
	*
	* @example
	* var v = ns.eta( 3.14 );
	* // returns ~0.9096
	*
	* @example
	* var v = ns.eta( NaN );
	* // returns NaN
	*/
	eta: typeof eta;

	/**
	* Computes the complete elliptic integral of the second kind.
	*
	* @param m - input value
	* @returns evaluated elliptic integral
	*
	* @example
	* var v = ns.ellipe( 0.5 );
	* // returns ~1.351
	*
	* v = ns.ellipe( -1.0 );
	* // returns ~1.910
	*
	* v = ns.ellipe( 2.0 );
	* // returns NaN
	*
	* v = ns.ellipe( Infinity );
	* // returns NaN
	*
	* v = ns.ellipe( -Infinity );
	* // returns NaN
	*
	* v = ns.ellipe( NaN );
	* // returns NaN
	*/
	ellipe: typeof ellipe;

	/**
	* Computes the Jacobi elliptic functions sn, cn, and dn.
	*
	* ## Notes
	*
	* -   The functions are evaluated using the [complete elliptic integral of the first kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind) `K`.
	*
	* -   The `x` argument is converted to double-precision floating-point format.
	*
	* -   The returned values are exact for `m` values where `|m| < 2**-24`.
	*
	* -   The functions return `NaN` for `m >= 1`.
	*
	* -   When `m < 1`, the following relations hold
	*
	*     ```tex
	*     \operatorname{sn}(x+x) = 2\operatorname{sn}(x)\operatorname{cn}(x)
	*     \operatorname{cn}(x+x) = 1 - 2\operatorname{sn}(x)^{2}
	*     \operatorname{dn}(x+x) = 1 - 2\operatorname{sn}(x)^{2}\operatorname{dn}(x)
	*     ```
	*
	* @param m - parameter
	* @param x - argument
	* @returns array containing four elements corresponding to the Jacobi elliptic functions and the Jacobi amplitude `am`.
	*
	* @example
	* var v = ns.ellipj( 0.5, 0 );
	* // returns [ ~0.479, ~0.878, 1 ]
	*
	* @example
	* var v = ns.ellipj( 0.5, -1.0 );
	* // returns [ ~0.497, ~0.868, ~1.117 ]
	*
	* @example
	* var v = ns.ellipj( Infinity, 0.5 );
	* // returns [ NaN, NaN, NaN ]
	*
	* @example
	* var v = ns.ellipj( -Infinity );
	* // returns [ NaN, NaN, NaN ]
	*
	* @example
	* var v = ns.ellipj( NaN );
	* // returns [ NaN, NaN, NaN ]
	*/
	ellipj: typeof ellipj;

	/**
	* Computes the complete elliptic integral of the first kind.
	*
	* @param m - input value
	* @returns evaluated elliptic integral
	*
	* @example
	* var v = ns.ellipk( 0.5 );
	* // returns ~1.854
	*
	* v = ns.ellipk( 2.0 );
	* // returns NaN
	*
	* v = ns.ellipk( -1.0 );
	* // returns ~1.311
	*
	* v = ns.ellipk( Infinity );
	* // returns NaN
	*
	* v = ns.ellipk( -Infinity );
	* // returns NaN
	*
	* v = ns.ellipk( NaN );
	* // returns NaN
	*/
	ellipk: typeof ellipk;

	/**
	* Evaluates the error function.
	*
	* ## Notes
	*
	* -   As the error function is an odd function (i.e., `erf(-x) == -erf(x)`), if provided `-0`, the function returns `-0`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.erf( 2.0 );
	* // returns ~0.9953
	*
	* @example
	* var y = ns.erf( -1.0 );
	* // returns ~-0.8427
	*
	* @example
	* var y = ns.erf( -0.0 );
	* // returns -0.0
	*
	* @example
	* var y = ns.erf( NaN );
	* // returns NaN
	*/
	erf: typeof erf;

	/**
	* Evaluates the complementary error function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.erfc( 2.0 );
	* // returns ~0.0047
	*
	* @example
	* var y = ns.erfc( -1.0 );
	* // returns ~1.8427
	*
	* @example
	* var y = ns.erfc( 0.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.erfc( Infinity );
	* // returns 0.0
	*
	* @example
	* var y = ns.erfc( -Infinity );
	* // returns 2.0
	*
	* @example
	* var y = ns.erfc( NaN );
	* // returns NaN
	*/
	erfc: typeof erfc;

	/**
	* Evaluates the inverse complementary error function.
	*
	* ## Notes
	*
	* -   The domain of `x` is restricted to `[0,2]`. If `x` is outside this interval, the function returns `NaN`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.erfcinv( 0.5 );
	* // returns ~0.4769
	*
	* @example
	* var y = ns.erfcinv( 0.8 );
	* // returns ~0.1791
	*
	* @example
	* var y = ns.erfcinv( 0.0 );
	* // returns Infinity
	*
	* @example
	* var y = ns.erfcinv( 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = ns.erfcinv( NaN );
	* // returns NaN
	*/
	erfcinv: typeof erfcinv;

	/**
	* Evaluates the scaled complementary error function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.erfcx( 0.0 );
	* // returns 1.0
	*
	* @example
	* var y = ns.erfcx( 1.0 );
	* // returns ~0.4276
	*
	* @example
	* var y = ns.erfcx( -1.0 );
	* // returns ~5.01
	*
	* @example
	* var y = ns.erfcx( 50.0 );
	* // returns ~0.011
	*
	* @example
	* var y = ns.erfcx( -50.0 );
	* // returns +Infinity
	*
	* @example
	* var y = ns.erfcx( NaN );
	* // returns NaN
	*/
	erfcx: typeof erfcx;

	/**
	* Evaluates the inverse error function.
	*
	* ## Notes
	*
	* -   If `|x| > 1`, the function returns `NaN`.
	* -   As the inverse error function is an odd function (i.e., `erfinv(-x) == -erfinv(x)`), if provided `-0`, the function returns `-0`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.erfinv( 0.5 );
	* // returns ~0.4769
	*
	* @example
	* var y = ns.erfinv( 0.8 );
	* // returns ~0.9062
	*
	* @example
	* var y = ns.erfinv( 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.erfinv( -0.0 );
	* // returns -0.0
	*
	* @example
	* var y = ns.erfinv( -1.0 );
	* // returns -Infinity
	*
	* @example
	* var y = ns.erfinv( 1.0 );
	* // returns Infinity
	*
	* @example
	* var y = ns.erfinv( NaN );
	* // returns NaN
	*/
	erfinv: typeof erfinv;

	/**
	* Evaluates the natural exponential function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.exp( 4.0 );
	* // returns ~54.5982
	*
	* @example
	* var v = ns.exp( -9.0 );
	* // returns ~1.234e-4
	*
	* @example
	* var v = ns.exp( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.exp( NaN );
	* // returns NaN
	*/
	exp: typeof exp;

	/**
	* Evaluates the base 2 exponential function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.exp2( 3.0 );
	* // returns 8.0
	*
	* @example
	* var v = ns.exp2( -9.0 );
	* // returns ~0.002
	*
	* @example
	* var v = ns.exp2( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.exp2( NaN );
	* // returns NaN
	*/
	exp2: typeof exp2;

	/**
	* Evaluates the base 10 exponential function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.exp10( 3.0 );
	* // returns 1000.0
	*
	* @example
	* var v = ns.exp10( -9.0 );
	* // returns 1.0e-9
	*
	* @example
	* var v = ns.exp10( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.exp10( NaN );
	* // returns NaN
	*/
	exp10: typeof exp10;

	/**
	* Evaluates the standard logistic function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.expit( 0.0 );
	* // returns 0.5
	*
	* @example
	* var y = ns.expit( 1.0 );
	* // returns ~0.731
	*
	* @example
	* var y = ns.expit( -1.0 );
	* // returns ~0.269
	*
	* @example
	* var y = ns.expit( Infinity );
	* // returns 1.0
	*
	* @example
	* var y = ns.expit( NaN );
	* // returns NaN
	*/
	expit: typeof expit;

	/**
	* Computes `exp(x)-1`, where `exp(x)` is the natural exponential function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.expm1( 0.2 );
	* // returns ~0.221
	*
	* @example
	* var v = ns.expm1( -9.0 );
	* // returns ~-0.9999
	*
	* @example
	* var v = ns.expm1( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.expm1( NaN );
	* // returns NaN
	*/
	expm1: typeof expm1;

	/**
	* Computes the relative error exponential.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.expm1rel( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.expm1rel( 1.0 );
	* // returns ~1.718
	*
	* @example
	* var v = ns.expm1rel( -1.0 );
	* // returns ~0.632
	*
	* @example
	* var v = ns.expm1rel( NaN );
	* // returns NaN
	*/
	expm1rel: typeof expm1rel;

	/**
	* Evaluates the factorial of `x`.
	*
	* @param x - input value
	* @returns factorial
	*
	* @example
	* var v = ns.factorial( 3.0 );
	* // returns 6.0
	*
	* @example
	* var v = ns.factorial( -1.5 );
	* // returns ~-3.545
	*
	* @example
	* var v = ns.factorial( -0.5 );
	* // returns ~1.772
	*
	* @example
	* var v = ns.factorial( 0.5 );
	* // returns ~0.886
	*
	* @example
	* var v = ns.factorial( -10.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.factorial( 171.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.factorial( NaN );
	* // returns NaN
	*/
	factorial: typeof factorial;

	/**
	* Evaluates the double factorial of `n`.
	*
	* @param n - input value
	* @returns double factorial
	*
	* @example
	* var v = ns.factorial2( 3 );
	* // returns 3
	*
	* @example
	* var v = ns.factorial2( 4 );
	* // returns 8
	*
	* @example
	* var v = ns.factorial2( -10 );
	* // returns NaN
	*
	* @example
	* var v = ns.factorial2( 301 );
	* // returns Infinity
	*
	* @example
	* var v = ns.factorial2( NaN );
	* // returns NaN
	*/
	factorial2: typeof factorial2;

	/**
	* Evaluates the natural logarithm of the factorial of `x`.
	*
	* @param x - input value
	* @returns natural logarithm of factorial of `x`
	*
	* @example
	* var v = ns.factorialln( 3.0 );
	* // returns ~1.792
	*
	* @example
	* var v = ns.factorialln( 2.4 );
	* // returns ~1.092
	*
	* @example
	* var v = ns.factorialln( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.factorialln( -1.5 );
	* // returns ~1.266
	*
	* @example
	* var v = ns.factorialln( NaN );
	* // returns NaN
	*/
	factorialln: typeof factorialln;

	/**
	* Computes the falling factorial of `x` and `n`.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer for `n`, the function returns `NaN`.
	* -   If provided `NaN` as any argument, the function returns `NaN`.
	*
	* @param x - first function parameter
	* @param n - second function parameter
	* @returns function value
	*
	* @example
	* var v = ns.fallingFactorial( 0.9, 5 );
	* // returns ~0.644
	*
	* @example
	* var v = ns.fallingFactorial( -9.0, 3 );
	* // returns -990.0
	*
	* @example
	* var v = ns.fallingFactorial( 0.0, 2 );
	* // returns 0.0
	*
	* @example
	* var v = ns.fallingFactorial( 3.0, -2 );
	* // returns NaN
	*/
	fallingFactorial: typeof fallingFactorial;

	/**
	* Fast math special functions.
	*/
	fast: typeof fast;

	/**
	* Computes the nth Fibonacci number.
	*
	* ## Notes
	*
	* -   If `n` is greater than `78`, the function returns `NaN`, as larger Fibonacci numbers cannot be accurately represented due to limitations of double-precision floating-point format.
	* -   If not provided a nonnegative integer value, the function returns `NaN`.
	*
	* @param n - the Fibonacci number to compute
	* @returns Fibonacci number
	*
	* @example
	* var y = ns.fibonacci( 0 );
	* // returns 0
	*
	* @example
	* var y = ns.fibonacci( 1 );
	* // returns 1
	*
	* @example
	* var y = ns.fibonacci( 2 );
	* // returns 1
	*
	* @example
	* var y = ns.fibonacci( 3 );
	* // returns 2
	*
	* @example
	* var y = ns.fibonacci( 4 );
	* // returns 3
	*
	* @example
	* var y = ns.fibonacci( 5 );
	* // returns 5
	*
	* @example
	* var y = ns.fibonacci( 6 );
	* // returns 8
	*
	* @example
	* var y = ns.fibonacci( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.fibonacci( 3.14 );
	* // returns NaN
	*
	* @example
	* var y = ns.fibonacci( -1.0 );
	* // returns NaN
	*/
	fibonacci: typeof fibonacci;

	/**
	* Computes the Fibonacci number index.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer value, the function returns `NaN`.
	* -   If provided `F <= 1` or `NaN`, the function returns `NaN`.
	*
	* @param F - Fibonacci number
	* @returns Fibonacci number index
	*
	* @example
	* var n = ns.fibonacciIndex( 0 );
	* // returns NaN
	*
	* @example
	* var n = ns.fibonacciIndex( 1 );
	* // returns NaN
	*
	* @example
	* var n = ns.fibonacciIndex( 2 );
	* // returns 3
	*
	* @example
	* var n = ns.fibonacciIndex( 3 );
	* // returns 4
	*
	* @example
	* var n = ns.fibonacciIndex( 5 );
	* // returns 5
	*
	* @example
	* var n = ns.fibonacciIndex( 8 );
	* // returns 6
	*
	* @example
	* var n = ns.fibonacciIndex( NaN );
	* // returns NaN
	*
	* @example
	* var n = ns.fibonacciIndex( 3.14 );
	* // returns NaN
	*
	* @example
	* var n = ns.fibonacciIndex( -1 );
	* // returns NaN
	*/
	fibonacciIndex: typeof fibonacciIndex;

	/**
	* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
	*
	* @param x - number from which to derive a magnitude
	* @param y - number from which to derive a sign
	* @returns a double-precision floating-point number
	*
	* @example
	* var z = ns.flipsign( -3.0, 10.0 );
	* // returns -3.0
	*
	* @example
	* var z = ns.flipsign( -3.0, -1.0 );
	* // returns 3.0
	*
	* @example
	* var z = ns.flipsign( 1.0, -0.0 );
	* // returns -1.0
	*
	* @example
	* var z = ns.flipsign( -3.0, -0.0 );
	* // returns 3.0
	*
	* @example
	* var z = ns.flipsign( -0.0, 1.0 );
	* // returns -0.0
	*
	* @example
	* var z = ns.flipsign( 0.0, -1.0 );
	* // returns -0.0
	*/
	flipsign: typeof flipsign;

	/**
	* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
	*
	* @param x - number from which to derive a magnitude
	* @param y - number from which to derive a sign
	* @returns a single-precision floating-point number
	*
	* @example
	* var z = ns.flipsignf( -3.0, 10.0 );
	* // returns -3.0
	*
	* @example
	* var z = ns.flipsignf( -3.0, -1.0 );
	* // returns 3.0
	*
	* @example
	* var z = ns.flipsignf( 1.0, -0.0 );
	* // returns -1.0
	*
	* @example
	* var z = ns.flipsignf( -3.0, -0.0 );
	* // returns 3.0
	*
	* @example
	* var z = ns.flipsignf( -0.0, 1.0 );
	* // returns -0.0
	*
	* @example
	* var z = ns.flipsignf( 0.0, -1.0 );
	* // returns -0.0
	*/
	flipsignf: typeof flipsignf;

	/**
	* Rounds a double-precision floating-point number toward negative infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.floor( -4.2 );
	* // returns -5.0
	*
	* @example
	* var v = ns.floor( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = ns.floor( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.floor( NaN );
	* // returns NaN
	*/
	floor: typeof floor;

	/**
	* Rounds a numeric value to the nearest power of two toward negative infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.floor2( 3.141592653589793 );
	* // returns 2.0
	*
	* @example
	* var v = ns.floor2( 13.0 );
	* // returns 8.0
	*
	* @example
	* var v = ns.floor2( -0.314 );
	* // returns -0.5
	*/
	floor2: typeof floor2;

	/**
	* Rounds a numeric value to the nearest power of `10` toward negative infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.floor10( 3.141592653589793 );
	* // returns 1.0
	*
	* @example
	* var v = ns.floor10( 9.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.floor10( -0.314 );
	* // returns -1.0
	*/
	floor10: typeof floor10;

	/**
	* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward negative infinity.
	*
	* ## Notes
	*
	* -   Due to floating-point rounding error, rounding may not be exact.
	*
	* @param x - input value
	* @param n - integer power
	* @param b - base
	* @returns rounded value
	*
	* @example
	* // Round a value to 4 decimal places:
	* var v = ns.floorb( 3.141592653589793, -4, 10 );
	* // returns 3.1415
	*
	* @example
	* // If n = 0 or b = 1, `ns.floorb` behaves like `floor`:
	* var v = ns.floorb( 3.141592653589793, 0, 2 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest multiple of two toward negative infinity:
	* var v = ns.floorb( 5.0, 1, 2 );
	* // returns 4.0
	*/
	floorb: typeof floorb;

	/**
	* Rounds a single-precision floating-point number toward negative infinity.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.floorf( -4.2 );
	* // returns -5.0
	*
	* @example
	* var v = ns.floorf( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = ns.floorf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.floorf( NaN );
	* // returns NaN
	*/
	floorf: typeof floorf;

	/**
	* Rounds a double-precision floating-point number to the nearest multiple of `10^n` toward negative infinity.
	*
	* ## Notes
	*
	* -   When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
	*
	* @param x - input value
	* @param n - integer power of 10
	* @returns rounded value
	*
	* @example
	* // Round a value to 4 decimal places:
	* var v = ns.floorn( 3.141592653589793, -4 );
	* // returns 3.1415
	*
	* @example
	* // If n = 0, `ns.floorn` behaves like `floor`:
	* var v = ns.floorn( 3.141592653589793, 0 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest thousand:
	* var v = ns.floorn( 12368.0, 3 );
	* // returns 12000.0
	*/
	floorn: typeof floorn;

	/**
	* Rounds a numeric value to the nearest number toward negative infinity with \\(n\\) significant figures.
	*
	* @param x - input value
	* @param n - number of significant figures
	* @param b - base
	* @returns rounded value
	*
	* @example
	* var v = ns.floorsd( 3.141592653589793, 5, 10 );
	* // returns 3.1415
	*
	* @example
	* var v = ns.floorsd( 3.141592653589793, 1, 10 );
	* // returns 3.0
	*
	* @example
	* var v = ns.floorsd( 12368.0, 2, 10 );
	* // returns 12000.0
	*
	* @example
	* var v = ns.floorsd( 0.0313, 2, 2 );
	* // returns 0.03125
	*/
	floorsd: typeof floorsd;

	/**
	* Computes the Fresnel integrals S(x) and C(x).
	*
	* @param x - input value
	* @returns S(x) and C(x)
	*
	* @example
	* var v = ns.fresnel( 0.0 );
	* // returns [ 0.0, 0.0 ]
	*
	* @example
	* var v = ns.fresnel( 1.0 );
	* // returns [ ~0.438, ~0.780 ]
	*
	* @example
	* var v = ns.fresnel( Infinity );
	* // returns [ ~0.5, ~0.5 ]
	*
	* @example
	* var v = ns.fresnel( -Infinity );
	* // returns [ ~-0.5, ~-0.5 ]
	*
	* @example
	* var v = ns.fresnel( NaN );
	* // returns [ NaN, NaN ]
	*/
	fresnel: typeof fresnel;

	/**
	* Computes the Fresnel integral C(x).
	*
	* @param x - input value
	* @returns C(x)
	*
	* @example
	* var v = ns.fresnelc( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.fresnelc( 1.0 );
	* // returns ~0.780
	*
	* @example
	* var v = ns.fresnelc( Infinity );
	* // returns ~0.5
	*
	* @example
	* var v = ns.fresnelc( -Infinity );
	* // returns ~-0.5
	*
	* @example
	* var v = ns.fresnelc( NaN );
	* // returns NaN
	*/
	fresnelc: typeof fresnelc;

	/**
	* Computes the Fresnel integral S(x).
	*
	* @param x - input value
	* @returns S(x)
	*
	* @example
	* var v = ns.fresnels( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.fresnels( 1.0 );
	* // returns ~0.438
	*
	* @example
	* var v = ns.fresnels( Infinity );
	* // returns ~0.5
	*
	* @example
	* var v = ns.fresnels( -Infinity );
	* // returns ~-0.5
	*
	* @example
	* var v = ns.fresnels( NaN );
	* // returns NaN
	*/
	fresnels: typeof fresnels;

	/**
	* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
	*
	* ## Notes
	*
	* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
	* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
	* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var out = ns.frexp( 4.0 );
	* // returns [ 0.5, 3 ]
	*
	* @example
	* var out = ns.frexp( 0.0 );
	* // returns [ 0.0, 0 ]
	*
	* @example
	* var out = ns.frexp( -0.0 );
	* // returns [ -0.0, 0 ]
	*
	* @example
	* var out = ns.frexp( NaN );
	* // returns [ NaN, 0 ]
	*
	* @example
	* var out = ns.frexp( Infinity );
	* // returns [ Infinity , 0 ]
	*
	* @example
	* var out = ns.frexp( -Infinity );
	* // returns [ -Infinity , 0 ]
	*/
	frexp: typeof frexp;

	/**
	* Evaluates the gamma function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.gamma( 4.0 );
	* // returns 6.0
	*
	* @example
	* var v = ns.gamma( -1.5 );
	* // returns ~2.363
	*
	* @example
	* var v = ns.gamma( -0.5 );
	* // returns ~-3.545
	*
	* @example
	* var v = ns.gamma( 0.5 );
	* // returns ~1.772
	*
	* @example
	* var v = ns.gamma( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.gamma( -0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.gamma( NaN );
	* // returns NaN
	*/
	gamma: typeof gamma;

	/**
	* Computes the ratio of two gamma functions.
	*
	* ## Notes
	*
	* -   Specifically, the function evaluates `Γ( z ) / Γ( z + δ )`.
	*
	* @param z - first gamma parameter
	* @param delta - difference
	* @returns gamma ratio
	*
	* @example
	* var y = ns.gammaDeltaRatio( 2.0, 3.0 );
	* // returns ~0.042
	*
	* @example
	* var y = ns.gammaDeltaRatio( 4.0, 0.5 );
	* // returns ~0.516
	*
	* @example
	* var y = ns.gammaDeltaRatio( 100.0, 0.0 );
	* // returns 1.0
	*/
	gammaDeltaRatio: typeof gammaDeltaRatio;

	/**
	* Calculates the Lanczos sum approximation.
	*
	* @param x - input value
	* @returns Lanczos sum approximation
	*
	* @example
	* var v = ns.gammaLanczosSum( 4.0 );
	* // returns ~950.366
	*
	* @example
	* var v = ns.gammaLanczosSum( -1.5 );
	* // returns ~1373366.245
	*
	* @example
	* var v = ns.gammaLanczosSum( -0.5 );
	* // returns ~-699841.735
	*
	* @example
	* var v = ns.gammaLanczosSum( 0.5 );
	* // returns ~96074.186
	*
	* @example
	* var v = ns.gammaLanczosSum( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.gammaLanczosSum( NaN );
	* // returns NaN
	*/
	gammaLanczosSum: typeof gammaLanczosSum;

	/**
	* Calculates the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 10.900511`.
	*
	* @param x - input value
	* @returns Lanczos sum approximation
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( 4.0 );
	* // returns ~0.018
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( -1.5 );
	* // returns ~25.337
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( -0.5 );
	* // returns ~-12.911
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( 0.5 );
	* // returns ~1.772
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.gammaLanczosSumExpGScaled( NaN );
	* // returns NaN
	*/
	gammaLanczosSumExpGScaled: typeof gammaLanczosSumExpGScaled;

	/**
	* Computes `gamma(x+1) - 1`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.gamma1pm1( 0.2 );
	* // returns ~-0.082
	*
	* @example
	* var v = ns.gamma1pm1( -9.2 );
	* // returns ~-1.0
	*
	* @example
	* var v = ns.gamma1pm1( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.gamma1pm1( -3.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.gamma1pm1( NaN );
	* // returns NaN
	*/
	gamma1pm1: typeof gamma1pm1;

	/**
	* Computes the regularized incomplete gamma function.
	*
	* ## Notes
	*
	* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete gamma functions, respectively.
	* -   If provided `x < 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param x - function parameter
	* @param a - function parameter
	* @param regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions (default: true)
	* @param upper - boolean indicating if the function should return the upper tail of the incomplete gamma function (default: false)
	* @returns function value
	*
	* @example
	* var y = ns.gammainc( 6.0, 2.0 )
	* // returns ~0.9826
	* @example
	* var y = ns.gammainc( 1.0, 2.0, true, true )
	* // returns ~0.7358
	* @example
	* var y = ns.gammainc( 7.0, 5.0 )
	* // returns ~0.8270
	* @example
	* var y = ns.gammainc( 7.0, 5.0, false )
	* // returns ~19.8482
	* @example
	* var y = ns.gammainc( NaN, 2.0 )
	* // returns NaN
	* @example
	* var y = ns.gammainc( 6.0, NaN )
	* // returns NaN
	*/
	gammainc: typeof gammainc;

	/**
	* Inverts the lower gamma function; i.e., computes `xr` such that `P(a,xr) = p`.
	*
	* ## Notes
	*
	* -   In contrast to a more commonly used definition, the first argument is the probability `p` and the second argument is the scale factor `a`.
	* -   By default, the function inverts the lower regularized incomplete gamma function, `P(x,a)`. To invert the upper function `Q(x,a)`, set the `upper` argument to `true`.
	* -   If provided `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param p - probability value
	* @param a - scale parameter
	* @param upper - boolean indicating if the function should invert the upper tail of the incomplete gamma function instead; i.e., compute `xr` such that `Q(a,xr) = p` (default: false)
	* @returns function value of the inverse
	*
	* @example
	* var y = ns.gammaincinv( 0.5, 2.0 );
	* // returns ~1.678
	* @example
	* var y = ns.gammaincinv( 0.1, 10.0 );
	* // returns ~6.221
	* @example
	* var y = ns.gammaincinv( 0.75, 3.0 );
	* // returns ~3.92
	* @example
	* var y = ns.gammaincinv( 0.75, 3.0, true );
	* // returns ~1.727
	* @example
	* var y = ns.gammaincinv( 0.75, NaN );
	* // returns NaN
	* @example
	* var y = ns.gammaincinv( NaN, 3.0 );
	* // returns NaN
	*/
	gammaincinv: typeof gammaincinv;

	/**
	* Evaluates the natural logarithm of the gamma function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.gammaln( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.gammaln( 2.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.gammaln( 4.0 );
	* // returns ~1.792
	*
	* @example
	* var v = ns.gammaln( -0.5 );
	* // returns ~1.266
	*
	* @example
	* var v = ns.gammaln( 0.5 );
	* // returns ~0.572
	*
	* @example
	* var v = ns.gammaln( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.gammaln( NaN );
	* // returns NaN
	*/
	gammaln: typeof gammaln;

	/**
	* Computes the sign of the gamma function.
	*
	* @param x - input value
	* @returns sign of the gamma function
	*
	* @example
	* var v = ns.gammasgn( 1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.gammasgn( -2.5 );
	* // returns -1.0
	*
	* @example
	* var v = ns.gammasgn( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.gammasgn( NaN );
	* // returns NaN
	*/
	gammasgn: typeof gammasgn;

	/**
	* Computes the greatest common divisor (gcd).
	*
	* ## Notes
	*
	* -   If both `a` and `b` are `0`, the function returns `0`.
	* -   Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.
	*
	* @param a - first number
	* @param b - second number
	* @returns greatest common divisor
	*
	* @example
	* var v = ns.gcd( 48, 18 );
	* // returns 6
	*
	* @example
	* var v = ns.gcd( 3.14, 18 );
	* // returns NaN
	*
	* @example
	* var v = ns.gcd( NaN, 18 );
	* // returns NaN
	*/
	gcd: typeof gcd;

	/**
	* Computes the half-value coversed cosine.
	*
	* ## Notes
	*
	* -   The half-value coversed cosine is defined as `(1 + sin(x)) / 2`.
	*
	* @param x - input value (in radians)
	* @returns half-value coversed cosine
	*
	* @example
	* var v = ns.hacovercos( 0.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.hacovercos( 3.141592653589793/2.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.hacovercos( -3.141592653589793/6.0 );
	* // returns 0.25
	*
	* @example
	* var v = ns.hacovercos( NaN );
	* // returns NaN
	*/
	hacovercos: typeof hacovercos;

	/**
	* Computes the half-value coversed sine.
	*
	* ## Notes
	*
	* -   The half-value coversed sine is defined as `(1 - sin(x)) / 2`.
	*
	* @param x - input value (in radians)
	* @returns half-value coversed sine
	*
	* @example
	* var v = ns.hacoversin( 0.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.hacoversin( 3.141592653589793/2.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.hacoversin( -3.141592653589793/6.0 );
	* // returns 0.75
	*
	* @example
	* var v = ns.hacoversin( NaN );
	* // returns NaN
	*/
	hacoversin: typeof hacoversin;

	/**
	* Computes the half-value versed cosine.
	*
	* @param x - input value (in radians)
	* @returns half-value versed cosine
	*
	* @example
	* var v = ns.havercos( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.havercos( 3.141592653589793/2.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.havercos( -3.141592653589793/6.0 );
	* // returns ~0.9330
	*
	* @example
	* var v = ns.havercos( NaN );
	* // returns NaN
	*/
	havercos: typeof havercos;

	/**
	* Computes the half-value versed sine.
	*
	* ## Notes
	*
	* -   The half-value versed sine is defined as `(1 - cos(x)) / 2`.
	*
	* @param x - input value (in radians)
	* @returns half-value versed sine
	*
	* @example
	* var v = ns.haversin( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.haversin( 3.141592653589793/2.0 );
	* // returns ~0.5
	*
	* @example
	* var v = ns.haversin( -3.141592653589793/6.0 );
	* // returns ~0.06699
	*
	* @example
	* var v = ns.haversin( NaN );
	* // returns NaN
	*/
	haversin: typeof haversin;

	/**
	* Evaluates the Heaviside function.
	*
	* ## Notes
	*
	* -   The `continuity` parameter may be one of the following:
	*
	*     -   'half-maximum': if `x == 0`, the function returns `0.5`.
	*     -   'left-continuous': if `x == 0`, the function returns `0`.
	*     -   'right-continuous': if `x == 0`, the function returns `1`.
	*
	* -   By default, if `x == 0`, the function returns `NaN` (i.e., the function is discontinuous).
	*
	* @param x - input value
	* @param continuity - continuity option
	* @returns function value
	*
	* @example
	* var v = ns.heaviside( 3.14 );
	* // returns 1.0
	*
	* @example
	* var v = ns.heaviside( -3.14 );
	* // returns 0.0
	*
	* @example
	* var v = ns.heaviside( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.heaviside( 0.0, 'half-maximum' );
	* // returns 0.5
	*
	* @example
	* var v = ns.heaviside( 0.0, 'left-continuous' );
	* // returns 0.0
	*
	* @example
	* var v = ns.heaviside( 0.0, 'right-continuous' );
	* // returns 1.0
	*
	* @example
	* var v = ns.heaviside( NaN );
	* // returns NaN
	*/
	heaviside: typeof heaviside;

	/**
	* Computes the hypotenuse avoiding overflow and underflow.
	*
	* @param x - number
	* @param y - number
	* @returns hypotenuse
	*
	* @example
	* var h = ns.hypot( -5.0, 12.0 );
	* // returns 13.0
	*
	* @example
	* var h = ns.hypot( NaN, 12.0 );
	* // returns NaN
	*
	* @example
	* var h = ns.hypot( -0.0, -0.0 );
	* // returns 0.0
	*/
	hypot: typeof hypot;

	/**
	* Computes the hypotenuse avoiding overflow and underflow (single-precision).
	*
	* @param x - number
	* @param y - number
	* @returns hypotenuse
	*
	* @example
	* var h = ns.hypotf( -5.0, 12.0 );
	* // returns 13.0
	*
	* @example
	* var h = ns.hypotf( NaN, 12.0 );
	* // returns NaN
	*
	* @example
	* var h = ns.hypotf( -0.0, -0.0 );
	* // returns 0.0
	*/
	hypotf: typeof hypotf;

	/**
	* Computes the multiplicative inverse of a double-precision floating-point number `x`.
	*
	* ## Notes
	*
	* -   The multiplicative inverse is defined as `1/x`.
	*
	* @param x - input value
	* @returns multiplicative inverse
	*
	* @example
	* var v = ns.inv( -1.0 );
	* // returns -1.0
	*
	* @example
	* var v = ns.inv( 2.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.inv( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.inv( -0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.inv( NaN );
	* // returns NaN
	*/
	inv: typeof inv;

	/**
	* Computes the multiplicative inverse of a single-precision floating-point number `x`.
	*
	* ## Notes
	*
	* -   The multiplicative inverse is defined as `1/x`.
	*
	* @param x - input value
	* @returns multiplicative inverse
	*
	* @example
	* var v = ns.invf( -1.0 );
	* // returns -1.0
	*
	* @example
	* var v = ns.invf( 2.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.invf( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.invf( -0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.invf( NaN );
	* // returns NaN
	*/
	invf: typeof invf;

	/**
	* Evaluates the incomplete beta function and its first derivative.
	*
	* ## Notes
	*
	* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
	* -   If provided `x < 0` or `x > 1`, the function returns `[ NaN, NaN ]`.
	* -   If provided `a < 0` or `b < 0`, the function returns `[ NaN, NaN ]`.
	*
	* @param x - function input
	* @param a - function parameter
	* @param b - function parameter
	* @param invert - boolean indicating if the function should return the upper tail of the incomplete beta function instead
	* @param normalized - boolean indicating if the function should evaluate the regularized boolean beta function
	* @returns function value and first derivative
	*
	* @example
	* var out = ns.kernelBetainc( 0.5, 2.0, 2.0, false, false );
	* // returns [ ~0.083, ~1.5 ]
	*
	* @example
	* var out = ns.kernelBetainc( 0.2, 1.0, 2.0, true, false );
	* // returns [ 0.36, 1.6 ]
	*
	* @example
	* var arr = [ 0.0, 0.0 ];
	* var out = ns.kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, arr, 1, 0 );
	* // returns [ 0.64, 1.6 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	kernelBetainc: typeof kernelBetainc;

	/**
	* Calculates the inverse of the incomplete beta function.
	*
	* ## Notes
	*
	* -   Probabilities `p` and `q` must satisfy `p = 1 - q`.
	*
	* @param a - function parameter
	* @param b - function parameter
	* @param p - function parameter
	* @param q - probability equal to `1 - p`
	* @returns two-element array holding function value `y` and `1-y`
	*
	* @example
	* var y = ns.kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 )
	* // returns[ ~0.327, ~0.673 ]
	* @example
	* y = ns.kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 )
	* // returns[ ~0.446, ~0.554 ]
	* @example
	* y = ns.kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 )
	* // returns[ ~0.082, ~0.918 ]
	* @example
	* y = ns.kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 )
	* // returns[ ~0.235, ~0.765 ]
	*/
	kernelBetaincinv: typeof kernelBetaincinv;

	/**
	* Computes the cosine of a double-precision floating-point number on `[-π/4, π/4]`.
	*
	* ## Notes
	*
	* -   For increased accuracy, the number for which the cosine should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
	* -   The two numbers must satisfy `|y| < 0.5 * ulp( x )`.
	*
	* @param x - input value (in radians, assumed to be bounded by ~pi/4 in magnitude)
	* @param y - tail of `x`
	* @returns cosine
	*
	* @example
	* var v = ns.kernelCos( 0.0, 0.0 );
	* // returns ~1.0
	*
	* @example
	* var v = ns.kernelCos( 3.141592653589793/6.0, 0.0 );
	* // returns ~0.866
	*
	* @example
	* var v = ns.kernelCos( 0.785, -1.144e-17 );
	* // returns ~0.707
	*
	* @example
	* var v = ns.kernelCos( NaN, 0.0 );
	* // returns NaN
	*/
	kernelCos: typeof kernelCos;

	/**
	* Computes `log(1+f) - f` for `1+f` in `~[sqrt(2)/2, sqrt(2)]`.
	*
	* ## Notes
	*
	* -   This function provides a common means for computing logarithms in base `e`. Argument reduction and adding the final term of the polynomial must be done by the caller for increased accuracy when different bases are used.
	*
	* @param f - input value
	* @returns function value
	*
	* @example
	* var v = ns.kernelLog1p( 1.0 );
	* // returns ~0.1931
	*
	* @example
	* var sqrt = require( '@stdlib/math-base-special-sqrt' );
	*
	* var v = ns.kernelLog1p( sqrt( 2.0 ) );
	* // returns ~0.4672
	*
	* @example
	* var v = ns.kernelLog1p( NaN );
	* // returns NaN
	*/
	kernelLog1p: typeof kernelLog1p;

	/**
	* Computes the sine of a double-precision floating-point number on `[-π/4, π/4]`.
	*
	* ## Notes
	*
	* -   For increased accuracy, the number for which the cosine should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
	* -   The two numbers must satisfy `|y| < 0.5 * ulp( x )`.
	*
	* @param x - input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
	* @param y - tail of `x`
	* @returns sine
	*
	* @example
	* var v = ns.kernelSin( 0.0, 0.0 );
	* // returns ~0.0
	*
	* @example
	* var v = ns.kernelSin( 3.141592653589793/6.0, 0.0 );
	* // returns ~0.5
	*
	* @example
	* var v = ns.kernelSin( 0.619, 9.279e-18 );
	* // returns ~0.58
	*
	* @example
	* var v = ns.kernelSin( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.kernelSin( 3.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.kernelSin( NaN, NaN );
	* // returns NaN
	*/
	kernelSin: typeof kernelSin;

	/**
	* Computes the tangent of a double-precision floating-point number on `[-π/4, π/4]`.
	*
	* ## Notes
	*
	* -   For increased accuracy, the number for which the tangent should be evaluated can be supplied as a double-double number (i.e., a non-evaluated sum of two double-precision floating-point numbers `x` and `y`).
	* -   The numbers `x` and `y` must satisfy `|y| < 0.5 * ulp( x )`.
	* -   If either `x` or `y` is `NaN`, the function returns `NaN`.
	*
	* @param x - input value (in radians, assumed to be bounded by ~π/4 in magnitude)
	* @param y - tail of `x`
	* @param k - indicates whether tan (if k = 1) or -1/tan (if k = -1) is returned
	* @returns tangent
	*
	* @example
	* var out = ns.kernelTan( 3.141592653589793/4.0, 0.0, 1 );
	* // returns ~1.0
	*
	* @example
	* var out = ns.kernelTan( 3.141592653589793/4.0, 0.0, -1 );
	* // returns ~-1.0
	*
	* @example
	* var out = ns.kernelTan( 3.141592653589793/6.0, 0.0, 1 );
	* // returns ~0.577
	*
	* @example
	* var out = ns.kernelTan( 0.664, 5.288e-17, 1 );
	* // returns ~0.783
	*
	* @example
	* var out = ns.kernelTan( NaN, 0.0, 1 );
	* // returns NaN
	*
	* @example
	* var out = ns.kernelTan( 3.0, NaN, 1 );
	* // returns NaN
	*
	* @example
	* var out = ns.kernelTan( NaN, NaN, 1 );
	* // returns NaN
	*/
	kernelTan: typeof kernelTan;

	/**
	* Evaluates the Kronecker delta.
	*
	* ## Notes
	*
	* -   If `i == j`, the function returns `1`; otherwise, the function returns zero.
	*
	* @param i - input value
	* @param j - input value
	* @returns function value
	*
	* @example
	* var v = ns.kroneckerDelta( 3.14, 3.14 );
	* // returns 1.0
	*
	* @example
	* var v = ns.kroneckerDelta( 3.14, 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.kroneckerDelta( NaN, 3.14 );
	* // returns NaN
	*
	* @example
	* var v = ns.kroneckerDelta( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.kroneckerDelta( NaN, NaN );
	* // returns NaN
	*/
	kroneckerDelta: typeof kroneckerDelta;

	/**
	* Evaluates the Kronecker delta (single-precision).
	*
	* ## Notes
	*
	* -   If `i == j`, the function returns `1`; otherwise, the function returns zero.
	*
	* @param i - input value
	* @param j - input value
	* @returns function value
	*
	* @example
	* var v = ns.kroneckerDeltaf( 3.14, 3.14 );
	* // returns 1.0
	*
	* @example
	* var v = ns.kroneckerDeltaf( 3.14, 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.kroneckerDeltaf( NaN, 3.14 );
	* // returns NaN
	*
	* @example
	* var v = ns.kroneckerDeltaf( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.kroneckerDeltaf( NaN, NaN );
	* // returns NaN
	*/
	kroneckerDeltaf: typeof kroneckerDeltaf;

	/**
	* Computes an absolute value of a signed 32-bit integer in two's complement format.
	*
	* @param x - signed 32-bit integer
	* @returns absolute value
	*
	* @example
	* var v = ns.labs( -10|0 );
	* // returns 10
	*/
	labs: typeof labs;

	/**
	* Computes the least common multiple (lcm).
	*
	* ## Notes
	*
	* -   If either `a` or `b` is `0`, the function returns `0`.
	* -   Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.
	*
	* @param a - integer
	* @param b - integer
	* @returns least common multiple
	*
	* @example
	* var v = ns.lcm( 21, 6 );
	* // returns 42
	*
	* @example
	* var v = ns.lcm( 3.14, 6 );
	* // returns NaN
	*
	* @example
	* var v = ns.lcm( NaN, 6 );
	* // returns NaN
	*/
	lcm: typeof lcm;

	/**
	* Multiplies a double-precision floating-point number by an integer power of two.
	*
	* ## Notes
	*
	* -   If `frac` equals positive or negative `zero`, `NaN`, or positive or negative infinity, the function returns a value equal to `frac`.
	*
	* @param frac - fraction
	* @param exp - exponent
	* @returns double-precision floating-point number
	*
	* @example
	* var x = ns.ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
	* // returns 4.0
	*
	* @example
	* var x = ns.ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
	* // returns 1.0
	*
	* @example
	* var x = ns.ldexp( 0.0, 20 );
	* // returns 0.0
	*
	* @example
	* var x = ns.ldexp( -0.0, 39 );
	* // returns -0.0
	*
	* @example
	* var x = ns.ldexp( NaN, -101 );
	* // returns NaN
	*
	* @example
	* var x = ns.ldexp( Infinity, 11 );
	* // returns Infinity
	*
	* @example
	* var x = ns.ldexp( -Infinity, -118 );
	* // returns -Infinity
	*/
	ldexp: typeof ldexp;

	/**
	* Evaluates the natural logarithm of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.ln( 4.0 );
	* // returns ~1.386
	*
	* @example
	* var v = ns.ln( 0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.ln( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.ln( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.ln( -4.0 );
	* // returns NaN
	*/
	ln: typeof ln;

	/**
	* Computes the base `b` logarithm of a double-precision floating-point number.
	*
	* @param x - input value
	* @param b - base
	* @returns logarithm (base `b`)
	*
	* @example
	* var v = ns.log( 100.0, 10.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.log( 16.0, 2.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.log( 5.0, 1.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.log( NaN, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.log( 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.log( -4.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.log( 4.0, -2.0 );
	* // returns NaN
	*/
	log: typeof log;

	/**
	* Computes the natural logarithm of `1-exp(-|x|)`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.log1mexp( 1.1 );
	* // returns ~-0.40477
	*
	* @example
	* var v = ns.log1mexp( 0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.log1mexp( NaN );
	* // returns NaN
	*/
	log1mexp: typeof log1mexp;

	/**
	* Evaluates the natural logarithm of `1+x`.
	*
	* ## Notes
	*
	* -   For `x < -1`, the function returns `NaN`, as the natural logarithm is not defined for negative numbers.
	*
	* @param x - input value
	* @returns the natural logarithm of `1+x`
	*
	* @example
	* var v = ns.log1p( 4.0 );
	* // returns ~1.609
	*
	* @example
	* var v = ns.log1p( -1.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.log1p( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.log1p( -0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.log1p( -2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.log1p( NaN );
	* // returns NaN
	*/
	log1p: typeof log1p;

	/**
	* Computes the natural logarithm of `1 + exp(x)`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.log1pexp( 1.1 );
	* // returns ~1.387
	*
	* @example
	* var v = ns.log1pexp( 100.0 );
	* // returns 100.0
	*
	* @example
	* var v = ns.log1pexp( NaN );
	* // returns NaN
	*/
	log1pexp: typeof log1pexp;

	/**
	* Evaluates \\( \operatorname{log1pmx}(x) = \ln(1+x) - x \\).
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.log1pmx( 1.1 );
	* // returns ~-0.358
	*
	* @example
	* var v = ns.log1pmx( 0.99 );
	* // returns ~-0.302
	*
	* @example
	* var v = ns.log1pmx( -0.99 );
	* // returns ~-3.615
	*
	* @example
	* var v = ns.log1pmx( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.log1pmx( NaN );
	* // returns NaN
	*/
	log1pmx: typeof log1pmx;

	/**
	* Evaluates the binary logarithm (base two).
	*
	* ## Notes
	*
	* -   For negative numbers, the binary logarithm is not defined.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.log2( 4.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.log2( 8.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.log2( 0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.log2( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.log2( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.log2( -4.0 );
	* // returns NaN
	*/
	log2: typeof log2;

	/**
	* Evaluates the common logarithm (base ten).
	*
	* ## Notes
	*
	* -   For negative numbers, the common logarithm is not defined.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.log10( 4.0 );
	* // returns ~0.602
	*
	* @example
	* var v = ns.log10( 8.0 );
	* // returns ~0.903
	*
	* @example
	* var v = ns.log10( 0.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.log10( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.log10( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.log10( -4.0 );
	* // returns NaN
	*/
	log10: typeof log10;

	/**
	* Computes the natural logarithm of `exp(x) + exp(y)`.
	*
	* @param x - input value
	* @param y - input value
	* @returns natural logarithm of `exp(x) + exp(y)`
	*
	* @example
	* var v = ns.logaddexp( 90.0, 90.0 );
	* // returns ~90.6931
	*
	* @example
	* var v = ns.logaddexp( -20.0, 90.0 );
	* // returns 90.0
	*
	* @example
	* var v = ns.logaddexp( 0.0, -100 );
	* // returns ~3.7201e-44
	*/
	logaddexp: typeof logaddexp;

	/**
	* Evaluates the logit function.
	*
	* ## Notes
	*
	* -   Let `p` be the probability of some event. The logit function is defined as the logarithm of the odds `p / (1-p)`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param p - input value
	* @returns function value
	*
	* @example
	* var y = ns.logit( 0.2 );
	* // returns ~-1.386
	*
	* @example
	* var y = ns.logit( 0.9 );
	* // returns ~2.197
	*
	* @example
	* var y = ns.logit( -4.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.logit( 1.5 );
	* // returns NaN
	*
	* @example
	* var y = ns.logit( NaN );
	* // returns NaN
	*/
	logit: typeof logit;

	/**
	* Computes the nth Lucas number.
	*
	* ## Notes
	*
	* -   Lucas numbers follow the recurrence relation `L_n = L_{n-1} + L_{n-2}` with seed values `L_0 = 2` and `L_1 = 1`.
	* -   If `n` is greater than `76`, the function returns `NaN`, as larger Lucas numbers cannot be accurately represented due to limitations of double-precision floating-point format.
	* -   If not provided a nonnegative integer value, the function returns `NaN`.
	*
	* @param n - the Lucas number to compute
	* @returns Lucas number
	*
	* @example
	* var y = ns.lucas( 0 );
	* // returns 2
	*
	* @example
	* var y = ns.lucas( 1 );
	* // returns 1
	*
	* @example
	* var y = ns.lucas( 2 );
	* // returns 3
	*
	* @example
	* var y = ns.lucas( 3 );
	* // returns 4
	*
	* @example
	* var y = ns.lucas( 4 );
	* // returns 7
	*
	* @example
	* var y = ns.lucas( 5 );
	* // returns 11
	*
	* @example
	* var y = ns.lucas( 6 );
	* // returns 18
	*
	* @example
	* var y = ns.lucas( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.lucas( 3.14 );
	* // returns NaN
	*
	* @example
	* var y = ns.lucas( -1.0 );
	* // returns NaN
	*/
	lucas: typeof lucas;

	/**
	* Returns the maximum value.
	*
	* @param x - first number
	* @param y - second number
	* @returns maximum value
	*
	* @example
	* var v = ns.max( 3.14, 4.2 );
	* // returns 4.2
	*
	* @example
	* var v = ns.max( 5.9, 3.14 );
	* // returns 5.9
	*
	* @example
	* var v = ns.max( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.max( +0.0, -0.0 );
	* // returns +0.0
	*/
	max: typeof max;

	/**
	* Returns the maximum absolute value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns `+infinity` (i.e., the absolute value of `-infinity`).
	*
	* @param x - first number
	* @param y - second number
	* @returns maximum absolute value
	*
	* @example
	* var v = ns.maxabs( 3.14, -4.2 );
	* // returns 4.2
	*
	* @example
	* var v = ns.maxabs( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.maxabs( +0.0, -0.0 );
	* // returns +0.0
	*/
	maxabs: typeof maxabs;

	/**
	* Returns the maximum absolute value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns `+infinity` (i.e., the absolute value of `-infinity`).
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns maximum absolute value
	*
	* @example
	* var v = ns.maxabsn( 3.14, -4.2 );
	* // returns 4.2
	*
	* @example
	* var v = ns.maxabsn( 5.9, 3.14, 4.2 );
	* // returns 5.9
	*
	* @example
	* var v = ns.maxabsn( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.maxabsn( +0.0, -0.0 );
	* // returns +0.0
	*/
	maxabsn: typeof maxabsn;

	/**
	* Returns the maximum value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns negative infinity.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns maximum value
	*
	* @example
	* var v = ns.maxn( 3.14, 4.2 );
	* // returns 4.2
	*
	* @example
	* var v = ns.maxn( 5.9, 3.14, 4.2 );
	* // returns 5.9
	*
	* @example
	* var v = ns.maxn( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.maxn( +0.0, -0.0 );
	* // returns +0.0
	*/
	maxn: typeof maxn;

	/**
	* Returns the minimum value.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum value
	*
	* @example
	* var v = ns.min( 3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.min( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.min( +0.0, -0.0 );
	* // returns -0.0
	*/
	min: typeof min;

	/**
	* Returns the minimum absolute value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, if not provided any arguments, the function returns positive infinity.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum absolute value
	*
	* @example
	* var v = ns.minabs( -3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.minabs( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.minabs( +0.0, -0.0 );
	* // returns +0.0
	*/
	minabs: typeof minabs;

	/**
	* Returns the minimum absolute value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, if not provided any arguments, the function returns positive infinity.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum absolute value
	*
	* @example
	* var v = ns.minabsn( -3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.minabsn( 5.9, 3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.minabsn( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.minabsn( +0.0, -0.0 );
	* // returns +0.0
	*/
	minabsn: typeof minabsn;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum and maximum values
	*
	* @example
	* var v = ns.minmax( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* var v = ns.minmax( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = ns.minmax( +0.0, -0.0 );
	* // returns [ -0.0, 0.0 ]
	*/
	minmax: typeof minmax;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = ns.minmaxabs( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* @example
	* var v = ns.minmaxabs( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = ns.minmaxabs( +0.0, -0.0 );
	* // returns [ 0.0, 0.0 ]
	*/
	minmaxabs: typeof minmaxabs;

	/**
	* Returns the minimum and maximum absolute values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum and maximum absolute values
	*
	* @example
	* var v = ns.minmaxabsn( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* @example
	* var v = ns.minmaxabsn( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = ns.minmaxabsn( +0.0, -0.0 );
	* // returns [ 0.0, 0.0 ]
	*/
	minmaxabsn: typeof minmaxabsn;

	/**
	* Returns the minimum and maximum values.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum and maximum values
	*
	* @example
	* var v = ns.minmaxn( 3.14, 4.2 );
	* // returns [ 3.14, 4.2 ]
	*
	* var v = ns.minmaxn( 3.14, NaN );
	* // returns [ NaN, NaN ]
	*
	* @example
	* var v = ns.minmaxn( +0.0, -0.0 );
	* // returns [ -0.0, 0.0 ]
	*/
	minmaxn: typeof minmaxn;

	/**
	* Returns the minimum value.
	*
	* ## Notes
	*
	* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, if not provided any arguments, the function returns positive infinity.
	*
	* @param x - first number
	* @param y - second number
	* @param args - numbers
	* @returns minimum value
	*
	* @example
	* var v = ns.minn( 3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.minn( 5.9, 3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.minn( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.minn( +0.0, -0.0 );
	* // returns -0.0
	*/
	minn: typeof minn;

	/**
	* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var parts = ns.modf( 3.14 );
	* // returns [ 3.0, 0.14000000000000012 ]
	*/
	modf: typeof modf;

	/**
	* Computes the nth negaFibonacci number.
	*
	* ## Notes
	*
	* -   The negaFibonacci numbers follow the recurrence relation `F_{n-2} = F_{n} - F_{n-1}` with seed values `F_0 = 0` and `F_{-1} = 1`.
	* -   If `|n|` is greater than `78`, the function returns `NaN` as larger negaFibonacci numbers cannot be accurately represented due to limitations of double-precision floating-point format.
	* -   If not provided a non-positive integer value, the function returns `NaN`.
	*
	* @param n - the negaFibonacci number to compute
	* @returns negaFibonacci number
	*
	* @example
	* var y = ns.negafibonacci( 0 );
	* // returns 0
	*
	* @example
	* var y = ns.negafibonacci( -1 );
	* // returns 1
	*
	* @example
	* var y = ns.negafibonacci( -2 );
	* // returns -1
	*
	* @example
	* var y = ns.negafibonacci( -3 );
	* // returns 2
	*
	* @example
	* var y = ns.negafibonacci( -4 );
	* // returns -3
	*
	* @example
	* var y = ns.negafibonacci( -5 );
	* // returns 5
	*
	* @example
	* var y = ns.negafibonacci( -6 );
	* // returns -8
	*
	* @example
	* var y = ns.negafibonacci( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.negafibonacci( -3.14 );
	* // returns NaN
	*/
	negafibonacci: typeof negafibonacci;

	/**
	* Computes the nth negaLucas number.
	*
	* ## Notes
	*
	* -   The negaLucas numbers follow the recurrence relation `L_{n-2} = L_{n} - L_{n-1}` with seed values `L_0 = 2` and `L_{-1} = -1`.
	* -   If `|n|` is greater than `76`, the function returns `NaN` as larger negaLucas numbers cannot be accurately represented due to limitations of double-precision floating-point format.
	* -   If not provided a non-positive integer value, the function returns `NaN`.
	*
	* @param n - the negaLucas number to compute
	* @returns negaLucas number
	*
	* @example
	* var y = ns.negalucas( 0 );
	* // returns 2
	*
	* @example
	* var y = ns.negalucas( -1 );
	* // returns -1
	*
	* @example
	* var y = ns.negalucas( -2 );
	* // returns 3
	*
	* @example
	* var y = ns.negalucas( -3 );
	* // returns -4
	*
	* @example
	* var y = ns.negalucas( -4 );
	* // returns 7
	*
	* @example
	* var y = ns.negalucas( -5 );
	* // returns -11
	*
	* @example
	* var y = ns.negalucas( -6 );
	* // returns 18
	*
	* @example
	* var y = ns.negalucas( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.negalucas( -3.14 );
	* // returns NaN
	*/
	negalucas: typeof negalucas;

	/**
	* Computes the nth non-Fibonacci number.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer value, the function returns `NaN`.
	*
	* @param n - the non-Fibonacci number to compute
	* @returns non-Fibonacci number
	*
	* @example
	* var v = ns.nonfibonacci( 1 );
	* // returns 4
	*
	* @example
	* var v = ns.nonfibonacci( 2 );
	* // returns 6
	*
	* @example
	* var v = ns.nonfibonacci( 3 );
	* // returns 7
	*
	* @example
	* var v = ns.nonfibonacci( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.nonfibonacci( 3.14 );
	* // returns NaN
	*
	* @example
	* var v = ns.nonfibonacci( -1 );
	* // returns NaN
	*/
	nonfibonacci: typeof nonfibonacci;

	/**
	* Returns the positive difference between `x` and `y` if `x > y`; otherwise, returns `0`.
	*
	* @param x - first number
	* @param y - second number
	* @returns positive difference
	*
	* @example
	* var v = ns.pdiff( 5.9, 3.14 );
	* // returns 2.76
	*
	* @example
	* var v = ns.pdiff( 3.14, 4.2 );
	* // returns 0.0
	*
	* @example
	* var v = ns.pdiff( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.pdiff( -0.0, +0.0 );
	* // returns +0.0
	*/
	pdiff: typeof pdiff;

	/**
	* Returns the positive difference between `x` and `y` if `x > y`; otherwise, returns `0`.
	*
	* @param x - first number
	* @param y - second number
	* @returns positive difference
	*
	* @example
	* var v = ns.pdifff( 5.9, 3.15 );
	* // returns 2.75
	*
	* @example
	* var v = ns.pdifff( 3.14, 4.2 );
	* // returns 0.0
	*
	* @example
	* var v = ns.pdifff( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.pdifff( -0.0, +0.0 );
	* // returns +0.0
	*/
	pdifff: typeof pdifff;

	/**
	* Evaluates the polygamma function.
	*
	* ## Notes
	*
	* -   If `n` is not a nonnegative integer, the function returns `NaN`.
	* -   If `x` is zero or a negative integer, the function returns `NaN`.
	*
	* @param n - order of derivative
	* @param x - input value
	* @returns (n+1)'th derivative
	*
	* @example
	* var v = ns.polygamma( 3, 1.2 );
	* // returns ~3.245
	*
	* @example
	* var v = ns.polygamma( 5, 1.2 );
	* // returns ~41.39
	*
	* @example
	* var v = ns.polygamma( 3, -4.9 );
	* // returns ~60014.239
	*
	* @example
	* var v = ns.polygamma( 2.5, -1.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.polygamma( -1, 5.3 );
	* // returns NaN
	*
	* @example
	* var v = ns.polygamma( 2, -2.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.polygamma( NaN, 2.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.polygamma( 1, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.polygamma( NaN, NaN );
	* // returns NaN
	*/
	polygamma: typeof polygamma;

	/**
	* Evaluates the exponential function.
	*
	* @param b - base
	* @param x - exponent
	* @returns function value
	*
	* @example
	* var v = ns.pow( 2.0, 3.0 );
	* // returns 8.0
	*
	* @example
	* var v = ns.pow( 4.0, 0.5 );
	* // returns 2.0
	*
	* @example
	* var v = ns.pow( 100.0, 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.pow( 3.141592653589793, 5.0 );
	* // returns ~306.0197
	*
	* @example
	* var v = ns.pow( 3.141592653589793, -0.2 );
	* // returns ~0.7954
	*
	* @example
	* var v = ns.pow( NaN, 3.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.pow( 5.0, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.pow( NaN, NaN );
	* // returns NaN
	*/
	pow: typeof pow;

	/**
	* Evaluates `bˣ - 1`.
	*
	* ## Notes
	*
	* -   When `b` is close to `1` and/or `x` is small, this function is more accurate than naively computing `bˣ` and subtracting `1`.
	*
	* @param b - base
	* @param x - exponent
	* @returns function value
	*
	* @example
	* var y = ns.powm1( 2.0, 3.0 );
	* // returns 7.0
	*
	* @example
	* var y = ns.powm1( 4.0, 0.5 );
	* // returns 1.0
	*
	* @example
	* var y = ns.powm1( 0.0, 100.0 );
	* // returns -1.0
	*
	* @example
	* var y = ns.powm1( 100.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.powm1( 0.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.powm1( 3.141592653589793, 5.0 );
	* // returns ~305.0197
	*
	* @example
	* var y = ns.powm1( NaN, 3.0 );
	* // returns NaN
	*
	* @example
	* var y = ns.powm1( 5.0, NaN );
	* // returns NaN
	*/
	powm1: typeof powm1;

	/**
	* Converts an angle from radians to degrees.
	*
	* @param x - angle in radians
	* @returns angle in degrees
	*
	* @example
	* var d = ns.rad2deg( 3.141592653589793/2.0 );
	* // returns 90.0
	*
	* @example
	* var d = ns.rad2deg( -3.141592653589793/4.0 );
	* // returns -45.0
	*
	* @example
	* var d = ns.rad2deg( NaN );
	* // returns NaN
	*/
	rad2deg: typeof rad2deg;

	/**
	* Converts an angle from radians to degrees (single-precision).
	*
	* @param x - angle in radians
	* @returns angle in degrees
	*
	* @example
	* var d = ns.rad2degf( 3.141592653589793 / 2.0 );
	* // returns 90.0
	*
	* @example
	* var d = ns.rad2degf( -3.141592653589793 / 4.0 );
	* // returns -45.0
	*
	* @example
	* var d = ns.rad2degf( NaN );
	* // returns NaN
	*/
	rad2degf: typeof rad2degf;

	/**
	* Evaluates the ramp function.
	*
	* ## Notes
	*
	* -   If `x >= 0`, the function returns `x`; otherwise, the function returns zero.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.ramp( 3.14 );
	* // returns 3.14
	*
	* @example
	* var v = ns.ramp( -3.14 );
	* // returns 0.0
	*
	* @example
	* var v = ns.ramp( NaN );
	* // returns NaN
	*/
	ramp: typeof ramp;

	/**
	* Evaluates the ramp function (single-precision).
	*
	* ## Notes
	*
	* -   If `x >= 0`, the function returns `x`; otherwise, the function returns zero.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.rampf( 3.14 );
	* // returns 3.14
	*
	* @example
	* var v = ns.rampf( -3.14 );
	* // returns 0.0
	*
	* @example
	* var v = ns.rampf( NaN );
	* // returns NaN
	*/
	rampf: typeof rampf;

	/**
	* Computes the reciprocal cube root of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns reciprocal cube root of `x`
	*
	* @example
	* var v = ns.rcbrt( 8.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.rcbrt( 1000.0 );
	* // returns 0.1
	*
	* @example
	* var v = ns.rcbrt( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.rcbrt( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.rcbrt( -8.0 );
	* // returns -0.5
	*
	* @example
	* var v = ns.rcbrt( NaN );
	* // returns NaN
	*/
	rcbrt: typeof rcbrt;

	/**
	* Computes the reciprocal cube root of a single-precision floating-point number.
	*
	* @param x - input value
	* @returns reciprocal cube root of `x`
	*
	* @example
	* var v = ns.rcbrtf( 8.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.rcbrtf( 1000.0 );
	* // returns ~0.1
	*
	* @example
	* var v = ns.rcbrtf( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.rcbrtf( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.rcbrtf( -8.0 );
	* // returns -0.5
	*
	* @example
	* var v = ns.rcbrtf( NaN );
	* // returns NaN
	*/
	rcbrtf: typeof rcbrtf;

	/**
	* Computes `x - nπ/2 = r`.
	*
	* ## Notes
	*
	* -   The function returns `n` and stores the remainder `r` as the two numbers `y[0]` and `y[1]`, such that `y[0] + y[1] = r`.
	* -   For input values larger than `2^20 * π/2` in magnitude, the function only returns the last three binary digits of `n` and not the full result.
	*
	* @param x - input value
	* @param y - remainder elements
	* @returns factor of `π/2`
	*
	* @example
	* var y = [ 0.0, 0.0 ];
	* var n = ns.rempio2( 128.0, y );
	* // returns 81
	*
	* var y1 = y[ 0 ];
	* // returns ~0.765
	*
	* var y2 = y[ 1 ];
	* // returns ~3.618e-17
	*
	* @example
	* var y = [ 0.0, 0.0 ];
	* var n = ns.rempio2( NaN, y );
	* // returns 0
	*
	* var y1 = y[ 0 ];
	* // returns NaN
	*
	* var y2 = y[ 1 ];
	* // returns NaN
	*/
	rempio2: typeof rempio2;

	/**
	* Evaluates the Riemann zeta function as a function of a real variable `s`.
	*
	* @param s - input value
	* @returns function value
	*
	* @example
	* var v = ns.zeta( 1.1 );
	* // returns ~10.584
	*
	* @example
	* var v = ns.zeta( -4.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.zeta( 70.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.zeta( 0.5 );
	* // returns ~-1.46
	*
	* @example
	* var v = ns.zeta( 1.0 ); // pole
	* // returns NaN
	*
	* @example
	* var v = ns.zeta( NaN );
	* // returns NaN
	*/
	zeta: typeof zeta;

	/**
	* Computes the rising factorial of `x` and `n`.
	*
	* ## Notes
	*
	* -   If provided a non-integer for `n`, the function returns `NaN`.
	*
	* @param x - first function parameter
	* @param n - second function parameter
	* @returns function value
	*
	* @example
	* var v = ns.risingFactorial( 0.9, 5 );
	* // returns ~94.766
	*
	* @example
	* var v = ns.risingFactorial( -9.0, 3 );
	* // returns -504.0
	*
	* @example
	* var v = ns.risingFactorial( 0.0, 2 );
	* // returns 0.0
	*
	* @example
	* var v = ns.risingFactorial( 3.0, -2 );
	* // returns 0.5
	*/
	risingFactorial: typeof risingFactorial;

	/**
	* Rounds a numeric value to the nearest integer.
	*
	* ## Notes
	*
	* -   Ties are rounded toward positive infinity.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.round( -4.2 );
	* // returns -4.0
	*
	* @example
	* var v = ns.round( -4.5 );
	* // returns -4.0
	*
	* @example
	* var v = ns.round( -4.6 );
	* // returns -5.0
	*
	* @example
	* var v = ns.round( 9.99999 );
	* // returns 10.0
	*
	* @example
	* var v = ns.round( 9.5 );
	* // returns 10.0
	*
	* @example
	* var v = ns.round( 9.2 );
	* // returns 9.0
	*
	* @example
	* var v = ns.round( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.round( -0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.round( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.round( -Infinity );
	* // returns -Infinity
	*
	* @example
	* var v = ns.round( NaN );
	* // returns NaN
	*/
	round: typeof round;

	/**
	* Rounds a numeric value to the nearest power of two on a linear scale.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.round2( 3.141592653589793 );
	* // returns 4.0
	*
	* @example
	* var v = ns.round2( 13.0 );
	* // returns 16.0
	*
	* @example
	* var v = ns.round2( -0.314 );
	* // returns -0.25
	*/
	round2: typeof round2;

	/**
	* Rounds a numeric value to the nearest power of `10` on a linear scale.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.round10( 3.141592653589793 );
	* // returns 1.0
	*
	* @example
	* var v = ns.round10( 13.0 );
	* // returns 10.0
	*
	* @example
	* var v = ns.round10( -0.314 );
	* // returns -0.1
	*/
	round10: typeof round10;

	/**
	* Rounds a numeric value to the nearest multiple of \\(b^n\\) on a linear scale.
	*
	* ## Notes
	*
	* -   Due to floating-point rounding error, rounding may not be exact.
	*
	* @param x - input value
	* @param n - integer power
	* @param b - positive integer base
	* @returns rounded value
	*
	* @example
	* // Round a value to 2 decimal places:
	* var v = ns.roundb( 3.141592653589793, -2, 10 );
	* // returns 3.14
	*
	* @example
	* // If n = 0 or b = 1, `ns.roundb` behaves like `round`:
	* var v = ns.roundb( 3.141592653589793, 0, 2 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest multiple of two:
	* var v = ns.roundb( 5.0, 1, 2 );
	* // returns 6.0
	*/
	roundb: typeof roundb;

	/**
	* Rounds a numeric value to the nearest multiple of `10^n`.
	*
	* ## Notes
	*
	* -   When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
	*
	* @param x - input value
	* @param n - integer power of `10`
	* @returns rounded value
	*
	* @example
	* // Round a value to 2 decimal places:
	* var v = ns.roundn( 3.141592653589793, -2 );
	* // returns 3.14
	*
	* @example
	* // If n = 0, `ns.roundn` behaves like `round`:
	* var v = ns.roundn( 3.141592653589793, 0 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest thousand:
	* var v = ns.roundn( 12368.0, 3 );
	* // returns 12000.0
	*/
	roundn: typeof roundn;

	/**
	* Rounds a numeric value to the nearest number with \\(n\\) significant figures.
	*
	* @param x - input value
	* @param n - number of significant figures
	* @param b - base (default: 10)
	* @returns rounded value
	*
	* @example
	* var v = ns.roundsd( 3.141592653589793, 3 );
	* // returns 3.14
	*
	* @example
	* var v = ns.roundsd( 3.141592653589793, 1 );
	* // returns 3.0
	*
	* @example
	* var v = ns.roundsd( 12368.0, 2 );
	* // returns 12000.0
	*
	* @example
	* var v = ns.roundsd( 0.0313, 2, 2 );
	* // returns 0.03125
	*/
	roundsd: typeof roundsd;

	/**
	* Computes the reciprocal square root of a double-precision floating-point number.
	*
	* ## Notes
	*
	* -   For `x < 0`, the reciprocal square root is not defined.
	*
	* @param x - input value
	* @returns reciprocal square root of `x`
	*
	* @example
	* var v = ns.rsqrt( 4.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.rsqrt( 100.0 );
	* // returns 0.1
	*
	* @example
	* var v = ns.rsqrt( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.rsqrt( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.rsqrt( -4.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.rsqrt( NaN );
	* // returns NaN
	*/
	rsqrt: typeof rsqrt;

	/**
	* Computes the reciprocal square root of a single-precision floating-point number.
	*
	* ## Notes
	*
	* -   For `x < 0`, the reciprocal square root is not defined.
	*
	* @param x - input value
	* @returns reciprocal square root of `x`
	*
	* @example
	* var v = ns.rsqrtf( 4.0 );
	* // returns 0.5
	*
	* @example
	* var v = ns.rsqrtf( 0.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.rsqrtf( Infinity );
	* // returns 0.0
	*
	* @example
	* var v = ns.rsqrtf( -4.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.rsqrtf( NaN );
	* // returns NaN
	*/
	rsqrtf: typeof rsqrtf;

	/**
	* Computes the secant of an angle measured in degrees.
	*
	* @param x - input value (in degrees)
	* @returns secant
	*
	* @example
	* var v = ns.secd( 30.0 );
	* // returns ~1.15
	*
	* @example
	* var v = ns.secd( 45.0 );
	* // returns ~1.41
	*
	* @example
	* var v = ns.secd( 60.0 );
	* // returns ~2.0
	*
	* @example
	* var v = ns.secd( 90.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.secd( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.secd( NaN );
	* // returns NaN
	*/
	secd: typeof secd;

	/**
	* Computes the sine and cosine integrals.
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var v = ns.sici( 3.0 );
	* // returns [ ~1.849, ~0.12 ]
	*
	* @example
	* var v = ns.sici( 0.0 );
	* // returns [ 0.0, -Infinity  ]
	*
	* @example
	* var v = ns.sici( -9.0 );
	* // returns [ ~-1.665, ~0.055 ]
	*
	* @example
	* var v = ns.sici( NaN );
	* // returns [ NaN, NaN ]
	*/
	sici: typeof sici;

	/**
	* Evaluates the signum function for a double-precision floating-point number.
	*
	* ## Notes
	*
	* -   Table of results:
	*
	*     | Value | Sign  |
	*     | ----- | ----- |
	*     | x > 0 |    +1 |
	*     | x < 0 |    -1 |
	*     |     0 |     0 |
	*     |    -0 |    -0 |
	*     |   NaN |   NaN |
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var sign = ns.signum( -5.0 );
	* // returns -1.0
	*
	* @example
	* var sign = ns.signum( 5.0 );
	* // returns 1.0
	*
	* @example
	* var sign = ns.signum( -0.0 );
	* // returns -0.0
	*
	* @example
	* var sign = ns.signum( 0.0 );
	* // returns 0.0
	*
	* @example
	* var sign = ns.signum( NaN );
	* // returns NaN
	*/
	signum: typeof signum;

	/**
	* Evaluates the signum function for a single-precision floating-point number.
	*
	* ## Notes
	*
	* -   Table of results:
	*
	*     | Value | Sign  |
	*     | ----- | ----- |
	*     | x > 0 |    +1 |
	*     | x < 0 |    -1 |
	*     |     0 |     0 |
	*     |    -0 |    -0 |
	*     |   NaN |   NaN |
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var sign = ns.signumf( -5.0 );
	* // returns -1.0
	*
	* @example
	* var sign = ns.signumf( 5.0 );
	* // returns 1.0
	*
	* @example
	* var sign = ns.signumf( -0.0 );
	* // returns -0.0
	*
	* @example
	* var sign = ns.signumf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var sign = ns.signumf( NaN );
	* // returns NaN
	*/
	signumf: typeof signumf;

	/**
	* Computes the sine of a number.
	*
	* @param x - input value (in radians)
	* @returns sine
	*
	* @example
	* var v = ns.sin( 0.0 );
	* // returns ~0.0
	*
	* @example
	* var v = ns.sin( 3.141592653589793/2.0 );
	* // returns ~1.0
	*
	* @example
	* var v = ns.sin( -3.141592653589793/6.0 );
	* // returns ~-0.5
	*
	* @example
	* var v = ns.sin( NaN );
	* // returns NaN
	*/
	sin: typeof sin;

	/**
	* Computes the normalized cardinal sine of a number.
	*
	* @param x - input value
	* @returns cardinal sine
	*
	* @example
	* var v = ns.sinc( 0.5 );
	* // returns ~0.637
	*
	* @example
	* var v = ns.sinc( -1.2 );
	* // returns ~-0.156
	*
	* @example
	* var v = ns.sinc( 0.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.sinc( NaN );
	* // returns NaN
	*/
	sinc: typeof sinc;

	/**
	* Simultaneously computes the sine and cosine of an angle measured in radians.
	*
	* @param x - input value (in radians)
	* @returns sine and cosine
	*
	* @example
	* var v = ns.sincos( 0.0 );
	* // returns [ ~0.0, ~1.0 ]
	*
	* @example
	* var v = ns.sincos( 3.141592653589793/2.0 );
	* // returns [ ~1.0, ~0.0 ]
	*
	* @example
	* var v = ns.sincos( -3.141592653589793/6.0 );
	* // returns [ ~-0.5, ~0.866 ]
	*
	* @example
	* var v = ns.sincos( NaN );
	* // returns [ NaN, NaN ]
	*/
	sincos: typeof sincos;

	/**
	* Simultaneously computes the sine and cosine of a number times π.
	*
	* @param x - input value
	* @returns two-element array containing sin(πx) and cos(πx)
	*
	* @example
	* var v = ns.sincospi( 0.0 );
	* // returns [ 0.0, 1.0 ]
	*
	* @example
	* var v = ns.sincospi( 0.5 );
	* // returns [ 1.0, 0.0 ]
	*
	* @example
	* var v = ns.sincospi( 0.1 );
	* // returns [ ~0.309, ~0.951 ]
	*
	* @example
	* var v = ns.sincospi( NaN );
	* // returns [ NaN, NaN ]
	*/
	sincospi: typeof sincospi;

	/**
	* Computes the hyperbolic sine of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic sine
	*
	* @example
	* var v = ns.sinh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.sinh( 2.0 );
	* // returns ~3.627
	*
	* @example
	* var v = ns.sinh( -2.0 );
	* // returns ~-3.627
	*
	* @example
	* var v = ns.sinh( NaN );
	* // returns NaN
	*/
	sinh: typeof sinh;

	/**
	* Computes the value of `sin(πx)`.
	*
	* ## Notes
	*
	* -   The function computes `sin(πx)` more accurately than the obvious approach, especially for large `x`.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var y = ns.sinpi( 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = ns.sinpi( 0.5 );
	* // returns 1.0
	*
	* @example
	* var y = ns.sinpi( 0.9 );
	* // returns ~0.309
	*
	* @example
	* var y = ns.sinpi( NaN );
	* // returns NaN
	*/
	sinpi: typeof sinpi;

	/**
	* Evaluates Spence's function, which is also known as the dilogarithm.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.spence( 3.0 );
	* // returns ~-1.437
	*
	* @example
	* var v = ns.spence( 0.0 );
	* // returns ~1.645
	*
	* @example
	* var v = ns.spence( -9.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.spence( NaN );
	* // returns NaN
	*/
	spence: typeof spence;

	/**
	* Computes the principal square root of a double-precision floating-point number.
	*
	* ## Notes
	*
	* -   For `x < 0`, the principal square root is not defined.
	*
	* @param x - input value
	* @returns square root of `x`
	*
	* @example
	* var v = ns.sqrt( 4.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.sqrt( 9.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.sqrt( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.sqrt( -4.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.sqrt( NaN );
	* // returns NaN
	*/
	sqrt: typeof sqrt;

	/**
	* Computes the value of `sqrt(1+x)-1`.
	*
	* @param x - input value
	* @returns square root of `1+x` minus one
	*
	* @example
	* var v = ns.sqrt1pm1( 3.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.sqrt1pm1( 0.5 );
	* // returns ~0.225
	*
	* @example
	* var v = ns.sqrt1pm1( 0.02 );
	* // returns ~0.01
	*
	* @example
	* var v = ns.sqrt1pm1( -0.5 );
	* // returns ~-0.293
	*
	* @example
	* var v = ns.sqrt1pm1( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.sqrt1pm1( NaN );
	* // returns NaN
	*/
	sqrt1pm1: typeof sqrt1pm1;

	/**
	* Computes the principal square root of a single-precision floating-point number.
	*
	* ## Notes
	*
	* -   For `x < 0`, the principal square root is not defined.
	*
	* @param x - input value
	* @returns square root of `x`
	*
	* @example
	* var v = ns.sqrtf( 4.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.sqrtf( 9.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.sqrtf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.sqrtf( -4.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.sqrtf( NaN );
	* // returns NaN
	*/
	sqrtf: typeof sqrtf;

	/**
	* Computes the principal square root of the product of π and a positive double-precision floating-point number.
	*
	* ## Notes
	*
	* -   For `x < 0`, the principal square root is not defined.
	*
	* @param x - input value
	* @returns result
	*
	* @example
	* var v = ns.sqrtpi( 4.0 );
	* // returns ~3.5449
	*
	* @example
	* var v = ns.sqrtpi( 10.0 );
	* // returns ~5.60499
	*
	* @example
	* var v = ns.sqrtpi( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.sqrtpi( -4.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.sqrtpi( NaN );
	* // returns NaN
	*/
	sqrtpi: typeof sqrtpi;

	/**
	* Evaluates the tangent of a number.
	*
	* @param x - input value (in radians)
	* @returns tangent
	*
	* @example
	* var v = ns.tan( 0.0 );
	* // returns ~0.0
	*
	* @example
	* var v = ns.tan( -3.141592653589793/4.0 );
	* // returns ~-1.0
	*
	* @example
	* var v = ns.tan( 3.141592653589793/4.0 );
	* // returns ~1.0
	*
	* @example
	* var v = ns.tan( NaN );
	* // returns NaN
	*/
	tan: typeof tan;

	/**
	* Computes the tangent of an angle measured in degrees
	*
	* @param x - input value (in degrees)
	* @returns tangent
	*
	* @example
	* var v = ns.tand( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.tand( 60.0 );
	* // returns ~1.73
	*
	* @example
	* var v = ns.tand( 90.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.tand( NaN );
	* // returns NaN
	*/
	tand: typeof tand;

	/**
	* Computes the hyperbolic tangent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns hyperbolic tangent
	*
	* @example
	* var v = ns.tanh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.tanh( 2.0 );
	* // returns ~0.964
	*
	* @example
	* var v = ns.tanh( -2.0 );
	* // returns ~-0.964
	*
	* @example
	* var v = ns.tanh( NaN );
	* // returns NaN
	*/
	tanh: typeof tanh;

	/**
	* Computes the nth Tribonacci number.
	*
	* ## Notes
	*
	* -   If `n` is greater than `63`, the function returns `NaN`, as larger Tribonacci numbers cannot be accurately represented due to limitations of double-precision floating-point format.
	* -   If not provided a nonnegative integer value, the function returns `NaN`.
	*
	* @param n - the Tribonacci number to compute
	* @returns Tribonacci number
	*
	* @example
	* var y = ns.tribonacci( 0 );
	* // returns 0
	*
	* @example
	* var y = ns.tribonacci( 1 );
	* // returns 0
	*
	* @example
	* var y = ns.tribonacci( 2 );
	* // returns 1
	*
	* @example
	* var y = ns.tribonacci( 3 );
	* // returns 1
	*
	* @example
	* var y = ns.tribonacci( 4 );
	* // returns 2
	*
	* @example
	* var y = ns.tribonacci( 5 );
	* // returns 4
	*
	* @example
	* var y = ns.tribonacci( 6 );
	* // returns 7
	*
	* @example
	* var y = ns.tribonacci( NaN );
	* // returns NaN
	*
	* @example
	* var y = ns.tribonacci( 3.14 );
	* // returns NaN
	*
	* @example
	* var y = ns.tribonacci( -1.0 );
	* // returns NaN
	*/
	tribonacci: typeof tribonacci;

	/**
	* Evaluates the trigamma function.
	*
	* @param x - input value
	* @returns function value
	*
	* @example
	* var v = ns.trigamma( -2.5 );
	* // returns ~9.539
	*
	* @example
	* var v = ns.trigamma( 1.0 );
	* // returns ~1.645
	*
	* @example
	* var v = ns.trigamma( 10.0 );
	* // returns ~0.105
	*
	* @example
	* var v = ns.trigamma( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.trigamma( -1.0 );
	* // returns NaN
	*/
	trigamma: typeof trigamma;

	/**
	* Rounds a double-precision floating-point number toward zero.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.trunc( -4.2 );
	* // returns -4.0
	*
	* @example
	* var v = ns.trunc( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = ns.trunc( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.trunc( -0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.trunc( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.trunc( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.trunc( -Infinity );
	* // returns -Infinity
	*/
	trunc: typeof trunc;

	/**
	* Rounds a numeric value to the nearest power of two toward zero.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.trunc2( 3.141592653589793 );
	* // returns 2.0
	*
	* @example
	* var v = ns.trunc2( 13.0 );
	* // returns 8.0
	*
	* @example
	* var v = ns.trunc2( -0.314 );
	* // returns -0.25
	*/
	trunc2: typeof trunc2;

	/**
	* Rounds a numeric value to the nearest power of `10` toward zero.
	*
	* ## Notes
	*
	* -   The function may not return accurate results for subnormals due to a general loss in precision.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.trunc10( 3.141592653589793 );
	* // returns 1.0
	*
	* @example
	* var v = ns.trunc10( 13.0 );
	* // returns 10.0
	*
	* @example
	* var v = ns.trunc10( -0.314 );
	* // returns -0.1
	*/
	trunc10: typeof trunc10;

	/**
	* Rounds a numeric value to the nearest multiple of \\(b^n\\) toward zero.
	*
	* ## Notes
	*
	* -   Due to floating-point rounding error, rounding may not be exact.
	*
	* @param x - input value
	* @param n - integer power
	* @param b - base
	* @returns rounded value
	*
	* @example
	* // Round a value to 4 decimal places:
	* var v = ns.truncb( 3.141592653589793, -4, 10 );
	* // returns 3.1415
	*
	* @example
	* // If n = 0 or b = 1, `ns.truncb` behaves like `trunc`:
	* var v = ns.truncb( 3.141592653589793, 0, 2 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest multiple of two toward zero:
	* var v = ns.truncb( 5.0, 1, 2 );
	* // returns 4.0
	*/
	truncb: typeof truncb;

	/**
	* Rounds a single-precision floating-point number toward zero.
	*
	* @param x - input value
	* @returns rounded value
	*
	* @example
	* var v = ns.truncf( -4.2 );
	* // returns -4.0
	*
	* @example
	* var v = ns.truncf( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = ns.truncf( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.truncf( -0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.truncf( NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.truncf( Infinity );
	* // returns Infinity
	*
	* @example
	* var v = ns.truncf( -Infinity );
	* // returns -Infinity
	*/
	truncf: typeof truncf;

	/**
	* Rounds a numeric value to the nearest multiple of `10^n` toward zero.
	*
	* ## Notes
	*
	* -   When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
	*
	* @param x - input value
	* @param n - integer power of `10`
	* @returns rounded value
	*
	* @example
	* // Round a value to 4 decimal places:
	* var v = ns.truncn( 3.141592653589793, -4 );
	* // returns 3.1415
	*
	* @example
	* // If n = 0, `ns.truncn` behaves like `trunc`:
	* var v = ns.truncn( 3.141592653589793, 0 );
	* // returns 3.0
	*
	* @example
	* // Round a value to the nearest thousand:
	* var v = ns.truncn( 12368.0, 3 );
	* // returns 12000.0
	*/
	truncn: typeof truncn;

	/**
	* Rounds a numeric value to the nearest number toward zero with \\(n\\) significant figures.
	*
	* @param x - input value
	* @param n - number of significant figures
	* @param b - integer base
	* @returns rounded value
	*
	* @example
	* var v = ns.truncsd( 3.141592653589793, 5, 10 );
	* // returns 3.1415
	*
	* @example
	* var v = ns.truncsd( 3.141592653589793, 1, 10 );
	* // returns 3.0
	*
	* @example
	* var v = ns.truncsd( 12368.0, 2, 10 );
	* // returns 12000.0
	*
	* @example
	* var v = ns.truncsd( 0.0313, 2, 2 );
	* // returns 0.03125
	*/
	truncsd: typeof truncsd;

	/**
	* Computes the versed cosine.
	*
	* ## Notes
	*
	* -   The versed cosine is defined as `1 + cos(x)`.
	*
	* @param x - input value (in radians)
	* @returns versed cosine
	*
	* @example
	* var v = ns.vercos( 0.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.vercos( 3.141592653589793/2.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.vercos( -3.141592653589793/6.0 );
	* // returns ~1.8660
	*
	* @example
	* var v = ns.vercos( NaN );
	* // returns NaN
	*/
	vercos: typeof vercos;

	/**
	* Computes the versed sine.
	*
	* ## Notes
	*
	* -   The versed sine is defined as `1 - cos(x)`.
	*
	* @param x - input value (in radians)
	* @returns versed sine
	*
	* @example
	* var v = ns.versin( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.versin( 3.141592653589793/2.0 );
	* // returns ~1.0
	*
	* @example
	* var v = ns.versin( -3.141592653589793/6.0 );
	* // returns ~0.13397
	*
	* @example
	* var v = ns.versin( NaN );
	* // returns NaN
	*/
	versin: typeof versin;

	/**
	* Wraps a value on the half-open interval `[min,max)`.
	*
	* @param v - input value
	* @param min - minimum value
	* @param max - maximum value
	* @returns wrapped value
	*
	* @example
	* var v = ns.wrap( 3.14, 0.0, 5.0 );
	* // returns 3.14
	*
	* v = ns.wrap( -3.14, 0.0, 5.0 );
	* // returns ~1.86
	*
	* v = ns.wrap( 10.0, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.wrap( -0.0, 0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.wrap( 0.0, -0.0, 5.0 );
	* // returns 0.0
	*
	* v = ns.wrap( NaN, 0.0, 5.0 );
	* // returns NaN
	*
	* v = ns.wrap( 0.0, NaN, 5.0 );
	* // returns NaN
	*
	* v = ns.wrap( 3.14, 0.0, NaN );
	* // returns NaN
	*
	* v = ns.wrap( 3.14, 5.0, 0.0 );
	* // returns NaN
	*/
	wrap: typeof wrap;

	/**
	* Computes `x * ln(y+1)` so that the result is `0` if `x = 0`.
	*
	* @param x - input value
	* @param y - input value
	* @returns function value
	*
	* @example
	* var out = ns.xlog1py( 3.0, 2.0 );
	* // returns ~3.296
	*
	* @example
	* var out = ns.xlog1py( 1.5, 5.9 );
	* // returns ~2.897
	*
	* @example
	* var out = ns.xlog1py( 0.9, 1.0 );
	* // returns ~0.624
	*
	* @example
	* var out = ns.xlog1py( 1.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var out = ns.xlog1py( 0.0, -2.0 );
	* // returns 0.0
	*
	* @example
	* var out = ns.xlog1py( 1.5, NaN );
	* // returns NaN
	*
	* @example
	* var out = ns.xlog1py( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var out = ns.xlog1py( NaN, 2.3 );
	* // returns NaN
	*/
	xlog1py: typeof xlog1py;

	/**
	* Computes `x * ln(y)` so that the result is `0` if `x = 0`.
	*
	* @param x - input value
	* @param y - input value
	* @returns function value
	*
	* @example
	* var out = ns.xlogy( 3.0, 2.0 );
	* // returns ~2.079
	*
	* @example
	* var out = ns.xlogy( 1.5, 5.9 );
	* // returns ~2.662
	*
	* @example
	* var out = ns.xlogy( 0.9, 1.0 );
	* // returns 0.0
	*
	* @example
	* var out = ns.xlogy( 0.0, -2.0 );
	* // returns 0.0
	*
	* @example
	* var out = ns.xlogy( 1.5, NaN );
	* // returns NaN
	*
	* @example
	* var out = ns.xlogy( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var out = ns.xlogy( NaN, 2.3 );
	* // returns NaN
	*/
	xlogy: typeof xlogy;
}

/**
* Base (i.e., lower-level) special math functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
