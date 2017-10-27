export default class UserService {

    constructor({ userDao }) {
        this.userDao = userDao
    }

    getAllUsers() {
        return this.userDao.findAllUsers();
    }

    getUser(id){
        return null;
    }
}