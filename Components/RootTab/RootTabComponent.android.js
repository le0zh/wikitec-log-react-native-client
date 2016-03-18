import React, {
	View,
	ScrollView,
	Text,
	StyleSheet
}
from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from './TabBar.android'
import LogListComponent from '../LogList/LogListComponent'

import Routes from '../Route'

const styles = StyleSheet.create({
	card: {
		borderWidth: 1,
		backgroundColor: '#fff',
		borderColor: 'rgba(0,0,0,0.1)',
		margin: 5,
		height: 150,
		padding: 15,
		shadowColor: '#ccc',
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	tabView: {
		flex: 1,
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0.01)',
	},
});

const RootTab = React.createClass({
	render() {
		return (
			<View style={{backgroundColor: 'white', flex: 1}}>
				<ScrollableTabView
					renderTabBar={() => <TabBar />}
					tabBarPosition={'bottom'}
					>
					<Routes initialRoute='logList' tabLabel={{iconName: 'android-home', tabName: '日志'}}></Routes>
				
			          <ScrollView tabLabel={{iconName: 'android-people', tabName: '租户'}} style={styles.tabView}>
			            <View style={styles.card}>
			              <Text>Friends</Text>
			            </View>
			          </ScrollView>
			          <ScrollView tabLabel={{iconName: 'android-clipboard', tabName: '统计'}} style={styles.tabView}>
			            <View style={styles.card}>
			              <Text>Messenger</Text>
			            </View>
			          </ScrollView>
			          <ScrollView tabLabel={{iconName: 'android-person', tabName: '我的'}} style={styles.tabView}>
			            <View style={styles.card}>
			              <Text>Notifications</Text>
			            </View>
			          </ScrollView>
				</ScrollableTabView>
			</View>
		);
	}
});

module.exports = RootTab;