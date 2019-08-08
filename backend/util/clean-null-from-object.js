function clean(obj) {
    let temp = {};
    for (var propName in obj) { 
      if (obj[propName] !== null && obj[propName] !== 'null' && obj[propName] !== undefined && obj[propName] !== '') {
        temp[propName] = obj[propName];
      }
    }
    return temp;
}
module.exports = clean;