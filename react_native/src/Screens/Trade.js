import * as React from 'react';
<<<<<<< HEAD
import {SafeAreaView, ScrollView } from 'react-native';
=======
import { SafeAreaView, FlatList,View } from 'react-native';
>>>>>>> c3cbcdecec22d9bd2741ab29ece26a8277b6ca3b
import { connect } from 'react-redux';
import { withTheme } from 'react-native-material-ui';
import { CustomStyles,Headers } from '../Constant';
import PTRView from 'react-native-pull-to-refresh';
<<<<<<< HEAD

=======
import { Header, TradeHeaderTab,   TabsTrade} from '../Components'
>>>>>>> c3cbcdecec22d9bd2741ab29ece26a8277b6ca3b

import { Header, TradeHeaderTab,  TabsTrade} from '../Components'

class TradeScreen extends React.PureComponent {
	constructor(props) {
		super(props)
	}
	state = {
		currentTab: 0,
        tabData:Headers[0],
		history:[],
		history_finish:false,
		darkmode:true,
		triggerRefresh : false
	}
	
	static getDerivedStateFromProps(props, state) {
		return {
			balance:props.balance,
			darkmode:props.darkmode,
			get_address:props.get_address,
			price:props.price,
		};
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.history != nextState.history ||
			   this.state.triggerRefresh != nextState.triggerRefresh ||
			   this.state.currentTab != nextState.currentTab ||
			   this.state.darkmode != nextState.darkmode ||

			   this.state.triggerRefresh != nextState.triggerRefresh;
	}
	
	refresh(){
		this.setState({
			triggerRefresh:true
		},() => {
			setTimeout(() => {
				this.setState({
					triggerRefresh:false
				})
			},1000)
		})
	}
  render() {
		const { currentTab,balance,darkmode } = this.state;
		
		
		const themeBG = darkmode?'rgb(33,33,33)':'white'
		const txtColor = darkmode?'white':'black';
		const renderItem = ({ item }) => (
			<View>
				<Header darkmode={darkmode} />
				<TradeHeaderTab darkmode={darkmode} 
					balance={balance} 
					activeTab={currentTab}
					onPressTab={(index, tab) => this.setState({currentTab:index,tabData:tab})}/>
			
				<TabsTrade tabData={this.state.tabData} trigger={this.state.triggerRefresh}/>
			</View>
			);
    return (
      <SafeAreaView style={{...CustomStyles.container, backgroundColor: themeBG }}>
<<<<<<< HEAD
          <PTRView onRefresh={this.refresh} >
			  <ScrollView showsVerticalScrollIndicator={false}>
				  <Header darkmode={darkmode} />
					<TradeHeaderTab darkmode={darkmode} 
						balance={balance} 
						activeTab={currentTab}
						onPressTab={(index, tab) => this.setState({currentTab:index,tabData:tab})}/>
				
				    <TabsTrade tabData={this.state.tabData} trigger={this.state.triggerRefresh}/>
			</ScrollView>
=======
          <PTRView onRefresh={()=>this.refresh()} >
			<FlatList
                data={[1]}
                renderItem={renderItem}
            />
>>>>>>> c3cbcdecec22d9bd2741ab29ece26a8277b6ca3b
		</PTRView>
	  </SafeAreaView>
    );
  }

}



function mapStateToProps(state) {
  return {
		balance: state.Auth.balance,
		darkmode: state.Auth.darkmode,
		get_address:state.Auth.get_address,
		price:state.Auth.price,
  };
}

export default connect(mapStateToProps, {  })(withTheme(TradeScreen));
