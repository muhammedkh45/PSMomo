/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let i = 0; i < strs.length; i++){
        const key = strs[i].split('').sort().join('');
        if(!map.has(key)){
            map.set(key, [strs[i]]);
        } else {
            map.get(key).push(strs[i]);
        }
    }
    var result = new Array() ;
    for (const group of map.values()) {
        result.push(group)
    }
    return result
};
