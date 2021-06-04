import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
// import { gql } from '@apollo/client'

import './index.css'
import App from './App'

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	// uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache(),
})

// client
// 	.query({
// 		query: gql`
// 			query GetRates {
// 				rates(currency: "USD") {
// 					currency
// 				}
// 			}
// 		`,
// 	})
// 	.then(result => console.log('RESULT: ', result))

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
