var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import "./TodoCounter.css";
export function TodoCounter(props) {
    var total = props.total, completed = props.completed;
    return (_jsxs("h2", __assign({ className: "TodoCounter" }, { children: ["Has completado ", completed, " de ", total, " TOdoS"] })));
}
//# sourceMappingURL=TodoCounter.js.map