const path = require('path')
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const app = express()

// Allow CORS
app.use(cors())

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.use(express.static('build'))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
