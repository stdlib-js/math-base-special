/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace special
*/
var special = {};

/**
* @name abs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs}
*/
setReadOnly( special, 'abs', require( '@stdlib/math-base-special-abs' ) );

/**
* @name abs2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs2}
*/
setReadOnly( special, 'abs2', require( '@stdlib/math-base-special-abs2' ) );

/**
* @name abs2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs2f}
*/
setReadOnly( special, 'abs2f', require( '@stdlib/math-base-special-abs2f' ) );

/**
* @name absf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/absf}
*/
setReadOnly( special, 'absf', require( '@stdlib/math-base-special-absf' ) );

/**
* @name acos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acos}
*/
setReadOnly( special, 'acos', require( '@stdlib/math-base-special-acos' ) );

/**
* @name acosd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosd}
*/
setReadOnly( special, 'acosd', require( '@stdlib/math-base-special-acosd' ) );

/**
* @name acosdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosdf}
*/
setReadOnly( special, 'acosdf', require( '@stdlib/math-base-special-acosdf' ) );

/**
* @name acosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosf}
*/
setReadOnly( special, 'acosf', require( '@stdlib/math-base-special-acosf' ) );

/**
* @name acosh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosh}
*/
setReadOnly( special, 'acosh', require( '@stdlib/math-base-special-acosh' ) );

/**
* @name acot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acot}
*/
setReadOnly( special, 'acot', require( '@stdlib/math-base-special-acot' ) );

/**
* @name acotd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotd}
*/
setReadOnly( special, 'acotd', require( '@stdlib/math-base-special-acotd' ) );

/**
* @name acotdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotdf}
*/
setReadOnly( special, 'acotdf', require( '@stdlib/math-base-special-acotdf' ) );

/**
* @name acotf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotf}
*/
setReadOnly( special, 'acotf', require( '@stdlib/math-base-special-acotf' ) );

/**
* @name acoth
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acoth}
*/
setReadOnly( special, 'acoth', require( '@stdlib/math-base-special-acoth' ) );

/**
* @name acovercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acovercos}
*/
setReadOnly( special, 'acovercos', require( '@stdlib/math-base-special-acovercos' ) );

/**
* @name acoversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acoversin}
*/
setReadOnly( special, 'acoversin', require( '@stdlib/math-base-special-acoversin' ) );

/**
* @name acsc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acsc}
*/
setReadOnly( special, 'acsc', require( '@stdlib/math-base-special-acsc' ) );

/**
* @name acscd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscd}
*/
setReadOnly( special, 'acscd', require( '@stdlib/math-base-special-acscd' ) );

/**
* @name acscdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscdf}
*/
setReadOnly( special, 'acscdf', require( '@stdlib/math-base-special-acscdf' ) );

/**
* @name acscf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscf}
*/
setReadOnly( special, 'acscf', require( '@stdlib/math-base-special-acscf' ) );

/**
* @name acsch
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acsch}
*/
setReadOnly( special, 'acsch', require( '@stdlib/math-base-special-acsch' ) );

/**
* @name ahavercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahavercos}
*/
setReadOnly( special, 'ahavercos', require( '@stdlib/math-base-special-ahavercos' ) );

/**
* @name ahaversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahaversin}
*/
setReadOnly( special, 'ahaversin', require( '@stdlib/math-base-special-ahaversin' ) );

/**
* @name asec
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asec}
*/
setReadOnly( special, 'asec', require( '@stdlib/math-base-special-asec' ) );

/**
* @name asecd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecd}
*/
setReadOnly( special, 'asecd', require( '@stdlib/math-base-special-asecd' ) );

/**
* @name asecdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecdf}
*/
setReadOnly( special, 'asecdf', require( '@stdlib/math-base-special-asecdf' ) );

/**
* @name asecf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecf}
*/
setReadOnly( special, 'asecf', require( '@stdlib/math-base-special-asecf' ) );

/**
* @name asech
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asech}
*/
setReadOnly( special, 'asech', require( '@stdlib/math-base-special-asech' ) );

/**
* @name asin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asin}
*/
setReadOnly( special, 'asin', require( '@stdlib/math-base-special-asin' ) );

/**
* @name asind
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asind}
*/
setReadOnly( special, 'asind', require( '@stdlib/math-base-special-asind' ) );

/**
* @name asindf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asindf}
*/
setReadOnly( special, 'asindf', require( '@stdlib/math-base-special-asindf' ) );

/**
* @name asinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asinf}
*/
setReadOnly( special, 'asinf', require( '@stdlib/math-base-special-asinf' ) );

/**
* @name asinh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asinh}
*/
setReadOnly( special, 'asinh', require( '@stdlib/math-base-special-asinh' ) );

