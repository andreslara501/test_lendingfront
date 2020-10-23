import React from 'react';
import '../assets/styles/components/CircleProgress.scss';

const CircleProgress = (props) => {
	const divStyle = {
		borderColor: props.color
	};

	return (
		<div className={`progress-circle ${(Math.floor(props.percent) > 50)? 'over50' : ''} p${Math.floor(props.percent)}`}>
			<span>{Math.floor(props.percent)}%</span>
			<div className="left-half-clipper">
				<div className="first50-bar"></div>
				<div className="value-bar" style={divStyle}></div>
			</div>
		</div>
	)
}

export default CircleProgress;