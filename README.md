# wx-audio
微信小程序音乐播放器应用。

## 运行效果
![picture](picture.gif)

## 使用方法
* 下载微信开发者工具
[下载 - 小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
* 下载本项目
```
git clone https://github.com/xingbofeng/wx-audio.git
```
* 启动服务端
```
npm install
npm start
```
* 微信开发者工具加载项目
* 运行小程序

## ToDoList
- [x] node端转发请求
- [ ] 歌曲列表
- [ ] 控制歌曲播放速度

## 网易云音乐API介绍
可见代码[POSThttp.js](./server/POSThttp.js)
### URL
** POST http://music.163.com/api/search/get/ **
### 参数
```
s: 搜索词

limit: 返回数量

sub: 意义不明(非必须参数)；取值：false

type: 搜索类型；取值意义

1 单曲
10 专辑
100 歌手
1000 歌单
1002 用户
```
### 返回结果
如访问
```
http://s.music.163.com/search/get/?type=1&limit=1&s=111
```
返回结果
```json
{
  "result": {
    "songCount": 8301,
    "songs": [
      {
        "id": 441064427,
        "name": "111",
        "artists": [
          {
            "id": 0,
            "name": "大顔",
            "picUrl": null
          }
        ],
        "album": {
          "id": 0,
          "name": "[DJ节目]大顔的DJ节目 第111期",
          "artist": {
            "id": 0,
            "name": "大顔",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/hPkyYmPSQUvVjcZFMrEmfQ==/18766464463932738.jpg"
        },
        "audio": "http://m2.music.126.net/h0wVQtDAuVWnP11ks42lug==/18725782533955295.mp3",
        "djProgramId": 796665591,
        "page": "http://music.163.com/m/song/441064427"
      }
    ]
  },
  "code": 200
}
```
![image](API.jpg)
## LICENSE
[MIT](./LICENSE)