/**
* @name atan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan}
*/
setReadOnly( special, 'atan', require( '@stdlib/math-base-special-atan' ) );

/**
* @name atan2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan2}
*/
setReadOnly( special, 'atan2', require( '@stdlib/math-base-special-atan2' ) );

/**
* @name atand
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atand}
*/
setReadOnly( special, 'atand', require( '@stdlib/math-base-special-atand' ) );

/**
* @name atanf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atanf}
*/
setReadOnly( special, 'atanf', require( '@stdlib/math-base-special-atanf' ) );

/**
* @name atanh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atanh}
*/
setReadOnly( special, 'atanh', require( '@stdlib/math-base-special-atanh' ) );

/**
* @name avercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/avercos}
*/
setReadOnly( special, 'avercos', require( '@stdlib/math-base-special-avercos' ) );

/**
* @name aversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/aversin}
*/
setReadOnly( special, 'aversin', require( '@stdlib/math-base-special-aversin' ) );

/**
* @name bernoulli
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bernoulli}
*/
setReadOnly( special, 'bernoulli', require( '@stdlib/math-base-special-bernoulli' ) );

/**
* @name besselj0
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/besselj0}
*/
setReadOnly( special, 'besselj0', require( '@stdlib/math-base-special-besselj0' ) );

/**
* @name besselj1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/besselj1}
*/
setReadOnly( special, 'besselj1', require( '@stdlib/math-base-special-besselj1' ) );

/**
* @name bessely0
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bessely0}
*/
setReadOnly( special, 'bessely0', require( '@stdlib/math-base-special-bessely0' ) );

/**
* @name bessely1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bessely1}
*/
setReadOnly( special, 'bessely1', require( '@stdlib/math-base-special-bessely1' ) );

/**
* @name beta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/beta}
*/
setReadOnly( special, 'beta', require( '@stdlib/math-base-special-beta' ) );

/**
* @name betainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betainc}
*/
setReadOnly( special, 'betainc', require( '@stdlib/math-base-special-betainc' ) );

/**
* @name betaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betaincinv}
*/
setReadOnly( special, 'betaincinv', require( '@stdlib/math-base-special-betaincinv' ) );

/**
* @name betaln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betaln}
*/
setReadOnly( special, 'betaln', require( '@stdlib/math-base-special-betaln' ) );

/**
* @name binet
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binet}
*/
setReadOnly( special, 'binet', require( '@stdlib/math-base-special-binet' ) );

/**
* @name binomcoef
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binomcoef}
*/
setReadOnly( special, 'binomcoef', require( '@stdlib/math-base-special-binomcoef' ) );

/**
* @name binomcoefln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binomcoefln}
*/
setReadOnly( special, 'binomcoefln', require( '@stdlib/math-base-special-binomcoefln' ) );

/**
* @name boxcox
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox}
*/
setReadOnly( special, 'boxcox', require( '@stdlib/math-base-special-boxcox' ) );

/**
* @name boxcox1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox1p}
*/
setReadOnly( special, 'boxcox1p', require( '@stdlib/math-base-special-boxcox1p' ) );

/**
* @name boxcox1pinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox1pinv}
*/
setReadOnly( special, 'boxcox1pinv', require( '@stdlib/math-base-special-boxcox1pinv' ) );

/**
* @name boxcoxinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcoxinv}
*/
setReadOnly( special, 'boxcoxinv', require( '@stdlib/math-base-special-boxcoxinv' ) );

/**
* @name cabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs}
*/
setReadOnly( special, 'cabs', require( '@stdlib/math-base-special-cabs' ) );

/**
* @name cabs2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs2}
*/
setReadOnly( special, 'cabs2', require( '@stdlib/math-base-special-cabs2' ) );

/**
* @name cabs2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs2f}
*/
setReadOnly( special, 'cabs2f', require( '@stdlib/math-base-special-cabs2f' ) );

/**
* @name cabsf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabsf}
*/
setReadOnly( special, 'cabsf', require( '@stdlib/math-base-special-cabsf' ) );

/**
* @name cbrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cbrt}
*/
setReadOnly( special, 'cbrt', require( '@stdlib/math-base-special-cbrt' ) );

/**
* @name cbrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cbrtf}
*/
setReadOnly( special, 'cbrtf', require( '@stdlib/math-base-special-cbrtf' ) );

/**
* @name cceil
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceil}
*/
setReadOnly( special, 'cceil', require( '@stdlib/math-base-special-cceil' ) );

/**
* @name cceilf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceilf}
*/
setReadOnly( special, 'cceilf', require( '@stdlib/math-base-special-cceilf' ) );

