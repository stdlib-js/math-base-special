cmd_Release/obj.target/addon.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=addon.node -o Release/obj.target/addon.node -Wl,--start-group Release/obj.target/addon/src/addon.o Release/obj.target/addon/src/abs2f.o Release/obj.target/addon/../../napi/unary/src/main.o -Wl,--end-group 
