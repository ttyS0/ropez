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

import CustomRow from './CustomBox8/CustomRow.js';

class CustomBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s0: 0,
      s1: 0,
      s2: 0,
      s3: 0,
      s4: 0,
      s5: 0,
      s6: 0,
      s7: 0,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.s0 != nextState.s0) | (this.state.s1 != nextState.s1) | (this.state.s2 != nextState.s2) | (this.state.s3 != nextState.s3) | (this.state.s4 != nextState.s4) | (this.state.s5 != nextState.s5) | (this.state.s6 != nextState.s6) | (this.state.s7 != nextState.s7);
  }
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <CustomRow callback={(v) => {
          this.setState({
            s0: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s1: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s2: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s3: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s4: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s5: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s6: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s7: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7];
            this.props.callback(arr);
          });
        }} />
      </View>
    );
  }
}

CustomBox.defaultProps = {
  callback: () => {},
};

export default CustomBox;