/**
* @name cceiln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceiln}
*/
setReadOnly( special, 'cceiln', require( '@stdlib/math-base-special-cceiln' ) );

/**
* @name ccis
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ccis}
*/
setReadOnly( special, 'ccis', require( '@stdlib/math-base-special-ccis' ) );

/**
* @name ceil
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil}
*/
setReadOnly( special, 'ceil', require( '@stdlib/math-base-special-ceil' ) );

/**
* @name ceil2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil2}
*/
setReadOnly( special, 'ceil2', require( '@stdlib/math-base-special-ceil2' ) );

/**
* @name ceil10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil10}
*/
setReadOnly( special, 'ceil10', require( '@stdlib/math-base-special-ceil10' ) );

/**
* @name ceilb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilb}
*/
setReadOnly( special, 'ceilb', require( '@stdlib/math-base-special-ceilb' ) );

/**
* @name ceilf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilf}
*/
setReadOnly( special, 'ceilf', require( '@stdlib/math-base-special-ceilf' ) );

/**
* @name ceiln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceiln}
*/
setReadOnly( special, 'ceiln', require( '@stdlib/math-base-special-ceiln' ) );

/**
* @name ceilsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilsd}
*/
setReadOnly( special, 'ceilsd', require( '@stdlib/math-base-special-ceilsd' ) );

/**
* @name cexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cexp}
*/
setReadOnly( special, 'cexp', require( '@stdlib/math-base-special-cexp' ) );

/**
* @name cflipsign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cflipsign}
*/
setReadOnly( special, 'cflipsign', require( '@stdlib/math-base-special-cflipsign' ) );

/**
* @name cflipsignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cflipsignf}
*/
setReadOnly( special, 'cflipsignf', require( '@stdlib/math-base-special-cflipsignf' ) );

/**
* @name cfloor
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cfloor}
*/
setReadOnly( special, 'cfloor', require( '@stdlib/math-base-special-cfloor' ) );

/**
* @name cfloorn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cfloorn}
*/
setReadOnly( special, 'cfloorn', require( '@stdlib/math-base-special-cfloorn' ) );

/**
* @name cinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cinv}
*/
setReadOnly( special, 'cinv', require( '@stdlib/math-base-special-cinv' ) );

/**
* @name cinvf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cinvf}
*/
setReadOnly( special, 'cinvf', require( '@stdlib/math-base-special-cinvf' ) );

/**
* @name clamp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/clamp}
*/
setReadOnly( special, 'clamp', require( '@stdlib/math-base-special-clamp' ) );

/**
* @name clampf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/clampf}
*/
setReadOnly( special, 'clampf', require( '@stdlib/math-base-special-clampf' ) );

/**
* @name copysign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/copysign}
*/
setReadOnly( special, 'copysign', require( '@stdlib/math-base-special-copysign' ) );

/**
* @name copysignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/copysignf}
*/
setReadOnly( special, 'copysignf', require( '@stdlib/math-base-special-copysignf' ) );

/**
* @name cos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cos}
*/
setReadOnly( special, 'cos', require( '@stdlib/math-base-special-cos' ) );

/**
* @name cosd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosd}
*/
setReadOnly( special, 'cosd', require( '@stdlib/math-base-special-cosd' ) );

/**
* @name cosh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosh}
*/
setReadOnly( special, 'cosh', require( '@stdlib/math-base-special-cosh' ) );

/**
* @name cosm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosm1}
*/
setReadOnly( special, 'cosm1', require( '@stdlib/math-base-special-cosm1' ) );

/**
* @name cospi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cospi}
*/
setReadOnly( special, 'cospi', require( '@stdlib/math-base-special-cospi' ) );

/**
* @name cot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cot}
*/
setReadOnly( special, 'cot', require( '@stdlib/math-base-special-cot' ) );

/**
* @name cotd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cotd}
*/
setReadOnly( special, 'cotd', require( '@stdlib/math-base-special-cotd' ) );

/**
* @name coth
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/coth}
*/
setReadOnly( special, 'coth', require( '@stdlib/math-base-special-coth' ) );

/**
* @name covercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/covercos}
*/
setReadOnly( special, 'covercos', require( '@stdlib/math-base-special-covercos' ) );

/**
* @name coversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/coversin}
*/
setReadOnly( special, 'coversin', require( '@stdlib/math-base-special-coversin' ) );

/**
* @name cphase
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cphase}
*/
setReadOnly( special, 'cphase', require( '@stdlib/math-base-special-cphase' ) );

/**
* @name cpolar
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cpolar}
*/
setReadOnly( special, 'cpolar', require( '@stdlib/math-base-special-cpolar' ) );

