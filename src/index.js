module.exports = function reverse (n) {
    let res = String(n);
    
    res = res.split('');
    res.reverse();

    if(res[res.length - 1] == '-') {
      res.pop();
    }

    res = res.join('');  
    return Number(res);
};

