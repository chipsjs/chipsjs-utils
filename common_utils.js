const crypto = require('crypto');
let CommonUtils = {};

CommonUtils.dataIsEmpty = function(data){
    let data_type = typeof data;
    switch (data_type) {
        case "object": return Object.keys(data).length === 0;
        case "string": return data.length === 0;
        case "undefined": return true;
        default: return false;
    }
};

//id is string,32 bit,lower case
CommonUtils.getMd5 = function(id) {
    let md5 = crypto.createHash('md5');
    return md5.update(id).digest('hex');
};

// CommonUtils.isArray = function(value) {
//     return Array.isArray(value);
// };

module.exports = CommonUtils;