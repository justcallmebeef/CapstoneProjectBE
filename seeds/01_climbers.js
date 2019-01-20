
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('climbers').del()
    .then(function () {
      // Inserts seed entries
      return knex('climbers').insert([
        {
          first_name: 'Andrew', 
          last_name: 'Rassbach', 
          email: 'rassbach123@hotmail.com', 
          username: 'rassy123', 
          password: 'password123'
        },
        {
          first_name: 'Phill', 
          last_name: 'Human', 
          email: 'phill321@gmail.com', 
          username: 'philly321', 
          password: 'password321'
        },
        {
          first_name: 'Dane', 
          last_name: 'Theman', 
          email: 'DaneTheMan@yahoo.com', 
          username: 'TheMan123', 
          password: 'pa55word'
        },
        {
          first_name: 'Ian', 
          last_name: 'Pie', 
          email: 'PieGuy@gmail.com', 
          username: 'PieGuy', 
          password: 'pie'
        },
        {
          first_name: 'Sarah', 
          last_name: 'Freebee', 
          email: 'freebee@hotmail.com', 
          username: 'freebs', 
          password: 'free'
        },
        {
          first_name: 'Kate', 
          last_name: 'Bailey', 
          email: 'baileyKate@gmail.com', 
          username: 'KateBailey', 
          password: 'password123'
        },
        {
          first_name: 'Jenna', 
          last_name: 'Rassbach', 
          email: 'jRass@aol.com', 
          username: 'JLady', 
          password: 'WomenRule'
        }
      ]);
    });
};
