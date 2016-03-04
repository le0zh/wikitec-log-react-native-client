const React = require('react-native');
const Colors = require('../Common/Colors');
const CommonComponents = require('../Common/CommonComponents');

const {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
	TouchableOpacity,
} = React;

const LogCell = React.createClass({
	propTypes: {
		ghEvent: React.PropTypes.object,
	},

	cellAction() {
		const rowData = this.props.rowData;

		//console.log(rowData.type);
	},

	render() {
		const {
			rowData
		} = this.props;

		return (
			<TouchableHighlight underlayColor={'#eee'} onPress={this.cellAction()}>
                <View style={styles.cellContentView}>
                	<View style={styles.messageView}>
                		<Text style={{ color:'#212121', fontSize:12,}}>{rowData.message}</Text>
                	</View>
                    <View style={styles.textDesContainer}>
						<Text style={{color:'#727272', fontSize:12,}}>{rowData.systemAlias}</Text>
                    	<Text style={{color:'#727272', fontSize:12,}}>{rowData.time}</Text>
                    </View>
            	</View>
			</TouchableHighlight>
		);
	}
});

const styles = StyleSheet.create({
	cellContentView: {
		flexDirection: 'column',
		flex: 1,
		alignItems: 'stretch',
	},

	messageView: {
		margin: 10,
		height: 45,
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom: 1,
	},

	textDesContainer: {
		flexDirection: 'row',
		margin: 10,
		justifyContent: 'space-between'
	},
});

module.exports = LogCell;