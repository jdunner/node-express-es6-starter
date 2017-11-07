import chai from 'chai';
import sinon from 'sinon';
import User from '../domain/user';

import UserService from '../../services/user-service';

const userService = new UserService({})

describe('User Service', () => {
    it('Should save a new user', () => {
        const user = new User({
            username: 'jdunne5',
            createdBy: 'The Tester'
        });

        return userService.save(user)
            .then(function(data){
                console.log(data)
        });

    });

})

