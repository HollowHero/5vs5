import React from 'react';

import './Table.css';

interface TableRowProps {
	text: string;
	points: number;
}

export default function TableRow(props: TableRowProps) {

	const [visible, setVisibility] = React.useState(false);

	React.useEffect(() => {
		setVisibility(false);
	}, [props]);

	const onClick = () => {
		setVisibility(!visible);
	};

	return(
		<tr onClick={onClick}>
			<td>
				{visible ? props.text : ''}
			</td>
			<td className="points">
				{visible ? props.points : ''}
			</td>
		</tr>
	);
}



// export default class TableRow extends React.Component<TableRowProps, {}> {

// 	constructor(props: TableRowProps) {
// 		super(props);
// 	}

// 	onClick = () => {
// 		this.reveal()
// 	}

// 	render() {
// 		return (
// 			<tr>
// 				<td onClick={this.props.reveal}>
// 					{this.props.revealed ? this.props.text : ''}
// 				</td>
// 				<td className="Points">
// 					{this.props.revealed ? this.props.points : ''}
// 				</td>
// 			</tr>
// 		)
// 	}
// }