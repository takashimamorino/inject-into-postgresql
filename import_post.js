const {
  query
} = require('graphqurl')

query({
  query: 'query { post_by_pk(id: 10) { userId title id userId } }',
  endpoint: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-access-key': 'postgrespassword',
  }
}).then((res) => console.log(res.data.post_by_pk))
