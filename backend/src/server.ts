import express from 'express';

const app = express();
app.use(express.json());

// rota = conjunto
// recurso = users

// métodos HTTP = GET, POST, PUT, DELETE
// // GET - obter dados (default do browser)
// // POST - guardar dados novos
// // PUT - editar dados
// // DELETE - apagar dados

// parâmetros
// // Query params: http://localhost:3333/users?search=wolf
// // Route params: http://localhost:3333/users/1 (identificar um recurso)
// // Body: corpo da requisição - serve para enviar dados que não caibam nos query ou route params


app.post('/users/:id', (request, response)=>{
  console.log(request.query)
  console.log(request.params)
  console.log(request.body)
  return response.json({ message: 'Hello Wolf' });
});

app.listen(3333)
// localhost:3333
