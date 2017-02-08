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
        let reply = [];
        for (let i = 0; i < JSON.parse(body).result.songs.length; i++) {
          // 格式化
          let {
            name,
            audio: musicUrl,
            page,
            album: {
              name: albumName,
              picUrl,
            },
            artists: [{
              name: singer,
            }],
          } = JSON.parse(body).result.songs[i];
          reply.push({
            name,
            picUrl,
            musicUrl,
            page,
            singer,
            albumName,
          });
        }
        resolve(reply);
      });
    });
  });
};
module.exports = POSThttp;