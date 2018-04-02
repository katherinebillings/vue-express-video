var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : false }));

/* copied from index */
/* add review to the comments table */
router.post('/', function(req, res, next) {
  console.log("hit api route");
  //do an SQL query to post a review
  connect.query(`INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${$req.body.stars}");`, (error, rows) => {
    console.log(rows);
    if(error) {
      throw error;
    } else {
      res.json(rows);
    }
  })
});

module.exports = router;
