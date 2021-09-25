import React from 'react';

import Table from './components/Table/Table';
import Counter from './components/Counter/Counter';

import './App.css';

interface AppState {
	question: number;
	rightPoints: number;
	leftPoints: number;
}

export default class App extends React.Component<{}, AppState> {

	constructor(props: any) {
		super(props);
		this.state = {
			question: 0,
			rightPoints: 0,
			leftPoints: 0
		}
	}

	keyHandler = (event: React.KeyboardEvent) => {
		if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5') {
			this.setState({question: parseInt(event.key)-1});
		}
	}

	updatePoints = (points: number, team: string) => {
		if (team === 'right') {
			this.setState({rightPoints: points});
		} else {
			this.setState({leftPoints: points});
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header" tabIndex={0} onKeyDown={this.keyHandler}>
					<Table questionID={this.state.question}/>
					<Counter points={this.state.rightPoints} strikes={0} position="right" updatePoints={this.updatePoints}/>
					<Counter points={this.state.leftPoints} strikes={0} position="left" updatePoints={this.updatePoints}/>
				</header>
			</div>
		);
	}
};
