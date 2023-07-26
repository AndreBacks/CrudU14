const crud = require('../controller/crud');
const request = require('supertest');
const app = require('../app.js'); 

describe('Pruebas del CRUD', () => {
  // Prueba para verificar 
  test('Debe agregar un paciente correctamente', async () => {
    const paciente = {
      nombre: 'Juan Perez',
      cedula : 1452364,
      apellido : 'Jimenez',
      edad: 30,
      telefono : 4569783,
    };

    const response = await request(app).post('/salvar').send(paciente);
    expect(response.status).toBe(200);
  });

  // Prueba para verificar la función consultar 
  test('Debe obtener todos los pacientes correctamente', async () => {
    const response = await request(app).get('/pacientes');
    expect(response.status).toBe(200);
  });

});
