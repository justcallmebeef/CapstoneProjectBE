exports.seed = function(knex, Promise) {
  return knex('routes').del()
    .then(function () {
      return knex('routes').insert([
        {
          route_name: 'Hells Bells', 
          route_grade: '5.10a', 
          route_height: 43, 
          climber_id: 1, 
        },
        {
          route_name: 'Black Berry Jame', 
          route_grade: '5.11a', 
          route_height: 52, 
          climber_id: 2,
        },
        {
          route_name: 'Core Life', 
          route_grade: '5.12b', 
          route_height: 62, 
          climber_id: 3,
        }, 
        {
          route_name: 'Pie Town', 
          route_grade: '5.7', 
          route_height: 45, 
          climber_id: 4,
        },
        {
          route_name: 'You Tried', 
          route_grade: '5.9', 
          route_height: 72, 
          climber_id: 4,
        },
        {
          route_name: 'Whipper Therapy', 
          route_grade: '5.10b', 
          route_height: 55, 
          climber_id: 6,
        },
        {
          route_name: 'Turkey Day', 
          route_grade: '5.7', 
          route_height: 53, 
          climber_id: 5,
        },
        {
          route_name: 'Peanut Butter Jelly Time', 
          route_grade: '5.10a', 
          route_height: 102, 
          climber_id: 7,
        },
        {
          route_name: 'Peanut Butter Jelly Time', 
          route_grade: '5.10a', 
          route_height: 102, 
          climber_id: 1,
        },
        {
          route_name: 'Belly Button', 
          route_grade: '5.8', 
          route_height: 47, 
          climber_id: 3,
        },
        {
          route_name: 'For The Children', 
          route_grade: '5.5', 
          route_height: 40, 
          climber_id: 2,
        },
        {
          route_name: 'For The Grandchildren', 
          route_grade: '5.5', 
          route_height: 35, 
          climber_id: 2,
        },
        {
          route_name: 'Hack That Rock', 
          route_grade: '5.13a', 
          route_height: 257, 
          climber_id: 6,
        },
        {
          route_name: 'Half Dome', 
          route_grade: '5.10a', 
          route_height: 1200, 
          climber_id: 3,
        },
        {
          route_name: 'Half Dome', 
          route_grade: '5.10a', 
          route_height: 1000, 
          climber_id: 6,
        },
        {
          route_name: 'Watch It', 
          route_grade: '5.11c', 
          route_height: 63, 
          climber_id: 4,
        },
      ]);
    });
};
