import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client'

import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

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

	// In the SpaceX API there are two launches with the same flight number - elements 110 and 111, that is why here we remove the last element of the arr, so we dont get React errors for same key in the map func
	const launches = data.launches.slice(0, 110)

	return (
		<Fragment>
			<h1 className='display-4 my-3'>Launches</h1>
			<MissionKey />
			<Fragment>
				{launches.map(launch => (
					<LaunchItem key={launch.flight_number} launch={launch} />
				))}
			</Fragment>
		</Fragment>
	)
}

export default Launches
