import chai from 'chai';
import sinon from 'sinon';

import UserService from '../../services/user-service';
import UserDao from '../../dao/user-dao';



var userDaoMock = new UserDao({db:{}});
// var stub = sinon.stub(UserDao, 'findAllUsers');

var UserDaoStub = sinon.spy(function() {
    return sinon.createStubInstance(UserDao);
});

var foo = new UserDaoStub();


const userService = new UserService({
    userDao: UserDaoStub
})

describe('User Service', () => {
    it('getAllUsers should call the findAllUsers method on the DAO', () => {
        // expect(userService.getAllUsers()).to.have.lengthOf(2);

    });

    it('getUser should return null now as we do not have any data', () => {
        // expect(userService.getUser(1)).to.be.null;
    })
})

