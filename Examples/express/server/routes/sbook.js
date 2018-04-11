const express = require('express');
const router = express.Router();
const axios = require('axios');


// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/https://api.douban.com/v2/book/search');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }



/* GET home page. */
router.get('/', function(req, res, next) {
  
  // axios.get('https://api.douban.com/v2/book/search', {
  //   params: {
  //     q: 1
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });


  //res.render('index', { title: 'Express' });
  res.send('sbok');
});

module.exports = router;
