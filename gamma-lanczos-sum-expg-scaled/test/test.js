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

// MODULES //

var tape = require( 'tape' );
var linspace = require( '@stdlib/math/utils/linspace' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gamma = require( '@stdlib/math/base/special/gamma' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var EPS = require( '@stdlib/constants/math/float64-eps' );
var G = require( '@stdlib/constants/math/float64-gamma-lanczos-g' );
var gammaLanczosSumExpGScaled = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof gammaLanczosSumExpGScaled, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = gammaLanczosSumExpGScaled( NaN );
	t.equal( isnan( v ), true, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'the function evaluates the Lanczos sum (scaled by exp(-g))', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var x;
	var y;

	x = linspace( 1.0, 100.0, 500 );
	for ( i = 0; i < x.length; i++ ) {
		y = gammaLanczosSumExpGScaled( x[i] );
		expected = gamma( x[i] );
		expected /= pow( x[i]+G-0.5, x[i]-0.5 ) / ( exp( x[i]+G-0.5 ) );
		expected /= exp( G );
		if ( y === expected ) {
			t.equal( y, expected, 'x: '+x[i]+', y: '+y+', expected: '+expected );
		} else {
			delta = abs( y - expected );
			tol = 10.0 * EPS * abs( expected );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
