import chai from 'chai';
import DatabaseConnection from '../../utils/db'


describe('Database Setup', () => {
    it('Establish a connection to a database', () => {

        let url = 'mongodb://localhosrt:27017/nodeExpressStarter'
        let database = new DatabaseConnection(url);

        return database.connect().then(function(db) {
            chai.expect(db).to.not.be.undefined;
        });

    });
})




