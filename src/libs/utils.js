// 判断一个字符串是无效的字符串
export function isInvalidString (val) {
    if (((typeof val == 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val == 'undefined') || (typeof val == 'null') || (val == null)) {
        return true
    } else {
        return false
    }
}