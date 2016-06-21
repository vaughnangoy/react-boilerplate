import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

class Index extends Component {

	render() {
		return (<div>react boilerplate setup</div>);
	}
}

function mapStateToProps(state) {
	return {
		filtered_state: state,
	};
}

export default connect(mapStateToProps)(Index);