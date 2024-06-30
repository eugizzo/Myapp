import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Welcome to <Text style={styles.eugeneText}>Eugene's</Text> Coffee Lovers
      </Text>
    </View>
    <Image 
      style={styles.image}
      source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvZmZlZXxlbnwwfHx8fDE2MjcwMzA0Mzk&ixlib=rb-1.2.1&q=80&w=1080' }}
    />
    <View style={styles.content}>
      <Text style={styles.contentText}>
        Discover the best coffee recipes, brewing tips, and coffee shop reviews.
      </Text>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <Text style={styles.menuButtonText}>Open Menu</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 <Text style={styles.eugeneText}>Eugene's</Text> Coffee Lovers</Text>
    </View>
  </ScrollView>
);

class CalculatorScreen extends React.Component {
  state = {
    input: '',
    result: '',
  };

  handlePress = (buttonValue) => {
    const { input } = this.state;

    if (buttonValue === '=') {
      this.setState({ result: eval(input).toString() });
    } else if (buttonValue === 'C') {
      this.setState({ input: '', result: '' });
    } else {
      this.setState({ input: input + buttonValue });
    }
  };

  renderButton = (buttonValue) => (
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => this.handlePress(buttonValue)}
    >
      <Text style={styles.buttonText}>{buttonValue}</Text>
    </TouchableOpacity>
  );

  render() {
    const { input, result } = this.state;
    return (
      <View style={styles.calculatorContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('*')}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('C')}
          {this.renderButton('0')}
          {this.renderButton('=')}
          {this.renderButton('/')}
        </View>
      </View>
    );
  }
}

const OtherScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Other Page</Text>
  </View>
);

const DrawerContent = ({ navigation }) => (
  <View style={{ flex: 1,  }}>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
    <Button title="Other" onPress={() => navigation.navigate('Other')} />
  </View>
);

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      <Drawer.Screen name="Other" component={OtherScreen} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'Calculator') {
              iconName = 'calculator';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Other') {
              iconName = 'more-horizontal';
              return <Feather name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6f4e37',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DrawerNavigator} />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6f4e37',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  eugeneText: {
    color: '#FFD700', // Gold color to make "Eugene" stand out
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: '#6f4e37',
    padding: 15,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    padding: 20,
    backgroundColor: '#6f4e37',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  displayContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 32,
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#6f4e37',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;
