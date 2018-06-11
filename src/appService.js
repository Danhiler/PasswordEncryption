var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { appStore } from "./appStore";
import { getAllContacts, updateContact, updateUserInServer } from "./serverApi";
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("init");
                        this.beginLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, getAllContacts()];
                    case 2:
                        contacts = _a.sent();
                        console.log("Data arrived from server", contacts);
                        appStore.contacts = contacts.contacts;
                        return [3 /*break*/, 4];
                    case 3:
                        this.endLoading();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppService.prototype.beginLoading = function () {
        appStore.loading = true;
        this.updateUI();
    };
    AppService.prototype.endLoading = function () {
        appStore.loading = false;
        this.updateUI();
    };
    AppService.prototype.setRootComponent = function (comp) {
        this.rootComponent = comp;
    };
    AppService.prototype.updateUI = function () {
        if (!this.rootComponent) {
            return;
        }
        this.rootComponent.forceUpdate();
    };
    AppService.prototype.select = function (contact) {
        console.log("select", contact);
        if (contact == appStore.selectedContact) {
            return;
        }
        appStore.selectedContact = contact;
        appStore.updatingContactName = contact.name;
        this.updateUI();
    };
    AppService.prototype.updatingContactNameChanged = function (value) {
        appStore.updatingContactName = value;
        this.updateUI();
    };
    AppService.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectedContact, clone, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        selectedContact = appStore.selectedContact;
                        console.log(updateUserInServer({}));
                        clone = __assign({}, selectedContact, { name: appStore.updatingContactName });
                        this.beginLoading();
                        return [4 /*yield*/, updateContact(clone)];
                    case 1:
                        _a.sent();
                        selectedContact.name = appStore.updatingContactName;
                        this.updateUI();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        this.onError(err_1);
                        return [3 /*break*/, 4];
                    case 3:
                        this.endLoading();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppService.prototype.onError = function (err) {
        console.error("Error", err);
        appStore.error = err;
        this.updateUI();
    };
    return AppService;
}());
export { AppService };
export var appService = new AppService();
//# sourceMappingURL=appService.js.map