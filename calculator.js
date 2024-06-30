// CalculatorScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import Display from './Display';

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
    <Button key={buttonValue} onPress={this.handlePress} value={buttonValue} />
  );

  render() {
    const { input, result } = this.state;
    return (
      <View style={styles.calculatorContainer}>
        <Display input={input} result={result} />
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

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default CalculatorScreen;
