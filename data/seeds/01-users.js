const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    {
      id: 1,
      username: 'user1',
      password: bcrypt.hashSync('password1', 12),
    },
    {
      id: 2,
      username: 'user2',
      password: bcrypt.hashSync('password2', 12),
    },
  ]);
};
