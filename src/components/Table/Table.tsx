import React from "react";

import questions from '../../questions.json';
import TableRow from "./TableRow"

import './Table.css';

interface TableProps {
	questionID: number;
}

interface Question {
	text: string;
	answers: {
		text: string;
		points: number;
	}[],
}

interface State {
	question: Question | null;
}

export default class Table extends React.Component<TableProps, State> {
	composeRows = () => {
		let rows = []
		let question = questions[this.props.questionID];
		for (let i = 0; i < question.answers.length; i++) {
			rows.push(<TableRow text={question.answers[i].text} points={question.answers[i].points}/>)
		}

		return rows;
	}

	render = () => {
		return (
			<table>
				<tbody>
					{this.composeRows()}
				</tbody>
			</table>
		)
	}
}