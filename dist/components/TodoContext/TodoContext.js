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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useLocalStorage } from "./useLocalStorage";
export var TodoContext = React.createContext(null);
export function TodoProvider(props) {
    var _a = useLocalStorage("TODOS_V1", []), todos = _a.item, saveTodos = _a.saveItem, loading = _a.loading, error = _a.error; //si fuera array ponemos as... repetimos datos (creo)
    //const [name, saveName] = useLocalStorage("PRUEBA_V1", "prueba"); //es decir, el custom hooks nos sirve para todo, es abstraer una lógica
    var _b = React.useState(""), searchValue = _b[0], setSearchValue = _b[1];
    var completedTodos = todos.filter(function (todo) { return !!todo.completed; }).length; //!! es true
    var totalTodos = todos.length;
    var searchedTodos = [];
    if (searchValue.length <= 1) {
        searchedTodos = todos;
    }
    else {
        searchedTodos = todos.filter(function (todo) {
            var todoText = todo.text.toLowerCase();
            var searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    var completeTodo = function (text) {
        var todoIndex = todos.findIndex(function (todo) { return todo.text === text; });
        var newTodos = __spreadArray([], todos, true); //creamos un nuevo objeto 
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos); //Aquí causaremos un re-render, por eso, creamo sun nuevo objeto.
    };
    var deleteTodo = function (text) {
        var todoIndex = todos.findIndex(function (todo) { return todo.text === text; });
        var newTodos = __spreadArray([], todos, true); //creamos un nuevo objeto 
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos); //Aquí causaremos un re-render, por eso, creamo sun nuevo objeto.
    };
    //(property) React.ProviderProps<null>.value: null
    return (_jsx(TodoContext.Provider, __assign({ value: {
            loading: loading,
            error: error,
            totalTodos: totalTodos,
            completedTodos: completedTodos,
            searchValue: searchValue,
            setSearchValue: setSearchValue,
            searchedTodos: searchedTodos,
            //addTodo,
            completeTodo: completeTodo,
            deleteTodo: deleteTodo,
            //openModal,
            //setOpenModal,
        } }, { children: props.children })));
}
;
//# sourceMappingURL=TodoContext.js.map