const request = require('supertest');

const app = require('../src/app');

describe('Authors endpoints', () =>{

    test('should return all authors', async () => { 

        const response = await request(app).get('/authors');

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true); // response.body Contiene la respuesta JSON del endpoint.


     });

     test('should return author by id', async () => {

        const response = await request(app).get('/authors/2');

        expect(response.statusCode).toBe(200);

        expect(response.body.id).toBe(2);

    

     });

     test('should return 404 if author does not exist', async () => {

        const response = await request(app).get('/authors/99999');

        expect(response.statusCode).toBe(404);

        expect(response.body.error).toBe('Author not found');

     });

     test('should return post authors', async () => {

        const response = await request(app)
                                    .post('/authors')
                                    .send({
                                        name: 'Test User',
                                        email: `test${Date.now()}@test.com`,
                                        bio: 'Testing author'
                                    });
        
        expect(response.statusCode).toBe(201);

        expect(response.body.name).toBe('Test User');

     });

     test('Should return name and email authors', async () => {

        const response = await request(app)
            .post('/authors')
            .send({});

        expect(response.statusCode).toBe(400);

        expect(response.body.error).toBe('Name and email are required');

     });


});


