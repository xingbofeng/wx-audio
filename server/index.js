var express = require('express');
var bodyParser = require('body-parser');
// 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
var http = require('http');
var formatURL = require('./formatURL.js');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, respon) => {
	var body = '';
	// http模块拿到真实后台api的数据
	// console.log(formatURL);
	http.get(formatURL(req.body.musicname), function(res) {
		res.on('data', (data) => {
			body += data;
		}).on('end', () => {
			respon.send(JSON.parse(body));
		})
	});
});
app.listen(3000, () => {
	console.log('open wx-audio server successful!')
});