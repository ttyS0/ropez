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

import CustomRow from './CustomBox16/CustomRow.js';

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
      s8: 0,
      s9: 0,
      s10: 0,
      s11: 0,
      s12: 0,
      s13: 0,
      s14: 0,
      s15: 0,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.s0 != nextState.s0) || (this.state.s1 != nextState.s1) || (this.state.s2 != nextState.s2) || (this.state.s3 != nextState.s3) || (this.state.s4 != nextState.s4) || (this.state.s5 != nextState.s5) || (this.state.s6 != nextState.s6) || (this.state.s7 != nextState.s7)
        || (this.state.s8 != nextState.s8) || (this.state.s9 != nextState.s9) || (this.state.s10 != nextState.s10) || (this.state.s11 != nextState.s11) || (this.state.s12 != nextState.s12) || (this.state.s13 != nextState.s13) || (this.state.s14 != nextState.s14) || (this.state.s15 != nextState.s15);
  }
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <CustomRow callback={(v) => {
          this.setState({
            s0: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            console.log(arr);
            console.log(v);
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s1: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s2: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s3: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s4: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s5: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s6: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s7: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s8: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s9: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s10: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s11: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s12: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s13: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s14: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
            this.props.callback(arr);
          });
        }} />
        <CustomRow callback={(v) => {
          this.setState({
            s15: v,
          }, () => {
            let arr = [this.state.s0, this.state.s1, this.state.s2, this.state.s3, this.state.s4, this.state.s5, this.state.s6, this.state.s7, this.state.s8, this.state.s9, this.state.s10, this.state.s11, this.state.s12, this.state.s13, this.state.s14, this.state.s15];
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