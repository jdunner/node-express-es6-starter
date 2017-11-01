import chai from 'chai';
import DatabaseConnection from '../../utils/db'


describe('Database Setup', () => {
    it('Establish a connection to a database', () => {

        let url = 'mongodb://localhost:27017/nodeExpressStarter'
        let database = new DatabaseConnection(url);

        database.connect()
            .then(
                () => {
                    console.log('www')
                })
            .catch(
                (err) => {
                    console.log(err)
                })

    });
})




