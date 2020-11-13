const axios = require('axios')
const {
  query
} = require('graphqurl')

axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  const users = res.data

  users.map(user => {
    query({
      query: `mutation { insert_user(objects: {id: ${user.id}, name: "${user.name}"}) { returning {id name}} }`,
      endpoint: 'http://localhost:8080/v1/graphql',
      headers: {
        'x-access-key': 'postgrespassword',
      }
    }).catch(err => console.log(err.message))
  })
})
