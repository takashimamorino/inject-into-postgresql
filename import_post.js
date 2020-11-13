const axios = require('axios')
const {
  query
} = require('graphqurl')

axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => console.log(res.data))

// query({
//   query: 'mutation { insert_post(objects: {body: "body01", id: 11, title: "titile01", userId: 1}) { returning {body title id userId}} }',
//   endpoint: 'http://localhost:8080/v1/graphql',
//   headers: {
//     'x-access-key': 'postgrespassword',
//   }
// }).catch(err => console.log(err))
