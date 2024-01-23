var meanings = {
    // i think upper case and lower case has different meanings
    M: {
        cmd: "M",
        par: ["x", "y"],
        desc: "Move to",
        format: "M x y",
        explain: "Move the current point to ({x},{y})."
    },
    m: {
        cmd: "m",
        par: ["dx", "dy"],
        desc: "Move to",
        format: "m dx dy",
        explain: "Move the current point by ({dx}, {dy}), to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy})."
    },
    L: {
        cmd: "L",
        par: ["x", "y"],
        desc: "Line to",
        format: "L x y",
        explain: "Draw a _line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}). Then set the current point to ({x},{y})."
    },
    l: {
        cmd: "l",
        par: ["dx", "dy"],
        desc: "Line to",
        format: "l dx dy",
        explain: "Draw a _line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}). Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]+dy})."
    },
    H: {
        cmd: "H",
        par: ["x"],
        desc: "Horizontal line to",
        format: "H x",
        explain: "Draw a _horizontal line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {CURRENT_POS[1]}). Then set the current point to ({x},{CURRENT_POS[1]})."
    },
    h: {
        cmd: "h",
        par: ["dx"],
        desc: "Horizontal line to",
        format: "h dx",
        explain: "Draw a _horizontal line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]}). Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]})."
    },
    V: {
        cmd: "V",
        par: ["y"],
        desc: "Vertical line to",
        format: "V y",
        explain: "Draw a _vertical line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]}, {y}). Then set the current point to ({CURRENT_POS[0]},{y})."
    },
    v: {
        cmd: "v",
        par: ["dy"],
        desc: "Vertical line to",
        format: "v dy",
        explain: "Draw a _vertical line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]}, {CURRENT_POS[1]+dy}). Then set the current point to ({CURRENT_POS[0]},{CURRENT_POS[1]+dy})."
    },
    Z: {
        cmd: "Z",
        par: [],
        desc: "Close path",
        format: "Z",
        explain: "Draw a _line_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) back to start point ({START_POS[0]}, {START_POS[1]}). Then set the current point to ({START_POS[0]},{START_POS[1]})."
    },
    C: {
        cmd: "C",
        par: ["x1", "y1", "x2", "y2", "x", "y"],
        desc: "Cubic Bézier curve",
        format: "C x1 y1 x2 y2 x y",
        explain: "Draw a _Cubic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}), using ({x1}, {y1}) as the first control point and ({x2},{y2}) as the second one. Then set the current point to ({x},{y})."
    },
    c: {
        cmd: "c",
        par: ["dx1", "dy1", "dx2", "dy2", "dx", "dy"],
        desc: "Cubic Bézier curve",
        format: "c dx1 dy1 dx2 dy2 dx dy",
        explain: "Draw a _Cubic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}), using ({CURRENT_POS[0]+dx1}, {CURRENT_POS[1]+dy1}) as the first control point and ({CURRENT_POS[0]+dx2}, {CURRENT_POS[1]+dy2}) as the second. Then set the current point to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy})."
    },
    S: {
        cmd: "S",
        par: ["x2", "y2", "x", "y"],
        desc: "Smooth cubic Bézier curve",
        format: "S x2 y2 x y",
        explain: "Draw a _Cubic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}), using the reflection of the previous control point as the first control point and ({x2}, {y2}) as the second one. Then set the current point to ({x},{y})."
    },
    s: {
        cmd: "s",
        par: ["dx2", "dy2", "dx", "dy"],
        desc: "Smooth cubic Bézier curve",
        format: "s dx2 dy2 dx dy",
        explain: "Draw a _Cubic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}), using the reflection of the previous control point as the first control point and ({CURRENT_POS[0]+dx2}, {CURRENT_POS[1]+dy2}) as the second. Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]+dy})."
    },
    Q: {
        cmd: "Q",
        par: ["x1", "y1", "x", "y"],
        desc: "Quadratic Bézier curve",
        format: "Q x1 y1 x y",
        explain: "Draw a _Quadratic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}), using ({x1}, {y1}) as the control point. Then set the current point to ({x},{y})."
    },
    q: {
        cmd: "q",
        par: ["dx1", "dy1", "dx", "dy"],
        desc: "Quadratic Bézier curve",
        format: "q dx1 dy1 dx dy",
        explain: "Draw a _Quadratic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}), using ({CURRENT_POS[0]+dx1}, {CURRENT_POS[1]+dy1}) as the control point. Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]+dy})."
    },
    T: {
        cmd: "T",
        par: ["x", "y"],
        desc: "Smooth quadratic Bézier curve",
        format: "T x y",
        explain: "Draw a _Quadratic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}), using the reflection of the previous control point as the control point. Then set the current point to ({x},{y})."
    },
    t: {
        cmd: "t",
        par: ["dx", "dy"],
        desc: "Smooth quadratic Bézier curve",
        format: "t dx dy",
        explain: "Draw a _Quadratic Bézier Curve_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}), using the reflection of the previous control point as the control point. Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]+dy})."
    },
    A: {
        cmd: "A",
        par: ["rx", "ry", "x_axis_rotation", "large_arc_flag", "sweep_flag", "x", "y"],
        desc: "Elliptical Arc",
        format: "A rx ry x_axis_rotation large_arc_flag sweep_flag x y",
        explain: "Draw an _Elliptical Arc_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({x}, {y}), using ({rx}, {ry}) as the radii of the ellipse, rotating ({x_axis_rotation}) degrees, and using large_arc_flag and sweep_flag to control which of the two possible arcs are drawn. Then set the current point to ({x},{y})."
    },
    a: {
        cmd: "a",
        par: ["rx", "ry", "x_axis_rotation", "large_arc_flag", "sweep_flag", "dx", "dy"],
        desc: "Elliptical Arc",
        format: "a rx ry x_axis_rotation large_arc_flag sweep_flag dx dy",
        explain: "Draw an _Elliptical Arc_ from ({CURRENT_POS[0]}, {CURRENT_POS[1]}) to ({CURRENT_POS[0]+dx}, {CURRENT_POS[1]+dy}), using ({rx}, {ry}) as the radii of the ellipse, rotating ({x_axis_rotation}) degrees, and using large_arc_flag and sweep_flag to control which of the two possible arcs are drawn. Then set the current point to ({CURRENT_POS[0]+dx},{CURRENT_POS[1]+dy})."
    },
}