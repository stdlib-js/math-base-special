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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var maxabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof maxabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = maxabs( NaN, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = maxabs( 3.14, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = maxabs( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = maxabs( 3.14, 4.2, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+Infinity` if provided `+Infinity`', function test( t ) {
	var v;

	v = maxabs( PINF, 3.14 );
	t.strictEqual( v, PINF, 'returns +infinity' );

	v = maxabs( 3.14, PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );

	v = maxabs( PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );

	v = maxabs( 3.14, 4.2, PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );

	t.end();
});

tape( 'the function returns `+infinity` if not provided any arguments', function test( t ) {
	var v = maxabs();
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns a correctly signed zero', function test( t ) {
	var v;

	v = maxabs( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = maxabs( +0.0, -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function returns the maximum absolute value', function test( t ) {
	var v;

	v = maxabs( 4.2, 3.14 );
	t.strictEqual( v, 4.2, 'returns expected value' );

	v = maxabs( -4.2, 3.14 );
	t.strictEqual( v, 4.2, 'returns expected value' );

	v = maxabs( 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = maxabs( NINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = maxabs( 4.2, 3.14, -1.0 );
	t.strictEqual( v, 4.2, 'returns expected value' );

	v = maxabs( 3.14, 4.2, -1.0, -3.14 );
	t.strictEqual( v, 4.2, 'returns expected value' );

	v = maxabs( 3.14, -4.2, -1.0, -3.14 );
	t.strictEqual( v, 4.2, 'returns expected value' );

	t.end();
});
