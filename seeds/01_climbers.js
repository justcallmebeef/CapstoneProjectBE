exports.seed = function(knex, Promise) {
  return knex('climbers').del()
    .then(function () {
      return knex('climbers').insert([
        {
          first_name: 'Andrew', 
          last_name: 'Rassbach', 
          email: 'rassbach123@hotmail.com', 
          password: 'password123'
        },
        {
          first_name: 'Phill', 
          last_name: 'Human', 
          email: 'phill321@gmail.com', 
          password: 'password321'
        },
        {
          first_name: 'Dane', 
          last_name: 'Theman', 
          email: 'DaneTheMan@yahoo.com', 
          password: 'pa55word'
        },
        {
          first_name: 'Ian', 
          last_name: 'Pie', 
          email: 'PieGuy@gmail.com', 
          password: 'pie'
        },
        {
          first_name: 'Sarah', 
          last_name: 'Freebee', 
          email: 'freebee@hotmail.com', 
          password: 'free'
        },
        {
          first_name: 'Kate', 
          last_name: 'Bailey', 
          email: 'baileyKate@gmail.com', 
          password: 'password123'
        },
        {
          first_name: 'Jenna', 
          last_name: 'Rassbach', 
          email: 'jRass@aol.com', 
          password: 'WomenRule'
        }
      ]);
    });
};
