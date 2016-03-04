import Platform from 'Platform'
import React, {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
}
from 'react-native'

import RefreshListView from '../Common/RefreshListView'
import WKService from '../../networkService/WKService'
import LogCell from './LogCell'
import SubSystemSelectComponent from '../SubSystemSelect/SubSystemSelectComponent'

const LogListComponent = React.createClass({
	filter: 'all',

	handleReloadData(response) {
		const body = response._bodyInit;
		const jsonResult = JSON.parse(body);

		return jsonResult;
	},

	reloadPath() {
		var base = WKService.logsPath();
		return `${base}${this.filter}`;
	},

	renderRow(rowData, sectionID, rowID, highlightRow) {
		console.log('render row', rowData.id);

		return (
			<LogCell key={rowData.id} rowData = {rowData} navigator={this.props.navigator}/>
		);
	},

	onSubSystemChange(newVal) {
		this.filter = newVal;
		this.refs.RefreshListView.reloadData();
	},

	render() {
		let marginTop = 44;
		if (Platform.OS === 'ios') {
			marginTop = 0;
		}

		return (
			<View style={{backgroundColor: '#fff', flex: 1}}>
				<SubSystemSelectComponent onSelectSubSystem={this.onSubSystemChange}></SubSystemSelectComponent>
				<RefreshListView
					style={{flex: 1}}
					ref= {'RefreshListView'}
					enablePullToRefresh={true}
					renderRow={this.renderRow}
					reloadPromisePath={this.reloadPath}
					handleReloadData={this.handleReloadData}
					navigator={this.props.navigator}
					maxPage={10}
					contentInset={{top: 64, left: 0, bottom: 49, right: 0}}
					contentOffset={{x:0, y: 0}}>
				</RefreshListView>
			</View>
		);
	}
});

module.exports = LogListComponent;