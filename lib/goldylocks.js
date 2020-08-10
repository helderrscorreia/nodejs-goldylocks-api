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

    /**
     * send Goldylocks API request
     * @param requestType
     * @param getData
     * @param postData
     * @param callback
     */
    this.request = function (requestType, getData = {}, postData = {}, callback = null) {

        // check if object has been initialized properly
        if(!_this.isInitialized()){
            console.error("ERROR - You must initialize Goldylocks object first!");
            return;
        }

        // build URL query string
        let urlQueryString = queryString.stringify(getData);

        // build Goldylocks API request  URL
        let apiRequestURL = `${_this.baseURL}&t=${requestType}&${urlQueryString}`;

        // send POST request and return body and full response data
        needle('post', apiRequestURL, postData, {json: false})
            .then(response => {
                if (callback && response) callback(response.body, response);
            })
            .catch(err => {
                console.error(err);
            });
    }
}