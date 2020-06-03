// Aula

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistemas

// POST: Criar uma nova informação no back-end (CERATE)
// GET: Buscar uma ou mais informações do back-end (READ)
// PUT: Atualizar uma informação existente no back-end (UPDATE)
// DELETE: Remover uma informação do back-end (DELETE)

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = listar usuários
// GET http://localhost:3333/users/5 = listar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recursos
// Query Param: Parâmetros opcionais que vem na própria para filtros, paginação, etc
// Request Body: Parâmetros para criação/atualização de informações

// SQL: SELECT * FROM users WHERE name = 'Higor'
// KNEX.js: knex('users').where('name', 'Higor').select('*')

// const users = [
//     'Diego',   //0
//     'Cleiton',  //1
//     'Robson',  //2
//     'Higor',   //3
//     'Moroni',  //4
// ]

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);
    
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users

//     return response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);
//     const user = users[id]
//     return response.json(user)
// });

// app.post('/users', (request, response) => {
//     const data = request.body;

//     const user = {
//         name: data.name,
//         email: data.email
//     };
//     return response.json(user);
// });