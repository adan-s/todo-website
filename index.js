const express = require('express');
const path = require('path');
const controller = require('./controllers/todoController');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/todo.js')));


// controller.createUser(6,'Sana', 'sana@example.com', 'password123', (err, results) => {
//     if (err) {
//         console.error('Error creating user:', err);
//         return;
//     }
//     console.log('User created successfully:', results);
// });


controller.getTasks((err, tasks) => {
    if (err) {
        console.error('Error getting tasks:', err);
        return;
    }
    console.log('Tasks:', tasks);
});

controller.getUsers((err, users) => {
  if (err) {
      console.error('Error getting users:', err);
      return;
  }
  console.log('Users:', users);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
