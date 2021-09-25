import React from 'react';

import './Counter.css';

interface CounterProps {
	points: number;
	strikes: number;
	position: string;
	updatePoints: (points: number, team: string) => void;
}

export default function Counter(props: CounterProps) {

	const onChange = (event: any) => {
		props.updatePoints(event.target.value, props.position);
	};

	return(
		<div>
			<input onChange={onChange} className={`counter ${props.position}`} type="text" value={props.points}/>
		</div>
	);
}