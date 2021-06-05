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

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
