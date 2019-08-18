const dateFormat = require('dateformat');

let TimeUtils = {};

//eg: Utils.outOtherTimeStamp(false, Common.time.one_day) == yesterday;
TimeUtils.outOtherTimeStamp = function(is_add, time) {// 格式 y-m-d h:m:s;
    let curData = new Date();
    let otherData;
    if(is_add)
    {
        otherData = new Date(curData.getTime() + time);
    } else
    {
        otherData = new Date(curData.getTime() - time);
    }
    return dateFormat(otherData, "yyyy-mm-dd HH:MM:ss");
};
TimeUtils.outTimestamp = function() {// 格式 y-m-d h:m:s;
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
};

TimeUtils.now = function() { //秒级时间戳;
    return parseInt(Date.now() / 1000);
};
TimeUtils.now64 = function() {  // 毫秒级时间戳;
    return Date.now();
};
//获取当前年份(4位,1970-????)
TimeUtils.getYear = function() {
    return new Date().getFullYear();
};
//获取当前月份(0-11,0代表1月)
TimeUtils.getMonth = function() {
    return new Date().getMonth();
};
//获取当前日(1-31)
TimeUtils.getDate = function() {
    return new Date().getDate();
};
//获取当前星期X(0-6,0代表星期天)
TimeUtils.getDay = function() {
    return new Date().getDay();
};
//获取当前小时数(0-23)
TimeUtils.getHours = function() {
    return new Date().getHours();
};
//获取当前分钟数(0-59)
TimeUtils.getMinutes = function() {
    return new Date().getMinutes();
};
//获取当前秒数(0-59)
TimeUtils.getSeconds = function() {
    return new Date().getSeconds();
};
//获取当前毫秒数(0-999)
TimeUtils.getMilliseconds = function() {
    return new Date().getMilliseconds();
};
//获取当前日期，如2019-7-18
TimeUtils.toLocaleDateString = function() {
    return new Date().toLocaleDateString();
};
//获取进程启动时间;
TimeUtils.upTime = function() {
  return process.uptime();
};
//todo
TimeUtils.utc = function() {

};
TimeUtils.parse = function(time) {
    //手动解析utc,string到时间戳;
};


module.exports = TimeUtils;
