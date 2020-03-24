// ==UserScript==
// @name              koharu机场
// @namespace         https://bilibili.alicization.org
// @version           1.0.0
// @author            chimumu
// @loginURL          https://bilibili.alicization.org/auth/login
// @expire            900e3
// @domain            bilibili.alicization.org
// ==/UserScript==

exports.run = async function() {
    var data = await axios.post('https://bilibili.alicization.org/user/checkin', {dataType: "json"});
    if ((typeof data.data) == 'string') {
        throw '需要登录';
    }
    if (data.data.msg.substring(0, 3) == "获得了") {
        return '成功'+data.data.msg;
    } else if (data.data.msg.substring(0, 3) == "您似乎") {
        return '已经签过到了';
    }
    else {
    throw data.data || "失败";
    }
};

exports.check = async function() {
    var ret = await axios.post('https://bilibili.alicization.org/user/checkin', {dataType: "json"});
    return ret.status == 200;
};