import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./TodoSearch.css";
export function TodoSearch(_a) {
    //Aquí en las props usamos un estilo más desordenado para tener en cuenta que es otra forma
    var searchValue = _a.searchValue, setSearchValue = _a.setSearchValue;
    var onSearchValueChange = function (event) {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { placeholder: "Write here...", className: "TodoSearch", value: searchValue, onChange: onSearchValueChange }), _jsx("p", { children: searchValue })] }));
}
//# sourceMappingURL=TodoSearch.js.map