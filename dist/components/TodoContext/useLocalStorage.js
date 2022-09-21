import * as React from "react";
var parsedItem;
export function useLocalStorage(itemName, initialValue) {
    var _a = React.useState(false), error = _a[0], setError = _a[1];
    var _b = React.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = React.useState(initialValue), item = _c[0], setItem = _c[1]; //super importante el uso de useState
    React.useEffect(function () {
        setTimeout(function () {
            try {
                var localStorageItem = localStorage.getItem(itemName);
                var parsedItem_1;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem_1 = initialValue;
                }
                else {
                    parsedItem_1 = JSON.parse(localStorageItem);
                }
                setItem(parsedItem_1);
                setLoading(false);
            }
            catch (e) {
                setError(true);
            }
        }, 3000), [];
    });
    var saveItem = function (newItem) {
        try {
            var stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem); //para causar el render.
        }
        catch (e) {
            setError(true);
        }
    };
    return {
        item: item,
        saveItem: saveItem,
        loading: loading,
        error: error,
    };
}
//# sourceMappingURL=useLocalStorage.js.map