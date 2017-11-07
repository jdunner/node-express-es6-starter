import User from '../domain/user';

export default class UserService {

    constructor({}) {
    }

    save(user, resolve, reject) {
        return new Promise(function(resolve,reject) {
            user.save()
                .then(savedUser => resolve(savedUser))
                .catch(e => next(e));
        });
    }
}