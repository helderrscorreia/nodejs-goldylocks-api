// libraries
const needle = require('needle');
const queryString = require('querystring');

module.exports = function () {
    let _this = this;
    this.initialized = false;
    this.baseURL = ""

    /**
     * initial setup
     * @param alias
     * @param apiKey
     */
    this.setup = function (alias, apiKey) {
        _this.baseURL = `https://app.goldylocks.pt/${alias}/api/?api=${apiKey}`
        _this.initialized = true;
    }

    /**
     * checks is setup has been run
     * @returns {boolean}
     */
    this.isInitialized = function () {
        return _this.initialized;
    }
}