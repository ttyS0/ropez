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
      s8: false,
      s9: false,
      s10: false,
      s11: false,
      s12: false,
      s13: false,
      s14: false,
      s15: false,
      value: 0,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.s0 != nextState.s0) || (this.state.s1 != nextState.s1) || (this.state.s2 != nextState.s2) || (this.state.s3 != nextState.s3) || (this.state.s4 != nextState.s4) || (this.state.s5 != nextState.s5) || (this.state.s6 != nextState.s6) || (this.state.s7 != nextState.s7)
        || (this.state.s8 != nextState.s8) || (this.state.s9 != nextState.s9) || (this.state.s10 != nextState.s10) || (this.state.s11 != nextState.s11) || (this.state.s12 != nextState.s12) || (this.state.s13 != nextState.s13) || (this.state.s14 != nextState.s14) || (this.state.s15 != nextState.s15);
  }
  toggle(index, value) {
    switch(index) {
      case 0:
        this.setState({
          s0: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 8:
        this.setState({
          s8: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 9:
        this.setState({
          s9: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 10:
        this.setState({
          s10: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 11:
        this.setState({
          s11: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 12:
        this.setState({
          s12: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 13:
        this.setState({
          s13: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 14:
        this.setState({
          s14: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
          }, () => {
            this.props.callback(this.state.value);
          });
        });
        break;
      case 15:
        this.setState({
          s15: value,
        }, () => {
          this.setState({
            value: this.state.s15 + this.state.s14 * 2 + this.state.s13 * 4 + this.state.s12 * 8 + this.state.s11 * 16 + this.state.s10 * 32 + this.state.s9 * 64 + this.state.s8 * 128 + this.state.s7 * 256 + this.state.s6 * 512 + this.state.s5 * 1024 + this.state.s4 * 2048 + this.state.s3 * 4096 + this.state.s2 * 8192 + this.state.s1 * 16384 + this.state.s0 * 32768,
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
          <View style={{width: 20, height: 20, backgroundColor: this.state.s0 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 1, !this.state.s1)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s1 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 2, !this.state.s2)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s2 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 3, !this.state.s3)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s3 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 4, !this.state.s4)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s4 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 5, !this.state.s5)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s5 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 6, !this.state.s6)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s6 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 7, !this.state.s7)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s7 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 8, !this.state.s8)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s8 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 9, !this.state.s9)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s9 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 10, !this.state.s10)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s10 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 11, !this.state.s11)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s11 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 12, !this.state.s12)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s12 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 13, !this.state.s13)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s13 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 14, !this.state.s14)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s14 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            style={{ margin: 2, }}
            onPress={this.toggle.bind(this, 15, !this.state.s15)}>
          <View style={{width: 20, height: 20, backgroundColor: this.state.s15 ? '#000' : '#FFF', borderColor: '#CCC', borderWidth: 1, }}>
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