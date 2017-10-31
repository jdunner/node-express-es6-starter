import chai from 'chai';
import sinon from 'sinon';

import UserService from '../../services/user-service';
import UserDao from '../../dao/user-dao';

const userService = new UserService({
    userDao: new UserDao(
        {db:{}})
})

describe('User Service', () => {
    it('getAllUsers should call the findAllUsers method on the DAO', () => {
        // expect(userService.getAllUsers()).to.have.lengthOf(2);

    });

    it('getUser should return null now as we do not have any data', () => {
        // expect(userService.getUser(1)).to.be.null;
    })
})

