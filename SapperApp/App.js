import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

class NavBarIOSLight extends React.Component {
  render() {
    return (
      <NavBar>
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
        <NavTitle>
          {"App"}
        </NavTitle>
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }
}

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
      <View>
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
          <Text>HELLO</Text>
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
  }
});
