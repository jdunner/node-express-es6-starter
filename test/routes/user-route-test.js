import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('Users routes', () => {
    it('it should GET /users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });

    it('it should get /users/all', (done) => {
        chai.request(app)
            .get('/users/all')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                done();
            });
    });
});
