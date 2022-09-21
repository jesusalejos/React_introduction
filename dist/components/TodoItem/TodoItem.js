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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./TodoItem.css";
export function TodoItem(props) {
    var text = props.text, completed = props.completed, onComplete = props.onComplete, onDelete = props.onDelete;
    return (_jsxs("li", __assign({ className: "TodoItem" }, { children: [_jsx("span", __assign({ className: "Icon Icon-check ".concat(completed && 'Icon-check--active'), onClick: onComplete }, { children: "\u221A" })), _jsx("p", __assign({ className: "TodoItem-p ".concat(completed && 'TodoItem-p--completed') }, { children: text })), _jsx("span", __assign({ className: "Icon Icon-delete", onClick: onDelete }, { children: "X" }))] })));
}
//# sourceMappingURL=TodoItem.js.map