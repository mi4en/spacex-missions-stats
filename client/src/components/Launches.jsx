import React from 'react'
import { gql, useQuery } from '@apollo/client'

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`

const Launches = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>
	console.log('data: ', data)

	return (
		<div>
			<h1 className='display-4 my-3'>Launches</h1>
			<div>
				{data.launches.map(launch => (
					<div>
						<p>{launch.flight_number}</p>
						<p>{launch.mission_name}</p>
						<p>{launch.launch_date_local}</p>
						<p>{launch.launch_success}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Launches
