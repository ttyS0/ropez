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

import Modal from 'react-native-modalbox';
import BluetoothSerial from 'react-native-bluetooth-serial';
import CustomBox8 from './components/CustomBox8.js';
import CustomBox16 from './components/CustomBox16.js';
import Characters from './characters.js';
import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker'
import { Buffer } from 'buffer';
global.Buffer = Buffer;
const iconv = require('iconv-lite');

const Button = ({ label, onPress }) =>
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{ color: '#fff' }}>{label}</Text>
  </TouchableOpacity>;
let custom =  [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
class RopeZ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      discovering: false,
      available: true,
      devices: [],
      device: null,
      //color1: '#FFFFFF',
      //color: '#FFFFFF',
      mode1: true,
      mode2: true,
      text1: '',
      custom1: [0, 0, 0, 0, 0, 0, 0, 0],
      text2: '',
      custom2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      music: '',
      color1: '#FFFFFF',
      color2: '#FFFFFF',
      connected: false,
    };
  }
  componentDidMount() {
    this.disconnect();
  }
  apply() {
    let result = '';
    if(this.state.mode1) {
      //alert('SET BUFFER1='+this.state.custom.join(' ') + '\n');
      result += ('SET BUFFER1='+this.state.custom1.join(' ') + ' /\n');
    } else {
      //alert('SET BUFFER2=' + this.getBuffer(this.state.text) + '\n');
      result += ('SET BUFFER1=' + this.getBuffer(this.state.text1) + '\n')
    }
    if(this.state.mode2) {
      //alert('SET BUFFER1='+this.state.custom.join(' ') + '\n');
      result += ('SET BUFFER2='+this.state.custom2.join(' ') + ' /\n');
    } else {
      //alert('SET BUFFER2=' + this.getBuffer(this.state.text) + '\n');
      result += ('SET BUFFER2=' + this.getBuffer(this.state.text2) + '\n')
    }
    result += ('SET COLOR1=' + this.state.color1.slice(1) + '\n');
    result += ('SET COLOR2=' + this.state.color2.slice(1) + '\n');
    this.sendMessage(result);
  }
  getBuffer(str) {
    let result = '';
    let i = 0;
    for(i = 0; i < str.length; i++) {
      let t = Characters[str.charAt(i)];
      result = result + t.join(' ') + ' /';
    }
    return result;
  }
  openText(id) {
    switch(id)
    {
      case 1:
        this.textModal1.open();
        break;
      case 2:
        this.textModal2.open();
        break;
    }
  }
  openColor(id) {
    switch(id)
    {
      case 1:
        this.colorModal1.open();
        break;
      case 2:
        this.colorModal2.open();
        break;
    }
  }
  writePackets(message, packetSize = 64) {
    const toWrite = iconv.encode(message, 'cp852');
    const writePromises = [];
    const packetCount = Math.ceil(toWrite.length / packetSize);

    for (var i = 0; i < packetCount; i++) {
      const packet = new Buffer(packetSize);
      packet.fill(' ');
      toWrite.copy(packet, 0, i * packetSize, (i + 1) * packetSize);
      writePromises.push(BluetoothSerial.write(packet));
    }
  }
  sendMessage(msg) {
    if(!this.state.connected) {
      ToastAndroid.show('您还没有连接到 RopeZ 设备。', ToastAndroid.LONG);
    } else {
      BluetoothSerial.write(msg)
      .catch((err) => ToastAndroid.show(err, ToastAndroid.LONG))
    }
  }
  /*
  sendMessage(msg) {
    if(!this.state.connected) {

    }
  }
  */
  connect() {
    let counter = 0;
    this.setState({
      available: false
    }, () => {
      BluetoothSerial.isEnabled()
      .then((v) => v ? v : BluetoothSerial.enable())
      .then(() => {
        return new Promise((resolve, reject) => {
		      let timer = setInterval((res) => {
            if(counter >= 8000)
            {
              ToastAndroid.show("连接失败", ToastAndroid.SHORT);
              this.setState({
                available: true,
              })
              reject(clearInterval(timer));
            }
            else
              counter += 100;
            BluetoothSerial.isEnabled()
            .then((v) => {
              return v ? resolve(clearInterval(timer)) : null;
            })
		      }, 100);
	      });
      })
      .then(() => BluetoothSerial.list())
      .then((devices) => {
        devices.map((device) => {
          if(device.name == 'RopeZ') {
            this.setState({
              device: device,
            });
            return BluetoothSerial.connect(device.id);
          }
        })
        return 0;
        /*
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
        */
      })
      .catch(() => {
        ToastAndroid.show("连接失败", ToastAndroid.SHORT);
        this.setState({
          available: true,
        })
        reject();
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 3000);
	      });
      })
      .then(() => BluetoothSerial.isConnected())
      .then((v) => {
        return new Promise((resolve, reject) => {
          if(v == false) {
            ToastAndroid.show("连接失败", ToastAndroid.SHORT);
            this.setState({
              available: true,
            })
            reject();
          } else {
            this.setState({
              connected: true,
              available: true,
            })
            resolve();
          }
	      });
      })
      .catch((err) => console.log(err));
    });
  }
  
  disconnect() {
    BluetoothSerial.disconnect()
    .then(() => this.setState({ connected: false }))
    .then(() => BluetoothSerial.disable())
    .catch((err) =>console.log(err));
  }

  calcSum(arr) {
    let i = 0, result = 0;
    for(i = 0; i < 8; i++) {
      result += arr[i] * Math.pow(2, 8 - 1 - i);
    }
    return result;
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
          <Text style={{flex: 3, textAlign: 'center'}}>显示(8*8)</Text>
          <TouchableOpacity style={{flex: 3}} onPress={this.openText.bind(this, 1)}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            {
              this.state.mode1 ? "用户自定义" : this.state.text1
            }
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 3}} onPress={this.openColor.bind(this, 1)}>
            <View style={{height: 20, backgroundColor: this.state.color1}} />
          </TouchableOpacity>
        </View>
        <View style={styles.showString}>
          <Text style={{flex: 3, textAlign: 'center'}}>显示(16*16)</Text>
          <TouchableOpacity style={{flex: 3}} onPress={this.openText.bind(this, 2)}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            {
              this.state.mode2 ? "用户自定义" : this.state.text2
            }
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 3}} onPress={this.openColor.bind(this, 2)}>
            <View style={{height: 20, backgroundColor: this.state.color2}} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.applyButton, { backgroundColor: '#283593' }]}
            onPress={this.apply.bind(this)}
            disabled={!this.state.available && this.state.connected}
            >
            <Text style={{ color: '#fff', textAlign: 'center'}}>应用</Text>
          </TouchableOpacity>
        </View>
        <Text>
        {
          (() => {
            let result = '';
            if(this.state.mode1) {
              //alert('SET BUFFER1='+this.state.custom.join(' ') + '\n');
              result += ('SET BUFFER1='+this.state.custom1.join(' ') + ' /\n');
            } else {
              //alert('SET BUFFER2=' + this.getBuffer(this.state.text) + '\n');
              result += ('SET BUFFER1=' + this.getBuffer(this.state.text1) + '\n')
            }
            if(this.state.mode2) {
              //alert('SET BUFFER1='+this.state.custom.join(' ') + '\n');
              result += ('SET BUFFER2='+this.state.custom2.join(' ') + ' /\n');
            } else {
              //alert('SET BUFFER2=' + this.getBuffer(this.state.text) + '\n');
              result += ('SET BUFFER2=' + this.getBuffer(this.state.text2) + '\n')
            }
            result += ('SET COLOR1=' + this.state.color1.slice(1) + '\n');
            result += ('SET COLOR2=' + this.state.color2.slice(1) + '\n');
            return result;
          })()
        }
        </Text>
        <Modal ref={(ref) => {this.colorModal1 = ref;}}>
          <View style={{flex: 1, padding: 15}}>
            <TriangleColorPicker
              defaultColor={'#FFFFFF'}
              color={this.state.color1}
              onColorSelected={color => {this.setState({color1: fromHsv(color)});}}
              onOldColorSelected={color => {this.setState({color1: fromHsv(color)});}}
              onColorChange={color => {this.setState({color1: fromHsv(color)});}}
              style={{flex: 1}}
            />
          </View>
        </Modal>
        <Modal ref={(ref) => {this.colorModal2 = ref;}}>
          <View style={{flex: 1, padding: 15}}>
            <TriangleColorPicker
              defaultColor={'#FFFFFF'}
              color={this.state.color2}
              onColorSelected={color => {this.setState({color2: fromHsv(color)});}}
              onOldColorSelected={color => {this.setState({color2: fromHsv(color)});}}
              onColorChange={color => {this.setState({color2: fromHsv(color)});}}
              style={{flex: 1}}
            />
          </View>
        </Modal>
        <Modal ref={(ref) => {this.textModal1 = ref;}}>
          <View style={styles.textContainer}>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>显示类型</Text>
              </View>
              <View style={styles.rowValue}>
                <Text>文字</Text>
                <Switch onValueChange={(value) => {
                  this.setState({
                    mode1: value,
                  })
                }}
                value={this.state.mode1} />
                <Text>自定义字模</Text>
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>文字设置</Text>
              </View>
              <View style={styles.rowValue}>
                <TextInput
                  style={{flex:7, height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                />
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>自定义</Text>
              </View>
              <View style={styles.rowValue}>
              </View>
            </View>
            <View style={styles.customContainer}>
              <CustomBox8 callback={(val) => this.setState({custom1: val})} />
              <Text>{this.state.custom1.join(',')}</Text>
            </View>
          </View>
        </Modal>
        <Modal ref={(ref) => {this.textModal2 = ref;}}>
          <View style={styles.textContainer}>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>显示类型</Text>
              </View>
              <View style={styles.rowValue}>
                <Text>文字</Text>
                <Switch onValueChange={(value) => {
                  this.setState({
                    mode2: value,
                  })
                }}
                value={this.state.mode2} />
                <Text>自定义字模</Text>
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>文字设置</Text>
              </View>
              <View style={styles.rowValue}>
                <TextInput
                  style={{flex:7, height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                />
              </View>
            </View>
            <View style={styles.rowItem}>
              <View style={styles.rowField}>
                <Text style={styles.fieldText}>自定义</Text>
              </View>
              <View style={styles.rowValue}>
              </View>
            </View>
            <View style={styles.customContainer}>
              <CustomBox16 callback={(val) => this.setState({custom2: val})} />
              <Text>{this.state.custom2.join(',')}</Text>
            </View>
          </View>
        </Modal>
      </View>
      
    );
    /*
    return (
      <View style={styles.container}>
        <CustomRow callback={(val) => {this.setState({val})}}></CustomRow>
        <Text>{this.state.val && this.state.val}</Text>

        <CustomBox callback={(val) => console.log(val)} />
      </View>
    );
    */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  showString: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    alignSelf: 'center',
  },
  applyButton: {
    margin: 10,
    padding: 5,
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
  },
  textContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
  },
  rowItem: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 0,
  },
  rowField: {
    flex: 3,
  },
  rowValue: {
    flex: 7,
    flexDirection: 'row',
  },
  fieldText: {
    textAlign: 'center',
  },
  customContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBox: {
    //flex: 1,
    flexDirection: 'column',
  },
  customRow: {
    //flex: 1,
    flexDirection: 'row',
  },
  customItem: {
    margin: 2,
    height: 40,
    width: 40,
  }
})

AppRegistry.registerComponent('RopeZ', () => RopeZ);
