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
  constructor(props) {
    super(props);
    this.state = {
      s0: false,
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false,
      s6: false,
      s7: false,
      value: 0,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.s0 != nextState.s0) | (this.state.s1 != nextState.s1) | (this.state.s2 != nextState.s2) | (this.state.s3 != nextState.s3) | (this.state.s4 != nextState.s4) | (this.state.s5 != nextState.s5) | (this.state.s6 != nextState.s6) | (this.state.s7 != nextState.s7);
  }
  toggle(index, value) {
    switch(index) {
      case 0:
        this.setState({
          s0: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 1:
        this.setState({
          s1: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 2:
        this.setState({
          s2: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 3:
        this.setState({
          s3: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 4:
        this.setState({
          s4: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 5:
        this.setState({
          s5: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 6:
        this.setState({
          s6: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 7:
        this.setState({
          s7: value,
        }, () => {
          this.setState({
            value: this.state.s7 + this.state.s6 * 2 + this.state.s5 * 4 + this.state.s4 * 8 + this.state.s3 * 16 + this.state.s2 * 32 + this.state.s1 * 64 + this.state.s0 * 128,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 0, !this.state.s0)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s0 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 1, !this.state.s1)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s1 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 2, !this.state.s2)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s2 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 3, !this.state.s3)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s3 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 4, !this.state.s4)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s4 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 5, !this.state.s5)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s5 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 6, !this.state.s6)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s6 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 7, !this.state.s7)}>
          <View style={{width: 40, height: 40, backgroundColor: this.state.s7 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

CustomRow.defaultProps = {
  callback: () => {},
};

export default CustomRow;