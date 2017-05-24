# wx-audio

[![Build Status](https://travis-ci.org/xingbofeng/wx-audio.svg?branch=master)](https://travis-ci.org/xingbofeng/wx-audio)

微信小程序音乐播放器应用。

## 运行效果
![picture](picture.gif)

## 运行环境
`Node.js` 6.0以上

注：由于本项目使用了部分es6的语法，因此需要较高版本的node环境，建议升级Node.js版本运行。

## 目录说明
- `pages/`: 项目前端部分代码;
- `server/`: 项目服务端代码，目前已部署到我的`测试服务器`(接口为`http://angryzhangzhe.cn:3000`，方法为`POST`，参数为`musicname`)，非商业可自由使用;
- `test/`: 单元测试;

## 使用方法
* 下载微信开发者工具
[下载 - 小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
* 下载本项目
```
git clone https://github.com/xingbofeng/wx-audio.git
```
* 启动服务端
注：本项目服务端代码我已部署到我自己的`测试服务器`(接口为`http://angryzhangzhe.cn:3000`)上，若想本地调试接口，请修改`pages/index/index.js`中的`wx.request函数`的接口为`http://127.0.0.1:3000`，在启动本地服务端。
本地服务端代码入口文件为：`server/server.js`，您可以通过以下命令启动本地服务端：
```
yarn install
yarn start
```
* 运行单元测试
目前已写三个测试用例，测试用例代码在`test/`目录下，测试框架为`mocha`：
```
yarn install -g mocha
yarn test
```
* 微信开发者工具加载项目
* 运行小程序

## 待做事件清单
- [x] node端转发请求
- [x] 添加server端测试用例
- [x] 歌曲列表
- [ ] 添加搜索用户/歌手/歌单功能
- [ ] 控制歌曲播放速度

## 网易云音乐API介绍

### URL
**GET http://music.163.com/api/search/get/**

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
如对下列url发起get请求：
```
http://s.music.163.com/search/get/?type=1&limit=5&s=%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83
```
返回结果如图所示：
```json
{
  "result": {
    "songCount": 2275,
    "songs": [
      {
        "id": 440241144,
        "name": "告白气球",
        "artists": [
          {
            "id": 1081635,
            "name": "周二珂",
            "picUrl": null
          }
        ],
        "album": {
          "id": 34986028,
          "name": "告白气球",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/m3_elKryq_x62UNHJ2NgHg==/109951162807555886.jpg"
        },
        "audio": "http://m2.music.126.net/GvIMZ5ZW0l04xFMVYtTy8g==/18502581673300022.mp3",
        "djProgramId": 0,
        "page": "http://music.163.com/m/song/440241144"
      },
      {
        "id": 434070713,
        "name": "告白气球 ",
        "artists": [
          {
            "id": 1073042,
            "name": "王进",
            "picUrl": null
          }
        ],
        "album": {
          "id": 34801227,
          "name": "告白气球",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/cIim8rAhdKV1Up7e9zSFoA==/17647161626137638.jpg"
        },
        "audio": "http://m2.music.126.net/zp5J-qWfkwmBd2pq3pHzCw==/18605935765863165.mp3",
        "djProgramId": 0,
        "page": "http://music.163.com/m/song/434070713"
      },
      {
        "id": 421137034,
        "name": "告白气球",
        "artists": [
          {
            "id": 1158065,
            "name": "宇西",
            "picUrl": null
          }
        ],
        "album": {
          "id": 34778501,
          "name": "告白气球（Cover 周杰伦）",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/tlp3VWVQVe0Je1r-oHn91g==/17666952835430891.jpg"
        },
        "audio": "http://m2.music.126.net/8egvCxWVy4vzk2EJG_dGqg==/3265549609864401.mp3",
        "djProgramId": 0,
        "page": "http://music.163.com/m/song/421137034"
      },
      {
        "id": 429461789,
        "name": "告白气球",
        "artists": [
          {
            "id": 975714,
            "name": "叶洛洛",
            "picUrl": null
          },
          {
            "id": 12126098,
            "name": "Vk",
            "picUrl": null
          }
        ],
        "album": {
          "id": 34872359,
          "name": "告白气球",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null
          },
          "picUrl": "http://p1.music.126.net/PuNMFpLHzvHw2v0-Zh2b8g==/18244196440128259.jpg"
        },
        "audio": "http://m2.music.126.net/t_qlmZ581WF2MwHmvUavxA==/2946691220790691.mp3",
        "djProgramId": 0,
        "page": "http://music.163.com/m/song/429461789"
      }
    ]
  },
  "code": 200
}
```
![image](http://oczira72b.bkt.clouddn.com/APIhahaha.png)
## 更新日志
* 0.0.1 :tada:完成基本功能界面;发起请求返回特定的一首歌曲;
* 0.0.2 更改服务端，现在返回最多十首歌曲，但前端还未优化;添加服务端测试代码;
* 0.1.0 完成搜索列表功能;发起请求返回多首歌曲;
* 0.1.1 加入英文文档，使用`yarn`构建;

## LICENSE
[MIT LICENSE](./LICENSE)
