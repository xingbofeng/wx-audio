// 引入断言库chai
var expect = require('chai').expect;
var should = require('chai').should();
var supertest = require('supertest');
var server = require('../server/server.js');
describe('test server/server.js', () => {
  it('server connect without err!', (done) => {
    supertest(server).post('/').send({
      musicname: '爱的故事上集'
    }).expect(200).end((err, res) => {
      should.not.exist(err);
      done();
    });
  });
  it('test musicname = 爱的故事上集', (done) => {
    supertest(server).post('/').send({
      musicname: '爱的故事上集'
    }).expect(200).end((err, res) => {
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.lengthOf(9);
      expect(res.body[0]).to.be.a('object');
      expect(res.body[0].picUrl).to.equal('http://p1.music.126.net/qZ0FaEJ-SoCi4WygXYTlkw==/17818685440103600.jpg');
      done();
    });
  });
  it('test musicname = 告白气球', (done) => {
    supertest(server).post('/').send({
      musicname: '告白气球'
    }).expect(200).end((err, res) => {
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.lengthOf(8);
      expect(res.body[0]).to.be.a('object');
      expect(res.body[1].singer).to.equal('方小宇');
      done();
    });
  });
});
