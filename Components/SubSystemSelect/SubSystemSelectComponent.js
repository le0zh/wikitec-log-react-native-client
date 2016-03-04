import React, {
	View,
	Text,
	Picker
}
from 'react-native'

const subSystemList = [{
		key: 'all',
		text: '全部'
	}, {
		key: 'ims',
		text: '管理平台'
	}, {
		key: 'hcs',
		text: '服务系统'
	}, {
		key: 'crm',
		text: '客户系统'
	}, {
		key: 'mms',
		text: '物资管理系统'
	}, {
		key: 'lms',
		text: '职业培训系统'
	},

	{
		key: 'ims_tenants',
		text: '管理平台(管万家)'
	}, {
		key: 'hcs_tenants',
		text: '服务系统(管万家)'
	}, {
		key: 'crm_tenants',
		text: '客户系统(管万家)'
	}, {
		key: 'mms_tenants',
		text: '物资管理系统(管万家)'
	}, {
		key: 'lms_tenants',
		text: '职业培训系统(管万家)'
	},
];

const SubSystemSelectComponent = React.createClass({
	propTypes: {
		onSelectSubSystem: React.PropTypes.func,
		currentSubSystem: React.PropTypes.string,
	},

	getInitialState() {
		return ({
			currentSubSystem: this.props.currentSubSystem,
		})
	},

	onSelect(selected) {
		this.setState({
			currentSubSystem: selected
		});

		if (this.props.onSelectSubSystem) {
			this.props.onSelectSubSystem(selected);
		}
	},

	render() {
		const selectedSubSystem = this.state.currentSubSystem || subSystemList[0];

		return (
			<View style={{height: 50, backgroundColor: "#B6B6B6"}}>
				<Picker
					selectedValue={selectedSubSystem}
					onValueChange={this.onSelect}
					mode={'dropdown'}
				>
					{subSystemList.map((item, index)=>{
						return (
							<Picker.Item key={item.key} label={item.text} value={item.key}/>
						);
					})}
				</Picker>
			</View>
		);
	}
});

module.exports = SubSystemSelectComponent;