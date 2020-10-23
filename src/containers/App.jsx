import React from 'react';
import Header from '../components/Header'
import AdvanceForSyndication from '../views/AdvanceForSyndication/AdvanceForSyndication'

import '../assets/fonts/MuseoSans-100.otf'
import '../assets/styles/App.scss';

const App = () => (
	<div className="app">
		<Header/>
		<AdvanceForSyndication/>
	</div>
)

export default App;