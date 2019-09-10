/*
作者言：分享一个趣事，好奇写过一个C++ StringUtils插件,"成功"把效率降低了7倍;证明并不是所有的lib用C++重写效率就一定高，还要考虑对象的转换等成本;
*/

let StringUtils = {};
//is_right=true,得到symbol_index从字符串开始位置到右边split_length位
//is_right=false,得到symbol_index从字符串split_symbol处向左split_length到结尾
StringUtils.getSubStringBySymbol = function(str, split_symbol, split_length, is_right) {
    let substr = "";
    let index = str.indexOf(split_symbol);
    if(index === -1) return str;
    
    if(is_right === true) {
        let end_index = index + split_length;
        if(end_index  + 1 < str.length) {
            substr = str.substr(0, end_index + 1);
        } else {
            substr = str;
        }
    } else {
        let start_index =  index - split_length;
        if(start_index > 0) {
            substr = str.substr(start_index);
        } else {
            substr = str;
        }
    }

    return substr;
};
StringUtils.getRandomString = function() {
    return Math.random().toString(36).substr(2);
};

//source_str是否以dest_str开头
StringUtils.isStartWith = function(source_str, dest_str, ignore_case_flag){
    if(typeof source_str !== "string" || typeof dest_str !== "string") return false;

    if(source_str.length > dest_str.length || dest_str.length === 0) return false;

    let sub_source_str = source_str.substr(0, dest_str.length);
    if(ignore_case_flag) {
        sub_source_str = sub_source_str.toLowerCase();
        dest_str = dest_str.toLowerCase();
    }

    return sub_source_str === dest_str;
};

//source_str是否以dest_str结尾
StringUtils.isEndWith = function(source_str, dest_str, ignore_case_flag){
    if(typeof source_str !== "string" || typeof dest_str !== "string") return false;

    if(source_str.length > dest_str.length || dest_str.length === 0) return false;

    let sub_source_str = source_str.substr(source_str.length - dest_str.length, dest_str.length);
    if(ignore_case_flag) {
        sub_source_str = this.toLowerCase(sub_source_str);
        dest_str = this.toLowerCase(dest_str);
    }

    return sub_source_str === dest_str;
};

StringUtils.parseBool = function(val) {
    if(typeof val !== "string" && typeof val !== "number") return false;

    let str = val.toString();
    return this.isStartWith(str, "true") || this.isStartWith(str, "yes") || this.isStartWith(str, "1");
};

module.exports = StringUtils;
