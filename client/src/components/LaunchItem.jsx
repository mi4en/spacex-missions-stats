import React from 'react'
import PropTypes from 'prop-types'

const LaunchItem = ({
	launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
	return (
		<div className='card card-body mb-3'>
			<div className='row'>
				<div className='col-md-9'>
					<h4>
						Mission:{' '}
						<span className={launch_success ? 'text-success' : 'text-danger'}>
							{mission_name}
						</span>
					</h4>
					<p>Date: {launch_date_local}</p>
				</div>
				<div className='col-md-3'>
					<button className='btn btn-secondary'>Launch Details</button>
				</div>
			</div>
			{/* <p>{flight_number}</p>
			<p>{launch_date_local}</p>
			<p>{launch_success ? 'success' : 'failed'}</p> */}
		</div>
	)
}

LaunchItem.propTypes = {
	launch: PropTypes.object.isRequired,
}

export default LaunchItem
