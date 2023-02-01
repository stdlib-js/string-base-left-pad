<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# lpad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Left pad a string.



<section class="usage">

## Usage

To use in Observable,

```javascript
lpad = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-left-pad@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var lpad = require( 'path/to/vendor/umd/string-base-left-pad/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-base-left-pad@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.lpad;
})();
</script>
```

#### lpad( str, len, pad )

Left pads a string such that the padded string has a length of **at least** `len`.

```javascript
var str = lpad( 'a', 5, ' ' );
// returns '    a'

str = lpad( 'beep', 10, 'b' );
// returns 'bbbbbbbeep'

str = lpad( 'boop', 12, 'beep' );
// returns 'beepbeepboop'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An output string is **not** guaranteed to have a length of **exactly** `len`, but to have a length of **at least** `len`. To generate a padded string having a length equal to `len`

    ```javascript
    var str = lpad( 'boop', 10, 'beep' ); // => length 12
    // returns 'beepbeepboop'

    str = str.substring( str.length-10 ); // => length 10
    // returns 'epbeepboop'
    ```

-   This function differs from [`String.prototype.padStart`][mdn-string-padstart] in the following ways:

    -   The function is **not** guaranteed to return a string having a length exactly equal to `len` (as explained above).
    -   The function does **not** truncate `pad` (from the end) in order to ensure the returned string has length `len`.
    
    To replicate [`String.prototype.padStart`][mdn-string-padstart] truncation behavior

    ```javascript
    var floorb = require( '@stdlib/math-base-special-floorb' );

    function padStart( str, len, pad ) {
        var n;
        if ( len <= str.length ) {
            return str;
        }
        n = floorb( len-str.length, 1, pad.length ) + str.length;
        return pad.substring( 0, len-n ) + lpad( str, n, pad );
    }

    var str = padStart( 'boop', 10, 'beep' );
    // returns 'bebeepboop'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-base-left-pad@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var str = 'beep';
var i;
for ( i = 0; i < 100; i++ ) {
    console.log( lpad( str, discreteUniform( str.length, str.length+10 ), 'b' ) );
}

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-left-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-left-pad

[test-image]: https://github.com/stdlib-js/string-base-left-pad/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base-left-pad/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-left-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-left-pad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-left-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-left-pad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-left-pad/tree/deno
[umd-url]: https://github.com/stdlib-js/string-base-left-pad/tree/umd
[esm-url]: https://github.com/stdlib-js/string-base-left-pad/tree/esm
[branches-url]: https://github.com/stdlib-js/string-base-left-pad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-left-pad/main/LICENSE

[mdn-string-padstart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

</section>

<!-- /.links -->
