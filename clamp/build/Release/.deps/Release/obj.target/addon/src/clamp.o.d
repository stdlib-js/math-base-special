cmd_Release/obj.target/addon/src/clamp.o := cc '-DNODE_GYP_MODULE_NAME=addon' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DBUILDING_NODE_EXTENSION' -I/home/philipp/.cache/node-gyp/14.15.1/include/node -I/home/philipp/.cache/node-gyp/14.15.1/src -I/home/philipp/.cache/node-gyp/14.15.1/deps/openssl/config -I/home/philipp/.cache/node-gyp/14.15.1/deps/openssl/openssl/include -I/home/philipp/.cache/node-gyp/14.15.1/deps/uv/include -I/home/philipp/.cache/node-gyp/14.15.1/deps/zlib -I/home/philipp/.cache/node-gyp/14.15.1/deps/v8/include -I../include -I../../../napi/ternary/include -I../../../assert/is-nan/include -I../../../assert/is-negative-zero/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -Wall -O3 -fPIC -O3 -fno-omit-frame-pointer -std=c99 -MMD -MF ./Release/.deps/Release/obj.target/addon/src/clamp.o.d.raw   -c -o Release/obj.target/addon/src/clamp.o ../src/clamp.c
Release/obj.target/addon/src/clamp.o: ../src/clamp.c \
 ../include/stdlib/math/base/special/clamp.h \
 ../../../assert/is-nan/include/stdlib/math/base/assert/is_nan.h \
 ../../../assert/is-negative-zero/include/stdlib/math/base/assert/is_negative_zero.h
../src/clamp.c:
../include/stdlib/math/base/special/clamp.h:
../../../assert/is-nan/include/stdlib/math/base/assert/is_nan.h:
../../../assert/is-negative-zero/include/stdlib/math/base/assert/is_negative_zero.h:
