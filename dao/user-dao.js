export default class UserDao {

    constructor({ db }) {
        this.db = db
    }


    findAllUsers() {
        let users = [
            {'id':1, 'displayName': 'Jorden Dunne'},
            {'id':2, 'displayName': 'Mickey Mouse'}
        ]
        return users;
        //return this.db.query('SELECT * FROM USERS');
    }
}