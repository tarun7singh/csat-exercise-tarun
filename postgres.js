const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('opixejyp', 'opixejyp', '6Cy43pgH48WdkOCzp8qSuVZkDRL75tVt', {
    host: 'babar.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

sequelize.authenticate().then(function() {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    });


// //Creatin a Table
var Name = sequelize.define('Name', {
    fName: Sequelize.STRING,  // first Name
    lName: Sequelize.STRING, // Last Name
});

// /*
// //Adding data to the table
// sequelize.sync().then(function () {

//     Name.create({
//         fName: "Kyler",
//         lName: "Odin"
//     }).then(function(){ console.log("Kyler Odin created")});

    
//     Name.create({
//         fName: "Grier",
//         lName: "Garrick"
//     }).then(function(){ console.log("Grier Garrick created")});

//     Name.create({
//         fName: "Kolby",
//         lName: "Greyson"
//     }).then(function(){ console.log("Kolby Greyson created")});
// });
// */

// /*
sequelize.sync().then(function () {
    // return all first names only
    Name.findAll({ 
        attributes: ['fName']
    }).then(function(data){        
        console.log("All first names");
        for(var i =0; i < data.length; i++){
            console.log(data[i].fName);
        }
    });
});
// */

// sequelize.sync().then(function () {

//     Name.findAll({ 
//         attributes: ['fName'],
//         where: {
//             id: 2
//         }
//     }).then(function(data){
//         console.log("All first names where id == 2");
//         for(var i =0; i < data.length; i++){
//             console.log(data[i].fName);
//         }
//     });
// });