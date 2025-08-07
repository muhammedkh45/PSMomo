/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let sorted_s = s.split('').sort().join('');
    let sorted_t = t.split('').sort().join('');
    return sorted_s===sorted_t ? true:false
    
};