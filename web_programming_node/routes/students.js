var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    var pool = req.pool;

    pool.getConnection((err, connection) => {
        if(err){console.error(err);}
        console.log('DB CONNECTING!')

        connection.query('SELECT * FROM student', function (err, students) {
            if(err){console.error(err);}

            console.log('result :\n' ,students)
            res.json(students)
            res.end();
        });


    })

});

module.exports = router;