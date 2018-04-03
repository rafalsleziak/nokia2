import React, {Component} from 'react';
import ReservationRow from './ReservationRow';
import REsForm from './ReservationForm';
import axios from 'axios';
import style from '../style';

class ReservationTable extends Component {
  constructor(props){
    super(props);
    this.state = {device: []};
    this.loadReservationFromServer = this.loadReservationFromServer.bind(this);
    this.handleReservationeSubmit = this.handleReservationeSubmit.bind(this);
    this.pollInterval = null;
  }

  loadReservationFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({reservation: res.data});
      })
  }

  componentDidMount() {
    this.loadReservationFromServer();
    if(!this.pollInterval){
      this.pollInterval = setInterval(this.loadReservationFromServer, this.props.pollInterval);
    }
  }

  componentWillUnmount() {
    this.pollInterval && clearInterval(this.pollInterval);
  }

  render() {
    return (
      <div style={style.deviceBox}>
        <h3 style={style.title}>Reservation:</h3>
      <DeviceRow
          data={this.state.device}>
      </DeviceRow>
      </div>

    )
  }
}

export default ReservationTable;
