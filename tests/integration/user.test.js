import 'babel-polyfill';
import request from 'supertest';
import {UserModel} from "../../models/user";
import {server} from "../../app";

let app;

describe('/api/users', () => {

  beforeEach(() => {
    app = server;
  });

  afterEach(async () => {
    app.close();
    await UserModel.deleteMany({});
  });

  describe('/POST', () => {
    describe('Creating a new user', () => {
      it('should create a new user when the data is correct', async () => {
        const payload = {
          name: 'david mogbeyi'
        };

        const response = await request(app).post('/api/users/store').send(payload);
        expect(response.statusCode).toEqual(201);
      }, 30000)
    })
  });

  describe('/GET', () => {
    describe('Getting all users', () => {
      it('should fetch all the users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toEqual(200);
      }, 30000)
    })
  });
});