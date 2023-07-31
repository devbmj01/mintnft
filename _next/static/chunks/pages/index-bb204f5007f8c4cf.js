(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        45728: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(21430)
            }])
        },
        41142: function(e, t, i) {
            "use strict";
            var n = i(46304),
                s = i(34155);
            let {
                csrf: r,
                setup: l
            } = (0, n.T)({
                secret: s.env.CSRF_SECRET,
                ignoredMethods: ["GET"]
            })
        },
        21430: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return x
                }
            });
            var n = i(85893),
                s = i(67294),
                r = i(87357),
                l = i(53156),
                a = i(86886),
                o = i(15861),
                h = i(83321),
                p = i(41664),
                c = i.n(p),
                d = {
                    src: "/_next/static/media/ComingSoonBackBg.2f35379f.svg",
                    height: 250,
                    width: 500,
                    blurWidth: 0,
                    blurHeight: 0
                };
            "function" == typeof SuppressedError && SuppressedError;
            let g = (e, t, i, n) => {
                    e.style.transition = `${t} ${i}ms ${n}`
                },
                u = (e, t, i) => Math.min(Math.max(e, t), i);
            class w {
                constructor(e, t) {
                    this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = e => {
                        let {
                            width: t,
                            height: i
                        } = e, n = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2));
                        return {
                            width: n,
                            height: n
                        }
                    }, this.setSize = e => {
                        let t = this.calculateGlareSize(e);
                        this.glareEl.style.width = `${t.width}px`, this.glareEl.style.height = `${t.height}px`
                    }, this.update = (e, t, i, n) => {
                        this.updateAngle(e, t.glareReverse), this.updateOpacity(e, t, i, n)
                    }, this.updateAngle = (e, t) => {
                        let {
                            xPercentage: i,
                            yPercentage: n
                        } = e;
                        this.glareAngle = (i ? Math.atan2(n, -i) * (180 / Math.PI) : 0) - (t ? 180 : 0)
                    }, this.updateOpacity = (e, t, i, n) => {
                        let {
                            xPercentage: s,
                            yPercentage: r
                        } = e, {
                            glarePosition: l,
                            glareReverse: a,
                            glareMaxOpacity: o
                        } = t, h = i ? -1 : 1, p = n ? -1 : 1, c = a ? -1 : 1, d = 0;
                        switch (l) {
                            case "top":
                                d = -s * h * c;
                                break;
                            case "right":
                                d = r * p * c;
                                break;
                            case "bottom":
                            case void 0:
                                d = s * h * c;
                                break;
                            case "left":
                                d = -r * p * c;
                                break;
                            case "all":
                                d = Math.hypot(s, r)
                        }
                        let g = u(d, 0, 100);
                        this.glareOpacity = g * o / 100
                    }, this.render = e => {
                        let {
                            glareColor: t
                        } = e;
                        this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`
                    }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
                    let i = this.calculateGlareSize(e),
                        n = {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transformOrigin: "0% 0%",
                            pointerEvents: "none",
                            width: `${i.width}px`,
                            height: `${i.height}px`
                        };
                    Object.assign(this.glareWrapperEl.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: t,
                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        pointerEvents: "none"
                    }), Object.assign(this.glareEl.style, n)
                }
            }
            class m {
                constructor() {
                    this.glareAngle = 0, this.glareOpacity = 0, this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (e, t) => {
                        this.updateTilt(e, t), this.updateTiltManualInput(e, t), this.updateTiltReverse(t), this.updateTiltLimits(t)
                    }, this.updateTilt = (e, t) => {
                        let {
                            xPercentage: i,
                            yPercentage: n
                        } = e, {
                            tiltMaxAngleX: s,
                            tiltMaxAngleY: r
                        } = t;
                        this.tiltAngleX = i * s / 100, this.tiltAngleY = -(n * r / 100 * 1)
                    }, this.updateTiltManualInput = (e, t) => {
                        let {
                            tiltAngleXManual: i,
                            tiltAngleYManual: n,
                            tiltMaxAngleX: s,
                            tiltMaxAngleY: r
                        } = t;
                        (null !== i || null !== n) && (this.tiltAngleX = null !== i ? i : 0, this.tiltAngleY = null !== n ? n : 0, e.xPercentage = 100 * this.tiltAngleX / s, e.yPercentage = 100 * this.tiltAngleY / r)
                    }, this.updateTiltReverse = e => {
                        let t = e.tiltReverse ? -1 : 1;
                        this.tiltAngleX = t * this.tiltAngleX, this.tiltAngleY = t * this.tiltAngleY
                    }, this.updateTiltLimits = e => {
                        let {
                            tiltAxis: t
                        } = e;
                        this.tiltAngleX = u(this.tiltAngleX, -90, 90), this.tiltAngleY = u(this.tiltAngleY, -90, 90), t && (this.tiltAngleX = "x" === t ? this.tiltAngleX : 0, this.tiltAngleY = "y" === t ? this.tiltAngleY : 0)
                    }, this.updateTiltAnglesPercentage = e => {
                        let {
                            tiltMaxAngleX: t,
                            tiltMaxAngleY: i
                        } = e;
                        this.tiltAngleXPercentage = this.tiltAngleX / t * 100, this.tiltAngleYPercentage = this.tiltAngleY / i * 100
                    }, this.render = e => {
                        e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `
                    }
                }
            }
            let v = Object.assign(Object.assign({
                scale: 1,
                perspective: 1e3,
                flipVertically: !1,
                flipHorizontally: !1,
                reset: !0,
                transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
                transitionSpeed: 400,
                trackOnWindow: !1,
                gyroscope: !1
            }, {
                tiltEnable: !0,
                tiltReverse: !1,
                tiltAngleXInitial: 0,
                tiltAngleYInitial: 0,
                tiltMaxAngleX: 20,
                tiltMaxAngleY: 20,
                tiltAxis: void 0,
                tiltAngleXManual: null,
                tiltAngleYManual: null
            }), {
                glareEnable: !1,
                glareMaxOpacity: .7,
                glareColor: "#ffffff",
                glarePosition: "bottom",
                glareReverse: !1,
                glareBorderRadius: "0"
            });
            class E extends s.PureComponent {
                constructor() {
                    super(...arguments), this.wrapperEl = {
                        node: null,
                        size: {
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        },
                        clientPosition: {
                            x: null,
                            y: null,
                            xPercentage: 0,
                            yPercentage: 0
                        },
                        updateAnimationId: null,
                        scale: 1
                    }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = () => {
                        var e, t, i, n;
                        return e = this, t = void 0, i = void 0, n = function*() {
                            if (!window.DeviceOrientationEvent) return;
                            let e = DeviceOrientationEvent.requestPermission;
                            "function" == typeof e ? "granted" === (yield e()) && window.addEventListener("deviceorientation", this.onMove) : window.addEventListener("deviceorientation", this.onMove)
                        }, new(i || (i = Promise))(function(s, r) {
                            function l(e) {
                                try {
                                    o(n.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function a(e) {
                                try {
                                    o(n.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? s(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                    e(t)
                                })).then(l, a)
                            }
                            o((n = n.apply(e, t || [])).next())
                        })
                    }, this.setSize = () => {
                        this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size)
                    }, this.mainLoop = e => {
                        null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(e), this.update(e.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame)
                    }, this.onEnter = e => {
                        let {
                            onEnter: t
                        } = this.props;
                        this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), t && t(e.type)
                    }, this.onMove = e => {
                        this.mainLoop(e), this.emitOnMove(e)
                    }, this.onLeave = e => {
                        let {
                            onLeave: t
                        } = this.props;
                        if (this.setTransitions(), t && t(e.type), this.props.reset) {
                            let e = new CustomEvent("autoreset");
                            this.onMove(e)
                        }
                    }, this.processInput = e => {
                        let {
                            scale: t
                        } = this.props;
                        switch (e.type) {
                            case "mousemove":
                                this.wrapperEl.clientPosition.x = e.pageX, this.wrapperEl.clientPosition.y = e.pageY, this.wrapperEl.scale = t;
                                break;
                            case "touchmove":
                                this.wrapperEl.clientPosition.x = e.touches[0].pageX, this.wrapperEl.clientPosition.y = e.touches[0].pageY, this.wrapperEl.scale = t;
                                break;
                            case "deviceorientation":
                                this.processInputDeviceOrientation(e), this.wrapperEl.scale = t;
                                break;
                            case "autoreset":
                                let {
                                    tiltAngleXInitial: i,
                                    tiltAngleYInitial: n,
                                    tiltMaxAngleX: s,
                                    tiltMaxAngleY: r
                                } = this.props;
                                this.wrapperEl.clientPosition.xPercentage = u(i / s * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = u(n / r * 100, -100, 100), this.wrapperEl.scale = 1
                        }
                    }, this.processInputDeviceOrientation = e => {
                        if (!e.gamma || !e.beta || !this.props.gyroscope) return;
                        let {
                            tiltMaxAngleX: t,
                            tiltMaxAngleY: i
                        } = this.props, n = e.gamma;
                        this.wrapperEl.clientPosition.xPercentage = e.beta / t * 100, this.wrapperEl.clientPosition.yPercentage = n / i * 100, this.wrapperEl.clientPosition.xPercentage = u(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = u(this.wrapperEl.clientPosition.yPercentage, -100, 100)
                    }, this.update = e => {
                        let {
                            tiltEnable: t,
                            flipVertically: i,
                            flipHorizontally: n
                        } = this.props;
                        "autoreset" !== e && "deviceorientation" !== e && "propChange" !== e && this.updateClientInput(), t && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i, n)
                    }, this.updateClientInput = () => {
                        let e, t;
                        let {
                            trackOnWindow: i
                        } = this.props;
                        if (i) {
                            let {
                                x: i,
                                y: n
                            } = this.wrapperEl.clientPosition;
                            e = n / window.innerHeight * 200 - 100, t = i / window.innerWidth * 200 - 100
                        } else {
                            let {
                                size: {
                                    width: i,
                                    height: n,
                                    left: s,
                                    top: r
                                },
                                clientPosition: {
                                    x: l,
                                    y: a
                                }
                            } = this.wrapperEl;
                            e = (a - r) / n * 200 - 100, t = (l - s) / i * 200 - 100
                        }
                        this.wrapperEl.clientPosition.xPercentage = u(e, -100, 100), this.wrapperEl.clientPosition.yPercentage = u(t, -100, 100)
                    }, this.updateFlip = () => {
                        let {
                            flipVertically: e,
                            flipHorizontally: t
                        } = this.props;
                        e && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), t && (this.tilt.tiltAngleY += 180)
                    }, this.renderFrame = () => {
                        this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props)
                    }
                }
                componentDidMount() {
                    if (this.tilt = new m, this.initGlare(), this.addEventListeners(), "undefined" == typeof CustomEvent) return;
                    let e = new CustomEvent("autoreset");
                    this.mainLoop(e);
                    let t = new CustomEvent("initial");
                    this.emitOnMove(t)
                }
                componentWillUnmount() {
                    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners()
                }
                componentDidUpdate() {
                    let e = new CustomEvent("propChange");
                    this.mainLoop(e), this.emitOnMove(e)
                }
                addEventListeners() {
                    let {
                        trackOnWindow: e,
                        gyroscope: t
                    } = this.props;
                    window.addEventListener("resize", this.setSize), e && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), t && this.addDeviceOrientationEventListener()
                }
                removeEventListeners() {
                    let {
                        trackOnWindow: e,
                        gyroscope: t
                    } = this.props;
                    window.removeEventListener("resize", this.setSize), e && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), t && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove)
                }
                setWrapperElSize() {
                    let e = this.wrapperEl.node.getBoundingClientRect();
                    this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = e.left + window.scrollX, this.wrapperEl.size.top = e.top + window.scrollY
                }
                initGlare() {
                    let {
                        glareEnable: e,
                        glareBorderRadius: t
                    } = this.props;
                    e && (this.glare = new w(this.wrapperEl.size, t), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))
                }
                emitOnMove(e) {
                    let {
                        onMove: t
                    } = this.props;
                    if (!t) return;
                    let i = 0,
                        n = 0;
                    this.glare && (i = this.glare.glareAngle, n = this.glare.glareOpacity), t({
                        tiltAngleX: this.tilt.tiltAngleX,
                        tiltAngleY: this.tilt.tiltAngleY,
                        tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
                        tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
                        glareAngle: i,
                        glareOpacity: n,
                        eventType: e.type
                    })
                }
                resetWrapperElTransform() {
                    this.wrapperEl.node.style.transform = ""
                }
                renderPerspective() {
                    let {
                        perspective: e
                    } = this.props;
                    this.wrapperEl.node.style.transform += `perspective(${e}px) `
                }
                renderScale() {
                    let {
                        scale: e
                    } = this.wrapperEl;
                    this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`
                }
                setTransitions() {
                    let {
                        transitionSpeed: e,
                        transitionEasing: t
                    } = this.props;
                    g(this.wrapperEl.node, "all", e, t), this.glare && g(this.glare.glareEl, "opacity", e, t)
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        style: i
                    } = this.props;
                    return s.createElement("div", {
                        ref: e => this.wrapperEl.node = e,
                        onMouseEnter: this.onEnter,
                        onMouseMove: this.onMove,
                        onMouseLeave: this.onLeave,
                        onTouchStart: this.onEnter,
                        onTouchMove: this.onMove,
                        onTouchEnd: this.onLeave,
                        className: t,
                        style: i
                    }, e)
                }
            }
            E.defaultProps = v;
            let f = () => ((0, s.useRef)(null), (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)(r.Z, {
                    component: "section",
                    sx: {
                        position: "relative",
                        height: {
                            xs: "calc(100vh - 81.4px)",
                            sm: "calc(100vh - 67.9px)",
                            lg: "calc(100vh - 81.4px)"
                        },
                        overflow: "hidden",
                        backgroundColor: "#111111fc",
                        "@media screen and (min-width: 1920px)": {
                            minHeight: "calc(100vh - 82px)"
                        },
                        "& .TiltAnimationWrapper": {
                            flexGrow: 1,
                            transformStyle: "preserve-3d",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            "& *": {
                                transformStyle: "preserve-3d"
                            }
                        }
                    },
                    children: (0, n.jsxs)(E, {
                        className: "track-on-window TiltAnimationWrapper",
                        perspective: 1e4,
                        glareEnable: !1,
                        glarePosition: "all",
                        trackOnWindow: !0,
                        transitionSpeed: 12e3,
                        transitionEasing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
                        children: [(0, n.jsx)(r.Z, {
                            sx: {
                                backgroundImage: "url(".concat(d.src, ")"),
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundAttachment: "scroll",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                overflow: "hidden",
                                top: "-25px",
                                left: "0",
                                right: "0",
                                transform: "scale(1.33)",
                                "@media screen and (max-width: 1400px) and (min-width: 1200px)": {
                                    transform: "scale(1.17)"
                                },
                                "@media screen and (max-width: 1024px)": {
                                    transform: "scale(1.17)"
                                }
                            }
                        }), (0, n.jsx)(l.Z, {
                            children: (0, n.jsx)(a.ZP, {
                                container: !0,
                                spacing: 2,
                                sx: {
                                    justifyContent: "center"
                                },
                                children: (0, n.jsx)(a.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, n.jsxs)(r.Z, {
                                        sx: {
                                            textAlign: "center",
                                            transform: "translateZ(150px) !important",
                                            "& h3": {
                                                color: "#fff",
                                                fontFamily: "'FatFrank', sans-serif",
                                                fontSize: {
                                                    xs: "34px",
                                                    sm: "62px",
                                                    md: "74px",
                                                    lg: "85px"
                                                }
                                            },
                                            "& > a": {
                                                textDecoration: "none",
                                                display: "inline-block",
                                                mt: "40px",
                                                mb: "65px",
                                                "& button": {
                                                    backgroundColor: "#ffffff",
                                                    color: "#000",
                                                    fontFamily: "'FatFrank', sans-serif",
                                                    fontSize: "29px",
                                                    pl: "20px",
                                                    pr: "20px",
                                                    pt: "8px",
                                                    borderRadius: "0",
                                                    "&:hover": {
                                                        color: "#ffffff",
                                                        backgroundColor: "#666666"
                                                    }
                                                }
                                            }
                                        },
                                        children: [(0, n.jsx)(o.Z, {
                                            component: "h3",
                                            children: "COMING SOON"
                                        }), (0, n.jsx)(c(), {
                                            href: "https://shop.typicalfriends.com/",
                                            children: (0, n.jsx)(h.Z, {
                                                children: "SHOP"
                                            })
                                        }), (0, n.jsxs)(r.Z, {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "30px",
                                                "& a": {
                                                    "& svg": {
                                                        color: "#fff",
                                                        width: "50px",
                                                        height: "50px"
                                                    }
                                                }
                                            },
                                            children: [(0, n.jsx)(c(), {
                                                href: "https://discord.com/invite/typicalfriends",
                                                target: "_blank",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-discord",
                                                    viewBox: "0 0 16 16",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                                                    })
                                                })
                                            }), (0, n.jsx)(c(), {
                                                href: "https://twitter.com/_typicalfriends",
                                                target: "_blank",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-twitter",
                                                    viewBox: "0 0 16 16",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                    })
                                                })
                                            }), (0, n.jsx)(c(), {
                                                href: "https://www.instagram.com/typicalfriends_/",
                                                target: "_blank",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-instagram",
                                                    viewBox: "0 0 16 16",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }));

            function x() {
                return (0, s.useEffect)(() => (document.body.style.overflow = "hidden", () => {
                    document.body.style.overflow = "unset"
                }), []), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(f, {})
                })
            }
            i(41142)
        }
    },
    function(e) {
        e.O(0, [886, 304, 774, 888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);