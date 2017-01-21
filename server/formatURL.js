// 格式化参数
const URL = function(musicname) {
  let url = 'http://s.music.163.com/search/get/';
  const data = {
    'type': '1',
    'limit': '1',
    's': musicname,
  };
  for (let key in data) {
    if (key === 'type') {
      url += `?${key}=${encodeURIComponent(data[key])}`;
    } else {
      url += `&${key}=${encodeURIComponent(data[key])}`;
    }
  }
  return url;
}
module.exports = URL;