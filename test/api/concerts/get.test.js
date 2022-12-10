const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server.js');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {
  before(async () => {
    const testConcOne = new Concert({
      _id: '5d9f1140f10a81216cfd4408',
      performer: 'John Doe',
      day: 1,
      genre: 'Rock',
      image: '/img/uploads/1fsd324fsdg.jpg',
      price: 25,
    });
    await testConcOne.save();

    const testConcTwo = new Concert({
      _id: '5d9f1159f81ce8d1ef2bee48',
      performer: 'Rebekah Parker',
      day: 1,
      genre: 'R&B',
      image: '/img/uploads/2f342s4fsdg.jpg',
      price: 45,
    });
    await testConcTwo.save();
  });

  it('should return concerts by performer name', async () => {
    const res = await request(server).get('/api/concerts/performer/John_Doe');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

  it('should return concerts by genre name', async () => {
    const res = await request(server).get('/api/concerts/genre/R&B');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.not.be.null;
  });

  it('should return concerts by price', async () => {
    const res = await request(server).get('/api/concerts/price/24/46');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(2);
  });

  it('should return concerts by day', async () => {
    const res = await request(server).get('/api/concerts/price/day/1');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(2);
  });

  after(async () => {
    await Concert.deleteMany();
  });
});