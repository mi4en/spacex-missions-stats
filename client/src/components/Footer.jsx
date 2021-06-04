import React from 'react'

const Footer = () => {
	return (
		<footer className='footer sticky-bottom mt-3 p-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						<a href='https://mario-nikolov.com'>Mario Nikolov</a>
						<span>&copy; {new Date().getFullYear()}. App built with </span>

						<a href='https://reactjs.org' className='mr-2'>
							React
						</a>
						<a href='https://expressjs.com' className='mr-2'>
							Node-Express
						</a>
						<a href='https://graphql.org' className='mr-2'>
							GraphQL
						</a>
						<a href='https://apollographql.com' className='mr-2'>
							GraphQL
						</a>
					</div>

					<div className='col-md-4 mt-sm-2 mt-md-0'>
						<a href='https://docs.spacexdata.com/' className='mr-2 '>
							Data powered by the SpaceX API
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
