const request = require('supertest');

const app = require('../src/app');

describe('Posts endpoints', () =>{

    test('should return all posts', async () => {

        const response = await request(app).get('/posts');

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

    });

    test('should return post by id', async () => {

        const response = await request(app).get('/posts/4');

        expect(response.statusCode).toBe(200);

        expect(response.body.id).toBe(4);

    })

});