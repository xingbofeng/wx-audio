var formatURL = require('./formatURL.js');
var http = require('http');
const POSThttp = function(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    // http模块拿到真实后台api的数据
    http.get(formatURL(request.body.musicname), function(res) {
      res.on('data', (data) => {
        body += data;
      }).on('end', () => {
        // 格式化
        const {
          name,
          audio: musicUrl,
          page,
          album: {
            name: musicName,
            picUrl,
          },
          artists: [{
            name: singer,
          }],
        } = JSON.parse(body).result.songs[0];
        const reply = {
          name,
          picUrl,
          musicUrl,
          page,
          singer,
        };
        resolve(reply);
      });
    });
  });
};
module.exports = POSThttp;