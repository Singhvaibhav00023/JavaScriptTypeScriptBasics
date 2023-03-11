var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.run = function () {
        console.log("BMW is running");
    };
    return BMW;
}());
var aBMW = new BMW();
aBMW.run();
