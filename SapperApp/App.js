import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react/../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Icon} from 'react-native-elements';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { createStackNavigator, createTabNavigator } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-navigationibrary/Caches/typescript/2.9/node_modules/@types/react-navigation';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>Quotesla</Text>
        <Text>Build Your Vision</Text>
        <Button style={[styles.containerStyle]}
          title='HOME'
          onPress={() => this.props.navigation.navigate('Details')}
      />
      </View>
    );
  }
}
class DashboardBody extends React.Component {
  render() {
    return (
      <View style={styles.dashboardBody}>
        <Text>DASHBOARD</Text>
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <NavBar>
          <NavBarIOSLight/>
        </NavBar>
        <DashboardBody/>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#030d41',
    marginBottom: 10
  },
  containerStyle: {
    marginTop: 20
  },
  dashboardBody: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
