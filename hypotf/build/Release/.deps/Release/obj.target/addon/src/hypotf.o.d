cmd_Release/obj.target/addon/src/hypotf.o := cc '-DNODE_GYP_MODULE_NAME=addon' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DBUILDING_NODE_EXTENSION' -I/home/philipp/.cache/node-gyp/14.15.1/include/node -I/home/philipp/.cache/node-gyp/14.15.1/src -I/home/philipp/.cache/node-gyp/14.15.1/deps/openssl/config -I/home/philipp/.cache/node-gyp/14.15.1/deps/openssl/openssl/include -I/home/philipp/.cache/node-gyp/14.15.1/deps/uv/include -I/home/philipp/.cache/node-gyp/14.15.1/deps/zlib -I/home/philipp/.cache/node-gyp/14.15.1/deps/v8/include -I../include -I../../../napi/binary/include -I../../../assert/is-nanf/include -I../../../assert/is-infinitef/include -I../../sqrtf/include -I../../../napi/unary/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -Wall -O3 -fPIC -O3 -fno-omit-frame-pointer -std=c99 -MMD -MF ./Release/.deps/Release/obj.target/addon/src/hypotf.o.d.raw   -c -o Release/obj.target/addon/src/hypotf.o ../src/hypotf.c
Release/obj.target/addon/src/hypotf.o: ../src/hypotf.c \
 ../include/stdlib/math/base/special/hypotf.h \
 ../../../assert/is-nanf/include/stdlib/math/base/assert/is_nanf.h \
 ../../../assert/is-infinitef/include/stdlib/math/base/assert/is_infinitef.h \
 ../../sqrtf/include/stdlib/math/base/special/sqrtf.h
../src/hypotf.c:
../include/stdlib/math/base/special/hypotf.h:
../../../assert/is-nanf/include/stdlib/math/base/assert/is_nanf.h:
../../../assert/is-infinitef/include/stdlib/math/base/assert/is_infinitef.h:
../../sqrtf/include/stdlib/math/base/special/sqrtf.h:
