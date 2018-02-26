import React, { Component, PropTypes } from 'react'

import formatProps from '../../utils/format-props'

class Td extends Component {
	static defaultProps = {
		verticalAlign: 'top',
		horizontalAlign: 'left',
		align: 'left',
	}

	render() {
		const props = formatProps(this.props)
		return (
			<td {...props}>{this.props.children}</td>
		)
	}
}

export default Td