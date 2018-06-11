var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './App.css';
import { appStore } from "./appStore";
import { appService } from "./appService";
import * as classNames from "classnames";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        appService.setRootComponent(_this);
        return _this;
    }
    App.prototype.render = function () {
        console.log("render");
        var loading = appStore.loading;
        var updatingContactName = appStore.updatingContactName;
        var errorMessage = (appStore.error && appStore.error.message) || "";
        if (!updatingContactName) {
            updatingContactName = "";
        }
        return (React.createElement("div", { className: "App" },
            React.createElement("h1", null, "Manage Contacts"),
            React.createElement("h2", { className: "error" }, errorMessage),
            React.createElement("div", { className: classNames("loading", { active: loading }) }, "Loading ..."),
            React.createElement("ul", null, this.getContactsLIs()),
            React.createElement("div", { className: "edit-zone" },
                React.createElement("input", { value: updatingContactName, onChange: function (event) { return appService.updatingContactNameChanged(event.target.value); } }),
                React.createElement("button", { onClick: function () { return appService.save(); } }, "Save"))));
    };
    App.prototype.getContactsLIs = function () {
        var contacts = appStore.contacts;
        if (!contacts) {
            return;
        }
        return contacts.map(function (c) { return (React.createElement("li", { key: c.id },
            React.createElement("span", { className: 'name' }, c.name),
            React.createElement("button", { onClick: function () { return appService.select(c); } }, "Select"))); });
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map