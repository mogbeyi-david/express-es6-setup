import 'babel-polyfill';
import request from 'supertest';
import {UserModel} from "../../models/user";
import {server} from "../../app";
import mongoose from 'mongoose';

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

  });

  describe('/GET', () => {

  });
});