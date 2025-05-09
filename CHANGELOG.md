# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-04-20)

<section class="packages">

### Packages

<section class="package" id="math-base-special-unreleased">

#### [@stdlib/math/base/special](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special)

<details>

<section class="features">

##### Features

-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`5b184b6`](https://github.com/stdlib-js/stdlib/commit/5b184b681a3d1d5c3fea30b9d8f4630c86eb44af) - add C implementation for `math/base/special/binomcoefln`
-   [`06b8011`](https://github.com/stdlib-js/stdlib/commit/06b80119890e1868578ba4904e9efaa071b27b05) - add C implementation for `math/base/special/binomcoef`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`abcf36e`](https://github.com/stdlib-js/stdlib/commit/abcf36e4c2ff11c808a22217d4d6ebb506f0df1d) - remove extra slash from dependency in `manifest.json` 

</section>

<!-- /.bug-fixes -->

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`f4a06d9`](https://github.com/stdlib-js/stdlib/commit/f4a06d9b7c3a5075166a8af3cb3643798f35cc2f): remove `cidentityf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`0ebeaf8`](https://github.com/stdlib-js/stdlib/commit/0ebeaf89ad1af59fb5e998d259d717a588fdcbb3): remove `cidentity`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`36d3db3`](https://github.com/stdlib-js/stdlib/commit/36d3db3e658584389593390b81866b367bf9c5fa): remove `identityf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`3fa0763`](https://github.com/stdlib-js/stdlib/commit/3fa0763e1264cb2d9b3560735aa57e51c66ff2de): remove `identity`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5862](https://github.com/stdlib-js/stdlib/issues/5862)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acos-unreleased">

#### [@stdlib/math/base/special/acos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acos)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosdf-unreleased">

#### [@stdlib/math/base/special/acosdf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosdf)

<details>

<section class="features">

##### Features

-   [`b18921a`](https://github.com/stdlib-js/stdlib/commit/b18921a136da2755efccfd6ae23c8b3f5aaa8f4a) - add `math/base/special/acosdf` [(#3015)](https://github.com/stdlib-js/stdlib/pull/3015)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosh-unreleased">

#### [@stdlib/math/base/special/acosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosh)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acotdf-unreleased">

#### [@stdlib/math/base/special/acotdf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acotdf)

<details>

<section class="features">

##### Features

-   [`50b38f9`](https://github.com/stdlib-js/stdlib/commit/50b38f941b50a3f71b531d965c7312d4c6932f84) - add `math/base/special/acotdf` [(#2799)](https://github.com/stdlib-js/stdlib/pull/2799)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoth-unreleased">

#### [@stdlib/math/base/special/acoth](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoth)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acovercos-unreleased">

#### [@stdlib/math/base/special/acovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acovercos)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acovercosf-unreleased">

#### [@stdlib/math/base/special/acovercosf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acovercosf)

<details>

<section class="features">

##### Features

-   [`4dbd685`](https://github.com/stdlib-js/stdlib/commit/4dbd685129b1ee7a1f459b77e791314c0bef49e7) - add `math/base/special/acovercosf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoversin-unreleased">

#### [@stdlib/math/base/special/acoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoversin)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoversinf-unreleased">

#### [@stdlib/math/base/special/acoversinf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoversinf)

<details>

<section class="features">

##### Features

-   [`b2268e5`](https://github.com/stdlib-js/stdlib/commit/b2268e57b78b3a774f37e984faebd95ac7c0ba69) - add `math/base/special/acoversinf` [(#2860)](https://github.com/stdlib-js/stdlib/pull/2860 )

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5363](https://github.com/stdlib-js/stdlib/issues/5363)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahavercos-unreleased">

#### [@stdlib/math/base/special/ahavercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahavercos)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahavercosf-unreleased">

#### [@stdlib/math/base/special/ahavercosf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahavercosf)

<details>

<section class="features">

##### Features

-   [`fc38ed8`](https://github.com/stdlib-js/stdlib/commit/fc38ed8247ba61728a368306323ad70cda5895d6) - add `math/base/special/ahavercosf [(#3072)](https://github.com/stdlib-js/stdlib/pull/3072)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahaversin-unreleased">

#### [@stdlib/math/base/special/ahaversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahaversin)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahaversinf-unreleased">

#### [@stdlib/math/base/special/ahaversinf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahaversinf)

<details>

<section class="features">

##### Features

-   [`545a050`](https://github.com/stdlib-js/stdlib/commit/545a05093d99910b39773f57d3df2da9232b24f5) - add `math/base/special/ahaversinf` [(#3076)](https://github.com/stdlib-js/stdlib/pull/3076)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asech-unreleased">

#### [@stdlib/math/base/special/asech](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asech)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asin-unreleased">

#### [@stdlib/math/base/special/asin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asin)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asinh-unreleased">

#### [@stdlib/math/base/special/asinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asinh)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan-unreleased">

#### [@stdlib/math/base/special/atan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan2-unreleased">

#### [@stdlib/math/base/special/atan2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan2)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan2d-unreleased">

#### [@stdlib/math/base/special/atan2d](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan2d)

<details>

<section class="features">

##### Features

-   [`f9cd43c`](https://github.com/stdlib-js/stdlib/commit/f9cd43c1179fb822caa68afbfc6af56d2e128e9e) - add `math/base/special/atan2d` [(#6273)](https://github.com/stdlib-js/stdlib/pull/6273)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atandf-unreleased">

#### [@stdlib/math/base/special/atandf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atandf)

<details>

<section class="features">

##### Features

-   [`1f7fd37`](https://github.com/stdlib-js/stdlib/commit/1f7fd373c939151c685875e1e0d2f146f072ce26) - add `math/base/special/atandf` [(#2841)](https://github.com/stdlib-js/stdlib/pull/2841)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atanh-unreleased">

#### [@stdlib/math/base/special/atanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atanh)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-avercos-unreleased">

#### [@stdlib/math/base/special/avercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/avercos)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-avercosf-unreleased">

#### [@stdlib/math/base/special/avercosf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/avercosf)

<details>

<section class="features">

##### Features

-   [`6b76aa9`](https://github.com/stdlib-js/stdlib/commit/6b76aa904c33cbe3f3c28b61ae7797e444d13e52) - add `math/base/special/avercosf` [(#2846)](https://github.com/stdlib-js/stdlib/pull/2846)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-aversin-unreleased">

#### [@stdlib/math/base/special/aversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/aversin)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-aversinf-unreleased">

#### [@stdlib/math/base/special/aversinf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/aversinf)

<details>

<section class="features">

##### Features

-   [`4bddc16`](https://github.com/stdlib-js/stdlib/commit/4bddc16dfcdc4d18a95bbd08abc869f58d77396b) - add `math/base/special/aversinf` [(#2852)](https://github.com/stdlib-js/stdlib/pull/2852)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bernoulli-unreleased">

#### [@stdlib/math/base/special/bernoulli](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bernoulli)

<details>

<section class="features">

##### Features

-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8) - update the return value for `n=1` in `math/base/special/bernoulli` [(#3108)](https://github.com/stdlib-js/stdlib/pull/3108)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8): update return value for `n=1`

    -   In order to migrate and preserve prior behavior, users should special case `n=1` and return `0`. The change in this commit aligns return values with SymPy and R; although, other libraries and envs choose to return `-0.5`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-besselj0-unreleased">

#### [@stdlib/math/base/special/besselj0](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/besselj0)

<details>

<section class="features">

##### Features

-   [`779b35c`](https://github.com/stdlib-js/stdlib/commit/779b35ca267629b2dadd9947ad2ba106b8095004) - add C implementation for `math/base/special/besselj0`

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-besselj1-unreleased">

#### [@stdlib/math/base/special/besselj1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/besselj1)

<details>

<section class="features">

##### Features

-   [`0ae49fb`](https://github.com/stdlib-js/stdlib/commit/0ae49fba6e79599a4b8b1be464a7570a3c7f6d83) - fix function name and update docs [(#2777)](https://github.com/stdlib-js/stdlib/pull/2777)
-   [`18bd1b5`](https://github.com/stdlib-js/stdlib/commit/18bd1b5ace1a7dbd9d26bb66c1a1f0aa91573416) - add C implementation for `math/base/special/besselj1`

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0ae49fb`](https://github.com/stdlib-js/stdlib/commit/0ae49fba6e79599a4b8b1be464a7570a3c7f6d83): update C API name

    -   This commit changes the name of the C API from `stdlib_base_j1` to `stdlib_base_besselj1`. This ensures that the C function name more closely matches the global namespace name and helps protect against future naming collisions. To migrate, users should update their call signatures accordingly.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bessely0-unreleased">

#### [@stdlib/math/base/special/bessely0](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bessely0)

<details>

<section class="features">

##### Features

-   [`aaf0c58`](https://github.com/stdlib-js/stdlib/commit/aaf0c5825f2be45af9025e09c60cc4a1de559152) - add C implementation for `math/base/special/bessely0` [(#2780)](https://github.com/stdlib-js/stdlib/pull/2780)

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bessely1-unreleased">

#### [@stdlib/math/base/special/bessely1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bessely1)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-betaln-unreleased">

#### [@stdlib/math/base/special/betaln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/betaln)

<details>

<section class="features">

##### Features

-   [`7502603`](https://github.com/stdlib-js/stdlib/commit/75026039180c76cf376d7550d7470c57a11780cd) - add C implementation for `math/base/special/betaln`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs2f-unreleased">

#### [@stdlib/math/base/special/cabs2f](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs2f)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`d89509f`](https://github.com/stdlib-js/stdlib/commit/d89509f17211915d1fd25c735efc40c2e54cc239): migrate to `stdlib_complex64_t`

    -   To migrate, users should update their usage of `complex` to `stdlib_complex64_t` which is available via `@stdlib/complex-float32/ctor` package.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabsf-unreleased">

#### [@stdlib/math/base/special/cabsf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabsf)

<details>

<section class="features">

##### Features

-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d) - update `math/base/special/cabsf` to accept stdlib complex numbers [(#3358)](https://github.com/stdlib-js/stdlib/pull/3358)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d): use stdlib C complex64 dtype

    -   To migrate, users should provide a value having the type `stdlib_complex64_t`, rather than a built-in C99 single-precision complex dtype. This dtype is available via the package `@stdlib/complex-float32/ctor`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3357](https://github.com/stdlib-js/stdlib/issues/3357)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cbrt-unreleased">

#### [@stdlib/math/base/special/cbrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cbrt)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cbrtf-unreleased">

#### [@stdlib/math/base/special/cbrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cbrtf)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceilf-unreleased">

#### [@stdlib/math/base/special/cceilf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceilf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0a3d6a1`](https://github.com/stdlib-js/stdlib/commit/0a3d6a1c7a55a18c65e2eef4a309d431c7a3346a): migrate to `stdlib_complex64_t`

    -   To migrate, users should update their usage of `complex` to `stdlib_complex64_t` which is available via `@stdlib/complex-float32/ctor` package.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3398](https://github.com/stdlib-js/stdlib/issues/3398)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ccis-unreleased">

#### [@stdlib/math/base/special/ccis](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ccis)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5898](https://github.com/stdlib-js/stdlib/issues/5898)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil-unreleased">

#### [@stdlib/math/base/special/ceil](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilf-unreleased">

#### [@stdlib/math/base/special/ceilf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilf)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cexp-unreleased">

#### [@stdlib/math/base/special/cexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cexp)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#3393](https://github.com/stdlib-js/stdlib/issues/3393)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cflipsignf-unreleased">

#### [@stdlib/math/base/special/cflipsignf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cflipsignf)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5199](https://github.com/stdlib-js/stdlib/issues/5199)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloor-unreleased">

#### [@stdlib/math/base/special/cfloor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloor)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloorf-unreleased">

#### [@stdlib/math/base/special/cfloorf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloorf)

<details>

<section class="features">

##### Features

-   [`6556a46`](https://github.com/stdlib-js/stdlib/commit/6556a46aa3a6dffdff6becd4fb98d32421b3e7f2) - add math/base/special/cfloorf [(#stdlib-js#3058)](https://github.com/stdlib-js/stdlib/pull/stdlib-js#3058)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloorn-unreleased">

#### [@stdlib/math/base/special/cfloorn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloorn)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cidentity-unreleased">

#### [@stdlib/math/base/special/cidentity](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cidentity)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7a67cff`](https://github.com/stdlib-js/stdlib/commit/7a67cfff161e9d66bb3c624d45a4428766efb007): remove `math/base/special/cidentity`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cidentityf-unreleased">

#### [@stdlib/math/base/special/cidentityf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cidentityf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`2dcec61`](https://github.com/stdlib-js/stdlib/commit/2dcec616498aa8ccab060bd761a9fd626f00035e): remove `math/base/special/cidentityf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cinv-unreleased">

#### [@stdlib/math/base/special/cinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cinv)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cos-unreleased">

#### [@stdlib/math/base/special/cos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosd-unreleased">

#### [@stdlib/math/base/special/cosd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`b947812`](https://github.com/stdlib-js/stdlib/commit/b947812d45606e52f8f3e0ab22f6355f59eb1c49) - update `math/base/special/cosd` to match correct reference implementation [(#5473)](https://github.com/stdlib-js/stdlib/pull/5473)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosh-unreleased">

#### [@stdlib/math/base/special/cosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosh)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cotd-unreleased">

#### [@stdlib/math/base/special/cotd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cotd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`75941b9`](https://github.com/stdlib-js/stdlib/commit/75941b94bd2713c857146756596925bb4299af6e) - update `math/base/special/cotd` to match correct reference implementation [(#5813)](https://github.com/stdlib-js/stdlib/pull/5813)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-covercos-unreleased">

#### [@stdlib/math/base/special/covercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/covercos)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-coversin-unreleased">

#### [@stdlib/math/base/special/coversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/coversin)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cphase-unreleased">

#### [@stdlib/math/base/special/cphase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cphase)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5961](https://github.com/stdlib-js/stdlib/issues/5961)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cround-unreleased">

#### [@stdlib/math/base/special/cround](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cround)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-croundf-unreleased">

#### [@stdlib/math/base/special/croundf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/croundf)

<details>

<section class="features">

##### Features

-   [`d9a93be`](https://github.com/stdlib-js/stdlib/commit/d9a93be954f04720bb5b03512be42c9ce6201088) - add `math/base/special/croundf` [(#3061)](https://github.com/stdlib-js/stdlib/pull/3061)

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#649](https://github.com/stdlib-js/stdlib/issues/649)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cscd-unreleased">

#### [@stdlib/math/base/special/cscd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cscd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`406337f`](https://github.com/stdlib-js/stdlib/commit/406337fc2a5709ef967afbd6be8b25b0a89a3c30) - update `math/base/special/cscd` to match correct reference implementation [(#5811)](https://github.com/stdlib-js/stdlib/pull/5811)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csignumf-unreleased">

#### [@stdlib/math/base/special/csignumf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csignumf)

<details>

<section class="features">

##### Features

-   [`9b72f0c`](https://github.com/stdlib-js/stdlib/commit/9b72f0cc9ae1a8fe839c8fc873bc3cd7b68dcb76) - add `math/base/special/csignumf` [(#6361)](https://github.com/stdlib-js/stdlib/pull/6361)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirac-delta-unreleased">

#### [@stdlib/math/base/special/dirac-delta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirac-delta)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirac-deltaf-unreleased">

#### [@stdlib/math/base/special/dirac-deltaf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirac-deltaf)

<details>

<section class="features">

##### Features

-   [`ff48331`](https://github.com/stdlib-js/stdlib/commit/ff483312f61426a3072a5c22a9bf0e8ef4950a42) - add `math/base/special/dirac-deltaf` [(#3363)](https://github.com/stdlib-js/stdlib/pull/3363)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirichlet-eta-unreleased">

#### [@stdlib/math/base/special/dirichlet-eta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirichlet-eta)

<details>

<section class="features">

##### Features

-   [`ef06a2d`](https://github.com/stdlib-js/stdlib/commit/ef06a2dda4cc6b272088a7a39c30e48dbf8c6ce4) - add C implementation for `math/base/special/dirichlet-eta` [(#3282)](https://github.com/stdlib-js/stdlib/pull/3282)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erf-unreleased">

#### [@stdlib/math/base/special/erf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`3e201d7`](https://github.com/stdlib-js/stdlib/commit/3e201d779fa5844dd5808418f103f37d1a905d61) - update function alias and add WebAssembly configuration

</section>

<!-- /.bug-fixes -->

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfc-unreleased">

#### [@stdlib/math/base/special/erfc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfc)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfcx-unreleased">

#### [@stdlib/math/base/special/erfcx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfcx)

<details>

<section class="features">

##### Features

-   [`67d2064`](https://github.com/stdlib-js/stdlib/commit/67d206479d7216260d585173d253b1cb48b118f6) - add C implementation for `@stdlib/math-base/special/erfcx`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp-unreleased">

#### [@stdlib/math/base/special/exp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp2-unreleased">

#### [@stdlib/math/base/special/exp2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp2)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expit-unreleased">

#### [@stdlib/math/base/special/expit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expit)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expm1-unreleased">

#### [@stdlib/math/base/special/expm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expm1)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorialln-unreleased">

#### [@stdlib/math/base/special/factorialln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorialln)

<details>

<section class="features">

##### Features

-   [`1c43f05`](https://github.com/stdlib-js/stdlib/commit/1c43f05a04d6731ea7d1b93f89179da216259005) - add C implementation for `math/base/special/factorialln` [(#2731)](https://github.com/stdlib-js/stdlib/pull/2731 )

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-falling-factorial-unreleased">

#### [@stdlib/math/base/special/falling-factorial](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/falling-factorial)

<details>

<section class="features">

##### Features

-   [`b518ff1`](https://github.com/stdlib-js/stdlib/commit/b518ff110e120612be4d53b9f124a3c210711610) - add C implementation for `math/base/special/falling-factorial`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-unreleased">

#### [@stdlib/math/base/special/fibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-index-unreleased">

#### [@stdlib/math/base/special/fibonacci-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci-index)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`3560ebc`](https://github.com/stdlib-js/stdlib/commit/3560ebc03ba92b358e142ebbafd6dfe873f5d40a) - add missing include

</section>

<!-- /.bug-fixes -->

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-indexf-unreleased">

#### [@stdlib/math/base/special/fibonacci-indexf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci-indexf)

<details>

<section class="features">

##### Features

-   [`b2f8db2`](https://github.com/stdlib-js/stdlib/commit/b2f8db2d210d980e4921f2a35f7bee359917bcef) - add `math/base/special/fibonacci-indexf` [(#6320)](https://github.com/stdlib-js/stdlib/pull/6320)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonaccif-unreleased">

#### [@stdlib/math/base/special/fibonaccif](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonaccif)

<details>

<section class="features">

##### Features

-   [`8297683`](https://github.com/stdlib-js/stdlib/commit/82976838f1d49e5439f658f19c6bc2b9c21c771e) - add `math/base/special/fibonaccif` [(#6257)](https://github.com/stdlib-js/stdlib/pull/6257)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fmodf-unreleased">

#### [@stdlib/math/base/special/fmodf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fmodf)

<details>

<section class="features">

##### Features

-   [`7fd112c`](https://github.com/stdlib-js/stdlib/commit/7fd112c799e3a864d975357b2066e45f4196653e) - add `math/base/special/fmodf` [(#3059)](https://github.com/stdlib-js/stdlib/pull/3059)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-frexp-unreleased">

#### [@stdlib/math/base/special/frexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/frexp)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-unreleased">

#### [@stdlib/math/base/special/gamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-delta-ratio-unreleased">

#### [@stdlib/math/base/special/gamma-delta-ratio](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-delta-ratio)

<details>

<section class="features">

##### Features

-   [`3985f47`](https://github.com/stdlib-js/stdlib/commit/3985f47c6ec78cc644a98aa916740a1b2d37338f) - add C implementation for `math/base/special/gamma-delta-ratio`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma1pm1-unreleased">

#### [@stdlib/math/base/special/gamma1pm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma1pm1)

<details>

<section class="features">

##### Features

-   [`458697c`](https://github.com/stdlib-js/stdlib/commit/458697cf4aae5b6bcd2e0d9e19181d2ac3b70fe1) - add C implementation for `math/base/special/gamma1pm1`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammaln-unreleased">

#### [@stdlib/math/base/special/gammaln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammaln)

<details>

<section class="features">

##### Features

-   [`d745814`](https://github.com/stdlib-js/stdlib/commit/d74581415b30604ce6db2b3a2c4f242040eb3e8e) - add C implementation for `math/base/special/gammaln` [(#2636)](https://github.com/stdlib-js/stdlib/pull/2636)

</section>

<!-- /.features -->

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gcdf-unreleased">

#### [@stdlib/math/base/special/gcdf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gcdf)

<details>

<section class="features">

##### Features

-   [`f8bcfd8`](https://github.com/stdlib-js/stdlib/commit/f8bcfd832483d46068c710b6854d5f97bcb778fd) - add `math/base/special/gcdf` [(#2997)](https://github.com/stdlib-js/stdlib/pull/2997)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacovercos-unreleased">

#### [@stdlib/math/base/special/hacovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacovercos)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacoversin-unreleased">

#### [@stdlib/math/base/special/hacoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacoversin)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-havercos-unreleased">

#### [@stdlib/math/base/special/havercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/havercos)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-haversin-unreleased">

#### [@stdlib/math/base/special/haversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/haversin)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-heaviside-unreleased">

#### [@stdlib/math/base/special/heaviside](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/heaviside)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-heavisidef-unreleased">

#### [@stdlib/math/base/special/heavisidef](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/heavisidef)

<details>

<section class="features">

##### Features

-   [`a2133de`](https://github.com/stdlib-js/stdlib/commit/a2133de85c6de60892a54b387dbf7bd1ad58e0c8) - add `math/base/special/heavisidef` [(#3374)](https://github.com/stdlib-js/stdlib/pull/3374)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hyp2f1-unreleased">

#### [@stdlib/math/base/special/hyp2f1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hyp2f1)

<details>

<section class="features">

##### Features

-   [`8663446`](https://github.com/stdlib-js/stdlib/commit/86634464cd31d6661514550a89312a18c54af74b) - add C implementation for `math/base/special/hyp2f1` [(#5348)](https://github.com/stdlib-js/stdlib/pull/5348)
-   [`cebb74b`](https://github.com/stdlib-js/stdlib/commit/cebb74be47855091969b704a5eb37d4b0e3fec0b) - add `math/base/special/hyp2f1` [(#5140)](https://github.com/stdlib-js/stdlib/pull/5140)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

A total of 2 issues were closed in this release:

[#122](https://github.com/stdlib-js/stdlib/issues/122), [#216](https://github.com/stdlib-js/stdlib/pull/216)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hypot-unreleased">

#### [@stdlib/math/base/special/hypot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hypot)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`0dc5e1f`](https://github.com/stdlib-js/stdlib/commit/0dc5e1f8a98e82310a309649f58a0dc3acfedb68) - update `hypot` to follow the IEEE 754-2019 standard [(#6509)](https://github.com/stdlib-js/stdlib/pull/6509)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hypotf-unreleased">

#### [@stdlib/math/base/special/hypotf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hypotf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`8af2d8d`](https://github.com/stdlib-js/stdlib/commit/8af2d8d5690438af3fb3bcbc03b304ab4bef13cf) - update `hypotf` to follow the IEEE 754-2019 standard [(#6511)](https://github.com/stdlib-js/stdlib/pull/6511)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-identity-unreleased">

#### [@stdlib/math/base/special/identity](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/identity)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`640dfe9`](https://github.com/stdlib-js/stdlib/commit/640dfe977495e9b320a64ab326e5ff5330a1fd8b): remove `math/base/special/identity`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-identityf-unreleased">

#### [@stdlib/math/base/special/identityf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/identityf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`53bb578`](https://github.com/stdlib-js/stdlib/commit/53bb578118172e65c51bee68712fcac8526011c1): remove `math/base/special/identityf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/identityf` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-tan-unreleased">

#### [@stdlib/math/base/special/kernel-tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-tan)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5360](https://github.com/stdlib-js/stdlib/issues/5360)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kronecker-delta-unreleased">

#### [@stdlib/math/base/special/kronecker-delta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kronecker-delta)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5199](https://github.com/stdlib-js/stdlib/issues/5199)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lcmf-unreleased">

#### [@stdlib/math/base/special/lcmf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lcmf)

<details>

<section class="features">

##### Features

-   [`c0d083d`](https://github.com/stdlib-js/stdlib/commit/c0d083d4329c439d9c002479740518584e5f5977) - add `math/base/special/lcmf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ldexp-unreleased">

#### [@stdlib/math/base/special/ldexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ldexp)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ldexpf-unreleased">

#### [@stdlib/math/base/special/ldexpf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ldexpf)

<details>

<section class="features">

##### Features

-   [`71c43cf`](https://github.com/stdlib-js/stdlib/commit/71c43cf5165749e2ce2647cb52d92f6c97f16959) - add `math/base/special/ldexpf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ln-unreleased">

#### [@stdlib/math/base/special/ln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ln)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log-unreleased">

#### [@stdlib/math/base/special/log](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log10-unreleased">

#### [@stdlib/math/base/special/log10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log10)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#6499](https://github.com/stdlib-js/stdlib/issues/6499)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1mexp-unreleased">

#### [@stdlib/math/base/special/log1mexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1mexp)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1p-unreleased">

#### [@stdlib/math/base/special/log1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1p)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pexp-unreleased">

#### [@stdlib/math/base/special/log1pexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pexp)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pmx-unreleased">

#### [@stdlib/math/base/special/log1pmx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pmx)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log2-unreleased">

#### [@stdlib/math/base/special/log2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log2)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#6499](https://github.com/stdlib-js/stdlib/issues/6499)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logaddexp-unreleased">

#### [@stdlib/math/base/special/logaddexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logaddexp)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logf-unreleased">

#### [@stdlib/math/base/special/logf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logf)

<details>

<section class="features">

##### Features

-   [`6c8f019`](https://github.com/stdlib-js/stdlib/commit/6c8f019db8adb12466250957693edb9830496a7b) - add `math/base/special/logf`

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#6499](https://github.com/stdlib-js/stdlib/issues/6499)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logit-unreleased">

#### [@stdlib/math/base/special/logit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logit)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5398](https://github.com/stdlib-js/stdlib/issues/5398)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lucas-unreleased">

#### [@stdlib/math/base/special/lucas](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lucas)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`16c903b`](https://github.com/stdlib-js/stdlib/commit/16c903bdbd31c7d81bc3d6811e942e35c6de38e6) - add missing `native.js` and fix indentation [(#2975)](https://github.com/stdlib-js/stdlib/pull/2975)

</section>

<!-- /.bug-fixes -->

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lucasf-unreleased">

#### [@stdlib/math/base/special/lucasf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lucasf)

<details>

<section class="features">

##### Features

-   [`3656652`](https://github.com/stdlib-js/stdlib/commit/36566524e333dabea3b4b47c00b154accc1c2c23) - add `math/base/special/lucasf` [(#6223)](https://github.com/stdlib-js/stdlib/pull/6223)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-max-unreleased">

#### [@stdlib/math/base/special/max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/max)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabs-unreleased">

#### [@stdlib/math/base/special/maxabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabs)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#6384](https://github.com/stdlib-js/stdlib/issues/6384)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabsf-unreleased">

#### [@stdlib/math/base/special/maxabsf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabsf)

<details>

<section class="features">

##### Features

-   [`ff629c7`](https://github.com/stdlib-js/stdlib/commit/ff629c760ef40d9245a87a56716ea7a12145f6b2) - add `math/base/special/maxabsf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabsn-unreleased">

#### [@stdlib/math/base/special/maxabsn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabsn)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxf-unreleased">

#### [@stdlib/math/base/special/maxf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxf)

<details>

<section class="features">

##### Features

-   [`15878f9`](https://github.com/stdlib-js/stdlib/commit/15878f9056d9e0e4bae0411870655316bf68dff3) - add `math/base/special/maxf` [(#2816)](https://github.com/stdlib-js/stdlib/pull/2816)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxn-unreleased">

#### [@stdlib/math/base/special/maxn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxn)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-min-unreleased">

#### [@stdlib/math/base/special/min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/min)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabs-unreleased">

#### [@stdlib/math/base/special/minabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabs)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabsf-unreleased">

#### [@stdlib/math/base/special/minabsf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabsf)

<details>

<section class="features">

##### Features

-   [`d01e0f3`](https://github.com/stdlib-js/stdlib/commit/d01e0f34931b9fd522f3d8de3e2a0ad5c1ac0890) - add `math/base/special/minabsf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabsn-unreleased">

#### [@stdlib/math/base/special/minabsn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabsn)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minf-unreleased">

#### [@stdlib/math/base/special/minf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minf)

<details>

<section class="features">

##### Features

-   [`ef703d6`](https://github.com/stdlib-js/stdlib/commit/ef703d629af0fa6f4a34e697a26beea37dc7345c) - add `math/base/special/minf` [(#2820)](https://github.com/stdlib-js/stdlib/pull/2820)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minn-unreleased">

#### [@stdlib/math/base/special/minn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minn)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-modf-unreleased">

#### [@stdlib/math/base/special/modf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/modf)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanmax-unreleased">

#### [@stdlib/math/base/special/nanmax](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanmax)

<details>

<section class="features">

##### Features

-   [`bccdfa2`](https://github.com/stdlib-js/stdlib/commit/bccdfa26987e00d4994a7a1d8265a21c5545ff98) - add C implementation for `math/base/special/nanmax` [(#3031)](https://github.com/stdlib-js/stdlib/pull/3031)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanmaxf-unreleased">

#### [@stdlib/math/base/special/nanmaxf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanmaxf)

<details>

<section class="features">

##### Features

-   [`84b8294`](https://github.com/stdlib-js/stdlib/commit/84b8294c2d5494ff5eaaa2652dda81671e728068) - add `math/base/special/nanmaxf` [(#3035)](https://github.com/stdlib-js/stdlib/pull/3035)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanmin-unreleased">

#### [@stdlib/math/base/special/nanmin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanmin)

<details>

<section class="features">

##### Features

-   [`04b72af`](https://github.com/stdlib-js/stdlib/commit/04b72af273ca022bd8295379edc5ff04a03d23e7) - add C implementation for `math/base/special/nanmin` [(#3004)](https://github.com/stdlib-js/stdlib/pull/3004)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanminf-unreleased">

#### [@stdlib/math/base/special/nanminf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanminf)

<details>

<section class="features">

##### Features

-   [`30d56c3`](https://github.com/stdlib-js/stdlib/commit/30d56c355e6fa871ff5e42ac12d30ecd95011e00) - add `math/base/special/nanminf` [(#3034)](https://github.com/stdlib-js/stdlib/pull/3034)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negafibonacci-unreleased">

#### [@stdlib/math/base/special/negafibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negafibonacci)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negalucas-unreleased">

#### [@stdlib/math/base/special/negalucas](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negalucas)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negalucasf-unreleased">

#### [@stdlib/math/base/special/negalucasf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negalucasf)

<details>

<section class="features">

##### Features

-   [`3b4514d`](https://github.com/stdlib-js/stdlib/commit/3b4514d1272ea9e4863381e3d0febd02ba8d230f) - add `math/base/special/negalucasf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nonfibonacci-unreleased">

#### [@stdlib/math/base/special/nonfibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nonfibonacci)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5359](https://github.com/stdlib-js/stdlib/issues/5359)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nonfibonaccif-unreleased">

#### [@stdlib/math/base/special/nonfibonaccif](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nonfibonaccif)

<details>

<section class="features">

##### Features

-   [`7245f3c`](https://github.com/stdlib-js/stdlib/commit/7245f3c8cf9139b72f6f058e8c878b13e02ded9f) - add `math/base/special/nonfibonaccif` [(#3391)](https://github.com/stdlib-js/stdlib/pull/3391)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-pow-unreleased">

#### [@stdlib/math/base/special/pow](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/pow)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-powm1-unreleased">

#### [@stdlib/math/base/special/powm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/powm1)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5274](https://github.com/stdlib-js/stdlib/issues/5274)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rad2deg-unreleased">

#### [@stdlib/math/base/special/rad2deg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rad2deg)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ramp-unreleased">

#### [@stdlib/math/base/special/ramp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ramp)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rampf-unreleased">

#### [@stdlib/math/base/special/rampf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rampf)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rcbrt-unreleased">

#### [@stdlib/math/base/special/rcbrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rcbrt)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-riemann-zeta-unreleased">

#### [@stdlib/math/base/special/riemann-zeta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/riemann-zeta)

<details>

<section class="features">

##### Features

-   [`e01c8e2`](https://github.com/stdlib-js/stdlib/commit/e01c8e28e77db58112d6bdcffa2e924f648e09fd) - add C implementation for `math/base/special/riemann-zeta` [(#2737)](https://github.com/stdlib-js/stdlib/pull/2737)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round-unreleased">

#### [@stdlib/math/base/special/round](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundf-unreleased">

#### [@stdlib/math/base/special/roundf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundf)

<details>

<section class="features">

##### Features

-   [`fabbf5a`](https://github.com/stdlib-js/stdlib/commit/fabbf5abfb781849d460e93dd498cd7d99505678) - add `math/base/special/roundf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundn-unreleased">

#### [@stdlib/math/base/special/roundn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundn)

<details>

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#6005](https://github.com/stdlib-js/stdlib/issues/6005)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundsd-unreleased">

#### [@stdlib/math/base/special/roundsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundsd)

<details>

<section class="features">

##### Features

-   [`9c34a77`](https://github.com/stdlib-js/stdlib/commit/9c34a77e29807a5f03506d3da65e8c34f0483f5b) - add C implementation for `math/base/special/roundsd` [(#4438)](https://github.com/stdlib-js/stdlib/pull/4438)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rsqrt-unreleased">

#### [@stdlib/math/base/special/rsqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rsqrt)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5526](https://github.com/stdlib-js/stdlib/issues/5526)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rsqrtf-unreleased">

#### [@stdlib/math/base/special/rsqrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rsqrtf)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sec-unreleased">

#### [@stdlib/math/base/special/sec](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sec)

<details>

<section class="features">

##### Features

-   [`ed4c8d6`](https://github.com/stdlib-js/stdlib/commit/ed4c8d65a020d119c4baa1eb6716751c75cf8a07) - add support for secant functionality `math/base/special/sec` [(#3027)](https://github.com/stdlib-js/stdlib/pull/3027)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#225](https://github.com/stdlib-js/stdlib/issues/225)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-secd-unreleased">

#### [@stdlib/math/base/special/secd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/secd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`f5459a7`](https://github.com/stdlib-js/stdlib/commit/f5459a759caf08cf4fb882609678e878785d6dc7) - update `math/base/special/secd` to match correct reference implementation [(#5810)](https://github.com/stdlib-js/stdlib/pull/5810)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-signum-unreleased">

#### [@stdlib/math/base/special/signum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/signum)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-signumf-unreleased">

#### [@stdlib/math/base/special/signumf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/signumf)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sin-unreleased">

#### [@stdlib/math/base/special/sin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sin)

<details>

<section class="reverts">

##### Reverts

-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinc-unreleased">

#### [@stdlib/math/base/special/sinc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinc)

<details>

<section class="features">

##### Features

-   [`759e667`](https://github.com/stdlib-js/stdlib/commit/759e6676d54a121a5458edbe0f6caa541c465001) - add C implementation for `math/base/special/sinc`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincos-unreleased">

#### [@stdlib/math/base/special/sincos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincos)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincosd-unreleased">

#### [@stdlib/math/base/special/sincosd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincosd)

<details>

<section class="features">

##### Features

-   [`6d7317a`](https://github.com/stdlib-js/stdlib/commit/6d7317af46884dca86c9775ca98d5c275d5fe05a) - add `math/base/special/sincosd` [(#5837)](https://github.com/stdlib-js/stdlib/pull/5837)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5893](https://github.com/stdlib-js/stdlib/issues/5893)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincospi-unreleased">

#### [@stdlib/math/base/special/sincospi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincospi)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sind-unreleased">

#### [@stdlib/math/base/special/sind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sind)

<details>

<section class="features">

##### Features

-   [`3f0943b`](https://github.com/stdlib-js/stdlib/commit/3f0943b050f49d96debc6c362ca759bf95f440aa) - add `math/base/special/sind` [(#5435)](https://github.com/stdlib-js/stdlib/pull/5435)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`3eeefe6`](https://github.com/stdlib-js/stdlib/commit/3eeefe6514916836d5fd798809bdf8a230d61e4b) - update `sind` to follow the IEEE 754-2019 standard [(#6592)](https://github.com/stdlib-js/stdlib/pull/6592)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinh-unreleased">

#### [@stdlib/math/base/special/sinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinh)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrt-unreleased">

#### [@stdlib/math/base/special/sqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrt)

<details>

<section class="reverts">

##### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrtf-unreleased">

#### [@stdlib/math/base/special/sqrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrtf)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrtpif-unreleased">

#### [@stdlib/math/base/special/sqrtpif](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrtpif)

<details>

<section class="features">

##### Features

-   [`aa5c7a8`](https://github.com/stdlib-js/stdlib/commit/aa5c7a80994aa8c6198b92f20dec9c451b05d1be) - add `math/base/special/sqrtpif`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tan-unreleased">

#### [@stdlib/math/base/special/tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tan)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5399](https://github.com/stdlib-js/stdlib/issues/5399)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tand-unreleased">

#### [@stdlib/math/base/special/tand](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tand)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`874ec3b`](https://github.com/stdlib-js/stdlib/commit/874ec3b3165424a92f43cb2bb843cf949eece5a8) - update `math/base/special/tand` to match correct reference implementation [(#5807)](https://github.com/stdlib-js/stdlib/pull/5807)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tanh-unreleased">

#### [@stdlib/math/base/special/tanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tanh)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tribonacci-unreleased">

#### [@stdlib/math/base/special/tribonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tribonacci)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`dfc7be6`](https://github.com/stdlib-js/stdlib/commit/dfc7be6493380962a6ef790f6ddccfa570aff6f3) - add missing `native.js` to `math/base/special/tribonacci` [(#5472)](https://github.com/stdlib-js/stdlib/pull/5472)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trigamma-unreleased">

#### [@stdlib/math/base/special/trigamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trigamma)

<details>

<section class="features">

##### Features

-   [`16db19b`](https://github.com/stdlib-js/stdlib/commit/16db19ba69114e4f4180464e8c4562b35a3078d2) - add C implementation for `math/base/special/trigamma`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc-unreleased">

#### [@stdlib/math/base/special/trunc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc)

<details>

<section class="reverts">

##### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncf-unreleased">

#### [@stdlib/math/base/special/truncf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncf)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-vercos-unreleased">

#### [@stdlib/math/base/special/vercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/vercos)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-versin-unreleased">

#### [@stdlib/math/base/special/versin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/versin)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-wrap-unreleased">

#### [@stdlib/math/base/special/wrap](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/wrap)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-xlogyf-unreleased">

#### [@stdlib/math/base/special/xlogyf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/xlogyf)

<details>

<section class="features">

##### Features

-   [`16c19b6`](https://github.com/stdlib-js/stdlib/commit/16c19b67c7452b3ae9755cc7ef2a5d2540ab1cf9) - add `math/base/special/xlogyf` [(#2813)](https://github.com/stdlib-js/stdlib/pull/2813)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`0a3d6a1`](https://github.com/stdlib-js/stdlib/commit/0a3d6a1c7a55a18c65e2eef4a309d431c7a3346a): migrate to `stdlib_complex64_t`

    -   To migrate, users should update their usage of `complex` to `stdlib_complex64_t` which is available via `@stdlib/complex-float32/ctor` package.

-   [`d89509f`](https://github.com/stdlib-js/stdlib/commit/d89509f17211915d1fd25c735efc40c2e54cc239): migrate to `stdlib_complex64_t`

    -   To migrate, users should update their usage of `complex` to `stdlib_complex64_t` which is available via `@stdlib/complex-float32/ctor` package.

-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d): use stdlib C complex64 dtype

    -   To migrate, users should provide a value having the type `stdlib_complex64_t`, rather than a built-in C99 single-precision complex dtype. This dtype is available via the package `@stdlib/complex-float32/ctor`.

-   [`2dcec61`](https://github.com/stdlib-js/stdlib/commit/2dcec616498aa8ccab060bd761a9fd626f00035e): remove `math/base/special/cidentityf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`f4a06d9`](https://github.com/stdlib-js/stdlib/commit/f4a06d9b7c3a5075166a8af3cb3643798f35cc2f): remove `cidentityf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`7a67cff`](https://github.com/stdlib-js/stdlib/commit/7a67cfff161e9d66bb3c624d45a4428766efb007): remove `math/base/special/cidentity`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`0ebeaf8`](https://github.com/stdlib-js/stdlib/commit/0ebeaf89ad1af59fb5e998d259d717a588fdcbb3): remove `cidentity`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`53bb578`](https://github.com/stdlib-js/stdlib/commit/53bb578118172e65c51bee68712fcac8526011c1): remove `math/base/special/identityf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/identityf` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`36d3db3`](https://github.com/stdlib-js/stdlib/commit/36d3db3e658584389593390b81866b367bf9c5fa): remove `identityf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`640dfe9`](https://github.com/stdlib-js/stdlib/commit/640dfe977495e9b320a64ab326e5ff5330a1fd8b): remove `math/base/special/identity`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/identity` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`3fa0763`](https://github.com/stdlib-js/stdlib/commit/3fa0763e1264cb2d9b3560735aa57e51c66ff2de): remove `identity`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8): update return value for `n=1`

    -   In order to migrate and preserve prior behavior, users should special case `n=1` and return `0`. The change in this commit aligns return values with SymPy and R; although, other libraries and envs choose to return `-0.5`.

-   [`0ae49fb`](https://github.com/stdlib-js/stdlib/commit/0ae49fba6e79599a4b8b1be464a7570a3c7f6d83): update C API name

    -   This commit changes the name of the C API from `stdlib_base_j1` to `stdlib_base_besselj1`. This ensures that the C function name more closely matches the global namespace name and helps protect against future naming collisions. To migrate, users should update their call signatures accordingly.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 22 issues were closed in this release:

[#122](https://github.com/stdlib-js/stdlib/issues/122), [#216](https://github.com/stdlib-js/stdlib/pull/216), [#225](https://github.com/stdlib-js/stdlib/issues/225), [#649](https://github.com/stdlib-js/stdlib/issues/649), [#3357](https://github.com/stdlib-js/stdlib/issues/3357), [#3393](https://github.com/stdlib-js/stdlib/issues/3393), [#3398](https://github.com/stdlib-js/stdlib/issues/3398), [#5199](https://github.com/stdlib-js/stdlib/issues/5199), [#5274](https://github.com/stdlib-js/stdlib/issues/5274), [#5359](https://github.com/stdlib-js/stdlib/issues/5359), [#5360](https://github.com/stdlib-js/stdlib/issues/5360), [#5363](https://github.com/stdlib-js/stdlib/issues/5363), [#5398](https://github.com/stdlib-js/stdlib/issues/5398), [#5399](https://github.com/stdlib-js/stdlib/issues/5399), [#5526](https://github.com/stdlib-js/stdlib/issues/5526), [#5862](https://github.com/stdlib-js/stdlib/issues/5862), [#5893](https://github.com/stdlib-js/stdlib/issues/5893), [#5898](https://github.com/stdlib-js/stdlib/issues/5898), [#5961](https://github.com/stdlib-js/stdlib/issues/5961), [#6005](https://github.com/stdlib-js/stdlib/issues/6005), [#6384](https://github.com/stdlib-js/stdlib/issues/6384), [#6499](https://github.com/stdlib-js/stdlib/issues/6499)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 26 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Abhijit Raut
-   Aman Bhansali
-   Anshu Kumar
-   Athan Reines
-   Ayaka
-   GK Bishnoi
-   Gautam sharma
-   Gunj Joshi
-   Gururaj Gurram
-   Harsh
-   Jaison D Souza
-   Jalaj Kumar
-   Jay Soni
-   Karan Anand
-   Krishnam Agarwal
-   Neeraj Pathak
-   Philipp Burckhardt
-   PrathamBhamare
-   SAHIL KUMAR
-   Sahil Goyal
-   Saurabh Singh
-   Shabareesh Shetty
-   Vivek Maurya
-   ditsu
-   hrshya

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`a973708`](https://github.com/stdlib-js/stdlib/commit/a973708c85ff1696483ab503201191353125b964) - **docs:** update namespace table of contents [(#6741)](https://github.com/stdlib-js/stdlib/pull/6741) _(by stdlib-bot)_
-   [`9c34a77`](https://github.com/stdlib-js/stdlib/commit/9c34a77e29807a5f03506d3da65e8c34f0483f5b) - **feat:** add C implementation for `math/base/special/roundsd` [(#4438)](https://github.com/stdlib-js/stdlib/pull/4438) _(by Shabareesh Shetty, Athan Reines, stdlib-bot, Karan Anand)_
-   [`d4d57c3`](https://github.com/stdlib-js/stdlib/commit/d4d57c376c6abdcaf1993d7893129b75af4f2056) - **docs:** update namespace table of contents [(#6719)](https://github.com/stdlib-js/stdlib/pull/6719) _(by stdlib-bot)_
-   [`76ad4ca`](https://github.com/stdlib-js/stdlib/commit/76ad4ca02df8a1e1492d3428457a44717e866fc2) - **docs:** replace manual `for` loop in examples [(#6623)](https://github.com/stdlib-js/stdlib/pull/6623) _(by Harsh, Athan Reines, hrshya, stdlib-bot)_
-   [`0a3d6a1`](https://github.com/stdlib-js/stdlib/commit/0a3d6a1c7a55a18c65e2eef4a309d431c7a3346a) - **refactor:** update `math/base/special/cceilf` to follow latest project conventions [(#3400)](https://github.com/stdlib-js/stdlib/pull/3400) _(by Aayush Khanna, stdlib-bot, Karan Anand, Athan Reines)_
-   [`d89509f`](https://github.com/stdlib-js/stdlib/commit/d89509f17211915d1fd25c735efc40c2e54cc239) - **refactor:** update `math/base/special/cabs2f` to follow latest project conventions [(#4767)](https://github.com/stdlib-js/stdlib/pull/4767) _(by Vivek Maurya, stdlib-bot, Karan Anand)_
-   [`3656652`](https://github.com/stdlib-js/stdlib/commit/36566524e333dabea3b4b47c00b154accc1c2c23) - **feat:** add `math/base/special/lucasf` [(#6223)](https://github.com/stdlib-js/stdlib/pull/6223) _(by Harsh, stdlib-bot, Karan Anand)_
-   [`b8286e1`](https://github.com/stdlib-js/stdlib/commit/b8286e14368fbfaba1b39964f9ebe11801edaea0) - **bench:** updates random value generation and docs [(#6658)](https://github.com/stdlib-js/stdlib/pull/6658) _(by Harsh)_
-   [`fcd86ae`](https://github.com/stdlib-js/stdlib/commit/fcd86aee610050abf370c84b7d464de0bb2b486e) - **style:** fix missing space _(by Athan Reines)_
-   [`5a5ac9d`](https://github.com/stdlib-js/stdlib/commit/5a5ac9dafe89d2980d079ae6c074c04be445c7b8) - **docs:** fix return value interpolation _(by Athan Reines)_
-   [`0283c27`](https://github.com/stdlib-js/stdlib/commit/0283c27a0c7795f636dddb096ed5d59e1597b0ad) - **bench:** update random value generation [(#6649)](https://github.com/stdlib-js/stdlib/pull/6649) _(by Harsh)_
-   [`b2f8db2`](https://github.com/stdlib-js/stdlib/commit/b2f8db2d210d980e4921f2a35f7bee359917bcef) - **feat:** add `math/base/special/fibonacci-indexf` [(#6320)](https://github.com/stdlib-js/stdlib/pull/6320) _(by Karan Anand, Athan Reines, stdlib-bot)_
-   [`3560ebc`](https://github.com/stdlib-js/stdlib/commit/3560ebc03ba92b358e142ebbafd6dfe873f5d40a) - **fix:** add missing include _(by Athan Reines)_
-   [`dac7fbc`](https://github.com/stdlib-js/stdlib/commit/dac7fbc738bdf94b2cdbe3de731876d4521ee802) - **docs:** replace manual `for` loop in examples [(#6636)](https://github.com/stdlib-js/stdlib/pull/6636) _(by Harsh, Athan Reines)_
-   [`2698899`](https://github.com/stdlib-js/stdlib/commit/2698899da2e36275d50a66632de336c26dead00a) - **docs:** replace manual `for` loop in examples [(#6637)](https://github.com/stdlib-js/stdlib/pull/6637) _(by Harsh)_
-   [`0395909`](https://github.com/stdlib-js/stdlib/commit/03959095fb9ffbe34ca9603b27c5204ce82d8c89) - **docs:** replace manual `for` loop in examples [(#6638)](https://github.com/stdlib-js/stdlib/pull/6638) _(by Harsh)_
-   [`46cbdfe`](https://github.com/stdlib-js/stdlib/commit/46cbdfeff1b3f2dc38a442eafaf0cc25239fc518) - **docs:** replace manual `for` loop in examples [(#6639)](https://github.com/stdlib-js/stdlib/pull/6639) _(by Harsh)_
-   [`df1110f`](https://github.com/stdlib-js/stdlib/commit/df1110fd63db25a7adf9f78416bf0377742622e4) - **docs:** replace manual `for` loop in examples [(#6640)](https://github.com/stdlib-js/stdlib/pull/6640) _(by Harsh)_
-   [`d069841`](https://github.com/stdlib-js/stdlib/commit/d0698415fd26eb45c1cab1e1be0e4551fdae5656) - **docs:** replace manual `for` loop in examples [(#6641)](https://github.com/stdlib-js/stdlib/pull/6641) _(by Harsh)_
-   [`f1d9b23`](https://github.com/stdlib-js/stdlib/commit/f1d9b232a15c53531ab7110d2f9ccf4ff6db9a5e) - **bench:** update random value generation [(#6645)](https://github.com/stdlib-js/stdlib/pull/6645) _(by Harsh)_
-   [`cae9a13`](https://github.com/stdlib-js/stdlib/commit/cae9a136511539fae4e92823d912e27dfbedfe6d) - **docs:** replace manual `for` loop in examples [(#6635)](https://github.com/stdlib-js/stdlib/pull/6635) _(by Harsh)_
-   [`5982554`](https://github.com/stdlib-js/stdlib/commit/59825542a6f81a71eb16ce2007aac9c12f351938) - **docs:** replace manual `for` loop in examples [(#6644)](https://github.com/stdlib-js/stdlib/pull/6644) _(by Harsh)_
-   [`3c14a0f`](https://github.com/stdlib-js/stdlib/commit/3c14a0ff86030c922414336e82cb027deb18d709) - **docs:** replace manual `for` loop in examples [(#6643)](https://github.com/stdlib-js/stdlib/pull/6643) _(by Harsh)_
-   [`a03db66`](https://github.com/stdlib-js/stdlib/commit/a03db667d2c00aeb97920126637fd792e5784de4) - **bench:** fix random value generation _(by Athan Reines)_
-   [`48f3de7`](https://github.com/stdlib-js/stdlib/commit/48f3de7b465186d4ed11e85e22c0668ac9dd827b) - **docs:** replace manual `for` loop in examples [(#6622)](https://github.com/stdlib-js/stdlib/pull/6622) _(by Harsh, Athan Reines)_
-   [`5087e64`](https://github.com/stdlib-js/stdlib/commit/5087e644a4ad2a77078326a1272a2197bf3f5649) - **docs:** replace manual `for` loop in examples [(#6621)](https://github.com/stdlib-js/stdlib/pull/6621) _(by Harsh)_
-   [`c9cacbf`](https://github.com/stdlib-js/stdlib/commit/c9cacbfe7c80e80d5205c867b49bdeb199a76986) - **test:** add tests for IEEE 754-2019 compliance [(#6571)](https://github.com/stdlib-js/stdlib/pull/6571) _(by Karan Anand, stdlib-bot)_
-   [`864fc4f`](https://github.com/stdlib-js/stdlib/commit/864fc4ffe65a2f6455f92ac10947d9921e23c355) - **test:** add tests for IEEE 754-2019 compliance [(#6620)](https://github.com/stdlib-js/stdlib/pull/6620) _(by Karan Anand, stdlib-bot)_
-   [`1446cc7`](https://github.com/stdlib-js/stdlib/commit/1446cc7f7868cb001f89e41ee6a2961a72b904f4) - **test:** add tests for IEEE 754-2019 compliance [(#6594)](https://github.com/stdlib-js/stdlib/pull/6594) _(by Karan Anand, stdlib-bot)_
-   [`b76169a`](https://github.com/stdlib-js/stdlib/commit/b76169aa779df0938d243db1f92dbd6b81f458ac) - **test:** add tests for IEEE 754-2019 compliance [(#6593)](https://github.com/stdlib-js/stdlib/pull/6593) _(by Karan Anand, stdlib-bot)_
-   [`3eeefe6`](https://github.com/stdlib-js/stdlib/commit/3eeefe6514916836d5fd798809bdf8a230d61e4b) - **fix:** update `sind` to follow the IEEE 754-2019 standard [(#6592)](https://github.com/stdlib-js/stdlib/pull/6592) _(by Karan Anand)_
-   [`ba0637b`](https://github.com/stdlib-js/stdlib/commit/ba0637b9a4bae1689e15af9afb262de249764881) - **test:** add tests for IEEE 754-2019 compliance [(#6597)](https://github.com/stdlib-js/stdlib/pull/6597) _(by Karan Anand)_
-   [`ae963e1`](https://github.com/stdlib-js/stdlib/commit/ae963e14fa197282ac501261a0d08b04a0e0f4a5) - **docs:** replace manual `for` loop in examples [(#6587)](https://github.com/stdlib-js/stdlib/pull/6587) _(by Harsh)_
-   [`dfddd73`](https://github.com/stdlib-js/stdlib/commit/dfddd7395392b17193734b0977955042cb85bb6b) - **docs:** replace manual `for` loop in examples [(#6608)](https://github.com/stdlib-js/stdlib/pull/6608) _(by Harsh, Athan Reines)_
-   [`dd5765d`](https://github.com/stdlib-js/stdlib/commit/dd5765d771186bddbbc716d577bb94eafc0ac36b) - **docs:** replace manual `for` loop in examples [(#6607)](https://github.com/stdlib-js/stdlib/pull/6607) _(by Harsh)_
-   [`1bb6df3`](https://github.com/stdlib-js/stdlib/commit/1bb6df3267f4100a30d0c71c05197716cd314fda) - **docs:** replace manual `for` loop in examples [(#6611)](https://github.com/stdlib-js/stdlib/pull/6611) _(by Harsh)_
-   [`4a76339`](https://github.com/stdlib-js/stdlib/commit/4a76339547e841d83692c3d8e5f364568de055d5) - **docs:** replace manual `for` loop in examples [(#6612)](https://github.com/stdlib-js/stdlib/pull/6612) _(by Harsh)_
-   [`2f78853`](https://github.com/stdlib-js/stdlib/commit/2f788539be521ba8e7e1c76a37e9fddc57530596) - **docs:** update related packages sections [(#6617)](https://github.com/stdlib-js/stdlib/pull/6617) _(by stdlib-bot)_
-   [`1019217`](https://github.com/stdlib-js/stdlib/commit/10192179ef8278f942ac9909b382381f8740e9f0) - **test:** add tests for IEEE 754-2019 compliance [(#6595)](https://github.com/stdlib-js/stdlib/pull/6595) _(by Karan Anand)_
-   [`1065e83`](https://github.com/stdlib-js/stdlib/commit/1065e83f34259320e8bf014f28094a5240cb0374) - **test:** add tests for IEEE 754-2019 compliance [(#6599)](https://github.com/stdlib-js/stdlib/pull/6599) _(by Karan Anand)_
-   [`630ddb7`](https://github.com/stdlib-js/stdlib/commit/630ddb777824b5f6e501fda6dadf4ce41dccb964) - **test:** replace equal with strictEqual _(by Karan Anand)_
-   [`64023d1`](https://github.com/stdlib-js/stdlib/commit/64023d131d8bc0a2dc2f3617db7f5bb8eb54583c) - **test:** add tests for IEEE 754-2019 compliance [(#6573)](https://github.com/stdlib-js/stdlib/pull/6573) _(by Karan Anand)_
-   [`0e376f8`](https://github.com/stdlib-js/stdlib/commit/0e376f8bb234692a55dc57773533114a5512cddd) - **test:** add tests for IEEE 754-2019 compliance [(#6570)](https://github.com/stdlib-js/stdlib/pull/6570) _(by Karan Anand)_
-   [`9211c88`](https://github.com/stdlib-js/stdlib/commit/9211c88ad8ecd436a2fb5311eb00ace0ac8d6f9d) - **test:** add tests for IEEE 754-2019 compliance [(#6561)](https://github.com/stdlib-js/stdlib/pull/6561) _(by Karan Anand, stdlib-bot)_
-   [`d9ad02c`](https://github.com/stdlib-js/stdlib/commit/d9ad02ca1c902ca787d9e9135160871379e40829) - **test:** add tests for IEEE 754-2019 compliance [(#6557)](https://github.com/stdlib-js/stdlib/pull/6557) _(by Karan Anand)_
-   [`5c0b04d`](https://github.com/stdlib-js/stdlib/commit/5c0b04d1e4d0e03a7364541658bada5f20f8e50c) - **chore:** address commit comments for commit bb378ff (issue #6499) [(#6565)](https://github.com/stdlib-js/stdlib/pull/6565) _(by PrathamBhamare)_
-   [`d0c1c2b`](https://github.com/stdlib-js/stdlib/commit/d0c1c2b9a307016b894d7fa3d500c98558bbe197) - **test:** add tests for IEEE 754-2019 compliance [(#6558)](https://github.com/stdlib-js/stdlib/pull/6558) _(by Karan Anand)_
-   [`3e268db`](https://github.com/stdlib-js/stdlib/commit/3e268db3108b0f330cbadcad5c20b7fec6fea355) - **test:** add tests for IEEE 754-2019 compliance [(#6556)](https://github.com/stdlib-js/stdlib/pull/6556) _(by Karan Anand)_
-   [`7896f80`](https://github.com/stdlib-js/stdlib/commit/7896f80700cc662cc72126b8a9e81bf392f916b8) - **test:** add tests for IEEE 754-2019 compliance [(#6559)](https://github.com/stdlib-js/stdlib/pull/6559) _(by Karan Anand)_
-   [`1e85369`](https://github.com/stdlib-js/stdlib/commit/1e8536951a859bc8e78a5791a99cbc2553e1df34) - **test:** add tests for IEEE 754-2019 compliance [(#6560)](https://github.com/stdlib-js/stdlib/pull/6560) _(by Karan Anand)_
-   [`7184862`](https://github.com/stdlib-js/stdlib/commit/71848621a0bb8380055d696c50db378f18ee9663) - **test:** add tests for IEEE 754-2019 compliance [(#6562)](https://github.com/stdlib-js/stdlib/pull/6562) _(by Karan Anand)_
-   [`d8437b8`](https://github.com/stdlib-js/stdlib/commit/d8437b85b0a0e4a1a27098ea88ccf1332a126408) - **test:** add tests for IEEE 754-2019 compliance [(#6563)](https://github.com/stdlib-js/stdlib/pull/6563) _(by Karan Anand)_
-   [`f7db171`](https://github.com/stdlib-js/stdlib/commit/f7db17180a75fd1c3b7f5311ded957d4cfca07f5) - **test:** add tests for IEEE 754-2019 compliance [(#6564)](https://github.com/stdlib-js/stdlib/pull/6564) _(by Karan Anand)_
-   [`b1a5a2d`](https://github.com/stdlib-js/stdlib/commit/b1a5a2d87a0e1f5a0bd6d74d521cae9eeab435c8) - **docs:** replace manual `for` loop in examples [(#6550)](https://github.com/stdlib-js/stdlib/pull/6550) _(by Harsh, Athan Reines)_
-   [`8a365fc`](https://github.com/stdlib-js/stdlib/commit/8a365fcdd9eb22d5818e44f7447b77345deb1b1e) - **bench:** refactor random number generation `math/base/special/cexp*` [(#5888)](https://github.com/stdlib-js/stdlib/pull/5888) _(by Saurabh Singh, Athan Reines, stdlib-bot)_
-   [`3e1d620`](https://github.com/stdlib-js/stdlib/commit/3e1d6200c9ca9e7ce0324508f5fcf18d11dd73db) - **bench:** refactor benchmarks in `math/base/special/exp` [(#5855)](https://github.com/stdlib-js/stdlib/pull/5855) _(by Gururaj Gurram, Athan Reines, Gunj Joshi, stdlib-bot)_
-   [`7584a65`](https://github.com/stdlib-js/stdlib/commit/7584a6584fbeadfb76adc52323cc8e368c2a19a4) - **bench:** remove benchmarks _(by Athan Reines)_
-   [`cbffd97`](https://github.com/stdlib-js/stdlib/commit/cbffd97f717891016aad4475cb076a0c6ca9a17a) - **test:** add tests for C99 edge cases [(#6519)](https://github.com/stdlib-js/stdlib/pull/6519) _(by Karan Anand)_
-   [`f9cd43c`](https://github.com/stdlib-js/stdlib/commit/f9cd43c1179fb822caa68afbfc6af56d2e128e9e) - **feat:** add `math/base/special/atan2d` [(#6273)](https://github.com/stdlib-js/stdlib/pull/6273) _(by Karan Anand, Athan Reines, stdlib-bot)_
-   [`1aa6c6d`](https://github.com/stdlib-js/stdlib/commit/1aa6c6d65fe035bd63db09873e75692f98fda273) - **test:** add tests for C99 edge cases [(#6389)](https://github.com/stdlib-js/stdlib/pull/6389) _(by Karan Anand)_
-   [`8af2d8d`](https://github.com/stdlib-js/stdlib/commit/8af2d8d5690438af3fb3bcbc03b304ab4bef13cf) - **fix:** update `hypotf` to follow the IEEE 754-2019 standard [(#6511)](https://github.com/stdlib-js/stdlib/pull/6511) _(by Karan Anand)_
-   [`0dc5e1f`](https://github.com/stdlib-js/stdlib/commit/0dc5e1f8a98e82310a309649f58a0dc3acfedb68) - **fix:** update `hypot` to follow the IEEE 754-2019 standard [(#6509)](https://github.com/stdlib-js/stdlib/pull/6509) _(by Karan Anand)_
-   [`8297683`](https://github.com/stdlib-js/stdlib/commit/82976838f1d49e5439f658f19c6bc2b9c21c771e) - **feat:** add `math/base/special/fibonaccif` [(#6257)](https://github.com/stdlib-js/stdlib/pull/6257) _(by Karan Anand, stdlib-bot)_
-   [`9b72f0c`](https://github.com/stdlib-js/stdlib/commit/9b72f0cc9ae1a8fe839c8fc873bc3cd7b68dcb76) - **feat:** add `math/base/special/csignumf` [(#6361)](https://github.com/stdlib-js/stdlib/pull/6361) _(by Karan Anand, Athan Reines, stdlib-bot)_
-   [`feb552b`](https://github.com/stdlib-js/stdlib/commit/feb552baaf86a434df4724ab94d587dcac75e482) - **bench:** update random value generation [(#6393)](https://github.com/stdlib-js/stdlib/pull/6393) _(by Harsh)_
-   [`5df078f`](https://github.com/stdlib-js/stdlib/commit/5df078fd493ee2d6750fa0be85cb3b39236e227c) - **docs:** replace manual `for` loop in examples [(#6494)](https://github.com/stdlib-js/stdlib/pull/6494) _(by Harsh)_
-   [`0dc3f20`](https://github.com/stdlib-js/stdlib/commit/0dc3f204f59a046f0245b22470de431d654a34cd) - **docs:** replace manual `for` loop in examples [(#6496)](https://github.com/stdlib-js/stdlib/pull/6496) _(by Harsh)_
-   [`220f055`](https://github.com/stdlib-js/stdlib/commit/220f05572a13425bd7b49efbf6102eef8975d9c1) - **chore:** replace manual `for` loop in examples [(#6491)](https://github.com/stdlib-js/stdlib/pull/6491) _(by Harsh)_
-   [`a81d6c3`](https://github.com/stdlib-js/stdlib/commit/a81d6c35d11075753c928e38258023266932486e) - **chore:** replace manual `for` loop in examples [(#6488)](https://github.com/stdlib-js/stdlib/pull/6488) _(by Harsh)_
-   [`3425c5a`](https://github.com/stdlib-js/stdlib/commit/3425c5a231e90c72af55fc462e8aa18401a9ebdf) - **bench:** add missing `native.js` and fix variable range [(#6467)](https://github.com/stdlib-js/stdlib/pull/6467) _(by Karan Anand, stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`86a5626`](https://github.com/stdlib-js/stdlib/commit/86a5626e1cb0cf5cb208e94c48b79a109025cc8f) - **docs:** replace manual `for` loop in examples [(#6471)](https://github.com/stdlib-js/stdlib/pull/6471) _(by Harsh, stdlib-bot)_
-   [`bb378ff`](https://github.com/stdlib-js/stdlib/commit/bb378ffa3c07f4acce9504440d26db9d2d97e091) - **docs:** replace manual `for` loop in examples [(#6472)](https://github.com/stdlib-js/stdlib/pull/6472) _(by Harsh)_
-   [`eb0c8c9`](https://github.com/stdlib-js/stdlib/commit/eb0c8c9b4a7c818e6083383684a139841574f5bb) - **docs:** replace manual `for` loop in examples [(#6468)](https://github.com/stdlib-js/stdlib/pull/6468) _(by Harsh)_
-   [`7ae0a0a`](https://github.com/stdlib-js/stdlib/commit/7ae0a0a5479ab78f05a9044e1362caabad1db81a) - **bench:** ensure analytic formula is measured [(#5873)](https://github.com/stdlib-js/stdlib/pull/5873) _(by Anshu Kumar)_
-   [`51ba192`](https://github.com/stdlib-js/stdlib/commit/51ba1926c849a9997662f0f636165b59320214ba) - **bench:** update random value generation [(#6390)](https://github.com/stdlib-js/stdlib/pull/6390) _(by Harsh)_
-   [`6a954bc`](https://github.com/stdlib-js/stdlib/commit/6a954bc5b7a86abb6671edd83b302c464c228c1c) - **bench:** replace `base/uniform` with `array/uniform` [(#6454)](https://github.com/stdlib-js/stdlib/pull/6454) _(by Sahil Goyal, Sahil Goyal)_
-   [`b834207`](https://github.com/stdlib-js/stdlib/commit/b834207f43accd6caa5d8e5cc8ad7ff039687f24) - **chore:** replace manual `for` loop in examples [(#6403)](https://github.com/stdlib-js/stdlib/pull/6403) _(by Harsh, stdlib-bot)_
-   [`e9f9513`](https://github.com/stdlib-js/stdlib/commit/e9f951387dd4387dc0a7b4acfadc59c5b2541736) - **bench:** update random value generation [(#6430)](https://github.com/stdlib-js/stdlib/pull/6430) _(by Harsh)_
-   [`2decebf`](https://github.com/stdlib-js/stdlib/commit/2decebfef3381b37b7c84ebe6c4e35792d685e1e) - **chore:** update package meta data [(#6447)](https://github.com/stdlib-js/stdlib/pull/6447) _(by stdlib-bot)_
-   [`8d343e1`](https://github.com/stdlib-js/stdlib/commit/8d343e192c75b0c60451e996351ccf276b49f2c4) - **bench:** update random value generation [(#6398)](https://github.com/stdlib-js/stdlib/pull/6398) _(by Harsh)_
-   [`07b51a4`](https://github.com/stdlib-js/stdlib/commit/07b51a4996fa515e6a2595413027b1fa670f7503) - **bench:** update random value generation [(#6378)](https://github.com/stdlib-js/stdlib/pull/6378) _(by Harsh, Philipp Burckhardt)_
-   [`cb2ef9b`](https://github.com/stdlib-js/stdlib/commit/cb2ef9bad19f6adf8735316ea672facec6656ca2) - **bench:** add C native benchmarks and missing variable declaration [(#6443)](https://github.com/stdlib-js/stdlib/pull/6443) _(by Karan Anand)_
-   [`ed27d17`](https://github.com/stdlib-js/stdlib/commit/ed27d17c614ad01c40d4f82f269541d9f388ab96) - **docs:** remove repeated example input [(#6442)](https://github.com/stdlib-js/stdlib/pull/6442) _(by Karan Anand)_
-   [`c569d0f`](https://github.com/stdlib-js/stdlib/commit/c569d0ff888bc76a9980f5edb6e1c6f462d6e508) - **bench:** update random value generation [(#6380)](https://github.com/stdlib-js/stdlib/pull/6380) _(by Harsh, Philipp Burckhardt)_
-   [`3a6a913`](https://github.com/stdlib-js/stdlib/commit/3a6a913fe41d3ffbbb4f73837fc6aa8396cdccce) - **bench:** update random value generation [(#6377)](https://github.com/stdlib-js/stdlib/pull/6377) _(by Harsh)_
-   [`b9af090`](https://github.com/stdlib-js/stdlib/commit/b9af09027170bf2731cdd50563be1a9d0f86b289) - **bench:** update random value generation [(#6400)](https://github.com/stdlib-js/stdlib/pull/6400) _(by Harsh)_
-   [`5b8deb1`](https://github.com/stdlib-js/stdlib/commit/5b8deb1707b3e84534d70d2ac20253de39151947) - **bench:** update random value generation [(#6381)](https://github.com/stdlib-js/stdlib/pull/6381) _(by Harsh)_
-   [`b6667b9`](https://github.com/stdlib-js/stdlib/commit/b6667b9be170d2a64db2d075cec22539b0125187) - **chore:** replace manual `for` loop in examples [(#6350)](https://github.com/stdlib-js/stdlib/pull/6350) _(by Harsh)_
-   [`d8a20bb`](https://github.com/stdlib-js/stdlib/commit/d8a20bb7b928d03a81a570edec5cc0e2e6e74b99) - **chore:** use `FLOAT64_MAX_SAFE_NTH_FACTORIAL` [(#6370)](https://github.com/stdlib-js/stdlib/pull/6370) _(by Karan Anand)_
-   [`3bc9214`](https://github.com/stdlib-js/stdlib/commit/3bc921468809e515391760ff43e78f66a263f188) - **chore:** use `FLOAT64_MAX_SAFE_NTH_DOUBLE_FACTORIAL` [(#6363)](https://github.com/stdlib-js/stdlib/pull/6363) _(by Karan Anand)_
-   [`3408293`](https://github.com/stdlib-js/stdlib/commit/340829337789351817a297fd78fac9fc96b1701a) - **refactor:** replace `pow` with `stdlib_base_pow` [(#6369)](https://github.com/stdlib-js/stdlib/pull/6369) _(by Karan Anand)_
-   [`dcb628f`](https://github.com/stdlib-js/stdlib/commit/dcb628f8736fb6b1b3ba3f37f42758078a9ad5dc) - **bench:** update `randu` to `uniform` for consistency [(#6041)](https://github.com/stdlib-js/stdlib/pull/6041) _(by Harsh)_
-   [`1c8af8c`](https://github.com/stdlib-js/stdlib/commit/1c8af8c18d6ad79690b28a1c01bd5874c7b8e68b) - **refactor:** replace `fmax` with `stdlib_base_max` [(#6367)](https://github.com/stdlib-js/stdlib/pull/6367) _(by Karan Anand)_
-   [`7f74294`](https://github.com/stdlib-js/stdlib/commit/7f7429488d85514b016581098e1faefab81f8034) - **bench:** update random value generation [(#6428)](https://github.com/stdlib-js/stdlib/pull/6428) _(by Harsh)_
-   [`a644ffe`](https://github.com/stdlib-js/stdlib/commit/a644ffeba579430f342444b80fa9d21cc4a635f4) - **chore:** remove obsolete accuracy and precision scripts [(#6435)](https://github.com/stdlib-js/stdlib/pull/6435) _(by Karan Anand)_
-   [`2db8e90`](https://github.com/stdlib-js/stdlib/commit/2db8e905c9b92be0062c8faafe79dbd626ce10f2) - **bench:** fix invalid array indexing [(#6434)](https://github.com/stdlib-js/stdlib/pull/6434) _(by Karan Anand)_
-   [`57efa3d`](https://github.com/stdlib-js/stdlib/commit/57efa3d9de9c4c2f0a94387079e356dad7649a40) - **chore:** rename C files to follow current project conventions [(#6410)](https://github.com/stdlib-js/stdlib/pull/6410) _(by Karan Anand, stdlib-bot)_
-   [`d6e3fd4`](https://github.com/stdlib-js/stdlib/commit/d6e3fd4cd923481eeb8ca637cd6ec487ae5492f1) - **chore:** remove obsolete accuracy scripts in `acosh` [(#6409)](https://github.com/stdlib-js/stdlib/pull/6409) _(by Karan Anand)_
-   [`8839ab9`](https://github.com/stdlib-js/stdlib/commit/8839ab90e8b42266b86fbcec4954bb78edce656b) - **style:** disable lint rule [(#6404)](https://github.com/stdlib-js/stdlib/pull/6404) _(by SAHIL KUMAR)_
-   [`6c34fb7`](https://github.com/stdlib-js/stdlib/commit/6c34fb73a0fc81142c09c1002c2e2c64e21dd018) - **bench:** update random value generation [(#6414)](https://github.com/stdlib-js/stdlib/pull/6414) _(by Harsh)_
-   [`0c7aeae`](https://github.com/stdlib-js/stdlib/commit/0c7aeae1d2be1dd2c4766a2131c0fb26ba4c6420) - **docs:** update namespace TypeScript declarations [(#6386)](https://github.com/stdlib-js/stdlib/pull/6386) _(by stdlib-bot)_
-   [`ef90f52`](https://github.com/stdlib-js/stdlib/commit/ef90f526214e3797a5cf1db3fb7e0e79155ac7d5) - **chore:** replace `pow` with `stdlib_base_pow` [(#6366)](https://github.com/stdlib-js/stdlib/pull/6366) _(by Karan Anand)_
-   [`6001e62`](https://github.com/stdlib-js/stdlib/commit/6001e62175bc901f0ca23e6b8854b88075d0c869) - **refactor:** replace `evalpoly` with compiled polyval functions [(#6368)](https://github.com/stdlib-js/stdlib/pull/6368) _(by Karan Anand)_
-   [`b72f445`](https://github.com/stdlib-js/stdlib/commit/b72f44598bf4a0bbcf3e5ddba485dbf79e58981f) - **refactor:** replace separate `sin` and `cos` calls with `sincos` [(#6365)](https://github.com/stdlib-js/stdlib/pull/6365) _(by Karan Anand)_
-   [`9ba3f82`](https://github.com/stdlib-js/stdlib/commit/9ba3f820c5e048c65a7aadb97ae178b40774b315) - **chore:** update random value generation and test messages [(#6343)](https://github.com/stdlib-js/stdlib/pull/6343) _(by Harsh)_
-   [`90d0d11`](https://github.com/stdlib-js/stdlib/commit/90d0d1193f14ab787e2d75d6f862d03e2105006e) - **chore:** update random value generation and test messages [(#6346)](https://github.com/stdlib-js/stdlib/pull/6346) _(by Harsh)_
-   [`e71eb03`](https://github.com/stdlib-js/stdlib/commit/e71eb032c2960ae3f10071bc005e987a7718aba6) - **bench:** update random value generation [(#6349)](https://github.com/stdlib-js/stdlib/pull/6349) _(by Harsh)_
-   [`90b8cb0`](https://github.com/stdlib-js/stdlib/commit/90b8cb0661088133ece286e2c9f9be687a83a59b) - **docs:** fix example values [(#6362)](https://github.com/stdlib-js/stdlib/pull/6362) _(by Karan Anand)_
-   [`2e1dd43`](https://github.com/stdlib-js/stdlib/commit/2e1dd438de6a412fcb94d486933a61709fd250ab) - **chore:** replace manual `for` loop in examples [(#6351)](https://github.com/stdlib-js/stdlib/pull/6351) _(by Harsh)_
-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d) - **feat:** update `math/base/special/cabsf` to accept stdlib complex numbers [(#3358)](https://github.com/stdlib-js/stdlib/pull/3358) _(by Aayush Khanna, stdlib-bot)_
-   [`75cbf89`](https://github.com/stdlib-js/stdlib/commit/75cbf899216dadede64e77994fe058932facc51b) - **chore:** replace manual `for` loop in examples [(#6308)](https://github.com/stdlib-js/stdlib/pull/6308) _(by Harsh, stdlib-bot)_
-   [`e0d7522`](https://github.com/stdlib-js/stdlib/commit/e0d7522fc5f65cbb7e949eeed509a45b208008ec) - **bench:** update random value generation [(#6327)](https://github.com/stdlib-js/stdlib/pull/6327) _(by Harsh, Athan Reines)_
-   [`876aac6`](https://github.com/stdlib-js/stdlib/commit/876aac65e39f884b6e8be5788b5eca8f99742572) - **bench:** update random value generation [(#6330)](https://github.com/stdlib-js/stdlib/pull/6330) _(by Harsh)_
-   [`83ae24b`](https://github.com/stdlib-js/stdlib/commit/83ae24b63045e64818375fa4765cfd3c1eed1b97) - **bench:** update random value generation [(#6331)](https://github.com/stdlib-js/stdlib/pull/6331) _(by Harsh)_
-   [`235d042`](https://github.com/stdlib-js/stdlib/commit/235d0424bb02a096a281d3cfde0b596492127519) - **docs:** use correct function name [(#6323)](https://github.com/stdlib-js/stdlib/pull/6323) _(by Karan Anand)_
-   [`b103cae`](https://github.com/stdlib-js/stdlib/commit/b103caebeb565cdcdc08a76cd131ad1ea0b55a27) - **bench:** update random value generation [(#6301)](https://github.com/stdlib-js/stdlib/pull/6301) _(by Harsh, stdlib-bot)_
-   [`6187773`](https://github.com/stdlib-js/stdlib/commit/6187773d4d95c73e0e8a8f6c43dcd53d5323f9d2) - **bench:** update random value generation [(#6298)](https://github.com/stdlib-js/stdlib/pull/6298) _(by Harsh)_
-   [`44445ab`](https://github.com/stdlib-js/stdlib/commit/44445ab0a65a29e3bb593a11f87d9035e552474f) - **bench:** update random value generation [(#6302)](https://github.com/stdlib-js/stdlib/pull/6302) _(by Harsh)_
-   [`d3bf998`](https://github.com/stdlib-js/stdlib/commit/d3bf998980b55e4a0ad53ad3b9053c9b12204b0e) - **bench:** update random value generation [(#6269)](https://github.com/stdlib-js/stdlib/pull/6269) _(by Harsh, Athan Reines)_
-   [`5b45d4b`](https://github.com/stdlib-js/stdlib/commit/5b45d4b48b3cff026b41a744f16ecc49d97af267) - **bench:** update random value generation [(#6288)](https://github.com/stdlib-js/stdlib/pull/6288) _(by Harsh)_
-   [`9ce2dec`](https://github.com/stdlib-js/stdlib/commit/9ce2decfd41d8cfd950983bcb8247287c42e9b33) - **bench:** update random value generation [(#6289)](https://github.com/stdlib-js/stdlib/pull/6289) _(by Harsh)_
-   [`1ea9a67`](https://github.com/stdlib-js/stdlib/commit/1ea9a671f0486cd91924f92380ab5a5ff315a445) - **bench:** update random value generation [(#6291)](https://github.com/stdlib-js/stdlib/pull/6291) _(by Harsh)_
-   [`305348b`](https://github.com/stdlib-js/stdlib/commit/305348b735548c20bc9cca738761d2d867df0f00) - **bench:** update random value generation [(#6264)](https://github.com/stdlib-js/stdlib/pull/6264) _(by Harsh)_
-   [`afd63f8`](https://github.com/stdlib-js/stdlib/commit/afd63f8c606a77b7030e060499e38f398512bf96) - **bench:** update random value generation [(#6265)](https://github.com/stdlib-js/stdlib/pull/6265) _(by Harsh)_
-   [`cbceb64`](https://github.com/stdlib-js/stdlib/commit/cbceb6427c61440800ca0126f2abbe2d19817ec2) - **bench:** update random value generation [(#6267)](https://github.com/stdlib-js/stdlib/pull/6267) _(by Harsh)_
-   [`850472b`](https://github.com/stdlib-js/stdlib/commit/850472b35f4cf47cab44047acd94a9120d6d5b77) - **docs:** replace manual `for` loop in examples [(#6182)](https://github.com/stdlib-js/stdlib/pull/6182) _(by Karan Anand)_
-   [`27c7679`](https://github.com/stdlib-js/stdlib/commit/27c767906c6b36140a9536cbb00946276eabdb6a) - **chore:** address commit comment [(#5943)](https://github.com/stdlib-js/stdlib/pull/5943) _(by Jalaj Kumar, Athan Reines)_
-   [`d20e133`](https://github.com/stdlib-js/stdlib/commit/d20e1335e8ca73bb8821c01a654416040ea3588e) - **bench:** update random value generation [(#6231)](https://github.com/stdlib-js/stdlib/pull/6231) _(by Harsh, Athan Reines)_
-   [`dfb9b3f`](https://github.com/stdlib-js/stdlib/commit/dfb9b3fcfd3506427d3965ab98a1fe7953c92e24) - **bench:** update random value generation [(#6234)](https://github.com/stdlib-js/stdlib/pull/6234) _(by Harsh, Athan Reines)_
-   [`811e510`](https://github.com/stdlib-js/stdlib/commit/811e5106adc9ab855d7992985e1719fc25642125) - **bench:** update random value generation [(#6232)](https://github.com/stdlib-js/stdlib/pull/6232) _(by Harsh, Athan Reines)_
-   [`d39d0fa`](https://github.com/stdlib-js/stdlib/commit/d39d0fa9bc25909af6cbfc07c18c88a1dd7c3ce6) - **docs:** update namespace table of contents [(#6218)](https://github.com/stdlib-js/stdlib/pull/6218) _(by stdlib-bot)_
-   [`3de5b71`](https://github.com/stdlib-js/stdlib/commit/3de5b71fc9452ae74354907e2c346a7c1e92b4a8) - **bench:** update random value generation [(#6158)](https://github.com/stdlib-js/stdlib/pull/6158) _(by Harsh)_
-   [`44d40da`](https://github.com/stdlib-js/stdlib/commit/44d40dac55720aa7f822fb97bb0c6d4ca0599cf8) - **bench:** update random value generation [(#6160)](https://github.com/stdlib-js/stdlib/pull/6160) _(by Harsh)_
-   [`1f50c39`](https://github.com/stdlib-js/stdlib/commit/1f50c39f80b82063df058f738e1798e192ca0911) - **bench:** update random value generation [(#6164)](https://github.com/stdlib-js/stdlib/pull/6164) _(by Harsh)_
-   [`6417ebc`](https://github.com/stdlib-js/stdlib/commit/6417ebc2af5c3c066ce82f90aeab1ec0f8f43905) - **bench:** update random value generation [(#6199)](https://github.com/stdlib-js/stdlib/pull/6199) _(by Harsh)_
-   [`3a03010`](https://github.com/stdlib-js/stdlib/commit/3a030103e5405100c7663a76c0f98cefa13bad78) - **bench:** update random value generation [(#6204)](https://github.com/stdlib-js/stdlib/pull/6204) _(by Harsh)_
-   [`8959b08`](https://github.com/stdlib-js/stdlib/commit/8959b0832d8a7d7f9ed8f56b43b7866af72554bd) - **chore:** fix C lint errors [(#6194)](https://github.com/stdlib-js/stdlib/pull/6194) _(by Jay Soni)_
-   [`2dcec61`](https://github.com/stdlib-js/stdlib/commit/2dcec616498aa8ccab060bd761a9fd626f00035e) - **remove:** remove `math/base/special/cidentityf` _(by Gururaj Gurram)_
-   [`845e64a`](https://github.com/stdlib-js/stdlib/commit/845e64a2f7e12bd60729097230774569b2d4954e) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`f4a06d9`](https://github.com/stdlib-js/stdlib/commit/f4a06d9b7c3a5075166a8af3cb3643798f35cc2f) - **remove:** remove `cidentityf` from namespace _(by Gururaj Gurram)_
-   [`b6ae0c9`](https://github.com/stdlib-js/stdlib/commit/b6ae0c97e3badc205cd9e6a81ff7c9d1838851c5) - **docs:** update namespace table of contents [(#6139)](https://github.com/stdlib-js/stdlib/pull/6139) _(by stdlib-bot)_
-   [`7a67cff`](https://github.com/stdlib-js/stdlib/commit/7a67cfff161e9d66bb3c624d45a4428766efb007) - **remove:** remove `math/base/special/cidentity` _(by Gururaj Gurram)_
-   [`74826d6`](https://github.com/stdlib-js/stdlib/commit/74826d6d9c5c800da64c3a9821a511fef2fd0a67) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`0ebeaf8`](https://github.com/stdlib-js/stdlib/commit/0ebeaf89ad1af59fb5e998d259d717a588fdcbb3) - **remove:** remove `cidentity` from namespace _(by Gururaj Gurram)_
-   [`53bb578`](https://github.com/stdlib-js/stdlib/commit/53bb578118172e65c51bee68712fcac8526011c1) - **remove:** remove `math/base/special/identityf` _(by Gururaj Gurram)_
-   [`74b15bb`](https://github.com/stdlib-js/stdlib/commit/74b15bba6c22bcdd23d61a4e8996a59c7ef0f041) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`36d3db3`](https://github.com/stdlib-js/stdlib/commit/36d3db3e658584389593390b81866b367bf9c5fa) - **remove:** remove `identityf` from namespace _(by Gururaj Gurram)_
-   [`77d3b84`](https://github.com/stdlib-js/stdlib/commit/77d3b84fcc127a32ccce5f9d9abccac7a41b52ea) - **chore:** rename variable for consistency [(#6113)](https://github.com/stdlib-js/stdlib/pull/6113) _(by Harsh)_
-   [`7ec867d`](https://github.com/stdlib-js/stdlib/commit/7ec867d8e7c398f6b6774ccc35ff093a090e913f) - **chore:** resolve JavaScript lint errors [(#5967)](https://github.com/stdlib-js/stdlib/pull/5967) _(by Gautam sharma, Aayush Khanna)_
-   [`640dfe9`](https://github.com/stdlib-js/stdlib/commit/640dfe977495e9b320a64ab326e5ff5330a1fd8b) - **remove:** remove `math/base/special/identity` _(by Gururaj Gurram)_
-   [`3938b26`](https://github.com/stdlib-js/stdlib/commit/3938b265e603116448c89fcaa58df70e79d40f59) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`3fa0763`](https://github.com/stdlib-js/stdlib/commit/3fa0763e1264cb2d9b3560735aa57e51c66ff2de) - **remove:** remove `identity` from namespace _(by Gururaj Gurram)_
-   [`b93bbb1`](https://github.com/stdlib-js/stdlib/commit/b93bbb19d5f3142b563064cfc732640ee0659e2c) - **docs:** replace manual `for` loop in examples _(by Athan Reines)_
-   [`bde09b5`](https://github.com/stdlib-js/stdlib/commit/bde09b5464e1faab4b01b03509626755c661db20) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`c741f19`](https://github.com/stdlib-js/stdlib/commit/c741f19410c565ec113a79a399dde2181761ad94) - **bench:** update random value generation [(#6036)](https://github.com/stdlib-js/stdlib/pull/6036) _(by Karan Anand)_
-   [`2c13316`](https://github.com/stdlib-js/stdlib/commit/2c13316e1383216d08ab1c1560ddcaf8c6ba414b) - **bench:** update random value generation [(#6037)](https://github.com/stdlib-js/stdlib/pull/6037) _(by Karan Anand)_
-   [`adef168`](https://github.com/stdlib-js/stdlib/commit/adef168dccaecd20560002341c76e9bb06794c6d) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`e196811`](https://github.com/stdlib-js/stdlib/commit/e196811330529364e4bf889dc9df2f74f3bf5cb9) - **bench:** update random value generation [(#5987)](https://github.com/stdlib-js/stdlib/pull/5987) _(by Karan Anand)_
-   [`3bad287`](https://github.com/stdlib-js/stdlib/commit/3bad287c1589abf75463bbb43311c22d4a991c22) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`9708f63`](https://github.com/stdlib-js/stdlib/commit/9708f637cb250d194c0c86cdb4605bb15c95e4a5) - **bench:** refactor benchmarks in `math/base/special/asec` [(#5959)](https://github.com/stdlib-js/stdlib/pull/5959) _(by Gururaj Gurram, Athan Reines)_
-   [`fccc0b2`](https://github.com/stdlib-js/stdlib/commit/fccc0b294aa5be12f8e08aa2b7085c2a978de30c) - **chore:** update `runner.jl` to follow current project conventions [(#5988)](https://github.com/stdlib-js/stdlib/pull/5988) _(by Karan Anand)_
-   [`4748a5a`](https://github.com/stdlib-js/stdlib/commit/4748a5a2ba84c637c10515c018a9f5162f42c8ee) - **chore(sincosd):** address commit comments [(#5955)](https://github.com/stdlib-js/stdlib/pull/5955) _(by Jaison D Souza)_
-   [`874ec3b`](https://github.com/stdlib-js/stdlib/commit/874ec3b3165424a92f43cb2bb843cf949eece5a8) - **fix:** update `math/base/special/tand` to match correct reference implementation [(#5807)](https://github.com/stdlib-js/stdlib/pull/5807) _(by Karan Anand)_
-   [`f8fb944`](https://github.com/stdlib-js/stdlib/commit/f8fb944573e11a46abeddcf205f4efec0aa3a5ad) - **bench:** refactor benchmarks in `math/base/special/gamma` [(#5884)](https://github.com/stdlib-js/stdlib/pull/5884) _(by Gururaj Gurram)_
-   [`a12b502`](https://github.com/stdlib-js/stdlib/commit/a12b5024dd873533a9fb16a01cb2760349197a2f) - **test:** validate implementation against Julia test fixtures [(#5847)](https://github.com/stdlib-js/stdlib/pull/5847) _(by Karan Anand)_
-   [`90f8a26`](https://github.com/stdlib-js/stdlib/commit/90f8a2641c1ca3f288ff45faa65b5f6b148eb203) - **test:** validate implementation against Julia test fixtures [(#5942)](https://github.com/stdlib-js/stdlib/pull/5942) _(by Karan Anand)_
-   [`b62a24d`](https://github.com/stdlib-js/stdlib/commit/b62a24d62532fdccf36f8c66823d0d020ba532fd) - **test:** validate implementation against Julia test fixtures [(#5944)](https://github.com/stdlib-js/stdlib/pull/5944) _(by Karan Anand)_
-   [`6fa8a1b`](https://github.com/stdlib-js/stdlib/commit/6fa8a1bb1c4963e417439f8730a5799a8c013d86) - **chore:** address commit comments [(#5875)](https://github.com/stdlib-js/stdlib/pull/5875) _(by Karan Anand)_
-   [`b688f77`](https://github.com/stdlib-js/stdlib/commit/b688f776dca5b304aa3360bd5716d1d44e5ee846) - **docs:** update namespace TypeScript declarations [(#5868)](https://github.com/stdlib-js/stdlib/pull/5868) _(by stdlib-bot)_
-   [`c52b466`](https://github.com/stdlib-js/stdlib/commit/c52b4669f8f55271054c3e0fc1c959e4d5de2d29) - **docs:** update namespace table of contents [(#5870)](https://github.com/stdlib-js/stdlib/pull/5870) _(by stdlib-bot)_
-   [`9c97323`](https://github.com/stdlib-js/stdlib/commit/9c97323a8d2417f53c7fa94009b67e7b26212842) - **test:** fix use of `tape.skip` [(#5872)](https://github.com/stdlib-js/stdlib/pull/5872) _(by Karan Anand)_
-   [`83f88d9`](https://github.com/stdlib-js/stdlib/commit/83f88d9366f1b39342a43ddfc6e36273be38a4ee) - **docs:** update function descriptions [(#5866)](https://github.com/stdlib-js/stdlib/pull/5866) _(by Karan Anand)_
-   [`6d7317a`](https://github.com/stdlib-js/stdlib/commit/6d7317af46884dca86c9775ca98d5c275d5fe05a) - **feat:** add `math/base/special/sincosd` [(#5837)](https://github.com/stdlib-js/stdlib/pull/5837) _(by Karan Anand, Gunj Joshi)_
-   [`75941b9`](https://github.com/stdlib-js/stdlib/commit/75941b94bd2713c857146756596925bb4299af6e) - **fix:** update `math/base/special/cotd` to match correct reference implementation [(#5813)](https://github.com/stdlib-js/stdlib/pull/5813) _(by Karan Anand)_
-   [`73d8eb8`](https://github.com/stdlib-js/stdlib/commit/73d8eb85e52e10d7928ec64809752baa2b23e4cc) - **bench:** refactor random generation in `math/base/special/ceil*` [(#5834)](https://github.com/stdlib-js/stdlib/pull/5834) _(by Saurabh Singh)_
-   [`1e8a149`](https://github.com/stdlib-js/stdlib/commit/1e8a1497524689db341608fb6a04e7adb6b9e90d) - **bench:** replace custom `sincos` function with built-in Julia implementation [(#5838)](https://github.com/stdlib-js/stdlib/pull/5838) _(by Karan Anand)_
-   [`1f73fef`](https://github.com/stdlib-js/stdlib/commit/1f73fef9451cc77da8f45dfeb28c359685321859) - **docs:** update namespace TypeScript declarations [(#5816)](https://github.com/stdlib-js/stdlib/pull/5816) _(by stdlib-bot)_
-   [`406337f`](https://github.com/stdlib-js/stdlib/commit/406337fc2a5709ef967afbd6be8b25b0a89a3c30) - **fix:** update `math/base/special/cscd` to match correct reference implementation [(#5811)](https://github.com/stdlib-js/stdlib/pull/5811) _(by Karan Anand)_
-   [`f5459a7`](https://github.com/stdlib-js/stdlib/commit/f5459a759caf08cf4fb882609678e878785d6dc7) - **fix:** update `math/base/special/secd` to match correct reference implementation [(#5810)](https://github.com/stdlib-js/stdlib/pull/5810) _(by Karan Anand)_
-   [`3f0943b`](https://github.com/stdlib-js/stdlib/commit/3f0943b050f49d96debc6c362ca759bf95f440aa) - **feat:** add `math/base/special/sind` [(#5435)](https://github.com/stdlib-js/stdlib/pull/5435) _(by Karan Anand, stdlib-bot)_
-   [`9b2d78d`](https://github.com/stdlib-js/stdlib/commit/9b2d78de67da47208451b8e6bbb7c1747a6e4854) - **bench:** refactor random value generation [(#5465)](https://github.com/stdlib-js/stdlib/pull/5465) _(by Saurabh Singh, stdlib-bot)_
-   [`394de5a`](https://github.com/stdlib-js/stdlib/commit/394de5ad015e5389b976ec5dce58986e1fb17735) - **bench:** update random value generation [(#5786)](https://github.com/stdlib-js/stdlib/pull/5786) _(by Karan Anand)_
-   [`8c9c9f2`](https://github.com/stdlib-js/stdlib/commit/8c9c9f294b1772cfc13b6c3b501719743b81bb08) - **bench:** update random value generation [(#5787)](https://github.com/stdlib-js/stdlib/pull/5787) _(by Karan Anand, Karan Anand)_
-   [`b947812`](https://github.com/stdlib-js/stdlib/commit/b947812d45606e52f8f3e0ab22f6355f59eb1c49) - **fix:** update `math/base/special/cosd` to match correct reference implementation [(#5473)](https://github.com/stdlib-js/stdlib/pull/5473) _(by Karan Anand, Gunj Joshi)_
-   [`a1e8f03`](https://github.com/stdlib-js/stdlib/commit/a1e8f03af0ee470d0783cb840878dc7cde0826c3) - **chore:** fix EditorConfig lint errors [(#5543)](https://github.com/stdlib-js/stdlib/pull/5543) _(by ditsu, Athan Reines, Philipp Burckhardt)_
-   [`886e85a`](https://github.com/stdlib-js/stdlib/commit/886e85abd4bd0515526e273919b43e00a93d7264) - **docs:** fix C lint errors [(#5408)](https://github.com/stdlib-js/stdlib/pull/5408) _(by Neeraj Pathak)_
-   [`fab250c`](https://github.com/stdlib-js/stdlib/commit/fab250c7a179fa8aee1321fba6df32266f82c184) - **style:** fix lint errors [(#5416)](https://github.com/stdlib-js/stdlib/pull/5416) _(by Krishnam Agarwal)_
-   [`52c0299`](https://github.com/stdlib-js/stdlib/commit/52c02996d6ddb17cd20e7d166c7d0605401a33d7) - **bench:** refactor random number generation [(#5397)](https://github.com/stdlib-js/stdlib/pull/5397) _(by Saurabh Singh)_
-   [`0bd3d46`](https://github.com/stdlib-js/stdlib/commit/0bd3d468411928205902144c8f81c2c5b06f60cc) - **bench:** update random value generation [(#5471)](https://github.com/stdlib-js/stdlib/pull/5471) _(by Karan Anand, Karan Anand)_
-   [`6dd2fd1`](https://github.com/stdlib-js/stdlib/commit/6dd2fd114ce413fe488ac47dc356e7316e61d843) - **bench:** update random value generation [(#5528)](https://github.com/stdlib-js/stdlib/pull/5528) _(by Karan Anand)_
-   [`420735c`](https://github.com/stdlib-js/stdlib/commit/420735c6cb64dbc72805be947c9b8204b1f9da10) - **bench:** update random value generation [(#5467)](https://github.com/stdlib-js/stdlib/pull/5467) _(by Karan Anand)_
-   [`4039ae0`](https://github.com/stdlib-js/stdlib/commit/4039ae0c885e813edca9f53211d79b38e911b65a) - **bench:** update random value generation [(#5466)](https://github.com/stdlib-js/stdlib/pull/5466) _(by Karan Anand)_
-   [`dfc7be6`](https://github.com/stdlib-js/stdlib/commit/dfc7be6493380962a6ef790f6ddccfa570aff6f3) - **fix:** add missing `native.js` to `math/base/special/tribonacci` [(#5472)](https://github.com/stdlib-js/stdlib/pull/5472) _(by Karan Anand, stdlib-bot)_
-   [`0e2afee`](https://github.com/stdlib-js/stdlib/commit/0e2afeeeb0bf31c508ed943c5f0f6fb558a26381) - **bench:** refactor random value generation [(#5374)](https://github.com/stdlib-js/stdlib/pull/5374) _(by Saurabh Singh, Athan Reines)_
-   [`1de4fb4`](https://github.com/stdlib-js/stdlib/commit/1de4fb47e423e6ed0b9777cbb1194245ba1fe349) - **bench:** update random value generation [(#5404)](https://github.com/stdlib-js/stdlib/pull/5404) _(by Karan Anand, Athan Reines)_
-   [`7e16f5c`](https://github.com/stdlib-js/stdlib/commit/7e16f5c1f65d9f3a69a3e9c3f34c885d8adfca51) - **chore:** fix C lint errors [(#5409)](https://github.com/stdlib-js/stdlib/pull/5409) _(by Neeraj Pathak)_
-   [`c52b2f9`](https://github.com/stdlib-js/stdlib/commit/c52b2f932d20622b426bfd976039a8a144b901ab) - **bench:** update random value generation [(#5390)](https://github.com/stdlib-js/stdlib/pull/5390) _(by Karan Anand)_
-   [`7093864`](https://github.com/stdlib-js/stdlib/commit/7093864134f5f116d880ea7063111942b52f2941) - **chore:** fix EditorConfig lint errors [(#5373)](https://github.com/stdlib-js/stdlib/pull/5373) _(by Krishnam Agarwal)_
-   [`69c1704`](https://github.com/stdlib-js/stdlib/commit/69c17043c910ba3aba0bc29c1569ba8396554eca) - **bench:** update random value generation [(#5369)](https://github.com/stdlib-js/stdlib/pull/5369) _(by Karan Anand)_
-   [`4340425`](https://github.com/stdlib-js/stdlib/commit/434042500ae9d9a5143e7ff87da5a1a97560dbfa) - **bench:** update random value generation [(#5367)](https://github.com/stdlib-js/stdlib/pull/5367) _(by Karan Anand)_
-   [`6e79eff`](https://github.com/stdlib-js/stdlib/commit/6e79effcec430e8f4ebdb2d6d6734c3fb3263832) - **style:** fix lint errors [(#5370)](https://github.com/stdlib-js/stdlib/pull/5370) _(by Krishnam Agarwal)_
-   [`6d9ed10`](https://github.com/stdlib-js/stdlib/commit/6d9ed107bc5e674421c5773619a34d5c0fe5a96a) - **chore:** fix C lint errors [(#5291)](https://github.com/stdlib-js/stdlib/pull/5291) _(by GK Bishnoi)_
-   [`8663446`](https://github.com/stdlib-js/stdlib/commit/86634464cd31d6661514550a89312a18c54af74b) - **feat:** add C implementation for `math/base/special/hyp2f1` [(#5348)](https://github.com/stdlib-js/stdlib/pull/5348) _(by Karan Anand, Athan Reines, stdlib-bot)_
-   [`c122b62`](https://github.com/stdlib-js/stdlib/commit/c122b62161a7a9ce7d06562e1083518d7c8130fe) - **bench:** update random value generation [(#5341)](https://github.com/stdlib-js/stdlib/pull/5341) _(by Karan Anand)_
-   [`07e0d9f`](https://github.com/stdlib-js/stdlib/commit/07e0d9fd8295ed9cc14d7e5d355049de338b075f) - **bench:** update random value generation [(#5336)](https://github.com/stdlib-js/stdlib/pull/5336) _(by Karan Anand)_
-   [`cd95771`](https://github.com/stdlib-js/stdlib/commit/cd95771e0be630dd906038b89b3ce84ef6bad861) - **bench:** update random value generation [(#5337)](https://github.com/stdlib-js/stdlib/pull/5337) _(by Karan Anand)_
-   [`df0b96c`](https://github.com/stdlib-js/stdlib/commit/df0b96c8e629a9f773d103fa2c5b25bfcab25a92) - **bench:** update random value generation [(#5338)](https://github.com/stdlib-js/stdlib/pull/5338) _(by Karan Anand)_
-   [`ff0a6e1`](https://github.com/stdlib-js/stdlib/commit/ff0a6e17e486a6a28990848a5435d0d79bd1e8e9) - **bench:** update random value generation [(#5339)](https://github.com/stdlib-js/stdlib/pull/5339) _(by Karan Anand)_
-   [`8de7152`](https://github.com/stdlib-js/stdlib/commit/8de7152398c5db23915b171b9a5f685e969c48c2) - **bench:** update random value generation [(#5340)](https://github.com/stdlib-js/stdlib/pull/5340) _(by Karan Anand)_
-   [`54e5f3f`](https://github.com/stdlib-js/stdlib/commit/54e5f3fa5c74124a374ce28944624b7918b3bf67) - **refactor:** update benchmarks and tests in `math/base/special/acosh` [(#5318)](https://github.com/stdlib-js/stdlib/pull/5318) _(by Karan Anand)_
-   [`cebb74b`](https://github.com/stdlib-js/stdlib/commit/cebb74be47855091969b704a5eb37d4b0e3fec0b) - **feat:** add `math/base/special/hyp2f1` [(#5140)](https://github.com/stdlib-js/stdlib/pull/5140) _(by Karan Anand, stdlib-bot)_
-   [`16fe13d`](https://github.com/stdlib-js/stdlib/commit/16fe13df2737eafe904d1b0d51eaa856bb216cbc) - **bench:** refactor benchmarks in `math/base/special/acosf` [(#5269)](https://github.com/stdlib-js/stdlib/pull/5269) _(by Karan Anand)_
-   [`f2dbc9f`](https://github.com/stdlib-js/stdlib/commit/f2dbc9f4fb64fdc66cfd6d8d0a7434dc2a81d2c3) - **bench:** refactor benchmarks and update test messages in `math/base/special/acos` [(#5267)](https://github.com/stdlib-js/stdlib/pull/5267) _(by Karan Anand)_
-   [`141105c`](https://github.com/stdlib-js/stdlib/commit/141105c4d9fcdcf898460a606641581dc43e3be1) - **bench:** refactor benchmarks and update test messages in `math/base/special/acosd` [(#5268)](https://github.com/stdlib-js/stdlib/pull/5268) _(by Karan Anand)_
-   [`b385506`](https://github.com/stdlib-js/stdlib/commit/b38550641ecefd82d2c9ad8fcc0dee10ac58e98b) - **bench:** refactor benchmarks and update test messages in `math/base/special/abs2` [(#4972)](https://github.com/stdlib-js/stdlib/pull/4972) _(by Karan Anand)_
-   [`b1448e4`](https://github.com/stdlib-js/stdlib/commit/b1448e42d0b2f897103635a49be15bfa778784ad) - **bench:** refactor benchmarks and update test messages in `math/base/special/absf` [(#5259)](https://github.com/stdlib-js/stdlib/pull/5259) _(by Karan Anand)_
-   [`b0abce9`](https://github.com/stdlib-js/stdlib/commit/b0abce97c92c7c8025cdd09e76ed5deec08cb64a) - **bench:** refactor benchmarks and update test messages in `math/base/special/abs2f` [(#5258)](https://github.com/stdlib-js/stdlib/pull/5258) _(by Karan Anand)_
-   [`6c9505b`](https://github.com/stdlib-js/stdlib/commit/6c9505bc0d1b920718155d7f5118d9b0bd400ff0) - **chore:** fix C lint errors [(#5262)](https://github.com/stdlib-js/stdlib/pull/5262) _(by GK Bishnoi)_
-   [`f6cca6b`](https://github.com/stdlib-js/stdlib/commit/f6cca6bdf3b1699c94c5f40bf2e07d6f879ecccb) - **bench:** refactor benchmarks in `math/base/special/rsqrtf` [(#5223)](https://github.com/stdlib-js/stdlib/pull/5223) _(by Gururaj Gurram, Athan Reines)_
-   [`9d447dc`](https://github.com/stdlib-js/stdlib/commit/9d447dc24e6c56353c1dceae3bbfd88d11ce2066) - **docs:** update related packages sections [(#5151)](https://github.com/stdlib-js/stdlib/pull/5151) _(by stdlib-bot, Athan Reines)_
-   [`ba0c854`](https://github.com/stdlib-js/stdlib/commit/ba0c854e87d0e86d0f7739e26095ec0a0f40c36f) - **docs:** fix function names in C example code _(by Philipp Burckhardt)_
-   [`58e26cb`](https://github.com/stdlib-js/stdlib/commit/58e26cbf1882734b423124a001180661a6c377bb) - **chore:** fix parameter names, return annotations, and example code _(by Philipp Burckhardt)_
-   [`7ce2628`](https://github.com/stdlib-js/stdlib/commit/7ce2628300553de23607c7dd95342cb106b27307) - **refactor:** update `math/base/special/kernel-tan` [(#5017)](https://github.com/stdlib-js/stdlib/pull/5017) _(by Vivek Maurya, Athan Reines)_
-   [`4714429`](https://github.com/stdlib-js/stdlib/commit/4714429b1acb0ef2634e7a504195a6d1e4004ff7) - **bench:** refactor benchmarks in `math/base/special/rsqrt` [(#5054)](https://github.com/stdlib-js/stdlib/pull/5054) _(by Gururaj Gurram)_
-   [`fd45831`](https://github.com/stdlib-js/stdlib/commit/fd45831e4ee27601c389c8f1b8b2779a95c8d7b4) - **bench:** refactor benchmarks and update test messages in `math/base/special/round` [(#4950)](https://github.com/stdlib-js/stdlib/pull/4950) _(by Gururaj Gurram, Athan Reines)_
-   [`9711748`](https://github.com/stdlib-js/stdlib/commit/9711748a23b2cae8cdf0ff97f4400f1d09e373a7) - **chore:** remove unused dependencies in C implementation [(#4940)](https://github.com/stdlib-js/stdlib/pull/4940) _(by Gururaj Gurram)_
-   [`8ada47e`](https://github.com/stdlib-js/stdlib/commit/8ada47eedd19ea9f21a8edc342ee3583e92ac857) - **chore:** fix indentation _(by Philipp Burckhardt)_
-   [`50843c9`](https://github.com/stdlib-js/stdlib/commit/50843c9502e3c9afa2f58d0957248e8ed3bd4609) - **docs:** update related packages sections [(#4808)](https://github.com/stdlib-js/stdlib/pull/4808) _(by stdlib-bot)_
-   [`a2133de`](https://github.com/stdlib-js/stdlib/commit/a2133de85c6de60892a54b387dbf7bd1ad58e0c8) - **feat:** add `math/base/special/heavisidef` [(#3374)](https://github.com/stdlib-js/stdlib/pull/3374) _(by Vivek Maurya, Athan Reines, stdlib-bot)_
-   [`9241c28`](https://github.com/stdlib-js/stdlib/commit/9241c28989dd02e6b247a290793dc8fb33cc09a0) - **docs:** fix return annotation style _(by Philipp Burckhardt)_
-   [`e91af13`](https://github.com/stdlib-js/stdlib/commit/e91af13bf35384d0ee1163fe3074c79f1a01bc72) - **refactor:** update `math/base/special/hypotf` to follow latest project conventions [(#4783)](https://github.com/stdlib-js/stdlib/pull/4783) _(by Vivek Maurya, Athan Reines)_
-   [`0900838`](https://github.com/stdlib-js/stdlib/commit/090083855a65254591477cb58966d7b232f3c365) - **refactor:** update `math/base/special/hypot` to follow latest project conventions [(#4765)](https://github.com/stdlib-js/stdlib/pull/4765) _(by Vivek Maurya, Athan Reines)_
-   [`73a211c`](https://github.com/stdlib-js/stdlib/commit/73a211cc0b17b6ba6d96ff5c4ac06f7889307d7a) - **docs:** update function description and cleanup for `math/base/special/dirac-deltaf` [(#4778)](https://github.com/stdlib-js/stdlib/pull/4778) _(by Aayush Khanna)_
-   [`8a5caba`](https://github.com/stdlib-js/stdlib/commit/8a5caba090beccf502d1d66e31e5c7986dc52e3a) - **docs:** update related packages sections [(#4739)](https://github.com/stdlib-js/stdlib/pull/4739) _(by stdlib-bot)_
-   [`f0db7f5`](https://github.com/stdlib-js/stdlib/commit/f0db7f5956b712e544fb2cd7c1432feaff516008) - **docs:** update related packages sections [(#4728)](https://github.com/stdlib-js/stdlib/pull/4728) _(by stdlib-bot)_
-   [`9f23be0`](https://github.com/stdlib-js/stdlib/commit/9f23be0621e3c986516d30ee60b19492f0de7f12) - **docs:** update examples _(by Athan Reines)_
-   [`bd18248`](https://github.com/stdlib-js/stdlib/commit/bd1824843709cd0ba9de4351fceefd27069293c7) - **docs:** update related packages sections [(#4675)](https://github.com/stdlib-js/stdlib/pull/4675) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ff48331`](https://github.com/stdlib-js/stdlib/commit/ff483312f61426a3072a5c22a9bf0e8ef4950a42) - **feat:** add `math/base/special/dirac-deltaf` [(#3363)](https://github.com/stdlib-js/stdlib/pull/3363) _(by Aayush Khanna, stdlib-bot)_
-   [`321e49e`](https://github.com/stdlib-js/stdlib/commit/321e49e9965648f1b5eb6a840fe454959af0ec49) - **docs:** add missing periods to list items _(by Philipp Burckhardt)_
-   [`a3301a2`](https://github.com/stdlib-js/stdlib/commit/a3301a2bde94e8c07888a1db589d189e9ecfc347) - **docs:** update related packages sections [(#4517)](https://github.com/stdlib-js/stdlib/pull/4517) _(by stdlib-bot)_
-   [`14706e4`](https://github.com/stdlib-js/stdlib/commit/14706e4baccbf3b827e12cae163d7b98a96b0fa8) - **docs:** update related packages sections [(#4445)](https://github.com/stdlib-js/stdlib/pull/4445) _(by stdlib-bot)_
-   [`b518ff1`](https://github.com/stdlib-js/stdlib/commit/b518ff110e120612be4d53b9f124a3c210711610) - **feat:** add C implementation for `math/base/special/falling-factorial` _(by Gunj Joshi, stdlib-bot, Philipp Burckhardt)_
-   [`0d52a8a`](https://github.com/stdlib-js/stdlib/commit/0d52a8a0eec7221c0147185c4ce3317db0458498) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`4301694`](https://github.com/stdlib-js/stdlib/commit/43016945387e02d6396d33cb7134c62c977b7fd8) - **docs:** update related packages sections [(#4362)](https://github.com/stdlib-js/stdlib/pull/4362) _(by stdlib-bot)_
-   [`8f2808d`](https://github.com/stdlib-js/stdlib/commit/8f2808dec8c8a6508841e86453fba823823efc6c) - **docs:** update related packages sections [(#4302)](https://github.com/stdlib-js/stdlib/pull/4302) _(by stdlib-bot)_
-   [`a6f3921`](https://github.com/stdlib-js/stdlib/commit/a6f3921560705503dcb5ee2575dd2f11417f58fb) - **docs:** update related packages sections [(#4242)](https://github.com/stdlib-js/stdlib/pull/4242) _(by stdlib-bot, Athan Reines)_
-   [`7245f3c`](https://github.com/stdlib-js/stdlib/commit/7245f3c8cf9139b72f6f058e8c878b13e02ded9f) - **feat:** add `math/base/special/nonfibonaccif` [(#3391)](https://github.com/stdlib-js/stdlib/pull/3391) _(by Aayush Khanna, Athan Reines, Gunj Joshi, stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`ed5c4cc`](https://github.com/stdlib-js/stdlib/commit/ed5c4cccc06ad98f4de90310bf24a5a373761b43) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`90e96d0`](https://github.com/stdlib-js/stdlib/commit/90e96d01b7a32ec3b71caf3e5f57528338199a8f) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`7d6450c`](https://github.com/stdlib-js/stdlib/commit/7d6450c671dd91fffbec536a216a76f9e094dad0) - **docs:** update related packages sections [(#4186)](https://github.com/stdlib-js/stdlib/pull/4186) _(by stdlib-bot)_
-   [`b7867cb`](https://github.com/stdlib-js/stdlib/commit/b7867cbb3a4fc453e19203794402c36f19b264fd) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`d3d3d14`](https://github.com/stdlib-js/stdlib/commit/d3d3d14939ac77ab7d5a4476551108f8ff1c3f1f) - **docs:** update related packages sections [(#4149)](https://github.com/stdlib-js/stdlib/pull/4149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`0ba282b`](https://github.com/stdlib-js/stdlib/commit/0ba282b89c384f06bbe3ff8ecd71982f05209606) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`318f280`](https://github.com/stdlib-js/stdlib/commit/318f28057bf00d910a656c4f315b8de17f89d3b5) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`c13062e`](https://github.com/stdlib-js/stdlib/commit/c13062e5b90cbe28ec62f0b690211bd14b626cf3) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`2ea848b`](https://github.com/stdlib-js/stdlib/commit/2ea848b62b686e1e9d861f7df25ece23a7d80798) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`6a0d6b8`](https://github.com/stdlib-js/stdlib/commit/6a0d6b861f8e2079a501ca4e46a9175440eedb46) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`5b71452`](https://github.com/stdlib-js/stdlib/commit/5b71452bd40811341a2e4eaab018c3cc17c5feac) - **docs:** update related packages sections [(#4135)](https://github.com/stdlib-js/stdlib/pull/4135) _(by stdlib-bot, Athan Reines)_
-   [`f13ddb2`](https://github.com/stdlib-js/stdlib/commit/f13ddb2eb01e5520b6fa98634bbf9de76793036f) - **style:** use spaces for alignment in C comments _(by Philipp Burckhardt)_
-   [`c322b66`](https://github.com/stdlib-js/stdlib/commit/c322b6647751b73a9d0fe12bf5665e8e2243d4ca) - **docs:** update related packages sections [(#4070)](https://github.com/stdlib-js/stdlib/pull/4070) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`8785e54`](https://github.com/stdlib-js/stdlib/commit/8785e54ec82782d7d01912988596c9d7d2bf06d0) - **refactor:** replace built-ins by stdlib packages, update benchmarks in `math/base/special/trunc` [(#3941)](https://github.com/stdlib-js/stdlib/pull/3941) _(by Gunj Joshi, Athan Reines)_
-   [`db76062`](https://github.com/stdlib-js/stdlib/commit/db76062ddee3a358ddb2ac1dc725610516b2891f) - **docs:** update function descriptions and move link [(#4015)](https://github.com/stdlib-js/stdlib/pull/4015) _(by Gunj Joshi)_
-   [`66b4609`](https://github.com/stdlib-js/stdlib/commit/66b4609cee9e428f80bc78da231d2be8e7b223cc) - **refactor:** use inbuilt macro instead of new variable for `MAX_SAFE_NTH_LUCAS` [(#3980)](https://github.com/stdlib-js/stdlib/pull/3980) _(by Aayush Khanna)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`6bbf2d6`](https://github.com/stdlib-js/stdlib/commit/6bbf2d67034e056190594bf2bceca4eb40a66b6f) - **style:** fix indentation _(by Philipp Burckhardt)_
-   [`0756fb5`](https://github.com/stdlib-js/stdlib/commit/0756fb583ae0061031335704fdc46805f408f9c9) - **style:** remove empty lines _(by Philipp Burckhardt)_
-   [`cfc0665`](https://github.com/stdlib-js/stdlib/commit/cfc0665435a1f99158d7fed39b8873dea6aa6209) - **docs:** add missing private tag _(by Philipp Burckhardt)_
-   [`e450426`](https://github.com/stdlib-js/stdlib/commit/e450426813957ec4de5e31434edb969741db7c94) - **bench:** add missing native suffix _(by Philipp Burckhardt)_
-   [`3b4514d`](https://github.com/stdlib-js/stdlib/commit/3b4514d1272ea9e4863381e3d0febd02ba8d230f) - **feat:** add `math/base/special/negalucasf` _(by Aayush Khanna, stdlib-bot, Philipp Burckhardt)_
-   [`aa5c7a8`](https://github.com/stdlib-js/stdlib/commit/aa5c7a80994aa8c6198b92f20dec9c451b05d1be) - **feat:** add `math/base/special/sqrtpif` _(by Gururaj Gurram, stdlib-bot, Gunj Joshi, Philipp Burckhardt)_
-   [`b8c41df`](https://github.com/stdlib-js/stdlib/commit/b8c41df78cd2cdc9cd3c3c6b223759d32f4f6e14) - **docs:** update related packages sections [(#3915)](https://github.com/stdlib-js/stdlib/pull/3915) _(by stdlib-bot)_
-   [`6e69af4`](https://github.com/stdlib-js/stdlib/commit/6e69af4a9b1be98b8972e9f81a3b1fce73cdde43) - **refactor:** update `math/base/special/cexp` to follow latest project conventions [(#3394)](https://github.com/stdlib-js/stdlib/pull/3394) _(by Aayush Khanna, Gunj Joshi)_
-   [`a851ddd`](https://github.com/stdlib-js/stdlib/commit/a851ddd8d5db62a664386d59c9c39a0b82ac7c0c) - **bench:** refactor benchmarks and update function parameter description [(#3907)](https://github.com/stdlib-js/stdlib/pull/3907) _(by Gunj Joshi)_
-   [`5cb36ef`](https://github.com/stdlib-js/stdlib/commit/5cb36ef4c6f8158585ac88867a8dec21ed3fa372) - **docs:** update related packages sections [(#3890)](https://github.com/stdlib-js/stdlib/pull/3890) _(by stdlib-bot)_
-   [`195f3ee`](https://github.com/stdlib-js/stdlib/commit/195f3eeb93f855e75880ad14e7166b77abdd4283) - **refactor:** use stdlib constant in `math/base/special/riemann-zeta` [(#3320)](https://github.com/stdlib-js/stdlib/pull/3320) _(by Gunj Joshi)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`1c56b73`](https://github.com/stdlib-js/stdlib/commit/1c56b737ec018cc818cebf19e5c7947fa684e126) - **docs:** update related packages sections [(#3380)](https://github.com/stdlib-js/stdlib/pull/3380) _(by stdlib-bot)_
-   [`0a8192d`](https://github.com/stdlib-js/stdlib/commit/0a8192d68506a2abf4c3e52e1af9f1510e1660b4) - **docs:** update related packages sections [(#3370)](https://github.com/stdlib-js/stdlib/pull/3370) _(by stdlib-bot)_
-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - **feat:** update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7e8187a`](https://github.com/stdlib-js/stdlib/commit/7e8187a766886c2fb9cdc356cf781f0a1802172c) - **docs:** update related packages sections [(#3368)](https://github.com/stdlib-js/stdlib/pull/3368) _(by stdlib-bot)_
-   [`ef06a2d`](https://github.com/stdlib-js/stdlib/commit/ef06a2dda4cc6b272088a7a39c30e48dbf8c6ce4) - **feat:** add C implementation for `math/base/special/dirichlet-eta` [(#3282)](https://github.com/stdlib-js/stdlib/pull/3282) _(by Gunj Joshi, stdlib-bot)_
-   [`4bc5c7e`](https://github.com/stdlib-js/stdlib/commit/4bc5c7efda9452e0fb18a2cfe59bf89a4d180534) - **refactor:** use external constant in `math/base/special/tribonacci` [(#3324)](https://github.com/stdlib-js/stdlib/pull/3324) _(by Gunj Joshi)_
-   [`299517a`](https://github.com/stdlib-js/stdlib/commit/299517a7a1e3494b93b2368c4f135a5826f88090) - **docs:** update examples in `math/base/special/lcmf` [(#3319)](https://github.com/stdlib-js/stdlib/pull/3319) _(by Gunj Joshi, Athan Reines)_
-   [`c0d083d`](https://github.com/stdlib-js/stdlib/commit/c0d083d4329c439d9c002479740518584e5f5977) - **feat:** add `math/base/special/lcmf` _(by Aayush Khanna, stdlib-bot)_
-   [`92c0d4e`](https://github.com/stdlib-js/stdlib/commit/92c0d4e65a8ffef2a2264ba906cfe8020c483b13) - **docs:** clean-up and use C floats when appropriate _(by Philipp Burckhardt)_
-   [`d24969e`](https://github.com/stdlib-js/stdlib/commit/d24969e35be1cfbff2e0d62d740c451e476ee444) - **chore:** update package meta data [(#3303)](https://github.com/stdlib-js/stdlib/pull/3303) _(by stdlib-bot, Athan Reines)_
-   [`e01c8e2`](https://github.com/stdlib-js/stdlib/commit/e01c8e28e77db58112d6bdcffa2e924f648e09fd) - **feat:** add C implementation for `math/base/special/riemann-zeta` [(#2737)](https://github.com/stdlib-js/stdlib/pull/2737) _(by Gunj Joshi, stdlib-bot)_
-   [`2a10dde`](https://github.com/stdlib-js/stdlib/commit/2a10dde4b821cf7d96fcd76339beac03e9548f47) - **bench:** update benchmarks and examples in `math/base/special/ldexp` [(#2781)](https://github.com/stdlib-js/stdlib/pull/2781) _(by Gunj Joshi, stdlib-bot)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`4817867`](https://github.com/stdlib-js/stdlib/commit/4817867dcbddffe1ead3f532e01fce352bd77808) - **chore:** move stdlib benchmarks into native sub-directories _(by Philipp Burckhardt)_
-   [`04a838f`](https://github.com/stdlib-js/stdlib/commit/04a838fd4345e5a0b3e739e734b8fb1f21de56a3) - **chore:** use correct Makefile _(by Philipp Burckhardt)_
-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`d8a4cfb`](https://github.com/stdlib-js/stdlib/commit/d8a4cfb578a949ed07c7a18749e48096f4f9b488) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`cdaf16f`](https://github.com/stdlib-js/stdlib/commit/cdaf16f9f3c05f153fcffbb00dab12412196cce6) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`ac4992b`](https://github.com/stdlib-js/stdlib/commit/ac4992b3eeccbfcceea795f86cf669b2481d8250) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`97a27cf`](https://github.com/stdlib-js/stdlib/commit/97a27cf2746042026c3e68416b7c5f9da2bb24d9) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`184d71f`](https://github.com/stdlib-js/stdlib/commit/184d71f0d04083ef6e64b641eccfc322273f544c) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`f0b5a73`](https://github.com/stdlib-js/stdlib/commit/f0b5a739637214f85790658974070c871a2ca30b) - **refactor:** replace built-in with `stdlib_base_atan2` in `math/base/special/cphase` [(#3231)](https://github.com/stdlib-js/stdlib/pull/3231) _(by Gunj Joshi)_
-   [`35ea456`](https://github.com/stdlib-js/stdlib/commit/35ea456c3f527fda8c717b5f31deccb6ba9e44d2) - **refactor:** use `stdlib_base_round` instead of builtin in `math/base/special/cround` [(#3216)](https://github.com/stdlib-js/stdlib/pull/3216) _(by Gunj Joshi)_
-   [`7e2c16b`](https://github.com/stdlib-js/stdlib/commit/7e2c16b05d85b9d25c21626d4cbce381fcfe5d32) - **refactor:** remove unused header, update benchmarks in `math/base/special/croundf` [(#3217)](https://github.com/stdlib-js/stdlib/pull/3217) _(by Gunj Joshi)_
-   [`c660c70`](https://github.com/stdlib-js/stdlib/commit/c660c705bb3478f4fb6cb818c9b1d3429e8a6774) - **chore:** use correct `Makefile` and update benchmarks in `math/base/special/csch` [(#3209)](https://github.com/stdlib-js/stdlib/pull/3209) _(by Gunj Joshi)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`961d039`](https://github.com/stdlib-js/stdlib/commit/961d03929b8b1b9c5221dc36cb21f0e8194f06c2) - **chore:** use relative path to load package.json file _(by Philipp Burckhardt)_
-   [`15546a9`](https://github.com/stdlib-js/stdlib/commit/15546a92fb2f48b6c780fdf2dd0460340cda8830) - **docs:** update function name in header of C section _(by Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`72bf083`](https://github.com/stdlib-js/stdlib/commit/72bf083eb1bbc829eebbbff32f73fc2a202b2570) - **refactor:** update benchmarks and test fixtures in `math/base/special/ahavercosf` [(#3118)](https://github.com/stdlib-js/stdlib/pull/3118) _(by Gunj Joshi)_
-   [`163a3e7`](https://github.com/stdlib-js/stdlib/commit/163a3e7fa2c7429f88b2dd69df42572f9ff0af9d) - **refactor:** update benchmark, add `f` suffixes, missing spaces in `math/base/special/gcdf` [(#3121)](https://github.com/stdlib-js/stdlib/pull/3121) _(by Gunj Joshi, Athan Reines)_
-   [`3c5c933`](https://github.com/stdlib-js/stdlib/commit/3c5c933c86f7243e8872dcf3cb7548d0399b1b35) - **refactor:** update benchmarks and test fixtures in `math/base/special/ahaversinf` [(#3119)](https://github.com/stdlib-js/stdlib/pull/3119) _(by Gunj Joshi)_
-   [`8a03f83`](https://github.com/stdlib-js/stdlib/commit/8a03f833d9808c17418225664d7250b94fb0e1b5) - **refactor:** use constant package in `math/base/special/fmodf` (#3120) [(#3120)](https://github.com/stdlib-js/stdlib/pull/3120) _(by Gunj Joshi)_
-   [`e5bfdff`](https://github.com/stdlib-js/stdlib/commit/e5bfdff2d2c137f84eb5f925f8d63a3729d05eb2) - **docs:** update functions descriptions in `math/base/special/cceil` [(#3114)](https://github.com/stdlib-js/stdlib/pull/3114) _(by Gunj Joshi)_
-   [`79dc5cf`](https://github.com/stdlib-js/stdlib/commit/79dc5cf4044f4f90a7005389e4740f14a820a967) - **bench:** generate numbers outside loops in `math/base/special/cfloorf` [(#3113)](https://github.com/stdlib-js/stdlib/pull/3113) _(by Gunj Joshi)_
-   [`47cfa90`](https://github.com/stdlib-js/stdlib/commit/47cfa907d643a00ac5b3fce9967e655401e110f8) - **feat:** update the return value for `n=1` in `math/base/special/bernoulli` [(#3108)](https://github.com/stdlib-js/stdlib/pull/3108) _(by Gunj Joshi, Athan Reines)_
-   [`d88cd86`](https://github.com/stdlib-js/stdlib/commit/d88cd86622b7a4ebffcb4b57aa60d5b7292fee73) - **refactor:** use constants, `FI_F` for addon and style fixes in `math/base/special/ldexpf` [(#2868)](https://github.com/stdlib-js/stdlib/pull/2868) _(by Gunj Joshi)_
-   [`d9a93be`](https://github.com/stdlib-js/stdlib/commit/d9a93be954f04720bb5b03512be42c9ce6201088) - **feat:** add `math/base/special/croundf` [(#3061)](https://github.com/stdlib-js/stdlib/pull/3061) _(by Gururaj Gurram, Philipp Burckhardt)_
-   [`f8bcfd8`](https://github.com/stdlib-js/stdlib/commit/f8bcfd832483d46068c710b6854d5f97bcb778fd) - **feat:** add `math/base/special/gcdf` [(#2997)](https://github.com/stdlib-js/stdlib/pull/2997) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`6556a46`](https://github.com/stdlib-js/stdlib/commit/6556a46aa3a6dffdff6becd4fb98d32421b3e7f2) - **feat:** add math/base/special/cfloorf [(#stdlib-js#3058)](https://github.com/stdlib-js/stdlib/pull/stdlib-js#3058) _(by Aayush Khanna)_
-   [`7fd112c`](https://github.com/stdlib-js/stdlib/commit/7fd112c799e3a864d975357b2066e45f4196653e) - **feat:** add `math/base/special/fmodf` [(#3059)](https://github.com/stdlib-js/stdlib/pull/3059) _(by Gunj Joshi, Philipp Burckhardt)_
-   [`545a050`](https://github.com/stdlib-js/stdlib/commit/545a05093d99910b39773f57d3df2da9232b24f5) - **feat:** add `math/base/special/ahaversinf` [(#3076)](https://github.com/stdlib-js/stdlib/pull/3076) _(by Aayush Khanna)_
-   [`fc38ed8`](https://github.com/stdlib-js/stdlib/commit/fc38ed8247ba61728a368306323ad70cda5895d6) - **feat:** add `math/base/special/ahavercosf [(#3072)](https://github.com/stdlib-js/stdlib/pull/3072) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`e093a4d`](https://github.com/stdlib-js/stdlib/commit/e093a4d6a41d7686cc780fd1935bd925ccbbe155) - **refactor:** use external constant and update license in `math/base/special/pow` [(#3082)](https://github.com/stdlib-js/stdlib/pull/3082) _(by Gunj Joshi)_
-   [`ed4c8d6`](https://github.com/stdlib-js/stdlib/commit/ed4c8d65a020d119c4baa1eb6716751c75cf8a07) - **feat:** add support for secant functionality `math/base/special/sec` [(#3027)](https://github.com/stdlib-js/stdlib/pull/3027) _(by Abhijit Raut, Athan Reines, Philipp Burckhardt)_
-   [`b18921a`](https://github.com/stdlib-js/stdlib/commit/b18921a136da2755efccfd6ae23c8b3f5aaa8f4a) - **feat:** add `math/base/special/acosdf` [(#3015)](https://github.com/stdlib-js/stdlib/pull/3015) _(by Aayush Khanna, Athan Reines)_
-   [`60522bf`](https://github.com/stdlib-js/stdlib/commit/60522bfc0b5574d348301e788400178156731024) - **docs:** fix operator [(#3039)](https://github.com/stdlib-js/stdlib/pull/3039) _(by Gunj Joshi)_
-   [`84b8294`](https://github.com/stdlib-js/stdlib/commit/84b8294c2d5494ff5eaaa2652dda81671e728068) - **feat:** add `math/base/special/nanmaxf` [(#3035)](https://github.com/stdlib-js/stdlib/pull/3035) _(by Gunj Joshi, Athan Reines)_
-   [`f770fc2`](https://github.com/stdlib-js/stdlib/commit/f770fc258b7976ebd51fb501290cb33296d2e036) - **docs:** add missing fields in `package.json` [(#3036)](https://github.com/stdlib-js/stdlib/pull/3036) _(by Gunj Joshi)_
-   [`30d56c3`](https://github.com/stdlib-js/stdlib/commit/30d56c355e6fa871ff5e42ac12d30ecd95011e00) - **feat:** add `math/base/special/nanminf` [(#3034)](https://github.com/stdlib-js/stdlib/pull/3034) _(by Gunj Joshi)_
-   [`bccdfa2`](https://github.com/stdlib-js/stdlib/commit/bccdfa26987e00d4994a7a1d8265a21c5545ff98) - **feat:** add C implementation for `math/base/special/nanmax` [(#3031)](https://github.com/stdlib-js/stdlib/pull/3031) _(by Gunj Joshi, Athan Reines)_
-   [`2e8204e`](https://github.com/stdlib-js/stdlib/commit/2e8204e28f8bf5a3952938d5f6ff5160e027d175) - **docs:** use correct format specifier [(#3033)](https://github.com/stdlib-js/stdlib/pull/3033) _(by Gunj Joshi)_
-   [`dce31cc`](https://github.com/stdlib-js/stdlib/commit/dce31cca0315ae50904c7fc34a95bb427bd03192) - **docs:** fix function name in examples [(#3032)](https://github.com/stdlib-js/stdlib/pull/3032) _(by Gunj Joshi)_
-   [`06981ee`](https://github.com/stdlib-js/stdlib/commit/06981eeef888c1b48ed3824051cbdccbaa49983c) - **build:** add WebAssembly configuration for `math/base/special/abs2f` and `math/base/special/sqrtf` [(#3026)](https://github.com/stdlib-js/stdlib/pull/3026) _(by Aman Bhansali, Athan Reines)_
-   [`d1d770a`](https://github.com/stdlib-js/stdlib/commit/d1d770a78549d322db7b06bff07f21d057ac60de) - **build:** add WebAssembly configuration for `math/base/special/absf` [(#3023)](https://github.com/stdlib-js/stdlib/pull/3023) _(by Aman Bhansali)_
-   [`a2823da`](https://github.com/stdlib-js/stdlib/commit/a2823daab06f206a71291e6415a1cf09b5d01528) - **chore:** update package meta data [(#3019)](https://github.com/stdlib-js/stdlib/pull/3019) _(by stdlib-bot, Athan Reines)_
-   [`04b72af`](https://github.com/stdlib-js/stdlib/commit/04b72af273ca022bd8295379edc5ff04a03d23e7) - **feat:** add C implementation for `math/base/special/nanmin` [(#3004)](https://github.com/stdlib-js/stdlib/pull/3004) _(by Gunj Joshi, Athan Reines)_
-   [`325ca07`](https://github.com/stdlib-js/stdlib/commit/325ca074aa79d05fc6aa551d035d600b7bb66f2e) - **bench:** refactor benchmarks _(by Athan Reines)_
-   [`c6fe24f`](https://github.com/stdlib-js/stdlib/commit/c6fe24f012b118f30347d075ce52169c8423fbf5) - **bench:** refactor benchmarks _(by Athan Reines)_
-   [`923a355`](https://github.com/stdlib-js/stdlib/commit/923a3553d58b3dac76c22d895bf0bf7c7c3bc75e) - **bench:** refactor C benchmarks _(by Athan Reines)_
-   [`2b30eb7`](https://github.com/stdlib-js/stdlib/commit/2b30eb7d91ebcad9919546040198fad15c54b2b8) - **bench:** refactor C benchmarks _(by Athan Reines)_
-   [`33494b7`](https://github.com/stdlib-js/stdlib/commit/33494b7c0d3bba12b17fc6f0b6990cdadc9c04aa) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`6c58a22`](https://github.com/stdlib-js/stdlib/commit/6c58a22b6f7e514fb358c3256b9573357e4baa65) - **bench:** refactor benchmarks _(by Athan Reines)_
-   [`870f645`](https://github.com/stdlib-js/stdlib/commit/870f64561a7d90579bd92920c8733a205ed0a55c) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`2ce25ea`](https://github.com/stdlib-js/stdlib/commit/2ce25ea8e857700287558847d93b108f3ca6b33d) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`d71493e`](https://github.com/stdlib-js/stdlib/commit/d71493e2f9ec53c9b7168ae0baf81731ebf15a9d) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`03a4ad7`](https://github.com/stdlib-js/stdlib/commit/03a4ad79edbde3654b67e84a4f8d19ad0f670003) - **style:** fix spacing _(by Athan Reines)_
-   [`4a94497`](https://github.com/stdlib-js/stdlib/commit/4a94497c4e429430d5409d65ef55c0077ca1edbd) - **docs:** update function description in `math/base/special/min` [(#2998)](https://github.com/stdlib-js/stdlib/pull/2998) _(by Gunj Joshi)_
-   [`3a595ac`](https://github.com/stdlib-js/stdlib/commit/3a595acf04202235c63824e0ebe99f584d83ce47) - **docs:** update function description in `math/base/special/max` [(#2999)](https://github.com/stdlib-js/stdlib/pull/2999) _(by Gunj Joshi)_
-   [`2b6f932`](https://github.com/stdlib-js/stdlib/commit/2b6f932477bdbbfe755ee3ff9bd0a04020b049bd) - **build:** add WebAssembly configuration to `math/base/special/abs2` and `math/base/special/sqrt` [(#2989)](https://github.com/stdlib-js/stdlib/pull/2989) _(by Aman Bhansali, Athan Reines)_
-   [`edabc3d`](https://github.com/stdlib-js/stdlib/commit/edabc3d28079c34951d12a94071233dc17cfdb66) - **build:** fix Makefile contents _(by Philipp Burckhardt)_
-   [`24fadbf`](https://github.com/stdlib-js/stdlib/commit/24fadbf27f7a01624648ed5bea5cce504b3f65d1) - **bench:** fix runner _(by Athan Reines)_
-   [`8f0f3b6`](https://github.com/stdlib-js/stdlib/commit/8f0f3b65ddcd28963d55d7956a22d801f59155fa) - **bench:** use SpecialFunctions package _(by Athan Reines)_
-   [`c94a8b2`](https://github.com/stdlib-js/stdlib/commit/c94a8b2eee5d00c623ecccbb0aeef4daefb4ed06) - **bench:** update value ranges _(by Athan Reines)_
-   [`2e75575`](https://github.com/stdlib-js/stdlib/commit/2e7557545d196c0af52afe1df1800735d7068836) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`4531104`](https://github.com/stdlib-js/stdlib/commit/45311043928ef04b43f9045965c4c5fdacf3f434) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`c20c2c3`](https://github.com/stdlib-js/stdlib/commit/c20c2c34c3f7f87ab1902cbbefaffd1729077370) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`6b54c29`](https://github.com/stdlib-js/stdlib/commit/6b54c297e4f7eb90c4c6432896a2a62c4cb77de4) - **build:** add WebAssembly configuration _(by Athan Reines)_
-   [`3e201d7`](https://github.com/stdlib-js/stdlib/commit/3e201d779fa5844dd5808418f103f37d1a905d61) - **fix:** update function alias and add WebAssembly configuration _(by Athan Reines)_
-   [`644c390`](https://github.com/stdlib-js/stdlib/commit/644c39075c6d5b630f8d0e2fce1ecbde540a9892) - **build:** add WebAssembly configuration and fix indentation _(by Athan Reines)_
-   [`c24de14`](https://github.com/stdlib-js/stdlib/commit/c24de14b9ee9c026f00c40ed378077007a8054b0) - **chore:** clean-up docs, benchmarks, and examples _(by Athan Reines)_
-   [`16c903b`](https://github.com/stdlib-js/stdlib/commit/16c903bdbd31c7d81bc3d6811e942e35c6de38e6) - **fix:** add missing `native.js` and fix indentation [(#2975)](https://github.com/stdlib-js/stdlib/pull/2975) _(by Gunj Joshi)_
-   [`aa94a37`](https://github.com/stdlib-js/stdlib/commit/aa94a37728cfa9d7356f9a9880bfc411f302443a) - **refactor:** remove hardcoded constant [(#2970)](https://github.com/stdlib-js/stdlib/pull/2970) _(by Gunj Joshi)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`b89c97c`](https://github.com/stdlib-js/stdlib/commit/b89c97ce0b812ff0b2aab16b4d77969d44fe3e8c) - **docs:** resolve lint errors in TS declaration files _(by Philipp Burckhardt)_
-   [`08f9c1a`](https://github.com/stdlib-js/stdlib/commit/08f9c1af6dee1cc36cda84b10230500e75d53ff5) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`9e689ff`](https://github.com/stdlib-js/stdlib/commit/9e689ffcb7c6223afc521f1e574b42f10921cf5e) - **chore:** fix indentation in manifest.json files _(by Philipp Burckhardt)_
-   [`177f16c`](https://github.com/stdlib-js/stdlib/commit/177f16cd80b9072714e7b4e976487e5e6dd19761) - **chore:** update package meta data [(#2933)](https://github.com/stdlib-js/stdlib/pull/2933) _(by stdlib-bot, Athan Reines)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_
-   [`0c994ee`](https://github.com/stdlib-js/stdlib/commit/0c994ee22c77c217aa48d6833e4e11ffe733e9bb) - **docs:** update descriptions and add structured package data [(#2914)](https://github.com/stdlib-js/stdlib/pull/2914) _(by Gunj Joshi, Athan Reines)_
-   [`f51140f`](https://github.com/stdlib-js/stdlib/commit/f51140ffe79720148d77a5ea56e92911787a3175) - **chore:** add structured package data for `math/base/special/pow` [(#2912)](https://github.com/stdlib-js/stdlib/pull/2912) _(by Gunj Joshi)_
-   [`2658654`](https://github.com/stdlib-js/stdlib/commit/265865470275173da9d6efb8c0c2c8b00eb2c999) - **chore:** add structured package data for `math/base/special/cbrt` [(#2909)](https://github.com/stdlib-js/stdlib/pull/2909) _(by Gunj Joshi)_
-   [`65d1c5b`](https://github.com/stdlib-js/stdlib/commit/65d1c5be91c83d9eea3c73fec21abbeb592d434f) - **bench:** remove `f` suffix in C benchmark [(#2911)](https://github.com/stdlib-js/stdlib/pull/2911) _(by Gunj Joshi)_
-   [`595c932`](https://github.com/stdlib-js/stdlib/commit/595c932bffba6011fddaa4c5c3c5f4733732539d) - **chore:** add structured package data for `math/base/special/exp` [(#2893)](https://github.com/stdlib-js/stdlib/pull/2893) _(by Gunj Joshi, Athan Reines)_
-   [`e3777f7`](https://github.com/stdlib-js/stdlib/commit/e3777f7f9bde86ae783ed5252a7e0b97b605d264) - **test:** fix typos in test descriptions [(#2885)](https://github.com/stdlib-js/stdlib/pull/2885) _(by Gunj Joshi)_
-   [`11e3050`](https://github.com/stdlib-js/stdlib/commit/11e3050a0ec978695f2d7d8655676445561be69a) - **chore:** update package meta data [(#2884)](https://github.com/stdlib-js/stdlib/pull/2884) _(by stdlib-bot, Athan Reines)_
-   [`f33f82c`](https://github.com/stdlib-js/stdlib/commit/f33f82c44a8eb9557fc86fbe41a32fe816954a46) - **docs:** use operation name and style fixes in `math/base/special/aversinf` [(#2876)](https://github.com/stdlib-js/stdlib/pull/2876) _(by Gunj Joshi)_
-   [`1233cc4`](https://github.com/stdlib-js/stdlib/commit/1233cc4f11b4ddd0c6e1c919085dc4b9fc6fa483) - **docs:** fix equations, whitespace, and line wrapping [(#2878)](https://github.com/stdlib-js/stdlib/pull/2878) _(by Gunj Joshi)_
-   [`4e5bf6f`](https://github.com/stdlib-js/stdlib/commit/4e5bf6f7aa5de6b1b638e976ec5def4697a3b352) - **docs:** update examples [(#2875)](https://github.com/stdlib-js/stdlib/pull/2875) _(by Gunj Joshi, Athan Reines)_
-   [`f13d569`](https://github.com/stdlib-js/stdlib/commit/f13d56957a00c6ffea87a0cc7fd243cd871a213f) - **docs:** update examples and fix whitespace [(#2865)](https://github.com/stdlib-js/stdlib/pull/2865) _(by Gunj Joshi, Athan Reines)_
-   [`35462f8`](https://github.com/stdlib-js/stdlib/commit/35462f8357fdcb513679a7344fa3a5cc4c3ef55f) - **style:** update heading and fix line wrapping [(#2867)](https://github.com/stdlib-js/stdlib/pull/2867) _(by Gunj Joshi)_
-   [`6c838b0`](https://github.com/stdlib-js/stdlib/commit/6c838b02c4cc9afa7befcdfbb6617b5c367713cb) - **docs:** fix line wrapping and description [(#2874)](https://github.com/stdlib-js/stdlib/pull/2874) _(by Gunj Joshi)_
-   [`7edbd56`](https://github.com/stdlib-js/stdlib/commit/7edbd56db6a1dc6aa955a47be48120c410e1c6af) - **docs:** update examples [(#2873)](https://github.com/stdlib-js/stdlib/pull/2873) _(by Gunj Joshi, Athan Reines)_
-   [`b7e79ad`](https://github.com/stdlib-js/stdlib/commit/b7e79ad951c4e439ca972dc57dd88de9e38f814c) - **docs:** update function descriptions and fix style nits [(#2870)](https://github.com/stdlib-js/stdlib/pull/2870) _(by Gunj Joshi)_
-   [`a294334`](https://github.com/stdlib-js/stdlib/commit/a294334209d981a41f61bda8fd222e1c555f0c5a) - **style:** fix spacing [(#2872)](https://github.com/stdlib-js/stdlib/pull/2872) _(by Gunj Joshi)_
-   [`1f5dba3`](https://github.com/stdlib-js/stdlib/commit/1f5dba3820e6cc2283b593ec2bf4942404ddd3d2) - **style:** remove empty line [(#2869)](https://github.com/stdlib-js/stdlib/pull/2869) _(by Gunj Joshi)_
-   [`b2268e5`](https://github.com/stdlib-js/stdlib/commit/b2268e57b78b3a774f37e984faebd95ac7c0ba69) - **feat:** add `math/base/special/acoversinf` [(#2860)](https://github.com/stdlib-js/stdlib/pull/2860 ) _(by Gunj Joshi)_
-   [`67d2064`](https://github.com/stdlib-js/stdlib/commit/67d206479d7216260d585173d253b1cb48b118f6) - **feat:** add C implementation for `@stdlib/math-base/special/erfcx` _(by Ayaka, Athan Reines, Gunj Joshi, Philipp Burckhardt)_
-   [`4dbd685`](https://github.com/stdlib-js/stdlib/commit/4dbd685129b1ee7a1f459b77e791314c0bef49e7) - **feat:** add `math/base/special/acovercosf` _(by Gunj Joshi)_
-   [`4bddc16`](https://github.com/stdlib-js/stdlib/commit/4bddc16dfcdc4d18a95bbd08abc869f58d77396b) - **feat:** add `math/base/special/aversinf` [(#2852)](https://github.com/stdlib-js/stdlib/pull/2852) _(by Gunj Joshi)_
-   [`ff629c7`](https://github.com/stdlib-js/stdlib/commit/ff629c760ef40d9245a87a56716ea7a12145f6b2) - **feat:** add `math/base/special/maxabsf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`6b76aa9`](https://github.com/stdlib-js/stdlib/commit/6b76aa904c33cbe3f3c28b61ae7797e444d13e52) - **feat:** add `math/base/special/avercosf` [(#2846)](https://github.com/stdlib-js/stdlib/pull/2846) _(by Gunj Joshi)_
-   [`f65c856`](https://github.com/stdlib-js/stdlib/commit/f65c8563ab3b3a25883d020332f4a594aa69892a) - **refactor:** use stdlib `fmod` and `DDD_D` napi function in `math/base/special/wrap` [(#2814)](https://github.com/stdlib-js/stdlib/pull/2814) _(by Gunj Joshi)_
-   [`d01e0f3`](https://github.com/stdlib-js/stdlib/commit/d01e0f34931b9fd522f3d8de3e2a0ad5c1ac0890) - **feat:** add `math/base/special/minabsf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`1f7fd37`](https://github.com/stdlib-js/stdlib/commit/1f7fd373c939151c685875e1e0d2f146f072ce26) - **feat:** add `math/base/special/atandf` [(#2841)](https://github.com/stdlib-js/stdlib/pull/2841) _(by Gunj Joshi)_
-   [`1288e7e`](https://github.com/stdlib-js/stdlib/commit/1288e7e8b4bf92af109871d4e75c91e707449575) - **refactor:** use `stdlib_base_fmod` instead of built-in in `math/base/special/gcd` _(by Gunj Joshi)_
-   [`0ab9fc7`](https://github.com/stdlib-js/stdlib/commit/0ab9fc7de86012c670189711b6c6627b41119537) - **test:** add and modify tests [(#2830)](https://github.com/stdlib-js/stdlib/pull/2830) _(by Gunj Joshi)_
-   [`16c19b6`](https://github.com/stdlib-js/stdlib/commit/16c19b67c7452b3ae9755cc7ef2a5d2540ab1cf9) - **feat:** add `math/base/special/xlogyf` [(#2813)](https://github.com/stdlib-js/stdlib/pull/2813) _(by Gunj Joshi)_
-   [`71c43cf`](https://github.com/stdlib-js/stdlib/commit/71c43cf5165749e2ce2647cb52d92f6c97f16959) - **feat:** add `math/base/special/ldexpf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`6c8f019`](https://github.com/stdlib-js/stdlib/commit/6c8f019db8adb12466250957693edb9830496a7b) - **feat:** add `math/base/special/logf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`50b38f9`](https://github.com/stdlib-js/stdlib/commit/50b38f941b50a3f71b531d965c7312d4c6932f84) - **feat:** add `math/base/special/acotdf` [(#2799)](https://github.com/stdlib-js/stdlib/pull/2799) _(by Gunj Joshi)_
-   [`15878f9`](https://github.com/stdlib-js/stdlib/commit/15878f9056d9e0e4bae0411870655316bf68dff3) - **feat:** add `math/base/special/maxf` [(#2816)](https://github.com/stdlib-js/stdlib/pull/2816) _(by Gunj Joshi)_
-   [`ef703d6`](https://github.com/stdlib-js/stdlib/commit/ef703d629af0fa6f4a34e697a26beea37dc7345c) - **feat:** add `math/base/special/minf` [(#2820)](https://github.com/stdlib-js/stdlib/pull/2820) _(by Gunj Joshi, Athan Reines)_
-   [`0dd0377`](https://github.com/stdlib-js/stdlib/commit/0dd03776ccc026cb8682de5b0e48e9e3f215ea19) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`abcf36e`](https://github.com/stdlib-js/stdlib/commit/abcf36e4c2ff11c808a22217d4d6ebb506f0df1d) - **fix:** remove extra slash from dependency in `manifest.json`  _(by Philipp Burckhardt)_
-   [`588c4b4`](https://github.com/stdlib-js/stdlib/commit/588c4b4156c4efee6a90b34b329c39f3c8f4a9d6) - **docs:** update function description in `math/base/special/log` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`09853ce`](https://github.com/stdlib-js/stdlib/commit/09853ce60a535feb4a8f45620dc557cddda38fba) - **chore:** update package meta data [(#2807)](https://github.com/stdlib-js/stdlib/pull/2807) _(by stdlib-bot, Athan Reines)_
-   [`6a3b3d7`](https://github.com/stdlib-js/stdlib/commit/6a3b3d731ca697a62e3d58900e1b6cb06e7667dd) - **chore:** update directories meta data _(by Athan Reines)_
-   [`aaf0c58`](https://github.com/stdlib-js/stdlib/commit/aaf0c5825f2be45af9025e09c60cc4a1de559152) - **feat:** add C implementation for `math/base/special/bessely0` [(#2780)](https://github.com/stdlib-js/stdlib/pull/2780) _(by Gunj Joshi)_
-   [`0ae49fb`](https://github.com/stdlib-js/stdlib/commit/0ae49fba6e79599a4b8b1be464a7570a3c7f6d83) - **feat:** fix function name and update docs [(#2777)](https://github.com/stdlib-js/stdlib/pull/2777) _(by Gunj Joshi)_
-   [`779b35c`](https://github.com/stdlib-js/stdlib/commit/779b35ca267629b2dadd9947ad2ba106b8095004) - **feat:** add C implementation for `math/base/special/besselj0` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`252286d`](https://github.com/stdlib-js/stdlib/commit/252286d5d3357112ff718f0e3dc5ae758836efd3) - **bench:** remove irrelevant benchmark, update `boost` link in `math/base/special/gamma-delta-ratio` _(by Gunj Joshi)_
-   [`01126b1`](https://github.com/stdlib-js/stdlib/commit/01126b1a0519c87778b802efd352d3117028bb88) - **style:** compare `n` with `integer`, not a `double` in `math/base/special/binomcoefln` [(#2775)](https://github.com/stdlib-js/stdlib/pull/2775 ) _(by Gunj Joshi)_
-   [`068bc90`](https://github.com/stdlib-js/stdlib/commit/068bc905997d518fef79bd94f22772f02a8915c4) - **docs:** add comment, revert to previous tolerance in `math/base/special/factorialln` [(#2778)](https://github.com/stdlib-js/stdlib/pull/2778) _(by Gunj Joshi)_
-   [`18bd1b5`](https://github.com/stdlib-js/stdlib/commit/18bd1b5ace1a7dbd9d26bb66c1a1f0aa91573416) - **feat:** add C implementation for `math/base/special/besselj1` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`3985f47`](https://github.com/stdlib-js/stdlib/commit/3985f47c6ec78cc644a98aa916740a1b2d37338f) - **feat:** add C implementation for `math/base/special/gamma-delta-ratio` _(by Gunj Joshi, Athan Reines, Philipp Burckhardt)_
-   [`0258e19`](https://github.com/stdlib-js/stdlib/commit/0258e19861efda8129308f2caae486b35a249edd) - **chore:** update package meta data [(#2773)](https://github.com/stdlib-js/stdlib/pull/2773) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5b184b6`](https://github.com/stdlib-js/stdlib/commit/5b184b681a3d1d5c3fea30b9d8f4630c86eb44af) - **feat:** add C implementation for `math/base/special/binomcoefln` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`2837436`](https://github.com/stdlib-js/stdlib/commit/283743652091fff85f01746b9edf8da3d5286cf5) - **docs:** update license header in `math/base/special/gamma1pm1` [(#2764)](https://github.com/stdlib-js/stdlib/pull/2764) _(by Gunj Joshi)_
-   [`c14e9c3`](https://github.com/stdlib-js/stdlib/commit/c14e9c3c5b43e13f53e20f87b51868e49b8b7882) - **docs:** update license header and remove `stdlib` include in `math/base/special/trigamma` _(by Gunj Joshi)_
-   [`82f78f2`](https://github.com/stdlib-js/stdlib/commit/82f78f2a48a3dd406afbed1a3aa2891ecbc94ab6) - **docs:** update function description comments in `math/base/special/betaln` _(by Gunj Joshi)_
-   [`02d4c8a`](https://github.com/stdlib-js/stdlib/commit/02d4c8a5104c324ff3e4b55c6889601e9fd81844) - **bench:** fix variable dtypes [(#2761)](https://github.com/stdlib-js/stdlib/pull/2761) _(by Gunj Joshi, Athan Reines)_
-   [`16db19b`](https://github.com/stdlib-js/stdlib/commit/16db19ba69114e4f4180464e8c4562b35a3078d2) - **feat:** add C implementation for `math/base/special/trigamma` _(by Gunj Joshi)_
-   [`fabbf5a`](https://github.com/stdlib-js/stdlib/commit/fabbf5abfb781849d460e93dd498cd7d99505678) - **feat:** add `math/base/special/roundf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`f966721`](https://github.com/stdlib-js/stdlib/commit/f966721cd336b1ef47199adc316f6e5779aeff06) - **chore:** update URLs _(by Philipp Burckhardt)_
-   [`458697c`](https://github.com/stdlib-js/stdlib/commit/458697cf4aae5b6bcd2e0d9e19181d2ac3b70fe1) - **feat:** add C implementation for `math/base/special/gamma1pm1` _(by Gunj Joshi)_
-   [`7502603`](https://github.com/stdlib-js/stdlib/commit/75026039180c76cf376d7550d7470c57a11780cd) - **feat:** add C implementation for `math/base/special/betaln` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`5cd396f`](https://github.com/stdlib-js/stdlib/commit/5cd396ff2752de587151f2f8b50d36348db3321e) - **refactor:** use bitwise operation and make casting behavior explicit [(#2733)](https://github.com/stdlib-js/stdlib/pull/2733) _(by Gunj Joshi)_
-   [`8a97c7d`](https://github.com/stdlib-js/stdlib/commit/8a97c7dbcb07a873fe7395156cfa1fa40beb1dad) - **chore:** update package meta data [(#2738)](https://github.com/stdlib-js/stdlib/pull/2738) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1c43f05`](https://github.com/stdlib-js/stdlib/commit/1c43f05a04d6731ea7d1b93f89179da216259005) - **feat:** add C implementation for `math/base/special/factorialln` [(#2731)](https://github.com/stdlib-js/stdlib/pull/2731 ) _(by Gunj Joshi)_
-   [`b633157`](https://github.com/stdlib-js/stdlib/commit/b6331572f8cc0dcd92ac1dbeb0aeaabc4d858615) - **docs:** remove comments, set `isNegative` to `uint8_t` in `math/base/special/gammaln` [(#2732)](https://github.com/stdlib-js/stdlib/pull/2732) _(by Gunj Joshi)_
-   [`759e667`](https://github.com/stdlib-js/stdlib/commit/759e6676d54a121a5458edbe0f6caa541c465001) - **feat:** add C implementation for `math/base/special/sinc` _(by Gunj Joshi)_
-   [`06b8011`](https://github.com/stdlib-js/stdlib/commit/06b80119890e1868578ba4904e9efaa071b27b05) - **feat:** add C implementation for `math/base/special/binomcoef` _(by Gunj Joshi)_
-   [`d745814`](https://github.com/stdlib-js/stdlib/commit/d74581415b30604ce6db2b3a2c4f242040eb3e8e) - **feat:** add C implementation for `math/base/special/gammaln` [(#2636)](https://github.com/stdlib-js/stdlib/pull/2636) _(by Gunj Joshi)_
-   [`9816dec`](https://github.com/stdlib-js/stdlib/commit/9816dece59ddf974693cf1626f3b5823d652e3c4) - **bench:** fix description [(#2709)](https://github.com/stdlib-js/stdlib/pull/2709) _(by Gunj Joshi)_
-   [`6f3e683`](https://github.com/stdlib-js/stdlib/commit/6f3e683d6409d7b05965580c56f79e07f659d08b) - **docs:** fix return type [(#2700)](https://github.com/stdlib-js/stdlib/pull/2700) _(by Gunj Joshi)_
-   [`4d208c9`](https://github.com/stdlib-js/stdlib/commit/4d208c9e0131e9c0e15d713828266f50994ec891) - **test:** add missing tests [(#2701)](https://github.com/stdlib-js/stdlib/pull/2701) _(by Gunj Joshi)_
-   [`f00c6b6`](https://github.com/stdlib-js/stdlib/commit/f00c6b63931baf0e14f1b6adeeacc2a1c3e353df) - **refactor:** move `return` statement [(#2702)](https://github.com/stdlib-js/stdlib/pull/2702) _(by Gunj Joshi)_
-   [`ca6489f`](https://github.com/stdlib-js/stdlib/commit/ca6489fe555d5ae046287abf53e0655c5ab8f8de) - **refactor:** remove include and fix return type [(#2699)](https://github.com/stdlib-js/stdlib/pull/2699) _(by Gunj Joshi)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-29)

<section class="packages">

### Packages

<section class="package" id="math-base-special-v0.3.0">

#### [@stdlib/math/base/special](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special)

<details>

<section class="features">

##### Features

-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681)
-   [`c77f866`](https://github.com/stdlib-js/stdlib/commit/c77f866c93006ba4bf73221cb28c94c23195ca06) - add C implementation for `math/base/special/binet` [(#2653)](https://github.com/stdlib-js/stdlib/pull/2653)
-   [`5df976a`](https://github.com/stdlib-js/stdlib/commit/5df976abacaaf3082890fa852e40edfdf1b79f4b) - update namespace TypeScript declarations [(#2637)](https://github.com/stdlib-js/stdlib/pull/2637)
-   [`81b48ae`](https://github.com/stdlib-js/stdlib/commit/81b48aeb9d5d2b16fe039f9db7e710c95a35585f) - update namespace TypeScript declarations [(#2621)](https://github.com/stdlib-js/stdlib/pull/2621)
-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - update namespace TypeScript declarations
-   [`44d752e`](https://github.com/stdlib-js/stdlib/commit/44d752efc62e7aa8cd05690a117c58de029aafc8) - add new special functions to `math/base/special` namespace

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`6125c3c`](https://github.com/stdlib-js/stdlib/commit/6125c3c1f8b8e2902f505844ce5e83ba7c745f9c) - leverage symmetry to avoid infinite recursion

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`5df976a`](https://github.com/stdlib-js/stdlib/commit/5df976abacaaf3082890fa852e40edfdf1b79f4b): base parameter is no longer optional

    -   To migrate, users should always provide a base argument. To preserve previous behavior, users should be a third argument equal to `10`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2150](https://github.com/stdlib-js/stdlib/issues/2150)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acos-v0.3.0">

#### [@stdlib/math/base/special/acos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acos)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosd-v0.3.0">

#### [@stdlib/math/base/special/acosd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosd)

<details>

<section class="features">

##### Features

-   [`ee3cbb1`](https://github.com/stdlib-js/stdlib/commit/ee3cbb145141c2f315a7b7b0f1a3b333a2a74e40) - add C implementation for `math/base/special/acosd`
-   [`f01384c`](https://github.com/stdlib-js/stdlib/commit/f01384c7b893418d152588d02d96a1594a9d9b92) - add `math/base/special/acosd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosf-v0.3.0">

#### [@stdlib/math/base/special/acosf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosf)

<details>

<section class="features">

##### Features

-   [`03e9400`](https://github.com/stdlib-js/stdlib/commit/03e940069ef08b4664a59e40a26bba49cb4a07b5) - add `math/base/special/acosf` [(#2083)](https://github.com/stdlib-js/stdlib/pull/2083)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`5b084e0`](https://github.com/stdlib-js/stdlib/commit/5b084e03671d12081832139d4affe5421ab8cf06) - account for single-precision rounding when `x` is close to unity

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2081](https://github.com/stdlib-js/stdlib/issues/2081)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosh-v0.3.0">

#### [@stdlib/math/base/special/acosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acot-v0.3.0">

#### [@stdlib/math/base/special/acot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acot)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acotd-v0.3.0">

#### [@stdlib/math/base/special/acotd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acotd)

<details>

<section class="features">

##### Features

-   [`5d6a173`](https://github.com/stdlib-js/stdlib/commit/5d6a173d1cdc95f259811dc566836f2a7b525315) - add C implementation for `math/base/special/acotd`
-   [`7489261`](https://github.com/stdlib-js/stdlib/commit/748926101f284b6e9f196283ff1ca08bf6efa2dc) - add `math/base/special/acotd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acotf-v0.3.0">

#### [@stdlib/math/base/special/acotf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acotf)

<details>

<section class="features">

##### Features

-   [`01cbab9`](https://github.com/stdlib-js/stdlib/commit/01cbab9ea365ede593f291f90959bbf9f7a8e967) - add `math/base/special/acotf` [(#2117)](https://github.com/stdlib-js/stdlib/pull/2117)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2113](https://github.com/stdlib-js/stdlib/issues/2113)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoth-v0.3.0">

#### [@stdlib/math/base/special/acoth](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoth)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acovercos-v0.3.0">

#### [@stdlib/math/base/special/acovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acovercos)

<details>

<section class="features">

##### Features

-   [`234c6c3`](https://github.com/stdlib-js/stdlib/commit/234c6c3261313ab8f60c3211bc77fa21741664f7) - add C implementation for `math/base/special/acovercos`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoversin-v0.3.0">

#### [@stdlib/math/base/special/acoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoversin)

<details>

<section class="features">

##### Features

-   [`1096686`](https://github.com/stdlib-js/stdlib/commit/1096686e16dd4515a7aaa5bdc35ff5803ec0349f) - add C implementation for `math/base/special/acoversin` [(#142)](https://github.com/stdlib-js/stdlib/pull/142)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#776](https://github.com/stdlib-js/stdlib/issues/776)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acsc-v0.3.0">

#### [@stdlib/math/base/special/acsc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acsc)

<details>

<section class="features">

##### Features

-   [`c2239f3`](https://github.com/stdlib-js/stdlib/commit/c2239f369fadf2c01d0ba114d6b590f24c6dbe5e) - add C implementation for `math/base/special/acsc`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acscd-v0.3.0">

#### [@stdlib/math/base/special/acscd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acscd)

<details>

<section class="features">

##### Features

-   [`5de3b76`](https://github.com/stdlib-js/stdlib/commit/5de3b7612454a97aef3c4cd8e8ba48858cc13d02) - add C implementation for `math/base/special/acscd`
-   [`1d7b726`](https://github.com/stdlib-js/stdlib/commit/1d7b726c275c4a1bcb13ac2731ad19bec63d3041) - add `math/base/special/acscd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acscdf-v0.3.0">

#### [@stdlib/math/base/special/acscdf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acscdf)

<details>

<section class="features">

##### Features

-   [`077a5e6`](https://github.com/stdlib-js/stdlib/commit/077a5e68dbabba3a92bf0163de06564759b57257) - add `math/base/special/acscdf` [(#2148)](https://github.com/stdlib-js/stdlib/pull/2148)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acscf-v0.3.0">

#### [@stdlib/math/base/special/acscf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acscf)

<details>

<section class="features">

##### Features

-   [`bcf0e37`](https://github.com/stdlib-js/stdlib/commit/bcf0e3709a20f304c024838e51fba1e99293517f) - add `math/base/special/acscf` [(#2111)](https://github.com/stdlib-js/stdlib/pull/2111)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2109](https://github.com/stdlib-js/stdlib/issues/2109)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acsch-v0.3.0">

#### [@stdlib/math/base/special/acsch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acsch)

<details>

<section class="features">

##### Features

-   [`6e31e73`](https://github.com/stdlib-js/stdlib/commit/6e31e7364b677a18cb4294b0820ba1ebe68cb47f) - add C implementation for `math/base/special/acsch` [(#1833)](https://github.com/stdlib-js/stdlib/pull/1833)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#860](https://github.com/stdlib-js/stdlib/issues/860)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahavercos-v0.3.0">

#### [@stdlib/math/base/special/ahavercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahavercos)

<details>

<section class="features">

##### Features

-   [`eace8f3`](https://github.com/stdlib-js/stdlib/commit/eace8f39f945f8b330fdfdd9bd71a45555e521c4) - add C implementation for `math/base/special/ahavercos` [(#1419)](https://github.com/stdlib-js/stdlib/pull/1419)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahaversin-v0.3.0">

#### [@stdlib/math/base/special/ahaversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahaversin)

<details>

<section class="features">

##### Features

-   [`3addfa7`](https://github.com/stdlib-js/stdlib/commit/3addfa758b52d1ae97959efc77fe9ee6b7441b9d) - add C implementation for `math/base/special/ahaversin`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asec-v0.3.0">

#### [@stdlib/math/base/special/asec](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asec)

<details>

<section class="features">

##### Features

-   [`b86d26e`](https://github.com/stdlib-js/stdlib/commit/b86d26e2a205fad885130b417654044d9d7a8d49) - add C implementation for `math/base/special/asec`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asecd-v0.3.0">

#### [@stdlib/math/base/special/asecd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asecd)

<details>

<section class="features">

##### Features

-   [`f7ec55b`](https://github.com/stdlib-js/stdlib/commit/f7ec55b562a0cf7e7bf80ff0e286f6d195402b57) - add C implementation for `math/base/special/asecd`
-   [`5b72836`](https://github.com/stdlib-js/stdlib/commit/5b72836b09a88874c85ac6e72ae150a89fa1d104) - add `math/base/special/asecd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asecdf-v0.3.0">

#### [@stdlib/math/base/special/asecdf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asecdf)

<details>

<section class="features">

##### Features

-   [`cf964b1`](https://github.com/stdlib-js/stdlib/commit/cf964b1cb63245d2105e0bab40e0cfaaee29a7bf) - add `math/base/special/asecdf` [(#2199)](https://github.com/stdlib-js/stdlib/pull/2199)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asecf-v0.3.0">

#### [@stdlib/math/base/special/asecf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asecf)

<details>

<section class="features">

##### Features

-   [`675ca1f`](https://github.com/stdlib-js/stdlib/commit/675ca1f7aac16fe8efaa81bdea4475e5862c5709) - add `math/base/special/asecf` [(#2120)](https://github.com/stdlib-js/stdlib/pull/2120)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2118](https://github.com/stdlib-js/stdlib/issues/2118)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asech-v0.3.0">

#### [@stdlib/math/base/special/asech](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asech)

<details>

<section class="features">

##### Features

-   [`b56c697`](https://github.com/stdlib-js/stdlib/commit/b56c6979cca60119d6ebd79ffabb1c3d9b9d1d99) - add C implementation for `math/base/special/asech`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asin-v0.3.0">

#### [@stdlib/math/base/special/asin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asin)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asind-v0.3.0">

#### [@stdlib/math/base/special/asind](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asind)

<details>

<section class="features">

##### Features

-   [`f098571`](https://github.com/stdlib-js/stdlib/commit/f098571eeb38c2e5639e128715daebf467e73da2) - add C implementation for `math/base/special/asind`
-   [`7d855d1`](https://github.com/stdlib-js/stdlib/commit/7d855d19453e4b94b70dd4a25e9b291590e50fa2) - add `math/base/special/asind`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asindf-v0.3.0">

#### [@stdlib/math/base/special/asindf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asindf)

<details>

<section class="features">

##### Features

-   [`f684340`](https://github.com/stdlib-js/stdlib/commit/f684340123e8d5a8ec19a532527c1cb2a99c6b07) - add `math/base/special/asindf` [(#2132)](https://github.com/stdlib-js/stdlib/pull/2132)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asinf-v0.3.0">

#### [@stdlib/math/base/special/asinf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asinf)

<details>

<section class="features">

##### Features

-   [`0038b4b`](https://github.com/stdlib-js/stdlib/commit/0038b4bd2e637577753c8dd28eabfbd40c7d727b) - add `math/base/special/asinf` [(#2030)](https://github.com/stdlib-js/stdlib/pull/2030)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1944](https://github.com/stdlib-js/stdlib/issues/1944)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asinh-v0.3.0">

#### [@stdlib/math/base/special/asinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asinh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan-v0.3.0">

#### [@stdlib/math/base/special/atan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan2-v0.3.0">

#### [@stdlib/math/base/special/atan2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan2)

<details>

<section class="features">

##### Features

-   [`1cf574b`](https://github.com/stdlib-js/stdlib/commit/1cf574bb29355855c8d86594c0133b4812ac78b3) - add C implementation for `math/base/special/atan2`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atand-v0.3.0">

#### [@stdlib/math/base/special/atand](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atand)

<details>

<section class="features">

##### Features

-   [`0db265e`](https://github.com/stdlib-js/stdlib/commit/0db265e586019fb5cb2df21ae8602dfcc953586e) - add C implementation for `math/base/special/atand`
-   [`e45ee33`](https://github.com/stdlib-js/stdlib/commit/e45ee3358489e27fdb8fac2b265fb7bbfd9935b9) - add `math/base/special/atand`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atanf-v0.3.0">

#### [@stdlib/math/base/special/atanf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atanf)

<details>

<section class="features">

##### Features

-   [`f141a9b`](https://github.com/stdlib-js/stdlib/commit/f141a9be42258c5c51ce0a75594ef59a30a125f1) - add `math/base/special/atanf` [(#2054)](https://github.com/stdlib-js/stdlib/pull/2054)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`4c5cc36`](https://github.com/stdlib-js/stdlib/commit/4c5cc36473cf920c2dbd1b2e27807b807d860e71) - correctly handle signed zeroes in `math/base/special/atanf` [(#2115)](https://github.com/stdlib-js/stdlib/pull/2115)

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2035](https://github.com/stdlib-js/stdlib/issues/2035)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atanh-v0.3.0">

#### [@stdlib/math/base/special/atanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atanh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-avercos-v0.3.0">

#### [@stdlib/math/base/special/avercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/avercos)

<details>

<section class="features">

##### Features

-   [`cb0051c`](https://github.com/stdlib-js/stdlib/commit/cb0051ce90007b08f6d702aee17a1657a0d821c6) - add C implementation for `math/base/special/avercos`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-aversin-v0.3.0">

#### [@stdlib/math/base/special/aversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/aversin)

<details>

<section class="features">

##### Features

-   [`8459377`](https://github.com/stdlib-js/stdlib/commit/8459377ed28af410123fa0099daa2ace37b71f24) - add C implementation for `math/base/special/aversin`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bernoulli-v0.3.0">

#### [@stdlib/math/base/special/bernoulli](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bernoulli)

<details>

<section class="features">

##### Features

-   [`0c78f2f`](https://github.com/stdlib-js/stdlib/commit/0c78f2f502062c3d5bd6c8ac857cb2203fd17f7f) - add C implementation for `math/base/special/bernoulli`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`7c8d0ce`](https://github.com/stdlib-js/stdlib/commit/7c8d0ced2596cd1ed9e4dec0a40915dd91f59537) - missing headers in C examples [(#1958)](https://github.com/stdlib-js/stdlib/pull/1958)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-beta-v0.3.0">

#### [@stdlib/math/base/special/beta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/beta)

<details>

<section class="features">

##### Features

-   [`d4fd701`](https://github.com/stdlib-js/stdlib/commit/d4fd701ae65d28edea1410a6f5a757ac39214f68) - add C implementation for `math/base/special/beta`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox-v0.3.0">

#### [@stdlib/math/base/special/boxcox](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox)

<details>

<section class="features">

##### Features

-   [`63034fc`](https://github.com/stdlib-js/stdlib/commit/63034fc093bf2419b7c08209f2225beaefdb3211) - add C implementation for `math/base/special/boxcox` [(#1870)](https://github.com/stdlib-js/stdlib/pull/1870)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox1p-v0.3.0">

#### [@stdlib/math/base/special/boxcox1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox1p)

<details>

<section class="features">

##### Features

-   [`601c72c`](https://github.com/stdlib-js/stdlib/commit/601c72c0495f2515161fe50ade666b477d0a2c4f) - add C implementation for `math/base/special/boxcox1p`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox1pinv-v0.3.0">

#### [@stdlib/math/base/special/boxcox1pinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox1pinv)

<details>

<section class="features">

##### Features

-   [`78524df`](https://github.com/stdlib-js/stdlib/commit/78524df819f374e2686ed27f333b1b4658ea13d5) - add C implementation for `math/base/special/boxcox1pinv`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcoxinv-v0.3.0">

#### [@stdlib/math/base/special/boxcoxinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcoxinv)

<details>

<section class="features">

##### Features

-   [`f2812cf`](https://github.com/stdlib-js/stdlib/commit/f2812cfefb23e0f3b9607ad2af9b5d7cbb68861e) - add C implementation for `math/base/special/boxcoxinv` [(#1878)](https://github.com/stdlib-js/stdlib/pull/1878)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs-v0.3.0">

#### [@stdlib/math/base/special/cabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs2-v0.3.0">

#### [@stdlib/math/base/special/cabs2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs2)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceil-v0.3.0">

#### [@stdlib/math/base/special/cceil](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceil)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceiln-v0.3.0">

#### [@stdlib/math/base/special/cceiln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceiln)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ccis-v0.3.0">

#### [@stdlib/math/base/special/ccis](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ccis)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil10-v0.3.0">

#### [@stdlib/math/base/special/ceil10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil10)

<details>

<section class="features">

##### Features

-   [`d4db8a9`](https://github.com/stdlib-js/stdlib/commit/d4db8a93b0c93cb3392b59ee031ce188399b90a5) - add C implementation for `math/base/special/ceil10` [(#2626)](https://github.com/stdlib-js/stdlib/pull/2626)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil2-v0.3.0">

#### [@stdlib/math/base/special/ceil2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil2)

<details>

<section class="features">

##### Features

-   [`06fd785`](https://github.com/stdlib-js/stdlib/commit/06fd785919d2ef770b5a2bffd69dd4d3c36e8294) - add C implementation for `math/base/special/ceil2` [(#2602)](https://github.com/stdlib-js/stdlib/pull/2602)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilb-v0.3.0">

#### [@stdlib/math/base/special/ceilb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilb)

<details>

<section class="features">

##### Features

-   [`607135f`](https://github.com/stdlib-js/stdlib/commit/607135f297a48a24d8d312a61ddfe98a332b1ca5) - add C implementation for `math/base/special/ceilb` [(#2627)](https://github.com/stdlib-js/stdlib/pull/2627)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilsd-v0.3.0">

#### [@stdlib/math/base/special/ceilsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilsd)

<details>

<section class="features">

##### Features

-   [`854b793`](https://github.com/stdlib-js/stdlib/commit/854b793ecdcc540067d9989f4c14e34fb9b736bb) - add C implementation for `math/base/special/ceilsd`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`854b793`](https://github.com/stdlib-js/stdlib/commit/854b793ecdcc540067d9989f4c14e34fb9b736bb): add C implementation for `math/base/special/ceilsd`

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cexp-v0.3.0">

#### [@stdlib/math/base/special/cexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cexp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cflipsign-v0.3.0">

#### [@stdlib/math/base/special/cflipsign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cflipsign)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloor-v0.3.0">

#### [@stdlib/math/base/special/cfloor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloor)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloorn-v0.3.0">

#### [@stdlib/math/base/special/cfloorn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloorn)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cidentity-v0.3.0">

#### [@stdlib/math/base/special/cidentity](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cidentity)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cinv-v0.3.0">

#### [@stdlib/math/base/special/cinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cinv)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cos-v0.3.0">

#### [@stdlib/math/base/special/cos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos)

<details>

<section class="features">

##### Features

-   [`343da6f`](https://github.com/stdlib-js/stdlib/commit/343da6faa466294331be4befd603fde2faa83503) - add C implementation for `math/base/special/cos`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosd-v0.3.0">

#### [@stdlib/math/base/special/cosd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosd)

<details>

<section class="features">

##### Features

-   [`c811882`](https://github.com/stdlib-js/stdlib/commit/c8118827f71ca602ccfea2721df03afbbd3857e5) - add C implementation for `math/base/special/cosd` [(#2393)](https://github.com/stdlib-js/stdlib/pull/2393)
-   [`0b0e240`](https://github.com/stdlib-js/stdlib/commit/0b0e240f6959ac1dae3bc00fe42b9930eb887e93) - add `math/base/special/cosd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosh-v0.3.0">

#### [@stdlib/math/base/special/cosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosm1-v0.3.0">

#### [@stdlib/math/base/special/cosm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosm1)

<details>

<section class="features">

##### Features

-   [`143e88d`](https://github.com/stdlib-js/stdlib/commit/143e88d8089ee484eeb54df1d8739f3e146c4cae) - add C implementation for `math/base/special/cosm1` [(#2651)](https://github.com/stdlib-js/stdlib/pull/2651)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cospi-v0.3.0">

#### [@stdlib/math/base/special/cospi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cospi)

<details>

<section class="features">

##### Features

-   [`58da03b`](https://github.com/stdlib-js/stdlib/commit/58da03b9aae58c600fc67d46e396ac6f1e2de1d0) - add C implementation for `math/base/special/cospi` [(#2612)](https://github.com/stdlib-js/stdlib/pull/2612)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cot-v0.3.0">

#### [@stdlib/math/base/special/cot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cot)

<details>

<section class="features">

##### Features

-   [`8304a04`](https://github.com/stdlib-js/stdlib/commit/8304a041c10450a797c64c2fffafc6b0e4bd1a04) - add C implementation for `math/base/special/cot`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cotd-v0.3.0">

#### [@stdlib/math/base/special/cotd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cotd)

<details>

<section class="features">

##### Features

-   [`c9ab1f2`](https://github.com/stdlib-js/stdlib/commit/c9ab1f2313cac54672d24e82665a13ff37b79a93) - add C implementation for `math/base/special/cotd` [(#2443)](https://github.com/stdlib-js/stdlib/pull/2443)
-   [`c5e01bf`](https://github.com/stdlib-js/stdlib/commit/c5e01bf5b7718ded999fa1f4841407ed27bfdfc1) - add `math/base/special/cotd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-coth-v0.3.0">

#### [@stdlib/math/base/special/coth](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/coth)

<details>

<section class="features">

##### Features

-   [`1aaab57`](https://github.com/stdlib-js/stdlib/commit/1aaab5736f41d8330154339c52f8755381f04667) - add C implementation for `math/base/special/coth`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`8484053`](https://github.com/stdlib-js/stdlib/commit/84840535f83baa0b4638c5cf467144d4b0eb40d6) - rename configuration file [(#1730)](https://github.com/stdlib-js/stdlib/pull/1730)

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1718](https://github.com/stdlib-js/stdlib/issues/1718)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-covercos-v0.3.0">

#### [@stdlib/math/base/special/covercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/covercos)

<details>

<section class="features">

##### Features

-   [`7b85db8`](https://github.com/stdlib-js/stdlib/commit/7b85db803f6a6bce2999bfe8b2513edb08e15a67) - add C implementation for `math/base/special/covercos` [(#2377)](https://github.com/stdlib-js/stdlib/pull/2377)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-coversin-v0.3.0">

#### [@stdlib/math/base/special/coversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/coversin)

<details>

<section class="features">

##### Features

-   [`3cf2e89`](https://github.com/stdlib-js/stdlib/commit/3cf2e897adf5128f94bd7279e88ca9d42dfe7caa) - add C implementation for `math/base/special/coversin` [(#2361)](https://github.com/stdlib-js/stdlib/pull/2361)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cphase-v0.3.0">

#### [@stdlib/math/base/special/cphase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cphase)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cpolar-v0.3.0">

#### [@stdlib/math/base/special/cpolar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cpolar)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cround-v0.3.0">

#### [@stdlib/math/base/special/cround](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cround)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-croundn-v0.3.0">

#### [@stdlib/math/base/special/croundn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/croundn)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csc-v0.3.0">

#### [@stdlib/math/base/special/csc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csc)

<details>

<section class="features">

##### Features

-   [`fdba877`](https://github.com/stdlib-js/stdlib/commit/fdba877adb81859aa87b72685f19a8921d4dd8db) - add C implementation for `math/base/special/csc` [(#2367)](https://github.com/stdlib-js/stdlib/pull/2367 )
-   [`b60ef62`](https://github.com/stdlib-js/stdlib/commit/b60ef6245ac44dbef3076f1122e91f4aa8406e6c) - add `math/base/special/csc`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cscd-v0.3.0">

#### [@stdlib/math/base/special/cscd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cscd)

<details>

<section class="features">

##### Features

-   [`e7938d9`](https://github.com/stdlib-js/stdlib/commit/e7938d964046b7a61dbc89d23f39daebf4545a47) - add C implementation for `math/base/special/cscd` [(#2378)](https://github.com/stdlib-js/stdlib/pull/2378)
-   [`bb6ac7e`](https://github.com/stdlib-js/stdlib/commit/bb6ac7ec68ee6a78cffd9527e477a2bc0fdcdf17) - add `math/base/special/cscd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csch-v0.3.0">

#### [@stdlib/math/base/special/csch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csch)

<details>

<section class="features">

##### Features

-   [`9d915c8`](https://github.com/stdlib-js/stdlib/commit/9d915c8cb1ff07e1d894429ea8e6b022ea53f415) - add C implementation for @stdlib/math/base/special/csch [(#1819)](https://github.com/stdlib-js/stdlib/pull/1819)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1816](https://github.com/stdlib-js/stdlib/issues/1816)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csignum-v0.3.0">

#### [@stdlib/math/base/special/csignum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csignum)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-digamma-v0.3.0">

#### [@stdlib/math/base/special/digamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/digamma)

<details>

<section class="features">

##### Features

-   [`337adbf`](https://github.com/stdlib-js/stdlib/commit/337adbf93822a5ab1adb5256594855e344e9414c) - add C implementation for `math/base/special/digamma` [(#2533)](https://github.com/stdlib-js/stdlib/pull/2533 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirac-delta-v0.3.0">

#### [@stdlib/math/base/special/dirac-delta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirac-delta)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ellipe-v0.3.0">

#### [@stdlib/math/base/special/ellipe](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ellipe)

<details>

<section class="features">

##### Features

-   [`23f2db6`](https://github.com/stdlib-js/stdlib/commit/23f2db6d4d754350e5bf5c00958e2093d30d086e) - add C implementation for `math/base/special/ellipe` [(#1452)](https://github.com/stdlib-js/stdlib/pull/1452)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`89da7ae`](https://github.com/stdlib-js/stdlib/commit/89da7ae0f39326224d5a014ecf537c19f9c4c7c6) - update polynomial functions and fix function call
-   [`9a4033c`](https://github.com/stdlib-js/stdlib/commit/9a4033c29bb4e28b1d79bd93a6b8f7e8ee34c8f6) - use correct function name

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#772](https://github.com/stdlib-js/stdlib/issues/772)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ellipk-v0.3.0">

#### [@stdlib/math/base/special/ellipk](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ellipk)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erf-v0.3.0">

#### [@stdlib/math/base/special/erf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfc-v0.3.0">

#### [@stdlib/math/base/special/erfc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfc)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfcinv-v0.3.0">

#### [@stdlib/math/base/special/erfcinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfcinv)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfinv-v0.3.0">

#### [@stdlib/math/base/special/erfinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfinv)

<details>

<section class="features">

##### Features

-   [`7ddca8e`](https://github.com/stdlib-js/stdlib/commit/7ddca8e7270b9d325d8047524a62381fb56dfc5e) - add C implementation for `math/base/special/erfinv`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp-v0.3.0">

#### [@stdlib/math/base/special/exp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp10-v0.3.0">

#### [@stdlib/math/base/special/exp10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp10)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp2-v0.3.0">

#### [@stdlib/math/base/special/exp2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp2)

<details>

<section class="features">

##### Features

-   [`1414d1a`](https://github.com/stdlib-js/stdlib/commit/1414d1a55baaa6549510b679ea64dfa846b000fb) - add C implementation for `math/base/special/exp2` [(#2277)](https://github.com/stdlib-js/stdlib/pull/2277)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expit-v0.3.0">

#### [@stdlib/math/base/special/expit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expit)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expm1-v0.3.0">

#### [@stdlib/math/base/special/expm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expm1)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expm1rel-v0.3.0">

#### [@stdlib/math/base/special/expm1rel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expm1rel)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorial-v0.3.0">

#### [@stdlib/math/base/special/factorial](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorial)

<details>

<section class="features">

##### Features

-   [`cc98b20`](https://github.com/stdlib-js/stdlib/commit/cc98b20ab91590c526896d547e447f107fc714aa) - add C implementation for `math/base/special/factorial` [(#2618)](https://github.com/stdlib-js/stdlib/pull/2618 )

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`5822206`](https://github.com/stdlib-js/stdlib/commit/5822206c2a023cb097ec057ed99b155383db909d) - remove unused include in header file [(#2624)](https://github.com/stdlib-js/stdlib/pull/2624)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorial2-v0.3.0">

#### [@stdlib/math/base/special/factorial2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorial2)

<details>

<section class="features">

##### Features

-   [`5433e22`](https://github.com/stdlib-js/stdlib/commit/5433e22ea76052b48ab4503cf11dc4b64aa0ec7d) - add C implementation for `math/base/special/factorial2`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-abs-v0.3.0">

#### [@stdlib/math/base/special/fast/abs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/abs)

<details>

<section class="features">

##### Features

-   [`f134dac`](https://github.com/stdlib-js/stdlib/commit/f134dac2965e729dd0e662f8ec3d952770310149) - add C implementation for `math/base/special/fast/abs`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-acosh-v0.3.0">

#### [@stdlib/math/base/special/fast/acosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/acosh)

<details>

<section class="features">

##### Features

-   [`43f7bc2`](https://github.com/stdlib-js/stdlib/commit/43f7bc27ac49f36204bcd54f7f21f2508d4045d5) - add C implementation for `math/base/special/fast/acosh`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-alpha-max-plus-beta-min-v0.3.0">

#### [@stdlib/math/base/special/fast/alpha-max-plus-beta-min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/alpha-max-plus-beta-min)

<details>

<section class="features">

##### Features

-   [`abf4652`](https://github.com/stdlib-js/stdlib/commit/abf4652e755a88031ee35c182b34d48effe25e43) - add C implementation of `math/base/special/fast/alpha-max-plus-beta-min` [(#1947)](https://github.com/stdlib-js/stdlib/pull/1947)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1938](https://github.com/stdlib-js/stdlib/issues/1938)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-asinh-v0.3.0">

#### [@stdlib/math/base/special/fast/asinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/asinh)

<details>

<section class="features">

##### Features

-   [`8b20f6a`](https://github.com/stdlib-js/stdlib/commit/8b20f6a9c3b782cfe379c58d33c69c4683edcfce) - add C implementation for `math/base/special/fast/asinh`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`433bb99`](https://github.com/stdlib-js/stdlib/commit/433bb998206acd124e8856b4e1b6f84803c26b47) - move addition by one into the sqrt invocation

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-atanh-v0.3.0">

#### [@stdlib/math/base/special/fast/atanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/atanh)

<details>

<section class="features">

##### Features

-   [`7556fd8`](https://github.com/stdlib-js/stdlib/commit/7556fd8455fa74cea1e9d3b5cf6df203801c962e) - add C implementation for `math/base/special/fast/atanh`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-hypot-v0.3.0">

#### [@stdlib/math/base/special/fast/hypot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/hypot)

<details>

<section class="features">

##### Features

-   [`bdb2441`](https://github.com/stdlib-js/stdlib/commit/bdb24411c6bf1498c94ba15246d3134c43653640) - add C implementation for `math/base/special/fast/hypot` 

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-max-v0.3.0">

#### [@stdlib/math/base/special/fast/max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/max)

<details>

<section class="features">

##### Features

-   [`67e90ff`](https://github.com/stdlib-js/stdlib/commit/67e90fff25e4e33de75e060ea2fa9ee25df3b433) - add C implementation for `math/base/special/fast/max`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-min-v0.3.0">

#### [@stdlib/math/base/special/fast/min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/min)

<details>

<section class="features">

##### Features

-   [`5a81f05`](https://github.com/stdlib-js/stdlib/commit/5a81f050b2467e6ebf8d3f242511428cc0a3b49e) - add C implementation for `math/base/special/fast/min`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-pow-int-v0.3.0">

#### [@stdlib/math/base/special/fast/pow-int](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/pow-int)

<details>

<section class="features">

##### Features

-   [`5b5ce15`](https://github.com/stdlib-js/stdlib/commit/5b5ce15628dac972c3f842b1b0233b3b9913f04e) - add C implementation for `math/base/special/fast/pow-int`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`7c8d0ce`](https://github.com/stdlib-js/stdlib/commit/7c8d0ced2596cd1ed9e4dec0a40915dd91f59537) - missing headers in C examples [(#1958)](https://github.com/stdlib-js/stdlib/pull/1958)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-uint32-log2-v0.3.0">

#### [@stdlib/math/base/special/fast/uint32-log2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/uint32-log2)

<details>

<section class="features">

##### Features

-   [`c17484a`](https://github.com/stdlib-js/stdlib/commit/c17484ad1830ddfdb3abbe96589b406096e389e1) - add C implementation for `math/base/special/fast/uint32-log2` [(#1946)](https://github.com/stdlib-js/stdlib/pull/1946)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-uint32-sqrt-v0.3.0">

#### [@stdlib/math/base/special/fast/uint32-sqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/uint32-sqrt)

<details>

<section class="features">

##### Features

-   [`8a01cf7`](https://github.com/stdlib-js/stdlib/commit/8a01cf7d39551d8fd0481be8d3e4aa3b9ba88b9d) - add C implementation for `math/base/special/fast/uint32-sqrt`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-v0.3.0">

#### [@stdlib/math/base/special/fibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`5108869`](https://github.com/stdlib-js/stdlib/commit/5108869248f78854546359b8ce35916c612a90cb) - remove invalid examples [(#1814)](https://github.com/stdlib-js/stdlib/pull/1814)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-index-v0.3.0">

#### [@stdlib/math/base/special/fibonacci-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci-index)

<details>

<section class="features">

##### Features

-   [`1ba660a`](https://github.com/stdlib-js/stdlib/commit/1ba660abde970312ef52b49b3bf0cf3af4200f3d) - add C implementation for `math/base/special/fibonacci-index`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floor10-v0.3.0">

#### [@stdlib/math/base/special/floor10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor10)

<details>

<section class="features">

##### Features

-   [`1f99cd7`](https://github.com/stdlib-js/stdlib/commit/1f99cd7f06bd5e3027f29c6d816ea39e8624cab1) - add C implementation for `math/base/special/floor10` [(#2619)](https://github.com/stdlib-js/stdlib/pull/2619)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floor2-v0.3.0">

#### [@stdlib/math/base/special/floor2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor2)

<details>

<section class="features">

##### Features

-   [`82c8ae0`](https://github.com/stdlib-js/stdlib/commit/82c8ae03edea7886ce0f67ca6e1c2a3028ef8fd9) - add C implementation for `math/base/special/floor2`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorb-v0.3.0">

#### [@stdlib/math/base/special/floorb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorb)

<details>

<section class="features">

##### Features

-   [`dcb1b32`](https://github.com/stdlib-js/stdlib/commit/dcb1b32226e846c8c5219507bc30dce3bbcf19d2) - add C implementation for `math/base/special/floorb` [(#2620)](https://github.com/stdlib-js/stdlib/pull/2620)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorsd-v0.3.0">

#### [@stdlib/math/base/special/floorsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorsd)

<details>

<section class="features">

##### Features

-   [`fe25386`](https://github.com/stdlib-js/stdlib/commit/fe25386fdcdbb684dc96990ba12171d5bf62df6d) - add C implementation for `math/base/special/floorsd` [(#2603)](https://github.com/stdlib-js/stdlib/pull/2603)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76): The base parameter must now be provided explicitly. 

    -   Previously, the base parameter had a default value of 10. Now it has to be supplied explicitly.
        Before:
        ```
        var v = floorsd( 3.141592653589793, 5 );
        // returns 3.1415
        ```
        After:
        ```
        var v = floorsd( 3.141592653589793, 5, 10 );
        // returns 3.1415
        ```

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fmod-v0.3.0">

#### [@stdlib/math/base/special/fmod](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fmod)

<details>

<section class="features">

##### Features

-   [`8558d86`](https://github.com/stdlib-js/stdlib/commit/8558d869aed0f22f0fbdcd54321c5058c954df89) - add `math/base/special/fmod` [(#2562)](https://github.com/stdlib-js/stdlib/pull/2562)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2405](https://github.com/stdlib-js/stdlib/issues/2405)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnel-v0.3.0">

#### [@stdlib/math/base/special/fresnel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnel)

<details>

<section class="features">

##### Features

-   [`f2f6164`](https://github.com/stdlib-js/stdlib/commit/f2f6164bcb23e3f0babda8fc651d2b3bc91be599) - add C implementation for `math/base/special/fresnel`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnelc-v0.3.0">

#### [@stdlib/math/base/special/fresnelc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnelc)

<details>

<section class="features">

##### Features

-   [`4a2534a`](https://github.com/stdlib-js/stdlib/commit/4a2534a22c2ead42a6318bed2fce221286f9f7a8) - add C implementation for `math/base/special/fresnelc` [(#2680)](https://github.com/stdlib-js/stdlib/pull/2680)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnels-v0.3.0">

#### [@stdlib/math/base/special/fresnels](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnels)

<details>

<section class="features">

##### Features

-   [`c476e32`](https://github.com/stdlib-js/stdlib/commit/c476e32e617de04644d9fbf399a34f80661778ea) - add C implementation for `math/base/special/fresnels` [(#2675)](https://github.com/stdlib-js/stdlib/pull/2675)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-frexp-v0.3.0">

#### [@stdlib/math/base/special/frexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/frexp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-v0.3.0">

#### [@stdlib/math/base/special/gamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma)

<details>

<section class="features">

##### Features

-   [`35af244`](https://github.com/stdlib-js/stdlib/commit/35af24442f634296da8248552f307229b1214c08) - add C implementation for `math/base/special/gamma`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-lanczos-sum-v0.3.0">

#### [@stdlib/math/base/special/gamma-lanczos-sum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-lanczos-sum)

<details>

<section class="features">

##### Features

-   [`5c8ab25`](https://github.com/stdlib-js/stdlib/commit/5c8ab250e07d8f3cf603522c1d354a2f983e354b) - add C implementation for `math/base/special/gamma-lanczos-sum` [(#1834)](https://github.com/stdlib-js/stdlib/pull/1834)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1822](https://github.com/stdlib-js/stdlib/issues/1822)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-lanczos-sum-expg-scaled-v0.3.0">

#### [@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-lanczos-sum-expg-scaled)

<details>

<section class="features">

##### Features

-   [`e8f94d2`](https://github.com/stdlib-js/stdlib/commit/e8f94d2e0efb84921f871550ca7e49d514a6a519) - add C implementation for `math/base/special/gamma-lanczos-sum-expg-scaled`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammasgn-v0.3.0">

#### [@stdlib/math/base/special/gammasgn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammasgn)

<details>

<section class="features">

##### Features

-   [`e59d704`](https://github.com/stdlib-js/stdlib/commit/e59d704f754153cce428151f19bd716e0f4f3465) - add C implementation for `math/base/special/gammasgn` [(#1841)](https://github.com/stdlib-js/stdlib/pull/1841)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gcd-v0.3.0">

#### [@stdlib/math/base/special/gcd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gcd)

<details>

<section class="features">

##### Features

-   [`753fbf2`](https://github.com/stdlib-js/stdlib/commit/753fbf256eeb5aef27427dcec12cb8798e50e485) - add C implementation for `math/base/special/gcd` [(#1703)](https://github.com/stdlib-js/stdlib/pull/1703)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1701](https://github.com/stdlib-js/stdlib/issues/1701)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacovercos-v0.3.0">

#### [@stdlib/math/base/special/hacovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacovercos)

<details>

<section class="features">

##### Features

-   [`d07c8ff`](https://github.com/stdlib-js/stdlib/commit/d07c8ffc9328edf8c4acb24029f13d2e37575fae) - add C implementation for `math/base/special/hacovercos` [(#2388)](https://github.com/stdlib-js/stdlib/pull/2388)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacoversin-v0.3.0">

#### [@stdlib/math/base/special/hacoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacoversin)

<details>

<section class="features">

##### Features

-   [`806075b`](https://github.com/stdlib-js/stdlib/commit/806075b124d1ab4fb7a541c117e0c7b6399a08b9) - add C implementation for `math/base/special/hacoversin` [(#2387)](https://github.com/stdlib-js/stdlib/pull/2387)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-havercos-v0.3.0">

#### [@stdlib/math/base/special/havercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/havercos)

<details>

<section class="features">

##### Features

-   [`d0f9748`](https://github.com/stdlib-js/stdlib/commit/d0f97483ab6edaf668b7693dd7b96d527823f14b) - add C implementation for `math/base/special/havercos` [(#2410)](https://github.com/stdlib-js/stdlib/pull/2410 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-haversin-v0.3.0">

#### [@stdlib/math/base/special/haversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/haversin)

<details>

<section class="features">

##### Features

-   [`a50d33d`](https://github.com/stdlib-js/stdlib/commit/a50d33db8b44799d80958be0403f1315389b9c7c) - add C implementation for `math/base/special/haversin` [(#2408)](https://github.com/stdlib-js/stdlib/pull/2408)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-cos-v0.3.0">

#### [@stdlib/math/base/special/kernel-cos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-cos)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-log1p-v0.3.0">

#### [@stdlib/math/base/special/kernel-log1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-log1p)

<details>

<section class="features">

##### Features

-   [`dc2cd24`](https://github.com/stdlib-js/stdlib/commit/dc2cd2489fc809b2e5cc690f35839f9d35a5c27f) - add `math/base/special/kernel-log1p` [(#2144)](https://github.com/stdlib-js/stdlib/pull/2144)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-sin-v0.3.0">

#### [@stdlib/math/base/special/kernel-sin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-sin)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-tan-v0.3.0">

#### [@stdlib/math/base/special/kernel-tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-tan)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lcm-v0.3.0">

#### [@stdlib/math/base/special/lcm](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lcm)

<details>

<section class="features">

##### Features

-   [`28e1548`](https://github.com/stdlib-js/stdlib/commit/28e154885ef536ebbd62471a4b7f18f4c5e1eec5) - add C implementation for `math/base/special/lcm` [(#2276)](https://github.com/stdlib-js/stdlib/pull/2276)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ldexp-v0.3.0">

#### [@stdlib/math/base/special/ldexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ldexp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ln-v0.3.0">

#### [@stdlib/math/base/special/ln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ln)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lnf-v0.3.0">

#### [@stdlib/math/base/special/lnf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lnf)

<details>

<section class="features">

##### Features

-   [`b6edfd8`](https://github.com/stdlib-js/stdlib/commit/b6edfd8f1953792320b89f18ff4d059dceec3631) - add `math/base/special/lnf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log-v0.3.0">

#### [@stdlib/math/base/special/log](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log)

<details>

<section class="features">

##### Features

-   [`c86db95`](https://github.com/stdlib-js/stdlib/commit/c86db9526dbc39bc2fc97fdb5fde9f97d73a1133) - add C implementation for `math/base/special/log`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log10-v0.3.0">

#### [@stdlib/math/base/special/log10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log10)

<details>

<section class="features">

##### Features

-   [`ededcf6`](https://github.com/stdlib-js/stdlib/commit/ededcf66b226854367a99cb63f0f2d755f255114) - add C implementation for `math/base/special/log10` [(#743)](https://github.com/stdlib-js/stdlib/pull/743)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#733](https://github.com/stdlib-js/stdlib/issues/733)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1mexp-v0.3.0">

#### [@stdlib/math/base/special/log1mexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1mexp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1p-v0.3.0">

#### [@stdlib/math/base/special/log1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1p)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pexp-v0.3.0">

#### [@stdlib/math/base/special/log1pexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pexp)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pmx-v0.3.0">

#### [@stdlib/math/base/special/log1pmx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pmx)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log2-v0.3.0">

#### [@stdlib/math/base/special/log2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log2)

<details>

<section class="features">

##### Features

-   [`d8f6700`](https://github.com/stdlib-js/stdlib/commit/d8f6700f923c16fb626c3c2259152475706b340a) - add C implementation for `math/base/special/log2`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logaddexp-v0.3.0">

#### [@stdlib/math/base/special/logaddexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logaddexp)

<details>

<section class="features">

##### Features

-   [`a2ed2a5`](https://github.com/stdlib-js/stdlib/commit/a2ed2a57008a88e74e94185443d3634b1f194223) - add C implementation for `math/base/special/logaddexp`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logit-v0.3.0">

#### [@stdlib/math/base/special/logit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logit)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lucas-v0.3.0">

#### [@stdlib/math/base/special/lucas](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lucas)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-max-v0.3.0">

#### [@stdlib/math/base/special/max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/max)

<details>

<section class="features">

##### Features

-   [`6831521`](https://github.com/stdlib-js/stdlib/commit/68315216677e3d2d21b009537dafd703ef4d9a91) - add C implementation for `math/base/special/max`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabs-v0.3.0">

#### [@stdlib/math/base/special/maxabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabs)

<details>

<section class="features">

##### Features

-   [`fa68dfe`](https://github.com/stdlib-js/stdlib/commit/fa68dfe9a77bae534851850921a5374a9b2860e2) - add C implementation for `math/base/special/maxabs`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`e25fbc3`](https://github.com/stdlib-js/stdlib/commit/e25fbc33d4fb30525fa277c65758083ce16924ba) - resolve failing addon build in `math/base/special/maxabs` [(#1826)](https://github.com/stdlib-js/stdlib/pull/1826)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-min-v0.3.0">

#### [@stdlib/math/base/special/min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/min)

<details>

<section class="features">

##### Features

-   [`0fc216a`](https://github.com/stdlib-js/stdlib/commit/0fc216a874f6501dac5086e4923cee5eb0df57d7) - add C implementation for `math/base/special/min`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabs-v0.3.0">

#### [@stdlib/math/base/special/minabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabs)

<details>

<section class="features">

##### Features

-   [`b06e5c7`](https://github.com/stdlib-js/stdlib/commit/b06e5c78b63b7ae91de2911de4f057da7c2fccc8) - add C implementation for `math/base/special/minabs`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-modf-v0.3.0">

#### [@stdlib/math/base/special/modf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/modf)

<details>

<section class="features">

##### Features

-   [`19f6f59`](https://github.com/stdlib-js/stdlib/commit/19f6f59482f92d40cfc1fd310664f6980dca1725) - add C implementation for `math/base/special/modf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanmax-v0.3.0">

#### [@stdlib/math/base/special/nanmax](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanmax)

<details>

<section class="features">

##### Features

-   [`bffee89`](https://github.com/stdlib-js/stdlib/commit/bffee891fd783eebc475e8ecefa035025df7f2dd) - add `math/base/special/nanmax`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`a4dee7d`](https://github.com/stdlib-js/stdlib/commit/a4dee7d62df7875184dfc8fc3212afe086587353) - move repl.txt file and address feedback

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nanmin-v0.3.0">

#### [@stdlib/math/base/special/nanmin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nanmin)

<details>

<section class="features">

##### Features

-   [`a985cc2`](https://github.com/stdlib-js/stdlib/commit/a985cc224aa74759783c5c4d9577769a36ed818f) - add `math/base/special/nanmin`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negafibonacci-v0.3.0">

#### [@stdlib/math/base/special/negafibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negafibonacci)

<details>

<section class="features">

##### Features

-   [`1bc3682`](https://github.com/stdlib-js/stdlib/commit/1bc36829f1d4a1508acd17f0ffcdc31167a30f20) - add C implementation for `math/base/special/negafibonacci`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nonfibonacci-v0.3.0">

#### [@stdlib/math/base/special/nonfibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nonfibonacci)

<details>

<section class="features">

##### Features

-   [`c39cc72`](https://github.com/stdlib-js/stdlib/commit/c39cc7222bf86a5217a4fc5333b007f90f1709cd) - add C implementation for `math/base/special/nonfibonacci`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-pow-v0.3.0">

#### [@stdlib/math/base/special/pow](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/pow)

<details>

<section class="features">

##### Features

-   [`4a0235a`](https://github.com/stdlib-js/stdlib/commit/4a0235a063e46d679253b6511fe7e9dbd4a9d625) - add C implementation for `math/base/special/pow`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-powm1-v0.3.0">

#### [@stdlib/math/base/special/powm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/powm1)

<details>

<section class="features">

##### Features

-   [`62e247d`](https://github.com/stdlib-js/stdlib/commit/62e247daf7eb45f201cad1784619a344cbdcaff6) - add C implementation for `math/base/special/powm1` [(#2660)](https://github.com/stdlib-js/stdlib/pull/2660)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rad2deg-v0.3.0">

#### [@stdlib/math/base/special/rad2deg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rad2deg)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rad2degf-v0.3.0">

#### [@stdlib/math/base/special/rad2degf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rad2degf)

<details>

<section class="features">

##### Features

-   [`d774fe6`](https://github.com/stdlib-js/stdlib/commit/d774fe6f50f6d856865af087d184f7d56f4dc8c9) - add `math/base/special/rad2degf` [(#2127)](https://github.com/stdlib-js/stdlib/pull/2127)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#2124](https://github.com/stdlib-js/stdlib/issues/2124)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rcbrtf-v0.3.0">

#### [@stdlib/math/base/special/rcbrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rcbrtf)

<details>

<section class="features">

##### Features

-   [`8c0fc7e`](https://github.com/stdlib-js/stdlib/commit/8c0fc7e25b1799e174742d2c7196e2a4876f6715) - add `math/base/special/rcbrtf` [(#2185)](https://github.com/stdlib-js/stdlib/pull/2185)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rempio2-v0.3.0">

#### [@stdlib/math/base/special/rempio2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rempio2)

<details>

<section class="features">

##### Features

-   [`0b633eb`](https://github.com/stdlib-js/stdlib/commit/0b633eb2afe0641b963621048a3ce93795c8d92b) - add C implementation for `math/base/special/rempio2`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ae92cf0`](https://github.com/stdlib-js/stdlib/commit/ae92cf0e2ff55d9e0d490ece6bd32eb8da0506a9) - use significand mask in `math/base/special/rempio2` [(#2366)](https://github.com/stdlib-js/stdlib/pull/2366)

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round-v0.3.0">

#### [@stdlib/math/base/special/round](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round)

<details>

<section class="features">

##### Features

-   [`0227bf0`](https://github.com/stdlib-js/stdlib/commit/0227bf0cbf95d5168bfa8efaf9f0286869f753fe) - add C implementation for `math/base/special/round`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`947e77f`](https://github.com/stdlib-js/stdlib/commit/947e77f645e36d13cacfd68b97c6311a5524195a) - handle large numbers correctly and revert to Math.round for JS

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round10-v0.3.0">

#### [@stdlib/math/base/special/round10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round10)

<details>

<section class="features">

##### Features

-   [`dbef328`](https://github.com/stdlib-js/stdlib/commit/dbef3280431240b7a2cc358a54923481115adb24) - add C implementation for `math/base/special/round10`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round2-v0.3.0">

#### [@stdlib/math/base/special/round2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round2)

<details>

<section class="features">

##### Features

-   [`efc3551`](https://github.com/stdlib-js/stdlib/commit/efc3551764c30c6cae9a48058cae2868d4055190) - add C implementation for `math/base/special/round2` [(#2537)](https://github.com/stdlib-js/stdlib/pull/2537)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundb-v0.3.0">

#### [@stdlib/math/base/special/roundb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundb)

<details>

<section class="features">

##### Features

-   [`2e723fb`](https://github.com/stdlib-js/stdlib/commit/2e723fbb6e3acfca2d0d413c26c96a207a616636) - add C implementation for `math/base/special/roundb`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundn-v0.3.0">

#### [@stdlib/math/base/special/roundn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundn)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`e7ebe20`](https://github.com/stdlib-js/stdlib/commit/e7ebe201dea1be826f89b997538638b07f26a960) - update implementation to use correct constants

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-secd-v0.3.0">

#### [@stdlib/math/base/special/secd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/secd)

<details>

<section class="features">

##### Features

-   [`60ed341`](https://github.com/stdlib-js/stdlib/commit/60ed34151e9e36c332da8fdca5ad187d6f38c3df) - add C implementation for `math/base/special/secd` [(#2406)](https://github.com/stdlib-js/stdlib/pull/2406)
-   [`58e8c9a`](https://github.com/stdlib-js/stdlib/commit/58e8c9a6ceb0573af6906d96b49327802fec4604) - add `math/base/special/secd`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sin-v0.3.0">

#### [@stdlib/math/base/special/sin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sin)

<details>

<section class="features">

##### Features

-   [`ddf4bdb`](https://github.com/stdlib-js/stdlib/commit/ddf4bdb3e92d8817fa57bdefe8d375f40b4abdfa) - add C implementation for `math/base/special/sin`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincos-v0.3.0">

#### [@stdlib/math/base/special/sincos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincos)

<details>

<section class="features">

##### Features

-   [`2c377eb`](https://github.com/stdlib-js/stdlib/commit/2c377ebcdbfa36606bbe69e25c309e12a7965a24) - add C implementation for `math/base/special/sincos` [(#2646)](https://github.com/stdlib-js/stdlib/pull/2646)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincospi-v0.3.0">

#### [@stdlib/math/base/special/sincospi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincospi)

<details>

<section class="features">

##### Features

-   [`f5d15f7`](https://github.com/stdlib-js/stdlib/commit/f5d15f7e0d12169f3016f1d499674b0ce9b2e0ea) - add C implementation for `math/base/special/sincospi` [(#2687)](https://github.com/stdlib-js/stdlib/pull/2687 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinh-v0.3.0">

#### [@stdlib/math/base/special/sinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinpi-v0.3.0">

#### [@stdlib/math/base/special/sinpi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinpi)

<details>

<section class="features">

##### Features

-   [`d6c4251`](https://github.com/stdlib-js/stdlib/commit/d6c4251492f60d2a3871e679fb67a35c57973056) - add C implementation for `math/base/special/sinpi` [(#2610)](https://github.com/stdlib-js/stdlib/pull/2610)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-spence-v0.3.0">

#### [@stdlib/math/base/special/spence](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/spence)

<details>

<section class="features">

##### Features

-   [`e382574`](https://github.com/stdlib-js/stdlib/commit/e3825741e7ba30619c392ce88c5236d3b6454899) - add C implementation for `math/base/special/spence` [(#2298)](https://github.com/stdlib-js/stdlib/pull/2298)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

A total of 2 issues were closed in this release:

[#894](https://github.com/stdlib-js/stdlib/issues/894), [#968](https://github.com/stdlib-js/stdlib/pull/968)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrt1pm1-v0.3.0">

#### [@stdlib/math/base/special/sqrt1pm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrt1pm1)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrtpi-v0.3.0">

#### [@stdlib/math/base/special/sqrtpi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrtpi)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tan-v0.3.0">

#### [@stdlib/math/base/special/tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tan)

<details>

<section class="features">

##### Features

-   [`6199f14`](https://github.com/stdlib-js/stdlib/commit/6199f14235f3aff23b57504bd62923ebf45555e0) - add C implementation for `math/base/special/tan`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tand-v0.3.0">

#### [@stdlib/math/base/special/tand](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tand)

<details>

<section class="features">

##### Features

-   [`cb7d879`](https://github.com/stdlib-js/stdlib/commit/cb7d8790c02f7ce9df7d5c22e662d74ad9b95cd9) - add C implementation for `math/base/special/tand` [(#2411)](https://github.com/stdlib-js/stdlib/pull/2411 )
-   [`025c2c1`](https://github.com/stdlib-js/stdlib/commit/025c2c164f6d51a2192399d0c237d78a139ff772) - add `math/base/special/tand`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tanh-v0.3.0">

#### [@stdlib/math/base/special/tanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tanh)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc10-v0.3.0">

#### [@stdlib/math/base/special/trunc10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc10)

<details>

<section class="features">

##### Features

-   [`581f5a0`](https://github.com/stdlib-js/stdlib/commit/581f5a0dd601746dbf6366d073dcc391efc601d7) - add C implementation for `math/base/special/trunc10` [(#2451)](https://github.com/stdlib-js/stdlib/pull/2451)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc2-v0.3.0">

#### [@stdlib/math/base/special/trunc2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc2)

<details>

<section class="features">

##### Features

-   [`523d68f`](https://github.com/stdlib-js/stdlib/commit/523d68f43c345228b28262e88dc2d820b6ad7592) - add C implementation for `math/base/special/trunc2` [(#2436)](https://github.com/stdlib-js/stdlib/pull/2436)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncb-v0.3.0">

#### [@stdlib/math/base/special/truncb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncb)

<details>

<section class="features">

##### Features

-   [`c6dc95a`](https://github.com/stdlib-js/stdlib/commit/c6dc95aa33843100a7ba3918931eea934ed8caa8) - add C implementation for `math/base/special/truncb`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncn-v0.3.0">

#### [@stdlib/math/base/special/truncn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncn)

<details>

<section class="features">

##### Features

-   [`e8932ee`](https://github.com/stdlib-js/stdlib/commit/e8932ee36e54cf9fd4594abfedc91b5ff718f2fd) - add C implementation for `math/base/special/truncn`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncsd-v0.3.0">

#### [@stdlib/math/base/special/truncsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncsd)

<details>

<section class="features">

##### Features

-   [`fce4265`](https://github.com/stdlib-js/stdlib/commit/fce42651903b96cc6a0f26e84afc812fa4ea94b3) - add C implementation for `math/base/special/truncsd` [(#2666)](https://github.com/stdlib-js/stdlib/pull/2666)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`fce4265`](https://github.com/stdlib-js/stdlib/commit/fce42651903b96cc6a0f26e84afc812fa4ea94b3): The third argument 'b' in the JavaScript implementation of `truncsd` is now mandatory. To migrate, explicitly supply the old default value of `10` as the third argument.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-vercos-v0.3.0">

#### [@stdlib/math/base/special/vercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/vercos)

<details>

<section class="features">

##### Features

-   [`a4b2764`](https://github.com/stdlib-js/stdlib/commit/a4b276428bdc454a9412550375813f92bd242540) - add C implementation for `math/base/special/vercos` [(#2397)](https://github.com/stdlib-js/stdlib/pull/2397 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-versin-v0.3.0">

#### [@stdlib/math/base/special/versin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/versin)

<details>

<section class="features">

##### Features

-   [`06f8b4a`](https://github.com/stdlib-js/stdlib/commit/06f8b4ad6fd804cd127387fa6a645cce0ee05250) - add C implementation for `math/base/special/versin` [(#2398)](https://github.com/stdlib-js/stdlib/pull/2398 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-wrap-v0.3.0">

#### [@stdlib/math/base/special/wrap](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/wrap)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-xlog1py-v0.3.0">

#### [@stdlib/math/base/special/xlog1py](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/xlog1py)

<details>

<section class="features">

##### Features

-   [`dc84fce`](https://github.com/stdlib-js/stdlib/commit/dc84fce54ee45d590860af4eb36845981342671f) - add C implementation for `math/base/special/xlog1py`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-xlogy-v0.3.0">

#### [@stdlib/math/base/special/xlogy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/xlogy)

<details>

<section class="features">

##### Features

-   [`665c735`](https://github.com/stdlib-js/stdlib/commit/665c7357a0439decbaecb80519ce017d87a15f04) - add C implementation for `math/base/special/xlogy`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`fce4265`](https://github.com/stdlib-js/stdlib/commit/fce42651903b96cc6a0f26e84afc812fa4ea94b3): The third argument 'b' in the JavaScript implementation of `truncsd` is now mandatory. To migrate, explicitly supply the old default value of `10` as the third argument.
-   [`5df976a`](https://github.com/stdlib-js/stdlib/commit/5df976abacaaf3082890fa852e40edfdf1b79f4b): base parameter is no longer optional

    -   To migrate, users should always provide a base argument. To preserve previous behavior, users should be a third argument equal to `10`.

-   [`854b793`](https://github.com/stdlib-js/stdlib/commit/854b793ecdcc540067d9989f4c14e34fb9b736bb): add C implementation for `math/base/special/ceilsd`
-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76): The base parameter must now be provided explicitly. 

    -   Previously, the base parameter had a default value of 10. Now it has to be supplied explicitly.
        Before:
        ```
        var v = floorsd( 3.141592653589793, 5 );
        // returns 3.1415
        ```
        After:
        ```
        var v = floorsd( 3.141592653589793, 5, 10 );
        // returns 3.1415
        ```

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 20 issues were closed in this release:

[#733](https://github.com/stdlib-js/stdlib/issues/733), [#772](https://github.com/stdlib-js/stdlib/issues/772), [#776](https://github.com/stdlib-js/stdlib/issues/776), [#860](https://github.com/stdlib-js/stdlib/issues/860), [#894](https://github.com/stdlib-js/stdlib/issues/894), [#968](https://github.com/stdlib-js/stdlib/pull/968), [#1701](https://github.com/stdlib-js/stdlib/issues/1701), [#1718](https://github.com/stdlib-js/stdlib/issues/1718), [#1816](https://github.com/stdlib-js/stdlib/issues/1816), [#1822](https://github.com/stdlib-js/stdlib/issues/1822), [#1938](https://github.com/stdlib-js/stdlib/issues/1938), [#1944](https://github.com/stdlib-js/stdlib/issues/1944), [#2035](https://github.com/stdlib-js/stdlib/issues/2035), [#2081](https://github.com/stdlib-js/stdlib/issues/2081), [#2109](https://github.com/stdlib-js/stdlib/issues/2109), [#2113](https://github.com/stdlib-js/stdlib/issues/2113), [#2118](https://github.com/stdlib-js/stdlib/issues/2118), [#2124](https://github.com/stdlib-js/stdlib/issues/2124), [#2150](https://github.com/stdlib-js/stdlib/issues/2150), [#2405](https://github.com/stdlib-js/stdlib/issues/2405)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 18 people contributed to this release. Thank you to the following contributors:

-   Adarsh Palaskar
-   Aman Bhansali
-   Athan Reines
-   Ayaka
-   Gunj Joshi
-   Lovelin Dhoni J B
-   Mihir Pandit
-   Philipp Burckhardt
-   Pranav Goswami
-   Pushpendra Chandravanshi
-   Rejoan Sardar
-   Ridam Garg
-   RidamGarg
-   Rutam Kathale
-   Sai Srikar Dumpeti
-   Shashank Shekhar Singh
-   Snehil Shah
-   Tirtadwipa Manunggal

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`a2ad2e1`](https://github.com/stdlib-js/stdlib/commit/a2ad2e1ad4f9150b818e3cf828815d4b73913f59) - **chore:** update package meta data [(#2696)](https://github.com/stdlib-js/stdlib/pull/2696) _(by stdlib-bot, Philipp Burckhardt)_
-   [`39a6773`](https://github.com/stdlib-js/stdlib/commit/39a67731ee7d3e1f6afb827ba59c89526b975f0a) - **docs:** remove unused include from example in `math/base/special/gamma/README.md` [(#2677)](https://github.com/stdlib-js/stdlib/pull/2677) _(by Gunj Joshi)_
-   [`f2f6164`](https://github.com/stdlib-js/stdlib/commit/f2f6164bcb23e3f0babda8fc651d2b3bc91be599) - **feat:** add C implementation for `math/base/special/fresnel` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`62e247d`](https://github.com/stdlib-js/stdlib/commit/62e247daf7eb45f201cad1784619a344cbdcaff6) - **feat:** add C implementation for `math/base/special/powm1` [(#2660)](https://github.com/stdlib-js/stdlib/pull/2660) _(by Gunj Joshi)_
-   [`f5d15f7`](https://github.com/stdlib-js/stdlib/commit/f5d15f7e0d12169f3016f1d499674b0ce9b2e0ea) - **feat:** add C implementation for `math/base/special/sincospi` [(#2687)](https://github.com/stdlib-js/stdlib/pull/2687 ) _(by Gunj Joshi)_
-   [`3fa6956`](https://github.com/stdlib-js/stdlib/commit/3fa69566a55e9cbb28650eea285d90a73b06db36) - **bench:** fix makefile to allow for dependency resolution _(by Athan Reines)_
-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`3e05048`](https://github.com/stdlib-js/stdlib/commit/3e05048df523b9a45e3f0621893d9dd99aae8d9c) - **docs:** remove comment _(by Athan Reines)_
-   [`55ec8ed`](https://github.com/stdlib-js/stdlib/commit/55ec8edfeb7000bca7478af116e794f20560e922) - **docs:** remove comment _(by Athan Reines)_
-   [`c4048ea`](https://github.com/stdlib-js/stdlib/commit/c4048eaebb7e01cf6dcf8a21b08ce9a723b3b764) - **build:** fix makefile to allow dependency resolution _(by Athan Reines)_
-   [`5b4c5ca`](https://github.com/stdlib-js/stdlib/commit/5b4c5cadb3d2fed46829dbf32f217726658e46bb) - **bench:** resolve lint errors _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`3264c24`](https://github.com/stdlib-js/stdlib/commit/3264c24815dcbd08eeb4afbf3909a3223bdaf2c1) - **chore:** update package meta data [(#2686)](https://github.com/stdlib-js/stdlib/pull/2686) _(by stdlib-bot, Athan Reines)_
-   [`1655420`](https://github.com/stdlib-js/stdlib/commit/1655420e7a06617d5b454886c2be025e00bad74b) - **docs:** update namespace table of contents [(#2683)](https://github.com/stdlib-js/stdlib/pull/2683) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6e4b9eb`](https://github.com/stdlib-js/stdlib/commit/6e4b9ebc31d9629446019e37e31bfe9b180b675c) - **feat:** update namespace TypeScript declarations [(#2681)](https://github.com/stdlib-js/stdlib/pull/2681) _(by stdlib-bot, Philipp Burckhardt)_
-   [`fce4265`](https://github.com/stdlib-js/stdlib/commit/fce42651903b96cc6a0f26e84afc812fa4ea94b3) - **feat:** add C implementation for `math/base/special/truncsd` [(#2666)](https://github.com/stdlib-js/stdlib/pull/2666) _(by Gunj Joshi)_
-   [`4a2534a`](https://github.com/stdlib-js/stdlib/commit/4a2534a22c2ead42a6318bed2fce221286f9f7a8) - **feat:** add C implementation for `math/base/special/fresnelc` [(#2680)](https://github.com/stdlib-js/stdlib/pull/2680) _(by Gunj Joshi)_
-   [`c476e32`](https://github.com/stdlib-js/stdlib/commit/c476e32e617de04644d9fbf399a34f80661778ea) - **feat:** add C implementation for `math/base/special/fresnels` [(#2675)](https://github.com/stdlib-js/stdlib/pull/2675) _(by Gunj Joshi)_
-   [`7e04d9e`](https://github.com/stdlib-js/stdlib/commit/7e04d9e27fb5008c1cbc6e45e08ea6ad4b8993d2) - **refactor:** use max-safe-nth-factorial package [(#2676)](https://github.com/stdlib-js/stdlib/pull/2676 ) _(by Gunj Joshi)_
-   [`26e46d5`](https://github.com/stdlib-js/stdlib/commit/26e46d57474904e02d69b98d8e06052333522257) - **docs:** fix missing `@private` tag [(#2672)](https://github.com/stdlib-js/stdlib/pull/2672) _(by Gunj Joshi)_
-   [`c6dc95a`](https://github.com/stdlib-js/stdlib/commit/c6dc95aa33843100a7ba3918931eea934ed8caa8) - **feat:** add C implementation for `math/base/special/truncb` _(by Gunj Joshi)_
-   [`2c377eb`](https://github.com/stdlib-js/stdlib/commit/2c377ebcdbfa36606bbe69e25c309e12a7965a24) - **feat:** add C implementation for `math/base/special/sincos` [(#2646)](https://github.com/stdlib-js/stdlib/pull/2646) _(by Gunj Joshi)_
-   [`7b7a3e6`](https://github.com/stdlib-js/stdlib/commit/7b7a3e634113685c2b6ed1fdb076d40f6e5e4b7a) - **docs:** fix typos in source comments [(#2657)](https://github.com/stdlib-js/stdlib/pull/2657) _(by Gunj Joshi)_
-   [`143e88d`](https://github.com/stdlib-js/stdlib/commit/143e88d8089ee484eeb54df1d8739f3e146c4cae) - **feat:** add C implementation for `math/base/special/cosm1` [(#2651)](https://github.com/stdlib-js/stdlib/pull/2651) _(by Gunj Joshi)_
-   [`c77f866`](https://github.com/stdlib-js/stdlib/commit/c77f866c93006ba4bf73221cb28c94c23195ca06) - **feat:** add C implementation for `math/base/special/binet` [(#2653)](https://github.com/stdlib-js/stdlib/pull/2653) _(by Gunj Joshi)_
-   [`9dc29b4`](https://github.com/stdlib-js/stdlib/commit/9dc29b4d2e6eb5ba0b2625c3bfe9f50034a3ed99) - **docs:** add sub-namespace sections and update namespace table of contents _(by Philipp Burckhardt)_
-   [`8de8d90`](https://github.com/stdlib-js/stdlib/commit/8de8d90b8a5d72f7c2e57ae21593be5f5f1eb8e7) - **refactor:** perform explicit cast [(#2642)](https://github.com/stdlib-js/stdlib/pull/2642) _(by Gunj Joshi)_
-   [`6a0cbd9`](https://github.com/stdlib-js/stdlib/commit/6a0cbd9c10f0895d795be449fe1ea2a456f2683a) - **test:** fix tests for native implementation [(#2641)](https://github.com/stdlib-js/stdlib/pull/2641) _(by Gunj Joshi)_
-   [`ead1c3b`](https://github.com/stdlib-js/stdlib/commit/ead1c3b780527d8068d9c076e85688be94d53775) - **chore:** update package meta data [(#2640)](https://github.com/stdlib-js/stdlib/pull/2640) _(by stdlib-bot, Athan Reines)_
-   [`5df976a`](https://github.com/stdlib-js/stdlib/commit/5df976abacaaf3082890fa852e40edfdf1b79f4b) - **feat:** update namespace TypeScript declarations [(#2637)](https://github.com/stdlib-js/stdlib/pull/2637) _(by stdlib-bot, Philipp Burckhardt)_
-   [`854b793`](https://github.com/stdlib-js/stdlib/commit/854b793ecdcc540067d9989f4c14e34fb9b736bb) - **feat:** add C implementation for `math/base/special/ceilsd` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`b063947`](https://github.com/stdlib-js/stdlib/commit/b0639472175808254213fd35d2902e52b998b4cc) - **refactor:** reduce code complexity [(#2632)](https://github.com/stdlib-js/stdlib/pull/2632) _(by Gunj Joshi, Athan Reines)_
-   [`607135f`](https://github.com/stdlib-js/stdlib/commit/607135f297a48a24d8d312a61ddfe98a332b1ca5) - **feat:** add C implementation for `math/base/special/ceilb` [(#2627)](https://github.com/stdlib-js/stdlib/pull/2627) _(by Gunj Joshi)_
-   [`d4db8a9`](https://github.com/stdlib-js/stdlib/commit/d4db8a93b0c93cb3392b59ee031ce188399b90a5) - **feat:** add C implementation for `math/base/special/ceil10` [(#2626)](https://github.com/stdlib-js/stdlib/pull/2626) _(by Gunj Joshi)_
-   [`5822206`](https://github.com/stdlib-js/stdlib/commit/5822206c2a023cb097ec057ed99b155383db909d) - **fix:** remove unused include in header file [(#2624)](https://github.com/stdlib-js/stdlib/pull/2624) _(by Gunj Joshi)_
-   [`310150f`](https://github.com/stdlib-js/stdlib/commit/310150f9e910eb0b202ef2cefcf6a99d1ee0c1ed) - **docs:** fix notes [(#2623)](https://github.com/stdlib-js/stdlib/pull/2623) _(by Gunj Joshi)_
-   [`81b48ae`](https://github.com/stdlib-js/stdlib/commit/81b48aeb9d5d2b16fe039f9db7e710c95a35585f) - **feat:** update namespace TypeScript declarations [(#2621)](https://github.com/stdlib-js/stdlib/pull/2621) _(by stdlib-bot, Philipp Burckhardt)_
-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76) - **refactor:** make base parameter compulsory in `math/base/special/floorsd` [(#2617)](https://github.com/stdlib-js/stdlib/pull/2617) _(by Gunj Joshi)_
-   [`dcb1b32`](https://github.com/stdlib-js/stdlib/commit/dcb1b32226e846c8c5219507bc30dce3bbcf19d2) - **feat:** add C implementation for `math/base/special/floorb` [(#2620)](https://github.com/stdlib-js/stdlib/pull/2620) _(by Gunj Joshi)_
-   [`cc98b20`](https://github.com/stdlib-js/stdlib/commit/cc98b20ab91590c526896d547e447f107fc714aa) - **feat:** add C implementation for `math/base/special/factorial` [(#2618)](https://github.com/stdlib-js/stdlib/pull/2618 ) _(by Gunj Joshi)_
-   [`1f99cd7`](https://github.com/stdlib-js/stdlib/commit/1f99cd7f06bd5e3027f29c6d816ea39e8624cab1) - **feat:** add C implementation for `math/base/special/floor10` [(#2619)](https://github.com/stdlib-js/stdlib/pull/2619) _(by Gunj Joshi)_
-   [`0d796b2`](https://github.com/stdlib-js/stdlib/commit/0d796b2a86fe0a08d1f3ed1827aaf2ce355f9b4f) - **refactor:** use stdlib APIs and adjust test tolerances _(by Athan Reines)_
-   [`d6c4251`](https://github.com/stdlib-js/stdlib/commit/d6c4251492f60d2a3871e679fb67a35c57973056) - **feat:** add C implementation for `math/base/special/sinpi` [(#2610)](https://github.com/stdlib-js/stdlib/pull/2610) _(by Gunj Joshi)_
-   [`58da03b`](https://github.com/stdlib-js/stdlib/commit/58da03b9aae58c600fc67d46e396ac6f1e2de1d0) - **feat:** add C implementation for `math/base/special/cospi` [(#2612)](https://github.com/stdlib-js/stdlib/pull/2612) _(by Gunj Joshi)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`5072206`](https://github.com/stdlib-js/stdlib/commit/50722067d1c17e17be721982e5a99ed65868d9ae) - **refactor:** fix function name _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`06fd785`](https://github.com/stdlib-js/stdlib/commit/06fd785919d2ef770b5a2bffd69dd4d3c36e8294) - **feat:** add C implementation for `math/base/special/ceil2` [(#2602)](https://github.com/stdlib-js/stdlib/pull/2602) _(by Gunj Joshi)_
-   [`fe25386`](https://github.com/stdlib-js/stdlib/commit/fe25386fdcdbb684dc96990ba12171d5bf62df6d) - **feat:** add C implementation for `math/base/special/floorsd` [(#2603)](https://github.com/stdlib-js/stdlib/pull/2603) _(by Gunj Joshi)_
-   [`08dbbe5`](https://github.com/stdlib-js/stdlib/commit/08dbbe5a6fa6a3b82c049ef03deaa6eb8daaaee9) - **test:** add tests for negative values in `math/base/special/fmod` [(#2600)](https://github.com/stdlib-js/stdlib/pull/2600) _(by Gunj Joshi)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`35af244`](https://github.com/stdlib-js/stdlib/commit/35af24442f634296da8248552f307229b1214c08) - **feat:** add C implementation for `math/base/special/gamma` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`26337e1`](https://github.com/stdlib-js/stdlib/commit/26337e1644c963b8006e38c4b5e2ee74eac8e33f) - **docs:** fix return annotation tag in C comments _(by Philipp Burckhardt)_
-   [`8558d86`](https://github.com/stdlib-js/stdlib/commit/8558d869aed0f22f0fbdcd54321c5058c954df89) - **feat:** add `math/base/special/fmod` [(#2562)](https://github.com/stdlib-js/stdlib/pull/2562) _(by Gunj Joshi)_
-   [`e9d0de8`](https://github.com/stdlib-js/stdlib/commit/e9d0de8077f47e49ff703c1b106e262454e5d15d) - **chore:** update package meta data [(#2596)](https://github.com/stdlib-js/stdlib/pull/2596) _(by stdlib-bot, Athan Reines)_
-   [`2e723fb`](https://github.com/stdlib-js/stdlib/commit/2e723fbb6e3acfca2d0d413c26c96a207a616636) - **feat:** add C implementation for `math/base/special/roundb` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`e8932ee`](https://github.com/stdlib-js/stdlib/commit/e8932ee36e54cf9fd4594abfedc91b5ff718f2fd) - **feat:** add C implementation for `math/base/special/truncn` _(by Gunj Joshi)_
-   [`ed638e3`](https://github.com/stdlib-js/stdlib/commit/ed638e392f7425c899abda488b943d0ffbd37f78) - **docs:** update Boost version and fix C function name in README.md [(#2577)](https://github.com/stdlib-js/stdlib/pull/2577) _(by Gunj Joshi)_
-   [`53eb98c`](https://github.com/stdlib-js/stdlib/commit/53eb98c30fe092a4871e92001be36318626fd68f) - **docs:** fix function name [(#2579)](https://github.com/stdlib-js/stdlib/pull/2579) _(by Gunj Joshi)_
-   [`b4cde28`](https://github.com/stdlib-js/stdlib/commit/b4cde28b465725e0d2f2e84757a4a533834503c7) - **docs:** fix function name [(#2580)](https://github.com/stdlib-js/stdlib/pull/2580) _(by Gunj Joshi)_
-   [`337adbf`](https://github.com/stdlib-js/stdlib/commit/337adbf93822a5ab1adb5256594855e344e9414c) - **feat:** add C implementation for `math/base/special/digamma` [(#2533)](https://github.com/stdlib-js/stdlib/pull/2533 ) _(by Gunj Joshi)_
-   [`dbef328`](https://github.com/stdlib-js/stdlib/commit/dbef3280431240b7a2cc358a54923481115adb24) - **feat:** add C implementation for `math/base/special/round10` _(by Gunj Joshi)_
-   [`ca18359`](https://github.com/stdlib-js/stdlib/commit/ca18359c4b18000828a214bc52a32db7ac6c1121) - **refactor:** update to use stdlib `pow` [(#2539)](https://github.com/stdlib-js/stdlib/pull/2539) _(by Gunj Joshi)_
-   [`efc3551`](https://github.com/stdlib-js/stdlib/commit/efc3551764c30c6cae9a48058cae2868d4055190) - **feat:** add C implementation for `math/base/special/round2` [(#2537)](https://github.com/stdlib-js/stdlib/pull/2537) _(by Gunj Joshi)_
-   [`62e703a`](https://github.com/stdlib-js/stdlib/commit/62e703a5eb7df95a40b3592366da89c5ff42a1b1) - **docs:** add missing `@private` in `math/base/special/round/lib/native.js` [(#2536)](https://github.com/stdlib-js/stdlib/pull/2536) _(by Gunj Joshi)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`d4fd701`](https://github.com/stdlib-js/stdlib/commit/d4fd701ae65d28edea1410a6f5a757ac39214f68) - **feat:** add C implementation for `math/base/special/beta` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`39ecc03`](https://github.com/stdlib-js/stdlib/commit/39ecc037f60bef2fa539739fa3ad4556b09f3918) - **chore:** update package meta data [(#2530)](https://github.com/stdlib-js/stdlib/pull/2530) _(by stdlib-bot, Athan Reines)_
-   [`457662c`](https://github.com/stdlib-js/stdlib/commit/457662c8e8bcd3ff74edc7d820d882119b40cfbe) - **style:** add linebreak _(by Athan Reines)_
-   [`2789eff`](https://github.com/stdlib-js/stdlib/commit/2789eff674a6832e11cb4ec0f8f4090bf05554b2) - **docs:** fix function name in README example [(#2506)](https://github.com/stdlib-js/stdlib/pull/2506) _(by Gunj Joshi)_
-   [`82c8ae0`](https://github.com/stdlib-js/stdlib/commit/82c8ae03edea7886ce0f67ca6e1c2a3028ef8fd9) - **feat:** add C implementation for `math/base/special/floor2` _(by Gunj Joshi)_
-   [`2f62c39`](https://github.com/stdlib-js/stdlib/commit/2f62c39e03c5445f3cc3b91226453c2eed366013) - **chore:** update package meta data [(#2481)](https://github.com/stdlib-js/stdlib/pull/2481) _(by stdlib-bot)_
-   [`581f5a0`](https://github.com/stdlib-js/stdlib/commit/581f5a0dd601746dbf6366d073dcc391efc601d7) - **feat:** add C implementation for `math/base/special/trunc10` [(#2451)](https://github.com/stdlib-js/stdlib/pull/2451) _(by Gunj Joshi)_
-   [`9e56edf`](https://github.com/stdlib-js/stdlib/commit/9e56edf06218960bb5a3b1c22a5a2198f2dc0cb9) - **chore:** minor clean-up of `math/base/special/acsc` _(by Pranav Goswami, Athan Reines, Philipp Burckhardt)_
-   [`50d806d`](https://github.com/stdlib-js/stdlib/commit/50d806dd22dd25a6f6f2900bb5a8ccc0ed7ef232) - **test:** add missing test for `math/base/special/cotd` [(#2449)](https://github.com/stdlib-js/stdlib/pull/2449) _(by Gunj Joshi)_
-   [`c9ab1f2`](https://github.com/stdlib-js/stdlib/commit/c9ab1f2313cac54672d24e82665a13ff37b79a93) - **feat:** add C implementation for `math/base/special/cotd` [(#2443)](https://github.com/stdlib-js/stdlib/pull/2443) _(by Gunj Joshi)_
-   [`523d68f`](https://github.com/stdlib-js/stdlib/commit/523d68f43c345228b28262e88dc2d820b6ad7592) - **feat:** add C implementation for `math/base/special/trunc2` [(#2436)](https://github.com/stdlib-js/stdlib/pull/2436) _(by Gunj Joshi)_
-   [`e26363d`](https://github.com/stdlib-js/stdlib/commit/e26363d5a9df20243c6be186bbf63017517c5839) - **chore:** update package meta data [(#2439)](https://github.com/stdlib-js/stdlib/pull/2439) _(by stdlib-bot, Athan Reines)_
-   [`377403b`](https://github.com/stdlib-js/stdlib/commit/377403b1ecb696a54e038b8750efd09481fe3ba0) - **test:** add missing tests for `math/base/special/cosd` [(#2418)](https://github.com/stdlib-js/stdlib/pull/2418) _(by Gunj Joshi)_
-   [`c88dbaa`](https://github.com/stdlib-js/stdlib/commit/c88dbaaf68dd67dc5bdd7bb71ef9ed4ad01ef42a) - **test:** add missing tests for `math/base/special/tand` [(#2417)](https://github.com/stdlib-js/stdlib/pull/2417) _(by Gunj Joshi)_
-   [`a50d33d`](https://github.com/stdlib-js/stdlib/commit/a50d33db8b44799d80958be0403f1315389b9c7c) - **feat:** add C implementation for `math/base/special/haversin` [(#2408)](https://github.com/stdlib-js/stdlib/pull/2408) _(by Gunj Joshi)_
-   [`1ea46e9`](https://github.com/stdlib-js/stdlib/commit/1ea46e990236941d977d6dc872ba0475eab366e8) - **docs:** use correct function name in example in `math/base/special/hacoversin` [(#2409)](https://github.com/stdlib-js/stdlib/pull/2409 ) _(by Gunj Joshi)_
-   [`d0f9748`](https://github.com/stdlib-js/stdlib/commit/d0f97483ab6edaf668b7693dd7b96d527823f14b) - **feat:** add C implementation for `math/base/special/havercos` [(#2410)](https://github.com/stdlib-js/stdlib/pull/2410 ) _(by Gunj Joshi)_
-   [`cb7d879`](https://github.com/stdlib-js/stdlib/commit/cb7d8790c02f7ce9df7d5c22e662d74ad9b95cd9) - **feat:** add C implementation for `math/base/special/tand` [(#2411)](https://github.com/stdlib-js/stdlib/pull/2411 ) _(by Gunj Joshi)_
-   [`7ddca8e`](https://github.com/stdlib-js/stdlib/commit/7ddca8e7270b9d325d8047524a62381fb56dfc5e) - **feat:** add C implementation for `math/base/special/erfinv` _(by Pranav Goswami, Philipp Burckhardt)_
-   [`4a0235a`](https://github.com/stdlib-js/stdlib/commit/4a0235a063e46d679253b6511fe7e9dbd4a9d625) - **feat:** add C implementation for `math/base/special/pow` _(by Aman Bhansali, Athan, Philipp Burckhardt)_
-   [`60ed341`](https://github.com/stdlib-js/stdlib/commit/60ed34151e9e36c332da8fdca5ad187d6f38c3df) - **feat:** add C implementation for `math/base/special/secd` [(#2406)](https://github.com/stdlib-js/stdlib/pull/2406) _(by Gunj Joshi)_
-   [`a4b2764`](https://github.com/stdlib-js/stdlib/commit/a4b276428bdc454a9412550375813f92bd242540) - **feat:** add C implementation for `math/base/special/vercos` [(#2397)](https://github.com/stdlib-js/stdlib/pull/2397 ) _(by Gunj Joshi)_
-   [`06f8b4a`](https://github.com/stdlib-js/stdlib/commit/06f8b4ad6fd804cd127387fa6a645cce0ee05250) - **feat:** add C implementation for `math/base/special/versin` [(#2398)](https://github.com/stdlib-js/stdlib/pull/2398 ) _(by Gunj Joshi)_
-   [`c811882`](https://github.com/stdlib-js/stdlib/commit/c8118827f71ca602ccfea2721df03afbbd3857e5) - **feat:** add C implementation for `math/base/special/cosd` [(#2393)](https://github.com/stdlib-js/stdlib/pull/2393) _(by Gunj Joshi)_
-   [`806075b`](https://github.com/stdlib-js/stdlib/commit/806075b124d1ab4fb7a541c117e0c7b6399a08b9) - **feat:** add C implementation for `math/base/special/hacoversin` [(#2387)](https://github.com/stdlib-js/stdlib/pull/2387) _(by Gunj Joshi)_
-   [`d07c8ff`](https://github.com/stdlib-js/stdlib/commit/d07c8ffc9328edf8c4acb24029f13d2e37575fae) - **feat:** add C implementation for `math/base/special/hacovercos` [(#2388)](https://github.com/stdlib-js/stdlib/pull/2388) _(by Gunj Joshi)_
-   [`11c882d`](https://github.com/stdlib-js/stdlib/commit/11c882dcc261abe6a898a3061b45af7f0d4a41cd) - **chore:** update package meta data [(#2379)](https://github.com/stdlib-js/stdlib/pull/2379) _(by stdlib-bot, Athan Reines)_
-   [`7b85db8`](https://github.com/stdlib-js/stdlib/commit/7b85db803f6a6bce2999bfe8b2513edb08e15a67) - **feat:** add C implementation for `math/base/special/covercos` [(#2377)](https://github.com/stdlib-js/stdlib/pull/2377) _(by Gunj Joshi)_
-   [`e7938d9`](https://github.com/stdlib-js/stdlib/commit/e7938d964046b7a61dbc89d23f39daebf4545a47) - **feat:** add C implementation for `math/base/special/cscd` [(#2378)](https://github.com/stdlib-js/stdlib/pull/2378) _(by Gunj Joshi)_
-   [`8304a04`](https://github.com/stdlib-js/stdlib/commit/8304a041c10450a797c64c2fffafc6b0e4bd1a04) - **feat:** add C implementation for `math/base/special/cot` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`4c95c5a`](https://github.com/stdlib-js/stdlib/commit/4c95c5ac1cc58e3ed3db0b13a653ad7680a0393a) - **docs:** use descriptive variable names [(#2373)](https://github.com/stdlib-js/stdlib/pull/2373) _(by Gunj Joshi)_
-   [`c1ef722`](https://github.com/stdlib-js/stdlib/commit/c1ef722991b1743b02c897332d0e2b3005a97494) - **docs:** update return annotation value [(#2370)](https://github.com/stdlib-js/stdlib/pull/2370) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6199f14`](https://github.com/stdlib-js/stdlib/commit/6199f14235f3aff23b57504bd62923ebf45555e0) - **feat:** add C implementation for `math/base/special/tan` _(by Gunj Joshi)_
-   [`822491d`](https://github.com/stdlib-js/stdlib/commit/822491dd173e2ca1195c4b4f4600419f55b5ee15) - **docs:** fix function signature in table of contents [(#2371)](https://github.com/stdlib-js/stdlib/pull/2371 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`fdba877`](https://github.com/stdlib-js/stdlib/commit/fdba877adb81859aa87b72685f19a8921d4dd8db) - **feat:** add C implementation for `math/base/special/csc` [(#2367)](https://github.com/stdlib-js/stdlib/pull/2367 ) _(by Gunj Joshi)_
-   [`ae92cf0`](https://github.com/stdlib-js/stdlib/commit/ae92cf0e2ff55d9e0d490ece6bd32eb8da0506a9) - **fix:** use significand mask in `math/base/special/rempio2` [(#2366)](https://github.com/stdlib-js/stdlib/pull/2366) _(by Gunj Joshi)_
-   [`9df1610`](https://github.com/stdlib-js/stdlib/commit/9df16105aa2d89808d3395c610334ca9cce35b3c) - **docs:** remove long comment [(#2364)](https://github.com/stdlib-js/stdlib/pull/2364) _(by Gunj Joshi)_
-   [`3cf2e89`](https://github.com/stdlib-js/stdlib/commit/3cf2e897adf5128f94bd7279e88ca9d42dfe7caa) - **feat:** add C implementation for `math/base/special/coversin` [(#2361)](https://github.com/stdlib-js/stdlib/pull/2361) _(by Gunj Joshi)_
-   [`34bc79c`](https://github.com/stdlib-js/stdlib/commit/34bc79cf154e0c82320c4a60c2cc805434a4b6e6) - **chore:** delete extra repl.txt file _(by Philipp Burckhardt)_
-   [`a4dee7d`](https://github.com/stdlib-js/stdlib/commit/a4dee7d62df7875184dfc8fc3212afe086587353) - **fix:** move repl.txt file and address feedback _(by Philipp Burckhardt)_
-   [`a7e5bb3`](https://github.com/stdlib-js/stdlib/commit/a7e5bb34eb13a2f774dd4e6840854266215b1264) - **chore:** update line endings _(by Philipp Burckhardt)_
-   [`bffee89`](https://github.com/stdlib-js/stdlib/commit/bffee891fd783eebc475e8ecefa035025df7f2dd) - **feat:** add `math/base/special/nanmax` _(by Ridam Garg, stdlib-bot, Philipp Burckhardt)_
-   [`46ff6c1`](https://github.com/stdlib-js/stdlib/commit/46ff6c17fe80cb1a7e153ac1fc728d6dab2195cf) - **docs:** update description per conventions _(by Philipp Burckhardt)_
-   [`29fbbb6`](https://github.com/stdlib-js/stdlib/commit/29fbbb62d94cb2af1d8856004b75c03daf942053) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`fb04f19`](https://github.com/stdlib-js/stdlib/commit/fb04f1968006f8bee36735f9b71d857f478bb6c1) - **refactor:** reduce test tolerance and fix casting [(#2356)](https://github.com/stdlib-js/stdlib/pull/2356) _(by Gunj Joshi)_
-   [`ced30b0`](https://github.com/stdlib-js/stdlib/commit/ced30b0e285117ad5bcdf6cc940329aadc826e21) - **refactor:** use constant packages and remove unused include [(#2355)](https://github.com/stdlib-js/stdlib/pull/2355) _(by Gunj Joshi)_
-   [`343da6f`](https://github.com/stdlib-js/stdlib/commit/343da6faa466294331be4befd603fde2faa83503) - **feat:** add C implementation for `math/base/special/cos` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`a985cc2`](https://github.com/stdlib-js/stdlib/commit/a985cc224aa74759783c5c4d9577769a36ed818f) - **feat:** add `math/base/special/nanmin` _(by Ridam Garg, RidamGarg, stdlib-bot, Philipp Burckhardt)_
-   [`ddf4bdb`](https://github.com/stdlib-js/stdlib/commit/ddf4bdb3e92d8817fa57bdefe8d375f40b4abdfa) - **feat:** add C implementation for `math/base/special/sin` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`b6edfd8`](https://github.com/stdlib-js/stdlib/commit/b6edfd8f1953792320b89f18ff4d059dceec3631) - **feat:** add `math/base/special/lnf` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`0b633eb`](https://github.com/stdlib-js/stdlib/commit/0b633eb2afe0641b963621048a3ce93795c8d92b) - **feat:** add C implementation for `math/base/special/rempio2` _(by Gunj Joshi, Philipp Burckhardt, Athan Reines)_
-   [`1b5abe6`](https://github.com/stdlib-js/stdlib/commit/1b5abe6cb97ca371aeeae5ef5e39e9ef20898e52) - **chore:** update package meta data [(#2344)](https://github.com/stdlib-js/stdlib/pull/2344) _(by stdlib-bot, Athan Reines)_
-   [`e612af5`](https://github.com/stdlib-js/stdlib/commit/e612af58d0e5374e3ed17f0278d2538aec9b37e1) - **docs:** update namespace table of contents [(#2314)](https://github.com/stdlib-js/stdlib/pull/2314) _(by stdlib-bot, Athan Reines)_
-   [`95cd4ef`](https://github.com/stdlib-js/stdlib/commit/95cd4ef83e181ffbf50aeef1a6e44e14338d1261) - **docs:** update namespace TypeScript declarations [(#2312)](https://github.com/stdlib-js/stdlib/pull/2312) _(by stdlib-bot, Athan Reines)_
-   [`e382574`](https://github.com/stdlib-js/stdlib/commit/e3825741e7ba30619c392ce88c5236d3b6454899) - **feat:** add C implementation for `math/base/special/spence` [(#2298)](https://github.com/stdlib-js/stdlib/pull/2298) _(by Gunj Joshi, Athan Reines, Philipp Burckhardt)_
-   [`7acb708`](https://github.com/stdlib-js/stdlib/commit/7acb708696e5e8f7199fde4b9a20079cb60d41a5) - **style:** fix spacing and line breaks [(#2296)](https://github.com/stdlib-js/stdlib/pull/2296) _(by Gunj Joshi)_
-   [`65619f9`](https://github.com/stdlib-js/stdlib/commit/65619f9450eaca20d834543f494d5f312e692810) - **refactor:** use signed integers for `math/base/special/log2` [(#2295)](https://github.com/stdlib-js/stdlib/pull/2295) _(by Gunj Joshi)_
-   [`8dceccc`](https://github.com/stdlib-js/stdlib/commit/8dceccc2c68a5a0beabd8a90329d7172bb33e8b9) - **refactor:** use signed integers for `math/base/special/log10` [(#2294)](https://github.com/stdlib-js/stdlib/pull/2294) _(by Gunj Joshi, Athan Reines)_
-   [`133dd8b`](https://github.com/stdlib-js/stdlib/commit/133dd8bdce3709d5aeda84906b79882f86d9989d) - **chore:** update package meta data [(#2251)](https://github.com/stdlib-js/stdlib/pull/2251) _(by stdlib-bot)_
-   [`d3215eb`](https://github.com/stdlib-js/stdlib/commit/d3215eb50a3837122325f8db0415797f81d46128) - **refactor:** update `math/base/special/log10` to follow FreeBSD version `12.2.0` [(#2215)](https://github.com/stdlib-js/stdlib/pull/2215) _(by Gunj Joshi)_
-   [`1414d1a`](https://github.com/stdlib-js/stdlib/commit/1414d1a55baaa6549510b679ea64dfa846b000fb) - **feat:** add C implementation for `math/base/special/exp2` [(#2277)](https://github.com/stdlib-js/stdlib/pull/2277) _(by Gunj Joshi)_
-   [`28e1548`](https://github.com/stdlib-js/stdlib/commit/28e154885ef536ebbd62471a4b7f18f4c5e1eec5) - **feat:** add C implementation for `math/base/special/lcm` [(#2276)](https://github.com/stdlib-js/stdlib/pull/2276) _(by Gunj Joshi)_
-   [`1bc3682`](https://github.com/stdlib-js/stdlib/commit/1bc36829f1d4a1508acd17f0ffcdc31167a30f20) - **feat:** add C implementation for `math/base/special/negafibonacci` _(by Gunj Joshi, Pranav Goswami, Philipp Burckhardt)_
-   [`1ba660a`](https://github.com/stdlib-js/stdlib/commit/1ba660abde970312ef52b49b3bf0cf3af4200f3d) - **feat:** add C implementation for `math/base/special/fibonacci-index` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`e7ebe20`](https://github.com/stdlib-js/stdlib/commit/e7ebe201dea1be826f89b997538638b07f26a960) - **fix:** update implementation to use correct constants _(by Athan Reines)_
-   [`8871f28`](https://github.com/stdlib-js/stdlib/commit/8871f285d013565cd5fc115d73029bbf013f636d) - **refactor:** use stdlib round implementation _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`c37109b`](https://github.com/stdlib-js/stdlib/commit/c37109b3c683878107df935c393a9301cb38d5a7) - **test:** fix missing argument _(by Athan Reines)_
-   [`f626b3d`](https://github.com/stdlib-js/stdlib/commit/f626b3d45c5fc4b55ff08dc53da094173a719732) - **docs:** update related packages sections [(#2255)](https://github.com/stdlib-js/stdlib/pull/2255) _(by stdlib-bot)_
-   [`947e77f`](https://github.com/stdlib-js/stdlib/commit/947e77f645e36d13cacfd68b97c6311a5524195a) - **fix:** handle large numbers correctly and revert to Math.round for JS _(by Philipp Burckhardt)_
-   [`0227bf0`](https://github.com/stdlib-js/stdlib/commit/0227bf0cbf95d5168bfa8efaf9f0286869f753fe) - **feat:** add C implementation for `math/base/special/round` _(by Pranav Goswami, Philipp Burckhardt)_
-   [`9ef09e2`](https://github.com/stdlib-js/stdlib/commit/9ef09e2cb6c9e777edcccaacd9d2ff681b0b4381) - **docs:** update related packages sections  [(#2248)](https://github.com/stdlib-js/stdlib/pull/2248) _(by stdlib-bot)_
-   [`40bf4fa`](https://github.com/stdlib-js/stdlib/commit/40bf4fa7b188024cd0f0a98bfeb1e7f4c2ff3ec0) - **chore:** remove trailing space _(by Philipp Burckhardt)_
-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - **feat:** update namespace TypeScript declarations _(by stdlib-bot, Philipp Burckhardt)_
-   [`fad5efb`](https://github.com/stdlib-js/stdlib/commit/fad5efbeba4c9a051dd8a99eb3501f71f7847892) - **docs:** update namespace table of contents [(#2244)](https://github.com/stdlib-js/stdlib/pull/2244) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ec98887`](https://github.com/stdlib-js/stdlib/commit/ec9888724c28aa7218d88ff62b91b71c0089c559) - **docs:** update related packages sections [(#2241)](https://github.com/stdlib-js/stdlib/pull/2241) _(by stdlib-bot)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(#2240)](https://github.com/stdlib-js/stdlib/pull/2240) _(by stdlib-bot)_
-   [`44d752e`](https://github.com/stdlib-js/stdlib/commit/44d752efc62e7aa8cd05690a117c58de029aafc8) - **feat:** add new special functions to `math/base/special` namespace _(by Philipp Burckhardt)_
-   [`4c5b60e`](https://github.com/stdlib-js/stdlib/commit/4c5b60e5137fac4f946d80d6b7055e8bd23b5d97) - **chore:** resolve lint errors and fix typos _(by Philipp Burckhardt)_
-   [`7f9b5ef`](https://github.com/stdlib-js/stdlib/commit/7f9b5ef18df92bfb856d8f466dad0ef0419e00c7) - **chore:** update package meta data [(#2213)](https://github.com/stdlib-js/stdlib/pull/2213) _(by stdlib-bot, Athan Reines)_
-   [`ededcf6`](https://github.com/stdlib-js/stdlib/commit/ededcf66b226854367a99cb63f0f2d755f255114) - **feat:** add C implementation for `math/base/special/log10` [(#743)](https://github.com/stdlib-js/stdlib/pull/743) _(by Pranav Goswami, Athan Reines)_
-   [`cf964b1`](https://github.com/stdlib-js/stdlib/commit/cf964b1cb63245d2105e0bab40e0cfaaee29a7bf) - **feat:** add `math/base/special/asecdf` [(#2199)](https://github.com/stdlib-js/stdlib/pull/2199) _(by Gunj Joshi, Athan Reines)_
-   [`0d3be2c`](https://github.com/stdlib-js/stdlib/commit/0d3be2ccda2d5490178836ea968e48dda9c0746d) - **chore:** update package meta data [(#2192)](https://github.com/stdlib-js/stdlib/pull/2192) _(by stdlib-bot, Athan Reines)_
-   [`189c569`](https://github.com/stdlib-js/stdlib/commit/189c5691b88b36a2fd1ff53368e6d44b90e40535) - **docs:** update related packages sections [(#2194)](https://github.com/stdlib-js/stdlib/pull/2194) _(by stdlib-bot)_
-   [`753fbf2`](https://github.com/stdlib-js/stdlib/commit/753fbf256eeb5aef27427dcec12cb8798e50e485) - **feat:** add C implementation for `math/base/special/gcd` [(#1703)](https://github.com/stdlib-js/stdlib/pull/1703) _(by Aman Bhansali, Athan Reines)_
-   [`5d37de2`](https://github.com/stdlib-js/stdlib/commit/5d37de2476ae2eb3e0f4fd196a092f26120a5478) - **docs:** update style and examples [(#2189)](https://github.com/stdlib-js/stdlib/pull/2189) _(by Gunj Joshi)_
-   [`8c0fc7e`](https://github.com/stdlib-js/stdlib/commit/8c0fc7e25b1799e174742d2c7196e2a4876f6715) - **feat:** add `math/base/special/rcbrtf` [(#2185)](https://github.com/stdlib-js/stdlib/pull/2185) _(by Gunj Joshi, Athan Reines)_
-   [`a249a30`](https://github.com/stdlib-js/stdlib/commit/a249a303ec0ae9a65bf628c41dc1da7253fea91e) - **docs:** update namespace TypeScript declarations [(#2187)](https://github.com/stdlib-js/stdlib/pull/2187) _(by stdlib-bot, Athan Reines)_
-   [`700d3df`](https://github.com/stdlib-js/stdlib/commit/700d3dfcc75d9e6615f7199f123b80cdcbe2fec0) - **docs:** fix example return value [(#2186)](https://github.com/stdlib-js/stdlib/pull/2186) _(by Gunj Joshi)_
-   [`65c3b27`](https://github.com/stdlib-js/stdlib/commit/65c3b274457f44d4fabc5fe48c63a7c17f3b5711) - **refactor:** update `math/base/special/log10` implementation [(#2176)](https://github.com/stdlib-js/stdlib/pull/2176) _(by Gunj Joshi, Athan Reines)_
-   [`be5ece8`](https://github.com/stdlib-js/stdlib/commit/be5ece8057f8f4ce6895df69a71abffd9b80733d) - **refactor:** update `math/base/special/log2` implementation [(#2172)](https://github.com/stdlib-js/stdlib/pull/2172) _(by Gunj Joshi, Athan Reines)_
-   [`dc2cd24`](https://github.com/stdlib-js/stdlib/commit/dc2cd2489fc809b2e5cc690f35839f9d35a5c27f) - **feat:** add `math/base/special/kernel-log1p` [(#2144)](https://github.com/stdlib-js/stdlib/pull/2144) _(by Gunj Joshi, Athan Reines)_
-   [`077a5e6`](https://github.com/stdlib-js/stdlib/commit/077a5e68dbabba3a92bf0163de06564759b57257) - **feat:** add `math/base/special/acscdf` [(#2148)](https://github.com/stdlib-js/stdlib/pull/2148) _(by Gunj Joshi)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`f993937`](https://github.com/stdlib-js/stdlib/commit/f993937af28d895f4502a77511ee98655d1633c7) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`e6ec7d4`](https://github.com/stdlib-js/stdlib/commit/e6ec7d4cc5f73adbb504cec8f6111c6e0aeae366) - **refactor:** avoid recursion once overflow _(by Athan Reines)_
-   [`398e2e2`](https://github.com/stdlib-js/stdlib/commit/398e2e20a847314746dc87e3da5c726729c78507) - **test:** add test cases for overflow _(by Athan Reines)_
-   [`6125c3c`](https://github.com/stdlib-js/stdlib/commit/6125c3c1f8b8e2902f505844ce5e83ba7c745f9c) - **fix:** leverage symmetry to avoid infinite recursion _(by Athan Reines)_
-   [`90177b2`](https://github.com/stdlib-js/stdlib/commit/90177b275a4df9504cfdd791ee3de6607e994179) - **refactor:** decrease tolerance and clean-up `math/base/special/asind` [(#2138)](https://github.com/stdlib-js/stdlib/pull/2138) _(by Gunj Joshi, Athan Reines)_
-   [`f684340`](https://github.com/stdlib-js/stdlib/commit/f684340123e8d5a8ec19a532527c1cb2a99c6b07) - **feat:** add `math/base/special/asindf` [(#2132)](https://github.com/stdlib-js/stdlib/pull/2132) _(by Gunj Joshi, Athan Reines)_
-   [`e279ea5`](https://github.com/stdlib-js/stdlib/commit/e279ea524d22f2d534c691962a4d7fee9695c8fe) - **chore:** update package meta data _(by stdlib-bot, Athan Reines)_
-   [`d774fe6`](https://github.com/stdlib-js/stdlib/commit/d774fe6f50f6d856865af087d184f7d56f4dc8c9) - **feat:** add `math/base/special/rad2degf` [(#2127)](https://github.com/stdlib-js/stdlib/pull/2127) _(by Gunj Joshi, Athan Reines)_
-   [`20f26c2`](https://github.com/stdlib-js/stdlib/commit/20f26c2eea154a98d258d455f48f855c2d7133a4) - **test:** update tolerance calculation _(by Athan Reines)_
-   [`9c493c0`](https://github.com/stdlib-js/stdlib/commit/9c493c075e9eae87e69caf41b51e82a8923b4ea7) - **test:** fix test fixture generation and update meta data [(#2123)](https://github.com/stdlib-js/stdlib/pull/2123) _(by Gunj Joshi)_
-   [`675ca1f`](https://github.com/stdlib-js/stdlib/commit/675ca1f7aac16fe8efaa81bdea4475e5862c5709) - **feat:** add `math/base/special/asecf` [(#2120)](https://github.com/stdlib-js/stdlib/pull/2120) _(by Gunj Joshi, Athan Reines)_
-   [`01cbab9`](https://github.com/stdlib-js/stdlib/commit/01cbab9ea365ede593f291f90959bbf9f7a8e967) - **feat:** add `math/base/special/acotf` [(#2117)](https://github.com/stdlib-js/stdlib/pull/2117) _(by Gunj Joshi, Athan Reines)_
-   [`1e4b912`](https://github.com/stdlib-js/stdlib/commit/1e4b912feb15e1f299e1a05db2f4ed6f48924189) - **test:** add tests for infinities _(by Athan Reines)_
-   [`55ce598`](https://github.com/stdlib-js/stdlib/commit/55ce598cc0f3fec9e66c9867aa438c32276729f1) - **test:** add tests for signed zeros _(by Athan Reines)_
-   [`4c5cc36`](https://github.com/stdlib-js/stdlib/commit/4c5cc36473cf920c2dbd1b2e27807b807d860e71) - **fix:** correctly handle signed zeroes in `math/base/special/atanf` [(#2115)](https://github.com/stdlib-js/stdlib/pull/2115) _(by Gunj Joshi)_
-   [`5b084e0`](https://github.com/stdlib-js/stdlib/commit/5b084e03671d12081832139d4affe5421ab8cf06) - **fix:** account for single-precision rounding when `x` is close to unity _(by Athan Reines)_
-   [`bcf0e37`](https://github.com/stdlib-js/stdlib/commit/bcf0e3709a20f304c024838e51fba1e99293517f) - **feat:** add `math/base/special/acscf` [(#2111)](https://github.com/stdlib-js/stdlib/pull/2111) _(by Gunj Joshi, Athan Reines)_
-   [`7686d40`](https://github.com/stdlib-js/stdlib/commit/7686d40cf90100caf7ba4c4585d357a66042208a) - **refactor:** ensure order of operations is the same as in C _(by Athan Reines)_
-   [`03e9400`](https://github.com/stdlib-js/stdlib/commit/03e940069ef08b4664a59e40a26bba49cb4a07b5) - **feat:** add `math/base/special/acosf` [(#2083)](https://github.com/stdlib-js/stdlib/pull/2083) _(by Gunj Joshi, Athan Reines)_
-   [`a258a50`](https://github.com/stdlib-js/stdlib/commit/a258a5070f9cbd83ecc4abecf4f81ead083e2bda) - **chore:** update package meta data [(#2087)](https://github.com/stdlib-js/stdlib/pull/2087) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f141a9b`](https://github.com/stdlib-js/stdlib/commit/f141a9be42258c5c51ce0a75594ef59a30a125f1) - **feat:** add `math/base/special/atanf` [(#2054)](https://github.com/stdlib-js/stdlib/pull/2054) _(by Gunj Joshi, Athan Reines)_
-   [`1cf574b`](https://github.com/stdlib-js/stdlib/commit/1cf574bb29355855c8d86594c0133b4812ac78b3) - **feat:** add C implementation for `math/base/special/atan2` _(by Pushpendra Chandravanshi, stdlib-bot, Philipp Burckhardt, Pranav Goswami)_
-   [`0038b4b`](https://github.com/stdlib-js/stdlib/commit/0038b4bd2e637577753c8dd28eabfbd40c7d727b) - **feat:** add `math/base/special/asinf` [(#2030)](https://github.com/stdlib-js/stdlib/pull/2030) _(by Gunj Joshi, Athan Reines)_
-   [`8a01cf7`](https://github.com/stdlib-js/stdlib/commit/8a01cf7d39551d8fd0481be8d3e4aa3b9ba88b9d) - **feat:** add C implementation for `math/base/special/fast/uint32-sqrt` _(by Rejoan Sardar)_
-   [`b6968e0`](https://github.com/stdlib-js/stdlib/commit/b6968e0432693ea50e4cc0de9d9a26873ab4dedc) - **docs:** fix descriptions _(by Athan Reines)_
-   [`e8f94d2`](https://github.com/stdlib-js/stdlib/commit/e8f94d2e0efb84921f871550ca7e49d514a6a519) - **feat:** add C implementation for `math/base/special/gamma-lanczos-sum-expg-scaled` _(by Gunj Joshi, Philipp Burckhardt)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`c17484a`](https://github.com/stdlib-js/stdlib/commit/c17484ad1830ddfdb3abbe96589b406096e389e1) - **feat:** add C implementation for `math/base/special/fast/uint32-log2` [(#1946)](https://github.com/stdlib-js/stdlib/pull/1946) _(by Rutam Kathale, Athan Reines, Pranav Goswami)_
-   [`abf4652`](https://github.com/stdlib-js/stdlib/commit/abf4652e755a88031ee35c182b34d48effe25e43) - **feat:** add C implementation of `math/base/special/fast/alpha-max-plus-beta-min` [(#1947)](https://github.com/stdlib-js/stdlib/pull/1947) _(by Ayaka, Athan Reines)_
-   [`c39cc72`](https://github.com/stdlib-js/stdlib/commit/c39cc7222bf86a5217a4fc5333b007f90f1709cd) - **feat:** add C implementation for `math/base/special/nonfibonacci` _(by Tirtadwipa Manunggal, stdlib-bot, Philipp Burckhardt)_
-   [`5de3b76`](https://github.com/stdlib-js/stdlib/commit/5de3b7612454a97aef3c4cd8e8ba48858cc13d02) - **feat:** add C implementation for `math/base/special/acscd` _(by Rejoan Sardar, Philipp Burckhardt)_
-   [`5c8ab25`](https://github.com/stdlib-js/stdlib/commit/5c8ab250e07d8f3cf603522c1d354a2f983e354b) - **feat:** add C implementation for `math/base/special/gamma-lanczos-sum` [(#1834)](https://github.com/stdlib-js/stdlib/pull/1834) _(by Gunj Joshi, Athan Reines)_
-   [`7c8d0ce`](https://github.com/stdlib-js/stdlib/commit/7c8d0ced2596cd1ed9e4dec0a40915dd91f59537) - **fix:** missing headers in C examples [(#1958)](https://github.com/stdlib-js/stdlib/pull/1958) _(by Rutam Kathale)_
-   [`7556fd8`](https://github.com/stdlib-js/stdlib/commit/7556fd8455fa74cea1e9d3b5cf6df203801c962e) - **feat:** add C implementation for `math/base/special/fast/atanh` _(by Rejoan Sardar, Pranav Goswami)_
-   [`0b0e240`](https://github.com/stdlib-js/stdlib/commit/0b0e240f6959ac1dae3bc00fe42b9930eb887e93) - **feat:** add `math/base/special/cosd` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`5b5ce15`](https://github.com/stdlib-js/stdlib/commit/5b5ce15628dac972c3f842b1b0233b3b9913f04e) - **feat:** add C implementation for `math/base/special/fast/pow-int` _(by Gunj Joshi, Pranav Goswami)_
-   [`19f6f59`](https://github.com/stdlib-js/stdlib/commit/19f6f59482f92d40cfc1fd310664f6980dca1725) - **feat:** add C implementation for `math/base/special/modf` _(by Gunj Joshi, Pranav Goswami)_
-   [`5a81f05`](https://github.com/stdlib-js/stdlib/commit/5a81f050b2467e6ebf8d3f242511428cc0a3b49e) - **feat:** add C implementation for `math/base/special/fast/min` _(by Rejoan Sardar, Pranav Goswami, Philipp Burckhardt)_
-   [`67e90ff`](https://github.com/stdlib-js/stdlib/commit/67e90fff25e4e33de75e060ea2fa9ee25df3b433) - **feat:** add C implementation for `math/base/special/fast/max` _(by Rejoan Sardar, Pranav Goswami, Philipp Burckhardt)_
-   [`d27da5d`](https://github.com/stdlib-js/stdlib/commit/d27da5ddf7d6acb8da8c4f7bdee5a05df139329e) - **chore:** update package meta data [(#1926)](https://github.com/stdlib-js/stdlib/pull/1926) _(by stdlib-bot, Athan Reines)_
-   [`e247f31`](https://github.com/stdlib-js/stdlib/commit/e247f3177902ef222b387d21d99c1ed0de5a4ccb) - **docs:** fix function names in C example code _(by Philipp Burckhardt)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`433bb99`](https://github.com/stdlib-js/stdlib/commit/433bb998206acd124e8856b4e1b6f84803c26b47) - **fix:** move addition by one into the sqrt invocation _(by Philipp Burckhardt)_
-   [`8b20f6a`](https://github.com/stdlib-js/stdlib/commit/8b20f6a9c3b782cfe379c58d33c69c4683edcfce) - **feat:** add C implementation for `math/base/special/fast/asinh` _(by Rejoan Sardar, Philipp Burckhardt)_
-   [`f098571`](https://github.com/stdlib-js/stdlib/commit/f098571eeb38c2e5639e128715daebf467e73da2) - **feat:** add C implementation for `math/base/special/asind` _(by Rejoan Sardar)_
-   [`f134dac`](https://github.com/stdlib-js/stdlib/commit/f134dac2965e729dd0e662f8ec3d952770310149) - **feat:** add C implementation for `math/base/special/fast/abs` _(by Gunj Joshi, Athan Reines)_
-   [`43f7bc2`](https://github.com/stdlib-js/stdlib/commit/43f7bc27ac49f36204bcd54f7f21f2508d4045d5) - **feat:** add C implementation for `math/base/special/fast/acosh` _(by Gunj Joshi, Pranav Goswami)_
-   [`bdb2441`](https://github.com/stdlib-js/stdlib/commit/bdb24411c6bf1498c94ba15246d3134c43653640) - **feat:** add C implementation for `math/base/special/fast/hypot`  _(by Gunj Joshi)_
-   [`5433e22`](https://github.com/stdlib-js/stdlib/commit/5433e22ea76052b48ab4503cf11dc4b64aa0ec7d) - **feat:** add C implementation for `math/base/special/factorial2` _(by Rutam Kathale, Pranav, Philipp Burckhardt)_
-   [`ee3cbb1`](https://github.com/stdlib-js/stdlib/commit/ee3cbb145141c2f315a7b7b0f1a3b333a2a74e40) - **feat:** add C implementation for `math/base/special/acosd` _(by Gunj Joshi, Pranav)_
-   [`0db265e`](https://github.com/stdlib-js/stdlib/commit/0db265e586019fb5cb2df21ae8602dfcc953586e) - **feat:** add C implementation for `math/base/special/atand` _(by Rejoan Sardar, Pranav)_
-   [`c2239f3`](https://github.com/stdlib-js/stdlib/commit/c2239f369fadf2c01d0ba114d6b590f24c6dbe5e) - **feat:** add C implementation for `math/base/special/acsc` _(by Rejoan Sardar, Pranav)_
-   [`f7ec55b`](https://github.com/stdlib-js/stdlib/commit/f7ec55b562a0cf7e7bf80ff0e286f6d195402b57) - **feat:** add C implementation for `math/base/special/asecd` _(by Gunj Joshi, Pranav)_
-   [`5d6a173`](https://github.com/stdlib-js/stdlib/commit/5d6a173d1cdc95f259811dc566836f2a7b525315) - **feat:** add C implementation for `math/base/special/acotd` _(by Gunj Joshi, Pranav)_
-   [`c5e01bf`](https://github.com/stdlib-js/stdlib/commit/c5e01bf5b7718ded999fa1f4841407ed27bfdfc1) - **feat:** add `math/base/special/cotd` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`025c2c1`](https://github.com/stdlib-js/stdlib/commit/025c2c164f6d51a2192399d0c237d78a139ff772) - **feat:** add `math/base/special/tand` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`78524df`](https://github.com/stdlib-js/stdlib/commit/78524df819f374e2686ed27f333b1b4658ea13d5) - **feat:** add C implementation for `math/base/special/boxcox1pinv` _(by Rejoan Sardar, Pranav)_
-   [`601c72c`](https://github.com/stdlib-js/stdlib/commit/601c72c0495f2515161fe50ade666b477d0a2c4f) - **feat:** add C implementation for `math/base/special/boxcox1p` _(by Gunj Joshi, Pranav)_
-   [`f2812cf`](https://github.com/stdlib-js/stdlib/commit/f2812cfefb23e0f3b9607ad2af9b5d7cbb68861e) - **feat:** add C implementation for `math/base/special/boxcoxinv` [(#1878)](https://github.com/stdlib-js/stdlib/pull/1878) _(by Rejoan Sardar, Athan Reines)_
-   [`63034fc`](https://github.com/stdlib-js/stdlib/commit/63034fc093bf2419b7c08209f2225beaefdb3211) - **feat:** add C implementation for `math/base/special/boxcox` [(#1870)](https://github.com/stdlib-js/stdlib/pull/1870) _(by Gunj Joshi, Athan Reines)_
-   [`dc84fce`](https://github.com/stdlib-js/stdlib/commit/dc84fce54ee45d590860af4eb36845981342671f) - **feat:** add C implementation for `math/base/special/xlog1py` _(by Rejoan Sardar, Pranav, Philipp Burckhardt)_
-   [`0c78f2f`](https://github.com/stdlib-js/stdlib/commit/0c78f2f502062c3d5bd6c8ac857cb2203fd17f7f) - **feat:** add C implementation for `math/base/special/bernoulli` _(by Gunj Joshi, Pranav)_
-   [`a3fbf67`](https://github.com/stdlib-js/stdlib/commit/a3fbf67720b3d1963b27c1097bd8144397ac0ec1) - **docs:** update related packages sections [(#1857)](https://github.com/stdlib-js/stdlib/pull/1857) _(by stdlib-bot)_
-   [`6ea8070`](https://github.com/stdlib-js/stdlib/commit/6ea8070523d0007c15da8f81191fcf0b65645e27) - **docs:** fix JSDoc description in `math/base/special/acoversin` [(#1853)](https://github.com/stdlib-js/stdlib/pull/1853) _(by Rejoan Sardar)_
-   [`dc20da0`](https://github.com/stdlib-js/stdlib/commit/dc20da0604fe2798e20e757277072fefc876da3c) - **chore:** update package meta data [(#1856)](https://github.com/stdlib-js/stdlib/pull/1856) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7d855d1`](https://github.com/stdlib-js/stdlib/commit/7d855d19453e4b94b70dd4a25e9b291590e50fa2) - **feat:** add `math/base/special/asind` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`e45ee33`](https://github.com/stdlib-js/stdlib/commit/e45ee3358489e27fdb8fac2b265fb7bbfd9935b9) - **feat:** add `math/base/special/atand` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`f01384c`](https://github.com/stdlib-js/stdlib/commit/f01384c7b893418d152588d02d96a1594a9d9b92) - **feat:** add `math/base/special/acosd` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`58e8c9a`](https://github.com/stdlib-js/stdlib/commit/58e8c9a6ceb0573af6906d96b49327802fec4604) - **feat:** add `math/base/special/secd` _(by Sai Srikar Dumpeti, Philipp Burckhardt, stdlib-bot)_
-   [`1d7b726`](https://github.com/stdlib-js/stdlib/commit/1d7b726c275c4a1bcb13ac2731ad19bec63d3041) - **feat:** add `math/base/special/acscd` _(by Sai Srikar Dumpeti)_
-   [`7489261`](https://github.com/stdlib-js/stdlib/commit/748926101f284b6e9f196283ff1ca08bf6efa2dc) - **feat:** add `math/base/special/acotd` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`bb6ac7e`](https://github.com/stdlib-js/stdlib/commit/bb6ac7ec68ee6a78cffd9527e477a2bc0fdcdf17) - **feat:** add `math/base/special/cscd` _(by Sai Srikar Dumpeti, stdlib-bot, Philipp Burckhardt)_
-   [`665c735`](https://github.com/stdlib-js/stdlib/commit/665c7357a0439decbaecb80519ce017d87a15f04) - **feat:** add C implementation for `math/base/special/xlogy` _(by Rutam Kathale, Pranav)_
-   [`3addfa7`](https://github.com/stdlib-js/stdlib/commit/3addfa758b52d1ae97959efc77fe9ee6b7441b9d) - **feat:** add C implementation for `math/base/special/ahaversin` _(by Rejoan Sardar, Pranav)_
-   [`e59d704`](https://github.com/stdlib-js/stdlib/commit/e59d704f754153cce428151f19bd716e0f4f3465) - **feat:** add C implementation for `math/base/special/gammasgn` [(#1841)](https://github.com/stdlib-js/stdlib/pull/1841) _(by Gunj Joshi, Pranav)_
-   [`d8f6700`](https://github.com/stdlib-js/stdlib/commit/d8f6700f923c16fb626c3c2259152475706b340a) - **feat:** add C implementation for `math/base/special/log2` _(by Aman Bhansali, Pranav, Athan Reines)_
-   [`5b72836`](https://github.com/stdlib-js/stdlib/commit/5b72836b09a88874c85ac6e72ae150a89fa1d104) - **feat:** add `math/base/special/asecd` _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`6e31e73`](https://github.com/stdlib-js/stdlib/commit/6e31e7364b677a18cb4294b0820ba1ebe68cb47f) - **feat:** add C implementation for `math/base/special/acsch` [(#1833)](https://github.com/stdlib-js/stdlib/pull/1833) _(by Snehil Shah, Athan Reines)_
-   [`e25fbc3`](https://github.com/stdlib-js/stdlib/commit/e25fbc33d4fb30525fa277c65758083ce16924ba) - **fix:** resolve failing addon build in `math/base/special/maxabs` [(#1826)](https://github.com/stdlib-js/stdlib/pull/1826) _(by Pranav Goswami)_
-   [`9d915c8`](https://github.com/stdlib-js/stdlib/commit/9d915c8cb1ff07e1d894429ea8e6b022ea53f415) - **feat:** add C implementation for @stdlib/math/base/special/csch [(#1819)](https://github.com/stdlib-js/stdlib/pull/1819) _(by Gunj Joshi)_
-   [`b56c697`](https://github.com/stdlib-js/stdlib/commit/b56c6979cca60119d6ebd79ffabb1c3d9b9d1d99) - **feat:** add C implementation for `math/base/special/asech` _(by Rejoan Sardar, Pranav, Philipp Burckhardt)_
-   [`fa68dfe`](https://github.com/stdlib-js/stdlib/commit/fa68dfe9a77bae534851850921a5374a9b2860e2) - **feat:** add C implementation for `math/base/special/maxabs` _(by Shashank Shekhar Singh, Pranav)_
-   [`5108869`](https://github.com/stdlib-js/stdlib/commit/5108869248f78854546359b8ce35916c612a90cb) - **fix:** remove invalid examples [(#1814)](https://github.com/stdlib-js/stdlib/pull/1814) _(by Gunj Joshi, Athan Reines)_
-   [`d40dbaf`](https://github.com/stdlib-js/stdlib/commit/d40dbafc25e3e10c8fa83f5b4203db97c289823c) - **chore:** update package meta data [(#1812)](https://github.com/stdlib-js/stdlib/pull/1812) _(by stdlib-bot)_
-   [`6831521`](https://github.com/stdlib-js/stdlib/commit/68315216677e3d2d21b009537dafd703ef4d9a91) - **feat:** add C implementation for `math/base/special/max` _(by Shashank Shekhar Singh, Philipp Burckhardt)_
-   [`b86d26e`](https://github.com/stdlib-js/stdlib/commit/b86d26e2a205fad885130b417654044d9d7a8d49) - **feat:** add C implementation for `math/base/special/asec` _(by Rejoan Sardar, Philipp Burckhardt, Pranav)_
-   [`8459377`](https://github.com/stdlib-js/stdlib/commit/8459377ed28af410123fa0099daa2ace37b71f24) - **feat:** add C implementation for `math/base/special/aversin` _(by Snehil Shah, Pranavchiku)_
-   [`cb0051c`](https://github.com/stdlib-js/stdlib/commit/cb0051ce90007b08f6d702aee17a1657a0d821c6) - **feat:** add C implementation for `math/base/special/avercos` _(by Snehil Shah, Pranav)_
-   [`cace7bf`](https://github.com/stdlib-js/stdlib/commit/cace7bfe0e4902a169f0ad71d0a8f75521413c88) - **style:** fix spacing _(by Athan Reines)_
-   [`89da7ae`](https://github.com/stdlib-js/stdlib/commit/89da7ae0f39326224d5a014ecf537c19f9c4c7c6) - **fix:** update polynomial functions and fix function call _(by Athan Reines)_
-   [`9a4033c`](https://github.com/stdlib-js/stdlib/commit/9a4033c29bb4e28b1d79bd93a6b8f7e8ee34c8f6) - **fix:** use correct function name _(by Athan Reines)_
-   [`23f2db6`](https://github.com/stdlib-js/stdlib/commit/23f2db6d4d754350e5bf5c00958e2093d30d086e) - **feat:** add C implementation for `math/base/special/ellipe` [(#1452)](https://github.com/stdlib-js/stdlib/pull/1452) _(by Gunj Joshi, Athan Reines, Pranav Goswami)_
-   [`8484053`](https://github.com/stdlib-js/stdlib/commit/84840535f83baa0b4638c5cf467144d4b0eb40d6) - **fix:** rename configuration file [(#1730)](https://github.com/stdlib-js/stdlib/pull/1730) _(by Pranav Goswami)_
-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - **fix:** add missing gypfile field entries _(by Philipp Burckhardt)_
-   [`1aaab57`](https://github.com/stdlib-js/stdlib/commit/1aaab5736f41d8330154339c52f8755381f04667) - **feat:** add C implementation for `math/base/special/coth` _(by Lovelin Dhoni J B)_
-   [`d829b75`](https://github.com/stdlib-js/stdlib/commit/d829b759e2910479911a3998c065b2cf2abf491e) - **docs:** fix errors in various C examples [(#1691)](https://github.com/stdlib-js/stdlib/pull/1691) _(by Pranav Goswami)_
-   [`94d7738`](https://github.com/stdlib-js/stdlib/commit/94d7738c835898f9fa6d8904ebd230401aaf8958) - **docs:** remove blank lines [(#1682)](https://github.com/stdlib-js/stdlib/pull/1682) _(by stdlib-bot)_
-   [`c86db95`](https://github.com/stdlib-js/stdlib/commit/c86db9526dbc39bc2fc97fdb5fde9f97d73a1133) - **feat:** add C implementation for `math/base/special/log` _(by Aman Bhansali, Pranav)_
-   [`b06e5c7`](https://github.com/stdlib-js/stdlib/commit/b06e5c78b63b7ae91de2911de4f057da7c2fccc8) - **feat:** add C implementation for `math/base/special/minabs` _(by Aman Bhansali, Pranav)_
-   [`5cfd0a8`](https://github.com/stdlib-js/stdlib/commit/5cfd0a8712299d680aff7f9d8fca0c0ac69de56b) - **chore:** update package meta data [(#1462)](https://github.com/stdlib-js/stdlib/pull/1462) _(by stdlib-bot)_
-   [`a2ed2a5`](https://github.com/stdlib-js/stdlib/commit/a2ed2a57008a88e74e94185443d3634b1f194223) - **feat:** add C implementation for `math/base/special/logaddexp` _(by Aman Bhansali, Pranav)_
-   [`234c6c3`](https://github.com/stdlib-js/stdlib/commit/234c6c3261313ab8f60c3211bc77fa21741664f7) - **feat:** add C implementation for `math/base/special/acovercos` _(by Adarsh Palaskar, Pranav)_
-   [`0fc216a`](https://github.com/stdlib-js/stdlib/commit/0fc216a874f6501dac5086e4923cee5eb0df57d7) - **feat:** add C implementation for `math/base/special/min` _(by Aman Bhansali, Pranav)_
-   [`1096686`](https://github.com/stdlib-js/stdlib/commit/1096686e16dd4515a7aaa5bdc35ff5803ec0349f) - **feat:** add C implementation for `math/base/special/acoversin` [(#142)](https://github.com/stdlib-js/stdlib/pull/142) _(by Aman Bhansali)_
-   [`eace8f3`](https://github.com/stdlib-js/stdlib/commit/eace8f39f945f8b330fdfdd9bd71a45555e521c4) - **feat:** add C implementation for `math/base/special/ahavercos` [(#1419)](https://github.com/stdlib-js/stdlib/pull/1419) _(by Aman Bhansali, Pranav)_
-   [`663969e`](https://github.com/stdlib-js/stdlib/commit/663969ecb281636f3257068168322de88fab725a) - **docs:** update package URLs [(#1422)](https://github.com/stdlib-js/stdlib/pull/1422) _(by stdlib-bot)_
-   [`b60ef62`](https://github.com/stdlib-js/stdlib/commit/b60ef6245ac44dbef3076f1122e91f4aa8406e6c) - **feat:** add `math/base/special/csc` _(by Mihir Pandit, stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="commits">

### Commits

<details>

-   [`4315e33`](https://github.com/stdlib-js/stdlib/commit/4315e33177a67ff0ca097e7dcf91c40f90380e91) - **docs:** update related packages sections  [(#1320)](https://github.com/stdlib-js/stdlib/pull/1320) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="packages">

### Packages

<section class="package" id="math-base-special-v0.2.0">

#### [@stdlib/math/base/special](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special)

<details>

<section class="features">

##### Features

-   [`5c48417`](https://github.com/stdlib-js/stdlib/commit/5c48417bea1eb163504f2b38d6e4ff48fd269382) - update namespace TypeScript declarations [(#1134)](https://github.com/stdlib-js/stdlib/pull/1134)
-   [`e409ab1`](https://github.com/stdlib-js/stdlib/commit/e409ab1bf4a9190fb0ffd8bea0d016fbc28b631a) - add `factorial2` to namespace
-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1155](https://github.com/stdlib-js/stdlib/issues/1155)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorial2-v0.2.0">

#### [@stdlib/math/base/special/factorial2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorial2)

<details>

<section class="features">

##### Features

-   [`c0dab03`](https://github.com/stdlib-js/stdlib/commit/c0dab036acafd8d1e014ee8c6c8d54d3616fd782) - add `math/base/special/factorial2` [(#1112)](https://github.com/stdlib-js/stdlib/pull/1112)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#44](https://github.com/stdlib-js/stdlib/issues/44)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pmx-v0.2.0">

#### [@stdlib/math/base/special/log1pmx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pmx)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ac4078a`](https://github.com/stdlib-js/stdlib/commit/ac4078a3fea93a56215f94b7b606f08f283fd396) - add missing manifest.json entry

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#44](https://github.com/stdlib-js/stdlib/issues/44), [#1155](https://github.com/stdlib-js/stdlib/issues/1155)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Robert Gislason

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`71ee29b`](https://github.com/stdlib-js/stdlib/commit/71ee29b7d30436e5ccbb78bf1367b1b576c2b386) - **docs:** update related packages sections [(#1314)](https://github.com/stdlib-js/stdlib/pull/1314) _(by stdlib-bot)_
-   [`5284362`](https://github.com/stdlib-js/stdlib/commit/5284362368db3dcaae9a50dacd9caab56485a7e9) - **docs:** update related packages sections [(#1299)](https://github.com/stdlib-js/stdlib/pull/1299) _(by stdlib-bot)_
-   [`ed8a998`](https://github.com/stdlib-js/stdlib/commit/ed8a998f95cebd180f2a974548379a6335988970) - **docs:** update related packages sections [(#1296)](https://github.com/stdlib-js/stdlib/pull/1296) _(by stdlib-bot)_
-   [`d2d2b70`](https://github.com/stdlib-js/stdlib/commit/d2d2b707e954b400b72b7b9f158164d026d09636) - **docs:** update related packages sections [(#1261)](https://github.com/stdlib-js/stdlib/pull/1261) _(by stdlib-bot)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8affb20`](https://github.com/stdlib-js/stdlib/commit/8affb20402cfd15cf33663a601541b36cc7edb56) - **docs:** update related packages sections [(#1248)](https://github.com/stdlib-js/stdlib/pull/1248) _(by stdlib-bot)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`fe1a276`](https://github.com/stdlib-js/stdlib/commit/fe1a2764c983ee7adc61e5f383dd91dd262ddfc2) - **docs:** update related packages sections [(#1220)](https://github.com/stdlib-js/stdlib/pull/1220) _(by stdlib-bot)_
-   [`504795c`](https://github.com/stdlib-js/stdlib/commit/504795ca2b3eb120db344e51b27493b3da696ebf) - **docs:** update related packages sections [(#1214)](https://github.com/stdlib-js/stdlib/pull/1214) _(by stdlib-bot)_
-   [`1256a95`](https://github.com/stdlib-js/stdlib/commit/1256a9588a52fe50e1ba363dbb47b614b82f4db0) - **style:** remove decimal for consistency with rest of implementation _(by Athan Reines)_
-   [`0363e4c`](https://github.com/stdlib-js/stdlib/commit/0363e4c381885a8c758281f79f9fd88cb11b309a) - **refactor:** remove alternative implementation files _(by Athan Reines)_
-   [`fab2a1e`](https://github.com/stdlib-js/stdlib/commit/fab2a1e571a8a2b6ba9f093c8ae6ae276ca4c37d) - **refactor:** improve accuracy for large binomial coefficients _(by Athan Reines)_
-   [`6a5f15a`](https://github.com/stdlib-js/stdlib/commit/6a5f15ac68a1674238d2469c37dd7e20b49e9541) - **bench:** pre-allocate arrays of random numbers to allow perf measurement _(by Athan Reines)_
-   [`dbe559a`](https://github.com/stdlib-js/stdlib/commit/dbe559ac10385a4f0edadd7394cea6170a34864f) - **test:** update test fixtures and add failing tests _(by Athan Reines)_
-   [`32e396e`](https://github.com/stdlib-js/stdlib/commit/32e396ec3729717dd7805202b83fd0d30a522d06) - **docs:** update related packages sections [(#1185)](https://github.com/stdlib-js/stdlib/pull/1185) _(by stdlib-bot)_
-   [`d575e8b`](https://github.com/stdlib-js/stdlib/commit/d575e8b063a37d90c3178fcff7b425314ae73c98) - **docs:** update related packages sections [(#1167)](https://github.com/stdlib-js/stdlib/pull/1167) _(by stdlib-bot)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`e9778a4`](https://github.com/stdlib-js/stdlib/commit/e9778a44456fe95e30158b3ed4b2849c1ea5be1d) - **build:** do not escape special Markdown characters in code _(by Philipp Burckhardt)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`9dd4da3`](https://github.com/stdlib-js/stdlib/commit/9dd4da3d3eff22c863ed009cc6a909ad524e2b83) - **docs:** update namespace table of contents [(#1136)](https://github.com/stdlib-js/stdlib/pull/1136) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5c48417`](https://github.com/stdlib-js/stdlib/commit/5c48417bea1eb163504f2b38d6e4ff48fd269382) - **feat:** update namespace TypeScript declarations [(#1134)](https://github.com/stdlib-js/stdlib/pull/1134) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e409ab1`](https://github.com/stdlib-js/stdlib/commit/e409ab1bf4a9190fb0ffd8bea0d016fbc28b631a) - **feat:** add `factorial2` to namespace _(by Athan Reines)_
-   [`ac29cc3`](https://github.com/stdlib-js/stdlib/commit/ac29cc34c3d31e65309fb77ac8680f6161f41a60) - **docs:** update heading _(by Athan Reines)_
-   [`84a6e5c`](https://github.com/stdlib-js/stdlib/commit/84a6e5c228d8125b73e142785a85b7922fd30e6a) - **test:** standardize assertion messages _(by Athan Reines)_
-   [`2202667`](https://github.com/stdlib-js/stdlib/commit/2202667685e9d8714200364b196418c32f7c0c6b) - **bench:** simplify benchmarks _(by Athan Reines)_
-   [`c0dab03`](https://github.com/stdlib-js/stdlib/commit/c0dab036acafd8d1e014ee8c6c8d54d3616fd782) - **feat:** add `math/base/special/factorial2` [(#1112)](https://github.com/stdlib-js/stdlib/pull/1112) _(by Robert Gislason, Athan Reines)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d503f0f`](https://github.com/stdlib-js/stdlib/commit/d503f0fe98da200ecfd1b204f078d63044bead75) - **build:** replace tslint directive _(by Philipp Burckhardt)_
-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - **feat:** update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128) _(by stdlib-bot, Athan Reines)_
-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`a17f2aa`](https://github.com/stdlib-js/stdlib/commit/a17f2aaed3f2449944d5c5d348e9550087ff7a87) - **docs:** update namespace table of contents [(#1116)](https://github.com/stdlib-js/stdlib/pull/1116) _(by stdlib-bot, Athan Reines)_
-   [`ac4078a`](https://github.com/stdlib-js/stdlib/commit/ac4078a3fea93a56215f94b7b606f08f283fd396) - **fix:** add missing manifest.json entry _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="packages">

### Packages

<section class="package" id="math-base-special-v0.1.0">

#### [@stdlib/math/base/special](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special)

<details>

<section class="features">

##### Features

-   [`ee45a06`](https://github.com/stdlib-js/stdlib/commit/ee45a06eabd944613bb10ce3a058dc19d9b30f77) - update namespace TypeScript declarations [(#1103)](https://github.com/stdlib-js/stdlib/pull/1103)
-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100)
-   [`2e858d4`](https://github.com/stdlib-js/stdlib/commit/2e858d41b56f73ba68f58653b798fcb534d75910) - add log1pmx to namespace
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068)
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ee45a06`](https://github.com/stdlib-js/stdlib/commit/ee45a06eabd944613bb10ce3a058dc19d9b30f77): refactor complex number APIs

    -   To migrate, users should use and handle `Complex128` instances, rather than separate real and imaginary components.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-abs-v0.1.0">

#### [@stdlib/math/base/special/abs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/abs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-abs2-v0.1.0">

#### [@stdlib/math/base/special/abs2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/abs2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-abs2f-v0.1.0">

#### [@stdlib/math/base/special/abs2f](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/abs2f)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-absf-v0.1.0">

#### [@stdlib/math/base/special/absf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/absf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acos-v0.1.0">

#### [@stdlib/math/base/special/acos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acosh-v0.1.0">

#### [@stdlib/math/base/special/acosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acosh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acot-v0.1.0">

#### [@stdlib/math/base/special/acot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acot)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoth-v0.1.0">

#### [@stdlib/math/base/special/acoth](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoth)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`2226dae`](https://github.com/stdlib-js/stdlib/commit/2226daec22d063b09e52efb6f3fbcfae623aadce) - skip test if native addon is not available

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acovercos-v0.1.0">

#### [@stdlib/math/base/special/acovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acovercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acoversin-v0.1.0">

#### [@stdlib/math/base/special/acoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acoversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acsc-v0.1.0">

#### [@stdlib/math/base/special/acsc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acsc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-acsch-v0.1.0">

#### [@stdlib/math/base/special/acsch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/acsch)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahavercos-v0.1.0">

#### [@stdlib/math/base/special/ahavercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahavercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ahaversin-v0.1.0">

#### [@stdlib/math/base/special/ahaversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ahaversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asec-v0.1.0">

#### [@stdlib/math/base/special/asec](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asec)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asech-v0.1.0">

#### [@stdlib/math/base/special/asech](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asech)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asin-v0.1.0">

#### [@stdlib/math/base/special/asin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-asinh-v0.1.0">

#### [@stdlib/math/base/special/asinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/asinh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan-v0.1.0">

#### [@stdlib/math/base/special/atan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atan2-v0.1.0">

#### [@stdlib/math/base/special/atan2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atan2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-atanh-v0.1.0">

#### [@stdlib/math/base/special/atanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/atanh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-avercos-v0.1.0">

#### [@stdlib/math/base/special/avercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/avercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-aversin-v0.1.0">

#### [@stdlib/math/base/special/aversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/aversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bernoulli-v0.1.0">

#### [@stdlib/math/base/special/bernoulli](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bernoulli)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-besselj0-v0.1.0">

#### [@stdlib/math/base/special/besselj0](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/besselj0)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-besselj1-v0.1.0">

#### [@stdlib/math/base/special/besselj1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/besselj1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bessely0-v0.1.0">

#### [@stdlib/math/base/special/bessely0](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bessely0)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-bessely1-v0.1.0">

#### [@stdlib/math/base/special/bessely1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/bessely1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-beta-v0.1.0">

#### [@stdlib/math/base/special/beta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/beta)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-betainc-v0.1.0">

#### [@stdlib/math/base/special/betainc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/betainc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-betaincinv-v0.1.0">

#### [@stdlib/math/base/special/betaincinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/betaincinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-betaln-v0.1.0">

#### [@stdlib/math/base/special/betaln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/betaln)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox-v0.1.0">

#### [@stdlib/math/base/special/boxcox](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox1p-v0.1.0">

#### [@stdlib/math/base/special/boxcox1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox1p)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcox1pinv-v0.1.0">

#### [@stdlib/math/base/special/boxcox1pinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcox1pinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-boxcoxinv-v0.1.0">

#### [@stdlib/math/base/special/boxcoxinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/boxcoxinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs-v0.1.0">

#### [@stdlib/math/base/special/cabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs2-v0.1.0">

#### [@stdlib/math/base/special/cabs2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`119e99d`](https://github.com/stdlib-js/stdlib/commit/119e99d1292c6f6652fb6cbbe2329b35ad7797ba) - migrate to using stdlib complex number types [(#912)](https://github.com/stdlib-js/stdlib/pull/912)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`119e99d`](https://github.com/stdlib-js/stdlib/commit/119e99d1292c6f6652fb6cbbe2329b35ad7797ba): migrate to using stdlib complex number types

    -   To migrate, users need to change `double complex` to `stdlib_complex128_t`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabs2f-v0.1.0">

#### [@stdlib/math/base/special/cabs2f](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabs2f)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cabsf-v0.1.0">

#### [@stdlib/math/base/special/cabsf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cabsf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cbrt-v0.1.0">

#### [@stdlib/math/base/special/cbrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cbrt)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cbrtf-v0.1.0">

#### [@stdlib/math/base/special/cbrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cbrtf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceil-v0.1.0">

#### [@stdlib/math/base/special/cceil](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceil)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`4ca9916`](https://github.com/stdlib-js/stdlib/commit/4ca9916461225adfbebd0a9d1999756ff1277415) - migrate to using stdlib complex number types [(#916)](https://github.com/stdlib-js/stdlib/pull/916)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`4ca9916`](https://github.com/stdlib-js/stdlib/commit/4ca9916461225adfbebd0a9d1999756ff1277415): migrate to using stdlib complex number types

    -   To migrate, users need to change `double complex` to `stdlib_complex128_t`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceilf-v0.1.0">

#### [@stdlib/math/base/special/cceilf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceilf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cceiln-v0.1.0">

#### [@stdlib/math/base/special/cceiln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cceiln)

<details>

<section class="features">

##### Features

-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a) - remove `out` argument support and add C implementations [(#988)](https://github.com/stdlib-js/stdlib/pull/988)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ccis-v0.1.0">

#### [@stdlib/math/base/special/ccis](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ccis)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`0a0d792`](https://github.com/stdlib-js/stdlib/commit/0a0d7927e3c277af2bce9dc8cff861f4168cfb80) - refactor to remove `out` argument and add C implementation [(#970)](https://github.com/stdlib-js/stdlib/pull/970)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`0a0d792`](https://github.com/stdlib-js/stdlib/commit/0a0d7927e3c277af2bce9dc8cff861f4168cfb80): remove `out` argument support and use complex number objects

    -   To migrate, consumers will need to refactor to use complex number objects for input arguments and output values.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil-v0.1.0">

#### [@stdlib/math/base/special/ceil](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil)

<details>

<section class="features">

##### Features

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774): remove support for `out` argument

    -   To migrate, users should provide a complex number object and handle a complex number object return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil10-v0.1.0">

#### [@stdlib/math/base/special/ceil10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceil2-v0.1.0">

#### [@stdlib/math/base/special/ceil2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceil2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilb-v0.1.0">

#### [@stdlib/math/base/special/ceilb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilb)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilf-v0.1.0">

#### [@stdlib/math/base/special/ceilf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceiln-v0.1.0">

#### [@stdlib/math/base/special/ceiln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceiln)

<details>

<section class="features">

##### Features

-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a) - remove `out` argument support and add C implementations [(#988)](https://github.com/stdlib-js/stdlib/pull/988)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ceilsd-v0.1.0">

#### [@stdlib/math/base/special/ceilsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ceilsd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cexp-v0.1.0">

#### [@stdlib/math/base/special/cexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`5318182`](https://github.com/stdlib-js/stdlib/commit/5318182b059207761c0e874374e6b9b11ae4d9ea) - refactor API and add C API to `math/base/special/cexp` [(#972)](https://github.com/stdlib-js/stdlib/pull/972)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`5318182`](https://github.com/stdlib-js/stdlib/commit/5318182b059207761c0e874374e6b9b11ae4d9ea): remove support for `out` argument

    -   To migrate, users should provide a `Complex128` object, rather than an output array and real and imaginary components.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cflipsign-v0.1.0">

#### [@stdlib/math/base/special/cflipsign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cflipsign)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`5e64296`](https://github.com/stdlib-js/stdlib/commit/5e6429650b779703f2a97f3f0d6d6059645f18a4) - add native addon to `cflipsign` [(#990)](https://github.com/stdlib-js/stdlib/pull/990)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cflipsignf-v0.1.0">

#### [@stdlib/math/base/special/cflipsignf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cflipsignf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloor-v0.1.0">

#### [@stdlib/math/base/special/cfloor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloor)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`8acd137`](https://github.com/stdlib-js/stdlib/commit/8acd137c752eeb2ae4188931b2093a952521df88) - refactor API and add C API to `math/base/special/cfloor` [(#973)](https://github.com/stdlib-js/stdlib/pull/973)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`8acd137`](https://github.com/stdlib-js/stdlib/commit/8acd137c752eeb2ae4188931b2093a952521df88): refactor API by removing `out` argument

    -   To migrate, users should provide a `Complex128` value to `cfloor`.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cfloorn-v0.1.0">

#### [@stdlib/math/base/special/cfloorn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cfloorn)

<details>

<section class="features">

##### Features

-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766) - remove support for `out` argument and add C implementations [(#1003)](https://github.com/stdlib-js/stdlib/pull/1003)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cidentity-v0.1.0">

#### [@stdlib/math/base/special/cidentity](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cidentity)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`02da8f1`](https://github.com/stdlib-js/stdlib/commit/02da8f1bf5eaf7d82fee408e0102cf3374be389b) - add C implementation to `math/base/special/cidentity` [(#976)](https://github.com/stdlib-js/stdlib/pull/976)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cidentityf-v0.1.0">

#### [@stdlib/math/base/special/cidentityf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cidentityf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cinv-v0.1.0">

#### [@stdlib/math/base/special/cinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`70a1973`](https://github.com/stdlib-js/stdlib/commit/70a1973a12dfd37e1cf2b5e28d70db8ed5b527ad) - refactor to remove `out` argument and add C implementation [(#981)](https://github.com/stdlib-js/stdlib/pull/981)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`70a1973`](https://github.com/stdlib-js/stdlib/commit/70a1973a12dfd37e1cf2b5e28d70db8ed5b527ad): remove support for `out` argument and use complex number objects

    -   To migrate, consumers need to use complex number objects.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-clamp-v0.1.0">

#### [@stdlib/math/base/special/clamp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/clamp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-clampf-v0.1.0">

#### [@stdlib/math/base/special/clampf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/clampf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-copysign-v0.1.0">

#### [@stdlib/math/base/special/copysign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/copysign)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-copysignf-v0.1.0">

#### [@stdlib/math/base/special/copysignf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/copysignf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cos-v0.1.0">

#### [@stdlib/math/base/special/cos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosh-v0.1.0">

#### [@stdlib/math/base/special/cosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cosm1-v0.1.0">

#### [@stdlib/math/base/special/cosm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cosm1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cospi-v0.1.0">

#### [@stdlib/math/base/special/cospi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cospi)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cot-v0.1.0">

#### [@stdlib/math/base/special/cot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cot)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-coth-v0.1.0">

#### [@stdlib/math/base/special/coth](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/coth)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-covercos-v0.1.0">

#### [@stdlib/math/base/special/covercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/covercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-coversin-v0.1.0">

#### [@stdlib/math/base/special/coversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/coversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cphase-v0.1.0">

#### [@stdlib/math/base/special/cphase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cphase)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`291afa4`](https://github.com/stdlib-js/stdlib/commit/291afa4b085af5e4eb47d9f1290d227542e391fa) - add C implementation to `math/base/special/cphase` [(#1004)](https://github.com/stdlib-js/stdlib/pull/1004)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cpolar-v0.1.0">

#### [@stdlib/math/base/special/cpolar](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cpolar)

<details>

<section class="features">

##### Features

-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457) - remove support for out argument and add C implementation [(#1067)](https://github.com/stdlib-js/stdlib/pull/1067)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`291afa4`](https://github.com/stdlib-js/stdlib/commit/291afa4b085af5e4eb47d9f1290d227542e391fa) - add C implementation to `math/base/special/cphase` [(#1004)](https://github.com/stdlib-js/stdlib/pull/1004)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457): remove support for out argument

    -   In order to migrate, users should provide a complex number object as an input argument and handle a complex number object as a return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-cround-v0.1.0">

#### [@stdlib/math/base/special/cround](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cround)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`bf938e6`](https://github.com/stdlib-js/stdlib/commit/bf938e61e33c5462b6ff7ae0afb1028d16308353) - refactor to support Complex128 and add C implementation [(#1007)](https://github.com/stdlib-js/stdlib/pull/1007)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`bf938e6`](https://github.com/stdlib-js/stdlib/commit/bf938e61e33c5462b6ff7ae0afb1028d16308353): refactor to support Complex128

    -   To migrate, end users will need to provide a Complex128 object.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-croundn-v0.1.0">

#### [@stdlib/math/base/special/croundn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/croundn)

<details>

<section class="features">

##### Features

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774): remove support for `out` argument

    -   To migrate, users should provide a complex number object and handle a complex number object return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csch-v0.1.0">

#### [@stdlib/math/base/special/csch](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csch)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-csignum-v0.1.0">

#### [@stdlib/math/base/special/csignum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/csignum)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`35ef1b1`](https://github.com/stdlib-js/stdlib/commit/35ef1b108b7a2737f71db7b3e18af105b43e72ac) - add C implementation to `math/base/special/csignum` [(#1010)](https://github.com/stdlib-js/stdlib/pull/1010)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-deg2rad-v0.1.0">

#### [@stdlib/math/base/special/deg2rad](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/deg2rad)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-deg2radf-v0.1.0">

#### [@stdlib/math/base/special/deg2radf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/deg2radf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-digamma-v0.1.0">

#### [@stdlib/math/base/special/digamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/digamma)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirac-delta-v0.1.0">

#### [@stdlib/math/base/special/dirac-delta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirac-delta)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-dirichlet-eta-v0.1.0">

#### [@stdlib/math/base/special/dirichlet-eta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/dirichlet-eta)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ellipe-v0.1.0">

#### [@stdlib/math/base/special/ellipe](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ellipe)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ellipj-v0.1.0">

#### [@stdlib/math/base/special/ellipj](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ellipj)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ellipk-v0.1.0">

#### [@stdlib/math/base/special/ellipk](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ellipk)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erf-v0.1.0">

#### [@stdlib/math/base/special/erf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfc-v0.1.0">

#### [@stdlib/math/base/special/erfc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfcinv-v0.1.0">

#### [@stdlib/math/base/special/erfcinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfcinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfcx-v0.1.0">

#### [@stdlib/math/base/special/erfcx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfcx)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-erfinv-v0.1.0">

#### [@stdlib/math/base/special/erfinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erfinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp-v0.1.0">

#### [@stdlib/math/base/special/exp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp10-v0.1.0">

#### [@stdlib/math/base/special/exp10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-exp2-v0.1.0">

#### [@stdlib/math/base/special/exp2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/exp2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expit-v0.1.0">

#### [@stdlib/math/base/special/expit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expit)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expm1-v0.1.0">

#### [@stdlib/math/base/special/expm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expm1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-expm1rel-v0.1.0">

#### [@stdlib/math/base/special/expm1rel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/expm1rel)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorial-v0.1.0">

#### [@stdlib/math/base/special/factorial](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorial)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-factorialln-v0.1.0">

#### [@stdlib/math/base/special/factorialln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/factorialln)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-falling-factorial-v0.1.0">

#### [@stdlib/math/base/special/falling-factorial](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/falling-factorial)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-v0.1.0">

#### [@stdlib/math/base/special/fast](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-abs-v0.1.0">

#### [@stdlib/math/base/special/fast/abs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/abs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-acosh-v0.1.0">

#### [@stdlib/math/base/special/fast/acosh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/acosh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-alpha-max-plus-beta-min-v0.1.0">

#### [@stdlib/math/base/special/fast/alpha-max-plus-beta-min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/alpha-max-plus-beta-min)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-asinh-v0.1.0">

#### [@stdlib/math/base/special/fast/asinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/asinh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-atanh-v0.1.0">

#### [@stdlib/math/base/special/fast/atanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/atanh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-hypot-v0.1.0">

#### [@stdlib/math/base/special/fast/hypot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/hypot)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-max-v0.1.0">

#### [@stdlib/math/base/special/fast/max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/max)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-min-v0.1.0">

#### [@stdlib/math/base/special/fast/min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/min)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-pow-int-v0.1.0">

#### [@stdlib/math/base/special/fast/pow-int](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/pow-int)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-uint32-log2-v0.1.0">

#### [@stdlib/math/base/special/fast/uint32-log2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/uint32-log2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fast-uint32-sqrt-v0.1.0">

#### [@stdlib/math/base/special/fast/uint32-sqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fast/uint32-sqrt)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-v0.1.0">

#### [@stdlib/math/base/special/fibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fibonacci-index-v0.1.0">

#### [@stdlib/math/base/special/fibonacci-index](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fibonacci-index)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-flipsign-v0.1.0">

#### [@stdlib/math/base/special/flipsign](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/flipsign)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-flipsignf-v0.1.0">

#### [@stdlib/math/base/special/flipsignf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/flipsignf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floor-v0.1.0">

#### [@stdlib/math/base/special/floor](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floor10-v0.1.0">

#### [@stdlib/math/base/special/floor10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floor2-v0.1.0">

#### [@stdlib/math/base/special/floor2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floor2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorb-v0.1.0">

#### [@stdlib/math/base/special/floorb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorb)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorf-v0.1.0">

#### [@stdlib/math/base/special/floorf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorn-v0.1.0">

#### [@stdlib/math/base/special/floorn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorn)

<details>

<section class="features">

##### Features

-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766) - remove support for `out` argument and add C implementations [(#1003)](https://github.com/stdlib-js/stdlib/pull/1003)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-floorsd-v0.1.0">

#### [@stdlib/math/base/special/floorsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/floorsd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnel-v0.1.0">

#### [@stdlib/math/base/special/fresnel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnel)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnelc-v0.1.0">

#### [@stdlib/math/base/special/fresnelc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnelc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-fresnels-v0.1.0">

#### [@stdlib/math/base/special/fresnels](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/fresnels)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-frexp-v0.1.0">

#### [@stdlib/math/base/special/frexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/frexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-v0.1.0">

#### [@stdlib/math/base/special/gamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-delta-ratio-v0.1.0">

#### [@stdlib/math/base/special/gamma-delta-ratio](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-delta-ratio)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-lanczos-sum-v0.1.0">

#### [@stdlib/math/base/special/gamma-lanczos-sum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-lanczos-sum)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma-lanczos-sum-expg-scaled-v0.1.0">

#### [@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma-lanczos-sum-expg-scaled)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gamma1pm1-v0.1.0">

#### [@stdlib/math/base/special/gamma1pm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma1pm1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammainc-v0.1.0">

#### [@stdlib/math/base/special/gammainc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammainc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`1250f8e`](https://github.com/stdlib-js/stdlib/commit/1250f8e64e4f08ec0ca4a9143fc6c49d0f793bd4) - use log1pmx for better numerical accuracy

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammaincinv-v0.1.0">

#### [@stdlib/math/base/special/gammaincinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammaincinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammaln-v0.1.0">

#### [@stdlib/math/base/special/gammaln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammaln)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gammasgn-v0.1.0">

#### [@stdlib/math/base/special/gammasgn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gammasgn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-gcd-v0.1.0">

#### [@stdlib/math/base/special/gcd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gcd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacovercos-v0.1.0">

#### [@stdlib/math/base/special/hacovercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacovercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hacoversin-v0.1.0">

#### [@stdlib/math/base/special/hacoversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hacoversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-havercos-v0.1.0">

#### [@stdlib/math/base/special/havercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/havercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-haversin-v0.1.0">

#### [@stdlib/math/base/special/haversin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/haversin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-heaviside-v0.1.0">

#### [@stdlib/math/base/special/heaviside](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/heaviside)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hypot-v0.1.0">

#### [@stdlib/math/base/special/hypot](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hypot)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-hypotf-v0.1.0">

#### [@stdlib/math/base/special/hypotf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/hypotf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-identity-v0.1.0">

#### [@stdlib/math/base/special/identity](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/identity)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-identityf-v0.1.0">

#### [@stdlib/math/base/special/identityf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/identityf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-inv-v0.1.0">

#### [@stdlib/math/base/special/inv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/inv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-invf-v0.1.0">

#### [@stdlib/math/base/special/invf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/invf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-betainc-v0.1.0">

#### [@stdlib/math/base/special/kernel-betainc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-betainc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-betaincinv-v0.1.0">

#### [@stdlib/math/base/special/kernel-betaincinv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-betaincinv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-cos-v0.1.0">

#### [@stdlib/math/base/special/kernel-cos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-cos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-sin-v0.1.0">

#### [@stdlib/math/base/special/kernel-sin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-sin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kernel-tan-v0.1.0">

#### [@stdlib/math/base/special/kernel-tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kernel-tan)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kronecker-delta-v0.1.0">

#### [@stdlib/math/base/special/kronecker-delta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kronecker-delta)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-kronecker-deltaf-v0.1.0">

#### [@stdlib/math/base/special/kronecker-deltaf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/kronecker-deltaf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-labs-v0.1.0">

#### [@stdlib/math/base/special/labs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/labs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lcm-v0.1.0">

#### [@stdlib/math/base/special/lcm](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lcm)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ldexp-v0.1.0">

#### [@stdlib/math/base/special/ldexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ldexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ln-v0.1.0">

#### [@stdlib/math/base/special/ln](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ln)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log-v0.1.0">

#### [@stdlib/math/base/special/log](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log10-v0.1.0">

#### [@stdlib/math/base/special/log10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1mexp-v0.1.0">

#### [@stdlib/math/base/special/log1mexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1mexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1p-v0.1.0">

#### [@stdlib/math/base/special/log1p](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1p)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pexp-v0.1.0">

#### [@stdlib/math/base/special/log1pexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log1pmx-v0.1.0">

#### [@stdlib/math/base/special/log1pmx](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log1pmx)

<details>

<section class="features">

##### Features

-   [`6c064a1`](https://github.com/stdlib-js/stdlib/commit/6c064a13367342a38c7f1b8fd0fd2a8dd80243c4) - add log1pmx special function

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`d2d66a7`](https://github.com/stdlib-js/stdlib/commit/d2d66a7454cb0f4feaeef3cb4f762471aa64770d) - use series expansion to match Boost implementation

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-log2-v0.1.0">

#### [@stdlib/math/base/special/log2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/log2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logaddexp-v0.1.0">

#### [@stdlib/math/base/special/logaddexp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logaddexp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-logit-v0.1.0">

#### [@stdlib/math/base/special/logit](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/logit)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-lucas-v0.1.0">

#### [@stdlib/math/base/special/lucas](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/lucas)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`e3fcd52`](https://github.com/stdlib-js/stdlib/commit/e3fcd52480d170f13da8852d120bfd177cb3351c) - add C API to `@stdlib/math-base/special/lucas` [(#931)](https://github.com/stdlib-js/stdlib/pull/931)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#892](https://github.com/stdlib-js/stdlib/issues/892)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-max-v0.1.0">

#### [@stdlib/math/base/special/max](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/max)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabs-v0.1.0">

#### [@stdlib/math/base/special/maxabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxabsn-v0.1.0">

#### [@stdlib/math/base/special/maxabsn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxabsn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-maxn-v0.1.0">

#### [@stdlib/math/base/special/maxn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/maxn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-min-v0.1.0">

#### [@stdlib/math/base/special/min](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/min)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabs-v0.1.0">

#### [@stdlib/math/base/special/minabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minabsn-v0.1.0">

#### [@stdlib/math/base/special/minabsn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minabsn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minmax-v0.1.0">

#### [@stdlib/math/base/special/minmax](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minmax)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minmaxabs-v0.1.0">

#### [@stdlib/math/base/special/minmaxabs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minmaxabs)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minmaxabsn-v0.1.0">

#### [@stdlib/math/base/special/minmaxabsn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minmaxabsn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minmaxn-v0.1.0">

#### [@stdlib/math/base/special/minmaxn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minmaxn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-minn-v0.1.0">

#### [@stdlib/math/base/special/minn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/minn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-modf-v0.1.0">

#### [@stdlib/math/base/special/modf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/modf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negafibonacci-v0.1.0">

#### [@stdlib/math/base/special/negafibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negafibonacci)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-negalucas-v0.1.0">

#### [@stdlib/math/base/special/negalucas](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/negalucas)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`60429f5`](https://github.com/stdlib-js/stdlib/commit/60429f55de228f0d415751a1f3292b2cac123600) - add C API to `@stdlib/math-base/special/negalucas` [(#913)](https://github.com/stdlib-js/stdlib/pull/913)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#893](https://github.com/stdlib-js/stdlib/issues/893)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-nonfibonacci-v0.1.0">

#### [@stdlib/math/base/special/nonfibonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/nonfibonacci)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-pdiff-v0.1.0">

#### [@stdlib/math/base/special/pdiff](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/pdiff)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-pdifff-v0.1.0">

#### [@stdlib/math/base/special/pdifff](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/pdifff)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-polygamma-v0.1.0">

#### [@stdlib/math/base/special/polygamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/polygamma)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-pow-v0.1.0">

#### [@stdlib/math/base/special/pow](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/pow)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-powm1-v0.1.0">

#### [@stdlib/math/base/special/powm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/powm1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rad2deg-v0.1.0">

#### [@stdlib/math/base/special/rad2deg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rad2deg)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-ramp-v0.1.0">

#### [@stdlib/math/base/special/ramp](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ramp)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rampf-v0.1.0">

#### [@stdlib/math/base/special/rampf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rampf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rcbrt-v0.1.0">

#### [@stdlib/math/base/special/rcbrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rcbrt)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rempio2-v0.1.0">

#### [@stdlib/math/base/special/rempio2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rempio2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-riemann-zeta-v0.1.0">

#### [@stdlib/math/base/special/riemann-zeta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/riemann-zeta)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rising-factorial-v0.1.0">

#### [@stdlib/math/base/special/rising-factorial](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rising-factorial)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round-v0.1.0">

#### [@stdlib/math/base/special/round](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round10-v0.1.0">

#### [@stdlib/math/base/special/round10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-round2-v0.1.0">

#### [@stdlib/math/base/special/round2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/round2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundb-v0.1.0">

#### [@stdlib/math/base/special/roundb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundb)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundn-v0.1.0">

#### [@stdlib/math/base/special/roundn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundn)

<details>

<section class="features">

##### Features

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774): remove support for `out` argument

    -   To migrate, users should provide a complex number object and handle a complex number object return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-roundsd-v0.1.0">

#### [@stdlib/math/base/special/roundsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundsd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rsqrt-v0.1.0">

#### [@stdlib/math/base/special/rsqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rsqrt)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-rsqrtf-v0.1.0">

#### [@stdlib/math/base/special/rsqrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/rsqrtf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sici-v0.1.0">

#### [@stdlib/math/base/special/sici](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sici)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-signum-v0.1.0">

#### [@stdlib/math/base/special/signum](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/signum)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-signumf-v0.1.0">

#### [@stdlib/math/base/special/signumf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/signumf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sin-v0.1.0">

#### [@stdlib/math/base/special/sin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinc-v0.1.0">

#### [@stdlib/math/base/special/sinc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincos-v0.1.0">

#### [@stdlib/math/base/special/sincos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sincospi-v0.1.0">

#### [@stdlib/math/base/special/sincospi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sincospi)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinh-v0.1.0">

#### [@stdlib/math/base/special/sinh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sinpi-v0.1.0">

#### [@stdlib/math/base/special/sinpi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sinpi)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-spence-v0.1.0">

#### [@stdlib/math/base/special/spence](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/spence)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrt-v0.1.0">

#### [@stdlib/math/base/special/sqrt](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrt)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrt1pm1-v0.1.0">

#### [@stdlib/math/base/special/sqrt1pm1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrt1pm1)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrtf-v0.1.0">

#### [@stdlib/math/base/special/sqrtf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrtf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-sqrtpi-v0.1.0">

#### [@stdlib/math/base/special/sqrtpi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sqrtpi)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tan-v0.1.0">

#### [@stdlib/math/base/special/tan](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tan)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tanh-v0.1.0">

#### [@stdlib/math/base/special/tanh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tanh)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-tribonacci-v0.1.0">

#### [@stdlib/math/base/special/tribonacci](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/tribonacci)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`74b2352`](https://github.com/stdlib-js/stdlib/commit/74b235240970eb51397e4ba1601386d093f4b5e9) - add C API for `@stdlib/math-base/special/tribonacci` [(#903)](https://github.com/stdlib-js/stdlib/pull/903)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#895](https://github.com/stdlib-js/stdlib/issues/895)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trigamma-v0.1.0">

#### [@stdlib/math/base/special/trigamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trigamma)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc-v0.1.0">

#### [@stdlib/math/base/special/trunc](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc10-v0.1.0">

#### [@stdlib/math/base/special/trunc10](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc10)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-trunc2-v0.1.0">

#### [@stdlib/math/base/special/trunc2](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/trunc2)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncb-v0.1.0">

#### [@stdlib/math/base/special/truncb](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncb)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncf-v0.1.0">

#### [@stdlib/math/base/special/truncf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncn-v0.1.0">

#### [@stdlib/math/base/special/truncn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncn)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-truncsd-v0.1.0">

#### [@stdlib/math/base/special/truncsd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/truncsd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-vercos-v0.1.0">

#### [@stdlib/math/base/special/vercos](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/vercos)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-versin-v0.1.0">

#### [@stdlib/math/base/special/versin](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/versin)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-wrap-v0.1.0">

#### [@stdlib/math/base/special/wrap](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/wrap)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-xlog1py-v0.1.0">

#### [@stdlib/math/base/special/xlog1py](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/xlog1py)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-special-xlogy-v0.1.0">

#### [@stdlib/math/base/special/xlogy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/xlogy)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`ee45a06`](https://github.com/stdlib-js/stdlib/commit/ee45a06eabd944613bb10ce3a058dc19d9b30f77): refactor complex number APIs

    -   To migrate, users should use and handle `Complex128` instances, rather than separate real and imaginary components.

-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a): remove `out` argument support

    -   To migrate, users who previously provided an output array in which to write real and imaginary components should update to provide a complex number as input and to handle a complex number as output.

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774): remove support for `out` argument

    -   To migrate, users should provide a complex number object and handle a complex number object return value.

-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457): remove support for out argument

    -   In order to migrate, users should provide a complex number object as an input argument and handle a complex number object as a return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`0a0d792`](https://github.com/stdlib-js/stdlib/commit/0a0d7927e3c277af2bce9dc8cff861f4168cfb80): remove `out` argument support and use complex number objects

    -   To migrate, consumers will need to refactor to use complex number objects for input arguments and output values.

-   [`70a1973`](https://github.com/stdlib-js/stdlib/commit/70a1973a12dfd37e1cf2b5e28d70db8ed5b527ad): remove support for `out` argument and use complex number objects

    -   To migrate, consumers need to use complex number objects.

-   [`bf938e6`](https://github.com/stdlib-js/stdlib/commit/bf938e61e33c5462b6ff7ae0afb1028d16308353): refactor to support Complex128

    -   To migrate, end users will need to provide a Complex128 object.

-   [`5318182`](https://github.com/stdlib-js/stdlib/commit/5318182b059207761c0e874374e6b9b11ae4d9ea): remove support for `out` argument

    -   To migrate, users should provide a `Complex128` object, rather than an output array and real and imaginary components.

-   [`8acd137`](https://github.com/stdlib-js/stdlib/commit/8acd137c752eeb2ae4188931b2093a952521df88): refactor API by removing `out` argument

    -   To migrate, users should provide a `Complex128` value to `cfloor`.

-   [`4ca9916`](https://github.com/stdlib-js/stdlib/commit/4ca9916461225adfbebd0a9d1999756ff1277415): migrate to using stdlib complex number types

    -   To migrate, users need to change `double complex` to `stdlib_complex128_t`.

-   [`119e99d`](https://github.com/stdlib-js/stdlib/commit/119e99d1292c6f6652fb6cbbe2329b35ad7797ba): migrate to using stdlib complex number types

    -   To migrate, users need to change `double complex` to `stdlib_complex128_t`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 3 issues were closed in this release:

[#892](https://github.com/stdlib-js/stdlib/issues/892), [#893](https://github.com/stdlib-js/stdlib/issues/893), [#895](https://github.com/stdlib-js/stdlib/issues/895)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jordan Gallivan
-   Philipp Burckhardt
-   Pranav Goswami
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`d0363d3`](https://github.com/stdlib-js/stdlib/commit/d0363d384997bbe060d6df4f436e417aa21c9c5d) - **chore:** update package meta data [(#1107)](https://github.com/stdlib-js/stdlib/pull/1107) _(by stdlib-bot, Athan Reines)_
-   [`0244455`](https://github.com/stdlib-js/stdlib/commit/02444557ee848381dce6c067784c4592669228fb) - **docs:** update namespace table of contents [(#1105)](https://github.com/stdlib-js/stdlib/pull/1105) _(by stdlib-bot, Athan Reines)_
-   [`ee45a06`](https://github.com/stdlib-js/stdlib/commit/ee45a06eabd944613bb10ce3a058dc19d9b30f77) - **feat:** update namespace TypeScript declarations [(#1103)](https://github.com/stdlib-js/stdlib/pull/1103) _(by stdlib-bot, Athan Reines)_
-   [`e627b29`](https://github.com/stdlib-js/stdlib/commit/e627b29f2f35ca07e0780eeb16088b4db4e2d766) - **feat:** remove support for `out` argument and add C implementations [(#1003)](https://github.com/stdlib-js/stdlib/pull/1003) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`141b0fd`](https://github.com/stdlib-js/stdlib/commit/141b0fd0b248ea0d68e126fb2d6920080000833a) - **feat:** remove `out` argument support and add C implementations [(#988)](https://github.com/stdlib-js/stdlib/pull/988) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`4f2310d`](https://github.com/stdlib-js/stdlib/commit/4f2310de3494fe36f4b74db309593f63e9d24dcc) - **docs:** update namespace table of contents  [(#1102)](https://github.com/stdlib-js/stdlib/pull/1102 ) _(by stdlib-bot)_
-   [`e18b248`](https://github.com/stdlib-js/stdlib/commit/e18b248464425863019a841795a7e5fc7d01d0ea) - **feat:** update namespace TypeScript declarations [(#1100)](https://github.com/stdlib-js/stdlib/pull/1100) _(by stdlib-bot, Athan Reines)_
-   [`d2d66a7`](https://github.com/stdlib-js/stdlib/commit/d2d66a7454cb0f4feaeef3cb4f762471aa64770d) - **fix:** use series expansion to match Boost implementation _(by Philipp Burckhardt)_
-   [`1250f8e`](https://github.com/stdlib-js/stdlib/commit/1250f8e64e4f08ec0ca4a9143fc6c49d0f793bd4) - **fix:** use log1pmx for better numerical accuracy _(by Philipp Burckhardt)_
-   [`2e858d4`](https://github.com/stdlib-js/stdlib/commit/2e858d41b56f73ba68f58653b798fcb534d75910) - **feat:** add log1pmx to namespace _(by Philipp Burckhardt)_
-   [`6c064a1`](https://github.com/stdlib-js/stdlib/commit/6c064a13367342a38c7f1b8fd0fd2a8dd80243c4) - **feat:** add log1pmx special function _(by Philipp Burckhardt)_
-   [`c244466`](https://github.com/stdlib-js/stdlib/commit/c2444664e2c668563b5842d066a74148b1d2ff76) - **chore:** update package meta data [(#1093)](https://github.com/stdlib-js/stdlib/pull/1093) _(by stdlib-bot, Athan Reines)_
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - **feat:** update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089) _(by stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`a92aae0`](https://github.com/stdlib-js/stdlib/commit/a92aae06191187aa30abc3213a14e997abda032c) - **docs:** update namespace table of contents [(#1091)](https://github.com/stdlib-js/stdlib/pull/1091) _(by stdlib-bot, Athan Reines)_
-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - **feat:** remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457) - **feat:** remove support for out argument and add C implementation [(#1067)](https://github.com/stdlib-js/stdlib/pull/1067) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`349fd18`](https://github.com/stdlib-js/stdlib/commit/349fd18ad00c02e8716257b3e9c7ff28bd1b4359) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`38a6047`](https://github.com/stdlib-js/stdlib/commit/38a604780563d434371ba646dbbc463530be790d) - **docs:** update JSDoc comment formatting _(by Philipp Burckhardt)_
-   [`a37ebe2`](https://github.com/stdlib-js/stdlib/commit/a37ebe2b277b2b54f00377b8582d309c65ec33ce) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`b734544`](https://github.com/stdlib-js/stdlib/commit/b734544a52783cb7f5cf1115f4355cabe46d0abe) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`40f61ce`](https://github.com/stdlib-js/stdlib/commit/40f61ce15c44d1f5a0dfa12f95392a0976c5b161) - **chore:** update package meta data [(#1071)](https://github.com/stdlib-js/stdlib/pull/1071) _(by stdlib-bot, Athan Reines)_
-   [`a3a1f56`](https://github.com/stdlib-js/stdlib/commit/a3a1f567ff196b95634982575278a54e27e4f99b) - **docs:** update namespace table of contents [(#1070)](https://github.com/stdlib-js/stdlib/pull/1070) _(by stdlib-bot, Athan Reines)_
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - **feat:** update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068) _(by stdlib-bot, Athan Reines)_
-   [`0a0d792`](https://github.com/stdlib-js/stdlib/commit/0a0d7927e3c277af2bce9dc8cff861f4168cfb80) - **feat:** refactor to remove `out` argument and add C implementation [(#970)](https://github.com/stdlib-js/stdlib/pull/970) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`70a1973`](https://github.com/stdlib-js/stdlib/commit/70a1973a12dfd37e1cf2b5e28d70db8ed5b527ad) - **feat:** refactor to remove `out` argument and add C implementation [(#981)](https://github.com/stdlib-js/stdlib/pull/981) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`a1d78a7`](https://github.com/stdlib-js/stdlib/commit/a1d78a7791dbdee5f27e8eee15e740510e3a2013) - **style:** fix indentation in `manifest.json` files [(#1063)](https://github.com/stdlib-js/stdlib/pull/1063) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`705da11`](https://github.com/stdlib-js/stdlib/commit/705da11230b151a494464b29a9940a43e84aec1b) - **chore:** update package meta data [(#1053)](https://github.com/stdlib-js/stdlib/pull/1053) _(by stdlib-bot, Athan Reines)_
-   [`5a63be9`](https://github.com/stdlib-js/stdlib/commit/5a63be98ae693437705cf899e9b60d95e021c355) - **docs:** update namespace table of contents [(#1050)](https://github.com/stdlib-js/stdlib/pull/1050) _(by stdlib-bot, Athan Reines)_
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - **feat:** update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047) _(by stdlib-bot, Athan Reines)_
-   [`02da8f1`](https://github.com/stdlib-js/stdlib/commit/02da8f1bf5eaf7d82fee408e0102cf3374be389b) - **feat:** add C implementation to `math/base/special/cidentity` [(#976)](https://github.com/stdlib-js/stdlib/pull/976) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`bf938e6`](https://github.com/stdlib-js/stdlib/commit/bf938e61e33c5462b6ff7ae0afb1028d16308353) - **feat:** refactor to support Complex128 and add C implementation [(#1007)](https://github.com/stdlib-js/stdlib/pull/1007) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`291afa4`](https://github.com/stdlib-js/stdlib/commit/291afa4b085af5e4eb47d9f1290d227542e391fa) - **feat:** add C implementation to `math/base/special/cphase` [(#1004)](https://github.com/stdlib-js/stdlib/pull/1004) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`35ef1b1`](https://github.com/stdlib-js/stdlib/commit/35ef1b108b7a2737f71db7b3e18af105b43e72ac) - **feat:** add C implementation to `math/base/special/csignum` [(#1010)](https://github.com/stdlib-js/stdlib/pull/1010) _(by Stephannie Jiménez Gacha)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`b5aed7a`](https://github.com/stdlib-js/stdlib/commit/b5aed7a56b1d4bf200c87aa04bc0638b6a038235) - **docs:** update heading to match alias _(by Athan Reines)_
-   [`5e64296`](https://github.com/stdlib-js/stdlib/commit/5e6429650b779703f2a97f3f0d6d6059645f18a4) - **feat:** add native addon to `cflipsign` [(#990)](https://github.com/stdlib-js/stdlib/pull/990) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`5363054`](https://github.com/stdlib-js/stdlib/commit/536305400d60ff7450198139f2f9aef9eb06581a) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`b9e414a`](https://github.com/stdlib-js/stdlib/commit/b9e414a8958f7e59ebf824db6923eb6aba0010a0) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`bdb7d4f`](https://github.com/stdlib-js/stdlib/commit/bdb7d4f9c184905a257d878c5219c1168acf1a12) - **chore:** update package meta data [(#1002)](https://github.com/stdlib-js/stdlib/pull/1002) _(by stdlib-bot, Athan Reines)_
-   [`01210b5`](https://github.com/stdlib-js/stdlib/commit/01210b51f684cae737bd69ac7822b8d52cbc157a) - **docs:** update namespace table of contents [(#1000)](https://github.com/stdlib-js/stdlib/pull/1000) _(by stdlib-bot, Athan Reines)_
-   [`dbe8245`](https://github.com/stdlib-js/stdlib/commit/dbe82457fcd7ff30d8ebcdb829cbbebdd3a7a193) - **docs:** update namespace TypeScript declarations [(#998)](https://github.com/stdlib-js/stdlib/pull/998) _(by stdlib-bot, Athan Reines)_
-   [`a36b160`](https://github.com/stdlib-js/stdlib/commit/a36b160369dcac098c064e78245e4437008885d2) - **docs:** update namespace table of contents [(#995)](https://github.com/stdlib-js/stdlib/pull/995) _(by stdlib-bot, Athan Reines)_
-   [`5318182`](https://github.com/stdlib-js/stdlib/commit/5318182b059207761c0e874374e6b9b11ae4d9ea) - **feat:** refactor API and add C API to `math/base/special/cexp` [(#972)](https://github.com/stdlib-js/stdlib/pull/972) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`adc0378`](https://github.com/stdlib-js/stdlib/commit/adc037897e98e120616fcbb0d854ff8b24445b6d) - **docs:** update namespace TypeScript declarations [(#993)](https://github.com/stdlib-js/stdlib/pull/993) _(by stdlib-bot, Athan Reines)_
-   [`8acd137`](https://github.com/stdlib-js/stdlib/commit/8acd137c752eeb2ae4188931b2093a952521df88) - **feat:** refactor API and add C API to `math/base/special/cfloor` [(#973)](https://github.com/stdlib-js/stdlib/pull/973) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_
-   [`2226dae`](https://github.com/stdlib-js/stdlib/commit/2226daec22d063b09e52efb6f3fbcfae623aadce) - **fix:** skip test if native addon is not available _(by Philipp Burckhardt)_
-   [`bf54e9e`](https://github.com/stdlib-js/stdlib/commit/bf54e9e7e11b8107a90e60ce1a284d4c52547f17) - **docs:** render equation via math code block _(by Philipp Burckhardt)_
-   [`01a8ecb`](https://github.com/stdlib-js/stdlib/commit/01a8ecbc37710514cf17d17f12d29cef3affd9c2) - **chore:** update package meta data [(#967)](https://github.com/stdlib-js/stdlib/pull/967) _(by stdlib-bot, Athan Reines)_
-   [`e3fcd52`](https://github.com/stdlib-js/stdlib/commit/e3fcd52480d170f13da8852d120bfd177cb3351c) - **feat:** add C API to `@stdlib/math-base/special/lucas` [(#931)](https://github.com/stdlib-js/stdlib/pull/931) _(by Jordan Gallivan, Athan Reines)_
-   [`60429f5`](https://github.com/stdlib-js/stdlib/commit/60429f55de228f0d415751a1f3292b2cac123600) - **feat:** add C API to `@stdlib/math-base/special/negalucas` [(#913)](https://github.com/stdlib-js/stdlib/pull/913) _(by Jordan Gallivan, Pranav, Athan Reines)_
-   [`46c483d`](https://github.com/stdlib-js/stdlib/commit/46c483db80bda899ff9283f8a1e51a0c14321842) - **docs:** fix missing documentation and fix example return value _(by Athan Reines)_
-   [`4ca9916`](https://github.com/stdlib-js/stdlib/commit/4ca9916461225adfbebd0a9d1999756ff1277415) - **feat:** migrate to using stdlib complex number types [(#916)](https://github.com/stdlib-js/stdlib/pull/916) _(by Stephannie Jiménez Gacha)_
-   [`119e99d`](https://github.com/stdlib-js/stdlib/commit/119e99d1292c6f6652fb6cbbe2329b35ad7797ba) - **feat:** migrate to using stdlib complex number types [(#912)](https://github.com/stdlib-js/stdlib/pull/912) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`20f8809`](https://github.com/stdlib-js/stdlib/commit/20f8809022581a74a0d7d9643840c4ae7e7de7b5) - **chore:** update package meta data [(#911)](https://github.com/stdlib-js/stdlib/pull/911) _(by stdlib-bot, Athan Reines)_
-   [`74b2352`](https://github.com/stdlib-js/stdlib/commit/74b235240970eb51397e4ba1601386d093f4b5e9) - **feat:** add C API for `@stdlib/math-base/special/tribonacci` [(#903)](https://github.com/stdlib-js/stdlib/pull/903) _(by Jordan Gallivan, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-17)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.96">

## 0.0.96 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

