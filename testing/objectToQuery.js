let params = { a: 1, b: 'fff }
let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