/**
* @name cround
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cround}
*/
setReadOnly( special, 'cround', require( '@stdlib/math-base-special-cround' ) );

/**
* @name croundn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/croundn}
*/
setReadOnly( special, 'croundn', require( '@stdlib/math-base-special-croundn' ) );

/**
* @name csc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csc}
*/
setReadOnly( special, 'csc', require( '@stdlib/math-base-special-csc' ) );

/**
* @name cscd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cscd}
*/
setReadOnly( special, 'cscd', require( '@stdlib/math-base-special-cscd' ) );

/**
* @name csch
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csch}
*/
setReadOnly( special, 'csch', require( '@stdlib/math-base-special-csch' ) );

/**
* @name csignum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csignum}
*/
setReadOnly( special, 'csignum', require( '@stdlib/math-base-special-csignum' ) );

/**
* @name deg2rad
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/deg2rad}
*/
setReadOnly( special, 'deg2rad', require( '@stdlib/math-base-special-deg2rad' ) );

/**
* @name deg2radf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/deg2radf}
*/
setReadOnly( special, 'deg2radf', require( '@stdlib/math-base-special-deg2radf' ) );

/**
* @name digamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/digamma}
*/
setReadOnly( special, 'digamma', require( '@stdlib/math-base-special-digamma' ) );

/**
* @name diracDelta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/dirac-delta}
*/
setReadOnly( special, 'diracDelta', require( '@stdlib/math-base-special-dirac-delta' ) );

/**
* @name eta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/dirichlet-eta}
*/
setReadOnly( special, 'eta', require( '@stdlib/math-base-special-dirichlet-eta' ) );

/**
* @name ellipe
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipe}
*/
setReadOnly( special, 'ellipe', require( '@stdlib/math-base-special-ellipe' ) );

/**
* @name ellipj
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipj}
*/
setReadOnly( special, 'ellipj', require( '@stdlib/math-base-special-ellipj' ) );

/**
* @name ellipk
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipk}
*/
setReadOnly( special, 'ellipk', require( '@stdlib/math-base-special-ellipk' ) );

/**
* @name erf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erf}
*/
setReadOnly( special, 'erf', require( '@stdlib/math-base-special-erf' ) );

/**
* @name erfc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfc}
*/
setReadOnly( special, 'erfc', require( '@stdlib/math-base-special-erfc' ) );

/**
* @name erfcinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfcinv}
*/
setReadOnly( special, 'erfcinv', require( '@stdlib/math-base-special-erfcinv' ) );

/**
* @name erfcx
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfcx}
*/
setReadOnly( special, 'erfcx', require( '@stdlib/math-base-special-erfcx' ) );

/**
* @name erfinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfinv}
*/
setReadOnly( special, 'erfinv', require( '@stdlib/math-base-special-erfinv' ) );

/**
* @name exp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp}
*/
setReadOnly( special, 'exp', require( '@stdlib/math-base-special-exp' ) );

/**
* @name exp2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp2}
*/
setReadOnly( special, 'exp2', require( '@stdlib/math-base-special-exp2' ) );

/**
* @name exp10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp10}
*/
setReadOnly( special, 'exp10', require( '@stdlib/math-base-special-exp10' ) );

/**
* @name expit
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expit}
*/
setReadOnly( special, 'expit', require( '@stdlib/math-base-special-expit' ) );

/**
* @name expm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expm1}
*/
setReadOnly( special, 'expm1', require( '@stdlib/math-base-special-expm1' ) );

/**
* @name expm1rel
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expm1rel}
*/
setReadOnly( special, 'expm1rel', require( '@stdlib/math-base-special-expm1rel' ) );

/**
* @name factorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorial}
*/
setReadOnly( special, 'factorial', require( '@stdlib/math-base-special-factorial' ) );

/**
* @name factorial2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorial2}
*/
setReadOnly( special, 'factorial2', require( '@stdlib/math-base-special-factorial2' ) );

/**
* @name factorialln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorialln}
*/
setReadOnly( special, 'factorialln', require( '@stdlib/math-base-special-factorialln' ) );

/**
* @name fallingFactorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/falling-factorial}
*/
setReadOnly( special, 'fallingFactorial', require( '@stdlib/math-base-special-falling-factorial' ) );

/**
* @name fast
* @memberof special
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/base/special/fast}
*/
setReadOnly( special, 'fast', require( '@stdlib/math-base-special-fast' ) );

/**
* @name fibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonacci}
*/
setReadOnly( special, 'fibonacci', require( '@stdlib/math-base-special-fibonacci' ) );

