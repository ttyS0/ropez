import BluetoothSerial from 'react-native-bluetooth-serial';

class Helper {
    constructor(props) {
        super(props);
    }
    SetColor(r, g, b) {
        return this.SendMessage(`COLOR=${r},${g},${b}`)
    }
    SetText(text) {
        return this.SendMessage(`TEXT=${text}`);
    }
    SendMessage(msg) {
        return BluetoothSerial.write(msg);
    }
}