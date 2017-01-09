import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  View,
  Platform,
  Picker,
  Switch
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial';
import { Buffer } from 'buffer';
global.Buffer = Buffer;
const iconv = require('iconv-lite');

const Button = ({ label, onPress }) =>
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{ color: '#fff' }}>{label}</Text>
  </TouchableOpacity>;

class RopeZ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      discovering: false,
      available: true,
      devices: [],
      device: null,
      connected: false,
    };
  }

  componentDidMount() {
    this.disconnect();
  }

  connect() {
    this.setState({
      available: false
    }, () => {
      BluetoothSerial.isEnabled()
      .then((v) => v ? v : BluetoothSerial.enable())
      .then(() => {
        return new Promise((resolve, reject) => {
		      setInterval((res) => {
              BluetoothSerial.isEnabled()
              .then((v) => {
                return v ? resolve() : null;
              })
		      }, 100);
	      });
      })
      .then(() => BluetoothSerial.list())
      .then((devices) => {
        return Promise.all(devices.map((device) => {
          if(device.name == 'RopeZ') {
            this.setState({
              device: device,
            });
            return BluetoothSerial.connect(device.id);
          }
          else
          {
            return 0;
          }
        }));
      })
      .then((device) => {
        if(device != 0)
        {
          return this.setState({
            connected: true,
            available: true,
          });
        }
        else
        {
          return false;
        }
      })
      .then()
      .catch((err) => console.log(err));
    });
  }

  disconnect() {
    BluetoothSerial.disconnect()
    .then(() => this.setState({ connected: false }))
    .then(() => BluetoothSerial.disable())
    .catch((err) =>console.log(err));
  }

  render() {
    const buttonText = (this.state.connected) ? `断开 RopeZ  <${this.state.device.id}>` : '连接到 RopeZ';
    const buttonColor = (this.state.connected) ? '#FF5722' : '#66BB6A';
    return(
      <View style={styles.container}>
        <View>
          <ToolbarAndroid
            style={styles.toolbar}
            title={'RopeZ Assistant'}
            titleColor={'#FFFFFF'}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={this.state.connected ? this.disconnect.bind(this) : this.connect.bind(this)}
            disabled={!this.state.available}
            >
            <Text style={{ color: '#fff' }}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>显示字符串</Text>
          <TextInput
            style={{flex:7, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>音乐</Text>
          <Picker
            style={{flex: 7}}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="千本樱" value="java" />
            <Picker.Item label="致爱丽丝" value="js" />
          </Picker>
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>统计</Text>
          <Text style={{flex: 7, fontWeight: 'bold', textAlign: 'center'}}>今天你跳了<Text style={{color: '#F00'}}>30</Text>下</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  showString: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    alignSelf: 'center',
  },
  toolbar: {
    height: 50,
    backgroundColor: '#3F51B5',
  },
  enableInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  connectionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  connectionInfo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#238923',
  },
  listContainer: {
    marginTop: 15,
    borderColor: '#ccc',
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  listItem: {
    flex: 1,
    padding: 25,
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  button: {
    margin: 5,
    padding: 25,
  }
})

AppRegistry.registerComponent('RopeZ', () => RopeZ);
