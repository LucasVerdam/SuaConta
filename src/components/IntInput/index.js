import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../HeaderFooter/styles';

export default class IntInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  changeText(text) {
    let newText = text.replace(".", "");
    this.setState({ text: newText });
  }

  render() {
    return (

      <TextInput
        style={{
          justifyContent: 'flex-start',
          width: 100,
          height: 50,
          borderRadius: 40,
          backgroundColor: '#999',
          paddingHorizontal: 15,
          marginHorizontal: 15
        }}
        placeholder="/?"
        keyboardType='numeric'
        onChangeText={(text) => this.changeText(text)}
        value={this.state.text}
      />

    );
  }
}