/**
* @name fibonacciIndex
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonacci-index}
*/
setReadOnly( special, 'fibonacciIndex', require( '@stdlib/math-base-special-fibonacci-index' ) );

/**
* @name flipsign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/flipsign}
*/
setReadOnly( special, 'flipsign', require( '@stdlib/math-base-special-flipsign' ) );

/**
* @name flipsignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/flipsignf}
*/
setReadOnly( special, 'flipsignf', require( '@stdlib/math-base-special-flipsignf' ) );

/**
* @name floor
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor}
*/
setReadOnly( special, 'floor', require( '@stdlib/math-base-special-floor' ) );

/**
* @name floor2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor2}
*/
setReadOnly( special, 'floor2', require( '@stdlib/math-base-special-floor2' ) );

/**
* @name floor10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor10}
*/
setReadOnly( special, 'floor10', require( '@stdlib/math-base-special-floor10' ) );

/**
* @name floorb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorb}
*/
setReadOnly( special, 'floorb', require( '@stdlib/math-base-special-floorb' ) );

/**
* @name floorf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorf}
*/
setReadOnly( special, 'floorf', require( '@stdlib/math-base-special-floorf' ) );

/**
* @name floorn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorn}
*/
setReadOnly( special, 'floorn', require( '@stdlib/math-base-special-floorn' ) );

/**
* @name floorsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorsd}
*/
setReadOnly( special, 'floorsd', require( '@stdlib/math-base-special-floorsd' ) );

/**
* @name fresnel
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnel}
*/
setReadOnly( special, 'fresnel', require( '@stdlib/math-base-special-fresnel' ) );

/**
* @name fresnelc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnelc}
*/
setReadOnly( special, 'fresnelc', require( '@stdlib/math-base-special-fresnelc' ) );

/**
* @name fresnels
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnels}
*/
setReadOnly( special, 'fresnels', require( '@stdlib/math-base-special-fresnels' ) );

/**
* @name frexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/frexp}
*/
setReadOnly( special, 'frexp', require( '@stdlib/math-base-special-frexp' ) );

/**
* @name gamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma}
*/
setReadOnly( special, 'gamma', require( '@stdlib/math-base-special-gamma' ) );

/**
* @name gammaDeltaRatio
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-delta-ratio}
*/
setReadOnly( special, 'gammaDeltaRatio', require( '@stdlib/math-base-special-gamma-delta-ratio' ) );

/**
* @name gammaLanczosSum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-lanczos-sum}
*/
setReadOnly( special, 'gammaLanczosSum', require( '@stdlib/math-base-special-gamma-lanczos-sum' ) );

/**
* @name gammaLanczosSumExpGScaled
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled}
*/
setReadOnly( special, 'gammaLanczosSumExpGScaled', require( '@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled' ) );

/**
* @name gamma1pm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma1pm1}
*/
setReadOnly( special, 'gamma1pm1', require( '@stdlib/math-base-special-gamma1pm1' ) );

/**
* @name gammainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammainc}
*/
setReadOnly( special, 'gammainc', require( '@stdlib/math-base-special-gammainc' ) );

/**
* @name gammaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammaincinv}
*/
setReadOnly( special, 'gammaincinv', require( '@stdlib/math-base-special-gammaincinv' ) );

/**
* @name gammaln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammaln}
*/
setReadOnly( special, 'gammaln', require( '@stdlib/math-base-special-gammaln' ) );

/**
* @name gammasgn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammasgn}
*/
setReadOnly( special, 'gammasgn', require( '@stdlib/math-base-special-gammasgn' ) );

/**
* @name gcd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gcd}
*/
setReadOnly( special, 'gcd', require( '@stdlib/math-base-special-gcd' ) );

/**
* @name hacovercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacovercos}
*/
setReadOnly( special, 'hacovercos', require( '@stdlib/math-base-special-hacovercos' ) );

/**
* @name hacoversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacoversin}
*/
setReadOnly( special, 'hacoversin', require( '@stdlib/math-base-special-hacoversin' ) );

/**
* @name havercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/havercos}
*/
setReadOnly( special, 'havercos', require( '@stdlib/math-base-special-havercos' ) );

/**
* @name haversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/haversin}
*/
setReadOnly( special, 'haversin', require( '@stdlib/math-base-special-haversin' ) );

/**
* @name heaviside
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/heaviside}
*/
setReadOnly( special, 'heaviside', require( '@stdlib/math-base-special-heaviside' ) );

/**
* @name hypot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hypot}
*/
setReadOnly( special, 'hypot', require( '@stdlib/math-base-special-hypot' ) );

/**
* @name hypotf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hypotf}
*/
setReadOnly( special, 'hypotf', require( '@stdlib/math-base-special-hypotf' ) );

