/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var lpad = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - string length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var values;
		var out;
		var i;

		values = [
			'a',
			'b',
			'c'
		];

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = lpad( 'beep', len, values[ i%values.length ] );
			if ( typeof out !== 'string' ) {
				b.fail( 'should return a string' );
			}
		}
		b.toc();
		if ( !isString( out ) ) {
			b.fail( 'should return a string' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1;  // 10*min
	max = 10; // 10*max

	for ( i = min; i <= max; i++ ) {
		len = 10 * i;
		f = createBenchmark( len );
		bench( pkg+':len='+len, f );
	}
}

main();
