var Wu = Object.create;
var Vn = Object.defineProperty;
var Hu = Object.getOwnPropertyDescriptor;
var zu = Object.getOwnPropertyNames;
var Zu = Object.getPrototypeOf, Yu = Object.prototype.hasOwnProperty;
var Kn =
	((e) =>
		typeof require != "undefined"
			? require
			: typeof Proxy != "undefined"
			? new Proxy(e, {
				get: (t, r) => (typeof require != "undefined" ? require : t)[r],
			})
			: e)(function (e) {
			if (typeof require != "undefined") return require.apply(this, arguments);
			throw Error('Dynamic require of "' + e + '" is not supported');
		});
var Dr = (e, t) => () => (e && (t = e(e = 0)), t);
var z = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
	_r = (e, t) => {
		for (var r in t) Vn(e, r, { get: t[r], enumerable: !0 });
	},
	Xu = (e, t, r, n) => {
		if (t && typeof t == "object" || typeof t == "function") {
			for (let o of zu(t)) {
				!Yu.call(e, o) && o !== r && Vn(e, o, {
					get: () => t[o],
					enumerable: !(n = Hu(t, o)) || n.enumerable,
				});
			}
		}
		return e;
	};
var Te = (
	e,
	t,
	r,
) => (r = e != null ? Wu(Zu(e)) : {},
	Xu(
		t || !e || !e.__esModule
			? Vn(r, "default", { value: e, enumerable: !0 })
			: r,
		e,
	));
function L(e) {
	return () => e;
}
function Ie() {
	return y;
}
var y,
	p = Dr(() => {
		"use strict";
		y = {
			abort: L(void 0),
			addListener: L(Ie()),
			allowedNodeEnvironmentFlags: new Set(),
			arch: "x64",
			argv: ["/bin/node"],
			argv0: "node",
			chdir: L(void 0),
			config: {
				target_defaults: {
					cflags: [],
					default_configuration: "",
					defines: [],
					include_dirs: [],
					libraries: [],
				},
				variables: {
					clang: 0,
					host_arch: "x64",
					node_install_npm: !1,
					node_install_waf: !1,
					node_prefix: "",
					node_shared_openssl: !1,
					node_shared_v8: !1,
					node_shared_zlib: !1,
					node_use_dtrace: !1,
					node_use_etw: !1,
					node_use_openssl: !1,
					target_arch: "x64",
					v8_no_strict_aliasing: 0,
					v8_use_snapshot: !1,
					visibility: "",
				},
			},
			connected: !1,
			cpuUsage: () => ({ user: 0, system: 0 }),
			cwd: () => "/",
			debugPort: 0,
			disconnect: L(void 0),
			constrainedMemory: () => {},
			emit: L(Ie()),
			emitWarning: L(void 0),
			env: {},
			eventNames: () => [],
			execArgv: [],
			execPath: "/",
			exit: L(void 0),
			features: {
				inspector: !1,
				debug: !1,
				uv: !1,
				ipv6: !1,
				tls_alpn: !1,
				tls_sni: !1,
				tls_ocsp: !1,
				tls: !1,
			},
			getMaxListeners: L(0),
			getegid: L(0),
			geteuid: L(0),
			getgid: L(0),
			getgroups: L([]),
			getuid: L(0),
			hasUncaughtExceptionCaptureCallback: L(!1),
			hrtime: L([0, 0]),
			platform: "linux",
			kill: L(!0),
			listenerCount: L(0),
			listeners: L([]),
			memoryUsage: L({
				arrayBuffers: 0,
				external: 0,
				heapTotal: 0,
				heapUsed: 0,
				rss: 0,
			}),
			nextTick: (e, ...t) => {
				setTimeout(() => {
					e(...t);
				}, 0);
			},
			off: L(Ie()),
			on: L(Ie()),
			once: L(Ie()),
			openStdin: L({}),
			pid: 0,
			ppid: 0,
			prependListener: L(Ie()),
			prependOnceListener: L(Ie()),
			rawListeners: L([]),
			release: { name: "node" },
			removeAllListeners: L(Ie()),
			removeListener: L(Ie()),
			resourceUsage: L({
				fsRead: 0,
				fsWrite: 0,
				involuntaryContextSwitches: 0,
				ipcReceived: 0,
				ipcSent: 0,
				majorPageFault: 0,
				maxRSS: 0,
				minorPageFault: 0,
				sharedMemorySize: 0,
				signalsCount: 0,
				swappedOut: 0,
				systemCPUTime: 0,
				unsharedDataSize: 0,
				unsharedStackSize: 0,
				userCPUTime: 0,
				voluntaryContextSwitches: 0,
			}),
			setMaxListeners: L(Ie()),
			setUncaughtExceptionCaptureCallback: L(void 0),
			setegid: L(void 0),
			seteuid: L(void 0),
			setgid: L(void 0),
			setgroups: L(void 0),
			setuid: L(void 0),
			stderr: { fd: 2 },
			stdin: { fd: 0 },
			stdout: { fd: 1 },
			title: "node",
			traceDeprecation: !1,
			umask: L(0),
			uptime: L(0),
			version: "",
			versions: {
				http_parser: "",
				node: "",
				v8: "",
				ares: "",
				uv: "",
				zlib: "",
				modules: "",
				openssl: "",
			},
		};
	});
var h,
	f = Dr(() => {
		"use strict";
		h = () => {};
		h.prototype = h;
	});
var Fi = z((St) => {
	"use strict";
	d();
	p();
	f();
	var hi =
			(e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
		el = hi((e) => {
			"use strict";
			e.byteLength = u, e.toByteArray = c, e.fromByteArray = w;
			var t = [],
				r = [],
				n = typeof Uint8Array < "u" ? Uint8Array : Array,
				o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
			for (i = 0, s = o.length; i < s; ++i) t[i] = o[i], r[o.charCodeAt(i)] = i;
			var i, s;
			r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
			function a(E) {
				var x = E.length;
				if (x % 4 > 0) {
					throw new Error("Invalid string. Length must be a multiple of 4");
				}
				var T = E.indexOf("=");
				T === -1 && (T = x);
				var R = T === x ? 0 : 4 - T % 4;
				return [T, R];
			}
			function u(E) {
				var x = a(E), T = x[0], R = x[1];
				return (T + R) * 3 / 4 - R;
			}
			function l(E, x, T) {
				return (x + T) * 3 / 4 - T;
			}
			function c(E) {
				var x,
					T = a(E),
					R = T[0],
					S = T[1],
					C = new n(l(E, R, S)),
					M = 0,
					N = S > 0 ? R - 4 : R,
					B;
				for (B = 0; B < N; B += 4) {
					x = r[E.charCodeAt(B)] << 18 | r[E.charCodeAt(B + 1)] << 12 |
						r[E.charCodeAt(B + 2)] << 6 | r[E.charCodeAt(B + 3)],
						C[M++] = x >> 16 & 255,
						C[M++] = x >> 8 & 255,
						C[M++] = x & 255;
				}
				return S === 2 &&
					(x = r[E.charCodeAt(B)] << 2 | r[E.charCodeAt(B + 1)] >> 4,
						C[M++] = x & 255),
					S === 1 &&
					(x = r[E.charCodeAt(B)] << 10 | r[E.charCodeAt(B + 1)] << 4 |
						r[E.charCodeAt(B + 2)] >> 2,
						C[M++] = x >> 8 & 255,
						C[M++] = x & 255),
					C;
			}
			function m(E) {
				return t[E >> 18 & 63] + t[E >> 12 & 63] + t[E >> 6 & 63] + t[E & 63];
			}
			function g(E, x, T) {
				for (var R, S = [], C = x; C < T; C += 3) {
					R = (E[C] << 16 & 16711680) + (E[C + 1] << 8 & 65280) +
						(E[C + 2] & 255), S.push(m(R));
				}
				return S.join("");
			}
			function w(E) {
				for (
					var x, T = E.length, R = T % 3, S = [], C = 16383, M = 0, N = T - R;
					M < N;
					M += C
				) S.push(g(E, M, M + C > N ? N : M + C));
				return R === 1
					? (x = E[T - 1], S.push(t[x >> 2] + t[x << 4 & 63] + "=="))
					: R === 2 &&
						(x = (E[T - 2] << 8) + E[T - 1],
							S.push(t[x >> 10] + t[x >> 4 & 63] + t[x << 2 & 63] + "=")),
					S.join("");
			}
		}),
		tl = hi((e) => {
			e.read = function (t, r, n, o, i) {
				var s,
					a,
					u = i * 8 - o - 1,
					l = (1 << u) - 1,
					c = l >> 1,
					m = -7,
					g = n ? i - 1 : 0,
					w = n ? -1 : 1,
					E = t[r + g];
				for (
					g += w, s = E & (1 << -m) - 1, E >>= -m, m += u;
					m > 0;
					s = s * 256 + t[r + g], g += w, m -= 8
				);
				for (
					a = s & (1 << -m) - 1, s >>= -m, m += o;
					m > 0;
					a = a * 256 + t[r + g], g += w, m -= 8
				);
				if (s === 0) s = 1 - c;
				else {
					if (s === l) return a ? NaN : (E ? -1 : 1) * (1 / 0);
					a = a + Math.pow(2, o), s = s - c;
				}
				return (E ? -1 : 1) * a * Math.pow(2, s - o);
			},
				e.write = function (t, r, n, o, i, s) {
					var a,
						u,
						l,
						c = s * 8 - i - 1,
						m = (1 << c) - 1,
						g = m >> 1,
						w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						E = o ? 0 : s - 1,
						x = o ? 1 : -1,
						T = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
					for (
						r = Math.abs(r),
							isNaN(r) || r === 1 / 0
								? (u = isNaN(r) ? 1 : 0, a = m)
								: (a = Math.floor(Math.log(r) / Math.LN2),
									r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2),
									a + g >= 1 ? r += w / l : r += w * Math.pow(2, 1 - g),
									r * l >= 2 && (a++, l /= 2),
									a + g >= m
										? (u = 0, a = m)
										: a + g >= 1
										? (u = (r * l - 1) * Math.pow(2, i), a = a + g)
										: (u = r * Math.pow(2, g - 1) * Math.pow(2, i), a = 0));
						i >= 8;
						t[n + E] = u & 255, E += x, u /= 256, i -= 8
					);
					for (
						a = a << i | u, c += i;
						c > 0;
						t[n + E] = a & 255, E += x, a /= 256, c -= 8
					);
					t[n + E - x] |= T * 128;
				};
		}),
		Jn = el(),
		Mt = tl(),
		di = typeof Symbol == "function" && typeof Symbol.for == "function"
			? Symbol.for("nodejs.util.inspect.custom")
			: null;
	St.Buffer = P;
	St.SlowBuffer = al;
	St.INSPECT_MAX_BYTES = 50;
	var Nr = 2147483647;
	St.kMaxLength = Nr;
	P.TYPED_ARRAY_SUPPORT = rl();
	!P.TYPED_ARRAY_SUPPORT && typeof console < "u" &&
		typeof console.error == "function" &&
		console.error(
			"This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
		);
	function rl() {
		try {
			let e = new Uint8Array(1),
				t = {
					foo: function () {
						return 42;
					},
				};
			return Object.setPrototypeOf(t, Uint8Array.prototype),
				Object.setPrototypeOf(e, t),
				e.foo() === 42;
		} catch (e) {
			return !1;
		}
	}
	Object.defineProperty(P.prototype, "parent", {
		enumerable: !0,
		get: function () {
			if (P.isBuffer(this)) return this.buffer;
		},
	});
	Object.defineProperty(P.prototype, "offset", {
		enumerable: !0,
		get: function () {
			if (P.isBuffer(this)) return this.byteOffset;
		},
	});
	function $e(e) {
		if (e > Nr) {
			throw new RangeError(
				'The value "' + e + '" is invalid for option "size"',
			);
		}
		let t = new Uint8Array(e);
		return Object.setPrototypeOf(t, P.prototype), t;
	}
	function P(e, t, r) {
		if (typeof e == "number") {
			if (typeof t == "string") {
				throw new TypeError(
					'The "string" argument must be of type string. Received type number',
				);
			}
			return Wn(e);
		}
		return xi(e, t, r);
	}
	P.poolSize = 8192;
	function xi(e, t, r) {
		if (typeof e == "string") return ol(e, t);
		if (ArrayBuffer.isView(e)) return il(e);
		if (e == null) {
			throw new TypeError(
				"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
					typeof e,
			);
		}
		if (
			ke(e, ArrayBuffer) || e && ke(e.buffer, ArrayBuffer) ||
			typeof SharedArrayBuffer < "u" &&
				(ke(e, SharedArrayBuffer) || e && ke(e.buffer, SharedArrayBuffer))
		) return wi(e, t, r);
		if (typeof e == "number") {
			throw new TypeError(
				'The "value" argument must not be of type number. Received type number',
			);
		}
		let n = e.valueOf && e.valueOf();
		if (n != null && n !== e) return P.from(n, t, r);
		let o = sl(e);
		if (o) return o;
		if (
			typeof Symbol < "u" && Symbol.toPrimitive != null &&
			typeof e[Symbol.toPrimitive] == "function"
		) return P.from(e[Symbol.toPrimitive]("string"), t, r);
		throw new TypeError(
			"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
				typeof e,
		);
	}
	P.from = function (e, t, r) {
		return xi(e, t, r);
	};
	Object.setPrototypeOf(P.prototype, Uint8Array.prototype);
	Object.setPrototypeOf(P, Uint8Array);
	function bi(e) {
		if (typeof e != "number") {
			throw new TypeError('"size" argument must be of type number');
		}
		if (e < 0) {
			throw new RangeError(
				'The value "' + e + '" is invalid for option "size"',
			);
		}
	}
	function nl(e, t, r) {
		return bi(e),
			e <= 0
				? $e(e)
				: t !== void 0
				? typeof r == "string" ? $e(e).fill(t, r) : $e(e).fill(t)
				: $e(e);
	}
	P.alloc = function (e, t, r) {
		return nl(e, t, r);
	};
	function Wn(e) {
		return bi(e), $e(e < 0 ? 0 : Hn(e) | 0);
	}
	P.allocUnsafe = function (e) {
		return Wn(e);
	};
	P.allocUnsafeSlow = function (e) {
		return Wn(e);
	};
	function ol(e, t) {
		if ((typeof t != "string" || t === "") && (t = "utf8"), !P.isEncoding(t)) {
			throw new TypeError("Unknown encoding: " + t);
		}
		let r = Ei(e, t) | 0, n = $e(r), o = n.write(e, t);
		return o !== r && (n = n.slice(0, o)), n;
	}
	function Qn(e) {
		let t = e.length < 0 ? 0 : Hn(e.length) | 0, r = $e(t);
		for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
		return r;
	}
	function il(e) {
		if (ke(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return wi(t.buffer, t.byteOffset, t.byteLength);
		}
		return Qn(e);
	}
	function wi(e, t, r) {
		if (t < 0 || e.byteLength < t) {
			throw new RangeError('"offset" is outside of buffer bounds');
		}
		if (e.byteLength < t + (r || 0)) {
			throw new RangeError('"length" is outside of buffer bounds');
		}
		let n;
		return t === void 0 && r === void 0
			? n = new Uint8Array(e)
			: r === void 0
			? n = new Uint8Array(e, t)
			: n = new Uint8Array(e, t, r),
			Object.setPrototypeOf(n, P.prototype),
			n;
	}
	function sl(e) {
		if (P.isBuffer(e)) {
			let t = Hn(e.length) | 0, r = $e(t);
			return r.length === 0 || e.copy(r, 0, 0, t), r;
		}
		if (e.length !== void 0) {
			return typeof e.length != "number" || Zn(e.length) ? $e(0) : Qn(e);
		}
		if (e.type === "Buffer" && Array.isArray(e.data)) return Qn(e.data);
	}
	function Hn(e) {
		if (e >= Nr) {
			throw new RangeError(
				"Attempt to allocate Buffer larger than maximum size: 0x" +
					Nr.toString(16) + " bytes",
			);
		}
		return e | 0;
	}
	function al(e) {
		return +e != e && (e = 0), P.alloc(+e);
	}
	P.isBuffer = function (e) {
		return e != null && e._isBuffer === !0 && e !== P.prototype;
	};
	P.compare = function (e, t) {
		if (
			ke(e, Uint8Array) && (e = P.from(e, e.offset, e.byteLength)),
				ke(t, Uint8Array) && (t = P.from(t, t.offset, t.byteLength)),
				!P.isBuffer(e) || !P.isBuffer(t)
		) {
			throw new TypeError(
				'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
			);
		}
		if (e === t) return 0;
		let r = e.length, n = t.length;
		for (let o = 0, i = Math.min(r, n); o < i; ++o) {
			if (e[o] !== t[o]) {
				r = e[o], n = t[o];
				break;
			}
		}
		return r < n ? -1 : n < r ? 1 : 0;
	};
	P.isEncoding = function (e) {
		switch (String(e).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
				return !0;
			default:
				return !1;
		}
	};
	P.concat = function (e, t) {
		if (!Array.isArray(e)) {
			throw new TypeError('"list" argument must be an Array of Buffers');
		}
		if (e.length === 0) return P.alloc(0);
		let r;
		if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
		let n = P.allocUnsafe(t), o = 0;
		for (r = 0; r < e.length; ++r) {
			let i = e[r];
			if (ke(i, Uint8Array)) {
				o + i.length > n.length
					? (P.isBuffer(i) || (i = P.from(i)), i.copy(n, o))
					: Uint8Array.prototype.set.call(n, i, o);
			} else if (P.isBuffer(i)) i.copy(n, o);
			else throw new TypeError('"list" argument must be an Array of Buffers');
			o += i.length;
		}
		return n;
	};
	function Ei(e, t) {
		if (P.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || ke(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") {
			throw new TypeError(
				'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
					typeof e,
			);
		}
		let r = e.length, n = arguments.length > 2 && arguments[2] === !0;
		if (!n && r === 0) return 0;
		let o = !1;
		for (;;) {
			switch (t) {
				case "ascii":
				case "latin1":
				case "binary":
					return r;
				case "utf8":
				case "utf-8":
					return Gn(e).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return r * 2;
				case "hex":
					return r >>> 1;
				case "base64":
					return Oi(e).length;
				default:
					if (o) return n ? -1 : Gn(e).length;
					t = ("" + t).toLowerCase(), o = !0;
			}
		}
	}
	P.byteLength = Ei;
	function ul(e, t, r) {
		let n = !1;
		if (
			(t === void 0 || t < 0) && (t = 0),
				t > this.length ||
				((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
				(r >>>= 0, t >>>= 0, r <= t)
		) return "";
		for (e || (e = "utf8");;) {
			switch (e) {
				case "hex":
					return xl(this, t, r);
				case "utf8":
				case "utf-8":
					return vi(this, t, r);
				case "ascii":
					return yl(this, t, r);
				case "latin1":
				case "binary":
					return hl(this, t, r);
				case "base64":
					return ml(this, t, r);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return bl(this, t, r);
				default:
					if (n) throw new TypeError("Unknown encoding: " + e);
					e = (e + "").toLowerCase(), n = !0;
			}
		}
	}
	P.prototype._isBuffer = !0;
	function dt(e, t, r) {
		let n = e[t];
		e[t] = e[r], e[r] = n;
	}
	P.prototype.swap16 = function () {
		let e = this.length;
		if (e % 2 !== 0) {
			throw new RangeError("Buffer size must be a multiple of 16-bits");
		}
		for (let t = 0; t < e; t += 2) dt(this, t, t + 1);
		return this;
	};
	P.prototype.swap32 = function () {
		let e = this.length;
		if (e % 4 !== 0) {
			throw new RangeError("Buffer size must be a multiple of 32-bits");
		}
		for (let t = 0; t < e; t += 4) dt(this, t, t + 3), dt(this, t + 1, t + 2);
		return this;
	};
	P.prototype.swap64 = function () {
		let e = this.length;
		if (e % 8 !== 0) {
			throw new RangeError("Buffer size must be a multiple of 64-bits");
		}
		for (let t = 0; t < e; t += 8) {
			dt(this, t, t + 7),
				dt(this, t + 1, t + 6),
				dt(this, t + 2, t + 5),
				dt(this, t + 3, t + 4);
		}
		return this;
	};
	P.prototype.toString = function () {
		let e = this.length;
		return e === 0
			? ""
			: arguments.length === 0
			? vi(this, 0, e)
			: ul.apply(this, arguments);
	};
	P.prototype.toLocaleString = P.prototype.toString;
	P.prototype.equals = function (e) {
		if (!P.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
		return this === e ? !0 : P.compare(this, e) === 0;
	};
	P.prototype.inspect = function () {
		let e = "", t = St.INSPECT_MAX_BYTES;
		return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
			this.length > t && (e += " ... "),
			"<Buffer " + e + ">";
	};
	di && (P.prototype[di] = P.prototype.inspect);
	P.prototype.compare = function (e, t, r, n, o) {
		if (
			ke(e, Uint8Array) && (e = P.from(e, e.offset, e.byteLength)),
				!P.isBuffer(e)
		) {
			throw new TypeError(
				'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
					typeof e,
			);
		}
		if (
			t === void 0 && (t = 0),
				r === void 0 && (r = e ? e.length : 0),
				n === void 0 && (n = 0),
				o === void 0 && (o = this.length),
				t < 0 || r > e.length || n < 0 || o > this.length
		) throw new RangeError("out of range index");
		if (n >= o && t >= r) return 0;
		if (n >= o) return -1;
		if (t >= r) return 1;
		if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
		let i = o - n,
			s = r - t,
			a = Math.min(i, s),
			u = this.slice(n, o),
			l = e.slice(t, r);
		for (let c = 0; c < a; ++c) {
			if (u[c] !== l[c]) {
				i = u[c], s = l[c];
				break;
			}
		}
		return i < s ? -1 : s < i ? 1 : 0;
	};
	function Pi(e, t, r, n, o) {
		if (e.length === 0) return -1;
		if (
			typeof r == "string"
				? (n = r, r = 0)
				: r > 2147483647
				? r = 2147483647
				: r < -2147483648 && (r = -2147483648),
				r = +r,
				Zn(r) && (r = o ? 0 : e.length - 1),
				r < 0 && (r = e.length + r),
				r >= e.length
		) {
			if (o) return -1;
			r = e.length - 1;
		} else if (r < 0) {
			if (o) r = 0;
			else return -1;
		}
		if (typeof t == "string" && (t = P.from(t, n)), P.isBuffer(t)) {
			return t.length === 0 ? -1 : mi(e, t, r, n, o);
		}
		if (typeof t == "number") {
			return t = t & 255,
				typeof Uint8Array.prototype.indexOf == "function"
					? o
						? Uint8Array.prototype.indexOf.call(e, t, r)
						: Uint8Array.prototype.lastIndexOf.call(e, t, r)
					: mi(e, [t], r, n, o);
		}
		throw new TypeError("val must be string, number or Buffer");
	}
	function mi(e, t, r, n, o) {
		let i = 1, s = e.length, a = t.length;
		if (
			n !== void 0 &&
			(n = String(n).toLowerCase(),
				n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
		) {
			if (e.length < 2 || t.length < 2) return -1;
			i = 2, s /= 2, a /= 2, r /= 2;
		}
		function u(c, m) {
			return i === 1 ? c[m] : c.readUInt16BE(m * i);
		}
		let l;
		if (o) {
			let c = -1;
			for (l = r; l < s; l++) {
				if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
					if (c === -1 && (c = l), l - c + 1 === a) {
						return c * i;
					}
				} else c !== -1 && (l -= l - c), c = -1;
			}
		} else {for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
				let c = !0;
				for (let m = 0; m < a; m++) {
					if (u(e, l + m) !== u(t, m)) {
						c = !1;
						break;
					}
				}
				if (c) return l;
			}}
		return -1;
	}
	P.prototype.includes = function (e, t, r) {
		return this.indexOf(e, t, r) !== -1;
	};
	P.prototype.indexOf = function (e, t, r) {
		return Pi(this, e, t, r, !0);
	};
	P.prototype.lastIndexOf = function (e, t, r) {
		return Pi(this, e, t, r, !1);
	};
	function ll(e, t, r, n) {
		r = Number(r) || 0;
		let o = e.length - r;
		n ? (n = Number(n), n > o && (n = o)) : n = o;
		let i = t.length;
		n > i / 2 && (n = i / 2);
		let s;
		for (s = 0; s < n; ++s) {
			let a = parseInt(t.substr(s * 2, 2), 16);
			if (Zn(a)) return s;
			e[r + s] = a;
		}
		return s;
	}
	function cl(e, t, r, n) {
		return Br(Gn(t, e.length - r), e, r, n);
	}
	function pl(e, t, r, n) {
		return Br(vl(t), e, r, n);
	}
	function fl(e, t, r, n) {
		return Br(Oi(t), e, r, n);
	}
	function dl(e, t, r, n) {
		return Br(Al(t, e.length - r), e, r, n);
	}
	P.prototype.write = function (e, t, r, n) {
		if (t === void 0) n = "utf8", r = this.length, t = 0;
		else if (r === void 0 && typeof t == "string") {
			n = t, r = this.length, t = 0;
		} else if (isFinite(t)) {
			t = t >>> 0,
				isFinite(r)
					? (r = r >>> 0, n === void 0 && (n = "utf8"))
					: (n = r, r = void 0);
		} else {throw new Error(
				"Buffer.write(string, encoding, offset[, length]) is no longer supported",
			);}
		let o = this.length - t;
		if (
			(r === void 0 || r > o) && (r = o),
				e.length > 0 && (r < 0 || t < 0) || t > this.length
		) throw new RangeError("Attempt to write outside buffer bounds");
		n || (n = "utf8");
		let i = !1;
		for (;;) {
			switch (n) {
				case "hex":
					return ll(this, e, t, r);
				case "utf8":
				case "utf-8":
					return cl(this, e, t, r);
				case "ascii":
				case "latin1":
				case "binary":
					return pl(this, e, t, r);
				case "base64":
					return fl(this, e, t, r);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return dl(this, e, t, r);
				default:
					if (i) throw new TypeError("Unknown encoding: " + n);
					n = ("" + n).toLowerCase(), i = !0;
			}
		}
	};
	P.prototype.toJSON = function () {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0),
		};
	};
	function ml(e, t, r) {
		return t === 0 && r === e.length
			? Jn.fromByteArray(e)
			: Jn.fromByteArray(e.slice(t, r));
	}
	function vi(e, t, r) {
		r = Math.min(e.length, r);
		let n = [], o = t;
		for (; o < r;) {
			let i = e[o], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
			if (o + a <= r) {
				let u, l, c, m;
				switch (a) {
					case 1:
						i < 128 && (s = i);
						break;
					case 2:
						u = e[o + 1],
							(u & 192) === 128 &&
							(m = (i & 31) << 6 | u & 63, m > 127 && (s = m));
						break;
					case 3:
						u = e[o + 1],
							l = e[o + 2],
							(u & 192) === 128 && (l & 192) === 128 &&
							(m = (i & 15) << 12 | (u & 63) << 6 | l & 63,
								m > 2047 && (m < 55296 || m > 57343) && (s = m));
						break;
					case 4:
						u = e[o + 1],
							l = e[o + 2],
							c = e[o + 3],
							(u & 192) === 128 && (l & 192) === 128 && (c & 192) === 128 &&
							(m = (i & 15) << 18 | (u & 63) << 12 | (l & 63) << 6 | c & 63,
								m > 65535 && m < 1114112 && (s = m));
				}
			}
			s === null ? (s = 65533, a = 1) : s > 65535 &&
				(s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023),
				n.push(s),
				o += a;
		}
		return gl(n);
	}
	var gi = 4096;
	function gl(e) {
		let t = e.length;
		if (t <= gi) return String.fromCharCode.apply(String, e);
		let r = "", n = 0;
		for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += gi));
		return r;
	}
	function yl(e, t, r) {
		let n = "";
		r = Math.min(e.length, r);
		for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
		return n;
	}
	function hl(e, t, r) {
		let n = "";
		r = Math.min(e.length, r);
		for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
		return n;
	}
	function xl(e, t, r) {
		let n = e.length;
		(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
		let o = "";
		for (let i = t; i < r; ++i) o += Tl[e[i]];
		return o;
	}
	function bl(e, t, r) {
		let n = e.slice(t, r), o = "";
		for (let i = 0; i < n.length - 1; i += 2) {
			o += String.fromCharCode(n[i] + n[i + 1] * 256);
		}
		return o;
	}
	P.prototype.slice = function (e, t) {
		let r = this.length;
		e = ~~e,
			t = t === void 0 ? r : ~~t,
			e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r),
			t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r),
			t < e && (t = e);
		let n = this.subarray(e, t);
		return Object.setPrototypeOf(n, P.prototype), n;
	};
	function ee(e, t, r) {
		if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
		if (e + t > r) {
			throw new RangeError("Trying to access beyond buffer length");
		}
	}
	P.prototype.readUintLE = P.prototype.readUIntLE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ee(e, t, this.length);
		let n = this[e], o = 1, i = 0;
		for (; ++i < t && (o *= 256);) n += this[e + i] * o;
		return n;
	};
	P.prototype.readUintBE = P.prototype.readUIntBE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ee(e, t, this.length);
		let n = this[e + --t], o = 1;
		for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
		return n;
	};
	P.prototype.readUint8 = P.prototype.readUInt8 = function (e, t) {
		return e = e >>> 0, t || ee(e, 1, this.length), this[e];
	};
	P.prototype.readUint16LE = P.prototype.readUInt16LE = function (e, t) {
		return e = e >>> 0, t || ee(e, 2, this.length), this[e] | this[e + 1] << 8;
	};
	P.prototype.readUint16BE = P.prototype.readUInt16BE = function (e, t) {
		return e = e >>> 0, t || ee(e, 2, this.length), this[e] << 8 | this[e + 1];
	};
	P.prototype.readUint32LE = P.prototype.readUInt32LE = function (e, t) {
		return e = e >>> 0,
			t || ee(e, 4, this.length),
			(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	};
	P.prototype.readUint32BE = P.prototype.readUInt32BE = function (e, t) {
		return e = e >>> 0,
			t || ee(e, 4, this.length),
			this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	};
	P.prototype.readBigUInt64LE = He(function (e) {
		e = e >>> 0, Rt(e, "offset");
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && Xt(e, this.length - 8);
		let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
			o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
		return BigInt(n) + (BigInt(o) << BigInt(32));
	});
	P.prototype.readBigUInt64BE = He(function (e) {
		e = e >>> 0, Rt(e, "offset");
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && Xt(e, this.length - 8);
		let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
			o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
		return (BigInt(n) << BigInt(32)) + BigInt(o);
	});
	P.prototype.readIntLE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ee(e, t, this.length);
		let n = this[e], o = 1, i = 0;
		for (; ++i < t && (o *= 256);) n += this[e + i] * o;
		return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
	};
	P.prototype.readIntBE = function (e, t, r) {
		e = e >>> 0, t = t >>> 0, r || ee(e, t, this.length);
		let n = t, o = 1, i = this[e + --n];
		for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
		return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
	};
	P.prototype.readInt8 = function (e, t) {
		return e = e >>> 0,
			t || ee(e, 1, this.length),
			this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	};
	P.prototype.readInt16LE = function (e, t) {
		e = e >>> 0, t || ee(e, 2, this.length);
		let r = this[e] | this[e + 1] << 8;
		return r & 32768 ? r | 4294901760 : r;
	};
	P.prototype.readInt16BE = function (e, t) {
		e = e >>> 0, t || ee(e, 2, this.length);
		let r = this[e + 1] | this[e] << 8;
		return r & 32768 ? r | 4294901760 : r;
	};
	P.prototype.readInt32LE = function (e, t) {
		return e = e >>> 0,
			t || ee(e, 4, this.length),
			this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	};
	P.prototype.readInt32BE = function (e, t) {
		return e = e >>> 0,
			t || ee(e, 4, this.length),
			this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	};
	P.prototype.readBigInt64LE = He(function (e) {
		e = e >>> 0, Rt(e, "offset");
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && Xt(e, this.length - 8);
		let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 +
			(r << 24);
		return (BigInt(n) << BigInt(32)) +
			BigInt(
				t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
			);
	});
	P.prototype.readBigInt64BE = He(function (e) {
		e = e >>> 0, Rt(e, "offset");
		let t = this[e], r = this[e + 7];
		(t === void 0 || r === void 0) && Xt(e, this.length - 8);
		let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(n) << BigInt(32)) +
			BigInt(
				this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r,
			);
	});
	P.prototype.readFloatLE = function (e, t) {
		return e = e >>> 0, t || ee(e, 4, this.length), Mt.read(this, e, !0, 23, 4);
	};
	P.prototype.readFloatBE = function (e, t) {
		return e = e >>> 0, t || ee(e, 4, this.length), Mt.read(this, e, !1, 23, 4);
	};
	P.prototype.readDoubleLE = function (e, t) {
		return e = e >>> 0, t || ee(e, 8, this.length), Mt.read(this, e, !0, 52, 8);
	};
	P.prototype.readDoubleBE = function (e, t) {
		return e = e >>> 0, t || ee(e, 8, this.length), Mt.read(this, e, !1, 52, 8);
	};
	function he(e, t, r, n, o, i) {
		if (!P.isBuffer(e)) {
			throw new TypeError('"buffer" argument must be a Buffer instance');
		}
		if (t > o || t < i) {
			throw new RangeError('"value" argument is out of bounds');
		}
		if (r + n > e.length) throw new RangeError("Index out of range");
	}
	P.prototype.writeUintLE = P.prototype.writeUIntLE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
			let s = Math.pow(2, 8 * r) - 1;
			he(this, e, t, r, s, 0);
		}
		let o = 1, i = 0;
		for (this[t] = e & 255; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
		return t + r;
	};
	P.prototype.writeUintBE = P.prototype.writeUIntBE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
			let s = Math.pow(2, 8 * r) - 1;
			he(this, e, t, r, s, 0);
		}
		let o = r - 1, i = 1;
		for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
			this[t + o] = e / i & 255;
		}
		return t + r;
	};
	P.prototype.writeUint8 = P.prototype.writeUInt8 = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 1, 255, 0),
			this[t] = e & 255,
			t + 1;
	};
	P.prototype.writeUint16LE = P.prototype.writeUInt16LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 2, 65535, 0),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			t + 2;
	};
	P.prototype.writeUint16BE = P.prototype.writeUInt16BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 2, 65535, 0),
			this[t] = e >>> 8,
			this[t + 1] = e & 255,
			t + 2;
	};
	P.prototype.writeUint32LE = P.prototype.writeUInt32LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 4, 4294967295, 0),
			this[t + 3] = e >>> 24,
			this[t + 2] = e >>> 16,
			this[t + 1] = e >>> 8,
			this[t] = e & 255,
			t + 4;
	};
	P.prototype.writeUint32BE = P.prototype.writeUInt32BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 4, 4294967295, 0),
			this[t] = e >>> 24,
			this[t + 1] = e >>> 16,
			this[t + 2] = e >>> 8,
			this[t + 3] = e & 255,
			t + 4;
	};
	function Ai(e, t, r, n, o) {
		Si(t, n, o, e, r, 7);
		let i = Number(t & BigInt(4294967295));
		e[r++] = i,
			i = i >> 8,
			e[r++] = i,
			i = i >> 8,
			e[r++] = i,
			i = i >> 8,
			e[r++] = i;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			s = s >> 8,
			e[r++] = s,
			r;
	}
	function Ti(e, t, r, n, o) {
		Si(t, n, o, e, r, 7);
		let i = Number(t & BigInt(4294967295));
		e[r + 7] = i,
			i = i >> 8,
			e[r + 6] = i,
			i = i >> 8,
			e[r + 5] = i,
			i = i >> 8,
			e[r + 4] = i;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[r + 3] = s,
			s = s >> 8,
			e[r + 2] = s,
			s = s >> 8,
			e[r + 1] = s,
			s = s >> 8,
			e[r] = s,
			r + 8;
	}
	P.prototype.writeBigUInt64LE = He(function (e, t = 0) {
		return Ai(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	});
	P.prototype.writeBigUInt64BE = He(function (e, t = 0) {
		return Ti(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	});
	P.prototype.writeIntLE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, !n) {
			let a = Math.pow(2, 8 * r - 1);
			he(this, e, t, r, a - 1, -a);
		}
		let o = 0, i = 1, s = 0;
		for (this[t] = e & 255; ++o < r && (i *= 256);) {
			e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
		}
		return t + r;
	};
	P.prototype.writeIntBE = function (e, t, r, n) {
		if (e = +e, t = t >>> 0, !n) {
			let a = Math.pow(2, 8 * r - 1);
			he(this, e, t, r, a - 1, -a);
		}
		let o = r - 1, i = 1, s = 0;
		for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
			e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
				this[t + o] = (e / i >> 0) - s & 255;
		}
		return t + r;
	};
	P.prototype.writeInt8 = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 1, 127, -128),
			e < 0 && (e = 255 + e + 1),
			this[t] = e & 255,
			t + 1;
	};
	P.prototype.writeInt16LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 2, 32767, -32768),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			t + 2;
	};
	P.prototype.writeInt16BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 2, 32767, -32768),
			this[t] = e >>> 8,
			this[t + 1] = e & 255,
			t + 2;
	};
	P.prototype.writeInt32LE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 4, 2147483647, -2147483648),
			this[t] = e & 255,
			this[t + 1] = e >>> 8,
			this[t + 2] = e >>> 16,
			this[t + 3] = e >>> 24,
			t + 4;
	};
	P.prototype.writeInt32BE = function (e, t, r) {
		return e = +e,
			t = t >>> 0,
			r || he(this, e, t, 4, 2147483647, -2147483648),
			e < 0 && (e = 4294967295 + e + 1),
			this[t] = e >>> 24,
			this[t + 1] = e >>> 16,
			this[t + 2] = e >>> 8,
			this[t + 3] = e & 255,
			t + 4;
	};
	P.prototype.writeBigInt64LE = He(function (e, t = 0) {
		return Ai(
			this,
			e,
			t,
			-BigInt("0x8000000000000000"),
			BigInt("0x7fffffffffffffff"),
		);
	});
	P.prototype.writeBigInt64BE = He(function (e, t = 0) {
		return Ti(
			this,
			e,
			t,
			-BigInt("0x8000000000000000"),
			BigInt("0x7fffffffffffffff"),
		);
	});
	function Ci(e, t, r, n, o, i) {
		if (r + n > e.length) throw new RangeError("Index out of range");
		if (r < 0) throw new RangeError("Index out of range");
	}
	function Mi(e, t, r, n, o) {
		return t = +t,
			r = r >>> 0,
			o || Ci(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
			Mt.write(e, t, r, n, 23, 4),
			r + 4;
	}
	P.prototype.writeFloatLE = function (e, t, r) {
		return Mi(this, e, t, !0, r);
	};
	P.prototype.writeFloatBE = function (e, t, r) {
		return Mi(this, e, t, !1, r);
	};
	function Ri(e, t, r, n, o) {
		return t = +t,
			r = r >>> 0,
			o || Ci(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
			Mt.write(e, t, r, n, 52, 8),
			r + 8;
	}
	P.prototype.writeDoubleLE = function (e, t, r) {
		return Ri(this, e, t, !0, r);
	};
	P.prototype.writeDoubleBE = function (e, t, r) {
		return Ri(this, e, t, !1, r);
	};
	P.prototype.copy = function (e, t, r, n) {
		if (!P.isBuffer(e)) throw new TypeError("argument should be a Buffer");
		if (
			r || (r = 0),
				!n && n !== 0 && (n = this.length),
				t >= e.length && (t = e.length),
				t || (t = 0),
				n > 0 && n < r && (n = r),
				n === r || e.length === 0 || this.length === 0
		) return 0;
		if (t < 0) throw new RangeError("targetStart out of bounds");
		if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
		if (n < 0) throw new RangeError("sourceEnd out of bounds");
		n > this.length && (n = this.length),
			e.length - t < n - r && (n = e.length - t + r);
		let o = n - r;
		return this === e && typeof Uint8Array.prototype.copyWithin == "function"
			? this.copyWithin(t, r, n)
			: Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
			o;
	};
	P.prototype.fill = function (e, t, r, n) {
		if (typeof e == "string") {
			if (
				typeof t == "string"
					? (n = t, t = 0, r = this.length)
					: typeof r == "string" && (n = r, r = this.length),
					n !== void 0 && typeof n != "string"
			) throw new TypeError("encoding must be a string");
			if (typeof n == "string" && !P.isEncoding(n)) {
				throw new TypeError("Unknown encoding: " + n);
			}
			if (e.length === 1) {
				let i = e.charCodeAt(0);
				(n === "utf8" && i < 128 || n === "latin1") && (e = i);
			}
		} else {typeof e == "number"
				? e = e & 255
				: typeof e == "boolean" && (e = Number(e));}
		if (t < 0 || this.length < t || this.length < r) {
			throw new RangeError("Out of range index");
		}
		if (r <= t) return this;
		t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
		let o;
		if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
		else {
			let i = P.isBuffer(e) ? e : P.from(e, n), s = i.length;
			if (s === 0) {
				throw new TypeError(
					'The value "' + e + '" is invalid for argument "value"',
				);
			}
			for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
		}
		return this;
	};
	var Ct = {};
	function zn(e, t, r) {
		Ct[e] = class extends r {
			constructor() {
				super(),
					Object.defineProperty(this, "message", {
						value: t.apply(this, arguments),
						writable: !0,
						configurable: !0,
					}),
					this.name = `${this.name} [${e}]`,
					this.stack,
					delete this.name;
			}
			get code() {
				return e;
			}
			set code(n) {
				Object.defineProperty(this, "code", {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0,
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	zn("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
		return e
			? `${e} is outside of buffer bounds`
			: "Attempt to access memory outside buffer bounds";
	}, RangeError);
	zn("ERR_INVALID_ARG_TYPE", function (e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError);
	zn("ERR_OUT_OF_RANGE", function (e, t, r) {
		let n = `The value of "${e}" is out of range.`, o = r;
		return Number.isInteger(r) && Math.abs(r) > 2 ** 32
			? o = yi(String(r))
			: typeof r == "bigint" &&
				(o = String(r),
					(r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
					(o = yi(o)),
					o += "n"),
			n += ` It must be ${t}. Received ${o}`,
			n;
	}, RangeError);
	function yi(e) {
		let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
		for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
		return `${e.slice(0, r)}${t}`;
	}
	function wl(e, t, r) {
		Rt(t, "offset"),
			(e[t] === void 0 || e[t + r] === void 0) && Xt(t, e.length - (r + 1));
	}
	function Si(e, t, r, n, o, i) {
		if (e > r || e < t) {
			let s = typeof t == "bigint" ? "n" : "", a;
			throw i > 3
				? t === 0 || t === BigInt(0)
					? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`
					: a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
						(i + 1) * 8 - 1
					}${s}`
				: a = `>= ${t}${s} and <= ${r}${s}`,
				new Ct.ERR_OUT_OF_RANGE("value", a, e);
		}
		wl(n, o, i);
	}
	function Rt(e, t) {
		if (typeof e != "number") throw new Ct.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function Xt(e, t, r) {
		throw Math.floor(e) !== e
			? (Rt(e, r), new Ct.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
			: t < 0
			? new Ct.ERR_BUFFER_OUT_OF_BOUNDS()
			: new Ct.ERR_OUT_OF_RANGE(
				r || "offset",
				`>= ${r ? 1 : 0} and <= ${t}`,
				e,
			);
	}
	var El = /[^+/0-9A-Za-z-_]/g;
	function Pl(e) {
		if (e = e.split("=")[0], e = e.trim().replace(El, ""), e.length < 2) {
			return "";
		}
		for (; e.length % 4 !== 0;) e = e + "=";
		return e;
	}
	function Gn(e, t) {
		t = t || 1 / 0;
		let r, n = e.length, o = null, i = [];
		for (let s = 0; s < n; ++s) {
			if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
				if (!o) {
					if (r > 56319) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue;
					} else if (s + 1 === n) {
						(t -= 3) > -1 && i.push(239, 191, 189);
						continue;
					}
					o = r;
					continue;
				}
				if (r < 56320) {
					(t -= 3) > -1 && i.push(239, 191, 189), o = r;
					continue;
				}
				r = (o - 55296 << 10 | r - 56320) + 65536;
			} else o && (t -= 3) > -1 && i.push(239, 191, 189);
			if (o = null, r < 128) {
				if ((t -= 1) < 0) break;
				i.push(r);
			} else if (r < 2048) {
				if ((t -= 2) < 0) break;
				i.push(r >> 6 | 192, r & 63 | 128);
			} else if (r < 65536) {
				if ((t -= 3) < 0) break;
				i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
			} else if (r < 1114112) {
				if ((t -= 4) < 0) break;
				i.push(
					r >> 18 | 240,
					r >> 12 & 63 | 128,
					r >> 6 & 63 | 128,
					r & 63 | 128,
				);
			} else throw new Error("Invalid code point");
		}
		return i;
	}
	function vl(e) {
		let t = [];
		for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
		return t;
	}
	function Al(e, t) {
		let r, n, o, i = [];
		for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) {
			r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
		}
		return i;
	}
	function Oi(e) {
		return Jn.toByteArray(Pl(e));
	}
	function Br(e, t, r, n) {
		let o;
		for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) {
			t[o + r] = e[o];
		}
		return o;
	}
	function ke(e, t) {
		return e instanceof t ||
			e != null && e.constructor != null && e.constructor.name != null &&
				e.constructor.name === t.name;
	}
	function Zn(e) {
		return e !== e;
	}
	var Tl = function () {
		let e = "0123456789abcdef", t = new Array(256);
		for (let r = 0; r < 16; ++r) {
			let n = r * 16;
			for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
		}
		return t;
	}();
	function He(e) {
		return typeof BigInt > "u" ? Cl : e;
	}
	function Cl() {
		throw new Error("BigInt not supported");
	}
});
var b,
	d = Dr(() => {
		"use strict";
		b = Te(Fi());
	});
var uo = z((j) => {
	"use strict";
	d();
	p();
	f();
	var G = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
		Vi = G((e, t) => {
			"use strict";
			t.exports = function () {
				if (
					typeof Symbol != "function" ||
					typeof Object.getOwnPropertySymbols != "function"
				) return !1;
				if (typeof Symbol.iterator == "symbol") return !0;
				var r = {}, n = Symbol("test"), o = Object(n);
				if (
					typeof n == "string" ||
					Object.prototype.toString.call(n) !== "[object Symbol]" ||
					Object.prototype.toString.call(o) !== "[object Symbol]"
				) return !1;
				var i = 42;
				r[n] = i;
				for (n in r) return !1;
				if (
					typeof Object.keys == "function" && Object.keys(r).length !== 0 ||
					typeof Object.getOwnPropertyNames == "function" &&
						Object.getOwnPropertyNames(r).length !== 0
				) return !1;
				var s = Object.getOwnPropertySymbols(r);
				if (
					s.length !== 1 || s[0] !== n ||
					!Object.prototype.propertyIsEnumerable.call(r, n)
				) return !1;
				if (typeof Object.getOwnPropertyDescriptor == "function") {
					var a = Object.getOwnPropertyDescriptor(r, n);
					if (a.value !== i || a.enumerable !== !0) return !1;
				}
				return !0;
			};
		}),
		Vr = G((e, t) => {
			"use strict";
			var r = Vi();
			t.exports = function () {
				return r() && !!Symbol.toStringTag;
			};
		}),
		Ml = G((e, t) => {
			"use strict";
			var r = typeof Symbol < "u" && Symbol, n = Vi();
			t.exports = function () {
				return typeof r != "function" || typeof Symbol != "function" ||
						typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol"
					? !1
					: n();
			};
		}),
		Rl = G((e, t) => {
			"use strict";
			var r = { foo: {} }, n = Object;
			t.exports = function () {
				return { __proto__: r }.foo === r.foo &&
					!({ __proto__: null } instanceof n);
			};
		}),
		Sl = G((e, t) => {
			"use strict";
			var r = "Function.prototype.bind called on incompatible ",
				n = Array.prototype.slice,
				o = Object.prototype.toString,
				i = "[object Function]";
			t.exports = function (s) {
				var a = this;
				if (typeof a != "function" || o.call(a) !== i) {
					throw new TypeError(r + a);
				}
				for (
					var u = n.call(arguments, 1),
						l,
						c = function () {
							if (this instanceof l) {
								var x = a.apply(this, u.concat(n.call(arguments)));
								return Object(x) === x ? x : this;
							} else return a.apply(s, u.concat(n.call(arguments)));
						},
						m = Math.max(0, a.length - u.length),
						g = [],
						w = 0;
					w < m;
					w++
				) g.push("$" + w);
				if (
					l = h(
						"binder",
						"return function (" + g.join(",") +
							"){ return binder.apply(this,arguments); }",
					)(c), a.prototype
				) {
					var E = function () {};
					E.prototype = a.prototype, l.prototype = new E(), E.prototype = null;
				}
				return l;
			};
		}),
		no = G((e, t) => {
			"use strict";
			var r = Sl();
			t.exports = h.prototype.bind || r;
		}),
		Ol = G((e, t) => {
			"use strict";
			var r = no();
			t.exports = r.call(h.call, Object.prototype.hasOwnProperty);
		}),
		oo = G((e, t) => {
			"use strict";
			var r,
				n = SyntaxError,
				o = h,
				i = TypeError,
				s = function ($) {
					try {
						return o('"use strict"; return (' + $ + ").constructor;")();
					} catch (U) {}
				},
				a = Object.getOwnPropertyDescriptor;
			if (a) {
				try {
					a({}, "");
				} catch ($) {
					a = null;
				}
			}
			var u = function () {
					throw new i();
				},
				l = a
					? function () {
						try {
							return arguments.callee, u;
						} catch ($) {
							try {
								return a(arguments, "callee").get;
							} catch (U) {
								return u;
							}
						}
					}()
					: u,
				c = Ml()(),
				m = Rl()(),
				g = Object.getPrototypeOf || (m
					? function ($) {
						return $.__proto__;
					}
					: null),
				w = {},
				E = typeof Uint8Array > "u" || !g ? r : g(Uint8Array),
				x = {
					"%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
					"%Array%": Array,
					"%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
					"%ArrayIteratorPrototype%": c && g ? g([][Symbol.iterator]()) : r,
					"%AsyncFromSyncIteratorPrototype%": r,
					"%AsyncFunction%": w,
					"%AsyncGenerator%": w,
					"%AsyncGeneratorFunction%": w,
					"%AsyncIteratorPrototype%": w,
					"%Atomics%": typeof Atomics > "u" ? r : Atomics,
					"%BigInt%": typeof BigInt > "u" ? r : BigInt,
					"%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
					"%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
					"%Boolean%": Boolean,
					"%DataView%": typeof DataView > "u" ? r : DataView,
					"%Date%": Date,
					"%decodeURI%": decodeURI,
					"%decodeURIComponent%": decodeURIComponent,
					"%encodeURI%": encodeURI,
					"%encodeURIComponent%": encodeURIComponent,
					"%Error%": Error,
					"%eval%": void 0,
					"%EvalError%": EvalError,
					"%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
					"%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
					"%FinalizationRegistry%": typeof FinalizationRegistry > "u"
						? r
						: FinalizationRegistry,
					"%Function%": o,
					"%GeneratorFunction%": w,
					"%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
					"%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
					"%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
					"%isFinite%": isFinite,
					"%isNaN%": isNaN,
					"%IteratorPrototype%": c && g ? g(g([][Symbol.iterator]())) : r,
					"%JSON%": typeof JSON == "object" ? JSON : r,
					"%Map%": typeof Map > "u" ? r : Map,
					"%MapIteratorPrototype%": typeof Map > "u" || !c || !g
						? r
						: g(new Map()[Symbol.iterator]()),
					"%Math%": Math,
					"%Number%": Number,
					"%Object%": Object,
					"%parseFloat%": parseFloat,
					"%parseInt%": parseInt,
					"%Promise%": typeof Promise > "u" ? r : Promise,
					"%Proxy%": typeof Proxy > "u" ? r : Proxy,
					"%RangeError%": RangeError,
					"%ReferenceError%": ReferenceError,
					"%Reflect%": typeof Reflect > "u" ? r : Reflect,
					"%RegExp%": RegExp,
					"%Set%": typeof Set > "u" ? r : Set,
					"%SetIteratorPrototype%": typeof Set > "u" || !c || !g
						? r
						: g(new Set()[Symbol.iterator]()),
					"%SharedArrayBuffer%": typeof SharedArrayBuffer > "u"
						? r
						: SharedArrayBuffer,
					"%String%": String,
					"%StringIteratorPrototype%": c && g ? g(""[Symbol.iterator]()) : r,
					"%Symbol%": c ? Symbol : r,
					"%SyntaxError%": n,
					"%ThrowTypeError%": l,
					"%TypedArray%": E,
					"%TypeError%": i,
					"%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
					"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u"
						? r
						: Uint8ClampedArray,
					"%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
					"%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
					"%URIError%": URIError,
					"%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
					"%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
					"%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
				};
			if (g) {
				try {
					null.error;
				} catch ($) {
					T = g(g($)), x["%Error.prototype%"] = T;
				}
			}
			var T,
				R = function $(U) {
					var O;
					if (U === "%AsyncFunction%") O = s("async function () {}");
					else if (U === "%GeneratorFunction%") O = s("function* () {}");
					else if (U === "%AsyncGeneratorFunction%") {
						O = s("async function* () {}");
					} else if (U === "%AsyncGenerator%") {
						var oe = $("%AsyncGeneratorFunction%");
						oe && (O = oe.prototype);
					} else if (U === "%AsyncIteratorPrototype%") {
						var ie = $("%AsyncGenerator%");
						ie && g && (O = g(ie.prototype));
					}
					return x[U] = O, O;
				},
				S = {
					"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
					"%ArrayPrototype%": ["Array", "prototype"],
					"%ArrayProto_entries%": ["Array", "prototype", "entries"],
					"%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
					"%ArrayProto_keys%": ["Array", "prototype", "keys"],
					"%ArrayProto_values%": ["Array", "prototype", "values"],
					"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
					"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
					"%AsyncGeneratorPrototype%": [
						"AsyncGeneratorFunction",
						"prototype",
						"prototype",
					],
					"%BooleanPrototype%": ["Boolean", "prototype"],
					"%DataViewPrototype%": ["DataView", "prototype"],
					"%DatePrototype%": ["Date", "prototype"],
					"%ErrorPrototype%": ["Error", "prototype"],
					"%EvalErrorPrototype%": ["EvalError", "prototype"],
					"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
					"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
					"%FunctionPrototype%": ["Function", "prototype"],
					"%Generator%": ["GeneratorFunction", "prototype"],
					"%GeneratorPrototype%": [
						"GeneratorFunction",
						"prototype",
						"prototype",
					],
					"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
					"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
					"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
					"%JSONParse%": ["JSON", "parse"],
					"%JSONStringify%": ["JSON", "stringify"],
					"%MapPrototype%": ["Map", "prototype"],
					"%NumberPrototype%": ["Number", "prototype"],
					"%ObjectPrototype%": ["Object", "prototype"],
					"%ObjProto_toString%": ["Object", "prototype", "toString"],
					"%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
					"%PromisePrototype%": ["Promise", "prototype"],
					"%PromiseProto_then%": ["Promise", "prototype", "then"],
					"%Promise_all%": ["Promise", "all"],
					"%Promise_reject%": ["Promise", "reject"],
					"%Promise_resolve%": ["Promise", "resolve"],
					"%RangeErrorPrototype%": ["RangeError", "prototype"],
					"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
					"%RegExpPrototype%": ["RegExp", "prototype"],
					"%SetPrototype%": ["Set", "prototype"],
					"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
					"%StringPrototype%": ["String", "prototype"],
					"%SymbolPrototype%": ["Symbol", "prototype"],
					"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
					"%TypedArrayPrototype%": ["TypedArray", "prototype"],
					"%TypeErrorPrototype%": ["TypeError", "prototype"],
					"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
					"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
					"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
					"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
					"%URIErrorPrototype%": ["URIError", "prototype"],
					"%WeakMapPrototype%": ["WeakMap", "prototype"],
					"%WeakSetPrototype%": ["WeakSet", "prototype"],
				},
				C = no(),
				M = Ol(),
				N = C.call(h.call, Array.prototype.concat),
				B = C.call(h.apply, Array.prototype.splice),
				pe = C.call(h.call, String.prototype.replace),
				V = C.call(h.call, String.prototype.slice),
				W = C.call(h.call, RegExp.prototype.exec),
				Ee =
					/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
				H = /\\(\\)?/g,
				Pe = function ($) {
					var U = V($, 0, 1), O = V($, -1);
					if (U === "%" && O !== "%") {
						throw new n("invalid intrinsic syntax, expected closing `%`");
					}
					if (O === "%" && U !== "%") {
						throw new n("invalid intrinsic syntax, expected opening `%`");
					}
					var oe = [];
					return pe($, Ee, function (ie, Ge, Y, ct) {
						oe[oe.length] = Y ? pe(ct, H, "$1") : Ge || ie;
					}),
						oe;
				},
				Qe = function ($, U) {
					var O = $, oe;
					if (M(S, O) && (oe = S[O], O = "%" + oe[0] + "%"), M(x, O)) {
						var ie = x[O];
						if (ie === w && (ie = R(O)), typeof ie > "u" && !U) {
							throw new i(
								"intrinsic " + $ +
									" exists, but is not available. Please file an issue!",
							);
						}
						return { alias: oe, name: O, value: ie };
					}
					throw new n("intrinsic " + $ + " does not exist!");
				};
			t.exports = function ($, U) {
				if (typeof $ != "string" || $.length === 0) {
					throw new i("intrinsic name must be a non-empty string");
				}
				if (arguments.length > 1 && typeof U != "boolean") {
					throw new i('"allowMissing" argument must be a boolean');
				}
				if (W(/^%?[^%]*%?$/, $) === null) {
					throw new n(
						"`%` may not be present anywhere but at the beginning and end of the intrinsic name",
					);
				}
				var O = Pe($),
					oe = O.length > 0 ? O[0] : "",
					ie = Qe("%" + oe + "%", U),
					Ge = ie.name,
					Y = ie.value,
					ct = !1,
					We = ie.alias;
				We && (oe = We[0], B(O, N([0, 1], We)));
				for (var pt = 1, Ue = !0; pt < O.length; pt += 1) {
					var fe = O[pt], ft = V(fe, 0, 1), At = V(fe, -1);
					if (
						(ft === '"' || ft === "'" || ft === "`" || At === '"' ||
							At === "'" || At === "`") && ft !== At
					) throw new n("property names with quotes must have matching quotes");
					if (
						(fe === "constructor" || !Ue) && (ct = !0),
							oe += "." + fe,
							Ge = "%" + oe + "%",
							M(x, Ge)
					) Y = x[Ge];
					else if (Y != null) {
						if (!(fe in Y)) {
							if (!U) {
								throw new i(
									"base intrinsic for " + $ +
										" exists, but the property is not available.",
								);
							}
							return;
						}
						if (a && pt + 1 >= O.length) {
							var Tt = a(Y, fe);
							Ue = !!Tt,
								Ue && "get" in Tt && !("originalValue" in Tt.get)
									? Y = Tt.get
									: Y = Y[fe];
						} else Ue = M(Y, fe), Y = Y[fe];
						Ue && !ct && (x[Ge] = Y);
					}
				}
				return Y;
			};
		}),
		Fl = G((e, t) => {
			"use strict";
			var r = no(),
				n = oo(),
				o = n("%Function.prototype.apply%"),
				i = n("%Function.prototype.call%"),
				s = n("%Reflect.apply%", !0) || r.call(i, o),
				a = n("%Object.getOwnPropertyDescriptor%", !0),
				u = n("%Object.defineProperty%", !0),
				l = n("%Math.max%");
			if (u) {
				try {
					u({}, "a", { value: 1 });
				} catch (m) {
					u = null;
				}
			}
			t.exports = function (m) {
				var g = s(r, i, arguments);
				if (a && u) {
					var w = a(g, "length");
					w.configurable &&
						u(g, "length", {
							value: 1 + l(0, m.length - (arguments.length - 1)),
						});
				}
				return g;
			};
			var c = function () {
				return s(r, o, arguments);
			};
			u ? u(t.exports, "apply", { value: c }) : t.exports.apply = c;
		}),
		io = G((e, t) => {
			"use strict";
			var r = oo(), n = Fl(), o = n(r("String.prototype.indexOf"));
			t.exports = function (i, s) {
				var a = r(i, !!s);
				return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
			};
		}),
		Il = G((e, t) => {
			"use strict";
			var r = Vr()(),
				n = io(),
				o = n("Object.prototype.toString"),
				i = function (u) {
					return r && u && typeof u == "object" && Symbol.toStringTag in u
						? !1
						: o(u) === "[object Arguments]";
				},
				s = function (u) {
					return i(u) ? !0 : u !== null && typeof u == "object" &&
						typeof u.length == "number" && u.length >= 0 &&
						o(u) !== "[object Array]" && o(u.callee) === "[object Function]";
				},
				a = function () {
					return i(arguments);
				}();
			i.isLegacyArguments = s, t.exports = a ? i : s;
		}),
		kl = G((e, t) => {
			"use strict";
			var r = Object.prototype.toString,
				n = h.prototype.toString,
				o = /^\s*(?:function)?\*/,
				i = Vr()(),
				s = Object.getPrototypeOf,
				a = function () {
					if (!i) return !1;
					try {
						return h("return function*() {}")();
					} catch (l) {}
				},
				u;
			t.exports = function (l) {
				if (typeof l != "function") return !1;
				if (o.test(n.call(l))) return !0;
				if (!i) {
					var c = r.call(l);
					return c === "[object GeneratorFunction]";
				}
				if (!s) return !1;
				if (typeof u > "u") {
					var m = a();
					u = m ? s(m) : !1;
				}
				return s(l) === u;
			};
		}),
		Dl = G((e, t) => {
			"use strict";
			var r = h.prototype.toString,
				n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
				o,
				i;
			if (
				typeof n == "function" && typeof Object.defineProperty == "function"
			) {
				try {
					o = Object.defineProperty({}, "length", {
						get: function () {
							throw i;
						},
					}),
						i = {},
						n(
							function () {
								throw 42;
							},
							null,
							o,
						);
				} catch (M) {
					M !== i && (n = null);
				}
			} else n = null;
			var s = /^\s*class\b/,
				a = function (M) {
					try {
						var N = r.call(M);
						return s.test(N);
					} catch (B) {
						return !1;
					}
				},
				u = function (M) {
					try {
						return a(M) ? !1 : (r.call(M), !0);
					} catch (N) {
						return !1;
					}
				},
				l = Object.prototype.toString,
				c = "[object Object]",
				m = "[object Function]",
				g = "[object GeneratorFunction]",
				w = "[object HTMLAllCollection]",
				E = "[object HTML document.all class]",
				x = "[object HTMLCollection]",
				T = typeof Symbol == "function" && !!Symbol.toStringTag,
				R = !(0 in [,]),
				S = function () {
					return !1;
				};
			typeof document == "object" &&
				(C = document.all,
					l.call(C) === l.call(document.all) && (S = function (M) {
						if ((R || !M) && (typeof M > "u" || typeof M == "object")) {
							try {
								var N = l.call(M);
								return (N === w || N === E || N === x || N === c) &&
									M("") == null;
							} catch (B) {}
						}
						return !1;
					}));
			var C;
			t.exports = n
				? function (M) {
					if (S(M)) return !0;
					if (!M || typeof M != "function" && typeof M != "object") return !1;
					try {
						n(M, null, o);
					} catch (N) {
						if (N !== i) return !1;
					}
					return !a(M) && u(M);
				}
				: function (M) {
					if (S(M)) return !0;
					if (!M || typeof M != "function" && typeof M != "object") return !1;
					if (T) return u(M);
					if (a(M)) return !1;
					var N = l.call(M);
					return N !== m && N !== g && !/^\[object HTML/.test(N) ? !1 : u(M);
				};
		}),
		Ki = G((e, t) => {
			"use strict";
			var r = Dl(),
				n = Object.prototype.toString,
				o = Object.prototype.hasOwnProperty,
				i = function (l, c, m) {
					for (var g = 0, w = l.length; g < w; g++) {
						o.call(l, g) && (m == null ? c(l[g], g, l) : c.call(m, l[g], g, l));
					}
				},
				s = function (l, c, m) {
					for (var g = 0, w = l.length; g < w; g++) {
						m == null ? c(l.charAt(g), g, l) : c.call(m, l.charAt(g), g, l);
					}
				},
				a = function (l, c, m) {
					for (var g in l) {
						o.call(l, g) && (m == null ? c(l[g], g, l) : c.call(m, l[g], g, l));
					}
				},
				u = function (l, c, m) {
					if (!r(c)) throw new TypeError("iterator must be a function");
					var g;
					arguments.length >= 3 && (g = m),
						n.call(l) === "[object Array]"
							? i(l, c, g)
							: typeof l == "string"
							? s(l, c, g)
							: a(l, c, g);
				};
			t.exports = u;
		}),
		Ji = G((e, t) => {
			"use strict";
			var r = [
					"BigInt64Array",
					"BigUint64Array",
					"Float32Array",
					"Float64Array",
					"Int16Array",
					"Int32Array",
					"Int8Array",
					"Uint16Array",
					"Uint32Array",
					"Uint8Array",
					"Uint8ClampedArray",
				],
				n = typeof globalThis > "u" ? global : globalThis;
			t.exports = function () {
				for (var o = [], i = 0; i < r.length; i++) {
					typeof n[r[i]] == "function" && (o[o.length] = r[i]);
				}
				return o;
			};
		}),
		Qi = G((e, t) => {
			"use strict";
			var r = oo(), n = r("%Object.getOwnPropertyDescriptor%", !0);
			if (n) {
				try {
					n([], "length");
				} catch (o) {
					n = null;
				}
			}
			t.exports = n;
		}),
		Gi = G((e, t) => {
			"use strict";
			var r = Ki(),
				n = Ji(),
				o = io(),
				i = o("Object.prototype.toString"),
				s = Vr()(),
				a = Qi(),
				u = typeof globalThis > "u" ? global : globalThis,
				l = n(),
				c = o("Array.prototype.indexOf", !0) || function (x, T) {
					for (var R = 0; R < x.length; R += 1) if (x[R] === T) return R;
					return -1;
				},
				m = o("String.prototype.slice"),
				g = {},
				w = Object.getPrototypeOf;
			s && a && w && r(l, function (x) {
				var T = new u[x]();
				if (Symbol.toStringTag in T) {
					var R = w(T), S = a(R, Symbol.toStringTag);
					if (!S) {
						var C = w(R);
						S = a(C, Symbol.toStringTag);
					}
					g[x] = S.get;
				}
			});
			var E = function (x) {
				var T = !1;
				return r(g, function (R, S) {
					if (!T) {
						try {
							T = R.call(x) === S;
						} catch (C) {}
					}
				}),
					T;
			};
			t.exports = function (x) {
				if (!x || typeof x != "object") return !1;
				if (!s || !(Symbol.toStringTag in x)) {
					var T = m(i(x), 8, -1);
					return c(l, T) > -1;
				}
				return a ? E(x) : !1;
			};
		}),
		_l = G((e, t) => {
			"use strict";
			var r = Ki(),
				n = Ji(),
				o = io(),
				i = Qi(),
				s = o("Object.prototype.toString"),
				a = Vr()(),
				u = typeof globalThis > "u" ? global : globalThis,
				l = n(),
				c = o("String.prototype.slice"),
				m = {},
				g = Object.getPrototypeOf;
			a && i && g && r(l, function (x) {
				if (typeof u[x] == "function") {
					var T = new u[x]();
					if (Symbol.toStringTag in T) {
						var R = g(T), S = i(R, Symbol.toStringTag);
						if (!S) {
							var C = g(R);
							S = i(C, Symbol.toStringTag);
						}
						m[x] = S.get;
					}
				}
			});
			var w = function (x) {
					var T = !1;
					return r(m, function (R, S) {
						if (!T) {
							try {
								var C = R.call(x);
								C === S && (T = C);
							} catch (M) {}
						}
					}),
						T;
				},
				E = Gi();
			t.exports = function (x) {
				return E(x)
					? !a || !(Symbol.toStringTag in x) ? c(s(x), 8, -1) : w(x)
					: !1;
			};
		}),
		Nl = G((e) => {
			"use strict";
			var t = Il(), r = kl(), n = _l(), o = Gi();
			function i(A) {
				return A.call.bind(A);
			}
			var s = typeof BigInt < "u",
				a = typeof Symbol < "u",
				u = i(Object.prototype.toString),
				l = i(Number.prototype.valueOf),
				c = i(String.prototype.valueOf),
				m = i(Boolean.prototype.valueOf);
			s && (g = i(BigInt.prototype.valueOf));
			var g;
			a && (w = i(Symbol.prototype.valueOf));
			var w;
			function E(A, Gu) {
				if (typeof A != "object") return !1;
				try {
					return Gu(A), !0;
				} catch (Bd) {
					return !1;
				}
			}
			e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
			function x(A) {
				return typeof Promise < "u" && A instanceof Promise ||
					A !== null && typeof A == "object" && typeof A.then == "function" &&
						typeof A.catch == "function";
			}
			e.isPromise = x;
			function T(A) {
				return typeof ArrayBuffer < "u" && ArrayBuffer.isView
					? ArrayBuffer.isView(A)
					: o(A) || pt(A);
			}
			e.isArrayBufferView = T;
			function R(A) {
				return n(A) === "Uint8Array";
			}
			e.isUint8Array = R;
			function S(A) {
				return n(A) === "Uint8ClampedArray";
			}
			e.isUint8ClampedArray = S;
			function C(A) {
				return n(A) === "Uint16Array";
			}
			e.isUint16Array = C;
			function M(A) {
				return n(A) === "Uint32Array";
			}
			e.isUint32Array = M;
			function N(A) {
				return n(A) === "Int8Array";
			}
			e.isInt8Array = N;
			function B(A) {
				return n(A) === "Int16Array";
			}
			e.isInt16Array = B;
			function pe(A) {
				return n(A) === "Int32Array";
			}
			e.isInt32Array = pe;
			function V(A) {
				return n(A) === "Float32Array";
			}
			e.isFloat32Array = V;
			function W(A) {
				return n(A) === "Float64Array";
			}
			e.isFloat64Array = W;
			function Ee(A) {
				return n(A) === "BigInt64Array";
			}
			e.isBigInt64Array = Ee;
			function H(A) {
				return n(A) === "BigUint64Array";
			}
			e.isBigUint64Array = H;
			function Pe(A) {
				return u(A) === "[object Map]";
			}
			Pe.working = typeof Map < "u" && Pe(new Map());
			function Qe(A) {
				return typeof Map > "u" ? !1 : Pe.working ? Pe(A) : A instanceof Map;
			}
			e.isMap = Qe;
			function $(A) {
				return u(A) === "[object Set]";
			}
			$.working = typeof Set < "u" && $(new Set());
			function U(A) {
				return typeof Set > "u" ? !1 : $.working ? $(A) : A instanceof Set;
			}
			e.isSet = U;
			function O(A) {
				return u(A) === "[object WeakMap]";
			}
			O.working = typeof WeakMap < "u" && O(new WeakMap());
			function oe(A) {
				return typeof WeakMap > "u"
					? !1
					: O.working
					? O(A)
					: A instanceof WeakMap;
			}
			e.isWeakMap = oe;
			function ie(A) {
				return u(A) === "[object WeakSet]";
			}
			ie.working = typeof WeakSet < "u" && ie(new WeakSet());
			function Ge(A) {
				return ie(A);
			}
			e.isWeakSet = Ge;
			function Y(A) {
				return u(A) === "[object ArrayBuffer]";
			}
			Y.working = typeof ArrayBuffer < "u" && Y(new ArrayBuffer());
			function ct(A) {
				return typeof ArrayBuffer > "u"
					? !1
					: Y.working
					? Y(A)
					: A instanceof ArrayBuffer;
			}
			e.isArrayBuffer = ct;
			function We(A) {
				return u(A) === "[object DataView]";
			}
			We.working = typeof ArrayBuffer < "u" && typeof DataView < "u" &&
				We(new DataView(new ArrayBuffer(1), 0, 1));
			function pt(A) {
				return typeof DataView > "u"
					? !1
					: We.working
					? We(A)
					: A instanceof DataView;
			}
			e.isDataView = pt;
			var Ue = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
			function fe(A) {
				return u(A) === "[object SharedArrayBuffer]";
			}
			function ft(A) {
				return typeof Ue > "u"
					? !1
					: (typeof fe.working > "u" && (fe.working = fe(new Ue())),
						fe.working ? fe(A) : A instanceof Ue);
			}
			e.isSharedArrayBuffer = ft;
			function At(A) {
				return u(A) === "[object AsyncFunction]";
			}
			e.isAsyncFunction = At;
			function Tt(A) {
				return u(A) === "[object Map Iterator]";
			}
			e.isMapIterator = Tt;
			function qu(A) {
				return u(A) === "[object Set Iterator]";
			}
			e.isSetIterator = qu;
			function Vu(A) {
				return u(A) === "[object Generator]";
			}
			e.isGeneratorObject = Vu;
			function Ku(A) {
				return u(A) === "[object WebAssembly.Module]";
			}
			e.isWebAssemblyCompiledModule = Ku;
			function ui(A) {
				return E(A, l);
			}
			e.isNumberObject = ui;
			function li(A) {
				return E(A, c);
			}
			e.isStringObject = li;
			function ci(A) {
				return E(A, m);
			}
			e.isBooleanObject = ci;
			function pi(A) {
				return s && E(A, g);
			}
			e.isBigIntObject = pi;
			function fi(A) {
				return a && E(A, w);
			}
			e.isSymbolObject = fi;
			function Ju(A) {
				return ui(A) || li(A) || ci(A) || pi(A) || fi(A);
			}
			e.isBoxedPrimitive = Ju;
			function Qu(A) {
				return typeof Uint8Array < "u" && (ct(A) || ft(A));
			}
			e.isAnyArrayBuffer = Qu,
				["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
					function (A) {
						Object.defineProperty(e, A, {
							enumerable: !1,
							value: function () {
								throw new Error(A + " is not supported in userland");
							},
						});
					},
				);
		}),
		Bl = G((e, t) => {
			t.exports = function (r) {
				return r instanceof b.Buffer;
			};
		}),
		Ll = G((e, t) => {
			typeof Object.create == "function"
				? t.exports = function (r, n) {
					n &&
						(r.super_ = n,
							r.prototype = Object.create(n.prototype, {
								constructor: {
									value: r,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							}));
				}
				: t.exports = function (r, n) {
					if (n) {
						r.super_ = n;
						var o = function () {};
						o.prototype = n.prototype,
							r.prototype = new o(),
							r.prototype.constructor = r;
					}
				};
		}),
		Wi = Object.getOwnPropertyDescriptors || function (e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
			}
			return r;
		},
		jl = /%[sdj%]/g;
	j.format = function (e) {
		if (!Jr(e)) {
			for (var t = [], r = 0; r < arguments.length; r++) {
				t.push(Ze(arguments[r]));
			}
			return t.join(" ");
		}
		for (
			var r = 1,
				n = arguments,
				o = n.length,
				i = String(e).replace(jl, function (u) {
					if (u === "%%") return "%";
					if (r >= o) return u;
					switch (u) {
						case "%s":
							return String(n[r++]);
						case "%d":
							return Number(n[r++]);
						case "%j":
							try {
								return JSON.stringify(n[r++]);
							} catch (l) {
								return "[Circular]";
							}
						default:
							return u;
					}
				}),
				s = n[r];
			r < o;
			s = n[++r]
		) Kr(s) || !Ot(s) ? i += " " + s : i += " " + Ze(s);
		return i;
	};
	j.deprecate = function (e, t) {
		if (typeof y < "u" && y.noDeprecation === !0) return e;
		if (typeof y > "u") {
			return function () {
				return j.deprecate(e, t).apply(this, arguments);
			};
		}
		var r = !1;
		function n() {
			if (!r) {
				if (y.throwDeprecation) throw new Error(t);
				y.traceDeprecation ? console.trace(t) : console.error(t), r = !0;
			}
			return e.apply(this, arguments);
		}
		return n;
	};
	var Lr = {}, Hi = /^$/;
	y.env.NODE_DEBUG &&
		(jr = y.env.NODE_DEBUG,
			jr = jr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*")
				.replace(/,/g, "$|^").toUpperCase(),
			Hi = new RegExp("^" + jr + "$", "i"));
	var jr;
	j.debuglog = function (e) {
		if (e = e.toUpperCase(), !Lr[e]) {
			if (Hi.test(e)) {
				var t = y.pid;
				Lr[e] = function () {
					var r = j.format.apply(j, arguments);
					console.error("%s %d: %s", e, t, r);
				};
			} else Lr[e] = function () {};
		}
		return Lr[e];
	};
	function Ze(e, t) {
		var r = { seen: [], stylize: $l };
		return arguments.length >= 3 && (r.depth = arguments[2]),
			arguments.length >= 4 && (r.colors = arguments[3]),
			so(t) ? r.showHidden = t : t && j._extend(r, t),
			gt(r.showHidden) && (r.showHidden = !1),
			gt(r.depth) && (r.depth = 2),
			gt(r.colors) && (r.colors = !1),
			gt(r.customInspect) && (r.customInspect = !0),
			r.colors && (r.stylize = Ul),
			$r(r, e, r.depth);
	}
	j.inspect = Ze;
	Ze.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39],
	};
	Ze.styles = {
		special: "cyan",
		number: "yellow",
		boolean: "yellow",
		undefined: "grey",
		null: "bold",
		string: "green",
		date: "magenta",
		regexp: "red",
	};
	function Ul(e, t) {
		var r = Ze.styles[t];
		return r
			? "\x1B[" + Ze.colors[r][0] + "m" + e + "\x1B[" + Ze.colors[r][1] + "m"
			: e;
	}
	function $l(e, t) {
		return e;
	}
	function ql(e) {
		var t = {};
		return e.forEach(function (r, n) {
			t[r] = !0;
		}),
			t;
	}
	function $r(e, t, r) {
		if (
			e.customInspect && t && Ur(t.inspect) && t.inspect !== j.inspect &&
			!(t.constructor && t.constructor.prototype === t)
		) {
			var n = t.inspect(r, e);
			return Jr(n) || (n = $r(e, n, r)), n;
		}
		var o = Vl(e, t);
		if (o) return o;
		var i = Object.keys(t), s = ql(i);
		if (
			e.showHidden && (i = Object.getOwnPropertyNames(t)),
				tr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)
		) return eo(t);
		if (i.length === 0) {
			if (Ur(t)) {
				var a = t.name ? ": " + t.name : "";
				return e.stylize("[Function" + a + "]", "special");
			}
			if (er(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
			if (qr(t)) return e.stylize(Date.prototype.toString.call(t), "date");
			if (tr(t)) return eo(t);
		}
		var u = "", l = !1, c = ["{", "}"];
		if (zi(t) && (l = !0, c = ["[", "]"]), Ur(t)) {
			var m = t.name ? ": " + t.name : "";
			u = " [Function" + m + "]";
		}
		if (
			er(t) && (u = " " + RegExp.prototype.toString.call(t)),
				qr(t) && (u = " " + Date.prototype.toUTCString.call(t)),
				tr(t) && (u = " " + eo(t)),
				i.length === 0 && (!l || t.length == 0)
		) return c[0] + u + c[1];
		if (r < 0) {
			return er(t)
				? e.stylize(RegExp.prototype.toString.call(t), "regexp")
				: e.stylize("[Object]", "special");
		}
		e.seen.push(t);
		var g;
		return l ? g = Kl(e, t, r, s, i) : g = i.map(function (w) {
			return ro(e, t, r, s, w, l);
		}),
			e.seen.pop(),
			Jl(g, u, c);
	}
	function Vl(e, t) {
		if (gt(t)) return e.stylize("undefined", "undefined");
		if (Jr(t)) {
			var r = "'" +
				JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(
					/\\"/g,
					'"',
				) + "'";
			return e.stylize(r, "string");
		}
		if (Zi(t)) return e.stylize("" + t, "number");
		if (so(t)) return e.stylize("" + t, "boolean");
		if (Kr(t)) return e.stylize("null", "null");
	}
	function eo(e) {
		return "[" + Error.prototype.toString.call(e) + "]";
	}
	function Kl(e, t, r, n, o) {
		for (var i = [], s = 0, a = t.length; s < a; ++s) {
			Yi(t, String(s)) ? i.push(ro(e, t, r, n, String(s), !0)) : i.push("");
		}
		return o.forEach(function (u) {
			u.match(/^\d+$/) || i.push(ro(e, t, r, n, u, !0));
		}),
			i;
	}
	function ro(e, t, r, n, o, i) {
		var s, a, u;
		if (
			u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] },
				u.get
					? u.set
						? a = e.stylize("[Getter/Setter]", "special")
						: a = e.stylize("[Getter]", "special")
					: u.set && (a = e.stylize("[Setter]", "special")),
				Yi(n, o) || (s = "[" + o + "]"),
				a ||
				(e.seen.indexOf(u.value) < 0
					? (Kr(r) ? a = $r(e, u.value, null) : a = $r(e, u.value, r - 1),
						a.indexOf(`
`) > -1 && (i
								? a = a.split(`
`).map(function (l) {
									return "  " + l;
								}).join(`
`).slice(2)
								: a = `
` + a.split(`
`).map(function (l) {
									return "   " + l;
								}).join(`
`)))
					: a = e.stylize("[Circular]", "special")),
				gt(s)
		) {
			if (i && o.match(/^\d+$/)) return a;
			s = JSON.stringify("" + o),
				s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
					? (s = s.slice(1, -1), s = e.stylize(s, "name"))
					: (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(
						/(^"|"$)/g,
						"'",
					),
						s = e.stylize(s, "string"));
		}
		return s + ": " + a;
	}
	function Jl(e, t, r) {
		var n = 0,
			o = e.reduce(function (i, s) {
				return n++,
					s.indexOf(`
`) >= 0 && n++,
					i + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
			}, 0);
		return o > 60
			? r[0] + (t === "" ? "" : t + `
 `) + " " + e.join(`,
  `) + " " + r[1]
			: r[0] + t + " " + e.join(", ") + " " + r[1];
	}
	j.types = Nl();
	function zi(e) {
		return Array.isArray(e);
	}
	j.isArray = zi;
	function so(e) {
		return typeof e == "boolean";
	}
	j.isBoolean = so;
	function Kr(e) {
		return e === null;
	}
	j.isNull = Kr;
	function Ql(e) {
		return e == null;
	}
	j.isNullOrUndefined = Ql;
	function Zi(e) {
		return typeof e == "number";
	}
	j.isNumber = Zi;
	function Jr(e) {
		return typeof e == "string";
	}
	j.isString = Jr;
	function Gl(e) {
		return typeof e == "symbol";
	}
	j.isSymbol = Gl;
	function gt(e) {
		return e === void 0;
	}
	j.isUndefined = gt;
	function er(e) {
		return Ot(e) && ao(e) === "[object RegExp]";
	}
	j.isRegExp = er;
	j.types.isRegExp = er;
	function Ot(e) {
		return typeof e == "object" && e !== null;
	}
	j.isObject = Ot;
	function qr(e) {
		return Ot(e) && ao(e) === "[object Date]";
	}
	j.isDate = qr;
	j.types.isDate = qr;
	function tr(e) {
		return Ot(e) && (ao(e) === "[object Error]" || e instanceof Error);
	}
	j.isError = tr;
	j.types.isNativeError = tr;
	function Ur(e) {
		return typeof e == "function";
	}
	j.isFunction = Ur;
	function Wl(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" ||
			typeof e == "string" || typeof e == "symbol" || typeof e > "u";
	}
	j.isPrimitive = Wl;
	j.isBuffer = Bl();
	function ao(e) {
		return Object.prototype.toString.call(e);
	}
	function to(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var Hl = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	function zl() {
		var e = new Date(),
			t = [to(e.getHours()), to(e.getMinutes()), to(e.getSeconds())].join(":");
		return [e.getDate(), Hl[e.getMonth()], t].join(" ");
	}
	j.log = function () {
		console.log("%s - %s", zl(), j.format.apply(j, arguments));
	};
	j.inherits = Ll();
	j._extend = function (e, t) {
		if (!t || !Ot(t)) return e;
		for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
		return e;
	};
	function Yi(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var mt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	j.promisify = function (e) {
		if (typeof e != "function") {
			throw new TypeError('The "original" argument must be of type Function');
		}
		if (mt && e[mt]) {
			var t = e[mt];
			if (typeof t != "function") {
				throw new TypeError(
					'The "util.promisify.custom" argument must be of type Function',
				);
			}
			return Object.defineProperty(t, mt, {
				value: t,
				enumerable: !1,
				writable: !1,
				configurable: !0,
			}),
				t;
		}
		function t() {
			for (
				var r,
					n,
					o = new Promise(function (a, u) {
						r = a, n = u;
					}),
					i = [],
					s = 0;
				s < arguments.length;
				s++
			) i.push(arguments[s]);
			i.push(function (a, u) {
				a ? n(a) : r(u);
			});
			try {
				e.apply(this, i);
			} catch (a) {
				n(a);
			}
			return o;
		}
		return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
			mt &&
			Object.defineProperty(t, mt, {
				value: t,
				enumerable: !1,
				writable: !1,
				configurable: !0,
			}),
			Object.defineProperties(t, Wi(e));
	};
	j.promisify.custom = mt;
	function Zl(e, t) {
		if (!e) {
			var r = new Error("Promise was rejected with a falsy value");
			r.reason = e, e = r;
		}
		return t(e);
	}
	function Yl(e) {
		if (typeof e != "function") {
			throw new TypeError('The "original" argument must be of type Function');
		}
		function t() {
			for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
			var o = r.pop();
			if (typeof o != "function") {
				throw new TypeError("The last argument must be of type Function");
			}
			var i = this,
				s = function () {
					return o.apply(i, arguments);
				};
			e.apply(this, r).then(function (a) {
				y.nextTick(s.bind(null, null, a));
			}, function (a) {
				y.nextTick(Zl.bind(null, a, s));
			});
		}
		return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
			Object.defineProperties(t, Wi(e)),
			t;
	}
	j.callbackify = Yl;
});
var es = z((Qm, Xi) => {
	"use strict";
	d();
	p();
	f();
	var Ft = 1e3,
		It = Ft * 60,
		kt = It * 60,
		yt = kt * 24,
		Xl = yt * 7,
		ec = yt * 365.25;
	Xi.exports = function (e, t) {
		t = t || {};
		var r = typeof e;
		if (r === "string" && e.length > 0) return tc(e);
		if (r === "number" && isFinite(e)) return t.long ? nc(e) : rc(e);
		throw new Error(
			"val is not a non-empty string or a valid number. val=" +
				JSON.stringify(e),
		);
	};
	function tc(e) {
		if (e = String(e), !(e.length > 100)) {
			var t =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
					.exec(e);
			if (t) {
				var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
				switch (n) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y":
						return r * ec;
					case "weeks":
					case "week":
					case "w":
						return r * Xl;
					case "days":
					case "day":
					case "d":
						return r * yt;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h":
						return r * kt;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m":
						return r * It;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s":
						return r * Ft;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms":
						return r;
					default:
						return;
				}
			}
		}
	}
	function rc(e) {
		var t = Math.abs(e);
		return t >= yt
			? Math.round(e / yt) + "d"
			: t >= kt
			? Math.round(e / kt) + "h"
			: t >= It
			? Math.round(e / It) + "m"
			: t >= Ft
			? Math.round(e / Ft) + "s"
			: e + "ms";
	}
	function nc(e) {
		var t = Math.abs(e);
		return t >= yt
			? Qr(e, t, yt, "day")
			: t >= kt
			? Qr(e, t, kt, "hour")
			: t >= It
			? Qr(e, t, It, "minute")
			: t >= Ft
			? Qr(e, t, Ft, "second")
			: e + " ms";
	}
	function Qr(e, t, r, n) {
		var o = t >= r * 1.5;
		return Math.round(e / r) + " " + n + (o ? "s" : "");
	}
});
var lo = z((zm, ts) => {
	"use strict";
	d();
	p();
	f();
	function oc(e) {
		r.debug = r,
			r.default = r,
			r.coerce = u,
			r.disable = i,
			r.enable = o,
			r.enabled = s,
			r.humanize = es(),
			r.destroy = l,
			Object.keys(e).forEach((c) => {
				r[c] = e[c];
			}),
			r.names = [],
			r.skips = [],
			r.formatters = {};
		function t(c) {
			let m = 0;
			for (let g = 0; g < c.length; g++) {
				m = (m << 5) - m + c.charCodeAt(g), m |= 0;
			}
			return r.colors[Math.abs(m) % r.colors.length];
		}
		r.selectColor = t;
		function r(c) {
			let m, g = null, w, E;
			function x(...T) {
				if (!x.enabled) return;
				let R = x, S = Number(new Date()), C = S - (m || S);
				R.diff = C,
					R.prev = m,
					R.curr = S,
					m = S,
					T[0] = r.coerce(T[0]),
					typeof T[0] != "string" && T.unshift("%O");
				let M = 0;
				T[0] = T[0].replace(/%([a-zA-Z%])/g, (B, pe) => {
					if (B === "%%") return "%";
					M++;
					let V = r.formatters[pe];
					if (typeof V == "function") {
						let W = T[M];
						B = V.call(R, W), T.splice(M, 1), M--;
					}
					return B;
				}),
					r.formatArgs.call(R, T),
					(R.log || r.log).apply(R, T);
			}
			return x.namespace = c,
				x.useColors = r.useColors(),
				x.color = r.selectColor(c),
				x.extend = n,
				x.destroy = r.destroy,
				Object.defineProperty(x, "enabled", {
					enumerable: !0,
					configurable: !1,
					get: () =>
						g !== null
							? g
							: (w !== r.namespaces && (w = r.namespaces, E = r.enabled(c)), E),
					set: (T) => {
						g = T;
					},
				}),
				typeof r.init == "function" && r.init(x),
				x;
		}
		function n(c, m) {
			let g = r(this.namespace + (typeof m == "undefined" ? ":" : m) + c);
			return g.log = this.log, g;
		}
		function o(c) {
			r.save(c), r.namespaces = c, r.names = [], r.skips = [];
			let m, g = (typeof c == "string" ? c : "").split(/[\s,]+/), w = g.length;
			for (m = 0; m < w; m++) {
				g[m] &&
					(c = g[m].replace(/\*/g, ".*?"),
						c[0] === "-"
							? r.skips.push(new RegExp("^" + c.slice(1) + "$"))
							: r.names.push(new RegExp("^" + c + "$")));
			}
		}
		function i() {
			let c = [...r.names.map(a), ...r.skips.map(a).map((m) => "-" + m)].join(
				",",
			);
			return r.enable(""), c;
		}
		function s(c) {
			if (c[c.length - 1] === "*") return !0;
			let m, g;
			for (m = 0, g = r.skips.length; m < g; m++) {
				if (r.skips[m].test(c)) return !1;
			}
			for (m = 0, g = r.names.length; m < g; m++) {
				if (r.names[m].test(c)) return !0;
			}
			return !1;
		}
		function a(c) {
			return c.toString().substring(2, c.toString().length - 2).replace(
				/\.\*\?$/,
				"*",
			);
		}
		function u(c) {
			return c instanceof Error ? c.stack || c.message : c;
		}
		function l() {
			console.warn(
				"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
			);
		}
		return r.enable(r.load()), r;
	}
	ts.exports = oc;
});
var rs = z((ve, Gr) => {
	"use strict";
	d();
	p();
	f();
	ve.formatArgs = sc;
	ve.save = ac;
	ve.load = uc;
	ve.useColors = ic;
	ve.storage = lc();
	ve.destroy = (() => {
		let e = !1;
		return () => {
			e ||
				(e = !0,
					console.warn(
						"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
					));
		};
	})();
	ve.colors = [
		"#0000CC",
		"#0000FF",
		"#0033CC",
		"#0033FF",
		"#0066CC",
		"#0066FF",
		"#0099CC",
		"#0099FF",
		"#00CC00",
		"#00CC33",
		"#00CC66",
		"#00CC99",
		"#00CCCC",
		"#00CCFF",
		"#3300CC",
		"#3300FF",
		"#3333CC",
		"#3333FF",
		"#3366CC",
		"#3366FF",
		"#3399CC",
		"#3399FF",
		"#33CC00",
		"#33CC33",
		"#33CC66",
		"#33CC99",
		"#33CCCC",
		"#33CCFF",
		"#6600CC",
		"#6600FF",
		"#6633CC",
		"#6633FF",
		"#66CC00",
		"#66CC33",
		"#9900CC",
		"#9900FF",
		"#9933CC",
		"#9933FF",
		"#99CC00",
		"#99CC33",
		"#CC0000",
		"#CC0033",
		"#CC0066",
		"#CC0099",
		"#CC00CC",
		"#CC00FF",
		"#CC3300",
		"#CC3333",
		"#CC3366",
		"#CC3399",
		"#CC33CC",
		"#CC33FF",
		"#CC6600",
		"#CC6633",
		"#CC9900",
		"#CC9933",
		"#CCCC00",
		"#CCCC33",
		"#FF0000",
		"#FF0033",
		"#FF0066",
		"#FF0099",
		"#FF00CC",
		"#FF00FF",
		"#FF3300",
		"#FF3333",
		"#FF3366",
		"#FF3399",
		"#FF33CC",
		"#FF33FF",
		"#FF6600",
		"#FF6633",
		"#FF9900",
		"#FF9933",
		"#FFCC00",
		"#FFCC33",
	];
	function ic() {
		return typeof window != "undefined" && window.process &&
				(window.process.type === "renderer" || window.process.__nwjs)
			? !0
			: typeof navigator != "undefined" && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
			? !1
			: typeof document != "undefined" && document.documentElement &&
					document.documentElement.style &&
					document.documentElement.style.WebkitAppearance ||
				typeof window != "undefined" && window.console &&
					(window.console.firebug ||
						window.console.exception && window.console.table) ||
				typeof navigator != "undefined" && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
					parseInt(RegExp.$1, 10) >= 31 ||
				typeof navigator != "undefined" && navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	function sc(e) {
		if (
			e[0] = (this.useColors ? "%c" : "") + this.namespace +
				(this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") +
				"+" + Gr.exports.humanize(this.diff), !this.useColors
		) return;
		let t = "color: " + this.color;
		e.splice(1, 0, t, "color: inherit");
		let r = 0, n = 0;
		e[0].replace(/%[a-zA-Z%]/g, (o) => {
			o !== "%%" && (r++, o === "%c" && (n = r));
		}), e.splice(n, 0, t);
	}
	ve.log = console.debug || console.log || (() => {});
	function ac(e) {
		try {
			e ? ve.storage.setItem("debug", e) : ve.storage.removeItem("debug");
		} catch (t) {}
	}
	function uc() {
		let e;
		try {
			e = ve.storage.getItem("debug");
		} catch (t) {}
		return !e && typeof y != "undefined" && "env" in y && (e = y.env.DEBUG), e;
	}
	function lc() {
		try {
			return localStorage;
		} catch (e) {}
	}
	Gr.exports = lo()(ve);
	var { formatters: cc } = Gr.exports;
	cc.j = function (e) {
		try {
			return JSON.stringify(e);
		} catch (t) {
			return "[UnexpectedJSONParseError]: " + t.message;
		}
	};
});
var co = z((Wr) => {
	"use strict";
	d();
	p();
	f();
	Wr.isatty = function () {
		return !1;
	};
	function pc() {
		throw new Error("tty.ReadStream is not implemented");
	}
	Wr.ReadStream = pc;
	function fc() {
		throw new Error("tty.WriteStream is not implemented");
	}
	Wr.WriteStream = fc;
});
var ns = z(() => {
	"use strict";
	d();
	p();
	f();
});
var is = z((fg, os) => {
	"use strict";
	d();
	p();
	f();
	os.exports = (e, t = y.argv) => {
		let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
			n = t.indexOf(r + e),
			o = t.indexOf("--");
		return n !== -1 && (o === -1 || n < o);
	};
});
var us = z((yg, as) => {
	"use strict";
	d();
	p();
	f();
	var dc = ns(), ss = co(), Ce = is(), { env: te } = y, Ye;
	Ce("no-color") || Ce("no-colors") || Ce("color=false") || Ce("color=never")
		? Ye = 0
		: (Ce("color") || Ce("colors") || Ce("color=true") || Ce("color=always")) &&
			(Ye = 1);
	"FORCE_COLOR" in te &&
		(te.FORCE_COLOR === "true"
			? Ye = 1
			: te.FORCE_COLOR === "false"
			? Ye = 0
			: Ye = te.FORCE_COLOR.length === 0
				? 1
				: Math.min(parseInt(te.FORCE_COLOR, 10), 3));
	function po(e) {
		return e === 0
			? !1
			: { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
	}
	function fo(e, t) {
		if (Ye === 0) return 0;
		if (Ce("color=16m") || Ce("color=full") || Ce("color=truecolor")) return 3;
		if (Ce("color=256")) return 2;
		if (e && !t && Ye === void 0) return 0;
		let r = Ye || 0;
		if (te.TERM === "dumb") return r;
		if (y.platform === "win32") {
			let n = dc.release().split(".");
			return Number(n[0]) >= 10 && Number(n[2]) >= 10586
				? Number(n[2]) >= 14931 ? 3 : 2
				: 1;
		}
		if ("CI" in te) {
			return [
					"TRAVIS",
					"CIRCLECI",
					"APPVEYOR",
					"GITLAB_CI",
					"GITHUB_ACTIONS",
					"BUILDKITE",
				].some((n) => n in te) || te.CI_NAME === "codeship"
				? 1
				: r;
		}
		if ("TEAMCITY_VERSION" in te) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(te.TEAMCITY_VERSION) ? 1 : 0;
		}
		if (te.COLORTERM === "truecolor") return 3;
		if ("TERM_PROGRAM" in te) {
			let n = parseInt((te.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
			switch (te.TERM_PROGRAM) {
				case "iTerm.app":
					return n >= 3 ? 3 : 2;
				case "Apple_Terminal":
					return 2;
			}
		}
		return /-256(color)?$/i.test(te.TERM)
			? 2
			: /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
					te.TERM,
				) || "COLORTERM" in te
			? 1
			: r;
	}
	function mc(e) {
		let t = fo(e, e && e.isTTY);
		return po(t);
	}
	as.exports = {
		supportsColor: mc,
		stdout: po(fo(!0, ss.isatty(1))),
		stderr: po(fo(!0, ss.isatty(2))),
	};
});
var cs = z((se, zr) => {
	"use strict";
	d();
	p();
	f();
	var gc = co(), Hr = uo();
	se.init = Pc;
	se.log = bc;
	se.formatArgs = hc;
	se.save = wc;
	se.load = Ec;
	se.useColors = yc;
	se.destroy = Hr.deprecate(
		() => {},
		"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
	);
	se.colors = [6, 2, 3, 4, 5, 1];
	try {
		let e = us();
		e && (e.stderr || e).level >= 2 &&
			(se.colors = [
				20,
				21,
				26,
				27,
				32,
				33,
				38,
				39,
				40,
				41,
				42,
				43,
				44,
				45,
				56,
				57,
				62,
				63,
				68,
				69,
				74,
				75,
				76,
				77,
				78,
				79,
				80,
				81,
				92,
				93,
				98,
				99,
				112,
				113,
				128,
				129,
				134,
				135,
				148,
				149,
				160,
				161,
				162,
				163,
				164,
				165,
				166,
				167,
				168,
				169,
				170,
				171,
				172,
				173,
				178,
				179,
				184,
				185,
				196,
				197,
				198,
				199,
				200,
				201,
				202,
				203,
				204,
				205,
				206,
				207,
				208,
				209,
				214,
				215,
				220,
				221,
			]);
	} catch (e) {}
	se.inspectOpts = Object.keys(y.env).filter((e) => /^debug_/i.test(e)).reduce(
		(e, t) => {
			let r = t.substring(6).toLowerCase().replace(
					/_([a-z])/g,
					(o, i) => i.toUpperCase(),
				),
				n = y.env[t];
			return /^(yes|on|true|enabled)$/i.test(n)
				? n = !0
				: /^(no|off|false|disabled)$/i.test(n)
				? n = !1
				: n === "null"
				? n = null
				: n = Number(n),
				e[r] = n,
				e;
		},
		{},
	);
	function yc() {
		return "colors" in se.inspectOpts
			? !!se.inspectOpts.colors
			: gc.isatty(y.stderr.fd);
	}
	function hc(e) {
		let { namespace: t, useColors: r } = this;
		if (r) {
			let n = this.color,
				o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
				i = `  ${o};1m${t} \x1B[0m`;
			e[0] = i + e[0].split(`
`).join(
				`
` + i,
			), e.push(o + "m+" + zr.exports.humanize(this.diff) + "\x1B[0m");
		} else e[0] = xc() + t + " " + e[0];
	}
	function xc() {
		return se.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
	}
	function bc(...e) {
		return y.stderr.write(
			Hr.format(...e) + `
`,
		);
	}
	function wc(e) {
		e ? y.env.DEBUG = e : delete y.env.DEBUG;
	}
	function Ec() {
		return y.env.DEBUG;
	}
	function Pc(e) {
		e.inspectOpts = {};
		let t = Object.keys(se.inspectOpts);
		for (let r = 0; r < t.length; r++) {
			e.inspectOpts[t[r]] = se.inspectOpts[t[r]];
		}
	}
	zr.exports = lo()(se);
	var { formatters: ls } = zr.exports;
	ls.o = function (e) {
		return this.inspectOpts.colors = this.useColors,
			Hr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
	};
	ls.O = function (e) {
		return this.inspectOpts.colors = this.useColors,
			Hr.inspect(e, this.inspectOpts);
	};
});
var ps = z((vg, mo) => {
	"use strict";
	d();
	p();
	f();
	typeof y == "undefined" || y.type === "renderer" || y.browser === !0 ||
		y.__nwjs
		? mo.exports = rs()
		: mo.exports = cs();
});
function Cc() {
	return !1;
}
var Mc,
	Rc,
	nn,
	yo = Dr(() => {
		"use strict";
		d();
		p();
		f();
		Mc = {}, Rc = { existsSync: Cc, promises: Mc }, nn = Rc;
	});
var ho = z((cy, Ps) => {
	"use strict";
	d();
	p();
	f();
	function De(e) {
		if (typeof e != "string") {
			throw new TypeError(
				"Path must be a string. Received " + JSON.stringify(e),
			);
		}
	}
	function Es(e, t) {
		for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
			if (a < e.length) s = e.charCodeAt(a);
			else {
				if (s === 47) break;
				s = 47;
			}
			if (s === 47) {
				if (!(o === a - 1 || i === 1)) {
					if (o !== a - 1 && i === 2) {
						if (
							r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 ||
							r.charCodeAt(r.length - 2) !== 46
						) {
							if (r.length > 2) {
								var u = r.lastIndexOf("/");
								if (u !== r.length - 1) {
									u === -1
										? (r = "", n = 0)
										: (r = r.slice(0, u),
											n = r.length - 1 - r.lastIndexOf("/")),
										o = a,
										i = 0;
									continue;
								}
							} else if (r.length === 2 || r.length === 1) {
								r = "", n = 0, o = a, i = 0;
								continue;
							}
						}
						t && (r.length > 0 ? r += "/.." : r = "..", n = 2);
					} else {r.length > 0
							? r += "/" + e.slice(o + 1, a)
							: r = e.slice(o + 1, a),
							n = a - o - 1;}
				}
				o = a, i = 0;
			} else s === 46 && i !== -1 ? ++i : i = -1;
		}
		return r;
	}
	function Sc(e, t) {
		var r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
		return r ? r === t.root ? r + n : r + e + n : n;
	}
	var Nt = {
		resolve: function () {
			for (
				var e = "", t = !1, r, n = arguments.length - 1;
				n >= -1 && !t;
				n--
			) {
				var o;
				n >= 0 ? o = arguments[n] : (r === void 0 && (r = y.cwd()), o = r),
					De(o),
					o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
			}
			return e = Es(e, !t),
				t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
		},
		normalize: function (e) {
			if (De(e), e.length === 0) return ".";
			var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
			return e = Es(e, !t),
				e.length === 0 && !t && (e = "."),
				e.length > 0 && r && (e += "/"),
				t ? "/" + e : e;
		},
		isAbsolute: function (e) {
			return De(e), e.length > 0 && e.charCodeAt(0) === 47;
		},
		join: function () {
			if (arguments.length === 0) return ".";
			for (var e, t = 0; t < arguments.length; ++t) {
				var r = arguments[t];
				De(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
			}
			return e === void 0 ? "." : Nt.normalize(e);
		},
		relative: function (e, t) {
			if (
				De(e), De(t), e === t || (e = Nt.resolve(e), t = Nt.resolve(t), e === t)
			) return "";
			for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
			for (
				var n = e.length, o = n - r, i = 1;
				i < t.length && t.charCodeAt(i) === 47;
				++i
			);
			for (
				var s = t.length, a = s - i, u = o < a ? o : a, l = -1, c = 0;
				c <= u;
				++c
			) {
				if (c === u) {
					if (a > u) {
						if (t.charCodeAt(i + c) === 47) return t.slice(i + c + 1);
						if (c === 0) return t.slice(i + c);
					} else {o > u &&
							(e.charCodeAt(r + c) === 47 ? l = c : c === 0 && (l = 0));}
					break;
				}
				var m = e.charCodeAt(r + c), g = t.charCodeAt(i + c);
				if (m !== g) break;
				m === 47 && (l = c);
			}
			var w = "";
			for (c = r + l + 1; c <= n; ++c) {
				(c === n || e.charCodeAt(c) === 47) &&
					(w.length === 0 ? w += ".." : w += "/..");
			}
			return w.length > 0
				? w + t.slice(i + l)
				: (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
		},
		_makeLong: function (e) {
			return e;
		},
		dirname: function (e) {
			if (De(e), e.length === 0) return ".";
			for (
				var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
				i >= 1;
				--i
			) {
				if (t = e.charCodeAt(i), t === 47) {
					if (!o) {
						n = i;
						break;
					}
				} else o = !1;
			}
			return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : e.slice(0, n);
		},
		basename: function (e, t) {
			if (t !== void 0 && typeof t != "string") {
				throw new TypeError('"ext" argument must be a string');
			}
			De(e);
			var r = 0, n = -1, o = !0, i;
			if (t !== void 0 && t.length > 0 && t.length <= e.length) {
				if (t.length === e.length && t === e) return "";
				var s = t.length - 1, a = -1;
				for (i = e.length - 1; i >= 0; --i) {
					var u = e.charCodeAt(i);
					if (u === 47) {
						if (!o) {
							r = i + 1;
							break;
						}
					} else {a === -1 && (o = !1, a = i + 1),
							s >= 0 && (u === t.charCodeAt(s)
								? --s === -1 && (n = i)
								: (s = -1, n = a));}
				}
				return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
			} else {
				for (i = e.length - 1; i >= 0; --i) {
					if (e.charCodeAt(i) === 47) {
						if (!o) {
							r = i + 1;
							break;
						}
					} else n === -1 && (o = !1, n = i + 1);
				}
				return n === -1 ? "" : e.slice(r, n);
			}
		},
		extname: function (e) {
			De(e);
			for (
				var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
				s >= 0;
				--s
			) {
				var a = e.charCodeAt(s);
				if (a === 47) {
					if (!o) {
						r = s + 1;
						break;
					}
					continue;
				}
				n === -1 && (o = !1, n = s + 1),
					a === 46
						? t === -1 ? t = s : i !== 1 && (i = 1)
						: t !== -1 && (i = -1);
			}
			return t === -1 || n === -1 || i === 0 ||
					i === 1 && t === n - 1 && t === r + 1
				? ""
				: e.slice(t, n);
		},
		format: function (e) {
			if (e === null || typeof e != "object") {
				throw new TypeError(
					'The "pathObject" argument must be of type Object. Received type ' +
						typeof e,
				);
			}
			return Sc("/", e);
		},
		parse: function (e) {
			De(e);
			var t = { root: "", dir: "", base: "", ext: "", name: "" };
			if (e.length === 0) return t;
			var r = e.charCodeAt(0), n = r === 47, o;
			n ? (t.root = "/", o = 1) : o = 0;
			for (
				var i = -1, s = 0, a = -1, u = !0, l = e.length - 1, c = 0;
				l >= o;
				--l
			) {
				if (r = e.charCodeAt(l), r === 47) {
					if (!u) {
						s = l + 1;
						break;
					}
					continue;
				}
				a === -1 && (u = !1, a = l + 1),
					r === 46
						? i === -1 ? i = l : c !== 1 && (c = 1)
						: i !== -1 && (c = -1);
			}
			return i === -1 || a === -1 || c === 0 ||
					c === 1 && i === a - 1 && i === s + 1
				? a !== -1 &&
					(s === 0 && n
						? t.base = t.name = e.slice(1, a)
						: t.base = t.name = e.slice(s, a))
				: (s === 0 && n
					? (t.name = e.slice(1, i), t.base = e.slice(1, a))
					: (t.name = e.slice(s, i), t.base = e.slice(s, a)),
					t.ext = e.slice(i, a)),
				s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"),
				t;
		},
		sep: "/",
		delimiter: ":",
		win32: null,
		posix: null,
	};
	Nt.posix = Nt;
	Ps.exports = Nt;
});
var Ts = z((xy, As) => {
	"use strict";
	d();
	p();
	f();
	As.exports = (e) => {
		let t = e.match(/^[ \t]*(?=\S)/gm);
		return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
	};
});
var Ms = z((Py, Cs) => {
	"use strict";
	d();
	p();
	f();
	var Fc = Ts();
	Cs.exports = (e) => {
		let t = Fc(e);
		if (t === 0) return e;
		let r = new RegExp(`^[ \\t]{${t}}`, "gm");
		return e.replace(r, "");
	};
});
var Ss = z((Oy, wo) => {
	"use strict";
	d();
	p();
	f();
	var Ic = Object.prototype.hasOwnProperty, de = "~";
	function nr() {}
	Object.create &&
		(nr.prototype = Object.create(null), new nr().__proto__ || (de = !1));
	function kc(e, t, r) {
		this.fn = e, this.context = t, this.once = r || !1;
	}
	function Rs(e, t, r, n, o) {
		if (typeof r != "function") {
			throw new TypeError("The listener must be a function");
		}
		var i = new kc(r, n || e, o), s = de ? de + t : t;
		return e._events[s]
			? e._events[s].fn
				? e._events[s] = [e._events[s], i]
				: e._events[s].push(i)
			: (e._events[s] = i, e._eventsCount++),
			e;
	}
	function on(e, t) {
		--e._eventsCount === 0 ? e._events = new nr() : delete e._events[t];
	}
	function le() {
		this._events = new nr(), this._eventsCount = 0;
	}
	le.prototype.eventNames = function () {
		var e = [], t, r;
		if (this._eventsCount === 0) return e;
		for (r in t = this._events) Ic.call(t, r) && e.push(de ? r.slice(1) : r);
		return Object.getOwnPropertySymbols
			? e.concat(Object.getOwnPropertySymbols(t))
			: e;
	};
	le.prototype.listeners = function (e) {
		var t = de ? de + e : e, r = this._events[t];
		if (!r) return [];
		if (r.fn) return [r.fn];
		for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
		return i;
	};
	le.prototype.listenerCount = function (e) {
		var t = de ? de + e : e, r = this._events[t];
		return r ? r.fn ? 1 : r.length : 0;
	};
	le.prototype.emit = function (e, t, r, n, o, i) {
		var s = de ? de + e : e;
		if (!this._events[s]) return !1;
		var a = this._events[s], u = arguments.length, l, c;
		if (a.fn) {
			switch (a.once && this.removeListener(e, a.fn, void 0, !0), u) {
				case 1:
					return a.fn.call(a.context), !0;
				case 2:
					return a.fn.call(a.context, t), !0;
				case 3:
					return a.fn.call(a.context, t, r), !0;
				case 4:
					return a.fn.call(a.context, t, r, n), !0;
				case 5:
					return a.fn.call(a.context, t, r, n, o), !0;
				case 6:
					return a.fn.call(a.context, t, r, n, o, i), !0;
			}
			for (c = 1, l = new Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
			a.fn.apply(a.context, l);
		} else {
			var m = a.length, g;
			for (c = 0; c < m; c++) {
				switch (a[c].once && this.removeListener(e, a[c].fn, void 0, !0), u) {
					case 1:
						a[c].fn.call(a[c].context);
						break;
					case 2:
						a[c].fn.call(a[c].context, t);
						break;
					case 3:
						a[c].fn.call(a[c].context, t, r);
						break;
					case 4:
						a[c].fn.call(a[c].context, t, r, n);
						break;
					default:
						if (!l) {
							for (g = 1, l = new Array(u - 1); g < u; g++) {
								l[g - 1] = arguments[g];
							}
						}
						a[c].fn.apply(a[c].context, l);
				}
			}
		}
		return !0;
	};
	le.prototype.on = function (e, t, r) {
		return Rs(this, e, t, r, !1);
	};
	le.prototype.once = function (e, t, r) {
		return Rs(this, e, t, r, !0);
	};
	le.prototype.removeListener = function (e, t, r, n) {
		var o = de ? de + e : e;
		if (!this._events[o]) return this;
		if (!t) return on(this, o), this;
		var i = this._events[o];
		if (i.fn) {
			i.fn === t && (!n || i.once) && (!r || i.context === r) && on(this, o);
		} else {
			for (var s = 0, a = [], u = i.length; s < u; s++) {
				(i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) &&
					a.push(i[s]);
			}
			a.length ? this._events[o] = a.length === 1 ? a[0] : a : on(this, o);
		}
		return this;
	};
	le.prototype.removeAllListeners = function (e) {
		var t;
		return e
			? (t = de ? de + e : e, this._events[t] && on(this, t))
			: (this._events = new nr(), this._eventsCount = 0),
			this;
	};
	le.prototype.off = le.prototype.removeListener;
	le.prototype.addListener = le.prototype.on;
	le.prefixed = de;
	le.EventEmitter = le;
	typeof wo < "u" && (wo.exports = le);
});
var Fs = z((Dy, Os) => {
	"use strict";
	d();
	p();
	f();
	Os.exports = (e, t = 1, r) => {
		if (
			r = { indent: " ", includeEmptyLines: !1, ...r }, typeof e != "string"
		) {
			throw new TypeError(
				`Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
			);
		}
		if (typeof t != "number") {
			throw new TypeError(
				`Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
			);
		}
		if (typeof r.indent != "string") {
			throw new TypeError(
				`Expected \`options.indent\` to be a \`string\`, got \`${typeof r
					.indent}\``,
			);
		}
		if (t === 0) return e;
		let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
		return e.replace(n, r.indent.repeat(t));
	};
});
var Ds = z((qy, ks) => {
	"use strict";
	d();
	p();
	f();
	ks.exports = ({ onlyFirst: e = !1 } = {}) => {
		let t = [
			"[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
			"(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
		].join("|");
		return new RegExp(t, e ? void 0 : "g");
	};
});
var Ns = z((Qy, _s) => {
	"use strict";
	d();
	p();
	f();
	var Lc = Ds();
	_s.exports = (e) => typeof e == "string" ? e.replace(Lc(), "") : e;
});
var js = z(() => {
	"use strict";
	d();
	p();
	f();
});
var Xo = z((nM, Xa) => {
	"use strict";
	d();
	p();
	f();
	Xa.exports = function () {
		function e(t, r, n, o, i) {
			return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
		}
		return function (t, r) {
			if (t === r) return 0;
			if (t.length > r.length) {
				var n = t;
				t = r, r = n;
			}
			for (
				var o = t.length, i = r.length;
				o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);
			) o--, i--;
			for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s);) s++;
			if (o -= s, i -= s, o === 0 || i < 3) return i;
			var a = 0, u, l, c, m, g, w, E, x, T, R, S, C, M = [];
			for (u = 0; u < o; u++) M.push(u + 1), M.push(t.charCodeAt(s + u));
			for (var N = M.length - 1; a < i - 3;) {
				for (
					T = r.charCodeAt(s + (l = a)),
						R = r.charCodeAt(s + (c = a + 1)),
						S = r.charCodeAt(s + (m = a + 2)),
						C = r.charCodeAt(s + (g = a + 3)),
						w = a += 4,
						u = 0;
					u < N;
					u += 2
				) {
					E = M[u],
						x = M[u + 1],
						l = e(E, l, c, T, x),
						c = e(l, c, m, R, x),
						m = e(c, m, g, S, x),
						w = e(m, g, w, C, x),
						M[u] = w,
						g = m,
						m = c,
						c = l,
						l = E;
				}
			}
			for (; a < i;) {
				for (T = r.charCodeAt(s + (l = a)), w = ++a, u = 0; u < N; u += 2) {
					E = M[u], M[u] = w = e(E, l, w, T, M[u + 1]), l = E;
				}
			}
			return w;
		};
	}();
});
d();
p();
f();
var Di = {};
_r(Di, { defineExtension: () => Ii, getExtensionContext: () => ki });
d();
p();
f();
d();
p();
f();
function Ii(e) {
	return typeof e == "function" ? e : (t) => t.$extends(e);
}
d();
p();
f();
function ki(e) {
	return e;
}
var Ni = {};
_r(Ni, { validator: () => _i });
d();
p();
f();
d();
p();
f();
function _i(...e) {
	return (t) => t;
}
var $i = {};
_r($i, {
	Extensions: () => Bi,
	Public: () => Li,
	Result: () => ji,
	Utils: () => Ui,
});
d();
p();
f();
var Bi = {};
d();
p();
f();
var Li = {};
d();
p();
f();
var ji = {};
d();
p();
f();
var Ui = {};
d();
p();
f();
d();
p();
f();
d();
p();
f();
var ze = (e, t) => {
	let r = {};
	for (let n of e) {
		let o = n[t];
		r[o] = n;
	}
	return r;
};
function qi(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var Xn = class {
	constructor(t) {
		this.document = t;
		this.compositeNames = new Set(this.datamodel.types.map((r) => r.name)),
			this.typeAndModelMap = this.buildTypeModelMap(),
			this.mappingsMap = this.buildMappingsMap(),
			this.outputTypeMap = this.buildMergedOutputTypeMap(),
			this.rootFieldMap = this.buildRootFieldMap(),
			this.inputTypesByName = this.buildInputTypesMap();
	}
	get datamodel() {
		return this.document.datamodel;
	}
	get mappings() {
		return this.document.mappings;
	}
	get schema() {
		return this.document.schema;
	}
	get inputObjectTypes() {
		return this.schema.inputObjectTypes;
	}
	get outputObjectTypes() {
		return this.schema.outputObjectTypes;
	}
	isComposite(t) {
		return this.compositeNames.has(t);
	}
	getOtherOperationNames() {
		return [
			Object.values(this.mappings.otherOperations.write),
			Object.values(this.mappings.otherOperations.read),
		].flat();
	}
	hasEnumInNamespace(t, r) {
		var n;
		return ((n = this.schema.enumTypes[r]) == null
			? void 0
			: n.find((o) => o.name === t)) !== void 0;
	}
	resolveInputObjectType(t) {
		return this.inputTypesByName.get(Yn(t.type, t.namespace));
	}
	resolveOutputObjectType(t) {
		var r;
		if (t.location === "outputObjectTypes") {
			return this.outputObjectTypes[(r = t.namespace) != null ? r : "prisma"]
				.find((n) => n.name === t.type);
		}
	}
	buildModelMap() {
		return ze(this.datamodel.models, "name");
	}
	buildTypeMap() {
		return ze(this.datamodel.types, "name");
	}
	buildTypeModelMap() {
		return { ...this.buildTypeMap(), ...this.buildModelMap() };
	}
	buildMappingsMap() {
		return ze(this.mappings.modelOperations, "model");
	}
	buildMergedOutputTypeMap() {
		return {
			model: ze(this.schema.outputObjectTypes.model, "name"),
			prisma: ze(this.schema.outputObjectTypes.prisma, "name"),
		};
	}
	buildRootFieldMap() {
		return {
			...ze(this.outputTypeMap.prisma.Query.fields, "name"),
			...ze(this.outputTypeMap.prisma.Mutation.fields, "name"),
		};
	}
	buildInputTypesMap() {
		let t = new Map();
		for (let r of this.inputObjectTypes.prisma) t.set(Yn(r.name, "prisma"), r);
		if (!this.inputObjectTypes.model) return t;
		for (let r of this.inputObjectTypes.model) t.set(Yn(r.name, "model"), r);
		return t;
	}
};
function Yn(e, t) {
	return t ? `${t}.${e}` : e;
}
d();
p();
f();
d();
p();
f();
var Me;
((t) => {
	let e;
	((
		C,
	) => (C.findUnique = "findUnique",
		C.findUniqueOrThrow = "findUniqueOrThrow",
		C.findFirst = "findFirst",
		C.findFirstOrThrow = "findFirstOrThrow",
		C.findMany = "findMany",
		C.create = "create",
		C.createMany = "createMany",
		C.update = "update",
		C.updateMany = "updateMany",
		C.upsert = "upsert",
		C.delete = "delete",
		C.deleteMany = "deleteMany",
		C.groupBy = "groupBy",
		C.count = "count",
		C.aggregate = "aggregate",
		C.findRaw = "findRaw",
		C.aggregateRaw = "aggregateRaw"))(
			e = t.ModelAction || (t.ModelAction = {}),
		);
})(Me || (Me = {}));
d();
p();
f();
var Yr = Te(ps()), vc = 100, Zr = [], fs, ds;
typeof y != "undefined" &&
	typeof ((fs = y.stderr) == null ? void 0 : fs.write) != "function" &&
	(Yr.default.log = (ds = console.debug) != null ? ds : console.log);
function Ac(e) {
	let t = (0, Yr.default)(e),
		r = Object.assign(
			(
				...n
			) => (t.log = r.log,
				n.length !== 0 && Zr.push([e, ...n]),
				Zr.length > vc && Zr.shift(),
				t("", ...n)),
			t,
		);
	return r;
}
var ms = Object.assign(Ac, Yr.default);
function gs() {
	Zr.length = 0;
}
var xe = ms;
d();
p();
f();
var go, ys, hs, xs, bs = !0;
typeof y != "undefined" &&
	({ FORCE_COLOR: go, NODE_DISABLE_COLORS: ys, NO_COLOR: hs, TERM: xs } =
		y.env || {},
		bs = y.stdout && y.stdout.isTTY);
var Tc = {
	enabled: !ys && hs == null && xs !== "dumb" &&
		(go != null && go !== "0" || bs),
};
function J(e, t) {
	let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, o = `\x1B[${t}m`;
	return function (i) {
		return !Tc.enabled || i == null
			? i
			: n + (~("" + i).indexOf(o) ? i.replace(r, o + n) : i) + o;
	};
}
var Fg = J(0, 0),
	Xe = J(1, 22),
	Xr = J(2, 22),
	Ig = J(3, 23),
	ws = J(4, 24),
	kg = J(7, 27),
	Dg = J(8, 28),
	_g = J(9, 29),
	Ng = J(30, 39),
	Dt = J(31, 39),
	en = J(32, 39),
	tn = J(33, 39),
	_t = J(34, 39),
	Bg = J(35, 39),
	et = J(36, 39),
	Lg = J(37, 39),
	rn = J(90, 39),
	jg = J(90, 39),
	Ug = J(40, 49),
	$g = J(41, 49),
	qg = J(42, 49),
	Vg = J(43, 49),
	Kg = J(44, 49),
	Jg = J(45, 49),
	Qg = J(46, 49),
	Gg = J(47, 49);
d();
p();
f();
d();
p();
f();
d();
p();
f();
d();
p();
f();
var vs = "library";
function xo(e) {
	let t = Oc();
	return t ||
		((e == null ? void 0 : e.config.engineType) === "library"
			? "library"
			: (e == null ? void 0 : e.config.engineType) === "binary"
			? "binary"
			: vs);
}
function Oc() {
	let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
	return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
d();
p();
f();
var rr = Te(ho());
function bo(e) {
	return rr.default.sep === rr.default.posix.sep
		? e
		: e.split(rr.default.sep).join(rr.default.posix.sep);
}
var Bt = {};
_r(Bt, {
	error: () => Nc,
	info: () => _c,
	log: () => Dc,
	query: () => Bc,
	should: () => Is,
	tags: () => or,
	warn: () => Eo,
});
d();
p();
f();
var or = {
		error: Dt("prisma:error"),
		warn: tn("prisma:warn"),
		info: et("prisma:info"),
		query: _t("prisma:query"),
	},
	Is = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function Dc(...e) {
	console.log(...e);
}
function Eo(e, ...t) {
	Is.warn() && console.warn(`${or.warn} ${e}`, ...t);
}
function _c(e, ...t) {
	console.info(`${or.info} ${e}`, ...t);
}
function Nc(e, ...t) {
	console.error(`${or.error} ${e}`, ...t);
}
function Bc(e, ...t) {
	console.log(`${or.query} ${e}`, ...t);
}
d();
p();
f();
function ht(e, t) {
	throw new Error(t);
}
d();
p();
f();
function Po(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
d();
p();
f();
var vo = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
d();
p();
f();
function Lt(e, t) {
	let r = {};
	for (let n of Object.keys(e)) r[n] = t(e[n], n);
	return r;
}
d();
p();
f();
function Ao(e, t) {
	if (e.length === 0) return;
	let r = e[0];
	for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
	return r;
}
d();
p();
f();
function k(e, t) {
	Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
p();
f();
var Bs = new Set(),
	sn = (e, t, ...r) => {
		Bs.has(e) || (Bs.add(e), Eo(t, ...r));
	};
d();
p();
f();
var me = class extends Error {
	constructor(r, { code: n, clientVersion: o, meta: i, batchRequestIdx: s }) {
		super(r);
		this.name = "PrismaClientKnownRequestError",
			this.code = n,
			this.clientVersion = o,
			this.meta = i,
			Object.defineProperty(this, "batchRequestIdx", {
				value: s,
				enumerable: !1,
				writable: !0,
			});
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientKnownRequestError";
	}
};
k(me, "PrismaClientKnownRequestError");
var tt = class extends me {
	constructor(t, r) {
		super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
	}
};
k(tt, "NotFoundError");
d();
p();
f();
var ae = class e extends Error {
	constructor(r, n, o) {
		super(r);
		this.name = "PrismaClientInitializationError",
			this.clientVersion = n,
			this.errorCode = o,
			Error.captureStackTrace(e);
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientInitializationError";
	}
};
k(ae, "PrismaClientInitializationError");
d();
p();
f();
var rt = class extends Error {
	constructor(r, n) {
		super(r);
		this.name = "PrismaClientRustPanicError", this.clientVersion = n;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientRustPanicError";
	}
};
k(rt, "PrismaClientRustPanicError");
d();
p();
f();
var Re = class extends Error {
	constructor(r, { clientVersion: n, batchRequestIdx: o }) {
		super(r);
		this.name = "PrismaClientUnknownRequestError",
			this.clientVersion = n,
			Object.defineProperty(this, "batchRequestIdx", {
				value: o,
				writable: !0,
				enumerable: !1,
			});
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientUnknownRequestError";
	}
};
k(Re, "PrismaClientUnknownRequestError");
d();
p();
f();
var ge = class extends Error {
	constructor(r, { clientVersion: n }) {
		super(r);
		this.name = "PrismaClientValidationError";
		this.clientVersion = n;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientValidationError";
	}
};
k(ge, "PrismaClientValidationError");
d();
p();
f();
var ir = class {
	constructor(t) {
		this._engine = t;
	}
	prometheus(t) {
		return this._engine.metrics({ format: "prometheus", ...t });
	}
	json(t) {
		return this._engine.metrics({ format: "json", ...t });
	}
};
d();
p();
f();
d();
p();
f();
function sr(e) {
	let t;
	return {
		get() {
			return t || (t = { value: e() }), t.value;
		},
	};
}
function jc(e, t) {
	let r = sr(() => Uc(t));
	Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function Uc(e) {
	return {
		datamodel: { models: To(e.models), enums: To(e.enums), types: To(e.types) },
	};
}
function To(e) {
	return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
p();
f();
var a2 = Te(js()), $u = Te(Ss());
yo();
var kr = Te(ho());
d();
p();
f();
var Ae = class e {
	constructor(t, r) {
		if (t.length - 1 !== r.length) {
			throw t.length === 0
				? new TypeError("Expected at least 1 string")
				: new TypeError(
					`Expected ${t.length} strings to have ${t.length - 1} values`,
				);
		}
		let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
		this.values = new Array(n),
			this.strings = new Array(n + 1),
			this.strings[0] = t[0];
		let o = 0, i = 0;
		for (; o < r.length;) {
			let s = r[o++], a = t[o];
			if (s instanceof e) {
				this.strings[i] += s.strings[0];
				let u = 0;
				for (; u < s.values.length;) {
					this.values[i++] = s.values[u++], this.strings[i] = s.strings[u];
				}
				this.strings[i] += a;
			} else this.values[i++] = s, this.strings[i] = a;
		}
	}
	get text() {
		let t = 1, r = this.strings[0];
		for (; t < this.strings.length;) r += `$${t}${this.strings[t++]}`;
		return r;
	}
	get sql() {
		let t = 1, r = this.strings[0];
		for (; t < this.strings.length;) r += `?${this.strings[t++]}`;
		return r;
	}
	inspect() {
		return { text: this.text, sql: this.sql, values: this.values };
	}
};
function $c(e, t = ",", r = "", n = "") {
	if (e.length === 0) {
		throw new TypeError(
			"Expected `join([])` to be called with an array of multiple elements, but got an empty array",
		);
	}
	return new Ae([r, ...Array(e.length - 1).fill(t), n], e);
}
function Us(e) {
	return new Ae([e], []);
}
var qc = Us("");
function $s(e, ...t) {
	return new Ae(e, t);
}
d();
p();
f();
d();
p();
f();
function ar(e) {
	return {
		getKeys() {
			return Object.keys(e);
		},
		getPropertyValue(t) {
			return e[t];
		},
	};
}
d();
p();
f();
function ye(e, t) {
	return {
		getKeys() {
			return [e];
		},
		getPropertyValue() {
			return t();
		},
	};
}
d();
p();
f();
d();
p();
f();
var _e = class {
	constructor() {
		this._map = new Map();
	}
	get(t) {
		var r;
		return (r = this._map.get(t)) == null ? void 0 : r.value;
	}
	set(t, r) {
		this._map.set(t, { value: r });
	}
	getOrCreate(t, r) {
		let n = this._map.get(t);
		if (n) return n.value;
		let o = r();
		return this.set(t, o), o;
	}
};
function xt(e) {
	let t = new _e();
	return {
		getKeys() {
			return e.getKeys();
		},
		getPropertyValue(r) {
			return t.getOrCreate(r, () => e.getPropertyValue(r));
		},
		getPropertyDescriptor(r) {
			var n;
			return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
		},
	};
}
d();
p();
f();
var Ks = Te(uo());
d();
p();
f();
var an = { enumerable: !0, configurable: !0, writable: !0 };
function un(e) {
	let t = new Set(e);
	return {
		getOwnPropertyDescriptor: () => an,
		has: (r, n) => t.has(n),
		set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
		ownKeys: () => [...t],
	};
}
var qs = Symbol.for("nodejs.util.inspect.custom");
function Ne(e, t) {
	let r = Vc(t),
		n = new Set(),
		o = new Proxy(e, {
			get(i, s) {
				if (n.has(s)) return i[s];
				let a = r.get(s);
				return a ? a.getPropertyValue(s) : i[s];
			},
			has(i, s) {
				var u, l;
				if (n.has(s)) return !0;
				let a = r.get(s);
				return a
					? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null ? l : !0
					: Reflect.has(i, s);
			},
			ownKeys(i) {
				let s = Vs(Reflect.ownKeys(i), r), a = Vs(Array.from(r.keys()), r);
				return [...new Set([...s, ...a, ...n])];
			},
			set(i, s, a) {
				var l, c;
				let u = r.get(s);
				return ((c = (l = u == null ? void 0 : u.getPropertyDescriptor) == null
							? void 0
							: l.call(u, s)) == null
						? void 0
						: c.writable) === !1
					? !1
					: (n.add(s), Reflect.set(i, s, a));
			},
			getOwnPropertyDescriptor(i, s) {
				let a = Reflect.getOwnPropertyDescriptor(i, s);
				if (a && !a.configurable) return a;
				let u = r.get(s);
				return u
					? u.getPropertyDescriptor
						? { ...an, ...u == null ? void 0 : u.getPropertyDescriptor(s) }
						: an
					: a;
			},
			defineProperty(i, s, a) {
				return n.add(s), Reflect.defineProperty(i, s, a);
			},
		});
	return o[qs] = function (i, s, a = Ks.inspect) {
		let u = { ...this };
		return delete u[qs], a(u, s);
	},
		o;
}
function Vc(e) {
	let t = new Map();
	for (let r of e) {
		let n = r.getKeys();
		for (let o of n) t.set(o, r);
	}
	return t;
}
function Vs(e, t) {
	return e.filter((r) => {
		var o, i;
		let n = t.get(r);
		return (i = (o = n == null ? void 0 : n.has) == null
				? void 0
				: o.call(n, r)) != null
			? i
			: !0;
	});
}
d();
p();
f();
function ur(e) {
	return {
		getKeys() {
			return e;
		},
		has() {
			return !1;
		},
		getPropertyValue() {},
	};
}
d();
p();
f();
d();
p();
f();
var jt = class {
	constructor(t = 0, r) {
		this.context = r;
		this.lines = [];
		this.currentLine = "";
		this.currentIndent = 0;
		this.currentIndent = t;
	}
	write(t) {
		return typeof t == "string" ? this.currentLine += t : t.write(this), this;
	}
	writeJoined(t, r) {
		let n = r.length - 1;
		for (let o = 0; o < r.length; o++) {
			this.write(r[o]), o !== n && this.write(t);
		}
		return this;
	}
	writeLine(t) {
		return this.write(t).newLine();
	}
	newLine() {
		this.lines.push(this.indentedCurrentLine()),
			this.currentLine = "",
			this.marginSymbol = void 0;
		let t = this.afterNextNewLineCallback;
		return this.afterNextNewLineCallback = void 0, t == null || t(), this;
	}
	withIndent(t) {
		return this.indent(), t(this), this.unindent(), this;
	}
	afterNextNewline(t) {
		return this.afterNextNewLineCallback = t, this;
	}
	indent() {
		return this.currentIndent++, this;
	}
	unindent() {
		return this.currentIndent > 0 && this.currentIndent--, this;
	}
	addMarginSymbol(t) {
		return this.marginSymbol = t, this;
	}
	toString() {
		return this.lines.concat(this.indentedCurrentLine()).join(`
`);
	}
	getCurrentLineLength() {
		return this.currentLine.length;
	}
	indentedCurrentLine() {
		let t = this.currentLine.padStart(
			this.currentLine.length + 2 * this.currentIndent,
		);
		return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
	}
};
d();
p();
f();
d();
p();
f();
var ln = Symbol(),
	Co = new WeakMap(),
	qe = class {
		constructor(t) {
			t === ln ? Co.set(this, `Prisma.${this._getName()}`) : Co.set(
				this,
				`new Prisma.${this._getNamespace()}.${this._getName()}()`,
			);
		}
		_getName() {
			return this.constructor.name;
		}
		toString() {
			return Co.get(this);
		}
	},
	lr = class extends qe {
		_getNamespace() {
			return "NullTypes";
		}
	},
	cr = class extends lr {};
Ro(cr, "DbNull");
var pr = class extends lr {};
Ro(pr, "JsonNull");
var fr = class extends lr {};
Ro(fr, "AnyNull");
var Mo = {
	classes: { DbNull: cr, JsonNull: pr, AnyNull: fr },
	instances: { DbNull: new cr(ln), JsonNull: new pr(ln), AnyNull: new fr(ln) },
};
function Ro(e, t) {
	Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
p();
f();
function Ut(e) {
	return e instanceof Date ||
		Object.prototype.toString.call(e) === "[object Date]";
}
function cn(e) {
	return e.toString() !== "Invalid Date";
}
d();
p();
f();
d();
p();
f();
var $t = 9e15,
	st = 1e9,
	So = "0123456789abcdef",
	fn =
		"2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
	dn =
		"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
	Oo = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -$t,
		maxE: $t,
		crypto: !1,
	},
	Ws,
	Ve,
	D = !0,
	gn = "[DecimalError] ",
	it = gn + "Invalid argument: ",
	Hs = gn + "Precision limit exceeded",
	zs = gn + "crypto unavailable",
	Zs = "[object Decimal]",
	ce = Math.floor,
	X = Math.pow,
	Kc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
	Jc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
	Qc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
	Ys = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	Oe = 1e7,
	I = 7,
	Gc = 9007199254740991,
	Wc = fn.length - 1,
	Fo = dn.length - 1,
	v = { toStringTag: Zs };
v.absoluteValue = v.abs = function () {
	var e = new this.constructor(this);
	return e.s < 0 && (e.s = 1), F(e);
};
v.ceil = function () {
	return F(new this.constructor(this), this.e + 1, 2);
};
v.clampedTo = v.clamp = function (e, t) {
	var r, n = this, o = n.constructor;
	if (e = new o(e), t = new o(t), !e.s || !t.s) return new o(NaN);
	if (e.gt(t)) throw Error(it + t);
	return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
v.comparedTo = v.cmp = function (e) {
	var t,
		r,
		n,
		o,
		i = this,
		s = i.d,
		a = (e = new i.constructor(e)).d,
		u = i.s,
		l = e.s;
	if (!s || !a) {
		return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
	}
	if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
	if (u !== l) return u;
	if (i.e !== e.e) return i.e > e.e ^ u < 0 ? 1 : -1;
	for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t) {
		if (s[t] !== a[t]) return s[t] > a[t] ^ u < 0 ? 1 : -1;
	}
	return n === o ? 0 : n > o ^ u < 0 ? 1 : -1;
};
v.cosine = v.cos = function () {
	var e, t, r = this, n = r.constructor;
	return r.d
		? r.d[0]
			? (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + I,
				n.rounding = 1,
				r = Hc(n, na(n, r)),
				n.precision = e,
				n.rounding = t,
				F(Ve == 2 || Ve == 3 ? r.neg() : r, e, t, !0))
			: new n(1)
		: new n(NaN);
};
v.cubeRoot = v.cbrt = function () {
	var e, t, r, n, o, i, s, a, u, l, c = this, m = c.constructor;
	if (!c.isFinite() || c.isZero()) return new m(c);
	for (
		D = !1,
			i = c.s * X(c.s * c, 1 / 3),
			!i || Math.abs(i) == 1 / 0
				? (r = ue(c.d),
					e = c.e,
					(i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
					i = X(r, 1 / 3),
					e = ce((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
					i == 1 / 0
						? r = "5e" + e
						: (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e),
					n = new m(r),
					n.s = c.s)
				: n = new m(i.toString()),
			s = (e = m.precision) + 3;;
	) {
		if (
			a = n,
				u = a.times(a).times(a),
				l = u.plus(c),
				n = K(l.plus(c).times(a), l.plus(u), s + 2, 1),
				ue(a.d).slice(0, s) === (r = ue(n.d)).slice(0, s)
		) {
			if (r = r.slice(s - 3, s + 1), r == "9999" || !o && r == "4999") {
				if (!o && (F(a, e + 1, 0), a.times(a).times(a).eq(c))) {
					n = a;
					break;
				}
				s += 4, o = 1;
			} else {
				(!+r || !+r.slice(1) && r.charAt(0) == "5") &&
					(F(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
				break;
			}
		}
	}
	return D = !0, F(n, e, m.rounding, t);
};
v.decimalPlaces = v.dp = function () {
	var e, t = this.d, r = NaN;
	if (t) {
		if (e = t.length - 1, r = (e - ce(this.e / I)) * I, e = t[e], e) {
			for (; e % 10 == 0; e /= 10) {
				r--;
			}
		}
		r < 0 && (r = 0);
	}
	return r;
};
v.dividedBy = v.div = function (e) {
	return K(this, new this.constructor(e));
};
v.dividedToIntegerBy = v.divToInt = function (e) {
	var t = this, r = t.constructor;
	return F(K(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
v.equals = v.eq = function (e) {
	return this.cmp(e) === 0;
};
v.floor = function () {
	return F(new this.constructor(this), this.e + 1, 3);
};
v.greaterThan = v.gt = function (e) {
	return this.cmp(e) > 0;
};
v.greaterThanOrEqualTo = v.gte = function (e) {
	var t = this.cmp(e);
	return t == 1 || t === 0;
};
v.hyperbolicCosine = v.cosh = function () {
	var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
	if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
	if (i.isZero()) return a;
	r = s.precision,
		n = s.rounding,
		s.precision = r + Math.max(i.e, i.sd()) + 4,
		s.rounding = 1,
		o = i.d.length,
		o < 32
			? (e = Math.ceil(o / 3), t = (1 / hn(4, e)).toString())
			: (e = 16, t = "2.3283064365386962890625e-10"),
		i = qt(s, 1, i.times(t), new s(1), !0);
	for (var u, l = e, c = new s(8); l--;) {
		u = i.times(i), i = a.minus(u.times(c.minus(u.times(c))));
	}
	return F(i, s.precision = r, s.rounding = n, !0);
};
v.hyperbolicSine = v.sinh = function () {
	var e, t, r, n, o = this, i = o.constructor;
	if (!o.isFinite() || o.isZero()) return new i(o);
	if (
		t = i.precision,
			r = i.rounding,
			i.precision = t + Math.max(o.e, o.sd()) + 4,
			i.rounding = 1,
			n = o.d.length,
			n < 3
	) o = qt(i, 2, o, o, !0);
	else {
		e = 1.4 * Math.sqrt(n),
			e = e > 16 ? 16 : e | 0,
			o = o.times(1 / hn(5, e)),
			o = qt(i, 2, o, o, !0);
		for (var s, a = new i(5), u = new i(16), l = new i(20); e--;) {
			s = o.times(o), o = o.times(a.plus(s.times(u.times(s).plus(l))));
		}
	}
	return i.precision = t, i.rounding = r, F(o, t, r, !0);
};
v.hyperbolicTangent = v.tanh = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + 7,
				n.rounding = 1,
				K(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
		: new n(r.s);
};
v.inverseCosine = v.acos = function () {
	var e,
		t = this,
		r = t.constructor,
		n = t.abs().cmp(1),
		o = r.precision,
		i = r.rounding;
	return n !== -1
		? n === 0 ? t.isNeg() ? Se(r, o, i) : new r(0) : new r(NaN)
		: t.isZero()
		? Se(r, o + 4, i).times(.5)
		: (r.precision = o + 6,
			r.rounding = 1,
			t = t.asin(),
			e = Se(r, o + 4, i).times(.5),
			r.precision = o,
			r.rounding = i,
			e.minus(t));
};
v.inverseHyperbolicCosine = v.acosh = function () {
	var e, t, r = this, n = r.constructor;
	return r.lte(1)
		? new n(r.eq(1) ? 0 : NaN)
		: r.isFinite()
		? (e = n.precision,
			t = n.rounding,
			n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
			n.rounding = 1,
			D = !1,
			r = r.times(r).minus(1).sqrt().plus(r),
			D = !0,
			n.precision = e,
			n.rounding = t,
			r.ln())
		: new n(r);
};
v.inverseHyperbolicSine = v.asinh = function () {
	var e, t, r = this, n = r.constructor;
	return !r.isFinite() || r.isZero()
		? new n(r)
		: (e = n.precision,
			t = n.rounding,
			n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
			n.rounding = 1,
			D = !1,
			r = r.times(r).plus(1).sqrt().plus(r),
			D = !0,
			n.precision = e,
			n.rounding = t,
			r.ln());
};
v.inverseHyperbolicTangent = v.atanh = function () {
	var e, t, r, n, o = this, i = o.constructor;
	return o.isFinite()
		? o.e >= 0
			? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
			: (e = i.precision,
				t = i.rounding,
				n = o.sd(),
				Math.max(n, e) < 2 * -o.e - 1
					? F(new i(o), e, t, !0)
					: (i.precision = r = n - o.e,
						o = K(o.plus(1), new i(1).minus(o), r + e, 1),
						i.precision = e + 4,
						i.rounding = 1,
						o = o.ln(),
						i.precision = e,
						i.rounding = t,
						o.times(.5)))
		: new i(NaN);
};
v.inverseSine = v.asin = function () {
	var e, t, r, n, o = this, i = o.constructor;
	return o.isZero()
		? new i(o)
		: (t = o.abs().cmp(1),
			r = i.precision,
			n = i.rounding,
			t !== -1
				? t === 0 ? (e = Se(i, r + 4, n).times(.5), e.s = o.s, e) : new i(NaN)
				: (i.precision = r + 6,
					i.rounding = 1,
					o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),
					i.precision = r,
					i.rounding = n,
					o.times(2)));
};
v.inverseTangent = v.atan = function () {
	var e,
		t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		m = c.precision,
		g = c.rounding;
	if (l.isFinite()) {
		if (l.isZero()) return new c(l);
		if (l.abs().eq(1) && m + 4 <= Fo) {
			return s = Se(c, m + 4, g).times(.25), s.s = l.s, s;
		}
	} else {
		if (!l.s) return new c(NaN);
		if (m + 4 <= Fo) return s = Se(c, m + 4, g).times(.5), s.s = l.s, s;
	}
	for (
		c.precision = a = m + 10,
			c.rounding = 1,
			r = Math.min(28, a / I + 2 | 0),
			e = r;
		e;
		--e
	) l = l.div(l.times(l).plus(1).sqrt().plus(1));
	for (
		D = !1, t = Math.ceil(a / I), n = 1, u = l.times(l), s = new c(l), o = l;
		e !== -1;
	) {
		if (
			o = o.times(u),
				i = s.minus(o.div(n += 2)),
				o = o.times(u),
				s = i.plus(o.div(n += 2)),
				s.d[t] !== void 0
		) for (e = t; s.d[e] === i.d[e] && e--;);
	}
	return r && (s = s.times(2 << r - 1)),
		D = !0,
		F(s, c.precision = m, c.rounding = g, !0);
};
v.isFinite = function () {
	return !!this.d;
};
v.isInteger = v.isInt = function () {
	return !!this.d && ce(this.e / I) > this.d.length - 2;
};
v.isNaN = function () {
	return !this.s;
};
v.isNegative = v.isNeg = function () {
	return this.s < 0;
};
v.isPositive = v.isPos = function () {
	return this.s > 0;
};
v.isZero = function () {
	return !!this.d && this.d[0] === 0;
};
v.lessThan = v.lt = function (e) {
	return this.cmp(e) < 0;
};
v.lessThanOrEqualTo = v.lte = function (e) {
	return this.cmp(e) < 1;
};
v.logarithm = v.log = function (e) {
	var t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = this,
		c = l.constructor,
		m = c.precision,
		g = c.rounding,
		w = 5;
	if (e == null) e = new c(10), t = !0;
	else {
		if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) {
			return new c(NaN);
		}
		t = e.eq(10);
	}
	if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) {
		return new c(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
	}
	if (t) {
		if (r.length > 1) i = !0;
		else {
			for (o = r[0]; o % 10 === 0;) o /= 10;
			i = o !== 1;
		}
	}
	if (
		D = !1,
			a = m + w,
			s = ot(l, a),
			n = t ? mn(c, a + 10) : ot(e, a),
			u = K(s, n, a, 1),
			dr(u.d, o = m, g)
	) {
		do if (
			a += 10,
				s = ot(l, a),
				n = t ? mn(c, a + 10) : ot(e, a),
				u = K(s, n, a, 1),
				!i
		) {
			+ue(u.d).slice(o + 1, o + 15) + 1 == 1e14 && (u = F(u, m + 1, 0));
			break;
		} while (dr(u.d, o += 10, g));
	}
	return D = !0, F(u, m, g);
};
v.minus = v.sub = function (e) {
	var t, r, n, o, i, s, a, u, l, c, m, g, w = this, E = w.constructor;
	if (e = new E(e), !w.d || !e.d) {
		return !w.s || !e.s
			? e = new E(NaN)
			: w.d
			? e.s = -e.s
			: e = new E(e.d || w.s !== e.s ? w : NaN),
			e;
	}
	if (w.s != e.s) return e.s = -e.s, w.plus(e);
	if (l = w.d, g = e.d, a = E.precision, u = E.rounding, !l[0] || !g[0]) {
		if (g[0]) e.s = -e.s;
		else if (l[0]) e = new E(w);
		else return new E(u === 3 ? -0 : 0);
		return D ? F(e, a, u) : e;
	}
	if (r = ce(e.e / I), c = ce(w.e / I), l = l.slice(), i = c - r, i) {
		for (
			m = i < 0,
				m ? (t = l, i = -i, s = g.length) : (t = g, r = c, s = l.length),
				n = Math.max(Math.ceil(a / I), s) + 2,
				i > n && (i = n, t.length = 1),
				t.reverse(),
				n = i;
			n--;
		) t.push(0);
		t.reverse();
	} else {
		for (
			n = l.length, s = g.length, m = n < s, m && (s = n), n = 0;
			n < s;
			n++
		) {
			if (l[n] != g[n]) {
				m = l[n] < g[n];
				break;
			}
		}
		i = 0;
	}
	for (
		m && (t = l, l = g, g = t, e.s = -e.s), s = l.length, n = g.length - s;
		n > 0;
		--n
	) l[s++] = 0;
	for (n = g.length; n > i;) {
		if (l[--n] < g[n]) {
			for (o = n; o && l[--o] === 0;) l[o] = Oe - 1;
			--l[o], l[n] += Oe;
		}
		l[n] -= g[n];
	}
	for (; l[--s] === 0;) l.pop();
	for (; l[0] === 0; l.shift()) --r;
	return l[0]
		? (e.d = l, e.e = yn(l, r), D ? F(e, a, u) : e)
		: new E(u === 3 ? -0 : 0);
};
v.modulo = v.mod = function (e) {
	var t, r = this, n = r.constructor;
	return e = new n(e),
		!r.d || !e.s || e.d && !e.d[0]
			? new n(NaN)
			: !e.d || r.d && !r.d[0]
			? F(new n(r), n.precision, n.rounding)
			: (D = !1,
				n.modulo == 9
					? (t = K(r, e.abs(), 0, 3, 1), t.s *= e.s)
					: t = K(r, e, 0, n.modulo, 1),
				t = t.times(e),
				D = !0,
				r.minus(t));
};
v.naturalExponential = v.exp = function () {
	return Io(this);
};
v.naturalLogarithm = v.ln = function () {
	return ot(this);
};
v.negated = v.neg = function () {
	var e = new this.constructor(this);
	return e.s = -e.s, F(e);
};
v.plus = v.add = function (e) {
	var t, r, n, o, i, s, a, u, l, c, m = this, g = m.constructor;
	if (e = new g(e), !m.d || !e.d) {
		return !m.s || !e.s
			? e = new g(NaN)
			: m.d || (e = new g(e.d || m.s === e.s ? m : NaN)),
			e;
	}
	if (m.s != e.s) return e.s = -e.s, m.minus(e);
	if (l = m.d, c = e.d, a = g.precision, u = g.rounding, !l[0] || !c[0]) {
		return c[0] || (e = new g(m)), D ? F(e, a, u) : e;
	}
	if (i = ce(m.e / I), n = ce(e.e / I), l = l.slice(), o = i - n, o) {
		for (
			o < 0 ? (r = l, o = -o, s = c.length) : (r = c, n = i, s = l.length),
				i = Math.ceil(a / I),
				s = i > s ? i + 1 : s + 1,
				o > s && (o = s, r.length = 1),
				r.reverse();
			o--;
		) r.push(0);
		r.reverse();
	}
	for (
		s = l.length,
			o = c.length,
			s - o < 0 && (o = s, r = c, c = l, l = r),
			t = 0;
		o;
	) t = (l[--o] = l[o] + c[o] + t) / Oe | 0, l[o] %= Oe;
	for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
	return e.d = l, e.e = yn(l, n), D ? F(e, a, u) : e;
};
v.precision = v.sd = function (e) {
	var t, r = this;
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(it + e);
	return r.d ? (t = Xs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
v.round = function () {
	var e = this, t = e.constructor;
	return F(new t(e), e.e + 1, t.rounding);
};
v.sine = v.sin = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + Math.max(r.e, r.sd()) + I,
				n.rounding = 1,
				r = Zc(n, na(n, r)),
				n.precision = e,
				n.rounding = t,
				F(Ve > 2 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
v.squareRoot = v.sqrt = function () {
	var e, t, r, n, o, i, s = this, a = s.d, u = s.e, l = s.s, c = s.constructor;
	if (l !== 1 || !a || !a[0]) {
		return new c(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
	}
	for (
		D = !1,
			l = Math.sqrt(+s),
			l == 0 || l == 1 / 0
				? (t = ue(a),
					(t.length + u) % 2 == 0 && (t += "0"),
					l = Math.sqrt(t),
					u = ce((u + 1) / 2) - (u < 0 || u % 2),
					l == 1 / 0
						? t = "5e" + u
						: (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u),
					n = new c(t))
				: n = new c(l.toString()),
			r = (u = c.precision) + 3;;
	) {
		if (
			i = n,
				n = i.plus(K(s, i, r + 2, 1)).times(.5),
				ue(i.d).slice(0, r) === (t = ue(n.d)).slice(0, r)
		) {
			if (t = t.slice(r - 3, r + 1), t == "9999" || !o && t == "4999") {
				if (!o && (F(i, u + 1, 0), i.times(i).eq(s))) {
					n = i;
					break;
				}
				r += 4, o = 1;
			} else {
				(!+t || !+t.slice(1) && t.charAt(0) == "5") &&
					(F(n, u + 1, 1), e = !n.times(n).eq(s));
				break;
			}
		}
	}
	return D = !0, F(n, u, c.rounding, e);
};
v.tangent = v.tan = function () {
	var e, t, r = this, n = r.constructor;
	return r.isFinite()
		? r.isZero()
			? new n(r)
			: (e = n.precision,
				t = n.rounding,
				n.precision = e + 10,
				n.rounding = 1,
				r = r.sin(),
				r.s = 1,
				r = K(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
				n.precision = e,
				n.rounding = t,
				F(Ve == 2 || Ve == 4 ? r.neg() : r, e, t, !0))
		: new n(NaN);
};
v.times = v.mul = function (e) {
	var t,
		r,
		n,
		o,
		i,
		s,
		a,
		u,
		l,
		c = this,
		m = c.constructor,
		g = c.d,
		w = (e = new m(e)).d;
	if (e.s *= c.s, !g || !g[0] || !w || !w[0]) {
		return new m(
			!e.s || g && !g[0] && !w || w && !w[0] && !g
				? NaN
				: !g || !w
				? e.s / 0
				: e.s * 0,
		);
	}
	for (
		r = ce(c.e / I) + ce(e.e / I),
			u = g.length,
			l = w.length,
			u < l && (i = g, g = w, w = i, s = u, u = l, l = s),
			i = [],
			s = u + l,
			n = s;
		n--;
	) i.push(0);
	for (n = l; --n >= 0;) {
		for (t = 0, o = u + n; o > n;) {
			a = i[o] + w[n] * g[o - n - 1] + t, i[o--] = a % Oe | 0, t = a / Oe | 0;
		}
		i[o] = (i[o] + t) % Oe | 0;
	}
	for (; !i[--s];) i.pop();
	return t ? ++r : i.shift(),
		e.d = i,
		e.e = yn(i, r),
		D ? F(e, m.precision, m.rounding) : e;
};
v.toBinary = function (e, t) {
	return Do(this, 2, e, t);
};
v.toDecimalPlaces = v.toDP = function (e, t) {
	var r = this, n = r.constructor;
	return r = new n(r),
		e === void 0
			? r
			: (be(e, 0, st),
				t === void 0 ? t = n.rounding : be(t, 0, 8),
				F(r, e + r.e + 1, t));
};
v.toExponential = function (e, t) {
	var r, n = this, o = n.constructor;
	return e === void 0
		? r = Be(n, !0)
		: (be(e, 0, st),
			t === void 0 ? t = o.rounding : be(t, 0, 8),
			n = F(new o(n), e + 1, t),
			r = Be(n, !0, e + 1)),
		n.isNeg() && !n.isZero() ? "-" + r : r;
};
v.toFixed = function (e, t) {
	var r, n, o = this, i = o.constructor;
	return e === void 0
		? r = Be(o)
		: (be(e, 0, st),
			t === void 0 ? t = i.rounding : be(t, 0, 8),
			n = F(new i(o), e + o.e + 1, t),
			r = Be(n, !1, e + n.e + 1)),
		o.isNeg() && !o.isZero() ? "-" + r : r;
};
v.toFraction = function (e) {
	var t, r, n, o, i, s, a, u, l, c, m, g, w = this, E = w.d, x = w.constructor;
	if (!E) return new x(w);
	if (
		l = r = new x(1),
			n = u = new x(0),
			t = new x(n),
			i = t.e = Xs(E) - w.e - 1,
			s = i % I,
			t.d[0] = X(10, s < 0 ? I + s : s),
			e == null
	) e = i > 0 ? t : l;
	else {
		if (a = new x(e), !a.isInt() || a.lt(l)) throw Error(it + a);
		e = a.gt(t) ? i > 0 ? t : l : a;
	}
	for (
		D = !1,
			a = new x(ue(E)),
			c = x.precision,
			x.precision = i = E.length * I * 2;
		m = K(a, t, 0, 1, 1), o = r.plus(m.times(n)), o.cmp(e) != 1;
	) {
		r = n,
			n = o,
			o = l,
			l = u.plus(m.times(o)),
			u = o,
			o = t,
			t = a.minus(m.times(o)),
			a = o;
	}
	return o = K(e.minus(r), n, 0, 1, 1),
		u = u.plus(o.times(l)),
		r = r.plus(o.times(n)),
		u.s = l.s = w.s,
		g = K(l, n, i, 1).minus(w).abs().cmp(K(u, r, i, 1).minus(w).abs()) < 1
			? [l, n]
			: [u, r],
		x.precision = c,
		D = !0,
		g;
};
v.toHexadecimal = v.toHex = function (e, t) {
	return Do(this, 16, e, t);
};
v.toNearest = function (e, t) {
	var r = this, n = r.constructor;
	if (r = new n(r), e == null) {
		if (!r.d) return r;
		e = new n(1), t = n.rounding;
	} else {
		if (e = new n(e), t === void 0 ? t = n.rounding : be(t, 0, 8), !r.d) {
			return e.s ? r : e;
		}
		if (!e.d) return e.s && (e.s = r.s), e;
	}
	return e.d[0]
		? (D = !1, r = K(r, e, 0, t, 1).times(e), D = !0, F(r))
		: (e.s = r.s, r = e),
		r;
};
v.toNumber = function () {
	return +this;
};
v.toOctal = function (e, t) {
	return Do(this, 8, e, t);
};
v.toPower = v.pow = function (e) {
	var t, r, n, o, i, s, a = this, u = a.constructor, l = +(e = new u(e));
	if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(X(+a, l));
	if (a = new u(a), a.eq(1)) return a;
	if (n = u.precision, i = u.rounding, e.eq(1)) return F(a, n, i);
	if (t = ce(e.e / I), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= Gc) {
		return o = ea(u, a, r, n), e.s < 0 ? new u(1).div(o) : F(o, n, i);
	}
	if (s = a.s, s < 0) {
		if (t < e.d.length - 1) return new u(NaN);
		if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) {
			return a.s = s, a;
		}
	}
	return r = X(+a, l),
		t = r == 0 || !isFinite(r)
			? ce(l * (Math.log("0." + ue(a.d)) / Math.LN10 + a.e + 1))
			: new u(r + "").e,
		t > u.maxE + 1 || t < u.minE - 1
			? new u(t > 0 ? s / 0 : 0)
			: (D = !1,
				u.rounding = a.s = 1,
				r = Math.min(12, (t + "").length),
				o = Io(e.times(ot(a, n + r)), n),
				o.d &&
				(o = F(o, n + 5, 1),
					dr(o.d, n, i) &&
					(t = n + 10,
						o = F(Io(e.times(ot(a, t + r)), t), t + 5, 1),
						+ue(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = F(o, n + 1, 0)))),
				o.s = s,
				D = !0,
				u.rounding = i,
				F(o, n, i));
};
v.toPrecision = function (e, t) {
	var r, n = this, o = n.constructor;
	return e === void 0
		? r = Be(n, n.e <= o.toExpNeg || n.e >= o.toExpPos)
		: (be(e, 1, st),
			t === void 0 ? t = o.rounding : be(t, 0, 8),
			n = F(new o(n), e, t),
			r = Be(n, e <= n.e || n.e <= o.toExpNeg, e)),
		n.isNeg() && !n.isZero() ? "-" + r : r;
};
v.toSignificantDigits = v.toSD = function (e, t) {
	var r = this, n = r.constructor;
	return e === void 0
		? (e = n.precision, t = n.rounding)
		: (be(e, 1, st), t === void 0 ? t = n.rounding : be(t, 0, 8)),
		F(new n(r), e, t);
};
v.toString = function () {
	var e = this,
		t = e.constructor,
		r = Be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() && !e.isZero() ? "-" + r : r;
};
v.truncated = v.trunc = function () {
	return F(new this.constructor(this), this.e + 1, 1);
};
v.valueOf = v.toJSON = function () {
	var e = this,
		t = e.constructor,
		r = Be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() ? "-" + r : r;
};
function ue(e) {
	var t, r, n, o = e.length - 1, i = "", s = e[0];
	if (o > 0) {
		for (i += s, t = 1; t < o; t++) {
			n = e[t] + "", r = I - n.length, r && (i += nt(r)), i += n;
		}
		s = e[t], n = s + "", r = I - n.length, r && (i += nt(r));
	} else if (s === 0) return "0";
	for (; s % 10 === 0;) s /= 10;
	return i + s;
}
function be(e, t, r) {
	if (e !== ~~e || e < t || e > r) throw Error(it + e);
}
function dr(e, t, r, n) {
	var o, i, s, a;
	for (i = e[0]; i >= 10; i /= 10) --t;
	return --t < 0 ? (t += I, o = 0) : (o = Math.ceil((t + 1) / I), t %= I),
		i = X(10, I - t),
		a = e[o] % i | 0,
		n == null
			? t < 3
				? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
					s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0)
				: s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) &&
						(e[o + 1] / i / 100 | 0) == X(10, t - 2) - 1 ||
					(a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0
			: t < 4
			? (t == 0
				? a = a / 1e3 | 0
				: t == 1
				? a = a / 100 | 0
				: t == 2 && (a = a / 10 | 0),
				s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
			: s = ((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) &&
				(e[o + 1] / i / 1e3 | 0) == X(10, t - 3) - 1,
		s;
}
function pn(e, t, r) {
	for (var n, o = [0], i, s = 0, a = e.length; s < a;) {
		for (i = o.length; i--;) o[i] *= t;
		for (o[0] += So.indexOf(e.charAt(s++)), n = 0; n < o.length; n++) {
			o[n] > r - 1 &&
				(o[n + 1] === void 0 && (o[n + 1] = 0),
					o[n + 1] += o[n] / r | 0,
					o[n] %= r);
		}
	}
	return o.reverse();
}
function Hc(e, t) {
	var r, n, o;
	if (t.isZero()) return t;
	n = t.d.length,
		n < 32
			? (r = Math.ceil(n / 3), o = (1 / hn(4, r)).toString())
			: (r = 16, o = "2.3283064365386962890625e-10"),
		e.precision += r,
		t = qt(e, 1, t.times(o), new e(1));
	for (var i = r; i--;) {
		var s = t.times(t);
		t = s.times(s).minus(s).times(8).plus(1);
	}
	return e.precision -= r, t;
}
var K = function () {
	function e(n, o, i) {
		var s, a = 0, u = n.length;
		for (n = n.slice(); u--;) s = n[u] * o + a, n[u] = s % i | 0, a = s / i | 0;
		return a && n.unshift(a), n;
	}
	function t(n, o, i, s) {
		var a, u;
		if (i != s) u = i > s ? 1 : -1;
		else {for (a = u = 0; a < i; a++) {
				if (n[a] != o[a]) {
					u = n[a] > o[a] ? 1 : -1;
					break;
				}
			}}
		return u;
	}
	function r(n, o, i, s) {
		for (var a = 0; i--;) {
			n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
		}
		for (; !n[0] && n.length > 1;) n.shift();
	}
	return function (n, o, i, s, a, u) {
		var l,
			c,
			m,
			g,
			w,
			E,
			x,
			T,
			R,
			S,
			C,
			M,
			N,
			B,
			pe,
			V,
			W,
			Ee,
			H,
			Pe,
			Qe = n.constructor,
			$ = n.s == o.s ? 1 : -1,
			U = n.d,
			O = o.d;
		if (!U || !U[0] || !O || !O[0]) {
			return new Qe(
				!n.s || !o.s || (U ? O && U[0] == O[0] : !O)
					? NaN
					: U && U[0] == 0 || !O
					? $ * 0
					: $ / 0,
			);
		}
		for (
			u
				? (w = 1, c = n.e - o.e)
				: (u = Oe, w = I, c = ce(n.e / w) - ce(o.e / w)),
				H = O.length,
				W = U.length,
				R = new Qe($),
				S = R.d = [],
				m = 0;
			O[m] == (U[m] || 0);
			m++
		);
		if (
			O[m] > (U[m] || 0) && c--,
				i == null
					? (B = i = Qe.precision, s = Qe.rounding)
					: a
					? B = i + (n.e - o.e) + 1
					: B = i,
				B < 0
		) S.push(1), E = !0;
		else {
			if (B = B / w + 2 | 0, m = 0, H == 1) {
				for (g = 0, O = O[0], B++; (m < W || g) && B--; m++) {
					pe = g * u + (U[m] || 0), S[m] = pe / O | 0, g = pe % O | 0;
				}
				E = g || m < W;
			} else {
				for (
					g = u / (O[0] + 1) | 0,
						g > 1 &&
						(O = e(O, g, u), U = e(U, g, u), H = O.length, W = U.length),
						V = H,
						C = U.slice(0, H),
						M = C.length;
					M < H;
				) C[M++] = 0;
				Pe = O.slice(), Pe.unshift(0), Ee = O[0], O[1] >= u / 2 && ++Ee;
				do g = 0,
					l = t(O, C, H, M),
					l < 0
						? (N = C[0],
							H != M && (N = N * u + (C[1] || 0)),
							g = N / Ee | 0,
							g > 1
								? (g >= u && (g = u - 1),
									x = e(O, g, u),
									T = x.length,
									M = C.length,
									l = t(x, C, T, M),
									l == 1 && (g--, r(x, H < T ? Pe : O, T, u)))
								: (g == 0 && (l = g = 1), x = O.slice()),
							T = x.length,
							T < M && x.unshift(0),
							r(C, x, M, u),
							l == -1 &&
							(M = C.length,
								l = t(O, C, H, M),
								l < 1 && (g++, r(C, H < M ? Pe : O, M, u))),
							M = C.length)
						: l === 0 && (g++, C = [0]),
					S[m++] = g,
					l && C[0] ? C[M++] = U[V] || 0 : (C = [U[V]], M = 1); while (
					(V++ < W || C[0] !== void 0) && B--
				);
				E = C[0] !== void 0;
			}
			S[0] || S.shift();
		}
		if (w == 1) R.e = c, Ws = E;
		else {
			for (m = 1, g = S[0]; g >= 10; g /= 10) m++;
			R.e = m + c * w - 1, F(R, a ? i + R.e + 1 : i, s, E);
		}
		return R;
	};
}();
function F(e, t, r, n) {
	var o, i, s, a, u, l, c, m, g, w = e.constructor;
	e:
	if (t != null) {
		if (m = e.d, !m) return e;
		for (o = 1, a = m[0]; a >= 10; a /= 10) o++;
		if (i = t - o, i < 0) {
			i += I, s = t, c = m[g = 0], u = c / X(10, o - s - 1) % 10 | 0;
		} else if (g = Math.ceil((i + 1) / I), a = m.length, g >= a) {
			if (n) {
				for (; a++ <= g;) m.push(0);
				c = u = 0, o = 1, i %= I, s = i - I + 1;
			} else break e;
		} else {
			for (c = a = m[g], o = 1; a >= 10; a /= 10) o++;
			i %= I, s = i - I + o, u = s < 0 ? 0 : c / X(10, o - s - 1) % 10 | 0;
		}
		if (
			n = n || t < 0 || m[g + 1] !== void 0 ||
				(s < 0 ? c : c % X(10, o - s - 1)),
				l = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 ||
					u == 5 &&
						(r == 4 || n ||
							r == 6 &&
								(i > 0 ? s > 0 ? c / X(10, o - s) : 0 : m[g - 1]) % 10 & 1 ||
							r == (e.s < 0 ? 8 : 7)),
				t < 1 || !m[0]
		) {
			return m.length = 0,
				l
					? (t -= e.e + 1, m[0] = X(10, (I - t % I) % I), e.e = -t || 0)
					: m[0] = e.e = 0,
				e;
		}
		if (
			i == 0
				? (m.length = g, a = 1, g--)
				: (m.length = g + 1,
					a = X(10, I - i),
					m[g] = s > 0 ? (c / X(10, o - s) % X(10, s) | 0) * a : 0), l
		) {
			for (;;) {
				if (g == 0) {
					for (i = 1, s = m[0]; s >= 10; s /= 10) i++;
					for (s = m[0] += a, a = 1; s >= 10; s /= 10) a++;
					i != a && (e.e++, m[0] == Oe && (m[0] = 1));
					break;
				} else {
					if (m[g] += a, m[g] != Oe) break;
					m[g--] = 0, a = 1;
				}
			}
		}
		for (i = m.length; m[--i] === 0;) m.pop();
	}
	return D &&
		(e.e > w.maxE
			? (e.d = null, e.e = NaN)
			: e.e < w.minE && (e.e = 0, e.d = [0])),
		e;
}
function Be(e, t, r) {
	if (!e.isFinite()) return ra(e);
	var n, o = e.e, i = ue(e.d), s = i.length;
	return t
		? (r && (n = r - s) > 0
			? i = i.charAt(0) + "." + i.slice(1) + nt(n)
			: s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
			i = i + (e.e < 0 ? "e" : "e+") + e.e)
		: o < 0
		? (i = "0." + nt(-o - 1) + i, r && (n = r - s) > 0 && (i += nt(n)))
		: o >= s
		? (i += nt(o + 1 - s), r && (n = r - o - 1) > 0 && (i = i + "." + nt(n)))
		: ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
			r && (n = r - s) > 0 && (o + 1 === s && (i += "."), i += nt(n))),
		i;
}
function yn(e, t) {
	var r = e[0];
	for (t *= I; r >= 10; r /= 10) t++;
	return t;
}
function mn(e, t, r) {
	if (t > Wc) throw D = !0, r && (e.precision = r), Error(Hs);
	return F(new e(fn), t, 1, !0);
}
function Se(e, t, r) {
	if (t > Fo) throw Error(Hs);
	return F(new e(dn), t, r, !0);
}
function Xs(e) {
	var t = e.length - 1, r = t * I + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) r--;
		for (t = e[0]; t >= 10; t /= 10) r++;
	}
	return r;
}
function nt(e) {
	for (var t = ""; e--;) t += "0";
	return t;
}
function ea(e, t, r, n) {
	var o, i = new e(1), s = Math.ceil(n / I + 4);
	for (D = !1;;) {
		if (
			r % 2 && (i = i.times(t), Qs(i.d, s) && (o = !0)), r = ce(r / 2), r === 0
		) {
			r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
			break;
		}
		t = t.times(t), Qs(t.d, s);
	}
	return D = !0, i;
}
function Js(e) {
	return e.d[e.d.length - 1] & 1;
}
function ta(e, t, r) {
	for (var n, o = new e(t[0]), i = 0; ++i < t.length;) {
		if (n = new e(t[i]), n.s) o[r](n) && (o = n);
		else {
			o = n;
			break;
		}
	}
	return o;
}
function Io(e, t) {
	var r,
		n,
		o,
		i,
		s,
		a,
		u,
		l = 0,
		c = 0,
		m = 0,
		g = e.constructor,
		w = g.rounding,
		E = g.precision;
	if (!e.d || !e.d[0] || e.e > 17) {
		return new g(
			e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0,
		);
	}
	for (t == null ? (D = !1, u = E) : u = t, a = new g(.03125); e.e > -2;) {
		e = e.times(a), m += 5;
	}
	for (
		n = Math.log(X(2, m)) / Math.LN10 * 2 + 5 | 0,
			u += n,
			r = i = s = new g(1),
			g.precision = u;;
	) {
		if (
			i = F(i.times(e), u, 1),
				r = r.times(++c),
				a = s.plus(K(i, r, u, 1)),
				ue(a.d).slice(0, u) === ue(s.d).slice(0, u)
		) {
			for (o = m; o--;) s = F(s.times(s), u, 1);
			if (t == null) {
				if (l < 3 && dr(s.d, u - n, w, l)) {
					g.precision = u += 10, r = i = a = new g(1), c = 0, l++;
				} else return F(s, g.precision = E, w, D = !0);
			} else return g.precision = E, s;
		}
		s = a;
	}
}
function ot(e, t) {
	var r,
		n,
		o,
		i,
		s,
		a,
		u,
		l,
		c,
		m,
		g,
		w = 1,
		E = 10,
		x = e,
		T = x.d,
		R = x.constructor,
		S = R.rounding,
		C = R.precision;
	if (x.s < 0 || !T || !T[0] || !x.e && T[0] == 1 && T.length == 1) {
		return new R(T && !T[0] ? -1 / 0 : x.s != 1 ? NaN : T ? 0 : x);
	}
	if (
		t == null ? (D = !1, c = C) : c = t,
			R.precision = c += E,
			r = ue(T),
			n = r.charAt(0),
			Math.abs(i = x.e) < 15e14
	) {
		for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
			x = x.times(e), r = ue(x.d), n = r.charAt(0), w++;
		}
		i = x.e,
			n > 1 ? (x = new R("0." + r), i++) : x = new R(n + "." + r.slice(1));
	} else {return l = mn(R, c + 2, C).times(i + ""),
			x = ot(new R(n + "." + r.slice(1)), c - E).plus(l),
			R.precision = C,
			t == null ? F(x, C, S, D = !0) : x;}
	for (
		m = x,
			u = s = x = K(x.minus(1), x.plus(1), c, 1),
			g = F(x.times(x), c, 1),
			o = 3;;
	) {
		if (
			s = F(s.times(g), c, 1),
				l = u.plus(K(s, new R(o), c, 1)),
				ue(l.d).slice(0, c) === ue(u.d).slice(0, c)
		) {
			if (
				u = u.times(2),
					i !== 0 && (u = u.plus(mn(R, c + 2, C).times(i + ""))),
					u = K(u, new R(w), c, 1),
					t == null
			) {
				if (dr(u.d, c - E, S, a)) {
					R.precision = c += E,
						l = s = x = K(m.minus(1), m.plus(1), c, 1),
						g = F(x.times(x), c, 1),
						o = a = 1;
				} else return F(u, R.precision = C, S, D = !0);
			} else return R.precision = C, u;
		}
		u = l, o += 2;
	}
}
function ra(e) {
	return String(e.s * e.s / 0);
}
function ko(e, t) {
	var r, n, o;
	for (
		(r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
			(n = t.search(/e/i)) > 0
				? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n))
				: r < 0 && (r = t.length),
			n = 0;
		t.charCodeAt(n) === 48;
		n++
	);
	for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
	if (t = t.slice(n, o), t) {
		if (
			o -= n,
				e.e = r = r - n - 1,
				e.d = [],
				n = (r + 1) % I,
				r < 0 && (n += I),
				n < o
		) {
			for (n && e.d.push(+t.slice(0, n)), o -= I; n < o;) {
				e.d.push(+t.slice(n, n += I));
			}
			t = t.slice(n), n = I - t.length;
		} else n -= o;
		for (; n--;) t += "0";
		e.d.push(+t),
			D &&
			(e.e > e.constructor.maxE
				? (e.d = null, e.e = NaN)
				: e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function zc(e, t) {
	var r, n, o, i, s, a, u, l, c;
	if (t.indexOf("_") > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ys.test(t)) return ko(e, t);
	} else if (t === "Infinity" || t === "NaN") {
		return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	}
	if (Jc.test(t)) r = 16, t = t.toLowerCase();
	else if (Kc.test(t)) r = 2;
	else if (Qc.test(t)) r = 8;
	else throw Error(it + t);
	for (
		i = t.search(/p/i),
			i > 0 ? (u = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2),
			i = t.indexOf("."),
			s = i >= 0,
			n = e.constructor,
			s &&
			(t = t.replace(".", ""),
				a = t.length,
				i = a - i,
				o = ea(n, new n(r), i, i * 2)),
			l = pn(t, r, Oe),
			c = l.length - 1,
			i = c;
		l[i] === 0;
		--i
	) l.pop();
	return i < 0
		? new n(e.s * 0)
		: (e.e = yn(l, c),
			e.d = l,
			D = !1,
			s && (e = K(e, o, a * 4)),
			u && (e = e.times(Math.abs(u) < 54 ? X(2, u) : bt.pow(2, u))),
			D = !0,
			e);
}
function Zc(e, t) {
	var r, n = t.d.length;
	if (n < 3) return t.isZero() ? t : qt(e, 2, t, t);
	r = 1.4 * Math.sqrt(n),
		r = r > 16 ? 16 : r | 0,
		t = t.times(1 / hn(5, r)),
		t = qt(e, 2, t, t);
	for (var o, i = new e(5), s = new e(16), a = new e(20); r--;) {
		o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
	}
	return t;
}
function qt(e, t, r, n, o) {
	var i, s, a, u, l = 1, c = e.precision, m = Math.ceil(c / I);
	for (D = !1, u = r.times(r), a = new e(n);;) {
		if (
			s = K(a.times(u), new e(t++ * t++), c, 1),
				a = o ? n.plus(s) : n.minus(s),
				n = K(s.times(u), new e(t++ * t++), c, 1),
				s = a.plus(n),
				s.d[m] !== void 0
		) {
			for (i = m; s.d[i] === a.d[i] && i--;);
			if (i == -1) break;
		}
		i = a, a = n, n = s, s = i, l++;
	}
	return D = !0, s.d.length = m + 1, s;
}
function hn(e, t) {
	for (var r = e; --t;) r *= e;
	return r;
}
function na(e, t) {
	var r, n = t.s < 0, o = Se(e, e.precision, 1), i = o.times(.5);
	if (t = t.abs(), t.lte(i)) return Ve = n ? 4 : 1, t;
	if (r = t.divToInt(o), r.isZero()) Ve = n ? 3 : 2;
	else {
		if (t = t.minus(r.times(o)), t.lte(i)) {
			return Ve = Js(r) ? n ? 2 : 3 : n ? 4 : 1, t;
		}
		Ve = Js(r) ? n ? 1 : 4 : n ? 3 : 2;
	}
	return t.minus(o).abs();
}
function Do(e, t, r, n) {
	var o, i, s, a, u, l, c, m, g, w = e.constructor, E = r !== void 0;
	if (
		E
			? (be(r, 1, st), n === void 0 ? n = w.rounding : be(n, 0, 8))
			: (r = w.precision, n = w.rounding), !e.isFinite()
	) c = ra(e);
	else {
		for (
			c = Be(e),
				s = c.indexOf("."),
				E
					? (o = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
					: o = t,
				s >= 0 &&
				(c = c.replace(".", ""),
					g = new w(1),
					g.e = c.length - s,
					g.d = pn(Be(g), 10, o),
					g.e = g.d.length),
				m = pn(c, 10, o),
				i = u = m.length;
			m[--u] == 0;
		) m.pop();
		if (!m[0]) c = E ? "0p+0" : "0";
		else {
			if (
				s < 0
					? i--
					: (e = new w(e),
						e.d = m,
						e.e = i,
						e = K(e, g, r, n, 0, o),
						m = e.d,
						i = e.e,
						l = Ws),
					s = m[r],
					a = o / 2,
					l = l || m[r + 1] !== void 0,
					l = n < 4
						? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
						: s > a ||
							s === a &&
								(n === 4 || l || n === 6 && m[r - 1] & 1 ||
									n === (e.s < 0 ? 8 : 7)),
					m.length = r,
					l
			) for (; ++m[--r] > o - 1;) m[r] = 0, r || (++i, m.unshift(1));
			for (u = m.length; !m[u - 1]; --u);
			for (s = 0, c = ""; s < u; s++) c += So.charAt(m[s]);
			if (E) {
				if (u > 1) {
					if (t == 16 || t == 8) {
						for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += "0";
						for (m = pn(c, o, t), u = m.length; !m[u - 1]; --u);
						for (s = 1, c = "1."; s < u; s++) c += So.charAt(m[s]);
					} else c = c.charAt(0) + "." + c.slice(1);
				}
				c = c + (i < 0 ? "p" : "p+") + i;
			} else if (i < 0) {
				for (; ++i;) c = "0" + c;
				c = "0." + c;
			} else if (++i > u) for (i -= u; i--;) c += "0";
			else i < u && (c = c.slice(0, i) + "." + c.slice(i));
		}
		c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
	}
	return e.s < 0 ? "-" + c : c;
}
function Qs(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function Yc(e) {
	return new this(e).abs();
}
function Xc(e) {
	return new this(e).acos();
}
function ep(e) {
	return new this(e).acosh();
}
function tp(e, t) {
	return new this(e).plus(t);
}
function rp(e) {
	return new this(e).asin();
}
function np(e) {
	return new this(e).asinh();
}
function op(e) {
	return new this(e).atan();
}
function ip(e) {
	return new this(e).atanh();
}
function sp(e, t) {
	e = new this(e), t = new this(t);
	var r, n = this.precision, o = this.rounding, i = n + 4;
	return !e.s || !t.s
		? r = new this(NaN)
		: !e.d && !t.d
		? (r = Se(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
		: !t.d || e.isZero()
		? (r = t.s < 0 ? Se(this, n, o) : new this(0), r.s = e.s)
		: !e.d || t.isZero()
		? (r = Se(this, i, 1).times(.5), r.s = e.s)
		: t.s < 0
		? (this.precision = i,
			this.rounding = 1,
			r = this.atan(K(e, t, i, 1)),
			t = Se(this, i, 1),
			this.precision = n,
			this.rounding = o,
			r = e.s < 0 ? r.minus(t) : r.plus(t))
		: r = this.atan(K(e, t, i, 1)),
		r;
}
function ap(e) {
	return new this(e).cbrt();
}
function up(e) {
	return F(e = new this(e), e.e + 1, 2);
}
function lp(e, t, r) {
	return new this(e).clamp(t, r);
}
function cp(e) {
	if (!e || typeof e != "object") throw Error(gn + "Object expected");
	var t,
		r,
		n,
		o = e.defaults === !0,
		i = [
			"precision",
			1,
			st,
			"rounding",
			0,
			8,
			"toExpNeg",
			-$t,
			0,
			"toExpPos",
			0,
			$t,
			"maxE",
			0,
			$t,
			"minE",
			-$t,
			0,
			"modulo",
			0,
			9,
		];
	for (t = 0; t < i.length; t += 3) {
		if (r = i[t], o && (this[r] = Oo[r]), (n = e[r]) !== void 0) {
			if (ce(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
			else throw Error(it + r + ": " + n);
		}
	}
	if (r = "crypto", o && (this[r] = Oo[r]), (n = e[r]) !== void 0) {
		if (n === !0 || n === !1 || n === 0 || n === 1) {
			if (n) {
				if (
					typeof crypto != "undefined" && crypto &&
					(crypto.getRandomValues || crypto.randomBytes)
				) this[r] = !0;
				else throw Error(zs);
			} else this[r] = !1;
		} else throw Error(it + r + ": " + n);
	}
	return this;
}
function pp(e) {
	return new this(e).cos();
}
function fp(e) {
	return new this(e).cosh();
}
function oa(e) {
	var t, r, n;
	function o(i) {
		var s, a, u, l = this;
		if (!(l instanceof o)) return new o(i);
		if (l.constructor = o, Gs(i)) {
			l.s = i.s,
				D
					? !i.d || i.e > o.maxE
						? (l.e = NaN, l.d = null)
						: i.e < o.minE
						? (l.e = 0, l.d = [0])
						: (l.e = i.e, l.d = i.d.slice())
					: (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
			return;
		}
		if (u = typeof i, u === "number") {
			if (i === 0) {
				l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
				return;
			}
			if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
				for (s = 0, a = i; a >= 10; a /= 10) s++;
				D
					? s > o.maxE
						? (l.e = NaN, l.d = null)
						: s < o.minE
						? (l.e = 0, l.d = [0])
						: (l.e = s, l.d = [i])
					: (l.e = s, l.d = [i]);
				return;
			} else if (i * 0 !== 0) {
				i || (l.s = NaN), l.e = NaN, l.d = null;
				return;
			}
			return ko(l, i.toString());
		} else if (u !== "string") throw Error(it + i);
		return (a = i.charCodeAt(0)) === 45
			? (i = i.slice(1), l.s = -1)
			: (a === 43 && (i = i.slice(1)), l.s = 1),
			Ys.test(i) ? ko(l, i) : zc(l, i);
	}
	if (
		o.prototype = v,
			o.ROUND_UP = 0,
			o.ROUND_DOWN = 1,
			o.ROUND_CEIL = 2,
			o.ROUND_FLOOR = 3,
			o.ROUND_HALF_UP = 4,
			o.ROUND_HALF_DOWN = 5,
			o.ROUND_HALF_EVEN = 6,
			o.ROUND_HALF_CEIL = 7,
			o.ROUND_HALF_FLOOR = 8,
			o.EUCLID = 9,
			o.config = o.set = cp,
			o.clone = oa,
			o.isDecimal = Gs,
			o.abs = Yc,
			o.acos = Xc,
			o.acosh = ep,
			o.add = tp,
			o.asin = rp,
			o.asinh = np,
			o.atan = op,
			o.atanh = ip,
			o.atan2 = sp,
			o.cbrt = ap,
			o.ceil = up,
			o.clamp = lp,
			o.cos = pp,
			o.cosh = fp,
			o.div = dp,
			o.exp = mp,
			o.floor = gp,
			o.hypot = yp,
			o.ln = hp,
			o.log = xp,
			o.log10 = wp,
			o.log2 = bp,
			o.max = Ep,
			o.min = Pp,
			o.mod = vp,
			o.mul = Ap,
			o.pow = Tp,
			o.random = Cp,
			o.round = Mp,
			o.sign = Rp,
			o.sin = Sp,
			o.sinh = Op,
			o.sqrt = Fp,
			o.sub = Ip,
			o.sum = kp,
			o.tan = Dp,
			o.tanh = _p,
			o.trunc = Np,
			e === void 0 && (e = {}),
			e && e.defaults !== !0
	) {
		for (
			n = [
				"precision",
				"rounding",
				"toExpNeg",
				"toExpPos",
				"maxE",
				"minE",
				"modulo",
				"crypto",
			], t = 0;
			t < n.length;
		) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
	}
	return o.config(e), o;
}
function dp(e, t) {
	return new this(e).div(t);
}
function mp(e) {
	return new this(e).exp();
}
function gp(e) {
	return F(e = new this(e), e.e + 1, 3);
}
function yp() {
	var e, t, r = new this(0);
	for (D = !1, e = 0; e < arguments.length;) {
		if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
		else {
			if (t.s) return D = !0, new this(1 / 0);
			r = t;
		}
	}
	return D = !0, r.sqrt();
}
function Gs(e) {
	return e instanceof bt || e && e.toStringTag === Zs || !1;
}
function hp(e) {
	return new this(e).ln();
}
function xp(e, t) {
	return new this(e).log(t);
}
function bp(e) {
	return new this(e).log(2);
}
function wp(e) {
	return new this(e).log(10);
}
function Ep() {
	return ta(this, arguments, "lt");
}
function Pp() {
	return ta(this, arguments, "gt");
}
function vp(e, t) {
	return new this(e).mod(t);
}
function Ap(e, t) {
	return new this(e).mul(t);
}
function Tp(e, t) {
	return new this(e).pow(t);
}
function Cp(e) {
	var t, r, n, o, i = 0, s = new this(1), a = [];
	if (
		e === void 0 ? e = this.precision : be(e, 1, st),
			n = Math.ceil(e / I),
			this.crypto
	) {
		if (crypto.getRandomValues) {
			for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) {
				o = t[i],
					o >= 429e7
						? t[i] = crypto.getRandomValues(new Uint32Array(1))[0]
						: a[i++] = o % 1e7;
			}
		} else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(n *= 4); i < n;) {
				o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) +
					((t[i + 3] & 127) << 24),
					o >= 214e7
						? crypto.randomBytes(4).copy(t, i)
						: (a.push(o % 1e7), i += 4);
			}
			i = n / 4;
		} else throw Error(zs);
	} else for (; i < n;) a[i++] = Math.random() * 1e7 | 0;
	for (
		n = a[--i], e %= I, n && e && (o = X(10, I - e), a[i] = (n / o | 0) * o);
		a[i] === 0;
		i--
	) a.pop();
	if (i < 0) r = 0, a = [0];
	else {
		for (r = -1; a[0] === 0; r -= I) a.shift();
		for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
		n < I && (r -= I - n);
	}
	return s.e = r, s.d = a, s;
}
function Mp(e) {
	return F(e = new this(e), e.e + 1, this.rounding);
}
function Rp(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Sp(e) {
	return new this(e).sin();
}
function Op(e) {
	return new this(e).sinh();
}
function Fp(e) {
	return new this(e).sqrt();
}
function Ip(e, t) {
	return new this(e).sub(t);
}
function kp() {
	var e = 0, t = arguments, r = new this(t[e]);
	for (D = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
	return D = !0, F(r, this.precision, this.rounding);
}
function Dp(e) {
	return new this(e).tan();
}
function _p(e) {
	return new this(e).tanh();
}
function Np(e) {
	return F(e = new this(e), e.e + 1, 1);
}
v[Symbol.for("nodejs.util.inspect.custom")] = v.toString;
v[Symbol.toStringTag] = "Decimal";
var bt = v.constructor = oa(Oo);
fn = new bt(fn);
dn = new bt(dn);
var Ke = bt;
function Vt(e) {
	return bt.isDecimal(e)
		? !0
		: e !== null && typeof e == "object" && typeof e.s == "number" &&
			typeof e.e == "number" && typeof e.toFixed == "function" &&
			Array.isArray(e.d);
}
d();
p();
f();
var mr = class {
	constructor(t, r, n, o, i) {
		this.modelName = t,
			this.name = r,
			this.typeName = n,
			this.isList = o,
			this.isEnum = i;
	}
	_toGraphQLInputType() {
		let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
		return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
	}
};
function Kt(e) {
	return e instanceof mr;
}
d();
p();
f();
d();
p();
f();
var xn = class {
	constructor(t) {
		this.value = t;
	}
	write(t) {
		t.write(this.value);
	}
	markAsError() {
		this.value.markAsError();
	}
};
d();
p();
f();
var bn = (e) => e,
	wn = { bold: bn, red: bn, green: bn, dim: bn },
	ia = { bold: Xe, red: Dt, green: en, dim: Xr },
	Jt = {
		write(e) {
			e.writeLine(",");
		},
	};
d();
p();
f();
var Le = class {
	constructor(t) {
		this.contents = t;
		this.isUnderlined = !1;
		this.color = (t) => t;
	}
	underline() {
		return this.isUnderlined = !0, this;
	}
	setColor(t) {
		return this.color = t, this;
	}
	write(t) {
		let r = t.getCurrentLineLength();
		t.write(this.color(this.contents)),
			this.isUnderlined && t.afterNextNewline(() => {
				t.write(" ".repeat(r)).writeLine(
					this.color("~".repeat(this.contents.length)),
				);
			});
	}
};
d();
p();
f();
var at = class {
	constructor() {
		this.hasError = !1;
	}
	markAsError() {
		return this.hasError = !0, this;
	}
};
var Qt = class extends at {
	constructor() {
		super(...arguments);
		this.items = [];
	}
	addItem(r) {
		return this.items.push(new xn(r)), this;
	}
	getField(r) {
		return this.items[r];
	}
	getPrintWidth() {
		return this.items.length === 0
			? 2
			: Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
	}
	write(r) {
		if (this.items.length === 0) {
			this.writeEmpty(r);
			return;
		}
		this.writeWithItems(r);
	}
	writeEmpty(r) {
		let n = new Le("[]");
		this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
	}
	writeWithItems(r) {
		let { colors: n } = r.context;
		r.writeLine("[").withIndent(() => r.writeJoined(Jt, this.items).newLine())
			.write("]"),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(n.red("~".repeat(this.getPrintWidth())));
			});
	}
};
d();
p();
f();
var sa = ": ",
	En = class {
		constructor(t, r) {
			this.name = t;
			this.value = r;
			this.hasError = !1;
		}
		markAsError() {
			this.hasError = !0;
		}
		getPrintWidth() {
			return this.name.length + this.value.getPrintWidth() + sa.length;
		}
		write(t) {
			let r = new Le(this.name);
			this.hasError && r.underline().setColor(t.context.colors.red),
				t.write(r).write(sa).write(this.value);
		}
	};
d();
p();
f();
var re = class e extends at {
	constructor() {
		super(...arguments);
		this.fields = {};
		this.suggestions = [];
	}
	addField(r) {
		this.fields[r.name] = r;
	}
	addSuggestion(r) {
		this.suggestions.push(r);
	}
	getField(r) {
		return this.fields[r];
	}
	getDeepField(r) {
		let [n, ...o] = r, i = this.getField(n);
		if (!i) return;
		let s = i;
		for (let a of o) {
			let u;
			if (
				s.value instanceof e
					? u = s.value.getField(a)
					: s.value instanceof Qt && (u = s.value.getField(Number(a))), !u
			) return;
			s = u;
		}
		return s;
	}
	getDeepFieldValue(r) {
		var n;
		return r.length === 0
			? this
			: (n = this.getDeepField(r)) == null
			? void 0
			: n.value;
	}
	hasField(r) {
		return !!this.getField(r);
	}
	removeAllFields() {
		this.fields = {};
	}
	removeField(r) {
		delete this.fields[r];
	}
	getFields() {
		return this.fields;
	}
	isEmpty() {
		return Object.keys(this.fields).length === 0;
	}
	getFieldValue(r) {
		var n;
		return (n = this.getField(r)) == null ? void 0 : n.value;
	}
	getDeepSubSelectionValue(r) {
		let n = this;
		for (let o of r) {
			if (!(n instanceof e)) return;
			let i = n.getSubSelectionValue(o);
			if (!i) return;
			n = i;
		}
		return n;
	}
	getDeepSelectionParent(r) {
		let n = this.getSelectionParent();
		if (!n) return;
		let o = n;
		for (let i of r) {
			let s = o.value.getFieldValue(i);
			if (!s || !(s instanceof e)) return;
			let a = s.getSelectionParent();
			if (!a) return;
			o = a;
		}
		return o;
	}
	getSelectionParent() {
		let r = this.getField("select");
		if ((r == null ? void 0 : r.value) instanceof e) {
			return { kind: "select", value: r.value };
		}
		let n = this.getField("include");
		if ((n == null ? void 0 : n.value) instanceof e) {
			return { kind: "include", value: n.value };
		}
	}
	getSubSelectionValue(r) {
		var n;
		return (n = this.getSelectionParent()) == null
			? void 0
			: n.value.fields[r].value;
	}
	getPrintWidth() {
		let r = Object.values(this.fields);
		return r.length == 0 ? 2 : Math.max(...r.map((o) => o.getPrintWidth())) + 2;
	}
	write(r) {
		let n = Object.values(this.fields);
		if (n.length === 0 && this.suggestions.length === 0) {
			this.writeEmpty(r);
			return;
		}
		this.writeWithContents(r, n);
	}
	writeEmpty(r) {
		let n = new Le("{}");
		this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
	}
	writeWithContents(r, n) {
		r.writeLine("{").withIndent(() => {
			r.writeJoined(Jt, [...n, ...this.suggestions]).newLine();
		}),
			r.write("}"),
			this.hasError && r.afterNextNewline(() => {
				r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
			});
	}
};
d();
p();
f();
var ne = class extends at {
	constructor(r) {
		super();
		this.text = r;
	}
	getPrintWidth() {
		return this.text.length;
	}
	write(r) {
		let n = new Le(this.text);
		this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
	}
};
var _o = class {
	constructor(t) {
		this.errorMessages = [];
		this.arguments = t;
	}
	write(t) {
		t.write(this.arguments);
	}
	addErrorMessage(t) {
		this.errorMessages.push(t);
	}
	renderAllMessages(t) {
		return this.errorMessages.map((r) => r(t)).join(`
`);
	}
};
function Pn(e) {
	return new _o(aa(e));
}
function aa(e) {
	let t = new re();
	for (let [r, n] of Object.entries(e)) {
		let o = new En(r, ua(n));
		t.addField(o);
	}
	return t;
}
function ua(e) {
	if (typeof e == "string") return new ne(JSON.stringify(e));
	if (typeof e == "number" || typeof e == "boolean") return new ne(String(e));
	if (typeof e == "bigint") return new ne(`${e}n`);
	if (e === null) return new ne("null");
	if (e === void 0) return new ne("undefined");
	if (Vt(e)) return new ne(`new Prisma.Decimal("${e.toFixed()}")`);
	if (e instanceof Uint8Array) {
		return b.Buffer.isBuffer(e)
			? new ne(`Buffer.alloc(${e.byteLength})`)
			: new ne(`new Uint8Array(${e.byteLength})`);
	}
	if (e instanceof Date) {
		let t = cn(e) ? e.toISOString() : "Invalid Date";
		return new ne(`new Date("${t}")`);
	}
	return e instanceof qe
		? new ne(`Prisma.${e._getName()}`)
		: Kt(e)
		? new ne(`prisma.${qi(e.modelName)}.$fields.${e.name}`)
		: Array.isArray(e)
		? Lp(e)
		: typeof e == "object"
		? aa(e)
		: new ne(Object.prototype.toString.call(e));
}
function Lp(e) {
	let t = new Qt();
	for (let r of e) t.addItem(ua(r));
	return t;
}
function la(e) {
	if (e === void 0) return "";
	let t = Pn(e);
	return new jt(0, { colors: wn }).write(t).toString();
}
d();
p();
f();
d();
p();
f();
d();
p();
f();
d();
p();
f();
d();
p();
f();
var gr = "<unknown>";
function ca(e) {
	var t = e.split(`
`);
	return t.reduce(function (r, n) {
		var o = $p(n) || Vp(n) || Qp(n) || zp(n) || Wp(n);
		return o && r.push(o), r;
	}, []);
}
var jp =
		/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	Up = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function $p(e) {
	var t = jp.exec(e);
	if (!t) return null;
	var r = t[2] && t[2].indexOf("native") === 0,
		n = t[2] && t[2].indexOf("eval") === 0,
		o = Up.exec(t[2]);
	return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
		file: r ? null : t[2],
		methodName: t[1] || gr,
		arguments: r ? [t[2]] : [],
		lineNumber: t[3] ? +t[3] : null,
		column: t[4] ? +t[4] : null,
	};
}
var qp =
	/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Vp(e) {
	var t = qp.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || gr,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var Kp =
		/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
	Jp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Qp(e) {
	var t = Kp.exec(e);
	if (!t) return null;
	var r = t[3] && t[3].indexOf(" > eval") > -1, n = Jp.exec(t[3]);
	return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
		file: t[3],
		methodName: t[1] || gr,
		arguments: t[2] ? t[2].split(",") : [],
		lineNumber: t[4] ? +t[4] : null,
		column: t[5] ? +t[5] : null,
	};
}
var Gp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Wp(e) {
	var t = Gp.exec(e);
	return t
		? {
			file: t[3],
			methodName: t[1] || gr,
			arguments: [],
			lineNumber: +t[4],
			column: t[5] ? +t[5] : null,
		}
		: null;
}
var Hp =
	/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function zp(e) {
	var t = Hp.exec(e);
	return t
		? {
			file: t[2],
			methodName: t[1] || gr,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null,
		}
		: null;
}
var No = class {
		getLocation() {
			return null;
		}
	},
	Bo = class {
		constructor() {
			this._error = new Error();
		}
		getLocation() {
			let t = this._error.stack;
			if (!t) return null;
			let n = ca(t).find((o) => {
				if (!o.file) return !1;
				let i = bo(o.file);
				return i !== "<anonymous>" && !i.includes("@prisma") &&
					!i.includes("/packages/client/src/runtime/") &&
					!i.endsWith("/runtime/binary.js") &&
					!i.endsWith("/runtime/library.js") &&
					!i.endsWith("/runtime/edge.js") &&
					!i.endsWith("/runtime/edge-esm.js") && !i.startsWith("internal/") &&
					!o.methodName.includes("new ") &&
					!o.methodName.includes("getCallSite") &&
					!o.methodName.includes("Proxy.") &&
					o.methodName.split(".").length < 4;
			});
			return !n || !n.file ? null : {
				fileName: n.file,
				lineNumber: n.lineNumber,
				columnNumber: n.column,
			};
		}
	};
function ut(e) {
	return e === "minimal" ? new No() : new Bo();
}
d();
p();
f();
d();
p();
f();
d();
p();
f();
var pa = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Gt(e = {}) {
	let t = Yp(e);
	return Object.entries(t).reduce(
		(
			n,
			[o, i],
		) => (pa[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n),
		{ select: {} },
	);
}
function Yp(e = {}) {
	return typeof e._count == "boolean"
		? { ...e, _count: { _all: e._count } }
		: e;
}
function vn(e = {}) {
	return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function fa(e, t) {
	let r = vn(e);
	return t({ action: "aggregate", unpacker: r, argsMapper: Gt })(e);
}
d();
p();
f();
function Xp(e = {}) {
	let { select: t, ...r } = e;
	return typeof t == "object"
		? Gt({ ...r, _count: t })
		: Gt({ ...r, _count: { _all: !0 } });
}
function ef(e = {}) {
	return typeof e.select == "object"
		? (t) => vn(e)(t)._count
		: (t) => vn(e)(t)._count._all;
}
function da(e, t) {
	return t({ action: "count", unpacker: ef(e), argsMapper: Xp })(e);
}
d();
p();
f();
function tf(e = {}) {
	let t = Gt(e);
	if (Array.isArray(t.by)) {
		for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
	} else typeof t.by == "string" && (t.select[t.by] = !0);
	return t;
}
function rf(e = {}) {
	return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" &&
		t.forEach((r) => {
			r._count = r._count._all;
		}),
		t);
}
function ma(e, t) {
	return t({ action: "groupBy", unpacker: rf(e), argsMapper: tf })(e);
}
function ga(e, t, r) {
	if (t === "aggregate") return (n) => fa(n, r);
	if (t === "count") return (n) => da(n, r);
	if (t === "groupBy") return (n) => ma(n, r);
}
d();
p();
f();
function ya(e, t) {
	let r = t.fields.filter((o) => !o.relationName), n = vo(r, (o) => o.name);
	return new Proxy({}, {
		get(o, i) {
			if (i in o || typeof i == "symbol") return o[i];
			let s = n[i];
			if (s) return new mr(e, i, s.type, s.isList, s.kind === "enum");
		},
		...un(Object.keys(n)),
	});
}
d();
p();
f();
d();
p();
f();
var ha = (e) => Array.isArray(e) ? e : e.split("."),
	Lo = (e, t) => ha(t).reduce((r, n) => r && r[n], e),
	xa = (e, t, r) =>
		ha(t).reduceRight(
			(n, o, i, s) => Object.assign({}, Lo(e, s.slice(0, i)), { [o]: n }),
			r,
		);
function nf(e, t) {
	return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function of(e, t, r) {
	return t === void 0 ? e != null ? e : {} : xa(t, r, e || !0);
}
function jo(e, t, r, n, o, i) {
	let a = e._runtimeDataModel.models[t].fields.reduce(
		(u, l) => ({ ...u, [l.name]: l }),
		{},
	);
	return (u) => {
		let l = ut(e._errorFormat),
			c = nf(n, o),
			m = of(u, i, c),
			g = r({ dataPath: c, callsite: l })(m),
			w = sf(e, t);
		return new Proxy(g, {
			get(E, x) {
				if (!w.includes(x)) return E[x];
				let R = [a[x].type, r, x], S = [c, m];
				return jo(e, ...R, ...S);
			},
			...un([...w, ...Object.getOwnPropertyNames(g)]),
		});
	};
}
function sf(e, t) {
	return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object")
		.map((r) => r.name);
}
d();
p();
f();
d();
p();
f();
var va = Te(Fs());
d();
p();
f();
yo();
d();
p();
f();
d();
p();
f();
d();
p();
f();
var ba = {
	keyword: et,
	entity: et,
	value: (e) => Xe(_t(e)),
	punctuation: _t,
	directive: et,
	function: et,
	variable: (e) => Xe(_t(e)),
	string: (e) => Xe(en(e)),
	boolean: tn,
	number: et,
	comment: rn,
};
var af = (e) => e,
	An = {},
	uf = 0,
	_ = {
		manual: An.Prism && An.Prism.manual,
		disableWorkerMessageHandler: An.Prism &&
			An.Prism.disableWorkerMessageHandler,
		util: {
			encode: function (e) {
				if (e instanceof Fe) {
					let t = e;
					return new Fe(t.type, _.util.encode(t.content), t.alias);
				} else {return Array.isArray(e)
						? e.map(_.util.encode)
						: e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
							/\u00a0/g,
							" ",
						);}
			},
			type: function (e) {
				return Object.prototype.toString.call(e).slice(8, -1);
			},
			objId: function (e) {
				return e.__id || Object.defineProperty(e, "__id", { value: ++uf }),
					e.__id;
			},
			clone: function e(t, r) {
				let n, o, i = _.util.type(t);
				switch (r = r || {}, i) {
					case "Object":
						if (o = _.util.objId(t), r[o]) return r[o];
						n = {}, r[o] = n;
						for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
						return n;
					case "Array":
						return o = _.util.objId(t),
							r[o] ? r[o] : (n = [],
								r[o] = n,
								t.forEach(function (s, a) {
									n[a] = e(s, r);
								}),
								n);
					default:
						return t;
				}
			},
		},
		languages: {
			extend: function (e, t) {
				let r = _.util.clone(_.languages[e]);
				for (let n in t) r[n] = t[n];
				return r;
			},
			insertBefore: function (e, t, r, n) {
				n = n || _.languages;
				let o = n[e], i = {};
				for (let a in o) {
					if (o.hasOwnProperty(a)) {
						if (a == t) for (let u in r) r.hasOwnProperty(u) && (i[u] = r[u]);
						r.hasOwnProperty(a) || (i[a] = o[a]);
					}
				}
				let s = n[e];
				return n[e] = i,
					_.languages.DFS(_.languages, function (a, u) {
						u === s && a != e && (this[a] = i);
					}),
					i;
			},
			DFS: function e(t, r, n, o) {
				o = o || {};
				let i = _.util.objId;
				for (let s in t) {
					if (t.hasOwnProperty(s)) {
						r.call(t, s, t[s], n || s);
						let a = t[s], u = _.util.type(a);
						u === "Object" && !o[i(a)]
							? (o[i(a)] = !0, e(a, r, null, o))
							: u === "Array" && !o[i(a)] && (o[i(a)] = !0, e(a, r, s, o));
					}
				}
			},
		},
		plugins: {},
		highlight: function (e, t, r) {
			let n = { code: e, grammar: t, language: r };
			return _.hooks.run("before-tokenize", n),
				n.tokens = _.tokenize(n.code, n.grammar),
				_.hooks.run("after-tokenize", n),
				Fe.stringify(_.util.encode(n.tokens), n.language);
		},
		matchGrammar: function (e, t, r, n, o, i, s) {
			for (let x in r) {
				if (!r.hasOwnProperty(x) || !r[x]) continue;
				if (x == s) return;
				let T = r[x];
				T = _.util.type(T) === "Array" ? T : [T];
				for (let R = 0; R < T.length; ++R) {
					let S = T[R],
						C = S.inside,
						M = !!S.lookbehind,
						N = !!S.greedy,
						B = 0,
						pe = S.alias;
					if (N && !S.pattern.global) {
						let V = S.pattern.toString().match(/[imuy]*$/)[0];
						S.pattern = RegExp(S.pattern.source, V + "g");
					}
					S = S.pattern || S;
					for (let V = n, W = o; V < t.length; W += t[V].length, ++V) {
						let Ee = t[V];
						if (t.length > e.length) return;
						if (Ee instanceof Fe) continue;
						if (N && V != t.length - 1) {
							S.lastIndex = W;
							var m = S.exec(e);
							if (!m) break;
							var c = m.index + (M ? m[1].length : 0),
								g = m.index + m[0].length,
								a = V,
								u = W;
							for (
								let O = t.length;
								a < O && (u < g || !t[a].type && !t[a - 1].greedy);
								++a
							) u += t[a].length, c >= u && (++V, W = u);
							if (t[V] instanceof Fe) continue;
							l = a - V, Ee = e.slice(W, u), m.index -= W;
						} else {
							S.lastIndex = 0;
							var m = S.exec(Ee), l = 1;
						}
						if (!m) {
							if (i) break;
							continue;
						}
						M && (B = m[1] ? m[1].length : 0);
						var c = m.index + B,
							m = m[0].slice(B),
							g = c + m.length,
							w = Ee.slice(0, c),
							E = Ee.slice(g);
						let H = [V, l];
						w && (++V, W += w.length, H.push(w));
						let Pe = new Fe(x, C ? _.tokenize(m, C) : m, pe, m, N);
						if (
							H.push(Pe),
								E && H.push(E),
								Array.prototype.splice.apply(t, H),
								l != 1 && _.matchGrammar(e, t, r, V, W, !0, x),
								i
						) break;
					}
				}
			}
		},
		tokenize: function (e, t) {
			let r = [e], n = t.rest;
			if (n) {
				for (let o in n) t[o] = n[o];
				delete t.rest;
			}
			return _.matchGrammar(e, r, t, 0, 0, !1), r;
		},
		hooks: {
			all: {},
			add: function (e, t) {
				let r = _.hooks.all;
				r[e] = r[e] || [], r[e].push(t);
			},
			run: function (e, t) {
				let r = _.hooks.all[e];
				if (!(!r || !r.length)) for (var n = 0, o; o = r[n++];) o(t);
			},
		},
		Token: Fe,
	};
_.languages.clike = {
	comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0,
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	"class-name": {
		pattern:
			/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	punctuation: /[{}[\];(),.:]/,
};
_.languages.javascript = _.languages.extend("clike", {
	"class-name": [_.languages.clike["class-name"], {
		pattern:
			/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
		lookbehind: !0,
	}],
	keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, {
		pattern:
			/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0,
	}],
	number:
		/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	function:
		/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	operator:
		/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
_.languages.javascript["class-name"][0].pattern =
	/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
_.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern:
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: !0,
		greedy: !0,
	},
	"function-variable": {
		pattern:
			/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: "function",
	},
	parameter: [{
		pattern:
			/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
		lookbehind: !0,
		inside: _.languages.javascript,
	}, {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
		inside: _.languages.javascript,
	}, {
		pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
		lookbehind: !0,
		inside: _.languages.javascript,
	}, {
		pattern:
			/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
		lookbehind: !0,
		inside: _.languages.javascript,
	}],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
_.languages.markup && _.languages.markup.tag.addInlined("script", "javascript");
_.languages.js = _.languages.javascript;
_.languages.typescript = _.languages.extend("javascript", {
	keyword:
		/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	builtin:
		/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
_.languages.ts = _.languages.typescript;
function Fe(e, t, r, n, o) {
	this.type = e,
		this.content = t,
		this.alias = r,
		this.length = (n || "").length | 0,
		this.greedy = !!o;
}
Fe.stringify = function (e, t) {
	return typeof e == "string" ? e : Array.isArray(e)
		? e.map(function (r) {
			return Fe.stringify(r, t);
		}).join("")
		: lf(e.type)(e.content);
};
function lf(e) {
	return ba[e] || af;
}
function wa(e) {
	return cf(e, _.languages.javascript);
}
function cf(e, t) {
	return _.tokenize(e, t).map((n) => Fe.stringify(n)).join("");
}
d();
p();
f();
var Ea = Te(Ms());
function Pa(e) {
	return (0, Ea.default)(e);
}
var Tn = class e {
	static read(t) {
		let r;
		try {
			r = nn.readFileSync(t, "utf-8");
		} catch (n) {
			return null;
		}
		return e.fromContent(r);
	}
	static fromContent(t) {
		let r = t.split(/\r?\n/);
		return new e(1, r);
	}
	constructor(t, r) {
		this.firstLineNumber = t, this.lines = r;
	}
	get lastLineNumber() {
		return this.firstLineNumber + this.lines.length - 1;
	}
	mapLineAt(t, r) {
		if (
			t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber
		) return this;
		let n = t - this.firstLineNumber, o = [...this.lines];
		return o[n] = r(o[n]), new e(this.firstLineNumber, o);
	}
	mapLines(t) {
		return new e(
			this.firstLineNumber,
			this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
		);
	}
	lineAt(t) {
		return this.lines[t - this.firstLineNumber];
	}
	prependSymbolAt(t, r) {
		return this.mapLines((n, o) => o === t ? `${r} ${n}` : `  ${n}`);
	}
	slice(t, r) {
		let n = this.lines.slice(t - 1, r).join(`
`);
		return new e(
			t,
			Pa(n).split(`
`),
		);
	}
	highlight() {
		let t = wa(this.toString());
		return new e(
			this.firstLineNumber,
			t.split(`
`),
		);
	}
	toString() {
		return this.lines.join(`
`);
	}
};
var pf = {
		red: Dt,
		gray: rn,
		dim: Xr,
		bold: Xe,
		underline: ws,
		highlightSource: (e) => e.highlight(),
	},
	ff = {
		red: (e) => e,
		gray: (e) => e,
		dim: (e) => e,
		bold: (e) => e,
		underline: (e) => e,
		highlightSource: (e) => e,
	};
function df(
	{ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: o },
	i,
) {
	var m;
	let s = {
		functionName: `prisma.${r}()`,
		message: t,
		isPanic: n != null ? n : !1,
		callArguments: o,
	};
	if (!e || typeof window != "undefined" || y.env.NODE_ENV === "production") {
		return s;
	}
	let a = e.getLocation();
	if (!a || !a.lineNumber || !a.columnNumber) return s;
	let u = Math.max(1, a.lineNumber - 3),
		l = (m = Tn.read(a.fileName)) == null ? void 0 : m.slice(u, a.lineNumber),
		c = l == null ? void 0 : l.lineAt(a.lineNumber);
	if (l && c) {
		let g = gf(c), w = mf(c);
		if (!w) return s;
		s.functionName = `${w.code})`,
			s.location = a,
			n ||
			(l = l.mapLineAt(a.lineNumber, (x) => x.slice(0, w.openingBraceIndex))),
			l = i.highlightSource(l);
		let E = String(l.lastLineNumber).length;
		if (
			s.contextLines = l.mapLines((x, T) =>
				i.gray(String(T).padStart(E)) + " " + x
			).mapLines((x) => i.dim(x)).prependSymbolAt(
				a.lineNumber,
				i.bold(i.red("\u2192")),
			), o
		) {
			let x = g + E + 1;
			x += 2, s.callArguments = (0, va.default)(o, x).slice(x);
		}
	}
	return s;
}
function mf(e) {
	let t = Object.keys(Me.ModelAction).join("|"),
		n = new RegExp(String.raw`\.(${t})\(`).exec(e);
	if (n) {
		let o = n.index + n[0].length, i = e.lastIndexOf(" ", n.index) + 1;
		return { code: e.slice(i, o), openingBraceIndex: o };
	}
	return null;
}
function gf(e) {
	let t = 0;
	for (let r = 0; r < e.length; r++) {
		if (e.charAt(r) !== " ") return t;
		t++;
	}
	return t;
}
function yf(
	{
		functionName: e,
		location: t,
		message: r,
		isPanic: n,
		contextLines: o,
		callArguments: i,
	},
	s,
) {
	let a = [""], u = t ? " in" : ":";
	if (
		n
			? (a.push(
				s.red(
					`Oops, an unknown error occurred! This is ${
						s.bold("on us")
					}, you did nothing wrong.`,
				),
			),
				a.push(
					s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`),
				))
			: a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
			t && a.push(s.underline(hf(t))),
			o
	) {
		a.push("");
		let l = [o.toString()];
		i && (l.push(i), l.push(s.dim(")"))), a.push(l.join("")), i && a.push("");
	} else a.push(""), i && a.push(i), a.push("");
	return a.push(r),
		a.join(`
`);
}
function hf(e) {
	let t = [e.fileName];
	return e.lineNumber && t.push(String(e.lineNumber)),
		e.columnNumber && t.push(String(e.columnNumber)),
		t.join(":");
}
function Wt(e) {
	let t = e.showColors ? pf : ff, r = df(e, t);
	return yf(r, t);
}
function Aa(e, t, r, n) {
	return e === Me.ModelAction.findFirstOrThrow ||
			e === Me.ModelAction.findUniqueOrThrow
		? xf(t, r, n)
		: n;
}
function xf(e, t, r) {
	return async (n) => {
		if ("rejectOnNotFound" in n.args) {
			let i = Wt({
				originalMethod: n.clientMethod,
				callsite: n.callsite,
				message: "'rejectOnNotFound' option is not supported",
			});
			throw new ge(i, { clientVersion: t });
		}
		return await r(n).catch((i) => {
			throw i instanceof me && i.code === "P2025"
				? new tt(`No ${e} found`, t)
				: i;
		});
	};
}
d();
p();
f();
function je(e) {
	return e.replace(/^./, (t) => t.toLowerCase());
}
var bf = [
		"findUnique",
		"findUniqueOrThrow",
		"findFirst",
		"findFirstOrThrow",
		"create",
		"update",
		"upsert",
		"delete",
	],
	wf = ["aggregate", "count", "groupBy"];
function Uo(e, t) {
	var o;
	let r = (o = e._extensions.getAllModelExtensions(t)) != null ? o : {},
		n = [
			Ef(e, t),
			vf(e, t),
			ar(r),
			ye("name", () => t),
			ye("$name", () => t),
			ye("$parent", () => e._appliedParent),
		];
	return Ne({}, n);
}
function Ef(e, t) {
	let r = je(t), n = Object.keys(Me.ModelAction).concat("count");
	return {
		getKeys() {
			return n;
		},
		getPropertyValue(o) {
			let i = o, s = (u) => e._request(u);
			s = Aa(i, t, e._clientVersion, s);
			let a = (u) => (l) => {
				let c = ut(e._errorFormat);
				return e._createPrismaPromise((m) => {
					let g = {
						args: l,
						dataPath: [],
						action: i,
						model: t,
						clientMethod: `${r}.${o}`,
						jsModelName: r,
						transaction: m,
						callsite: c,
					};
					return s({ ...g, ...u });
				});
			};
			return bf.includes(i) ? jo(e, t, a) : Pf(o) ? ga(e, o, a) : a({});
		},
	};
}
function Pf(e) {
	return wf.includes(e);
}
function vf(e, t) {
	return xt(ye("fields", () => {
		let r = e._runtimeDataModel.models[t];
		return ya(t, r);
	}));
}
d();
p();
f();
function Ta(e) {
	return e.replace(/^./, (t) => t.toUpperCase());
}
var $o = Symbol();
function yr(e) {
	let t = [Af(e), ye($o, () => e), ye("$parent", () => e._appliedParent)],
		r = e._extensions.getAllClientExtensions();
	return r && t.push(ar(r)), Ne(e, t);
}
function Af(e) {
	let t = Object.keys(e._runtimeDataModel.models),
		r = t.map(je),
		n = [...new Set(t.concat(r))];
	return xt({
		getKeys() {
			return n;
		},
		getPropertyValue(o) {
			let i = Ta(o);
			if (e._runtimeDataModel.models[i] !== void 0) return Uo(e, i);
			if (e._runtimeDataModel.models[o] !== void 0) return Uo(e, o);
		},
		getPropertyDescriptor(o) {
			if (!r.includes(o)) return { enumerable: !1 };
		},
	});
}
function Cn(e) {
	return e[$o] ? e[$o] : e;
}
function Ca(e) {
	if (typeof e == "function") return e(this);
	let t = Cn(this),
		r = Object.create(t, {
			_extensions: { value: this._extensions.append(e) },
			_appliedParent: { value: this, configurable: !0 },
			$use: { value: void 0 },
			$on: { value: void 0 },
		});
	return yr(r);
}
d();
p();
f();
d();
p();
f();
function Ma({ result: e, modelName: t, select: r, extensions: n }) {
	let o = n.getAllComputedFields(t);
	if (!o) return e;
	let i = [], s = [];
	for (let a of Object.values(o)) {
		if (r) {
			if (!r[a.name]) continue;
			let u = a.needs.filter((l) => !r[l]);
			u.length > 0 && s.push(ur(u));
		}
		Tf(e, a.needs) && i.push(Cf(a, Ne(e, i)));
	}
	return i.length > 0 || s.length > 0 ? Ne(e, [...i, ...s]) : e;
}
function Tf(e, t) {
	return t.every((r) => Po(e, r));
}
function Cf(e, t) {
	return xt(ye(e.name, () => e.compute(t)));
}
d();
p();
f();
function Mn(
	{ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: o },
) {
	var s;
	if (Array.isArray(t)) {
		for (let a = 0; a < t.length; a++) {
			t[a] = Mn({
				result: t[a],
				args: r,
				modelName: o,
				runtimeDataModel: n,
				visitor: e,
			});
		}
		return t;
	}
	let i = (s = e(t, o, r)) != null ? s : t;
	return r.include &&
		Ra({
			includeOrSelect: r.include,
			result: i,
			parentModelName: o,
			runtimeDataModel: n,
			visitor: e,
		}),
		r.select &&
		Ra({
			includeOrSelect: r.select,
			result: i,
			parentModelName: o,
			runtimeDataModel: n,
			visitor: e,
		}),
		i;
}
function Ra(
	{
		includeOrSelect: e,
		result: t,
		parentModelName: r,
		runtimeDataModel: n,
		visitor: o,
	},
) {
	for (let [i, s] of Object.entries(e)) {
		if (!s || t[i] == null) continue;
		let u = n.models[r].fields.find((c) => c.name === i);
		if (!u || u.kind !== "object" || !u.relationName) continue;
		let l = typeof s == "object" ? s : {};
		t[i] = Mn({
			visitor: o,
			result: t[i],
			args: l,
			modelName: u.type,
			runtimeDataModel: n,
		});
	}
}
function Sa(
	{ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: o },
) {
	return n.isEmpty() || e == null || typeof e != "object" || !o.models[t]
		? e
		: Mn({
			result: e,
			args: r != null ? r : {},
			modelName: t,
			runtimeDataModel: o,
			visitor: (s, a, u) =>
				Ma({ result: s, modelName: je(a), select: u.select, extensions: n }),
		});
}
d();
p();
f();
d();
p();
f();
function Oa(e) {
	if (e instanceof Ae) return Mf(e);
	if (Array.isArray(e)) {
		let r = [e[0]];
		for (let n = 1; n < e.length; n++) r[n] = hr(e[n]);
		return r;
	}
	let t = {};
	for (let r in e) t[r] = hr(e[r]);
	return t;
}
function Mf(e) {
	return new Ae(e.strings, e.values);
}
function hr(e) {
	if (typeof e != "object" || e == null || e instanceof qe || Kt(e)) return e;
	if (Vt(e)) return new Ke(e.toFixed());
	if (Ut(e)) return new Date(+e);
	if (ArrayBuffer.isView(e)) return e.slice(0);
	if (Array.isArray(e)) {
		let t = e.length, r;
		for (r = Array(t); t--;) r[t] = hr(e[t]);
		return r;
	}
	if (typeof e == "object") {
		let t = {};
		for (let r in e) {
			r === "__proto__"
				? Object.defineProperty(t, r, {
					value: hr(e[r]),
					configurable: !0,
					enumerable: !0,
					writable: !0,
				})
				: t[r] = hr(e[r]);
		}
		return t;
	}
	ht(e, "Unknown value");
}
function Ia(e, t, r, n = 0) {
	return e._createPrismaPromise((o) => {
		var s, a;
		let i = t.customDataProxyFetch;
		return "transaction" in t && o !== void 0 &&
			(((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
				t.transaction.lock.then(),
				t.transaction = o),
			n === r.length ? e._executeRequest(t) : r[n]({
				model: t.model,
				operation: t.model ? t.action : t.clientMethod,
				args: Oa((a = t.args) != null ? a : {}),
				__internalParams: t,
				query: (u, l = t) => {
					let c = l.customDataProxyFetch;
					return l.customDataProxyFetch = Na(i, c),
						l.args = u,
						Ia(e, l, r, n + 1);
				},
			});
	});
}
function ka(e, t) {
	let { jsModelName: r, action: n, clientMethod: o } = t, i = r ? n : o;
	if (e._extensions.isEmpty()) return e._executeRequest(t);
	let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", i);
	return Ia(e, t, s);
}
function Da(e) {
	return (t) => {
		let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
		return n.length ? _a(r, n, 0, e) : e(r);
	};
}
function _a(e, t, r, n) {
	if (r === t.length) return n(e);
	let o = e.customDataProxyFetch, i = e.requests[0].transaction;
	return t[r]({
		args: {
			queries: e.requests.map((s) => ({
				model: s.modelName,
				operation: s.action,
				args: s.args,
			})),
			transaction: i
				? { isolationLevel: i.kind === "batch" ? i.isolationLevel : void 0 }
				: void 0,
		},
		__internalParams: e,
		query(s, a = e) {
			let u = a.customDataProxyFetch;
			return a.customDataProxyFetch = Na(o, u), _a(a, t, r + 1, n);
		},
	});
}
var Fa = (e) => e;
function Na(e = Fa, t = Fa) {
	return (r) => e(t(r));
}
d();
p();
f();
d();
p();
f();
function La(e, t, r) {
	let n = je(r);
	return !t.result || !(t.result.$allModels || t.result[n]) ? e : Rf({
		...e,
		...Ba(t.name, e, t.result.$allModels),
		...Ba(t.name, e, t.result[n]),
	});
}
function Rf(e) {
	let t = new _e(),
		r = (n, o) =>
			t.getOrCreate(
				n,
				() =>
					o.has(n)
						? [n]
						: (o.add(n), e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n]),
			);
	return Lt(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Ba(e, t, r) {
	return r
		? Lt(
			r,
			({ needs: n, compute: o }, i) => ({
				name: i,
				needs: n ? Object.keys(n).filter((s) => n[s]) : [],
				compute: Sf(t, i, o),
			}),
		)
		: {};
}
function Sf(e, t, r) {
	var o;
	let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute;
	return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function ja(e, t) {
	if (!t) return e;
	let r = { ...e };
	for (let n of Object.values(t)) {
		if (e[n.name]) for (let o of n.needs) r[o] = !0;
	}
	return r;
}
var Rn = class {
		constructor(t, r) {
			this.extension = t;
			this.previous = r;
			this.computedFieldsCache = new _e();
			this.modelExtensionsCache = new _e();
			this.queryCallbacksCache = new _e();
			this.clientExtensions = sr(() => {
				var t, r;
				return this.extension.client
					? {
						...(r = this.previous) == null
							? void 0
							: r.getAllClientExtensions(),
						...this.extension.client,
					}
					: (t = this.previous) == null
					? void 0
					: t.getAllClientExtensions();
			});
			this.batchCallbacks = sr(() => {
				var n, o, i;
				let t = (o = (n = this.previous) == null
							? void 0
							: n.getAllBatchQueryCallbacks()) != null
						? o
						: [],
					r = (i = this.extension.query) == null ? void 0 : i.$__internalBatch;
				return r ? t.concat(r) : t;
			});
		}
		getAllComputedFields(t) {
			return this.computedFieldsCache.getOrCreate(t, () => {
				var r;
				return La(
					(r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
					this.extension,
					t,
				);
			});
		}
		getAllClientExtensions() {
			return this.clientExtensions.get();
		}
		getAllModelExtensions(t) {
			return this.modelExtensionsCache.getOrCreate(t, () => {
				var n, o;
				let r = je(t);
				return !this.extension.model ||
						!(this.extension.model[r] || this.extension.model.$allModels)
					? (n = this.previous) == null ? void 0 : n.getAllModelExtensions(t)
					: {
						...(o = this.previous) == null
							? void 0
							: o.getAllModelExtensions(t),
						...this.extension.model.$allModels,
						...this.extension.model[r],
					};
			});
		}
		getAllQueryCallbacks(t, r) {
			return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
				var s, a;
				let n = (a = (s = this.previous) == null
							? void 0
							: s.getAllQueryCallbacks(t, r)) != null
						? a
						: [],
					o = [],
					i = this.extension.query;
				return !i || !(i[t] || i.$allModels || i[r] || i.$allOperations)
					? n
					: (i[t] !== void 0 &&
						(i[t][r] !== void 0 && o.push(i[t][r]),
							i[t].$allOperations !== void 0 && o.push(i[t].$allOperations)),
						t !== "$none" && i.$allModels !== void 0 &&
						(i.$allModels[r] !== void 0 && o.push(i.$allModels[r]),
							i.$allModels.$allOperations !== void 0 &&
							o.push(i.$allModels.$allOperations)),
						i[r] !== void 0 && o.push(i[r]),
						i.$allOperations !== void 0 && o.push(i.$allOperations),
						n.concat(o));
			});
		}
		getAllBatchQueryCallbacks() {
			return this.batchCallbacks.get();
		}
	},
	Sn = class e {
		constructor(t) {
			this.head = t;
		}
		static empty() {
			return new e();
		}
		static single(t) {
			return new e(new Rn(t));
		}
		isEmpty() {
			return this.head === void 0;
		}
		append(t) {
			return new e(new Rn(t, this.head));
		}
		getAllComputedFields(t) {
			var r;
			return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
		}
		getAllClientExtensions() {
			var t;
			return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
		}
		getAllModelExtensions(t) {
			var r;
			return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
		}
		getAllQueryCallbacks(t, r) {
			var n, o;
			return (o = (n = this.head) == null
					? void 0
					: n.getAllQueryCallbacks(t, r)) != null
				? o
				: [];
		}
		getAllBatchQueryCallbacks() {
			var t, r;
			return (r = (t = this.head) == null
					? void 0
					: t.getAllBatchQueryCallbacks()) != null
				? r
				: [];
		}
	};
d();
p();
f();
var Ua = xe("prisma:client"),
	$a = { Vercel: "vercel", "Netlify CI": "netlify" };
function qa({ postinstall: e, ciName: t, clientVersion: r }) {
	if (
		Ua("checkPlatformCaching:postinstall", e),
			Ua("checkPlatformCaching:ciName", t),
			e === !0 && t && t in $a
	) {
		let n =
			`Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${$a[t]}-build`;
		throw console.error(n), new ae(n, r);
	}
}
d();
p();
f();
function Va(e, t) {
	return e
		? e.datasources
			? e.datasources
			: e.datasourceUrl
			? { [t[0]]: { url: e.datasourceUrl } }
			: {}
		: {};
}
d();
p();
f();
d();
p();
f();
d();
p();
f();
function qo({ error: e, user_facing_error: t }, r) {
	return t.error_code
		? new me(t.message, {
			code: t.error_code,
			clientVersion: r,
			meta: t.meta,
			batchRequestIdx: t.batch_request_idx,
		})
		: new Re(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
d();
p();
f();
var On = class {};
d();
p();
f();
function Ka(e, t) {
	return {
		batch: e,
		transaction: (t == null ? void 0 : t.kind) === "batch"
			? { isolationLevel: t.options.isolationLevel }
			: void 0,
	};
}
d();
p();
f();
d();
p();
f();
d();
p();
f();
var Of = "Cloudflare-Workers", Ff = "node";
function Ja() {
	var e, t, r;
	return typeof Netlify == "object"
		? "netlify"
		: typeof EdgeRuntime == "string"
		? "edge-light"
		: ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Of
		? "workerd"
		: globalThis.Deno
		? "deno"
		: globalThis.__lagon__
		? "lagon"
		: ((r = (t = globalThis.process) == null ? void 0 : t.release) == null
				? void 0
				: r.name) === Ff
		? "node"
		: globalThis.Bun
		? "bun"
		: globalThis.fastly
		? "fastly"
		: "unknown";
}
function Fn(
	{ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n },
) {
	var u, l;
	let o,
		i = Object.keys(e)[0],
		s = (u = e[i]) == null ? void 0 : u.url,
		a = (l = t[i]) == null ? void 0 : l.url;
	if (
		i === void 0
			? o = void 0
			: a
			? o = a
			: s != null && s.value
			? o = s.value
			: s != null && s.fromEnvVar && (o = r[s.fromEnvVar]),
			(s == null ? void 0 : s.fromEnvVar) !== void 0 && o === void 0
	) {
		throw Ja() === "workerd"
			? new ae(
				`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
				n,
			)
			: new ae(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
	}
	if (o === void 0) {
		throw new ae(
			"error: Missing URL environment variable, value, or override.",
			n,
		);
	}
	return o;
}
d();
p();
f();
d();
p();
f();
var In = class extends Error {
	constructor(r, n) {
		super(r);
		this.clientVersion = n.clientVersion, this.cause = n.cause;
	}
	get [Symbol.toStringTag]() {
		return this.name;
	}
};
var we = class extends In {
	constructor(r, n) {
		var o;
		super(r, n);
		this.isRetryable = (o = n.isRetryable) != null ? o : !0;
	}
};
d();
p();
f();
d();
p();
f();
function q(e, t) {
	return { ...e, isRetryable: t };
}
var Ht = class extends we {
	constructor(r) {
		super("This request must be retried", q(r, !0));
		this.name = "ForcedRetryError";
		this.code = "P5001";
	}
};
k(Ht, "ForcedRetryError");
d();
p();
f();
var wt = class extends we {
	constructor(r, n) {
		super(r, q(n, !1));
		this.name = "InvalidDatasourceError";
		this.code = "P5002";
	}
};
k(wt, "InvalidDatasourceError");
d();
p();
f();
var Et = class extends we {
	constructor(r, n) {
		super(r, q(n, !1));
		this.name = "NotImplementedYetError";
		this.code = "P5004";
	}
};
k(Et, "NotImplementedYetError");
d();
p();
f();
d();
p();
f();
var Q = class extends we {
	constructor(r, n) {
		super(r, n);
		this.response = n.response;
		let o = this.response.headers.get("prisma-request-id");
		if (o) {
			let i = `(The request id was: ${o})`;
			this.message = this.message + " " + i;
		}
	}
};
var Pt = class extends Q {
	constructor(r) {
		super("Schema needs to be uploaded", q(r, !0));
		this.name = "SchemaMissingError";
		this.code = "P5005";
	}
};
k(Pt, "SchemaMissingError");
d();
p();
f();
d();
p();
f();
var Vo = "This request could not be understood by the server",
	xr = class extends Q {
		constructor(r, n, o) {
			super(n || Vo, q(r, !1));
			this.name = "BadRequestError";
			this.code = "P5000";
			o && (this.code = o);
		}
	};
k(xr, "BadRequestError");
d();
p();
f();
var br = class extends Q {
	constructor(r, n) {
		super("Engine not started: healthcheck timeout", q(r, !0));
		this.name = "HealthcheckTimeoutError";
		this.code = "P5013";
		this.logs = n;
	}
};
k(br, "HealthcheckTimeoutError");
d();
p();
f();
var wr = class extends Q {
	constructor(r, n, o) {
		super(n, q(r, !0));
		this.name = "EngineStartupError";
		this.code = "P5014";
		this.logs = o;
	}
};
k(wr, "EngineStartupError");
d();
p();
f();
var Er = class extends Q {
	constructor(r) {
		super("Engine version is not supported", q(r, !1));
		this.name = "EngineVersionNotSupportedError";
		this.code = "P5012";
	}
};
k(Er, "EngineVersionNotSupportedError");
d();
p();
f();
var Ko = "Request timed out",
	Pr = class extends Q {
		constructor(r, n = Ko) {
			super(n, q(r, !1));
			this.name = "GatewayTimeoutError";
			this.code = "P5009";
		}
	};
k(Pr, "GatewayTimeoutError");
d();
p();
f();
var If = "Interactive transaction error",
	vr = class extends Q {
		constructor(r, n = If) {
			super(n, q(r, !1));
			this.name = "InteractiveTransactionError";
			this.code = "P5015";
		}
	};
k(vr, "InteractiveTransactionError");
d();
p();
f();
var kf = "Request parameters are invalid",
	Ar = class extends Q {
		constructor(r, n = kf) {
			super(n, q(r, !1));
			this.name = "InvalidRequestError";
			this.code = "P5011";
		}
	};
k(Ar, "InvalidRequestError");
d();
p();
f();
var Jo = "Requested resource does not exist",
	Tr = class extends Q {
		constructor(r, n = Jo) {
			super(n, q(r, !1));
			this.name = "NotFoundError";
			this.code = "P5003";
		}
	};
k(Tr, "NotFoundError");
d();
p();
f();
var Qo = "Unknown server error",
	zt = class extends Q {
		constructor(r, n, o) {
			super(n || Qo, q(r, !0));
			this.name = "ServerError";
			this.code = "P5006";
			this.logs = o;
		}
	};
k(zt, "ServerError");
d();
p();
f();
var Go = "Unauthorized, check your connection string",
	Cr = class extends Q {
		constructor(r, n = Go) {
			super(n, q(r, !1));
			this.name = "UnauthorizedError";
			this.code = "P5007";
		}
	};
k(Cr, "UnauthorizedError");
d();
p();
f();
var Wo = "Usage exceeded, retry again later",
	Mr = class extends Q {
		constructor(r, n = Wo) {
			super(n, q(r, !0));
			this.name = "UsageExceededError";
			this.code = "P5008";
		}
	};
k(Mr, "UsageExceededError");
async function Df(e) {
	let t;
	try {
		t = await e.text();
	} catch (r) {
		return { type: "EmptyError" };
	}
	try {
		let r = JSON.parse(t);
		if (typeof r == "string") {
			switch (r) {
				case "InternalDataProxyError":
					return { type: "DataProxyError", body: r };
				default:
					return { type: "UnknownTextError", body: r };
			}
		}
		if (typeof r == "object" && r !== null) {
			if ("is_panic" in r && "message" in r && "error_code" in r) {
				return { type: "QueryEngineError", body: r };
			}
			if (
				"EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r ||
				"InvalidRequestError" in r
			) {
				let n = Object.values(r)[0].reason;
				return typeof n == "string" &&
						!["SchemaMissing", "EngineVersionNotSupported"].includes(n)
					? { type: "UnknownJsonError", body: r }
					: { type: "DataProxyError", body: r };
			}
		}
		return { type: "UnknownJsonError", body: r };
	} catch (r) {
		return t === ""
			? { type: "EmptyError" }
			: { type: "UnknownTextError", body: t };
	}
}
async function Rr(e, t) {
	if (e.ok) return;
	let r = { clientVersion: t, response: e }, n = await Df(e);
	if (n.type === "QueryEngineError") {
		throw new me(n.body.message, { code: n.body.error_code, clientVersion: t });
	}
	if (n.type === "DataProxyError") {
		if (n.body === "InternalDataProxyError") {
			throw new zt(r, "Internal Data Proxy error");
		}
		if ("EngineNotStarted" in n.body) {
			if (n.body.EngineNotStarted.reason === "SchemaMissing") return new Pt(r);
			if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") {
				throw new Er(r);
			}
			if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
				let { msg: o, logs: i } =
					n.body.EngineNotStarted.reason.EngineStartupError;
				throw new wr(r, o, i);
			}
			if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
				let { msg: o, error_code: i } =
					n.body.EngineNotStarted.reason.KnownEngineStartupError;
				throw new ae(o, t, i);
			}
			if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
				let { logs: o } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
				throw new br(r, o);
			}
		}
		if ("InteractiveTransactionMisrouted" in n.body) {
			let o = {
				IDParseError: "Could not parse interactive transaction ID",
				NoQueryEngineFoundError:
					"Could not find Query Engine for the specified host and transaction ID",
				TransactionStartError: "Could not start interactive transaction",
			};
			throw new vr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
		}
		if ("InvalidRequestError" in n.body) {
			throw new Ar(r, n.body.InvalidRequestError.reason);
		}
	}
	if (e.status === 401 || e.status === 403) throw new Cr(r, Zt(Go, n));
	if (e.status === 404) return new Tr(r, Zt(Jo, n));
	if (e.status === 429) throw new Mr(r, Zt(Wo, n));
	if (e.status === 504) throw new Pr(r, Zt(Ko, n));
	if (e.status >= 500) throw new zt(r, Zt(Qo, n));
	if (e.status >= 400) throw new xr(r, Zt(Vo, n));
}
function Zt(e, t) {
	return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
d();
p();
f();
function Qa(e) {
	let t = Math.pow(2, e) * 50,
		r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
		n = t + r;
	return new Promise((o) => setTimeout(() => o(n), n));
}
d();
p();
f();
function Ga(e) {
	var r;
	if (
		!!((r = e.generator) != null &&
			r.previewFeatures.some((n) => n.toLowerCase().includes("metrics")))
	) {
		throw new ae(
			"The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
			e.clientVersion,
		);
	}
}
d();
p();
f();
var Wa = {
	"@prisma/debug": "workspace:*",
	"@prisma/engines-version": "5.3.1-2.61e140623197a131c2a6189271ffee05a7aa9a59",
	"@prisma/fetch-engine": "workspace:*",
	"@prisma/get-platform": "workspace:*",
	"@swc/core": "1.3.75",
	"@swc/jest": "0.2.29",
	"@types/jest": "29.5.4",
	"@types/node": "18.17.12",
	execa: "5.1.1",
	jest: "29.6.4",
	typescript: "5.2.2",
};
d();
p();
f();
d();
p();
f();
var Sr = class extends we {
	constructor(r, n) {
		super(
			`Cannot fetch data from service:
${r}`,
			q(n, !0),
		);
		this.name = "RequestError";
		this.code = "P5010";
	}
};
k(Sr, "RequestError");
async function vt(e, t, r = (n) => n) {
	var o;
	let n = t.clientVersion;
	try {
		return typeof fetch == "function"
			? await r(fetch)(e, t)
			: await r(Ho)(e, t);
	} catch (i) {
		console.log(e);
		let s = (o = i.message) != null ? o : "Unknown error";
		throw new Sr(s, { clientVersion: n });
	}
}
function Nf(e) {
	return { ...e.headers, "Content-Type": "application/json" };
}
function Bf(e) {
	return { method: e.method, headers: Nf(e) };
}
function Lf(e, t) {
	return {
		text: () => Promise.resolve(b.Buffer.concat(e).toString()),
		json: () =>
			Promise.resolve().then(() => JSON.parse(b.Buffer.concat(e).toString())),
		ok: t.statusCode >= 200 && t.statusCode <= 299,
		status: t.statusCode,
		url: t.url,
		headers: new zo(t.headers),
	};
}
async function Ho(e, t = {}) {
	let r = jf("https"), n = Bf(t), o = [], { origin: i } = new URL(e);
	return new Promise((s, a) => {
		var l;
		let u = r.request(e, n, (c) => {
			let { statusCode: m, headers: { location: g } } = c;
			m >= 301 && m <= 399 && g &&
			(g.startsWith("http") === !1 ? s(Ho(`${i}${g}`, t)) : s(Ho(g, t))),
				c.on("data", (w) => o.push(w)),
				c.on("end", () => s(Lf(o, c))),
				c.on("error", a);
		});
		u.on("error", a), u.end((l = t.body) != null ? l : "");
	});
}
var jf = typeof Kn != "undefined" ? Kn : () => {},
	zo = class {
		constructor(t = {}) {
			this.headers = new Map();
			for (let [r, n] of Object.entries(t)) {
				if (typeof n == "string") this.headers.set(r, n);
				else if (Array.isArray(n)) for (let o of n) this.headers.set(r, o);
			}
		}
		append(t, r) {
			this.headers.set(t, r);
		}
		delete(t) {
			this.headers.delete(t);
		}
		get(t) {
			var r;
			return (r = this.headers.get(t)) != null ? r : null;
		}
		has(t) {
			return this.headers.has(t);
		}
		set(t, r) {
			this.headers.set(t, r);
		}
		forEach(t, r) {
			for (let [n, o] of this.headers) t.call(r, o, n, this);
		}
	};
var Uf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
	Ha = xe("prisma:client:dataproxyEngine");
async function $f(e, t) {
	var s, a, u;
	let r = Wa["@prisma/engines-version"],
		n = (s = t.clientVersion) != null ? s : "unknown";
	if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
		return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
	}
	if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
	let [o, i] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
	if (i === void 0 && Uf.test(o)) return o;
	if (i !== void 0 || n === "0.0.0" || n === "in-memory") {
		if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
		let [l] = (u = r.split("-")) != null ? u : [],
			[c, m, g] = l.split("."),
			w = qf(`<=${c}.${m}.${g}`),
			E = await vt(w, { clientVersion: n });
		if (!E.ok) {
			throw new Error(
				`Failed to fetch stable Prisma version, unpkg.com status ${E.status} ${E.statusText}, response body: ${
					await E.text() || "<empty body>"
				}`,
			);
		}
		let x = await E.text();
		Ha("length of body fetched from unpkg.com", x.length);
		let T;
		try {
			T = JSON.parse(x);
		} catch (R) {
			throw console.error("JSON.parse error: body fetched from unpkg.com: ", x),
				R;
		}
		return T.version;
	}
	throw new Et(
		"Only `major.minor.patch` versions are supported by Accelerate.",
		{ clientVersion: n },
	);
}
async function za(e, t) {
	let r = await $f(e, t);
	return Ha("version", r), r;
}
function qf(e) {
	return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Za = 3,
	Zo = xe("prisma:client:dataproxyEngine"),
	Yo = class {
		constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: o }) {
			this.apiKey = t,
				this.tracingHelper = r,
				this.logLevel = n,
				this.logQueries = o;
		}
		build({ traceparent: t, interactiveTransaction: r } = {}) {
			let n = { Authorization: `Bearer ${this.apiKey}` };
			this.tracingHelper.isEnabled() &&
			(n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
				r && (n["X-transaction-id"] = r.id);
			let o = this.buildCaptureSettings();
			return o.length > 0 && (n["X-capture-telemetry"] = o.join(", ")), n;
		}
		buildCaptureSettings() {
			let t = [];
			return this.tracingHelper.isEnabled() && t.push("tracing"),
				this.logLevel && t.push(this.logLevel),
				this.logQueries && t.push("query"),
				t;
		}
	},
	Or = class extends On {
		constructor(r) {
			var n, o, i, s;
			super();
			Ga(r),
				this.config = r,
				this.env = { ...this.config.env, ...y.env },
				this.inlineSchema = (n = r.inlineSchema) != null ? n : "",
				this.inlineDatasources = (o = r.inlineDatasources) != null ? o : {},
				this.inlineSchemaHash = (i = r.inlineSchemaHash) != null ? i : "",
				this.clientVersion = (s = r.clientVersion) != null ? s : "unknown",
				this.logEmitter = r.logEmitter,
				this.tracingHelper = this.config.tracingHelper;
		}
		apiKey() {
			return this.headerBuilder.apiKey;
		}
		version() {
			return "unknown";
		}
		async start() {
			this.startPromise !== void 0 && await this.startPromise,
				this.startPromise = (async () => {
					let [r, n] = this.extractHostAndApiKey();
					this.host = r,
						this.headerBuilder = new Yo({
							apiKey: n,
							tracingHelper: this.tracingHelper,
							logLevel: this.config.logLevel,
							logQueries: this.config.logQueries,
						}),
						this.remoteClientVersion = await za(r, this.config),
						Zo("host", this.host);
				})(),
				await this.startPromise;
		}
		async stop() {}
		propagateResponseExtensions(r) {
			var n, o;
			(n = r == null ? void 0 : r.logs) != null && n.length &&
			r.logs.forEach((i) => {
				switch (i.level) {
					case "debug":
					case "error":
					case "trace":
					case "warn":
					case "info":
						break;
					case "query": {
						let s = typeof i.attributes.query == "string"
							? i.attributes.query
							: "";
						if (!this.tracingHelper.isEnabled()) {
							let [a] = s.split("/* traceparent");
							s = a;
						}
						this.logEmitter.emit("query", {
							query: s,
							timestamp: i.timestamp,
							duration: i.attributes.duration_ms,
							params: i.attributes.params,
							target: i.attributes.target,
						});
					}
				}
			}),
				(o = r == null ? void 0 : r.traces) != null && o.length &&
				this.tracingHelper.createEngineSpan({ span: !0, spans: r.traces });
		}
		on(r, n) {
			if (r === "beforeExit") {
				throw new Error(
					'"beforeExit" hook is not applicable to the remote query engine',
				);
			}
			this.logEmitter.on(r, n);
		}
		async url(r) {
			return await this.start(),
				`https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
		}
		async uploadSchema() {
			let r = { name: "schemaUpload", internal: !0 };
			return this.tracingHelper.runInChildSpan(r, async () => {
				let n = await vt(await this.url("schema"), {
					method: "PUT",
					headers: this.headerBuilder.build(),
					body: this.inlineSchema,
					clientVersion: this.clientVersion,
				});
				n.ok || Zo("schema response status", n.status);
				let o = await Rr(n, this.clientVersion);
				if (o) {
					throw this.logEmitter.emit("warn", {
						message: `Error while uploading schema: ${o.message}`,
					}),
						o;
				}
				this.logEmitter.emit("info", {
					message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
				});
			});
		}
		request(
			r,
			{ traceparent: n, interactiveTransaction: o, customDataProxyFetch: i },
		) {
			return this.requestInternal({
				body: r,
				traceparent: n,
				interactiveTransaction: o,
				customDataProxyFetch: i,
			});
		}
		async requestBatch(
			r,
			{ traceparent: n, transaction: o, customDataProxyFetch: i },
		) {
			let s = (o == null ? void 0 : o.kind) === "itx" ? o.options : void 0,
				a = Ka(r, o),
				{ batchResult: u, elapsed: l } = await this.requestInternal({
					body: a,
					customDataProxyFetch: i,
					interactiveTransaction: s,
					traceparent: n,
				});
			return u.map((c) =>
				"errors" in c && c.errors.length > 0
					? qo(c.errors[0], this.clientVersion)
					: { data: c, elapsed: l }
			);
		}
		requestInternal(
			{
				body: r,
				traceparent: n,
				customDataProxyFetch: o,
				interactiveTransaction: i,
			},
		) {
			return this.withRetry({
				actionGerund: "querying",
				callback: async ({ logHttpCall: s }) => {
					let a = i
						? `${i.payload.endpoint}/graphql`
						: await this.url("graphql");
					s(a);
					let u = await vt(a, {
						method: "POST",
						headers: this.headerBuilder.build({
							traceparent: n,
							interactiveTransaction: i,
						}),
						body: JSON.stringify(r),
						clientVersion: this.clientVersion,
					}, o);
					u.ok || Zo("graphql response status", u.status),
						await this.handleError(await Rr(u, this.clientVersion));
					let l = await u.json(), c = l.extensions;
					if (c && this.propagateResponseExtensions(c), l.errors) {
						throw l.errors.length === 1
							? qo(l.errors[0], this.config.clientVersion)
							: new Re(l.errors, { clientVersion: this.config.clientVersion });
					}
					return l;
				},
			});
		}
		async transaction(r, n, o) {
			let i = {
				start: "starting",
				commit: "committing",
				rollback: "rolling back",
			};
			return this.withRetry({
				actionGerund: `${i[r]} transaction`,
				callback: async ({ logHttpCall: s }) => {
					var a, u;
					if (r === "start") {
						let l = JSON.stringify({
								max_wait: (a = o == null ? void 0 : o.maxWait) != null
									? a
									: 2e3,
								timeout: (u = o == null ? void 0 : o.timeout) != null ? u : 5e3,
								isolation_level: o == null ? void 0 : o.isolationLevel,
							}),
							c = await this.url("transaction/start");
						s(c);
						let m = await vt(c, {
							method: "POST",
							headers: this.headerBuilder.build({ traceparent: n.traceparent }),
							body: l,
							clientVersion: this.clientVersion,
						});
						await this.handleError(await Rr(m, this.clientVersion));
						let g = await m.json(), w = g.extensions;
						w && this.propagateResponseExtensions(w);
						let E = g.id, x = g["data-proxy"].endpoint;
						return { id: E, payload: { endpoint: x } };
					} else {
						let l = `${o.payload.endpoint}/${r}`;
						s(l);
						let c = await vt(l, {
							method: "POST",
							headers: this.headerBuilder.build({ traceparent: n.traceparent }),
							clientVersion: this.clientVersion,
						});
						await this.handleError(await Rr(c, this.clientVersion));
						let g = (await c.json()).extensions;
						g && this.propagateResponseExtensions(g);
						return;
					}
				},
			});
		}
		extractHostAndApiKey() {
			let r = { clientVersion: this.clientVersion },
				n = Object.keys(this.inlineDatasources)[0],
				o = Fn({
					inlineDatasources: this.inlineDatasources,
					overrideDatasources: this.config.overrideDatasources,
					clientVersion: this.clientVersion,
					env: this.env,
				}),
				i;
			try {
				i = new URL(o);
			} catch (c) {
				throw new wt(
					`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
					r,
				);
			}
			let { protocol: s, host: a, searchParams: u } = i;
			if (s !== "prisma:") {
				throw new wt(
					`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
					r,
				);
			}
			let l = u.get("api_key");
			if (l === null || l.length < 1) {
				throw new wt(
					`Error validating datasource \`${n}\`: the URL must contain a valid API key`,
					r,
				);
			}
			return [a, l];
		}
		metrics() {
			throw new Et("Metrics are not yet supported for Accelerate", {
				clientVersion: this.clientVersion,
			});
		}
		async withRetry(r) {
			var n;
			for (let o = 0;; o++) {
				let i = (s) => {
					this.logEmitter.emit("info", { message: `Calling ${s} (n=${o})` });
				};
				try {
					return await r.callback({ logHttpCall: i });
				} catch (s) {
					if (!(s instanceof we) || !s.isRetryable) throw s;
					if (o >= Za) throw s instanceof Ht ? s.cause : s;
					this.logEmitter.emit("warn", {
						message: `Attempt ${o + 1}/${Za} failed for ${r.actionGerund}: ${
							(n = s.message) != null ? n : "(unknown)"
						}`,
					});
					let a = await Qa(o);
					this.logEmitter.emit("warn", { message: `Retrying after ${a}ms` });
				}
			}
		}
		async handleError(r) {
			if (r instanceof Pt) {
				throw await this.uploadSchema(),
					new Ht({ clientVersion: this.clientVersion, cause: r });
			}
			if (r) throw r;
		}
	};
function Ya(e, t) {
	let r;
	try {
		r = Fn({
			inlineDatasources: t.inlineDatasources,
			overrideDatasources: t.overrideDatasources,
			env: { ...t.env, ...y.env },
			clientVersion: t.clientVersion,
		});
	} catch (o) {}
	e.noEngine !== !0 && (r != null && r.startsWith("prisma://")) &&
		sn(
			"recommend--no-engine",
			"In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
		);
	let n = xo(t.generator);
	return r != null && r.startsWith("prisma://") || e.noEngine, new Or(t);
	throw new ge("Invalid client engine type, please use `library` or `binary`", {
		clientVersion: t.clientVersion,
	});
}
d();
p();
f();
d();
p();
f();
d();
p();
f();
var ou = Te(Xo());
d();
p();
f();
function ru(e, t) {
	let r = nu(e), n = Vf(r), o = Jf(n);
	o ? kn(o, t) : t.addErrorMessage(() => "Unknown error");
}
function nu(e) {
	return e.errors.flatMap((t) => t.kind === "Union" ? nu(t) : [t]);
}
function Vf(e) {
	let t = new Map(), r = [];
	for (let n of e) {
		if (n.kind !== "InvalidArgumentType") {
			r.push(n);
			continue;
		}
		let o = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
			i = t.get(o);
		i
			? t.set(o, {
				...n,
				argument: {
					...n.argument,
					typeNames: Kf(i.argument.typeNames, n.argument.typeNames),
				},
			})
			: t.set(o, n);
	}
	return r.push(...t.values()), r;
}
function Kf(e, t) {
	return [...new Set(e.concat(t))];
}
function Jf(e) {
	return Ao(e, (t, r) => {
		let n = eu(t), o = eu(r);
		return n !== o ? n - o : tu(t) - tu(r);
	});
}
function eu(e) {
	let t = 0;
	return Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
		Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
		t;
}
function tu(e) {
	switch (e.kind) {
		case "InvalidArgumentValue":
		case "ValueTooLarge":
			return 20;
		case "InvalidArgumentType":
			return 10;
		case "RequiredArgumentMissing":
			return -10;
		default:
			return 0;
	}
}
d();
p();
f();
var Je = class {
	constructor(t, r) {
		this.name = t;
		this.value = r;
		this.isRequired = !1;
	}
	makeRequired() {
		return this.isRequired = !0, this;
	}
	write(t) {
		let { colors: { green: r } } = t.context;
		t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
			t.write(r(this.name)),
			this.isRequired || t.write(r("?")),
			t.write(r(": ")),
			typeof this.value == "string"
				? t.write(r(this.value))
				: t.write(this.value);
	}
};
d();
p();
f();
var Dn = class {
	constructor() {
		this.fields = [];
	}
	addField(t, r) {
		return this.fields.push({
			write(n) {
				let { green: o, dim: i } = n.context.colors;
				n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i("+")));
			},
		}),
			this;
	}
	write(t) {
		let { colors: { green: r } } = t.context;
		t.writeLine(r("{")).withIndent(() => {
			t.writeJoined(Jt, this.fields).newLine();
		}).write(r("}")).addMarginSymbol(r("+"));
	}
};
function kn(e, t) {
	switch (e.kind) {
		case "IncludeAndSelect":
			Qf(e, t);
			break;
		case "IncludeOnScalar":
			Gf(e, t);
			break;
		case "EmptySelection":
			Wf(e, t);
			break;
		case "UnknownSelectionField":
			Hf(e, t);
			break;
		case "UnknownArgument":
			zf(e, t);
			break;
		case "UnknownInputField":
			Zf(e, t);
			break;
		case "RequiredArgumentMissing":
			Yf(e, t);
			break;
		case "InvalidArgumentType":
			Xf(e, t);
			break;
		case "InvalidArgumentValue":
			ed(e, t);
			break;
		case "ValueTooLarge":
			td(e, t);
			break;
		case "SomeFieldsMissing":
			rd(e, t);
			break;
		case "TooManyFieldsGiven":
			nd(e, t);
			break;
		case "Union":
			ru(e, t);
			break;
		default:
			throw new Error("not implemented: " + e.kind);
	}
}
function Qf(e, t) {
	var n, o;
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	r && r instanceof re &&
	((n = r.getField("include")) == null || n.markAsError(),
		(o = r.getField("select")) == null || o.markAsError()),
		t.addErrorMessage((i) =>
			`Please ${i.bold("either")} use ${i.green("`include`")} or ${
				i.green("`select`")
			}, but ${i.red("not both")} at the same time.`
		);
}
function Gf(e, t) {
	var s, a;
	let [r, n] = _n(e.selectionPath),
		o = e.outputType,
		i = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
	if (i && ((a = i.getField(n)) == null || a.markAsError(), o)) {
		for (let u of o.fields) {
			u.isRelation && i.addSuggestion(new Je(u.name, "true"));
		}
	}
	t.addErrorMessage((u) => {
		let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${
			u.bold("include")
		} statement`;
		return o ? l += ` on model ${u.bold(o.name)}. ${Fr(u)}` : l += ".",
			l += `
Note that ${u.bold("include")} statements only accept relation fields.`,
			l;
	});
}
function Wf(e, t) {
	var i, s;
	let r = e.outputType,
		n = (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
			? void 0
			: i.value,
		o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
	n && (n.removeAllFields(), au(n, r)),
		t.addErrorMessage((a) =>
			o
				? `The ${a.red("`select`")} statement for type ${
					a.bold(r.name)
				} must not be empty. ${Fr(a)}`
				: `The ${a.red("`select`")} statement for type ${
					a.bold(r.name)
				} needs ${a.bold("at least one truthy value")}.`
		);
}
function Hf(e, t) {
	var i;
	let [r, n] = _n(e.selectionPath), o = t.arguments.getDeepSelectionParent(r);
	o &&
	((i = o.value.getField(n)) == null || i.markAsError(),
		au(o.value, e.outputType)),
		t.addErrorMessage((s) => {
			let a = [`Unknown field ${s.red(`\`${n}\``)}`];
			return o && a.push(`for ${s.bold(o.kind)} statement`),
				a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
				a.push(Fr(s)),
				a.join(" ");
		});
}
function zf(e, t) {
	var o;
	let r = e.argumentPath[0],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof re &&
	((o = n.getField(r)) == null || o.markAsError(), od(n, e.arguments)),
		t.addErrorMessage((i) => iu(i, r, e.arguments.map((s) => s.name)));
}
function Zf(e, t) {
	var i;
	let [r, n] = _n(e.argumentPath),
		o = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (o instanceof re) {
		(i = o.getDeepField(e.argumentPath)) == null || i.markAsError();
		let s = o.getDeepFieldValue(r);
		s instanceof re && uu(s, e.inputType);
	}
	t.addErrorMessage((s) => iu(s, n, e.inputType.fields.map((a) => a.name)));
}
function iu(e, t, r) {
	let n = [`Unknown argument \`${e.red(t)}\`.`], o = sd(t, r);
	return o && n.push(`Did you mean \`${e.green(o)}\`?`),
		r.length > 0 && n.push(Fr(e)),
		n.join(" ");
}
function Yf(e, t) {
	let r;
	t.addErrorMessage((u) =>
		(r == null ? void 0 : r.value) instanceof ne && r.value.text === "null"
			? `Argument \`${u.green(i)}\` must not be ${u.red("null")}.`
			: `Argument \`${u.green(i)}\` is missing.`
	);
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (!(n instanceof re)) return;
	let [o, i] = _n(e.argumentPath), s = new Dn(), a = n.getDeepFieldValue(o);
	if (a instanceof re) {
		if (
			r = a.getField(i),
				r && a.removeField(i),
				e.inputTypes.length === 1 && e.inputTypes[0].kind === "object"
		) {
			for (let u of e.inputTypes[0].fields) {
				s.addField(u.name, u.typeNames.join(" | "));
			}
			a.addSuggestion(new Je(i, s).makeRequired());
		} else {
			let u = e.inputTypes.map(su).join(" | ");
			a.addSuggestion(new Je(i, u).makeRequired());
		}
	}
}
function su(e) {
	return e.kind === "list" ? `${su(e.elementType)}[]` : e.name;
}
function Xf(e, t) {
	var o;
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof re &&
	((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
		t.addErrorMessage((i) => {
			let s = Nn("or", e.argument.typeNames.map((a) => i.green(a)));
			return `Argument \`${
				i.bold(r)
			}\`: Invalid value provided. Expected ${s}, provided ${
				i.red(e.inferredType)
			}.`;
		});
}
function ed(e, t) {
	var o;
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	n instanceof re &&
	((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
		t.addErrorMessage((i) => {
			let s = [`Invalid value for argument \`${i.bold(r)}\``];
			if (
				e.underlyingError && s.push(`: ${e.underlyingError}`),
					s.push("."),
					e.argument.typeNames.length > 0
			) {
				let a = Nn("or", e.argument.typeNames.map((u) => i.green(u)));
				s.push(` Expected ${a}.`);
			}
			return s.join("");
		});
}
function td(e, t) {
	let r = e.argument.name,
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		o;
	if (n instanceof re) {
		let i = n.getDeepField(e.argumentPath), s = i == null ? void 0 : i.value;
		s == null || s.markAsError(), s instanceof ne && (o = s.text);
	}
	t.addErrorMessage((i) => {
		let s = ["Unable to fit value"];
		return o && s.push(i.red(o)),
			s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``),
			s.join(" ");
	});
}
function rd(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
	if (n instanceof re) {
		let o = n.getDeepFieldValue(e.argumentPath);
		o instanceof re && uu(o, e.inputType);
	}
	t.addErrorMessage((o) => {
		let i = [
			`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
		];
		return e.constraints.minFieldCount === 1
			? e.constraints.requiredFields
				? i.push(
					`${o.green("at least one of")} ${
						Nn(
							"or",
							e.constraints.requiredFields.map((s) => `\`${o.bold(s)}\``),
						)
					} arguments.`,
				)
				: i.push(`${o.green("at least one")} argument.`)
			: i.push(
				`${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
			),
			i.push(Fr(o)),
			i.join(" ");
	});
}
function nd(e, t) {
	let r = e.argumentPath[e.argumentPath.length - 1],
		n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
		o = [];
	if (n instanceof re) {
		let i = n.getDeepFieldValue(e.argumentPath);
		i instanceof re && (i.markAsError(), o = Object.keys(i.getFields()));
	}
	t.addErrorMessage((i) => {
		let s = [
			`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
		];
		return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
			? s.push(`${i.green("exactly one")} argument,`)
			: e.constraints.maxFieldCount == 1
			? s.push(`${i.green("at most one")} argument,`)
			: s.push(
				`${i.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
			),
			s.push(
				`but you provided ${Nn("and", o.map((a) => i.red(a)))}. Please choose`,
			),
			e.constraints.maxFieldCount === 1
				? s.push("one.")
				: s.push(`${e.constraints.maxFieldCount}.`),
			s.join(" ");
	});
}
function au(e, t) {
	for (let r of t.fields) {
		e.hasField(r.name) || e.addSuggestion(new Je(r.name, "true"));
	}
}
function od(e, t) {
	for (let r of t) {
		e.hasField(r.name) ||
			e.addSuggestion(new Je(r.name, r.typeNames.join(" | ")));
	}
}
function uu(e, t) {
	if (t.kind === "object") {
		for (let r of t.fields) {
			e.hasField(r.name) ||
				e.addSuggestion(new Je(r.name, r.typeNames.join(" | ")));
		}
	}
}
function _n(e) {
	let t = [...e], r = t.pop();
	if (!r) throw new Error("unexpected empty path");
	return [t, r];
}
function Fr({ green: e }) {
	return `Available options are listed in ${e("green")}.`;
}
function Nn(e, t) {
	if (t.length === 1) return t[0];
	let r = [...t], n = r.pop();
	return `${r.join(", ")} ${e} ${n}`;
}
var id = 3;
function sd(e, t) {
	let r = 1 / 0, n;
	for (let o of t) {
		let i = (0, ou.default)(e, o);
		i > id || i < r && (r = i, n = o);
	}
	return n;
}
function Bn(
	{
		args: e,
		errors: t,
		errorFormat: r,
		callsite: n,
		originalMethod: o,
		clientVersion: i,
	},
) {
	let s = Pn(e);
	for (let m of t) kn(m, s);
	let a = r === "pretty" ? ia : wn,
		u = s.renderAllMessages(a),
		l = new jt(0, { colors: a }).write(s).toString(),
		c = Wt({
			message: u,
			callsite: n,
			originalMethod: o,
			showColors: r === "pretty",
			callArguments: l,
		});
	throw new ge(c, { clientVersion: i });
}
var ad = {
	findUnique: "findUnique",
	findUniqueOrThrow: "findUniqueOrThrow",
	findFirst: "findFirst",
	findFirstOrThrow: "findFirstOrThrow",
	findMany: "findMany",
	count: "aggregate",
	create: "createOne",
	createMany: "createMany",
	update: "updateOne",
	updateMany: "updateMany",
	upsert: "upsertOne",
	delete: "deleteOne",
	deleteMany: "deleteMany",
	executeRaw: "executeRaw",
	queryRaw: "queryRaw",
	aggregate: "aggregate",
	groupBy: "groupBy",
	runCommandRaw: "runCommandRaw",
	findRaw: "findRaw",
	aggregateRaw: "aggregateRaw",
};
function lu(
	{
		modelName: e,
		action: t,
		args: r,
		runtimeDataModel: n,
		extensions: o,
		callsite: i,
		clientMethod: s,
		errorFormat: a,
		clientVersion: u,
	},
) {
	let l = new ei({
		runtimeDataModel: n,
		modelName: e,
		action: t,
		rootArgs: r,
		callsite: i,
		extensions: o,
		selectionPath: [],
		argumentPath: [],
		originalMethod: s,
		errorFormat: a,
		clientVersion: u,
	});
	return { modelName: e, action: ad[t], query: ti(r, l) };
}
function ti({ select: e, include: t, ...r } = {}, n) {
	return { arguments: pu(r, n), selection: ud(e, t, n) };
}
function ud(e, t, r) {
	return e && t &&
		r.throwValidationError({
			kind: "IncludeAndSelect",
			selectionPath: r.getSelectionPath(),
		}),
		e ? pd(e, r) : ld(r, t);
}
function ld(e, t) {
	let r = {};
	return e.model && !e.isRawAction() && (r.$composites = !0, r.$scalars = !0),
		t && cd(r, t, e),
		r;
}
function cd(e, t, r) {
	for (let [n, o] of Object.entries(t)) {
		let i = r.findField(n);
		i && (i == null ? void 0 : i.kind) !== "object" &&
		r.throwValidationError({
			kind: "IncludeOnScalar",
			selectionPath: r.getSelectionPath().concat(n),
			outputType: r.getOutputTypeDescription(),
		}),
			o === !0
				? e[n] = !0
				: typeof o == "object" && (e[n] = ti(o, r.nestSelection(n)));
	}
}
function pd(e, t) {
	let r = {}, n = t.getComputedFields(), o = ja(e, n);
	for (let [i, s] of Object.entries(o)) {
		let a = t.findField(i);
		n != null && n[i] && !a ||
			(s === !0
				? r[i] = !0
				: typeof s == "object" && (r[i] = ti(s, t.nestSelection(i))));
	}
	return r;
}
function cu(e, t) {
	if (e === null) return null;
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") {
		return e;
	}
	if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
	if (Ut(e)) {
		if (cn(e)) return { $type: "DateTime", value: e.toISOString() };
		t.throwValidationError({
			kind: "InvalidArgumentValue",
			selectionPath: t.getSelectionPath(),
			argumentPath: t.getArgumentPath(),
			argument: { name: t.getArgumentName(), typeNames: ["Date"] },
			underlyingError: "Provided Date object is invalid",
		});
	}
	if (Kt(e)) {
		return {
			$type: "FieldRef",
			value: { _ref: e.name, _container: e.modelName },
		};
	}
	if (Array.isArray(e)) return fd(e, t);
	if (ArrayBuffer.isView(e)) {
		return { $type: "Bytes", value: b.Buffer.from(e).toString("base64") };
	}
	if (dd(e)) return e.values;
	if (Vt(e)) return { $type: "Decimal", value: e.toFixed() };
	if (e instanceof qe) {
		if (e !== Mo.instances[e._getName()]) {
			throw new Error("Invalid ObjectEnumValue");
		}
		return { $type: "Enum", value: e._getName() };
	}
	if (md(e)) return e.toJSON();
	if (typeof e == "object") return pu(e, t);
	t.throwValidationError({
		kind: "InvalidArgumentValue",
		selectionPath: t.getSelectionPath(),
		argumentPath: t.getArgumentPath(),
		argument: { name: t.getArgumentName(), typeNames: [] },
		underlyingError: `We could not serialize ${
			Object.prototype.toString.call(e)
		} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
	});
}
function pu(e, t) {
	if (e.$type) return { $type: "Json", value: JSON.stringify(e) };
	let r = {};
	for (let n in e) {
		let o = e[n];
		o !== void 0 && (r[n] = cu(o, t.nestArgument(n)));
	}
	return r;
}
function fd(e, t) {
	let r = [];
	for (let n = 0; n < e.length; n++) {
		let o = t.nestArgument(String(n)), i = e[n];
		i === void 0 && t.throwValidationError({
			kind: "InvalidArgumentValue",
			selectionPath: o.getSelectionPath(),
			argumentPath: o.getArgumentPath(),
			argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
			underlyingError:
				"Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
		}), r.push(cu(i, o));
	}
	return r;
}
function dd(e) {
	return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function md(e) {
	return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var ei = class e {
	constructor(t) {
		this.params = t;
		this.params.modelName &&
			(this.model = this.params.runtimeDataModel.models[this.params.modelName]);
	}
	throwValidationError(t) {
		var r;
		Bn({
			errors: [t],
			originalMethod: this.params.originalMethod,
			args: (r = this.params.rootArgs) != null ? r : {},
			callsite: this.params.callsite,
			errorFormat: this.params.errorFormat,
			clientVersion: this.params.clientVersion,
		});
	}
	getSelectionPath() {
		return this.params.selectionPath;
	}
	getArgumentPath() {
		return this.params.argumentPath;
	}
	getArgumentName() {
		return this.params.argumentPath[this.params.argumentPath.length - 1];
	}
	getOutputTypeDescription() {
		if (!(!this.params.modelName || !this.model)) {
			return {
				name: this.params.modelName,
				fields: this.model.fields.map((t) => ({
					name: t.name,
					typeName: "boolean",
					isRelation: t.kind === "object",
				})),
			};
		}
	}
	isRawAction() {
		return [
			"executeRaw",
			"queryRaw",
			"runCommandRaw",
			"findRaw",
			"aggregateRaw",
		].includes(this.params.action);
	}
	getComputedFields() {
		if (this.params.modelName) {
			return this.params.extensions.getAllComputedFields(this.params.modelName);
		}
	}
	findField(t) {
		var r;
		return (r = this.model) == null
			? void 0
			: r.fields.find((n) => n.name === t);
	}
	nestSelection(t) {
		let r = this.findField(t),
			n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
		return new e({
			...this.params,
			modelName: n,
			selectionPath: this.params.selectionPath.concat(t),
		});
	}
	nestArgument(t) {
		return new e({
			...this.params,
			argumentPath: this.params.argumentPath.concat(t),
		});
	}
};
d();
p();
f();
var fu = (e) => ({ command: e });
d();
p();
f();
d();
p();
f();
var du = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
p();
f();
function Ir(e) {
	try {
		return mu(e, "fast");
	} catch (t) {
		return mu(e, "slow");
	}
}
function mu(e, t) {
	return JSON.stringify(e.map((r) => gd(r, t)));
}
function gd(e, t) {
	return typeof e == "bigint"
		? { prisma__type: "bigint", prisma__value: e.toString() }
		: Ut(e)
		? { prisma__type: "date", prisma__value: e.toJSON() }
		: Ke.isDecimal(e)
		? { prisma__type: "decimal", prisma__value: e.toJSON() }
		: b.Buffer.isBuffer(e)
		? { prisma__type: "bytes", prisma__value: e.toString("base64") }
		: yd(e) || ArrayBuffer.isView(e)
		? {
			prisma__type: "bytes",
			prisma__value: b.Buffer.from(e).toString("base64"),
		}
		: typeof e == "object" && t === "slow"
		? yu(e)
		: e;
}
function yd(e) {
	return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
		? !0
		: typeof e == "object" && e !== null
		? e[Symbol.toStringTag] === "ArrayBuffer" ||
			e[Symbol.toStringTag] === "SharedArrayBuffer"
		: !1;
}
function yu(e) {
	if (typeof e != "object" || e === null) return e;
	if (typeof e.toJSON == "function") return e.toJSON();
	if (Array.isArray(e)) return e.map(gu);
	let t = {};
	for (let r of Object.keys(e)) t[r] = gu(e[r]);
	return t;
}
function gu(e) {
	return typeof e == "bigint" ? e.toString() : yu(e);
}
var hd = /^(\s*alter\s)/i, hu = xe("prisma:client");
function ri(e, t, r, n) {
	if (
		!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && hd.exec(t)
	) {
		throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
	}
}
var ni = (e, t) => (r) => {
		let n = "", o;
		if (Array.isArray(r)) {
			let [i, ...s] = r;
			n = i, o = { values: Ir(s || []), __prismaRawParameters__: !0 };
		} else {switch (e) {
				case "sqlite":
				case "mysql": {
					n = r.sql, o = { values: Ir(r.values), __prismaRawParameters__: !0 };
					break;
				}
				case "cockroachdb":
				case "postgresql": {
					n = r.text, o = { values: Ir(r.values), __prismaRawParameters__: !0 };
					break;
				}
				case "sqlserver": {
					n = du(r), o = { values: Ir(r.values), __prismaRawParameters__: !0 };
					break;
				}
				default:
					throw new Error(`The ${e} provider does not support ${t}`);
			}}
		return o != null && o.values
			? hu(`prisma.${t}(${n}, ${o.values})`)
			: hu(`prisma.${t}(${n})`),
			{ query: n, parameters: o };
	},
	xu = {
		requestArgsToMiddlewareArgs(e) {
			return [e.strings, ...e.values];
		},
		middlewareArgsToRequestArgs(e) {
			let [t, ...r] = e;
			return new Ae(t, r);
		},
	},
	bu = {
		requestArgsToMiddlewareArgs(e) {
			return [e];
		},
		middlewareArgsToRequestArgs(e) {
			return e[0];
		},
	};
d();
p();
f();
function oi(e) {
	return function (r) {
		let n,
			o = (i = e) => {
				try {
					return i === void 0 || (i == null ? void 0 : i.kind) === "itx"
						? n != null ? n : n = wu(r(i))
						: wu(r(i));
				} catch (s) {
					return Promise.reject(s);
				}
			};
		return {
			then(i, s) {
				return o().then(i, s);
			},
			catch(i) {
				return o().catch(i);
			},
			finally(i) {
				return o().finally(i);
			},
			requestTransaction(i) {
				let s = o(i);
				return s.requestTransaction ? s.requestTransaction(i) : s;
			},
			[Symbol.toStringTag]: "PrismaPromise",
		};
	};
}
function wu(e) {
	return typeof e.then == "function" ? e : Promise.resolve(e);
}
d();
p();
f();
var Eu = {
		isEnabled() {
			return !1;
		},
		getTraceParent() {
			return "00-10-10-00";
		},
		async createEngineSpan() {},
		getActiveContext() {},
		runInChildSpan(e, t) {
			return t();
		},
	},
	ii = class {
		isEnabled() {
			return this.getGlobalTracingHelper().isEnabled();
		}
		getTraceParent(t) {
			return this.getGlobalTracingHelper().getTraceParent(t);
		}
		createEngineSpan(t) {
			return this.getGlobalTracingHelper().createEngineSpan(t);
		}
		getActiveContext() {
			return this.getGlobalTracingHelper().getActiveContext();
		}
		runInChildSpan(t, r) {
			return this.getGlobalTracingHelper().runInChildSpan(t, r);
		}
		getGlobalTracingHelper() {
			var t, r;
			return (r = (t = globalThis.PRISMA_INSTRUMENTATION) == null
					? void 0
					: t.helper) != null
				? r
				: Eu;
		}
	};
function Pu(e) {
	return e.includes("tracing") ? new ii() : Eu;
}
d();
p();
f();
function vu(e, t = () => {}) {
	let r, n = new Promise((o) => r = o);
	return {
		then(o) {
			return --e === 0 && r(t()), o == null ? void 0 : o(n);
		},
	};
}
d();
p();
f();
function Au(e) {
	return typeof e == "string" ? e : e.reduce((t, r) => {
		let n = typeof r == "string" ? r : r.level;
		return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
	}, void 0);
}
d();
p();
f();
var xd = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
	Tu = xd;
d();
p();
f();
var Ln = class {
	constructor() {
		this._middlewares = [];
	}
	use(t) {
		this._middlewares.push(t);
	}
	get(t) {
		return this._middlewares[t];
	}
	has(t) {
		return !!this._middlewares[t];
	}
	length() {
		return this._middlewares.length;
	}
};
d();
p();
f();
var Mu = Te(Ns());
d();
p();
f();
function jn(e) {
	return typeof e.batchRequestIdx == "number";
}
d();
p();
f();
function Un(e) {
	return e === null
		? e
		: Array.isArray(e)
		? e.map(Un)
		: typeof e == "object"
		? bd(e) ? wd(e) : Lt(e, Un)
		: e;
}
function bd(e) {
	return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function wd({ $type: e, value: t }) {
	switch (e) {
		case "BigInt":
			return BigInt(t);
		case "Bytes":
			return b.Buffer.from(t, "base64");
		case "DateTime":
			return new Date(t);
		case "Decimal":
			return new Ke(t);
		case "Json":
			return JSON.parse(t);
		default:
			ht(t, "Unknown tagged value");
	}
}
d();
p();
f();
function Cu(e) {
	if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
	let t = [];
	return e.modelName && t.push(e.modelName),
		e.query.arguments && t.push(si(e.query.arguments)),
		t.push(si(e.query.selection)),
		t.join("");
}
function si(e) {
	return `(${
		Object.keys(e).sort().map((r) => {
			let n = e[r];
			return typeof n == "object" && n !== null ? `(${r} ${si(n)})` : r;
		}).join(" ")
	})`;
}
d();
p();
f();
var Ed = {
	aggregate: !1,
	aggregateRaw: !1,
	createMany: !0,
	createOne: !0,
	deleteMany: !0,
	deleteOne: !0,
	executeRaw: !0,
	findFirst: !1,
	findFirstOrThrow: !1,
	findMany: !1,
	findRaw: !1,
	findUnique: !1,
	findUniqueOrThrow: !1,
	groupBy: !1,
	queryRaw: !1,
	runCommandRaw: !0,
	updateMany: !0,
	updateOne: !0,
	upsertOne: !0,
};
function ai(e) {
	return Ed[e];
}
d();
p();
f();
var $n = class {
	constructor(t) {
		this.options = t;
		this.tickActive = !1;
		this.batches = {};
	}
	request(t) {
		let r = this.options.batchBy(t);
		return r
			? (this.batches[r] ||
				(this.batches[r] = [],
					this.tickActive || (this.tickActive = !0,
						y.nextTick(() => {
							this.dispatchBatches(), this.tickActive = !1;
						}))),
				new Promise((n, o) => {
					this.batches[r].push({ request: t, resolve: n, reject: o });
				}))
			: this.options.singleLoader(t);
	}
	dispatchBatches() {
		for (let t in this.batches) {
			let r = this.batches[t];
			delete this.batches[t],
				r.length === 1
					? this.options.singleLoader(r[0].request).then((n) => {
						n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
					}).catch((n) => {
						r[0].reject(n);
					})
					: (r.sort((n, o) => this.options.batchOrder(n.request, o.request)),
						this.options.batchLoader(r.map((n) => n.request)).then((n) => {
							if (n instanceof Error) {
								for (let o = 0; o < r.length; o++) r[o].reject(n);
							} else {for (let o = 0; o < r.length; o++) {
									let i = n[o];
									i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
								}}
						}).catch((n) => {
							for (let o = 0; o < r.length; o++) r[o].reject(n);
						}));
		}
	}
	get [Symbol.toStringTag]() {
		return "DataLoader";
	}
};
var Pd = xe("prisma:client:request_handler"),
	qn = class {
		constructor(t, r) {
			this.logEmitter = r,
				this.client = t,
				this.dataloader = new $n({
					batchLoader: Da(async ({ requests: n, customDataProxyFetch: o }) => {
						let { transaction: i, otelParentCtx: s } = n[0],
							a = n.map((m) => m.protocolQuery),
							u = this.client._tracingHelper.getTraceParent(s),
							l = n.some((m) => ai(m.protocolQuery.action));
						return (await this.client._engine.requestBatch(a, {
							traceparent: u,
							transaction: vd(i),
							containsWrite: l,
							customDataProxyFetch: o,
						})).map((m, g) => {
							if (m instanceof Error) return m;
							try {
								return this.mapQueryEngineResult(n[g], m);
							} catch (w) {
								return w;
							}
						});
					}),
					singleLoader: async (n) => {
						var s;
						let o = ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
								? Ru(n.transaction)
								: void 0,
							i = await this.client._engine.request(n.protocolQuery, {
								traceparent: this.client._tracingHelper.getTraceParent(),
								interactiveTransaction: o,
								isWrite: ai(n.protocolQuery.action),
								customDataProxyFetch: n.customDataProxyFetch,
							});
						return this.mapQueryEngineResult(n, i);
					},
					batchBy: (n) => {
						var o;
						return (o = n.transaction) != null && o.id
							? `transaction-${n.transaction.id}`
							: Cu(n.protocolQuery);
					},
					batchOrder(n, o) {
						var i, s;
						return ((i = n.transaction) == null ? void 0 : i.kind) ===
									"batch" &&
								((s = o.transaction) == null ? void 0 : s.kind) === "batch"
							? n.transaction.index - o.transaction.index
							: 0;
					},
				});
		}
		async request(t) {
			try {
				return await this.dataloader.request(t);
			} catch (r) {
				let { clientMethod: n, callsite: o, transaction: i, args: s } = t;
				this.handleAndLogRequestError({
					error: r,
					clientMethod: n,
					callsite: o,
					transaction: i,
					args: s,
				});
			}
		}
		mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
			let o = n == null ? void 0 : n.data,
				i = n == null ? void 0 : n.elapsed,
				s = this.unpack(o, t, r);
			return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: i } : s;
		}
		handleAndLogRequestError(t) {
			try {
				this.handleRequestError(t);
			} catch (r) {
				throw this.logEmitter &&
					this.logEmitter.emit("error", {
						message: r.message,
						target: t.clientMethod,
						timestamp: new Date(),
					}),
					r;
			}
		}
		handleRequestError(
			{ error: t, clientMethod: r, callsite: n, transaction: o, args: i },
		) {
			if (Pd(t), Ad(t, o) || t instanceof tt) throw t;
			if (t instanceof me && Td(t)) {
				let a = Su(t.meta);
				Bn({
					args: i,
					errors: [a],
					callsite: n,
					errorFormat: this.client._errorFormat,
					originalMethod: r,
					clientVersion: this.client._clientVersion,
				});
			}
			let s = t.message;
			throw n &&
				(s = Wt({
					callsite: n,
					originalMethod: r,
					isPanic: t.isPanic,
					showColors: this.client._errorFormat === "pretty",
					message: s,
				})),
				s = this.sanitizeMessage(s),
				t.code
					? new me(s, {
						code: t.code,
						clientVersion: this.client._clientVersion,
						meta: t.meta,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t.isPanic
					? new rt(s, this.client._clientVersion)
					: t instanceof Re
					? new Re(s, {
						clientVersion: this.client._clientVersion,
						batchRequestIdx: t.batchRequestIdx,
					})
					: t instanceof ae
					? new ae(s, this.client._clientVersion)
					: t instanceof rt
					? new rt(s, this.client._clientVersion)
					: (t.clientVersion = this.client._clientVersion, t);
		}
		sanitizeMessage(t) {
			return this.client._errorFormat && this.client._errorFormat !== "pretty"
				? (0, Mu.default)(t)
				: t;
		}
		unpack(t, r, n) {
			if (!t || (t.data && (t = t.data), !t)) return t;
			let o = Object.values(t)[0],
				i = r.filter((a) => a !== "select" && a !== "include"),
				s = Un(Lo(o, i));
			return n ? n(s) : s;
		}
		get [Symbol.toStringTag]() {
			return "RequestHandler";
		}
	};
function vd(e) {
	if (e) {
		if (e.kind === "batch") {
			return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
		}
		if (e.kind === "itx") return { kind: "itx", options: Ru(e) };
		ht(e, "Unknown transaction kind");
	}
}
function Ru(e) {
	return { id: e.id, payload: e.payload };
}
function Ad(e, t) {
	return jn(e) && (t == null ? void 0 : t.kind) === "batch" &&
		e.batchRequestIdx !== t.index;
}
function Td(e) {
	return e.code === "P2009" || e.code === "P2012";
}
function Su(e) {
	if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Su) };
	if (Array.isArray(e.selectionPath)) {
		let [, ...t] = e.selectionPath;
		return { ...e, selectionPath: t };
	}
	return e;
}
d();
p();
f();
var Ou = "5.3.1";
var Fu = Ou;
d();
p();
f();
function Iu(e) {
	return e.map((t) => {
		let r = {};
		for (let n of Object.keys(t)) r[n] = ku(t[n]);
		return r;
	});
}
function ku({ prisma__type: e, prisma__value: t }) {
	switch (e) {
		case "bigint":
			return BigInt(t);
		case "bytes":
			return b.Buffer.from(t, "base64");
		case "decimal":
			return new Ke(t);
		case "datetime":
		case "date":
			return new Date(t);
		case "time":
			return new Date(`1970-01-01T${t}Z`);
		case "array":
			return t.map(ku);
		default:
			return t;
	}
}
d();
p();
f();
var Bu = Te(Xo());
d();
p();
f();
var Z = class extends Error {
	constructor(t) {
		super(
			t + `
Read more at https://pris.ly/d/client-constructor`,
		), this.name = "PrismaClientConstructorValidationError";
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientConstructorValidationError";
	}
};
k(Z, "PrismaClientConstructorValidationError");
var Du = ["datasources", "datasourceUrl", "errorFormat", "log", "__internal"],
	_u = ["pretty", "colorless", "minimal"],
	Nu = ["info", "query", "warn", "error"],
	Md = {
		datasources: (e, t) => {
			if (e) {
				if (typeof e != "object" || Array.isArray(e)) {
					throw new Z(
						`Invalid value ${
							JSON.stringify(e)
						} for "datasources" provided to PrismaClient constructor`,
					);
				}
				for (let [r, n] of Object.entries(e)) {
					if (!t.includes(r)) {
						let o = Yt(r, t) || ` Available datasources: ${t.join(", ")}`;
						throw new Z(
							`Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
						);
					}
					if (typeof n != "object" || Array.isArray(n)) {
						throw new Z(
							`Invalid value ${
								JSON.stringify(e)
							} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
						);
					}
					if (n && typeof n == "object") {
						for (let [o, i] of Object.entries(n)) {
							if (o !== "url") {
								throw new Z(
									`Invalid value ${
										JSON.stringify(e)
									} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
								);
							}
							if (typeof i != "string") {
								throw new Z(
									`Invalid value ${
										JSON.stringify(i)
									} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
								);
							}
						}
					}
				}
			}
		},
		datasourceUrl: (e) => {
			if (typeof e != "undefined" && typeof e != "string") {
				throw new Z(
					`Invalid value ${
						JSON.stringify(e)
					} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`,
				);
			}
		},
		errorFormat: (e) => {
			if (e) {
				if (typeof e != "string") {
					throw new Z(
						`Invalid value ${
							JSON.stringify(e)
						} for "errorFormat" provided to PrismaClient constructor.`,
					);
				}
				if (!_u.includes(e)) {
					let t = Yt(e, _u);
					throw new Z(
						`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
					);
				}
			}
		},
		log: (e) => {
			if (!e) return;
			if (!Array.isArray(e)) {
				throw new Z(
					`Invalid value ${
						JSON.stringify(e)
					} for "log" provided to PrismaClient constructor.`,
				);
			}
			function t(r) {
				if (typeof r == "string" && !Nu.includes(r)) {
					let n = Yt(r, Nu);
					throw new Z(
						`Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
					);
				}
			}
			for (let r of e) {
				t(r);
				let n = {
					level: t,
					emit: (o) => {
						let i = ["stdout", "event"];
						if (!i.includes(o)) {
							let s = Yt(o, i);
							throw new Z(
								`Invalid value ${
									JSON.stringify(o)
								} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
							);
						}
					},
				};
				if (r && typeof r == "object") {
					for (let [o, i] of Object.entries(r)) {
						if (n[o]) n[o](i);
						else {throw new Z(
								`Invalid property ${o} for "log" provided to PrismaClient constructor`,
							);}
					}
				}
			}
		},
		__internal: (e) => {
			if (!e) return;
			let t = ["debug", "hooks", "engine", "measurePerformance"];
			if (typeof e != "object") {
				throw new Z(
					`Invalid value ${
						JSON.stringify(e)
					} for "__internal" to PrismaClient constructor`,
				);
			}
			for (let [r] of Object.entries(e)) {
				if (!t.includes(r)) {
					let n = Yt(r, t);
					throw new Z(
						`Invalid property ${
							JSON.stringify(r)
						} for "__internal" provided to PrismaClient constructor.${n}`,
					);
				}
			}
		},
	};
function Lu(e, t) {
	for (let [r, n] of Object.entries(e)) {
		if (!Du.includes(r)) {
			let o = Yt(r, Du);
			throw new Z(
				`Unknown property ${r} provided to PrismaClient constructor.${o}`,
			);
		}
		Md[r](n, t);
	}
	if (e.datasourceUrl && e.datasources) {
		throw new Z(
			'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
		);
	}
}
function Yt(e, t) {
	if (t.length === 0 || typeof e != "string") return "";
	let r = Rd(e, t);
	return r ? ` Did you mean "${r}"?` : "";
}
function Rd(e, t) {
	if (t.length === 0) return null;
	let r = t.map((o) => ({ value: o, distance: (0, Bu.default)(e, o) }));
	r.sort((o, i) => o.distance < i.distance ? -1 : 1);
	let n = r[0];
	return n.distance < 3 ? n.value : null;
}
d();
p();
f();
function ju(e) {
	return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
		let n = new Array(e.length),
			o = null,
			i = !1,
			s = 0,
			a = () => {
				i || (s++, s === e.length && (i = !0, o ? r(o) : t(n)));
			},
			u = (l) => {
				i || (i = !0, r(l));
			};
		for (let l = 0; l < e.length; l++) {
			e[l].then((c) => {
				n[l] = c, a();
			}, (c) => {
				if (!jn(c)) {
					u(c);
					return;
				}
				c.batchRequestIdx === l ? u(c) : (o || (o = c), a());
			});
		}
	});
}
var lt = xe("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Sd = {
		requestArgsToMiddlewareArgs: (e) => e,
		middlewareArgsToRequestArgs: (e) => e,
	},
	Od = Symbol.for("prisma.client.transaction.id"),
	Fd = {
		id: 0,
		nextId() {
			return ++this.id;
		},
	};
function Id(e) {
	class t {
		constructor(n) {
			this._middlewares = new Ln();
			this._createPrismaPromise = oi();
			this.$extends = Ca;
			var a, u, l, c, m, g, w, E;
			qa(e), n && Lu(n, e.datasourceNames);
			let o = new $u.EventEmitter().on("error", () => {});
			this._extensions = Sn.empty(),
				this._previewFeatures =
					(u = (a = e.generator) == null ? void 0 : a.previewFeatures) != null
						? u
						: [],
				this._clientVersion = (l = e.clientVersion) != null ? l : Fu,
				this._activeProvider = e.activeProvider,
				this._tracingHelper = Pu(this._previewFeatures);
			let i = {
					rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
						kr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
					schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
						kr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
				},
				s = (c = e.injectableEdgeEnv) == null ? void 0 : c.call(e);
			try {
				let x = n != null ? n : {},
					T = (m = x.__internal) != null ? m : {},
					R = T.debug === !0;
				R && xe.enable("prisma:client");
				let S = kr.default.resolve(e.dirname, e.relativePath);
				nn.existsSync(S) || (S = e.dirname),
					lt("dirname", e.dirname),
					lt("relativePath", e.relativePath),
					lt("cwd", S);
				let C = T.engine || {};
				if (
					x.errorFormat
						? this._errorFormat = x.errorFormat
						: y.env.NODE_ENV === "production"
						? this._errorFormat = "minimal"
						: y.env.NO_COLOR
						? this._errorFormat = "colorless"
						: this._errorFormat = "colorless",
						this._runtimeDataModel = e.runtimeDataModel,
						this._engineConfig = {
							cwd: S,
							dirname: e.dirname,
							enableDebugLogs: R,
							allowTriggerPanic: C.allowTriggerPanic,
							datamodelPath: kr.default.join(
								e.dirname,
								(g = e.filename) != null ? g : "schema.prisma",
							),
							prismaPath: (w = C.binaryPath) != null ? w : void 0,
							engineEndpoint: C.endpoint,
							generator: e.generator,
							showColors: this._errorFormat === "pretty",
							logLevel: x.log && Au(x.log),
							logQueries: x.log && !!(typeof x.log == "string"
								? x.log === "query"
								: x.log.find((M) =>
									typeof M == "string" ? M === "query" : M.level === "query"
								)),
							env: (E = s == null ? void 0 : s.parsed) != null ? E : {},
							flags: [],
							clientVersion: e.clientVersion,
							engineVersion: e.engineVersion,
							previewFeatures: this._previewFeatures,
							activeProvider: e.activeProvider,
							inlineSchema: e.inlineSchema,
							overrideDatasources: Va(x, e.datasourceNames),
							inlineDatasources: e.inlineDatasources,
							inlineSchemaHash: e.inlineSchemaHash,
							tracingHelper: this._tracingHelper,
							logEmitter: o,
							isBundled: e.isBundled,
						},
						lt("clientVersion", e.clientVersion),
						this._engine = Ya(e, this._engineConfig),
						this._requestHandler = new qn(this, o),
						x.log
				) {
					for (let M of x.log) {
						let N = typeof M == "string"
							? M
							: M.emit === "stdout"
							? M.level
							: null;
						N && this.$on(N, (B) => {
							var pe;
							Bt.log(
								`${(pe = Bt.tags[N]) != null ? pe : ""}`,
								B.message || B.query,
							);
						});
					}
				}
				this._metrics = new ir(this._engine);
			} catch (x) {
				throw x.clientVersion = this._clientVersion, x;
			}
			return this._appliedParent = yr(this);
		}
		get [Symbol.toStringTag]() {
			return "PrismaClient";
		}
		$use(n) {
			this._middlewares.use(n);
		}
		$on(n, o) {
			n === "beforeExit"
				? this._engine.on("beforeExit", o)
				: this._engine.on(n, (i) => {
					var a, u, l, c;
					let s = i.fields;
					return o(
						n === "query"
							? {
								timestamp: i.timestamp,
								query: (a = s == null ? void 0 : s.query) != null ? a : i.query,
								params: (u = s == null ? void 0 : s.params) != null
									? u
									: i.params,
								duration: (l = s == null ? void 0 : s.duration_ms) != null
									? l
									: i.duration,
								target: i.target,
							}
							: {
								timestamp: i.timestamp,
								message: (c = s == null ? void 0 : s.message) != null
									? c
									: i.message,
								target: i.target,
							},
					);
				});
		}
		$connect() {
			try {
				return this._engine.start();
			} catch (n) {
				throw n.clientVersion = this._clientVersion, n;
			}
		}
		async $disconnect() {
			try {
				await this._engine.stop();
			} catch (n) {
				throw n.clientVersion = this._clientVersion, n;
			} finally {
				gs();
			}
		}
		$executeRawInternal(n, o, i, s) {
			return this._request({
				action: "executeRaw",
				args: i,
				transaction: n,
				clientMethod: o,
				argsMapper: ni(this._activeProvider, o),
				callsite: ut(this._errorFormat),
				dataPath: [],
				middlewareArgsMapper: s,
			});
		}
		$executeRaw(n, ...o) {
			return this._createPrismaPromise((i) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					let [s, a] = Uu(n, o);
					return ri(
						this._activeProvider,
						s.text,
						s.values,
						Array.isArray(n)
							? "prisma.$executeRaw`<SQL>`"
							: "prisma.$executeRaw(sql`<SQL>`)",
					),
						this.$executeRawInternal(i, "$executeRaw", s, a);
				}
				throw new ge(
					"`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
					{ clientVersion: this._clientVersion },
				);
			});
		}
		$executeRawUnsafe(n, ...o) {
			return this._createPrismaPromise(
				(i) => (ri(
					this._activeProvider,
					n,
					o,
					"prisma.$executeRawUnsafe(<SQL>, [...values])",
				),
					this.$executeRawInternal(i, "$executeRawUnsafe", [n, ...o])),
			);
		}
		$runCommandRaw(n) {
			if (e.activeProvider !== "mongodb") {
				throw new ge(
					`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
					{ clientVersion: this._clientVersion },
				);
			}
			return this._createPrismaPromise((o) =>
				this._request({
					args: n,
					clientMethod: "$runCommandRaw",
					dataPath: [],
					action: "runCommandRaw",
					argsMapper: fu,
					callsite: ut(this._errorFormat),
					transaction: o,
				})
			);
		}
		async $queryRawInternal(n, o, i, s) {
			return this._request({
				action: "queryRaw",
				args: i,
				transaction: n,
				clientMethod: o,
				argsMapper: ni(this._activeProvider, o),
				callsite: ut(this._errorFormat),
				dataPath: [],
				middlewareArgsMapper: s,
			}).then(Iu);
		}
		$queryRaw(n, ...o) {
			return this._createPrismaPromise((i) => {
				if (n.raw !== void 0 || n.sql !== void 0) {
					return this.$queryRawInternal(i, "$queryRaw", ...Uu(n, o));
				}
				throw new ge(
					"`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
					{ clientVersion: this._clientVersion },
				);
			});
		}
		$queryRawUnsafe(n, ...o) {
			return this._createPrismaPromise((i) =>
				this.$queryRawInternal(i, "$queryRawUnsafe", [n, ...o])
			);
		}
		_transactionWithArray({ promises: n, options: o }) {
			let i = Fd.nextId(),
				s = vu(n.length),
				a = n.map((u, l) => {
					var g, w;
					if (
						(u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise"
					) {
						throw new Error(
							"All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
						);
					}
					let c = o == null ? void 0 : o.isolationLevel,
						m = { kind: "batch", id: i, index: l, isolationLevel: c, lock: s };
					return (w = (g = u.requestTransaction) == null
							? void 0
							: g.call(u, m)) != null
						? w
						: u;
				});
			return ju(a);
		}
		async _transactionWithCallback({ callback: n, options: o }) {
			let i = { traceparent: this._tracingHelper.getTraceParent() },
				s = await this._engine.transaction("start", i, o),
				a;
			try {
				let u = { kind: "itx", ...s };
				a = await n(this._createItxClient(u)),
					await this._engine.transaction("commit", i, s);
			} catch (u) {
				throw await this._engine.transaction("rollback", i, s).catch(() => {}),
					u;
			}
			return a;
		}
		_createItxClient(n) {
			return yr(
				Ne(Cn(this), [
					ye("_appliedParent", () => this._appliedParent._createItxClient(n)),
					ye("_createPrismaPromise", () => oi(n)),
					ye(Od, () => n.id),
					ur(Tu),
				]),
			);
		}
		$transaction(n, o) {
			let i;
			typeof n == "function"
				? i = () => this._transactionWithCallback({ callback: n, options: o })
				: i = () => this._transactionWithArray({ promises: n, options: o });
			let s = { name: "transaction", attributes: { method: "$transaction" } };
			return this._tracingHelper.runInChildSpan(s, i);
		}
		_request(n) {
			var l;
			n.otelParentCtx = this._tracingHelper.getActiveContext();
			let o = (l = n.middlewareArgsMapper) != null ? l : Sd,
				i = {
					args: o.requestArgsToMiddlewareArgs(n.args),
					dataPath: n.dataPath,
					runInTransaction: !!n.transaction,
					action: n.action,
					model: n.model,
				},
				s = {
					middleware: {
						name: "middleware",
						middleware: !0,
						attributes: { method: "$use" },
						active: !1,
					},
					operation: {
						name: "operation",
						attributes: {
							method: i.action,
							model: i.model,
							name: i.model ? `${i.model}.${i.action}` : i.action,
						},
					},
				},
				a = -1,
				u = async (c) => {
					let m = this._middlewares.get(++a);
					if (m) {
						return this._tracingHelper.runInChildSpan(
							s.middleware,
							(R) => m(c, (S) => (R == null || R.end(), u(S))),
						);
					}
					let { runInTransaction: g, args: w, ...E } = c, x = { ...n, ...E };
					w && (x.args = o.middlewareArgsToRequestArgs(w)),
						n.transaction !== void 0 && g === !1 && delete x.transaction;
					let T = await ka(this, x);
					return x.model
						? Sa({
							result: T,
							modelName: x.model,
							args: x.args,
							extensions: this._extensions,
							runtimeDataModel: this._runtimeDataModel,
						})
						: T;
				};
			return this._tracingHelper.runInChildSpan(s.operation, () => u(i));
		}
		async _executeRequest(
			{
				args: n,
				clientMethod: o,
				dataPath: i,
				callsite: s,
				action: a,
				model: u,
				argsMapper: l,
				transaction: c,
				unpacker: m,
				otelParentCtx: g,
				customDataProxyFetch: w,
			},
		) {
			try {
				n = l ? l(n) : n;
				let E = { name: "serialize" },
					x = this._tracingHelper.runInChildSpan(E, () =>
						lu({
							modelName: u,
							runtimeDataModel: this._runtimeDataModel,
							action: a,
							args: n,
							clientMethod: o,
							callsite: s,
							extensions: this._extensions,
							errorFormat: this._errorFormat,
							clientVersion: this._clientVersion,
						}));
				return xe.enabled("prisma:client") &&
					(lt("Prisma Client call:"),
						lt(`prisma.${o}(${la(n)})`),
						lt("Generated request:"),
						lt(
							JSON.stringify(x, null, 2) + `
`,
						)),
					(c == null ? void 0 : c.kind) === "batch" && await c.lock,
					this._requestHandler.request({
						protocolQuery: x,
						modelName: u,
						action: a,
						clientMethod: o,
						dataPath: i,
						callsite: s,
						args: n,
						extensions: this._extensions,
						transaction: c,
						unpacker: m,
						otelParentCtx: g,
						otelChildCtx: this._tracingHelper.getActiveContext(),
						customDataProxyFetch: w,
					});
			} catch (E) {
				throw E.clientVersion = this._clientVersion, E;
			}
		}
		get $metrics() {
			if (!this._hasPreviewFlag("metrics")) {
				throw new ge(
					"`metrics` preview feature must be enabled in order to access metrics API",
					{ clientVersion: this._clientVersion },
				);
			}
			return this._metrics;
		}
		_hasPreviewFlag(n) {
			var o;
			return !!((o = this._engineConfig.previewFeatures) != null &&
				o.includes(n));
		}
	}
	return t;
}
function Uu(e, t) {
	return kd(e) ? [new Ae(e, t), xu] : [e, bu];
}
function kd(e) {
	return Array.isArray(e) && Array.isArray(e.raw);
}
d();
p();
f();
var Dd = new Set([
	"toJSON",
	"$$typeof",
	"asymmetricMatch",
	Symbol.iterator,
	Symbol.toStringTag,
	Symbol.isConcatSpreadable,
	Symbol.toPrimitive,
]);
function _d(e) {
	return new Proxy(e, {
		get(t, r) {
			if (r in t) return t[r];
			if (!Dd.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
		},
	});
}
d();
p();
f();
var export_warnEnvConflicts = void 0;
export {
	$c as join,
	$i as Types,
	$s as sqltag,
	_d as makeStrictEnum,
	Ae as Sql,
	ae as PrismaClientInitializationError,
	Di as Extensions,
	export_warnEnvConflicts as warnEnvConflicts,
	ge as PrismaClientValidationError,
	Id as getPrismaClient,
	ir as MetricsClient,
	jc as defineDmmfProperty,
	Ke as Decimal,
	Me as DMMF,
	me as PrismaClientKnownRequestError,
	Mo as objectEnumValues,
	ms as Debug,
	Ni as Public,
	qc as empty,
	Re as PrismaClientUnknownRequestError,
	rt as PrismaClientRustPanicError,
	sn as warnOnce,
	tt as NotFoundError,
	Us as raw,
	Xn as DMMFClass,
};
//# sourceMappingURL=edge-esm.js.map