/**
* @name inv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/inv}
*/
setReadOnly( special, 'inv', require( '@stdlib/math-base-special-inv' ) );

/**
* @name invf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/invf}
*/
setReadOnly( special, 'invf', require( '@stdlib/math-base-special-invf' ) );

/**
* @name kernelBetainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-betainc}
*/
setReadOnly( special, 'kernelBetainc', require( '@stdlib/math-base-special-kernel-betainc' ) );

/**
* @name kernelBetaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-betaincinv}
*/
setReadOnly( special, 'kernelBetaincinv', require( '@stdlib/math-base-special-kernel-betaincinv' ) );

/**
* @name kernelCos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-cos}
*/
setReadOnly( special, 'kernelCos', require( '@stdlib/math-base-special-kernel-cos' ) );

/**
* @name kernelLog1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-log1p}
*/
setReadOnly( special, 'kernelLog1p', require( '@stdlib/math-base-special-kernel-log1p' ) );

/**
* @name kernelSin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-sin}
*/
setReadOnly( special, 'kernelSin', require( '@stdlib/math-base-special-kernel-sin' ) );

/**
* @name kernelTan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-tan}
*/
setReadOnly( special, 'kernelTan', require( '@stdlib/math-base-special-kernel-tan' ) );

/**
* @name kroneckerDelta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kronecker-delta}
*/
setReadOnly( special, 'kroneckerDelta', require( '@stdlib/math-base-special-kronecker-delta' ) );

/**
* @name kroneckerDeltaf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kronecker-deltaf}
*/
setReadOnly( special, 'kroneckerDeltaf', require( '@stdlib/math-base-special-kronecker-deltaf' ) );

/**
* @name labs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/labs}
*/
setReadOnly( special, 'labs', require( '@stdlib/math-base-special-labs' ) );

/**
* @name lcm
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lcm}
*/
setReadOnly( special, 'lcm', require( '@stdlib/math-base-special-lcm' ) );

/**
* @name ldexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ldexp}
*/
setReadOnly( special, 'ldexp', require( '@stdlib/math-base-special-ldexp' ) );

/**
* @name ln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ln}
*/
setReadOnly( special, 'ln', require( '@stdlib/math-base-special-ln' ) );

/**
* @name log
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log}
*/
setReadOnly( special, 'log', require( '@stdlib/math-base-special-log' ) );

/**
* @name log1mexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1mexp}
*/
setReadOnly( special, 'log1mexp', require( '@stdlib/math-base-special-log1mexp' ) );

/**
* @name log1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1p}
*/
setReadOnly( special, 'log1p', require( '@stdlib/math-base-special-log1p' ) );

/**
* @name log1pexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1pexp}
*/
setReadOnly( special, 'log1pexp', require( '@stdlib/math-base-special-log1pexp' ) );

/**
* @name log1pmx
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1pmx}
*/
setReadOnly( special, 'log1pmx', require( '@stdlib/math-base-special-log1pmx' ) );

/**
* @name log2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log2}
*/
setReadOnly( special, 'log2', require( '@stdlib/math-base-special-log2' ) );

/**
* @name log10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log10}
*/
setReadOnly( special, 'log10', require( '@stdlib/math-base-special-log10' ) );

/**
* @name logaddexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logaddexp}
*/
setReadOnly( special, 'logaddexp', require( '@stdlib/math-base-special-logaddexp' ) );

/**
* @name logit
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logit}
*/
setReadOnly( special, 'logit', require( '@stdlib/math-base-special-logit' ) );

/**
* @name lucas
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lucas}
*/
setReadOnly( special, 'lucas', require( '@stdlib/math-base-special-lucas' ) );

/**
* @name max
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/max}
*/
setReadOnly( special, 'max', require( '@stdlib/math-base-special-max' ) );

/**
* @name maxabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxabs}
*/
setReadOnly( special, 'maxabs', require( '@stdlib/math-base-special-maxabs' ) );

/**
* @name maxabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxabsn}
*/
setReadOnly( special, 'maxabsn', require( '@stdlib/math-base-special-maxabsn' ) );

/**
* @name maxn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxn}
*/
setReadOnly( special, 'maxn', require( '@stdlib/math-base-special-maxn' ) );

/**
* @name min
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/min}
*/
setReadOnly( special, 'min', require( '@stdlib/math-base-special-min' ) );

/**
* @name minabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minabs}
*/
setReadOnly( special, 'minabs', require( '@stdlib/math-base-special-minabs' ) );

/**
* @name minabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minabsn}
*/
setReadOnly( special, 'minabsn', require( '@stdlib/math-base-special-minabsn' ) );

