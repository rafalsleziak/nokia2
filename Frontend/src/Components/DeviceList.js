import React, { Component } from 'react';
import Device from './Device';
import style from '../style';

class DeviceList extends Component {
  render() {
    console.log(this.props);
    let deviceNodes = this.props.data.map(device => {
        return (
          <Device
            name={ device.name }
            numLeft={device.numLeft}
            uniqueID={ device['_id'] }
            onDeviceDelete={this.props.onDeviceDelete}
            onDeviceEdit={this.props.onDeviceEdit}
            key={ device.id }>
          </Device>
        )
      })
      return (
        <div style={ style.deviceList }>
          { deviceNodes }
        </div>
      )
    }
}

export default DeviceList;
