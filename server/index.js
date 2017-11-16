const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
var cors = require('cors')

const typeDefs = `
type Query {
  hello(name: String): String!
}
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const myGraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })
const PORT = 4000
const app = express()

// app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) 

console.log(`Server listening on http://localhost:${PORT} ...`)
app.listen(PORT)