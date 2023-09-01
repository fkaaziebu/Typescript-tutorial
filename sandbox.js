// const inputs = document.querySelectorAll('input');
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
var obj = { width: 10, height: 15 };
var area = obj.width * obj.height;
var fnt = function (left, right) {
    return left * right;
};
console.log(fnt(10, 20));
var user = {
    name: "Frederick",
    id: 0,
};
console.log(__assign({}, user));
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user1 = new UserAccount("Murphy", 1);
function deleteUser(user) {
    console.log(user);
}
deleteUser({ name: "Fred", id: 0 });
function getAdminUser() {
    return { name: "Fredooo", id: 0 };
}
console.log(getAdminUser());
function windowState(state) {
    return state;
}
console.log(windowState("minimized"));
function getLength(obj) {
    if (Array.isArray(obj)) {
        var vals_1 = {};
        obj.forEach(function (val) {
            vals_1[val] = val;
        });
        return vals_1;
    }
    return obj;
}
console.log(getLength(["0", "1", "2"]));
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 12, y: 26 };
logPoint(point);
var point1 = { x: 10, y: 34, z: 0 };
logPoint(point1);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);
// console.log(inputs);
