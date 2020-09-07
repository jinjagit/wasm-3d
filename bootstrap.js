/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/wasm_3d_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_3d_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e8f84259147dce74": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_instanceof_Window_e8f84259147dce74"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_d3b6d86af1c5d199": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_document_d3b6d86af1c5d199"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_71dfbba1688677b0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getElementById_71dfbba1688677b0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGlRenderingContext_b25acea07fa8a767": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_instanceof_WebGlRenderingContext_b25acea07fa8a767"](p0i32);
/******/ 					},
/******/ 					"__wbg_bufferData_bbb4fad8241073de": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_bufferData_bbb4fad8241073de"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniformMatrix4fv_587c4710f3d658e8": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_uniformMatrix4fv_587c4710f3d658e8"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_attachShader_d87c96f460f4eb6e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_attachShader_d87c96f460f4eb6e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_449cd5290cdcf8fc": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_bindBuffer_449cd5290cdcf8fc"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_blendFunc_29bd12994d15280b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_blendFunc_29bd12994d15280b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clear_cef7e1e0e1ba5465": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_clear_cef7e1e0e1ba5465"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_1010eed213a6cae8": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_clearColor_1010eed213a6cae8"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_clearDepth_da72d099bbf4f23c": function(p0i32,p1f32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_clearDepth_da72d099bbf4f23c"](p0i32,p1f32);
/******/ 					},
/******/ 					"__wbg_compileShader_5d4e462508b1515e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_compileShader_5d4e462508b1515e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_e8cf486cca25f5ed": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_createBuffer_e8cf486cca25f5ed"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_74d233ba41538562": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_createProgram_74d233ba41538562"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_c35e740afca0efee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_createShader_c35e740afca0efee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_1b1b532115644466": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_drawArrays_1b1b532115644466"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_drawElements_aea82c3e1c9ef971": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_drawElements_aea82c3e1c9ef971"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_enable_661b8ab579bd9c69": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_enable_661b8ab579bd9c69"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_eda4ec3cc346806e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_enableVertexAttribArray_eda4ec3cc346806e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_22b088fe758b29aa": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getProgramInfoLog_22b088fe758b29aa"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_328434b297539fba": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getProgramParameter_328434b297539fba"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_1310dfc6a6714341": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getShaderInfoLog_1310dfc6a6714341"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_c0c9b057b37ad55c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getShaderParameter_c0c9b057b37ad55c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getUniformLocation_356ed70052165dab": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getUniformLocation_356ed70052165dab"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_413f1735416682a4": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_linkProgram_413f1735416682a4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_e95e88c01a88e78d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_shaderSource_e95e88c01a88e78d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniform1f_8702b2439184a87a": function(p0i32,p1i32,p2f32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_uniform1f_8702b2439184a87a"](p0i32,p1i32,p2f32);
/******/ 					},
/******/ 					"__wbg_uniform4f_56ba9fda0aa89e95": function(p0i32,p1i32,p2f32,p3f32,p4f32,p5f32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_uniform4f_56ba9fda0aa89e95"](p0i32,p1i32,p2f32,p3f32,p4f32,p5f32);
/******/ 					},
/******/ 					"__wbg_useProgram_0172835766dd7682": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_useProgram_0172835766dd7682"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_9b02a6534c78223e": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_vertexAttribPointer_9b02a6534c78223e"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_d2d7786f00856e0a": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_d2d7786f00856e0a"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_59043a63a2f9266b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_getContext_59043a63a2f9266b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e2fdfe2af14a2323": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_newnoargs_e2fdfe2af14a2323"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_e9f0ce4da840ab94": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_call_e9f0ce4da840ab94"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_8ebfea75c2dd63ee": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_globalThis_8ebfea75c2dd63ee"]();
/******/ 					},
/******/ 					"__wbg_self_179e8c2a5a4c73a3": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_self_179e8c2a5a4c73a3"]();
/******/ 					},
/******/ 					"__wbg_window_492cfe63a6e41dfa": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_window_492cfe63a6e41dfa"]();
/******/ 					},
/******/ 					"__wbg_global_62ea2619f58bf94d": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_global_62ea2619f58bf94d"]();
/******/ 					},
/******/ 					"__wbg_new_7741b4c15e9a2dbe": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_new_7741b4c15e9a2dbe"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_296dd44392ec575c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_subarray_296dd44392ec575c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_dee2c9630b806734": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_length_dee2c9630b806734"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_97dfb1e289e6c216": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_new_97dfb1e289e6c216"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_1a8f82ad8d59d857": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_subarray_1a8f82ad8d59d857"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Memory_5e6e16eae5893a6b": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_instanceof_Memory_5e6e16eae5893a6b"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_88f603259d7a7b82": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbg_buffer_88f603259d7a7b82"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/wasm_3d_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/wasm_3d_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_3d_bg.wasm":"9e145872872e5781c7e9"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ./index.js */ \"./index.js\", 7))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });