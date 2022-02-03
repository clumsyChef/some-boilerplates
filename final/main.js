!(function () {
	"use strict";
	var e = {
			771: function (e, t, o) {
				var r =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(t, "__esModule", { value: !0 });
				var u = r(o(539)),
					n = r(o(112)),
					l = (0, u.default)(3, 5),
					f = 2 * l,
					i = (0, n.default)(l, f);
				console.log(i), console.log(i);
			},
			539: function (e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.default = function (e, t) {
						return e + t;
					});
			},
			112: function (e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.default = function (e, t) {
						return e * t;
					});
			},
		},
		t = {};
	!(function o(r) {
		var u = t[r];
		if (void 0 !== u) return u.exports;
		var n = (t[r] = { exports: {} });
		return e[r].call(n.exports, n, n.exports, o), n.exports;
	})(771);
})();
