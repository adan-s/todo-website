
const connection = require('../config/db');
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
    } else {
      console.log('Connected to the database successfully.');
    }
  });
  

// CRUD Operations for Users
const createUser = (idUser,username, email, password, callback) => {
    const query = 'INSERT INTO User (idUser,username, email, password) VALUES (?,?, ?, ?)';
    connection.query(query, [idUser,username, email, password], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const getUsers = callback => {
    const query = 'SELECT * FROM User';
    connection.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const updateUser = (idUser, username, email, password, callback) => {
    const query = 'UPDATE User SET username = ?, email = ?, password = ? WHERE idUser = ?';
    connection.query(query, [idUser,username, email, password], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const deleteUser = (idUser, callback) => {
    const query = 'DELETE FROM User WHERE idUser = ?';
    connection.query(query, [idUser], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// CRUD Operations for Categories
const createCategory = (category_id,category_name, idUser, callback) => {
    const query = 'INSERT INTO Category (category_id, category_name,idUser) VALUES (?,?, ?)';
    connection.query(query, [category_id,category_name, idUser], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const getCategories = callback => {
    const query = 'SELECT * FROM Category';
    connection.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const updateCategory = (category_id, category_name, idUser, callback) => {
    const query = 'UPDATE Category SET category_name = ?, idUser = ? WHERE category_id = ?';
    connection.query(query, [category_id,category_name, idUser, category_id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const deleteCategory = (category_id, callback) => {
    const query = 'DELETE FROM Category WHERE category_id = ?';
    connection.query(query, [category_id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// CRUD Operations for Tasks
const createTask = (idTask,title, description, duedate, status, idUser, category_id, callback) => {
    const query = 'INSERT INTO Task (idTask,title, description, duedate, status, idUser, category_id,) VALUES (?,?, ?, ?, ?, ?, ?)';
    connection.query(query, [idTask,title, description, duedate, status, idUser, category_id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const getTasks = callback => {
    const query = 'SELECT * FROM Tasks';
    connection.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const updateTask = (idTask, title, description, duedate, status, idUser, category_id, callback) => {
    const query = 'UPDATE Task SET Title = ?, Description = ?, duedate = ?, Status = ?, idUser = ?, category_id = ? WHERE idTask = ?';
    connection.query(query, [title, description, duedate, status, idUser, category_id, idTask], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const deleteTask = (idTask, callback) => {
    const query = 'DELETE FROM Task WHERE idTask = ?';
    connection.query(query, [idTask], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    createTask,
    getTasks,
    updateTask,
    deleteTask
};