import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Picker,
  Switch
} from 'react-native';

class CustomRow extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
          key={j}
          style={{
            margin: 2,
            height: 40,
            width: 40,
          }}
          onPress={this.toggle.bind(this, j, i , !val)}>
        <View style={{width: 40, height: 40, backgroundColor: bg, borderColor: '#CCC', borderWidth: 1,}}>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}