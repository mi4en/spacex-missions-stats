const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const app = express()

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
