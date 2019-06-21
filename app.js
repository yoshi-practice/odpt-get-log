const request = require('request');

let URL = 'https://api-tokyochallenge.odpt.org/api/v4/odpt:Train?acl:consumerKey=e4e94d49da4866b76b2fc33016e7a3f792e459762199754561eb2b788fda68ee';

request.get({
    uri: URL,
    headers: {'Content-type': 'application/json'},
    qs: {
    },
    json: true
}, function(err, req, data){
    console.log(data);
});

