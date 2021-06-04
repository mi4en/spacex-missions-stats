import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import logo from './logo.png'
import Launches from './components/Launches'
import LaunchDetails from './components/LaunchDetails'

function App() {
	return (
		<Router>
			<div className='container'>
				<img
					src={logo}
					alt='SpaceX'
					style={{ width: 300, display: 'block', margin: 'auto' }}
				/>
				<Route exact path='/' component={Launches} />
				<Route exact path='/launch/:flight_number' component={LaunchDetails} />
			</div>
		</Router>
	)
}

export default App
