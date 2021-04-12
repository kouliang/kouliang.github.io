(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], Array(41).concat([function(t, e, o) {
        "use strict";
        var n = {
                props: ["error"],
                methods: {
                    pushNewTab: function(t) {
                        var e = window.open();
                        e.opener = null, e.location = t
                    },
                    pushLink: function(t) {
                        window.location.href = t
                    },
                    pushRoute: function(link) {
                        this.$router.push({
                            path: link
                        })
                    },
                    goHome: function() {
                        this.pushRoute("/")
                    }
                }
            },
            r = (o(224), o(23)),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("b-container", {
                    staticClass: "error-page",
                    attrs: {
                        fluid: ""
                    }
                }, [n("b-row", {
                    attrs: {
                        "align-v": "center",
                        "align-h": "center"
                    }
                }, [n("b-col", {
                    staticClass: "error-page__illustration text-center mb-4 mb-lg-0",
                    attrs: {
                        cols: "12",
                        lg: "6"
                    }
                }, [n("img", {
                    attrs: {
                        alt: "Astronaut lost in space",
                        src: o(223)
                    }
                })]), t._v(" "), n("b-col", {
                    staticClass: "pl-lg-5 text-center text-lg-left mt-4 mb-lg-0",
                    attrs: {
                        cols: "12",
                        lg: "6"
                    }
                }, [n("h1", {
                    staticClass: "error-page__error my-3 mb-lg-0"
                }, [t._v(t._s(t.error.statusCode))]), t._v(" "), n("div", [n("h1", {
                    staticClass: "mb-2 mb-lg-0"
                }, [t._v("Lost in space?")]), t._v(" "), n("p", {
                    staticClass: "mb-3"
                }, [t._v("If it seems like something should be here, "), n("a", {
                    attrs: {
                        href: "mailto:support@bitpay.com?subject=404%20Error"
                    }
                }, [t._v("please let us know.")])]), t._v(" "), n("b-button", {
                    staticClass: "bp-button bp-button__md shadow mt-3 float-up error-page__button",
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.goHome()
                        }
                    }
                }, [t._v("\n          Back Home\n        ")])], 1)])], 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/newegg-avatar.737051c.svg"
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48dGl0bGU+RGVsZXRlPC90aXRsZT48ZyBjbGFzcz0ibmMtaWNvbi13cmFwcGVyIiBmaWxsPSIjZmZmZmZmIj48cmVjdCB4PSI2IiB5PSIxMSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9zdmc+Cg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48dGl0bGU+QWRkPC90aXRsZT48ZyBjbGFzcz0ibmMtaWNvbi13cmFwcGVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIj48bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEyIiB5MT0iNyIgeDI9IjEyIiB5Mj0iMTciLz4gPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxNyIgeTE9IjEyIiB4Mj0iNyIgeTI9IjEyIi8+PC9nPjwvc3ZnPgo="
    }, , , , , , , , , , , , , function(t, e, o) {}, , function(t, e, o) {}, function(t, e, o) {}, function(t, e, o) {}, function(t, e, o) {}, , , , , , , , , , , , , , , , , , , , , , function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDQwIDQxIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZmlsbD0iI0I2MjgzMCIgZD0iTTAuMDMyMTE0Mjg1NywyMC4wNzMzMTQzIEMwLjAzMjExNDI4NTcsOS4wMTY1NzE0MyA4Ljk2Nzc3MTQzLDAuMDUzMjU3MTQyOSAxOS45OTA0NTcxLDAuMDUzMjU3MTQyOSBDMzEuMDEzMiwwLjA1MzI1NzE0MjkgMzkuOTQ4ODU3MSw5LjAxNjU3MTQzIDM5Ljk0ODg1NzEsMjAuMDczMzE0MyBDMzkuOTQ4ODU3MSwzMS4xMzAwNTcxIDMxLjAxMzIsNDAuMDkzMzcxNCAxOS45OTA0NTcxLDQwLjA5MzM3MTQgQzguOTY3NzcxNDMsNDAuMDkzMzcxNCAwLjAzMjExNDI4NTcsMzEuMTMwMDU3MSAwLjAzMjExNDI4NTcsMjAuMDczMzE0MyIvPgogICAgPHBvbHlsaW5lIGZpbGw9IiNGRkZGRkUiIHBvaW50cz0iMjguMDQ5IDkuMzg5IDIzLjE0OCAyNC42ODEgMjMuMDg5IDI0LjY4MSAxOS4zNDQgMTMuNTY5IDYuOTc4IDEzLjU2OSA2Ljk3OCAxNi40MDMgMTUuNTk0IDE2LjQwMyAxNi4zNjcgMTguNTg1IDkuMTE4IDE4LjU4NSA5LjExOCAyMS40MTkgMTcuMzcyIDIxLjQxOSAxOC4wMSAyMy4yMTggNi44MyAyMy4yMTggNi44MyAyNi4wNTEgMTkuMDE0IDI2LjA1MSAyMC42MDcgMzAuNTQyIDI1LjI5NyAzMC41NDIgMzIuODM0IDkuMzg5IDI4LjA0OSA5LjM4OSIvPgogIDwvZz4KPC9zdmc+Cg=="
    }, function(t, e, o) {
        t.exports = o.p + "img/ace-jewelers-avatar.44045c7.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/blocklete-games-avatar.3a0a096.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI2NSIgdmlld0JveD0iMCAwIDY1IDY1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMTQyNTMzO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTM3LjMsMEg3LjU5VjQwLjA4M0g0Ny43MDVWMTAuMzcxQTEwLjM3MSwxMC4zNzEsMCwwLDAsMzcuMywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMTY0IDApIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNS40OTIsMGgtNS4xMkExMC4zNzEsMTAuMzcxLDAsMCwwLDAsMTAuMzcxdjUuMTJIMTUuNDkyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMCw3LjU5SDE1LjQ5MlYyMy4wODJIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTcuMTY0KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUuMTgsMzAuNTQxSDIwLjNhMTAuMzcxLDEwLjM3MSwwLDAsMCwxMC4zNzEtMTAuNFYxNS4xOEgxNS4xOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjMyOCAzNC4zMjgpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik03LjU5LDE1LjE4SDIzLjA4MlYzMC42NzJINy41OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjE2NCAzNC4zMjgpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0wLDE1LjE4VjIwLjNBMTAuMzcxLDEwLjM3MSwwLDAsMCwxMC4zNzEsMzAuNjcyaDUuMTJWMTUuMThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDM0LjMyOCkiLz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/inverdiamond.fb5f88b.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/atheist-shoes-avatar.7c7f742.png"
    }, , , , , function(t, e, o) {
        "use strict";
        var n = o(8),
            r = o(189),
            c = o.n(r);
        n.default.component("apexchart", c.a)
    }, , function(t, e, o) {
        "use strict";
        var n = {
                name: "LeadArrowRight"
            },
            r = o(23),
            component = Object(r.a)(n, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("svg", {
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 15 14",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Symbols",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Button/Link-",
                        transform: "translate(-152.000000, -5.000000)",
                        stroke: "#4F6EF7"
                    }
                }, [e("g", {
                    attrs: {
                        id: "Icons/Small-(20px)/Left-Arrow-(Blue)",
                        transform: "translate(153.000000, 6.000000)"
                    }
                }, [e("g", {
                    attrs: {
                        id: "tail-right"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M0,6 L13,6",
                        id: "Shape",
                        "stroke-width": "2"
                    }
                }), this._v(" "), e("polyline", {
                    attrs: {
                        id: "Shape",
                        "stroke-width": "2",
                        points: "7 0 13 6 7 12"
                    }
                })])])])])])])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, o) {
        t.exports = o.p + "img/linkedin-icon.0bdca29.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/twitter-icon.7d87ff7.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/wallet-icon.960b0fa.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/payments-icon.e17f9d8.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/payouts-money-icon.ea92caa.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/card-icon.febc2c5.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/extension-icon.a1b12a4.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/billing-icon.e10d406.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/about-icon.117895e.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NS40NyA0OS40OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNkZWU0ZmQ7c3Ryb2tlOiM0ZjZlZjc7fS5jbHMtMSwuY2xzLTN7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozLjNweDt9LmNscy0yLC5jbHMtM3tmaWxsOiM5OGFhZmE7fS5jbHMtM3tzdHJva2U6IzIzNDY5NDt9LmNscy00e2ZpbGw6IzRmNmVmNzt9LmNscy01e2ZpbGw6IzIzNDY5NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDE0QDIwMHg8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuOTQsNDcuODRINy41OHMtNS45My0xLjE5LTUuOTMtNi43OCw1LjkzLTYuNzcsNS45My02Ljc3SDQ5Ljk0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE3LjEzIDM5LjI5IDEwLjAzIDM5LjI5IDEwLjAzIDQ4LjA5IDEzLjU2IDQ2LjI5IDE3LjEzIDQ4LjA5IDE3LjEzIDM5LjI5Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNTMuODIsMzEuNDlIMTEuNDZTNS41MywzMC4zLDUuNTMsMjQuNzFzNS45My02Ljc4LDUuOTMtNi43OEg1My44MiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI0NS4wOCAyMi4yOSAzNy41NiAyMi4yOSAzNy41NiAzMS4wNSA0MS41NiAyOS4yOSA0NS4wOCAzMS4wNSA0NS4wOCAyMi4yOSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEuNzEsMTUuMkg0NC4wN1M1MCwxNCw1MCw4LjQzcy01LjkzLTYuNzgtNS45My02Ljc4SDEuNzEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTUiIHBvaW50cz0iNy4xNSA2LjEyIDE0LjU2IDYuMTIgMTQuNTYgMTYuMjkgMTAuNTYgMTQuMjkgNy4xNSAxNi4yOSA3LjE1IDYuMTIiLz48L2c+PC9nPjwvc3ZnPg=="
    }, function(t, e, o) {
        t.exports = o.p + "img/partners-icon.826269d.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/press-icon.68c8eb5.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/blog-icon.b6e2d8b.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/careers-icon.6964283.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNS4yNiAzMy4wOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0ZjZlZjc7fS5jbHMtMntmaWxsOiMyMTQ0OTc7fS5jbHMtM3tmaWxsOiM5OGFhZmE7fS5jbHMtNHtmaWxsOiNkZWU0ZmQ7fS5jbHMtNXtmaWxsOm5vbmU7c3Ryb2tlOiMyMTQ0OTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjU2cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxOC44MiIgeT0iMTcuNDMiIHdpZHRoPSI3LjExIiBoZWlnaHQ9IjE1LjY1IiByeD0iMi4wNiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMjguMTYiIHk9IjcuNSIgd2lkdGg9IjcuMTEiIGhlaWdodD0iMjUuNTgiIHJ4PSIyLjA2Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI5LjE3IiB5PSIxNC4wNiIgd2lkdGg9IjcuMTEiIGhlaWdodD0iMTkuMDIiIHJ4PSIyLjA2Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB5PSIyMi4yMyIgd2lkdGg9IjcuMTEiIGhlaWdodD0iMTAuODUiIHJ4PSIyLjA2Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSIyLjAzIDEyLjAxIDEyLjcyIDcuNTYgMjIuOTggOS40NyAzMS43MSAwLjc4Ii8+PC9nPjwvZz48L3N2Zz4="
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/bitpay-logo-white.712bdcb.svg"
    }, , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/atrium-avatar.4acda61.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/onfido-avatar.238d138.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzkxNDZmZjt9LmJ7ZmlsbDojZmZmO30uYiwuY3tmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzNzkgLTYxNDApIj48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMTI1IiBjeT0iMTI1IiByPSIxMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgzNzkgNjE0MCkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NDQ0LjQ3OSA2MjAwLjIyNikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj48cGF0aCBjbGFzcz0iYiIgZD0iTTEwOS44MzQsNjUuMSw4OS43MjUsODUuMjA2SDY5LjYxOEw1Mi4wMjIsMTAyLjhWODUuMjA2SDI5LjRWOS44aDgwLjQzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNzYxIDAuMjU0KSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTIwLjY0NywwVjcwLjM4TDc1LjQsMTE1LjYxOUg1NS4zTDMwLjE2MiwxNDAuNzU2VjExNS42MTlIMFYyNS4xMzZMMjUuMTM0LDBaTTExMC41OTQsMTAuMDU1SDMwLjE2MnY3NS40SDUyLjc4M3YxNy41OTRsMTcuNi0xNy41OTRIOTAuNDg4bDIwLjEwNi0yMC4xMDhaTTk1LjUxMywyNy42NDlWNTcuODA5SDg1LjQ1OVYyNy42NDlabS0yNy42NDgsMFY1Ny44MDlINTcuODExVjI3LjY0OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIi8+PC9nPjwvZz48L2c+PC9zdmc+"
    }, function(t, e, o) {
        t.exports = o.p + "img/blankos-avatar.6b2ceb3.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzcwIiBoZWlnaHQ9IjE5MzAiIHZpZXdCb3g9IjAgMCAyMzcwIDE5MzAiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNlYjY0MDk7fS5ie2ZpbGw6IzdiNmViMTt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NjEyIC0xMDg2OSkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTcyMCwxMzIwLDQwLDEzMTBWODAwbDE2NDAsMTAsNzMwLDIwMHYzODBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODU3MiAxMDc3OSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE2MzAsNjAwLDQwLDU5MFY5MGwxNjIwLDEwLDc0MCwzNTAsMTAsMzUwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NzIgMTA3NzkpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00MCwyMDIwVjE1NTBIMTcwMGw3MTAsODR2Mzg2UzU1LjQ0NCwyMDE4LjE2MSw0MCwyMDIwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NzIgMTA3NzkpIi8+PC9nPjwvc3ZnPg=="
    }, function(t, e, o) {
        t.exports = o.p + "img/btc-wine-avatar.a5fc499.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/murf-electric-bike-avatar.01756ef.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/idoneus-avatar.2727553.svg"
    }, , , , , , , , function(t, e, o) {
        "use strict";
        o(51), o(59), o(111), o(55), o(10), o(97);
        var n = {
                name: "Header",
                props: {
                    enableBanner: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        showNavCollapse: !1,
                        showCompanyCollapse: !1,
                        scrollY: 0,
                        fixedNav: "top",
                        hideNav: !1,
                        dropShadow: !1,
                        transparent: !1,
                        darkMode: !1,
                        timeOut: null,
                        operatingSystem: {
                            Android: function() {
                                return navigator.userAgent.match(/Android/i)
                            },
                            iOS: function() {
                                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                            },
                            macOS: function() {
                                return navigator.userAgent.match(/Mac/i)
                            },
                            Windows: function() {
                                return navigator.userAgent.match(/Win/i)
                            },
                            Linux: function() {
                                return navigator.userAgent.match(/Linux/i)
                            }
                        },
                        marketCategory: "personal",
                        mobileNavCategory: "personal",
                        showRegister: !1,
                        showLogin: !1,
                        showDownload: !1,
                        browser: {
                            width: 1680,
                            height: 1050
                        },
                        nav_break_hide: 50,
                        nav_break_shadow: 35
                    }
                },
                watch: {
                    $route: function() {
                        this.showNavCollapse = !1, this.setMarketCategory(), this.setNavLinks(), this.setDarkMode()
                    },
                    showNavCollapse: function(t) {
                        t || (this.updateState(), this.showCompanyCollapse = !1), this.$emit("mobileNavEvent", t)
                    },
                    marketCategory: function(t) {
                        this.mobileNavCategory = t
                    }
                },
                mounted: function() {
                    window.addEventListener("scroll", this.handleScroll, {
                        passive: !0
                    }), window.addEventListener("resize", this.handleResize, {
                        passive: !0
                    }), this.setMarketCategory(), this.setNavLinks(), this.setDarkMode(), this.handleResize(), this.handleScroll()
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize)
                },
                methods: {
                    eventFire: function(t, e) {
                        if (t.fireEvent) t.fireEvent("on" + e);
                        else {
                            var o = document.createEvent("Events");
                            o.initEvent(e, !0, !1), t.dispatchEvent(o)
                        }
                    },
                    setMarketCategory: function() {
                        var t = this;
                        this.marketCategory = ["about", "blog", "legal", "stats", "billing", "business", "careers", "demos", "exchange-rates", "jobs", "online-payments", "pgp-keys", "press", "pricing", "retail", "send", "xrp"].some((function(e) {
                            return t.$route.fullPath.includes(e)
                        })) ? "business" : "personal"
                    },
                    setDarkMode: function() {
                        this.darkMode = /^\/wallet\/?$/.test(this.$route.path), this.transparent = !!this.darkMode || this.transparent
                    },
                    handleResize: function() {
                        this.browser.width = window.innerWidth, this.browser.height = window.innerHeight
                    },
                    updateState: function() {
                        this.hideNav = this.browser.width < 576 && !this.showNavCollapse && window.scrollY > this.nav_break_hide, this.nav_break_shadow = this.darkMode && this.browser.width < 576 ? 2 * this.nav_break_hide : this.nav_break_shadow, this.dropShadow = window.scrollY >= this.nav_break_shadow, this.transparent = window.scrollY < this.nav_break_shadow && !this.showNavCollapse
                    },
                    handleScroll: function() {
                        this.updateState(), this.scrollY = window.scrollY
                    },
                    setNavLinks: function() {
                        this.showLogin = !/^\/wallet\/?$/.test(this.$route.path), this.showRegister = !/^\/wallet|card\/?$/.test(this.$route.path), this.showDownload = /^\/wallet\/?$/.test(this.$route.path)
                    },
                    loginLink: function() {
                        "business" === this.marketCategory || "personal" === this.marketCategory ? this.pushLink("/dashboard/login") : this.pushLink("/login")
                    },
                    signUpLink: function() {
                        "personal" === this.marketCategory && "personal" === this.mobileNavCategory ? this.pushRoute("/signup?personal") : this.pushRoute("/signup")
                    },
                    downloadWallet: function(t) {
                        this.operatingSystem.Android() ? this.pushLink("https://play.google.com/store/apps/details?id=com.bitpay.wallet") : this.operatingSystem.iOS() ? this.pushLink("https://itunes.apple.com/us/app/bitpay-secure-bitcoin-wallet/id1149581638") : this.operatingSystem.macOS() ? this.pushNewTab("https://itunes.apple.com/us/app/bitpay/id1440200291?mt=12") : this.operatingSystem.Windows() ? this.pushNewTab("https://www.microsoft.com/store/apps/9NBR15SK4ZJV") : this.operatingSystem.Linux() ? this.pushNewTab("https://snapcraft.io/bitpay") : this.pushNewTab("https://play.google.com/store/apps/details?id=com.bitpay.wallet")
                    },
                    pushRoute: function(link) {
                        this.showNavCollapse = !1, this.$router.push({
                            path: link
                        })
                    },
                    pushNewTab: function(t) {
                        var e = window.open();
                        e.opener = null, e.location = t
                    },
                    pushLink: function(t) {
                        window.location.href = t
                    },
                    trackClick: function(t) {
                        window.gtag && window.gtag("event", t, {
                            event_category: "aE"
                        })
                    }
                }
            },
            r = (o(227), o(23)),
            c = Object(r.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "header"
                }, [n("b-navbar", {
                    class: {
                        "hide-nav": t.hideNav, "fixed-top--shadow": t.dropShadow && !t.showNavCollapse, "fixed-top--transparent": t.transparent && !t.showNavCollapse, "fixed-top--white": t.showNavCollapse, "fixed-top--banner": t.enableBanner && !t.dropShadow, "dark-mode": t.darkMode && t.transparent
                    },
                    attrs: {
                        fixed: t.fixedNav,
                        id: "bp-nav",
                        toggleable: "xl",
                        type: "light",
                        variant: "main"
                    }
                }, [n("b-navbar-brand", {
                    attrs: {
                        to: "/"
                    }
                }, [n("img", {
                    staticClass: "bp-logo mr-4",
                    attrs: {
                        src: t.darkMode && t.transparent && !t.showNavCollapse ? o(167) : o(193),
                        alt: "BitPay Logo"
                    },
                    on: {
                        click: function(e) {
                            t.showNavCollapse = !1
                        }
                    }
                })]), t._v(" "), n("b-navbar-toggle", {
                    attrs: {
                        target: "nav_collapse"
                    }
                }, [n("span", {
                    staticClass: "navbar-toggler-icon",
                    class: {
                        "navbar-toggler-icon--exit": t.showNavCollapse
                    }
                })]), t._v(" "), n("transition", {
                    attrs: {
                        mode: "out-in",
                        name: "fadeMobileHeader"
                    }
                }, [t.showNavCollapse ? t._e() : n("b-container", {
                    staticClass: "header--links-mobile--container d-inline-block d-xl-none",
                    attrs: {
                        fluid: ""
                    }
                }, [n("nuxt-link", {
                    staticClass: "header--links-mobile mr-4",
                    class: {
                        "header--active": "personal" === t.marketCategory
                    },
                    attrs: {
                        to: "/"
                    }
                }, [n("span", {
                    class: "personal" === t.marketCategory ? "header--color--active" : "header--color--inactive"
                }, [t._v("\n            Personal\n          ")])]), t._v(" "), n("nuxt-link", {
                    staticClass: "header--links-mobile",
                    class: {
                        "header--active": "business" === t.marketCategory
                    },
                    attrs: {
                        to: "/business"
                    }
                }, [n("span", {
                    class: "business" === t.marketCategory ? "header--color--active" : "header--color--inactive"
                }, [t._v("\n            Business\n          ")])])], 1)], 1), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "nav_default",
                        "is-nav": ""
                    }
                }, [n("b-navbar-nav", [n("b-nav-item", {
                    staticClass: "header--links-left",
                    class: {
                        "header--active": "personal" === t.marketCategory
                    },
                    attrs: {
                        to: "/"
                    }
                }, [n("span", {
                    class: "personal" === t.marketCategory ? "header--color--active" : "header--color--inactive"
                }, [t._v("\n            Personal\n          ")])]), t._v(" "), n("b-nav-item", {
                    staticClass: "header--links-left",
                    class: {
                        "header--active": "business" === t.marketCategory
                    },
                    attrs: {
                        to: "/business"
                    }
                }, [n("span", {
                    class: "business" === t.marketCategory ? "header--color--active" : "header--color--inactive"
                }, [t._v("\n            Business\n          ")])])], 1), t._v(" "), n("b-navbar-nav", {
                    staticClass: "ml-auto"
                }, [n("b-nav-item-dropdown", {
                    staticClass: "header--links-right",
                    attrs: {
                        right: "",
                        text: "Products"
                    }
                }, [n("b-dropdown-header", [t._v("\n            FOR INDIVIDUALS\n          ")]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/card"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(131)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                Card\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption"
                }, [t._v("\n                Turn your crypto into cash\n              ")])])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/wallet"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon pb-2",
                    attrs: {
                        src: o(128)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                Wallet\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption pb-2"
                }, [t._v("\n                Secure and use crypto on the go\n              ")])])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/extension"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon pb-2",
                    attrs: {
                        src: o(132)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                Extension\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption pb-2"
                }, [t._v("\n                Spend crypto from your browser\n              ")])])]), t._v(" "), n("b-dropdown-divider", {
                    staticClass: "dropdown-divider--nav"
                }), t._v(" "), n("b-dropdown-header", [t._v("\n            FOR BUSINESS\n          ")]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/online-payments"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(129)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                Online Payments\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption"
                }, [t._v("\n                Accept bitcoin on your website\n              ")])])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/billing"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(133)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                Billing\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption"
                }, [t._v("\n                Accept bitcoin from clients via email\n              ")])])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/send"
                    }
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(130)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-span--container"
                }, [n("span", {
                    staticClass: "menu-span"
                }, [t._v("\n                BitPay Send\n              ")]), t._v(" "), n("span", {
                    staticClass: "menu-span menu-span--caption"
                }, [t._v("\n                Pay out bitcoin to anyone, anywhere\n              ")])])])], 1), t._v(" "), n("b-nav-item-dropdown", {
                    staticClass: "header--links-right",
                    attrs: {
                        right: "",
                        text: "Company"
                    }
                }, [n("b-dropdown-item", {
                    attrs: {
                        to: "/about"
                    }
                }, [n("div", {
                    staticClass: "mt-2"
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(134),
                        width: "28"
                    }
                }), t._v("\n              About\n            ")])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        href: "https://bitpay.com/resources/"
                    }
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(135),
                        width: "28"
                    }
                }), t._v("\n            Resources\n          ")]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/directory"
                    }
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(136),
                        width: "28"
                    }
                }), t._v("\n            Merchant Directory\n          ")]), t._v(" "), n("b-dropdown-item", {
                    on: {
                        click: function(e) {
                            return t.pushNewTab("/press")
                        }
                    }
                }, [n("div", {
                    staticClass: "mb-2"
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(137),
                        width: "28"
                    }
                }), t._v("\n            Press\n            ")])]), t._v(" "), n("b-dropdown-item", {
                    on: {
                        click: function(e) {
                            return t.pushNewTab("/blog")
                        }
                    }
                }, [n("div", {
                    staticClass: "mb-2"
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(138),
                        width: "28"
                    }
                }), t._v("\n              Blog\n            ")])]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/careers"
                    }
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(139),
                        width: "28"
                    }
                }), t._v("\n            Careers\n          ")]), t._v(" "), n("b-dropdown-item", {
                    attrs: {
                        to: "/stats"
                    }
                }, [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(140),
                        width: "28"
                    }
                }), t._v("\n            Stats\n          ")])], 1), t._v(" "), n("b-nav-item", {
                    staticClass: "disable-anchor"
                }, [n("div", {
                    staticClass: "header--vertical-line"
                })]), t._v(" "), n("b-nav-item", {
                    staticClass: "header--links-right",
                    attrs: {
                        href: "/request-help",
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }
                }, [t._v("\n          Help\n        ")]), t._v(" "), t.showLogin ? n("b-nav-item", {
                    staticClass: "header--links-right",
                    on: {
                        click: function(e) {
                            return t.loginLink()
                        }
                    }
                }, [t._v("\n          Log In\n        ")]) : t._e(), t._v(" "), t.showRegister ? n("b-button", {
                    staticClass: "bp-button bp-button__md ml-4",
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.signUpLink()
                        }
                    }
                }, [t._v("\n          Get Started\n        ")]) : t._e(), t._v(" "), t.showDownload ? n("b-button", {
                    staticClass: "bp-button bp-button__md ml-4",
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: function(e) {
                            return t.downloadWallet()
                        }
                    }
                }, [t._v("\n          Download\n        ")]) : t._e()], 1)], 1), t._v(" "), n("b-collapse", {
                    staticClass: "collapsed--container d-xl-none",
                    attrs: {
                        id: "nav_collapse"
                    },
                    model: {
                        value: t.showNavCollapse,
                        callback: function(e) {
                            t.showNavCollapse = e
                        },
                        expression: "showNavCollapse"
                    }
                }, [n("b-container", {
                    staticClass: "collapsed--container--content",
                    attrs: {
                        fluid: ""
                    }
                }, [n("div", {
                    staticClass: "collapsed--nav"
                }, [n("span", {
                    staticClass: "collapsed--nav--link cursor--pointer mr-2",
                    class: {
                        "header--active": "personal" === t.mobileNavCategory
                    },
                    on: {
                        click: function(e) {
                            t.mobileNavCategory = "personal"
                        }
                    }
                }, [t._v("\n            For Individuals\n          ")]), t._v(" "), n("span", {
                    staticClass: "collapsed--nav--link cursor--pointer",
                    class: {
                        "header--active": "business" === t.mobileNavCategory
                    },
                    on: {
                        click: function(e) {
                            t.mobileNavCategory = "business"
                        }
                    }
                }, [t._v("\n            For Business\n          ")])]), t._v(" "), n("div", {
                    staticClass: "mt-3 w-100"
                }, [n("transition", {
                    attrs: {
                        mode: "out-in",
                        name: "fadeMobileMenu"
                    }
                }, ["personal" === t.mobileNavCategory ? n("div", {
                    key: "personal",
                    staticClass: "collapsed--products"
                }, [n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/card")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(131)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("\n                    Card\n                  ")])])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/wallet")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(128)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("\n                    Wallet\n                  ")])])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/extension")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(132)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("\n                    Extension\n                  ")])])])], 1) : t._e(), t._v(" "), "business" === t.mobileNavCategory ? n("div", {
                    key: "business",
                    staticClass: "collapsed--products"
                }, [n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/online-payments")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(129)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("Online Payments")])])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/billing")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(133)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("Billing")])])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/send")
                        }
                    }
                }, [n("span", {
                    staticClass: "d-flex align-items-center"
                }, [n("img", {
                    staticClass: "dropdown-item--icon",
                    attrs: {
                        src: o(130)
                    }
                }), t._v(" "), n("span", {
                    staticClass: "menu-span--main"
                }, [t._v("BitPay Send")])])])], 1) : t._e()]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    class: {
                        "collapsed--content--toggle": t.showCompanyCollapse
                    },
                    attrs: {
                        "aria-expanded": t.showCompanyCollapse ? "false" : "true",
                        "aria-controls": "collapse_company",
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            t.showCompanyCollapse = !t.showCompanyCollapse
                        }
                    }
                }, [n("span", {
                    staticClass: "menu-span--main weight__regular"
                }, [t._v("Company")]), t._v(" "), n("span", {
                    staticClass: "menu-span--chevron"
                }, [n("img", {
                    staticClass: "rotate",
                    class: {
                        "rotate--down": t.showCompanyCollapse
                    },
                    attrs: {
                        src: o(194)
                    }
                })])]), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "collapse_company"
                    },
                    model: {
                        value: t.showCompanyCollapse,
                        callback: function(e) {
                            t.showCompanyCollapse = e
                        },
                        expression: "showCompanyCollapse"
                    }
                }, [n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/about")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(134),
                        width: "28"
                    }
                }), t._v("\n                About\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushLink("https://bitpay.com/resources/")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(135),
                        width: "28"
                    }
                }), t._v("\n                Resources\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/directory")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(136),
                        width: "28"
                    }
                }), t._v("\n                Merchant Directory\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushNewTab("/press")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(137),
                        width: "28"
                    }
                }), t._v("\n                Press\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushNewTab("/blog")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(138),
                        width: "28"
                    }
                }), t._v("\n                Blog\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/careers")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(139),
                        width: "28"
                    }
                }), t._v("\n                Careers\n              ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushRoute("/stats")
                        }
                    }
                }, [n("span", [n("img", {
                    staticClass: "mr-3",
                    attrs: {
                        src: o(140),
                        width: "28"
                    }
                }), t._v("\n                Stats\n              ")])])], 1), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: function(e) {
                            return t.pushLink("/request-help")
                        }
                    }
                }, [n("span", {
                    staticClass: "menu-span--main weight__regular"
                }, [t._v("\n              Help\n            ")])]), t._v(" "), n("b-container", {
                    staticClass: "collapsed--content",
                    attrs: {
                        fluid: ""
                    },
                    on: {
                        click: t.loginLink
                    }
                }, [n("span", {
                    staticClass: "menu-span--main weight__regular"
                }, [t._v("\n              Log In\n            ")])]), t._v(" "), t.showRegister || "business" === t.mobileNavCategory ? n("b-button", {
                    staticClass: "mt-5 mb-5 bp-button bp-button__lg",
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: t.signUpLink
                    }
                }, [t._v("\n            Sign Up\n          ")]) : t._e(), t._v(" "), t.showDownload && "personal" === t.mobileNavCategory ? n("b-button", {
                    staticClass: "mt-5 mb-5 bp-button bp-button__lg",
                    attrs: {
                        variant: "primary"
                    },
                    on: {
                        click: t.downloadWallet
                    }
                }, [t._v("\n            Download\n          ")]) : t._e()], 1)])], 1)], 1)], 1)
            }), [], !1, null, null, null).exports,
            l = (o(112), {
                name: "Footer",
                components: {
                    LeadArrowRight: o(125).a
                },
                data: function() {
                    return {
                        showBusiness: !1,
                        showPersonal: !1,
                        showDev: !1,
                        showCompany: !1,
                        insightLink: null
                    }
                },
                mounted: function() {
                    this.buildInsightLink()
                },
                methods: {
                    buildInsightLink: function() {
                        var t = "mainnet";
                        (window.location.host.startsWith("test") || window.location.host.startsWith("staging")) && (t = "testnet"), this.insightLink = "https://bitpay.com/insight/#/BTC/".concat(t, "/home")
                    },
                    customizeCookies: function() {
                        document.getElementsByClassName("customize-modal")[0].style.display = "block", document.body.style.overflow = "hidden"
                    }
                }
            }),
            d = (o(228), Object(r.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "footer"
                }, [n("b-container", [n("b-row", {
                    staticClass: "footer--container",
                    attrs: {
                        "align-v": "center"
                    }
                }, [n("b-col", {
                    staticClass: "mt-5 mt-lg-0",
                    attrs: {
                        "align-self": "center",
                        xl: "7",
                        lg: "6"
                    }
                }, [n("h1", {
                    staticClass: "text__heading-2 text-white"
                }, [t._v("We're here to help")])]), t._v(" "), n("b-col", [n("div", {
                    staticClass: "text-white"
                }, [t._v("\n          Support is just a few taps away. You can also get your questions answered by using our\n          "), n("a", {
                    staticClass: "color__lilac-blue anchor--no-underline",
                    attrs: {
                        href: "https://bitpay.com/request-help",
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }
                }, [t._v("help library.")])]), t._v(" "), n("a", {
                    staticClass: "cta-link cta-link--dark mt-3",
                    attrs: {
                        href: "/request-help",
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }
                }, [t._v("\n          Contact Us\n          "), n("LeadArrowRight", {
                    staticClass: "cta-link__arrow"
                })], 1)])], 1), t._v(" "), n("div", {
                    staticClass: "footer--line mt-4 mt-lg-0",
                    attrs: {
                        id: "deadClick"
                    }
                }), t._v(" "), n("b-row", {
                    staticClass: "footer--content"
                }, [n("b-col", {
                    staticClass: "mb-0 mb-md-5 mb-lg-0",
                    attrs: {
                        lg: "4",
                        cols: "12"
                    }
                }, [n("img", {
                    staticClass: "footer--logo ml-lg-3",
                    attrs: {
                        alt: "BitPay Logo - White",
                        src: o(167)
                    }
                })]), t._v(" "), n("b-col", {
                    staticClass: "d-none d-md-flex",
                    attrs: {
                        cols: "6",
                        md: "3",
                        lg: "2"
                    }
                }, [n("div", {
                    staticClass: "footer--nav"
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/business"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header"
                }, [t._v("Business")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/online-payments"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Payments")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/billing"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Billing")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/send"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("BitPay Send")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/retail"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Retail")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/pricing"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Pricing")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/exchange-rates"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Exchange Rates")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://bitpay.com/request-help",
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("FAQ")])])], 1)]), t._v(" "), n("b-col", {
                    staticClass: "mb-5 mb-lg-0 d-none d-md-flex",
                    attrs: {
                        cols: "6",
                        md: "3",
                        lg: "2"
                    }
                }, [n("div", {
                    staticClass: "footer--nav"
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header"
                }, [t._v("Personal")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/card"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Card")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://support.bitpay.com/hc/en-us/categories/115000745966-BitPay-Card"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Card FAQ")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/wallet"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Wallet")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://support.bitpay.com/hc/en-us/categories/115000745946-BitPay-Wallet"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Wallet FAQ")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/extension"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Extension")])])], 1)]), t._v(" "), n("b-col", {
                    staticClass: "d-none d-md-flex",
                    attrs: {
                        cols: "6",
                        md: "3",
                        lg: "2"
                    }
                }, [n("div", {
                    staticClass: "footer--nav"
                }, [n("div", {
                    staticClass: "footer--nav--sub-header cursor--default"
                }, [t._v("Developers")]), t._v(" "), n("a", {
                    attrs: {
                        href: "/docs"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Docs")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://bitcore.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Bitcore")])]), t._v(" "), n("a", {
                    attrs: {
                        href: t.insightLink,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Insight")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://github.com/bitpay",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Open Source")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/pgp-keys"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("PGP Keys")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/integrations"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Integrations")])])], 1)]), t._v(" "), n("b-col", {
                    staticClass: "d-none d-md-flex",
                    attrs: {
                        cols: "6",
                        md: "3",
                        lg: "2"
                    }
                }, [n("div", {
                    staticClass: "footer--nav"
                }, [n("div", {
                    staticClass: "footer--nav--sub-header cursor--default"
                }, [t._v("Company")]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("About")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/careers"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("\n              Careers\n            ")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/directory"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links",
                    staticStyle: {
                        width: "150%"
                    }
                }, [t._v("\n              Merchant Directory\n              "), n("span", {
                    staticClass: "badge badge-primary weight__medium text-white ml-2"
                }, [t._v("New")])])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/press",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Press")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://brand.bitpay.com/7b6hnbyxw/v/0/p/69207b-our-story",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("BitPay Brand Guide")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/blog",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Blog")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/stats"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Stats")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/legal/terms-of-use"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Legal")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/about/privacy"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Privacy")])]), t._v(" "), n("a", {
                    on: {
                        click: function(e) {
                            return t.customizeCookies()
                        }
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Manage Cookies")])]), t._v(" "), n("a", {
                    on: {
                        click: function(e) {
                            return t.customizeCookies()
                        }
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Do Not Sell My Personal Information under CCPA")])]), t._v(" "), n("span", [n("a", {
                    attrs: {
                        href: "https://www.linkedin.com/company/bitpay-inc-",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("img", {
                    staticClass: "mr-2",
                    attrs: {
                        src: o(126),
                        alt: "LinkedIn",
                        width: "16"
                    }
                })]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://twitter.com/BitPay",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("img", {
                    attrs: {
                        src: o(127),
                        alt: "Twitter",
                        width: "16"
                    }
                })])])], 1)])], 1), t._v(" "), n("b-row", {
                    staticClass: "footer--nav--mobile d-block d-md-none",
                    attrs: {
                        "align-v": "center"
                    }
                }, [n("b-col", {
                    staticClass: "mb-4",
                    attrs: {
                        cols: "12"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header",
                    attrs: {
                        "aria-controls": "business-collapse",
                        "aria-expanded": t.showBusiness ? "false" : "true"
                    },
                    on: {
                        click: function(e) {
                            t.showBusiness = !t.showBusiness
                        }
                    }
                }, [n("span", [t._v("\n            Business\n            "), t.showBusiness ? n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(72)
                    }
                })]) : n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(73)
                    }
                })])])]), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "business-collapse"
                    },
                    model: {
                        value: t.showBusiness,
                        callback: function(e) {
                            t.showBusiness = e
                        },
                        expression: "showBusiness"
                    }
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/online-payments"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Payments")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/billing"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Billing")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/send"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Bitpay Send")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/retail"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Retail")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/pricing"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Pricing")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/exchange-rates"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Exchange Rates")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://bitpay.com/request-help",
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("FAQ")])])], 1)], 1), t._v(" "), n("b-col", {
                    staticClass: "mb-4",
                    attrs: {
                        cols: "12"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header",
                    attrs: {
                        "aria-controls": "personal-collapse",
                        "aria-expanded": t.showPersonal ? "false" : "true"
                    },
                    on: {
                        click: function(e) {
                            t.showPersonal = !t.showPersonal
                        }
                    }
                }, [n("span", [t._v("\n            Personal\n            "), t.showPersonal ? n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(72)
                    }
                })]) : n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(73)
                    }
                })])])]), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "personal-collapse"
                    },
                    model: {
                        value: t.showPersonal,
                        callback: function(e) {
                            t.showPersonal = e
                        },
                        expression: "showPersonal"
                    }
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/card"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Card")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://support.bitpay.com/hc/en-us/categories/115000745966-BitPay-Card"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Card FAQ")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/wallet"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Wallet")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://support.bitpay.com/hc/en-us/categories/115000745946-BitPay-Wallet"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Wallet FAQ")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/extension"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Extension")])])], 1)], 1), t._v(" "), n("b-col", {
                    staticClass: "mb-4",
                    attrs: {
                        cols: "12"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header",
                    attrs: {
                        "aria-controls": "dev-collapse",
                        "aria-expanded": t.showDev ? "false" : "true"
                    },
                    on: {
                        click: function(e) {
                            t.showDev = !t.showDev
                        }
                    }
                }, [n("span", [t._v("\n            Developers\n            "), t.showDev ? n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(72)
                    }
                })]) : n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(73)
                    }
                })])])]), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "dev-collapse"
                    },
                    model: {
                        value: t.showDev,
                        callback: function(e) {
                            t.showDev = e
                        },
                        expression: "showDev"
                    }
                }, [n("a", {
                    attrs: {
                        href: "/docs"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Docs")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://bitcore.io/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Bitcore")])]), t._v(" "), n("a", {
                    attrs: {
                        href: t.insightLink,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Insight")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://bitpay.github.io",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Open Source")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/pgp-keys"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("PGP Keys")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/integrations"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Integrations")])])], 1)], 1), t._v(" "), n("b-col", {
                    staticClass: "mb-4",
                    attrs: {
                        cols: "12"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--sub-header",
                    attrs: {
                        "aria-controls": "company-collapse",
                        "aria-expanded": t.showCompany ? "false" : "true"
                    },
                    on: {
                        click: function(e) {
                            t.showCompany = !t.showCompany
                        }
                    }
                }, [n("span", [t._v("\n            Company\n            "), t.showCompany ? n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(72)
                    }
                })]) : n("span", {
                    staticClass: "float-right"
                }, [n("img", {
                    staticClass: "ml-3 float-up",
                    attrs: {
                        src: o(73)
                    }
                })])])]), t._v(" "), n("b-collapse", {
                    attrs: {
                        id: "company-collapse"
                    },
                    model: {
                        value: t.showCompany,
                        callback: function(e) {
                            t.showCompany = e
                        },
                        expression: "showCompany"
                    }
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/about"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("About")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/careers"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Careers")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/directory"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Merchant Directory")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/press",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Press")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://brand.bitpay.com/7b6hnbyxw/v/0/p/69207b-our-story",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("BitPay Brand Guide")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/blog",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Blog")])]), t._v(" "), n("a", {
                    attrs: {
                        href: "/stats"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Stats")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/legal/terms-of-use"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Legal")])]), t._v(" "), n("nuxt-link", {
                    attrs: {
                        to: "/about/privacy"
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Privacy")])]), t._v(" "), n("a", {
                    on: {
                        click: function(e) {
                            return t.customizeCookies()
                        }
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Customize Cookies")])]), t._v(" "), n("a", {
                    on: {
                        click: function(e) {
                            return t.customizeCookies()
                        }
                    }
                }, [n("div", {
                    staticClass: "footer--nav--links"
                }, [t._v("Do Not Sell My Personal Information under CCPA")])]), t._v(" "), n("span", [n("a", {
                    attrs: {
                        href: "https://www.linkedin.com/company/bitpay-inc-",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("img", {
                    staticClass: "mr-2",
                    attrs: {
                        src: o(126),
                        width: "16"
                    }
                })]), t._v(" "), n("a", {
                    attrs: {
                        href: "https://twitter.com/BitPay",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("img", {
                    attrs: {
                        src: o(127),
                        width: "16"
                    }
                })]), t._v(" "), n("div", [n("a", [n("p")])])])], 1)], 1)], 1)], 1)], 1)
            }), [], !1, null, null, null).exports),
            m = {
                name: "Banner",
                data: function() {
                    return {
                        darkMode: !1,
                        blueMode: !1,
                        centered: !0,
                        caption: "🎉  Say hello to the new BitPay Card!",
                        ctaButton: "Learn more",
                        ctaLink: "/card"
                    }
                },
                methods: {
                    emitCloseBanner: function() {
                        window.sessionStorage.setItem("closeBanner", "true"), this.$emit("emitCloseBanner")
                    }
                }
            },
            y = (o(229), {
                components: {
                    Header: c,
                    Footer: d,
                    Banner: Object(r.a)(m, (function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("div", {
                            staticClass: "banner",
                            class: {
                                midnight: t.darkMode, blue: t.blueMode
                            }
                        }, [t.centered ? o("div", {
                            staticClass: "banner__content centered"
                        }, [o("div", {
                            staticClass: "banner__content__text"
                        }, [t._v("\n      " + t._s(t.caption) + "\n      "), o("nuxt-link", {
                            staticClass: "banner__content__button",
                            attrs: {
                                to: t.ctaLink
                            }
                        }, [t._v("\n        " + t._s(t.ctaButton) + "\n      ")])], 1), t._v(" "), o("div", {
                            staticClass: "banner__content__exit",
                            on: {
                                click: t.emitCloseBanner
                            }
                        }, [t._v("×")])]) : o("div", {
                            staticClass: "banner__content"
                        }, [o("div", {
                            staticClass: "banner__content__text"
                        }, [t._v("\n      " + t._s(t.caption) + "\n    ")]), t._v(" "), o("div", {
                            staticClass: "d-flex align-items-center"
                        }, [o("nuxt-link", {
                            staticClass: "banner__content__button",
                            attrs: {
                                to: t.ctaLink
                            }
                        }, [t._v("\n        " + t._s(t.ctaButton) + "\n      ")])], 1)])])
                    }), [], !1, null, "246ec296", null).exports
                },
                data: function() {
                    return {
                        lockScroll: !1,
                        enableBanner: !1,
                        hideHeader: !1
                    }
                },
                mounted: function() {
                    this.checkBanner(), this.checkBannerClosed(), this.checkHeader()
                },
                methods: {
                    handleMobileMenu: function(t) {
                        this.lockScroll = t
                    },
                    checkBanner: function() {
                        var t = this;
                        this.enableBanner = !["business", "directory", "blog", "card", "signup"].some((function(e) {
                            return t.$route.fullPath.includes(e)
                        }))
                    },
                    closeBanner: function() {
                        this.enableBanner = !1
                    },
                    checkBannerClosed: function() {
                        window.sessionStorage.closeBanner && "true" === window.sessionStorage.closeBanner && (this.enableBanner = !1)
                    },
                    checkHeader: function() {
                        var t = this;
                        this.hideHeader = ["blog"].some((function(e) {
                            return t.$route.fullPath.includes(e)
                        }))
                    }
                },
                watch: {
                    $route: function() {
                        this.checkBanner(), this.checkBannerClosed(), this.checkHeader()
                    }
                }
            }),
            w = (o(230), Object(r.a)(y, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [t.enableBanner ? o("Banner", {
                    on: {
                        emitCloseBanner: t.closeBanner
                    }
                }) : t._e(), t._v(" "), t.hideHeader ? t._e() : o("Header", {
                    attrs: {
                        enableBanner: t.enableBanner
                    },
                    on: {
                        mobileNavEvent: t.handleMobileMenu
                    }
                }), t._v(" "), o("div", {
                    staticClass: "main-layout",
                    class: {
                        "lock-scroll": t.lockScroll, "banner-bump-down": t.enableBanner
                    }
                }, [o("transition", {
                    attrs: {
                        name: "page",
                        mode: "out-in"
                    }
                }, [o("nuxt")], 1), t._v(" "), o("Footer")], 1)], 1)
            }), [], !1, null, null, null));
        e.a = w.exports
    }, , function(t, e, o) {
        t.exports = o.p + "img/bitpay-logo-blue.1c0494b.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjE5cHgiIHZpZXdCb3g9IjAgMCA5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNoZXZyb24tUmlnaHQ8L3RpdGxlPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMjAwMDAwMDAzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj4KICAgICAgICA8ZyBpZD0iQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Byb2R1Y3RzLShCdXNpbmVzcy0rLVBlcnNvbmFsKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0xMDkuMDAwMDAwKSIgc3Ryb2tlPSIjMTExMTExIj4KICAgICAgICAgICAgPGcgaWQ9IkNvbXBvbmVudHMvTmF2aWdhdGlvbi9Ecm9wbmF2L1Byb2R1Y3RzLShCdXNpbmVzcy0rLVBlcnNvbmFsKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iUHJvZHVjdC0oUGF5bWVudCkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjAwMDAwMCwgODIuOTAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTaGFwZSIgcG9pbnRzPSIzMDcgMjcgMzE2IDM1LjUgMzA3IDQ0Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
    }, function(t, e, o) {
        t.exports = o(196)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/astronaut-lost-in-space.cb7757c.svg"
    }, function(t, e, o) {
        "use strict";
        var n = o(86);
        o.n(n).a
    }, , , function(t, e, o) {
        "use strict";
        var n = o(88);
        o.n(n).a
    }, function(t, e, o) {
        "use strict";
        var n = o(89);
        o.n(n).a
    }, function(t, e, o) {
        "use strict";
        var n = o(90);
        o.n(n).a
    }, function(t, e, o) {
        "use strict";
        var n = o(91);
        o.n(n).a
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return l
        })), o.d(e, "mutations", (function() {
            return d
        })), o.d(e, "actions", (function() {
            return m
        }));
        o(3), o(1), o(5), o(42);
        var n = o(11),
            r = o(43),
            c = o.n(r),
            l = function() {
                return {
                    directory: {
                        listMode: !1,
                        recentlyAdded: {
                            Atrium: {
                                displayName: "Atrium",
                                logo: o(176),
                                link: "https://www.atrium.co/",
                                featured: !0,
                                caption: "Buy legal services with cryptocurrency"
                            },
                            ExpressVPN: {
                                displayName: "ExpressVPN",
                                logo: o(113),
                                link: "https://www.expressvpn.com",
                                featured: !0,
                                caption: "Buy a VPN with cryptocurrency"
                            },
                            Onfido: {
                                displayName: "Onfido",
                                logo: o(177),
                                link: "https://onfido.com/",
                                featured: !0,
                                caption: "Buy identity verification services with cryptocurrency"
                            },
                            Twitch: {
                                displayName: "Twitch",
                                logo: o(178),
                                link: "https://www.twitch.tv",
                                displayLink: "twitch.tv",
                                featured: !0,
                                caption: "Use cryptocurrency on Twitch.tv through Xsolla",
                                discount: {
                                    type: "generic",
                                    amount: "Promo"
                                }
                            }
                        },
                        recentlyAddedPromotions: {
                            "Blankos Block Party": {
                                displayName: "Blankos Block Party",
                                logo: o(179),
                                link: "https://blankos.com/",
                                displayLink: "blankos.com",
                                featured: !0,
                                caption: "Want to join the party? You're not alone! Click here to learn more.",
                                discount: {
                                    type: "generic",
                                    amount: "Promo"
                                },
                                theme: "#0C204E"
                            },
                            "Newegg (AU)": {
                                displayName: "Newegg",
                                logo: o(49),
                                link: "https://www.newegg.com/global/au-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                displayLink: "newegg.com/global/au-en",
                                featured: !0,
                                caption: "Get up to AUD $75 discount on your order.",
                                country: "AU",
                                discount: {
                                    type: "generic",
                                    amount: "Promo"
                                },
                                theme: "#0C204E"
                            },
                            "Newegg (HK)": {
                                displayName: "Newegg",
                                logo: o(49),
                                link: "https://www.newegg.com/global/hk-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                displayLink: "newegg.com/global/hk-en",
                                featured: !0,
                                caption: "Get up to HKD $385 discount on your order.",
                                country: "CN",
                                discount: {
                                    type: "generic",
                                    amount: "Promo"
                                },
                                theme: "#0C204E"
                            }
                        },
                        categories: {
                            blackFridayPromos: {
                                displayName: "Black Friday",
                                emoji: "🛒",
                                route: "black-friday-promos",
                                metaTitle: "Black Friday Promotions",
                                metaDescription: "Black Friday Promotions.",
                                expired: !0,
                                cards: {
                                    "Ace Jewelers": {
                                        displayName: "Ace Jewelers",
                                        logo: o(114),
                                        link: "https://www.acejewelers.com/en/bitpay",
                                        displayLink: "acejewelers.com/en/bitpay",
                                        featured: !0,
                                        captionLong: "Use code BF2020BitP@y for 20% off select items"
                                    },
                                    "Blocklete Games": {
                                        displayName: "Blocklete Games",
                                        logo: o(115),
                                        link: "https://blockletegames.com/playtoearn?featured=true",
                                        displayLink: "blockletegames.com/playtoearn",
                                        featured: !0,
                                        captionLong: "Custom Art Golfer by Tommy Wilson now available"
                                    },
                                    Ledger: {
                                        displayName: "Ledger",
                                        logo: o(116),
                                        link: "https://shop.ledger.com/pages/black-friday",
                                        displayLink: "ledger.com",
                                        featured: !0,
                                        captionLong: "Use code BLACKFRIDAY20 for 40% off"
                                    },
                                    NeweggHK: {
                                        displayName: "Newegg (HK)",
                                        logo: o(49),
                                        link: "https://www.newegg.com/global/hk-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                        displayLink: "newegg.com",
                                        featured: !1,
                                        captionLong: "Save up to HKD $385 on your order"
                                    },
                                    NeweggAUD: {
                                        displayName: "Newegg (AU)",
                                        logo: o(49),
                                        link: "https://www.newegg.com/global/au-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                        displayLink: "newegg.com",
                                        featured: !1,
                                        captionLong: "Save up to AUD $75 on your order"
                                    },
                                    INVERDIAMOND: {
                                        displayName: "INVERDIAMOND",
                                        logo: o(117),
                                        link: "https://inverdiamond.com/shop",
                                        displayLink: "inverdiamond.com",
                                        featured: !1,
                                        captionLong: "Save 7% off to celebrate our birthday"
                                    },
                                    "ATHEIST Shoes": {
                                        displayName: "ATHEIST Shoes!",
                                        logo: o(118),
                                        link: "https://atheist.shoes/",
                                        displayLink: "atheist.shoes",
                                        featured: !1,
                                        captionLong: "Save 10% off with code HandmadeComfy"
                                    },
                                    Cryptohopper: {
                                        displayName: "Cryptohopper",
                                        logo: "https://bitpay.com/img/merchant-logos/cryptohopper_avatar.png",
                                        link: "https://www.cryptohopper.com/?atid=8459",
                                        displayLink: "cryptohopper.com",
                                        featured: !1,
                                        captionLong: "Save 30% off subscription with code BLACKFRIDAY"
                                    },
                                    HOSTKEY: {
                                        displayName: "HOSTKEY",
                                        logo: o(180),
                                        link: "https://www.hostkey.com/about/news/142",
                                        displayLink: "hostkey.com",
                                        featured: !1,
                                        captionLong: "Save up to 60% off"
                                    },
                                    ExpressVPN: {
                                        displayName: "ExpressVPN",
                                        logo: o(113),
                                        link: "https://www.expressvpn.com/coupons",
                                        displayLink: "expressvpn.com",
                                        featured: !1,
                                        captionLong: "Save up to 49% off"
                                    },
                                    StaxDeal: {
                                        displayName: "StaxDeal",
                                        logo: o(248),
                                        link: "https://staxdeal.com",
                                        displayLink: "staxdeal.com",
                                        featured: !1,
                                        captionLong: "Save up to 20% off"
                                    },
                                    "BTC Wine": {
                                        displayName: "BTC Wine",
                                        logo: o(181),
                                        link: "https://www.btc-wine.com/",
                                        displayLink: "btc-wine.com",
                                        featured: !1,
                                        captionLong: "Save up to 20% off with code BFBTCWINE20"
                                    },
                                    Ballet: {
                                        displayName: "Ballet",
                                        logo: o(249),
                                        link: "https://store.balletcrypto.com/products/blackfriday",
                                        displayLink: "store.balletcrypto.com",
                                        featured: !1,
                                        captionLong: "Save up to 30% off"
                                    },
                                    "Murf Electric Bikes": {
                                        displayName: "Murf Electric Bikes",
                                        logo: o(182),
                                        link: "https://www.murfelectricbikes.com",
                                        displayLink: "murfelectricbikes.com",
                                        featured: !0,
                                        captionLong: "Save up to 10% off (USA) with code HODL"
                                    }
                                }
                            },
                            cyberMondayPromos: {
                                displayName: "Cyber Monday",
                                emoji: "🛒",
                                route: "cyber-monday-promos",
                                metaTitle: "Cyber Monday Promotions",
                                metaDescription: "Cyber Monday Promotions.",
                                expired: !0,
                                cards: {
                                    "Ace Jewelers": {
                                        displayName: "Ace Jewelers",
                                        logo: o(114),
                                        link: "https://www.acejewelers.com/en/bitpay",
                                        displayLink: "acejewelers.com/en/bitpay",
                                        featured: !0,
                                        captionLong: "Use code BF2020BitP@y for 20% off select items"
                                    },
                                    "Blocklete Games": {
                                        displayName: "Blocklete Games",
                                        logo: o(115),
                                        link: "https://blockletegames.com/playtoearn?featured=true",
                                        displayLink: "blockletegames.com/playtoearn",
                                        featured: !0,
                                        captionLong: "Custom Art Golfer by Tommy Wilson now available"
                                    },
                                    Ledger: {
                                        displayName: "Ledger",
                                        logo: o(116),
                                        link: "https://shop.ledger.com/pages/black-friday",
                                        displayLink: "ledger.com",
                                        featured: !0,
                                        captionLong: "Use code BLACKFRIDAY20 for 40% off"
                                    },
                                    NeweggHK: {
                                        displayName: "Newegg (HK)",
                                        logo: o(49),
                                        link: "https://www.newegg.com/global/hk-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                        displayLink: "newegg.com",
                                        featured: !1,
                                        captionLong: "Save up to HKD $385 on your order"
                                    },
                                    NeweggAUD: {
                                        displayName: "Newegg (AU)",
                                        logo: o(49),
                                        link: "https://www.newegg.com/global/au-en/Use-Bitcoin-and-Save-Big/EventSaleStore/ID-869",
                                        displayLink: "newegg.com",
                                        featured: !1,
                                        captionLong: "Save up to AUD $75 on your order"
                                    },
                                    INVERDIAMOND: {
                                        displayName: "INVERDIAMOND",
                                        logo: o(117),
                                        link: "https://inverdiamond.com/shop",
                                        displayLink: "inverdiamond.com",
                                        featured: !1,
                                        captionLong: "Save 7% off to celebrate our birthday"
                                    },
                                    "ATHEIST Shoes": {
                                        displayName: "ATHEIST Shoes!",
                                        logo: o(118),
                                        link: "https://atheist.shoes/",
                                        displayLink: "atheist.shoes",
                                        featured: !0,
                                        captionLong: "Save 10% off with code HandmadeComfy"
                                    },
                                    "Murf Electric Bikes": {
                                        displayName: "Murf Electric Bikes",
                                        logo: o(182),
                                        link: "https://www.murfelectricbikes.com",
                                        displayLink: "murfelectricbikes.com",
                                        featured: !0,
                                        captionLong: "Save up to 10% off (USA) with code HODL"
                                    }
                                }
                            },
                            giftCards: {
                                displayName: "Gift Cards",
                                emoji: "🎁",
                                route: "gift-cards",
                                metaTitle: "Buy Gift Cards with Cryptocurrency",
                                metaDescription: "Buy gift cards for major brands from inside the BitPay app using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {},
                                cardNames: []
                            },
                            electronicsHardware: {
                                displayName: "Electronics & Hardware",
                                emoji: "🤖",
                                route: "electronics-hardware",
                                metaTitle: "Buy Electronics & Hardware with Cryptocurrency",
                                metaDescription: "Buy computer hardware & electronics using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    Newegg: {
                                        displayName: "Newegg",
                                        logo: o(49),
                                        link: "https://www.newegg.com",
                                        displayLink: "newegg.com",
                                        featured: !0,
                                        caption: "Shop computer hardware, digital cameras, & more with cryptocurrency"
                                    },
                                    "CoolWallet S": {
                                        displayName: "CoolWallet S",
                                        logo: "https://bitpay.com/img/wallet-logos/coolwallet.svg",
                                        link: "https://www.coolwallet.io",
                                        displayLink: "coolwallet.io",
                                        featured: !0,
                                        caption: "Buy hardware wallets with cryptocurrency"
                                    },
                                    Ledger: {
                                        displayName: "Ledger",
                                        logo: o(116),
                                        link: "https://www.ledger.com",
                                        displayLink: "ledger.com",
                                        featured: !0,
                                        caption: "Buy a hardware wallet with cryptocurrency"
                                    },
                                    "SCAN UK": {
                                        displayName: "SCAN UK",
                                        logo: o(250),
                                        link: "https://www.scan.co.uk",
                                        displayLink: "scan.co.uk",
                                        featured: !0,
                                        caption: "Shop PC systems & components with cryptocurrency"
                                    },
                                    Avnet: {
                                        displayName: "Avnet",
                                        logo: o(251),
                                        link: "https://www.avnet.com",
                                        displayLink: "avnet.com",
                                        featured: !0,
                                        caption: "Buy electronic components & services with cryptocurrency"
                                    },
                                    "Mackabler.dk": {
                                        displayName: "Mackabler.dk",
                                        logo: o(252),
                                        link: "https://mackabler.dk/",
                                        displayLink: "mackabler.dk",
                                        featured: !1,
                                        caption: "Buy DIY electronics with cryptocurrency"
                                    },
                                    Adafruit: {
                                        displayName: "Adafruit Industries",
                                        logo: o(253),
                                        link: "https://www.adafruit.com/",
                                        displayLink: "adafruit.com",
                                        caption: "Buy DIY electronics with cryptocurrency"
                                    },
                                    "The Pi Hut": {
                                        displayName: "The Pi Hut",
                                        logo: o(254),
                                        link: "https://thepihut.com/",
                                        displayLink: "thepihut.com",
                                        caption: "Buy Raspberry Pis with cryptocurrency"
                                    },
                                    KeepKey: {
                                        displayName: "KeepKey",
                                        logo: o(255),
                                        link: "https://shapeshift.io/keepkey/",
                                        displayLink: "shapeshift.io/keepkey",
                                        caption: "Buy a hardware wallet with cryptocurrency"
                                    },
                                    Webhallen: {
                                        displayName: "Webhallen",
                                        logo: o(256),
                                        link: "https://www.webhallen.com/",
                                        displayLink: "webhallen.com",
                                        caption: "Shop games & electronics with cryptocurrency"
                                    },
                                    "Overclockers UK": {
                                        displayName: "Overclockers UK",
                                        logo: o(257),
                                        link: "https://www.overclockers.co.uk/",
                                        displayLink: "overclockers.co.uk",
                                        caption: "Shop PC systems & components with cryptocurrency"
                                    }
                                }
                            },
                            preciousMetals: {
                                displayName: "Jewelry & Precious Metals",
                                emoji: "💎",
                                route: "precious-metals",
                                metaTitle: "Buy Jewelry and Precious Metals with Cryptocurrency",
                                metaDescription: "Purchase gold and silver bullion and coins using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    MINTBUILDER: {
                                        displayName: "MintBuilder",
                                        logo: o(258),
                                        link: "https://mintbuilder.com/",
                                        displayLink: "mintbuilder.com",
                                        featured: !1,
                                        caption: "Buy silver and gold with cryptocurrency"
                                    },
                                    Urwerk: {
                                        displayName: "Urwerk",
                                        logo: o(259),
                                        link: "https://www.urwerk.com/",
                                        displayLink: "www.urwerk.com/",
                                        featured: !1,
                                        caption: "Buy custom watches with cryptocurrency"
                                    },
                                    INVERDIAMOND: {
                                        displayName: "INVERDIAMOND",
                                        logo: o(117),
                                        link: "https://inverdiamond.com/",
                                        displayLink: "inverdiamond.com",
                                        featured: !0,
                                        caption: "Buy diamonds at wholesale price with cryptocurrency"
                                    },
                                    Idoneus: {
                                        displayName: "Idoneus",
                                        logo: o(183),
                                        link: "https://portfolio.idoneus.io",
                                        displayLink: "portfolio.idoneus.io",
                                        featured: !1,
                                        caption: "Buy jewelry with cryptocurrency"
                                    },
                                    Royani: {
                                        displayName: "Royani",
                                        logo: o(260),
                                        link: "https://royani.co.uk",
                                        displayLink: "royani.co.uk",
                                        featured: !1,
                                        caption: "Buy jewelry with cryptocurrency"
                                    },
                                    APMEX: {
                                        displayName: "APMEX",
                                        logo: o(261),
                                        link: "https://www.apmex.com/",
                                        displayLink: "apmex.com",
                                        featured: !0,
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    "Sharps Pixley": {
                                        displayName: "Sharps Pixley",
                                        logo: o(262),
                                        link: "https://www.sharpspixley.com/",
                                        displayLink: "sharpspixley.com",
                                        featured: !0,
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    "Provident Metals": {
                                        displayName: "Provident Metals",
                                        logo: o(263),
                                        link: "https://www.providentmetals.com/",
                                        displayLink: "providentmetals.com",
                                        featured: !0,
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    "Birks Group": {
                                        displayName: "Birks Group",
                                        logo: o(264),
                                        link: "https://www.maisonbirks.com/",
                                        displayLink: "maisonbirks.com",
                                        caption: "Buy diamonds & fine jewelry with cryptocurrency"
                                    },
                                    "JM Bullion": {
                                        displayName: "JM Bullion",
                                        logo: o(265),
                                        link: "https://www.jmbullion.com/",
                                        displayLink: "jmbullion.com",
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    "Ace Jewelers": {
                                        displayName: "Ace Jewelers",
                                        logo: o(114),
                                        link: "https://www.acejewelers.com/",
                                        displayLink: "acejewelers.com",
                                        caption: "Buy watches and jewelry online with cryptocurrency"
                                    },
                                    "Stephen Silver": {
                                        displayName: "Stephen Silver",
                                        logo: o(266),
                                        link: "https://shsilver.com/",
                                        displayLink: "shsilver.com",
                                        caption: "Buy fine jewelry with cryptocurrency"
                                    },
                                    Moro: {
                                        displayName: "Moro",
                                        logo: o(267),
                                        link: "https://www.moro.si/morobitcoin/",
                                        displayLink: "moro.si",
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    "One Gold": {
                                        displayName: "One Gold",
                                        logo: o(268),
                                        link: "https://www.onegold.com/",
                                        displayLink: "onegold.com",
                                        caption: "Buy precious metals online with cryptocurrency"
                                    },
                                    Icebox: {
                                        displayName: "Icebox Jewelry",
                                        logo: o(269),
                                        link: "https://www.icebox.com/",
                                        displayLink: "icebox.com",
                                        caption: "Buy fine jewelry with cryptocurrency"
                                    },
                                    Mene: {
                                        displayName: "Mene",
                                        logo: o(270),
                                        link: "https://mene.com/",
                                        displayLink: "mene.com",
                                        caption: "Buy gold & platinum investment jewelry with cryptocurrency"
                                    },
                                    "Jewelry Affairs": {
                                        displayName: "Jewelry Affairs",
                                        logo: o(271),
                                        link: "https://www.jewelryaffairs.com/",
                                        displayLink: "jewelryaffairs.com",
                                        caption: "Buy jewelry with cryptocurrency"
                                    },
                                    Bitgild: {
                                        displayName: "Bitgild",
                                        logo: o(272),
                                        link: "https://www.bitgild.com/",
                                        displayLink: "bitgild.com",
                                        caption: "Buy gold and silver with cryptocurrency"
                                    }
                                }
                            },
                            entertainmentGaming: {
                                displayName: "Entertainment & Gaming",
                                emoji: "👾",
                                route: "entertainment-gaming",
                                metaTitle: "Buy Games & Entertainment with Cryptocurrency",
                                metaDescription: "Buy games, TV, and more using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    Microsoft: {
                                        displayName: "Microsoft",
                                        logo: o(273),
                                        link: "https://support.microsoft.com/en-us/help/13942/microsoft-account-how-to-use-bitcoin-to-add-money-to-your-account/",
                                        displayLink: "account.microsoft.com",
                                        featured: !0,
                                        caption: "Buy games, movies, & apps with cryptocurrency"
                                    },
                                    "Imperia Online": {
                                        displayName: "Imperia Online",
                                        logo: o(274),
                                        link: "https://a.imperiaonline.org/iosrct/affiliate/iosrcn/bitpaygames/",
                                        displayLink: "imperiaonline.org",
                                        featured: !1,
                                        caption: "Join millions of players online in this ultimate medieval strategy game."
                                    },
                                    Unikrn: {
                                        displayName: "Unikrn",
                                        logo: o(275),
                                        link: "https://unikrn.com/",
                                        displayLink: "unikrn.com",
                                        featured: !1,
                                        caption: "Esports betting with cryptocurrency"
                                    },
                                    Twitch: {
                                        displayName: "Twitch",
                                        logo: o(178),
                                        link: "https://www.twitch.tv/bits",
                                        displayLink: "twitch.tv",
                                        featured: !0,
                                        caption: "Use cryptocurrency on Twitch.tv through Xsolla"
                                    },
                                    "Dish TV": {
                                        displayName: "Dish TV",
                                        logo: o(276),
                                        link: "https://www.dish.com/",
                                        displayLink: "dish.com",
                                        featured: !0,
                                        caption: "Pay for movies, events, & subscriptions with cryptocurrency"
                                    },
                                    "Blocklete Games": {
                                        displayName: "Blocklete Games",
                                        logo: o(115),
                                        link: "https://blockletegames.com/playtoearn",
                                        displayLink: "blockletegames.com/playtoearn",
                                        featured: !0,
                                        caption: "Buy a virtual golfer with cryptocurrency"
                                    },
                                    "Sacramento Kings": {
                                        displayName: "Sacramento Kings",
                                        logo: o(277),
                                        link: "https://www.nba.com/kings/news/sacramento-kings-become-first-professional-sports-team-accept-virtual-currency-bitcoin",
                                        displayLink: "nba.com/kings",
                                        caption: "Purchase Kings tickets with cryptocurrency"
                                    },
                                    "Chess.com": {
                                        displayName: "Chess.com",
                                        logo: o(278),
                                        link: "https://www.chess.com/",
                                        displayLink: "chess.com",
                                        caption: "Buy a yearly membership with cryptocurrency"
                                    },
                                    Gamesplanet: {
                                        displayName: "Gamesplanet",
                                        logo: o(279),
                                        link: "https://gamesplanet.com/",
                                        displayLink: "gamesplanet.com",
                                        caption: "Buy games & digital codes with cryptocurrency"
                                    },
                                    Playasia: {
                                        displayName: "Playasia",
                                        logo: o(280),
                                        link: "https://www.play-asia.com/",
                                        displayLink: "play-asia.com",
                                        caption: "Buy games, digital codes, & more with cryptocurrency"
                                    },
                                    "Dallas Mavericks": {
                                        displayName: "Dallas Mavericks",
                                        logo: o(281),
                                        link: "https://dallasmavs.shop/",
                                        displayLink: "mavs.com",
                                        featured: !0,
                                        caption: "Buy Mavs tickets and gear with cryptocurrency"
                                    },
                                    "Blankos Block Party": {
                                        displayName: "Blankos Block Party",
                                        logo: o(179),
                                        link: "https://blankos.com/",
                                        displayLink: "blankos.com",
                                        caption: "Play games & more with cryptocurrency"
                                    }
                                }
                            },
                            travel: {
                                displayName: "Travel",
                                emoji: "✈️️",
                                route: "travel",
                                metaTitle: "Pay for Flights and Hotels with Cryptocurrency",
                                metaDescription: "Pay for flights, hotels, and other travel needs using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    airBaltic: {
                                        displayName: "airBaltic",
                                        logo: o(282),
                                        link: "https://www.airbaltic.com/",
                                        displayLink: "airbaltic.com",
                                        featured: !0,
                                        caption: "Find and book cheap flights with cryptocurrency"
                                    },
                                    Idoneus: {
                                        displayName: "Idoneus",
                                        logo: o(183),
                                        link: "https://portfolio.idoneus.io",
                                        displayLink: "portfolio.idoneus.io",
                                        featured: !1,
                                        caption: "Discounted rates to purchase assets, goods and services with cryptocurrency"
                                    },
                                    "Crypto Cruise Deals": {
                                        displayName: "Crypto Cruise Deals",
                                        logo: o(283),
                                        link: "https://www.cryptocruisedeals.com/",
                                        displayLink: "cryptocruisedeals.com",
                                        featured: !0,
                                        caption: "Find and book cruises with cryptocurrency"
                                    },
                                    Qeeq: {
                                        displayName: "Qeeq",
                                        logo: o(284),
                                        link: "https://www.qeeq.com/",
                                        displayLink: "qeeq.com",
                                        featured: !1,
                                        caption: "Find and book cars with cryptocurrency"
                                    },
                                    Cryptoturismo: {
                                        displayName: "Cryptoturismo",
                                        logo: o(285),
                                        link: "https://cryptoturismo.com",
                                        displayLink: "cryptoturismo.com",
                                        featured: !1,
                                        caption: "Find and book cheap flights with cryptocurrency"
                                    },
                                    "The Yacht Break": {
                                        displayName: "The Yacht Break",
                                        logo: o(286),
                                        link: "https://theyachtbreak.com/",
                                        displayLink: "theyachtbreak.com",
                                        featured: !1,
                                        caption: "Book your yacht charter with cryptocurrency"
                                    },
                                    PrivateFly: {
                                        displayName: "PrivateFly",
                                        logo: o(287),
                                        link: "https://www.privatefly.com/",
                                        displayLink: "privatefly.com",
                                        featured: !0,
                                        caption: "Book private jets with cryptocurrency"
                                    },
                                    Venicejets: {
                                        displayName: "Venicejets",
                                        logo: o(288),
                                        link: "https://www.venicejets.com/",
                                        displayLink: "venicejets.com",
                                        featured: !1,
                                        caption: "Book private jets with cryptocurrency"
                                    },
                                    FastPrivateJet: {
                                        displayName: "Fast Private Jet",
                                        logo: o(289),
                                        link: "https://www.fastprivatejet.com/",
                                        displayLink: "fastprivatejet.com",
                                        featured: !0,
                                        caption: "Book private jets with cryptocurrency"
                                    },
                                    JetFinder: {
                                        displayName: "JetFinder",
                                        logo: o(290),
                                        link: "https://www.jetfinder.com/",
                                        displayLink: "jetfinder.com",
                                        featured: !1,
                                        caption: "Book private jets with cryptocurrency"
                                    },
                                    "Flight Centre": {
                                        displayName: "Flight Centre",
                                        logo: o(291),
                                        link: "https://www.flightcentre.com/",
                                        displayLink: "flightcentre.com",
                                        featured: !0,
                                        caption: "Book vacation packages & travel deals with cryptocurrency"
                                    },
                                    "EOM Travel": {
                                        displayName: "EOM Travel",
                                        logo: o(292),
                                        link: "https://eomtravel.com/",
                                        displayLink: "eomtravel.com",
                                        featured: !0,
                                        caption: "Buy expert travel services with cryptocurrency"
                                    },
                                    "The D Hotel": {
                                        displayName: "The D Hotel",
                                        logo: o(293),
                                        link: "https://www.thed.com/",
                                        displayLink: "thed.com",
                                        caption: "Buy a stay at the D Hotel in Las Vegas with cryptocurrency"
                                    },
                                    "Monarch Air": {
                                        displayName: "Monarch Air",
                                        logo: o(294),
                                        link: "https://www.monarchair.com/",
                                        displayLink: "monarchair.com",
                                        caption: "Charter private flights with cryptocurrency"
                                    },
                                    Lodgis: {
                                        displayName: "Lodgis",
                                        logo: o(295),
                                        link: "https://www.lodgis.com/",
                                        displayLink: "logis.com",
                                        caption: "Rent or buy apartments in Paris with cryptocurrency"
                                    }
                                }
                            },
                            softwareWeb: {
                                displayName: "Software & Web Services",
                                emoji: "🧩",
                                route: "software-web",
                                metaTitle: "Buy Software and Web Services with Cryptocurrency",
                                metaDescription: "Purchase web hosting, domains, VPS and VPNs, and computer software using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    "Plug & Paid": {
                                        displayName: "Plug & Paid",
                                        logo: o(296),
                                        link: "https://www.plugnpaid.com",
                                        displayLink: "plugnpaid.com",
                                        featured: !1,
                                        caption: "An eCommerce toolbox for online businesses"
                                    },
                                    Cryptohopper: {
                                        displayName: "Cryptohopper",
                                        logo: "https://bitpay.com/img/merchant-logos/cryptohopper_avatar.png",
                                        link: "https://www.cryptohopper.com/",
                                        displayLink: "cryptohopper.com",
                                        featured: !1,
                                        caption: "Automated crypto trading"
                                    },
                                    Thexyz: {
                                        displayName: "Thexyz",
                                        logo: o(297),
                                        link: "https://www.thexyz.com/",
                                        displayLink: "thexyz.com",
                                        featured: !1,
                                        caption: "Add-free & private email for business"
                                    },
                                    Namecheap: {
                                        displayName: "Namecheap",
                                        logo: o(298),
                                        link: "https://www.namecheap.com/",
                                        displayLink: "namecheap.com",
                                        featured: !0,
                                        caption: "Buy domain names & pay bills with cryptocurrency"
                                    },
                                    HOSTKEY: {
                                        displayName: "HOSTKEY",
                                        logo: o(180),
                                        link: "https://www.hostkey.com/",
                                        displayLink: "hostkey.com",
                                        featured: !0,
                                        caption: "Buy VPS, VDS, hosting, and dedicated servers with cryptocurrency"
                                    },
                                    Vultr: {
                                        displayName: "Vultr",
                                        logo: o(299),
                                        link: "https://www.vultr.com/",
                                        displayLink: "vultr.com",
                                        caption: "Pay your cloud hosting bill with cryptocurrency"
                                    },
                                    PIA: {
                                        displayName: "Private Internet Access",
                                        logo: o(300),
                                        link: "https://www.privateinternetaccess.com/",
                                        displayLink: "privateinternetaccess.com",
                                        featured: !0,
                                        caption: "Buy a VPN with cryptocurrency"
                                    },
                                    ExpressVPN: {
                                        displayName: "ExpressVPN",
                                        logo: o(113),
                                        link: "https://www.expressvpn.com",
                                        displayLink: "expressvpn.com",
                                        featured: !0,
                                        caption: "Buy a VPN with cryptocurrency"
                                    },
                                    TradingView: {
                                        displayName: "TradingView",
                                        logo: o(301),
                                        link: "https://www.tradingview.com",
                                        displayLink: "tradingview.com",
                                        caption: "Load your trading account with cryptocurrency"
                                    },
                                    Mailbird: {
                                        displayName: "Mailbird",
                                        logo: o(302),
                                        link: "https://www.getmailbird.com/",
                                        displayLink: "getmailbird.com",
                                        caption: "Buy a desktop email client with cryptocurrency"
                                    },
                                    AlphaPoint: {
                                        displayName: "AlphaPoint",
                                        logo: o(303),
                                        link: "https://alphapoint.com/",
                                        displayLink: "alphapoint.com",
                                        caption: "Pay for security tokens and digital asset services with cryptocurrency"
                                    },
                                    Sync: {
                                        displayName: "Sync",
                                        logo: o(304),
                                        link: "https://www.sync.com/",
                                        displayLink: "sync.com",
                                        caption: "Buy secure cloud storage with cryptocurrency"
                                    },
                                    Gandi: {
                                        displayName: "Gandi",
                                        logo: o(305),
                                        link: "https://www.gandi.net/",
                                        displayLink: "gandi.net",
                                        caption: "Buy domain names, web hosting, & SSL certificates with cryptocurrency"
                                    },
                                    Nexusguard: {
                                        displayName: "Nexusguard",
                                        logo: o(306),
                                        link: "https://www.nexusguard.com/",
                                        displayLink: "nexusguard.com",
                                        caption: "Purchase DDoS protection with cryptocurrency"
                                    },
                                    "CyberGhost VPN": {
                                        displayName: "CyberGhost VPN",
                                        logo: o(307),
                                        link: "https://www.cyberghostvpn.com",
                                        displayLink: "cyberghostvpn.com",
                                        caption: "Buy a VPN with cryptocurrency"
                                    },
                                    FrootVPN: {
                                        displayName: "FrootVPN",
                                        logo: o(308),
                                        link: "https://frootvpn.com/",
                                        displayLink: "frootvpn.com",
                                        caption: "Buy a VPN with cryptocurrency"
                                    },
                                    Dellmont: {
                                        displayName: "Dellmont",
                                        logo: o(309),
                                        link: "https://www.dellmont.com/",
                                        displayLink: "dellmont.com",
                                        caption: "Buy multimedia solutions with cryptocurrency"
                                    }
                                }
                            },
                            apparelHealth: {
                                displayName: "Fashion, Apparel, & Lifestyle",
                                emoji: "🛍️",
                                route: "apparel-health",
                                metaTitle: "Buy Clothes and Cosmetics With Cryptocurrency",
                                metaDescription: "Buy apparel and health products using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    Beliani: {
                                        displayName: "Beliani",
                                        logo: o(310),
                                        link: "https://www.beliani.com/",
                                        displayLink: "beliani.com",
                                        featured: !0,
                                        caption: "Buy home furnishings with cryptocurrency"
                                    },
                                    "McCarthy Uniforms": {
                                        displayName: "McCarthy Uniforms",
                                        logo: o(311),
                                        link: "https://mccarthyuniforms.ca",
                                        displayLink: "mccarthyuniforms.ca",
                                        featured: !1,
                                        caption: "Empowering for school uniforms with cryptocurrency"
                                    },
                                    "Greenbelt Outdoors": {
                                        displayName: "Greenbelt Outdoors",
                                        logo: o(312),
                                        link: "http://greenbeltoutdoors.com/",
                                        displayLink: "greenbeltoutdoors.com",
                                        featured: !1,
                                        caption: "Buy outdoor gear with cryptocurrency"
                                    },
                                    IFLW: {
                                        displayName: "IFLW",
                                        logo: o(313),
                                        link: "https://www.iflwatches.com/",
                                        displayLink: "iflwatches.com",
                                        featured: !1,
                                        caption: "Buy hand-made watches online with cryptocurrency"
                                    },
                                    Lush: {
                                        displayName: "Lush",
                                        logo: o(314),
                                        link: "https://uk.lush.com/",
                                        displayLink: "uk.lush.com",
                                        featured: !0,
                                        caption: "Buy fresh handmade cosmetics with cryptocurrency"
                                    },
                                    Lanieri: {
                                        displayName: "Lanieri",
                                        logo: o(315),
                                        link: "https://www.lanieri.com/",
                                        displayLink: "lanieri.com",
                                        featured: !0,
                                        caption: "Buy Italian custom clothing with cryptocurrency"
                                    },
                                    Eyerim: {
                                        displayName: "Eyerim",
                                        logo: o(316),
                                        link: "https://www.eyerim.com/",
                                        displayLink: "eyerim.com",
                                        caption: "Buy designer glasses online with cryptocurrency"
                                    },
                                    "Bolster Sleep Company": {
                                        displayName: "Bolster Sleep Company",
                                        logo: o(317),
                                        link: "https://bolstersleep.com/",
                                        displayLink: "bolstersleep.com",
                                        featured: !0,
                                        caption: "Buy luxury mattresses online with cryptocurrency"
                                    },
                                    "ATHEIST Shoes": {
                                        displayName: "ATHEIST Shoes",
                                        logo: o(118),
                                        link: "https://atheist.shoes/",
                                        displayLink: "atheist.shoes",
                                        caption: "Buy handmade shoes with cryptocurrency"
                                    }
                                }
                            },
                            foodDrink: {
                                displayName: "Food & Drink",
                                emoji: "🍔",
                                route: "food-drink",
                                metaTitle: "Buy Food and Drink With Cryptocurrency",
                                metaDescription: "Buy food, takeout, and beverages using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    "Menufy ": {
                                        displayName: "Menufy",
                                        logo: o(318),
                                        link: "https://www.menufy.com/",
                                        displayLink: "menufy.com",
                                        featured: !0,
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    },
                                    "BTC Wine": {
                                        displayName: "BTC Wine",
                                        logo: o(181),
                                        link: "https://www.btc-wine.com/",
                                        displayLink: "btc-wine.com",
                                        featured: !0,
                                        caption: "Pay for wine with cryptocurrency"
                                    },
                                    "Safari Tulum": {
                                        displayName: "Safari Tulum",
                                        logo: o(319),
                                        link: "https://www.safariculinary.com/",
                                        displayLink: "safariculinary.com",
                                        featured: !1,
                                        caption: "Pay for tacos and more with cryptocurrency"
                                    },
                                    "Takeaway Netherlands ": {
                                        displayName: "Thuisbezorgd - Netherlands",
                                        logo: o(320),
                                        link: "https://www.thuisbezorgd.nl/",
                                        displayLink: "lieferando.de",
                                        featured: !0,
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    },
                                    "Takeaway Switzerland ": {
                                        displayName: "Takeaway - Switzerland",
                                        logo: o(321),
                                        link: "https://www.lieferando.de/",
                                        displayLink: "lieferando.de",
                                        featured: !0,
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    },
                                    "Takeaway Belgium ": {
                                        displayName: "Takeaway - Belgium",
                                        logo: o(322),
                                        link: "https://www.takeaway.com/be",
                                        displayLink: "takeaway.com",
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    },
                                    "Takeaway Austria ": {
                                        displayName: "Lieferando - Austria",
                                        logo: o(323),
                                        link: "https://www.lieferando.at/",
                                        displayLink: "lieferando.at",
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    },
                                    "Takeaway Poland ": {
                                        displayName: "Pyszne - Poland",
                                        logo: o(324),
                                        link: "https://www.pyszne.pl/",
                                        displayLink: "pyszne.pl",
                                        featured: !1,
                                        caption: "Pay for meal delivery with cryptocurrency"
                                    }
                                }
                            },
                            nonprofits: {
                                displayName: "Charity & Nonprofits",
                                emoji: "🎗️",
                                route: "nonprofits",
                                metaTitle: "Donate to Charity with Cryptocurrency",
                                metaDescription: "Donate to charitable causes and non-profit organizations using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    "America Scores": {
                                        displayName: "America Scores",
                                        logo: o(325),
                                        link: "https://donatedigital.americascoresbayarea.org/",
                                        displayLink: "donatedigital.americascoresbayarea.org",
                                        featured: !1,
                                        caption: "Empowering Poet Athletes with cryptocurrency"
                                    },
                                    "CARE USA": {
                                        displayName: "CARE USA",
                                        logo: o(326),
                                        link: "https://care.org/get-involved/ways-to-give/cryptocurrency/",
                                        displayLink: "care.org/get-involved/ways-to-give/cryptocurrency/",
                                        featured: !0,
                                        caption: "Join the fight against global poverty"
                                    },
                                    "Room to Read": {
                                        displayName: "Room to Read",
                                        logo: o(327),
                                        link: "https://www.roomtoread.org/donate-cryptocurrency/",
                                        displayLink: "roomtoread.org/donate-cryptocurrency/",
                                        featured: !1,
                                        caption: "Invest in children's education with cryptocurrency"
                                    },
                                    "AM Winn Community Guild": {
                                        displayName: "AM Winn Community Guild",
                                        logo: o(328),
                                        link: "https://www.amwwaldorf.org/donation-platforms",
                                        displayLink: "amwwaldorf.org/donation-platforms",
                                        featured: !1,
                                        caption: "Help support education with cryptocurrency"
                                    },
                                    Wikimedia: {
                                        displayName: "Wikimedia",
                                        logo: o(329),
                                        link: "https://donate.wikimedia.org/wiki/Ways_to_Give",
                                        displayLink: "wikimedia.org",
                                        featured: !0,
                                        caption: "Help support free educational content with cryptocurrency"
                                    },
                                    EFF: {
                                        displayName: "Electronic Frontier Foundation",
                                        logo: o(330),
                                        link: "https://www.eff.org/",
                                        displayLink: "eff.org",
                                        featured: !0,
                                        caption: "Help support digital rights with cryptocurrency"
                                    },
                                    "American Red Cross": {
                                        displayName: "American Red Cross",
                                        logo: o(331),
                                        link: "https://bitpay.com/520663/donate",
                                        displayLink: "redcross.org",
                                        featured: !0,
                                        caption: "Help people affected by disasters with cryptocurrency"
                                    },
                                    "American Cancer Society": {
                                        displayName: "American Cancer Society",
                                        logo: o(332),
                                        link: "https://bitpay.com/761513/donate",
                                        displayLink: "cancer.org",
                                        featured: !0,
                                        caption: "Help support cancer research with cryptocurrency"
                                    },
                                    "Crohn's & Colitis Foundation": {
                                        displayName: "Crohn's & Colitis Foundation",
                                        logo: o(333),
                                        link: "https://www.crohnscolitisfoundation.org/donate/donate-cryptocurrency",
                                        displayLink: "crohnscolitisfoundation.org",
                                        caption: "Help find cures for Crohn's disease with cryptocurrency"
                                    },
                                    "Against Malaria Foundation": {
                                        displayName: "Against Malaria Foundation",
                                        logo: o(334),
                                        link: "https://www.againstmalaria.com/",
                                        displayLink: "againstmalaria.com",
                                        caption: "Help combat malaria with cryptocurrency"
                                    },
                                    Thorn: {
                                        displayName: "Thorn",
                                        logo: o(335),
                                        link: "https://www.thorn.org/",
                                        displayLink: "thorn.org",
                                        caption: "Help end child sexual abuse with cryptocurrency"
                                    },
                                    "United Way": {
                                        displayName: "United Way",
                                        logo: o(336),
                                        link: "https://www.unitedway.org/get-involved/ways-to-give/donate-bitcoin#",
                                        displayLink: "unitedway.org",
                                        caption: "Help support the Innovation Fund with cryptocurrency"
                                    },
                                    IJ: {
                                        displayName: "Institute for Justice",
                                        logo: o(337),
                                        link: "https://ij.org/support/other-ways-to-give/donate-with-bitcoin/",
                                        displayLink: "ij.org",
                                        caption: "Help support civil liberties with cryptocurrency"
                                    },
                                    GiveWell: {
                                        displayName: "GiveWell",
                                        logo: o(338),
                                        link: "https://www.givewell.org/",
                                        displayLink: "givewell.org",
                                        caption: "Help support charity assessment & effective altruism with cryptocurrency"
                                    },
                                    ARI: {
                                        displayName: "Ayn Rand Institute",
                                        logo: o(339),
                                        link: "https://ari.aynrand.org/",
                                        displayLink: "ari.aynrand.org",
                                        caption: "Help support free speech with cryptocurrency"
                                    },
                                    "Mises Institute": {
                                        displayName: "Mises Institute",
                                        logo: o(340),
                                        link: "https://mises.org",
                                        displayLink: "mises.org",
                                        caption: "Help support economics research with cryptocurrency"
                                    },
                                    BitGive: {
                                        displayName: "BitGive Foundation",
                                        logo: o(341),
                                        link: "https://www.bitgivefoundation.org/",
                                        displayLink: "bitgivefoundation.org",
                                        caption: "Help improve philanthropic transparency with cryptocurrency"
                                    },
                                    "Sky's the Limit": {
                                        displayName: "Sky's The Limit",
                                        logo: o(342),
                                        link: "https://www.skysthelimit.org/donate-other",
                                        displayLink: "skysthelimit.org",
                                        caption: "Help young adults launch businesses with cryptocurrency"
                                    }
                                }
                            },
                            professionalServices: {
                                displayName: "Professional Services",
                                emoji: "⛑️",
                                route: "professional-services",
                                metaTitle: "Pay Business Bills with Cryptocurrency",
                                metaDescription: "Pay for accounting, legal, print, design, marketing, or other business services using Bitcoin and cryptocurrency.",
                                expired: !1,
                                cards: {
                                    Onfido: {
                                        displayName: "Onfido",
                                        logo: o(177),
                                        link: "https://onfido.com/",
                                        displayLink: "onfido.com",
                                        featured: !0,
                                        caption: "Buy identity verification services with cryptocurrency"
                                    },
                                    "Fan Studio": {
                                        displayName: "Fan Studio",
                                        logo: o(343),
                                        link: "https://www.fanstudio.co.uk/",
                                        displayLink: "fanstudio.co.uk",
                                        featured: !1,
                                        caption: "Have your game developed with cryptocurrency"
                                    },
                                    "Prager Metis": {
                                        displayName: "Prager Metis",
                                        logo: o(344),
                                        link: "https://pragermetis.com/",
                                        displayLink: "pragermetis.com/",
                                        featured: !1,
                                        caption: "Pay for accounting services with cryptocurrency"
                                    },
                                    MovoCash: {
                                        displayName: "MovoCash",
                                        logo: o(345),
                                        link: "https://movo.cash/",
                                        displayLink: "movo.cash/",
                                        featured: !0,
                                        caption: "Load your debit card with cryptocurrency"
                                    },
                                    HackerOne: {
                                        displayName: "HackerOne",
                                        logo: o(346),
                                        link: "https://www.hackerone.com/",
                                        displayLink: "hackerone.com",
                                        featured: !0,
                                        caption: "Buy security testing with cryptocurrency"
                                    },
                                    BitGo: {
                                        displayName: "BitGo",
                                        logo: o(347),
                                        link: "https://www.bitgo.com/",
                                        displayLink: "bitgo.com",
                                        featured: !0,
                                        caption: "Buy digital asset financial services with cryptocurrency"
                                    },
                                    Chainalysis: {
                                        displayName: "Chainalysis",
                                        logo: o(348),
                                        link: "https://www.chainalysis.com/",
                                        displayLink: "chainalysis.com",
                                        featured: !0,
                                        caption: "Buy digital asset fraud prevention with cryptocurrency"
                                    },
                                    Atrium: {
                                        displayName: "Atrium",
                                        logo: o(176),
                                        link: "https://www.atrium.co/",
                                        displayLink: "atrium.co",
                                        caption: "Buy legal services with cryptocurrency"
                                    },
                                    Aprio: {
                                        displayName: "Aprio",
                                        logo: o(349),
                                        link: "https://www.aprio.com/",
                                        displayLink: "aprio.com",
                                        caption: "Buy consulting services with cryptocurrency"
                                    },
                                    BKL: {
                                        displayName: "BKL",
                                        logo: o(350),
                                        link: "https://www.bkl.co.uk/",
                                        displayLink: "bkl.co.uk",
                                        caption: "Pay for accounting services with cryptocurrency"
                                    },
                                    goLance: {
                                        displayName: "goLance",
                                        logo: o(351),
                                        link: "https://golance.com/",
                                        displayLink: "golance.com",
                                        caption: "Hire freelancers online with cryptocurrency"
                                    },
                                    Shipito: {
                                        displayName: "Shipito",
                                        logo: o(352),
                                        link: "https://www.shipito.com/en/",
                                        displayLink: "shipito.com",
                                        caption: "Buy package and mail forwarding with cryptocurrency"
                                    },
                                    RTG: {
                                        displayName: "Real Time Games",
                                        logo: o(353),
                                        link: "https://rtgdev.com/",
                                        displayLink: "rtgdev.com",
                                        caption: "Esports software development studio accepting cryptocurrency"
                                    },
                                    "Green Brick Labs": {
                                        displayName: "Green Brick Labs",
                                        logo: o(354),
                                        link: "https://www.greenbricklabs.com/",
                                        displayLink: "greenbricklabs.com",
                                        caption: "Web experience marketing studio accepting cryptocurrency"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            d = {
                saturateCategory: function(t, e) {
                    t.directory.categories[e.category].cards = e.cards, t.directory.categories[e.category].cardNames = e.cardNames
                },
                changeViewMode: function(t, e) {
                    t.directory.listMode = e
                },
                removeCategory: function(t, e) {
                    t.directory.categories[e.category].expired = e.expired
                }
            },
            m = {
                fetchGiftCards: function(t, e) {
                    return Object(n.a)(regeneratorRuntime.mark((function o() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (n = t.commit, r = t.state, (e || 0 !== r.directory.categories.giftCards.cardNames.length) && !/^\/directory\/gift-cards\/?$/.test(e)) {
                                        o.next = 4;
                                        break
                                    }
                                    return o.next = 4, c.a.get("https://bitpay.com/gift-cards/cards").then((function(t) {
                                        var data = t.data,
                                            e = {},
                                            o = Object.keys(data);
                                        o.forEach((function(t) {
                                            if ("fixed" === data[t][0].type) {
                                                var o = [];
                                                data[t].forEach((function(t) {
                                                    o.push(t.amount)
                                                })), e[t] = data[t][0], e[t].amounts = o.sort((function(a, b) {
                                                    return a - b
                                                }))
                                            } else e[t] = data[t][0]
                                        })), n("saturateCategory", {
                                            category: "giftCards",
                                            cards: e,
                                            cardNames: o
                                        })
                                    })).catch((function(t) {
                                        return console.log(t)
                                    }));
                                case 4:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })))()
                },
                expireHolidayCategories: function(t) {
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var o, n, r, c, l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.commit, o = new Date, n = new Date("2020-11-24T05:00:00.000Z"), r = new Date("2020-11-29T16:59:59.000Z"), c = new Date("2020-11-29T17:00:00.000Z"), l = new Date("2020-12-01T04:59:59.000Z"), o > n && o < r && {
                                        category: "blackFridayPromos",
                                        expired: !1
                                    }, o > c && o < l && {
                                        category: "cyberMondayPromos",
                                        expired: !1
                                    };
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                toggleListMode: function(t) {
                    var e = t.commit;
                    t.state;
                    e("changeViewMode", !0)
                },
                toggleCardMode: function(t) {
                    var e = t.commit;
                    t.state;
                    e("changeViewMode", !1)
                }
            }
    }, , , , , , , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/stax-deal.1c962b2.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/ballet-avatar.68e894c.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/scan-computers-avatar.1d21294.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Mi4xMiIgaGVpZ2h0PSI0MS40MyIgdmlld0JveD0iMCAwIDQyLjEyIDQxLjQzIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNDFjMzYzO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMS42MykiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzAuNDksMzguMTlIMTUuNjNsLTEuNTgsNC44N0gzMi4wN1oiLz48cGF0aCBkPSJNMjQuMzIsMS42M2g3LjEzbDEyLjY3LDM5SDM2Ljk5WiIvPjxwYXRoIGQ9Ik0yMS44LDEuNjNIMTQuNjdMMiw0MC42M0g5LjEzWiIvPjwvZz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/mackabler-kopier.57cae58.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/adafruit-avatar.22e5724.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/the-pi-hut-avatar.f4b6595.jpeg"
    }, function(t, e, o) {
        t.exports = o.p + "img/keepkey-avatar.d996d67.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/webhallen-avatar.eb78ef7.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/overclockers-avatar.ea159a5.jpg"
    }, function(t, e, o) {
        t.exports = o.p + "img/mintbuilder.9d70b3d.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/urwerk.e409184.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/royani-avatar.6dc9b35.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/apmex-avatar.aed4982.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/sharps-pixley-avatar.6709b11.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/provident-metals-avatar.c1e7c90.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/birks-group-avatar.42d4126.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/jm-bullion-avatar.5f4a47f.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/sh-silver-avatar.79dbd18.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/moro-avatar.5a6c301.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OS4yMSIgaGVpZ2h0PSI3MC41OSIgdmlld0JveD0iMCAwIDk5LjIxIDcwLjU5Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMDA3M2ZiO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQuNDEgLTQ2LjI0KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI1Mi4wMSIgaGVpZ2h0PSI4LjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NC44NSAxMDguMTYpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI4Ny4xIiBoZWlnaHQ9IjExLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0LjQxIDkxLjg3KSIvPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iNzguNjIiIGhlaWdodD0iNS45NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUgODEuNTMpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI3OS42NiIgaGVpZ2h0PSIxMC40MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuODIgNjUuMzgpIi8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI0MS4xIiBoZWlnaHQ9IjExLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyLjU3IDQ2LjI0KSIvPjwvZz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/icebox-avatar.5e21175.png"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MSIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDkxIDIyIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZDE5ZjRlO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTE2LDRoMlYyMkgxNlY4TDEwLDE5SDhMMiw4VjIySDBWNEgyTDksMTdaTTI3LDIyVjRINDJWNkgyOXY2SDQxdjJIMjl2Nkg0MnYyWm0zOC0zVjRoMlYyMkg2NS4yTDUzLDdWMjJINTFWNGgyWm0xMSwzVjRIOTFWNkg3OHY2SDkwdjJINzh2Nkg5MXYyWk03NiwwSDkxVjFINzZaIi8+PC9zdmc+"
    }, function(t, e, o) {
        t.exports = o.p + "img/jewelry-affairs-avatar.7470a30.jpg"
    }, function(t, e, o) {
        t.exports = o.p + "img/bitgild-avatar.b96fcd9.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/microsoft-avatar.8307ca4.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/imperia.82ac655.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/unikrn_avatar.b05c0b8.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/dish-tv-avatar.ab9f1b6.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/sacramento-kings-avatar.523eca0.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/chess-com-avatar.c0bfdde.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/gamesplanet-avatar.63bc1dc.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/playasia-avatar.26b2965.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/dallas-mavericks-avatar.50aec49.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/airbaltic-avatar.193a90e.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/crypto-cruise-avatar.cc35894.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/qeeq.06d6422.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/cryptotourism.0309ae8.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/yachtbreak-avatar.98069cc.png"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAyLjM5OSIgaGVpZ2h0PSIyMDkuNSIgdmlld0JveD0iMCAwIDMwMi4zOTkgMjA5LjUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOnVybCgjYSk7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzQ2MzQ0ZSIvPjxzdG9wIG9mZnNldD0iMC4wOSIgc3RvcC1jb2xvcj0iIzVjMmU0NiIvPjxzdG9wIG9mZnNldD0iMC4zMDciIHN0b3AtY29sb3I9IiM4YzIwMzQiLz48c3RvcCBvZmZzZXQ9IjAuNTEzIiBzdG9wLWNvbG9yPSIjYjIxNDI2Ii8+PHN0b3Agb2Zmc2V0PSIwLjcwMyIgc3RvcC1jb2xvcj0iI2NkMGQxYiIvPjxzdG9wIG9mZnNldD0iMC44NzIiIHN0b3AtY29sb3I9IiNkZDA4MTUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMzA2MTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTM3OS4xLDYxLjEsMzY5LDc4LjVIMjg4LjNMMjYzLDEyMi4yaDkzLjNjLjIsMCwyMy41LjksNDIuMy05LjgsMTUuNy04LjksMjQtMjIuOCwyNy4yLTI4LC41LS44LDIwLjktMzUuOCwzOC44LTY3aC0xNDFsLTIwLjQuMUwzMTMuNCwwSDQ5NC44Yy0yLjMsNC01My42LDkyLjktNTQsOTMuNC0zLjgsNi4zLTEzLjksMjMuMS0zMy41LDM0LjJzLTQyLDEyLjEtNDkuMywxMi4xYy0xLjEsMC0xMDUuMS0uMS0xMDUuMS0uMWwtNDAuNCw2OS45SDE5Mi40TDI3OC4xLDYxaDEwMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTIuNCkiLz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/venicejets-avatar.45e8621.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/fastprivatejet-avatar.070921c.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/jetfinder-avatar.e7ea14e.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/flight-centre-avatar.d15d74f.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/eom-travel-avatar.c19e960.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/the-d-hotel-avatar.86974ee.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/Monarchair-avatar.ed864e0.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/lodgis-avatar.9e3fc4b.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/plug-n-paid.83f02be.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/round-icon-thexyz.4eceb9c.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/namecheap-avatar.209c3b4.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3lnbmV0X19vbi13aGl0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDIgMzYuMDkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYzlmNGZmO30uY2xzLTJ7ZmlsbDojNTFiOWZmO30uY2xzLTN7ZmlsbDojMDA3YmZjO308L3N0eWxlPjwvZGVmcz48dGl0bGU+c3lnbmV0X19vbi13aGl0ZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQuNjMsNGEyLjA5LDIuMDksMCwwLDAtMS43Ny0xSDIuMUEyLjEsMi4xLDAsMCwwLDAsNS4xLDIuMTIsMi4xMiwwLDAsMCwuMzIsNi4yMmwyLjc3LDQuMDcsMTMuODUtM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTcsNy4zN2EyLjExLDIuMTEsMCwwLDAtMS43OC0xSDQuNUEyLjA5LDIuMDksMCwwLDAsMi42Niw5LjYxbDMuMDksNC45LDE0LjMxLTIuMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTUuNjIsMTQuMzFhMi4xNCwyLjE0LDAsMCwxLS4xOS0xLjg4LDIuMTEsMi4xMSwwLDAsMSwyLTEuMzRIMTguMTVhMi4xLDIuMSwwLDAsMSwxLjc4LDFsOS42MywxNS4yN2EyLjEyLDIuMTIsMCwwLDEsLjMyLDEuMTIsMi4xNSwyLjE1LDAsMCwxLS4zMiwxLjEybC01LjM4LDguNTNhMi4xMSwyLjExLDAsMCwxLTMuNTYsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMpIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzIuNzQsMTkuMTlhMi4xMSwyLjExLDAsMCwwLDMuNTYsMGwxLjg1LTIuOTMsMy41My01LjZBMi4xMiwyLjEyLDAsMCwwLDQyLDkuNTRhMi4xNSwyLjE1LDAsMCwwLS4zMi0xLjEyTDM4Ljg4LDRBMi4xMSwyLjExLDAsMCwwLDM3LjEsM0gyNi4zNGEyLjEsMi4xLDAsMCwwLTIuMSwyLjEsMiwyLDAsMCwwLC4zMywxLjEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMykiLz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/pia-avatar.dfcd90d.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMyIgaGVpZ2h0PSIyOSIgdmlld0JveD0iMCAwIDMzIDI5Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMjE5NmYzO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3NDQgLTExODU4KSI+PGVsbGlwc2UgY2xhc3M9ImEiIGN4PSIxNi41IiBjeT0iMTQuNSIgcng9IjE2LjUiIHJ5PSIxNC41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc0NCAxMTg1OCkiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTI5LjAzMiw3LjM4MmE1LjQ3LDUuNDcsMCwwLDEsLjk2MywyLjg3MkE0LjUsNC41LDAsMCwxLDI4LjUsMTlINmE1Ljk4LDUuOTgsMCwwLDEtNC4yMjItMS43MzdsOS41NDYtNy41NTZhMi41MDYsMi41MDYsMCwwLDAsMi4yNDIuMDU1bDQuNTUsMy45ODFhMi41LDIuNSwwLDEsMCw0LjcxMS0uMTU3bDYuMi02LjJaTTI3LjYxOCw1Ljk2OGwtNi4yLDYuMmEyLjUxLDIuNTEsMCwwLDAtMS45OC4wNjZsLTQuNTUtMy45ODFhMi41LDIuNSwwLDEsMC00LjgtLjExOGwtOS40NzUsNy41QTYsNiwwLDAsMSw2LjA2MSw3LDgsOCwwLDAsMSwyMS42ODYsNS43NzNhNS41MDcsNS41MDcsMCwwLDEsNS45MzIuMTk1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NDQuMDAzIDExODYzLjAwNikiLz48L2c+PC9zdmc+"
    }, function(t, e, o) {
        t.exports = o.p + "img/mailbird-avatar.e82ac30.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/Alphapoint-avatar.489c1a4.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/sync-avatar.762516c.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/gandi-avatar.820fd05.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MC4yIiBoZWlnaHQ9IjQ5LjkiIHZpZXdCb3g9IjAgMCA1MC4yIDQ5LjkiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNlMTU4Mjk7fS5ie2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjggMTMuOCkiPjxlbGxpcHNlIGNsYXNzPSJhIiBjeD0iMjUuMSIgY3k9IjI0Ljk1IiByeD0iMjUuMSIgcnk9IjI0Ljk1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS44IC0xMy44KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDcuNCwxMSw0MC40LjVoNi44bDMuOCw2LDMuOC02aDYuNmwtNywxMC40LDcuMywxMC45SDU0LjlsLTQuMS02LjQtNC4xLDYuNEg0MC4xWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDAuNCwxNy4yLDQ0LjYsMTEsNDAuNCw0LjdaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik02MS40LDE3LjIsNTcuMywxMWw0LjEtNi4zWiIvPjwvZz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/cyberghost-vpn-avatar.adb33d7.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/froot-vpn-avatar.f17f4c7.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/dellmont-avatar.1930870.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/beliani_logo.bc4c568.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/mccarthy-uniforms.c852c49.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/greenbelt_outdoors_logo.22c0a22.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/iflw.981a6d6.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/lush-avatar.47923ed.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/lanieri-avatar.cca34e0.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/eyerim-avatar.6d692fa.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/bolster-sleep-avatar.5c049c6.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/menufy-avatar.0c11028.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/safari-tulum.9c87f77.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/takeaway-netherlands-avatar.834c49a.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/takeaway-switzerland-avatar.92aa980.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/takeaway-belgium-avatar.92aa980.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/takeaway-austria-avatar.e8d96cc.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/takeaway-poland-avatar.fb00db3.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/asba-logo.fb767a0.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/care-avatar.f41749d.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/roomtoread-avatar.590660b.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/amwinn-logo.d877828.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/wikimedia-foundation-avatar.7f71d3c.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/eff-avatar.daf178a.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/red-cross-avatar.fbb30db.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/american-cancer-society-avatar.f1af26e.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/crohns-foundation-avatar.9f6399a.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/against-malaria-foundation-avatar.07bac07.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/thorn-avatar.eaa9d87.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/united-way-avatar.4174770.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/ij-avatar.124a938.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/give-well-avatar.86e53b6.jpg"
    }, function(t, e, o) {
        t.exports = o.p + "img/ari-avatar.b28e120.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/mises-avatar.f4bc2f5.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/bitgive-avatar.ae3ae88.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/skysthelimit-avatar.655fb2f.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/fan-studio.144ad09.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/prager-metis.36c24da.jpg"
    }, function(t, e, o) {
        t.exports = o.p + "img/movocash-avatar.6fca511.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iNDc3LjQyOSIgdmlld0JveD0iMCAwIDI1NiA0NzcuNDI5Ij48cGF0aCBkPSJNOS4xMzIsNS45OEMzLjA3NSw5Ljk2NiwwLDE1LjE3OCwwLDIxLjQ4NnY0MzMuODRjMCw1LjUsMy4xNSwxMC41LDkuNDU3LDE1LjE0cTkuMzk0LDYuOTcxLDIzLjIsNi45NjNhMzkuNzI3LDM5LjcyNywwLDAsMCwyMy4yMzMtNi45NjNjNi42Ny00LjYsMTAuMDYzLTkuNjM3LDEwLjA2My0xNS4xNFYyMS41MjNjMC02LjM0Ni0zLjIzLTExLjQ3Ni05LjczNy0xNS41NDJDNDkuNywyLjAzNCw0MS44NjYsMCwzMi42NTMsMGMtOS42MiwwLTE3LjQ1OSwyLjAzNC0yMy41Miw1Ljk4Wk0xOTguODU2LDE3OC4zbC04OC4zLDU1LjM0NmMtMy45NTYsMy43LTUuNjU3LDkuMzI1LTQuOTI1LDE3LjAxLjY4LDcuNjEsNC4yLDE0Ljg1NiwxMC40MjYsMjEuNjkzLDYuMjU2LDYuODgsMTMuMjUsMTEuMTkzLDIxLjI1MSwxMy4wMjUsNy44ODIsMS43ODcsMTMuODY1LjgxMiwxNy44MjEtMi44NTJsMzQuOTE2LTIxLjc3NnYxOTQuNThjMCw1LjUsMy4wMzIsMTAuNSw5LjE3LDE1LjEzOSw1Ljk4LDQuNjQ3LDEzLjY2Myw2Ljk2MywyMi44NzcsNi45NjNzMTcuMTctMi4zMTYsMjMuODQtNi45NjNjNi43MDYtNC42NCwxMC4wNjQtOS42MzcsMTAuMDY0LTE1LjE0di0yNjEuNmMwLTYuMzUzLTMuMjc3LTExLjQ3Ni05Ljc0LTE1LjQyMy02LjQ2OS00LjAzLTE0LjUwNy01Ljk4OC0yNC4xNjQtNS45ODgtOS42MiwwLTE3LjM0LDEuOTU5LTIzLjI0LDUuOTg4WiIvPjwvc3ZnPg=="
    }, function(t, e, o) {
        t.exports = o.p + "img/bitgo-avatar.77515f6.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/chainalysis-avatar.2971e3f.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/aprio-avatar.7ebede7.jpg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjYuMzcgNTAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmY5YjAwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QktMLUF2YXRhcjwvdGl0bGU+PHBhdGggZD0iTS4zNS45M0gyMi44NmM1LjU0LDAsOS45LDEuNTIsMTIuNjcsNC4yOWExMS4xNSwxMS4xNSwwLDAsMSwzLjMyLDguMjR2LjE0YzAsNS40Ny0yLjkxLDguNTEtNi4zNywxMC40NSw1LjYxLDIuMTUsOS4wNyw1LjQsOS4wNywxMS45MXYuMTRjMCw4Ljg2LTcuMiwxMy4yOS0xOC4xNCwxMy4yOUguMzVaTTI4LjI2LDE1LjI2YzAtMy4xOS0yLjUtNS03LTVIMTFWMjAuNTJoOS41NmM0LjcxLDAsNy42OS0xLjUyLDcuNjktNS4xMlptLTUuMiwxNC4xMkgxMVY0MC4wNWgxMi40YzQuNzEsMCw3LjU1LTEuNjcsNy41NS01LjI3di0uMTNjMC0zLjI2LTIuNDMtNS4yNy03LjktNS4yNyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI4OS43NCAwLjkzIDEwMC40MSAwLjkzIDEwMC40MSAzOS43IDEyNC41NyAzOS43IDEyNC41NyA0OS4zOSA4OS43NCA0OS4zOSA4OS43NCAwLjkzIi8+PHBvbHlnb24gcG9pbnRzPSI3My41OSAwLjkzIDU0Ljg1IDE5LjY3IDU0Ljg1IDAuOTMgNDQuMTkgMC45MyA0NC4xOSA0My4wNiA4Ni4zMiAwLjkzIDczLjU5IDAuOTMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNjYuODcgMjAuMzggNTkuNjMgMjcuNjMgNzUuNDcgNDkuMzkgODguMjcgNDkuMzkgNjYuODcgMjAuMzgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDQuMTkgNDMuMDYgNDQuMTkgNDkuMzkgNTQuODMgNDkuMzkgNTQuODMgMzIuNDIgNDQuMTkgNDMuMDYiLz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/golance-avatar.4ab6cae.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/shipito-avatar.bf71114.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOC4wMDYiIGhlaWdodD0iMTguODEzIiB2aWV3Qm94PSIwIDAgMzguMDA2IDE4LjgxMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZjZWYwMDtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzA3IC01Ni4xODgpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTM0LjU2Miw1Ni4xODhIMjkuODExdjkuNDA2aDQuNzUxdi00LjdoNC43NTF2LTQuN1pNMjkuODExLDc1aDQuNzUxVjcwLjNIMjkuODExWm00Ljc1MS00LjdoNC43NTF2LTQuN0gzNC41NjJaTTIwLjMwOSw1Ni4xODhIMTUuNTU5VjcwLjNoNC43NTF2LTQuN0gyNS4wNnYtNC43SDIwLjMwOVptLTE0LjI1Miw0LjdoNC43NTF2LTQuN0g2LjA1N1ptLTQuNzUxLDBINi4wNTdWNzAuM0gxLjMwNlY2MC44OTFaIi8+PC9nPjwvc3ZnPg=="
    }, function(t, e, o) {
        t.exports = o.p + "img/green-brick-labs-avatar.9fb7c48.svg"
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return r
        })), o.d(e, "mutations", (function() {
            return c
        })), o.d(e, "actions", (function() {
            return l
        }));
        o(42);
        var n = o(11),
            r = function() {
                return {
                    experiments: {
                        version: "bp"
                    }
                }
            },
            c = {
                setExperiment: function(t, e) {
                    t.experiments.version = e.version
                }
            },
            l = {
                fetchExperiment: function(t, e) {
                    return Object(n.a)(regeneratorRuntime.mark((function o() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    n = t.commit, t.state, e || (r = window.sessionStorage.getItem("aE"), n("setExperiment", {
                                        version: r
                                    }));
                                case 2:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })))()
                }
            }
    }]), [
        [195, 50, 9, 51]
    ]
]);