/**
* @name minmax
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmax}
*/
setReadOnly( special, 'minmax', require( '@stdlib/math-base-special-minmax' ) );

/**
* @name minmaxabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxabs}
*/
setReadOnly( special, 'minmaxabs', require( '@stdlib/math-base-special-minmaxabs' ) );

/**
* @name minmaxabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxabsn}
*/
setReadOnly( special, 'minmaxabsn', require( '@stdlib/math-base-special-minmaxabsn' ) );

/**
* @name minmaxn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxn}
*/
setReadOnly( special, 'minmaxn', require( '@stdlib/math-base-special-minmaxn' ) );

/**
* @name minn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minn}
*/
setReadOnly( special, 'minn', require( '@stdlib/math-base-special-minn' ) );

/**
* @name modf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/modf}
*/
setReadOnly( special, 'modf', require( '@stdlib/math-base-special-modf' ) );

/**
* @name negafibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negafibonacci}
*/
setReadOnly( special, 'negafibonacci', require( '@stdlib/math-base-special-negafibonacci' ) );

/**
* @name negalucas
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negalucas}
*/
setReadOnly( special, 'negalucas', require( '@stdlib/math-base-special-negalucas' ) );

/**
* @name nonfibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nonfibonacci}
*/
setReadOnly( special, 'nonfibonacci', require( '@stdlib/math-base-special-nonfibonacci' ) );

/**
* @name pdiff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pdiff}
*/
setReadOnly( special, 'pdiff', require( '@stdlib/math-base-special-pdiff' ) );

/**
* @name pdifff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pdifff}
*/
setReadOnly( special, 'pdifff', require( '@stdlib/math-base-special-pdifff' ) );

/**
* @name polygamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/polygamma}
*/
setReadOnly( special, 'polygamma', require( '@stdlib/math-base-special-polygamma' ) );

/**
* @name pow
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pow}
*/
setReadOnly( special, 'pow', require( '@stdlib/math-base-special-pow' ) );

/**
* @name powm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/powm1}
*/
setReadOnly( special, 'powm1', require( '@stdlib/math-base-special-powm1' ) );

/**
* @name rad2deg
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rad2deg}
*/
setReadOnly( special, 'rad2deg', require( '@stdlib/math-base-special-rad2deg' ) );

/**
* @name rad2degf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rad2degf}
*/
setReadOnly( special, 'rad2degf', require( '@stdlib/math-base-special-rad2degf' ) );

/**
* @name ramp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ramp}
*/
setReadOnly( special, 'ramp', require( '@stdlib/math-base-special-ramp' ) );

/**
* @name rampf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rampf}
*/
setReadOnly( special, 'rampf', require( '@stdlib/math-base-special-rampf' ) );

/**
* @name rcbrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rcbrt}
*/
setReadOnly( special, 'rcbrt', require( '@stdlib/math-base-special-rcbrt' ) );

/**
* @name rcbrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rcbrtf}
*/
setReadOnly( special, 'rcbrtf', require( '@stdlib/math-base-special-rcbrtf' ) );

/**
* @name rempio2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rempio2}
*/
setReadOnly( special, 'rempio2', require( '@stdlib/math-base-special-rempio2' ) );

/**
* @name zeta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/riemann-zeta}
*/
setReadOnly( special, 'zeta', require( '@stdlib/math-base-special-riemann-zeta' ) );

/**
* @name risingFactorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rising-factorial}
*/
setReadOnly( special, 'risingFactorial', require( '@stdlib/math-base-special-rising-factorial' ) );

/**
* @name round
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round}
*/
setReadOnly( special, 'round', require( '@stdlib/math-base-special-round' ) );

/**
* @name round2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round2}
*/
setReadOnly( special, 'round2', require( '@stdlib/math-base-special-round2' ) );

/**
* @name round10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round10}
*/
setReadOnly( special, 'round10', require( '@stdlib/math-base-special-round10' ) );

/**
* @name roundb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundb}
*/
setReadOnly( special, 'roundb', require( '@stdlib/math-base-special-roundb' ) );

/**
* @name roundn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundn}
*/
setReadOnly( special, 'roundn', require( '@stdlib/math-base-special-roundn' ) );

/**
* @name roundsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundsd}
*/
setReadOnly( special, 'roundsd', require( '@stdlib/math-base-special-roundsd' ) );

/**
* @name rsqrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rsqrt}
*/
setReadOnly( special, 'rsqrt', require( '@stdlib/math-base-special-rsqrt' ) );

/**
* @name rsqrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rsqrtf}
*/
setReadOnly( special, 'rsqrtf', require( '@stdlib/math-base-special-rsqrtf' ) );

