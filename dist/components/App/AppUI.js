import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom/CreateTodoButtom";
export function AppUI(props) {
    var loading = props.loading, error = props.error, totalTodos = props.totalTodos, completedTodos = props.completedTodos, searchValue = props.searchValue, setSearchValue = props.setSearchValue, searchedTodos = props.searchedTodos, completeTodo = props.completeTodo, deleteTodo = props.deleteTodo;
    return (_jsxs(_Fragment, { children: [_jsx(TodoCounter, { total: totalTodos, completed: completedTodos }), _jsx(TodoSearch, { searchValue: searchValue, setSearchValue: setSearchValue }), _jsxs(TodoList, { children: [error && _jsx("p", { children: "Desesp\u00E9rate, hubo un error..." }), loading && _jsx("p", { children: "Estamos cargando, no desesperes..." }), (!loading && !searchedTodos.length) && _jsx("div", { children: _jsx("p", { children: "\u00A1Crea tu primer ToDo!" }) }), searchedTodos.map(function (todo) {
                        return _jsx(TodoItem, { text: todo.text, completed: todo.completed, onComplete: function () { return completeTodo(todo.text); }, onDelete: function () { return deleteTodo(todo.text); } }, todo.text);
                    })] }), _jsx(CreateTodoButtom, {})] }));
}
//# sourceMappingURL=AppUI.js.map