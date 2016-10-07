var edge = require('edge');

var getEnvironmentVariable  = edge.func(`
    async (key) => { 
        return System.Environment.GetEnvironmentVariable(
                  key.ToString(), EnvironmentVariableTarget.Process);
    }
`);


module.exports = function (key, callback) {
    return getEnvironmentVariable(key, typeof callback === 'function' ? callback : true);
};