/**
* @name secd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/secd}
*/
setReadOnly( special, 'secd', require( '@stdlib/math-base-special-secd' ) );

/**
* @name sici
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sici}
*/
setReadOnly( special, 'sici', require( '@stdlib/math-base-special-sici' ) );

/**
* @name signum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/signum}
*/
setReadOnly( special, 'signum', require( '@stdlib/math-base-special-signum' ) );

/**
* @name signumf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/signumf}
*/
setReadOnly( special, 'signumf', require( '@stdlib/math-base-special-signumf' ) );

/**
* @name sin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sin}
*/
setReadOnly( special, 'sin', require( '@stdlib/math-base-special-sin' ) );

/**
* @name sinc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinc}
*/
setReadOnly( special, 'sinc', require( '@stdlib/math-base-special-sinc' ) );

/**
* @name sincos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincos}
*/
setReadOnly( special, 'sincos', require( '@stdlib/math-base-special-sincos' ) );

/**
* @name sincospi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincospi}
*/
setReadOnly( special, 'sincospi', require( '@stdlib/math-base-special-sincospi' ) );

/**
* @name sinh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinh}
*/
setReadOnly( special, 'sinh', require( '@stdlib/math-base-special-sinh' ) );

/**
* @name sinpi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinpi}
*/
setReadOnly( special, 'sinpi', require( '@stdlib/math-base-special-sinpi' ) );

/**
* @name spence
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/spence}
*/
setReadOnly( special, 'spence', require( '@stdlib/math-base-special-spence' ) );

/**
* @name sqrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrt}
*/
setReadOnly( special, 'sqrt', require( '@stdlib/math-base-special-sqrt' ) );

/**
* @name sqrt1pm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrt1pm1}
*/
setReadOnly( special, 'sqrt1pm1', require( '@stdlib/math-base-special-sqrt1pm1' ) );

/**
* @name sqrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrtf}
*/
setReadOnly( special, 'sqrtf', require( '@stdlib/math-base-special-sqrtf' ) );

/**
* @name sqrtpi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrtpi}
*/
setReadOnly( special, 'sqrtpi', require( '@stdlib/math-base-special-sqrtpi' ) );

/**
* @name tan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tan}
*/
setReadOnly( special, 'tan', require( '@stdlib/math-base-special-tan' ) );

/**
* @name tand
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tand}
*/
setReadOnly( special, 'tand', require( '@stdlib/math-base-special-tand' ) );

/**
* @name tanh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tanh}
*/
setReadOnly( special, 'tanh', require( '@stdlib/math-base-special-tanh' ) );

/**
* @name tribonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tribonacci}
*/
setReadOnly( special, 'tribonacci', require( '@stdlib/math-base-special-tribonacci' ) );

/**
* @name trigamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trigamma}
*/
setReadOnly( special, 'trigamma', require( '@stdlib/math-base-special-trigamma' ) );

/**
* @name trunc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc}
*/
setReadOnly( special, 'trunc', require( '@stdlib/math-base-special-trunc' ) );

/**
* @name trunc2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc2}
*/
setReadOnly( special, 'trunc2', require( '@stdlib/math-base-special-trunc2' ) );

/**
* @name trunc10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc10}
*/
setReadOnly( special, 'trunc10', require( '@stdlib/math-base-special-trunc10' ) );

/**
* @name truncb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncb}
*/
setReadOnly( special, 'truncb', require( '@stdlib/math-base-special-truncb' ) );

/**
* @name truncf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncf}
*/
setReadOnly( special, 'truncf', require( '@stdlib/math-base-special-truncf' ) );

/**
* @name truncn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncn}
*/
setReadOnly( special, 'truncn', require( '@stdlib/math-base-special-truncn' ) );

/**
* @name truncsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncsd}
*/
setReadOnly( special, 'truncsd', require( '@stdlib/math-base-special-truncsd' ) );

/**
* @name vercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/vercos}
*/
setReadOnly( special, 'vercos', require( '@stdlib/math-base-special-vercos' ) );

/**
* @name versin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/versin}
*/
setReadOnly( special, 'versin', require( '@stdlib/math-base-special-versin' ) );

/**
* @name wrap
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/wrap}
*/
setReadOnly( special, 'wrap', require( '@stdlib/math-base-special-wrap' ) );

/**
* @name xlog1py
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/xlog1py}
*/
setReadOnly( special, 'xlog1py', require( '@stdlib/math-base-special-xlog1py' ) );

/**
* @name xlogy
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/xlogy}
*/
setReadOnly( special, 'xlogy', require( '@stdlib/math-base-special-xlogy' ) );


// EXPORTS //

module.exports = special;
