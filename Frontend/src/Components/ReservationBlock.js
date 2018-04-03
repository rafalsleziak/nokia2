import React, {Component} from 'react'
import axios from 'axios'
import DeviceList from './ReservationList';
import DeviceForm from './ReservationForm';
import style from '../style';

class ReservationBlock extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
    this.loadReservationFromServer = this.loadReservationFromServer.bind(this);
    this.handleReservationeSubmit = this.handleReservationeSubmit.bind(this);
    this.handleReservationDelete = this.handleReservationDelete.bind(this);
    this.handleReservationEdit = this.handleReservationEdit.bind(this);
  }

  loadReservationFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({data: res.data});
      })
  }

  handleReservationeSubmit(device){
    let reservation = this.state.data;
    reservation.id = Date.now();
    axios.post(this.props.url, device)
    .then((result) =>{
      this.setState({data:  [...reservation,result.data]});
    })
    .catch(err => {
      console.error(err);

    });
  }

  handleReservationDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        let reservation = this.state.data.filter((item) => item._id !== id )
          this.setState({data: reservation});
        console.log('reservation deleted');
      })
      .catch(err => {
        console.error(err);
      });
    }

    handleReservationEdit(id, reservation) {
      axios.put( `${this.props.url}/${id}`, reservation )
      .catch(err => {
        console.error(err);
      })
    }

  componentDidMount() {
    this.loadReservationFromServer();
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <div style={style.deviceBox}>
          <h3 style={style.title}>Devices:</h3>
        <DeviceForm
          onDeviceSubmit={this.handleReservationeSubmit} />
        <DeviceList
          onDeviceDelete = {this.handleDeviceDelete}
          onDeviceEdit={this.handleReservationEdit}
          data={this.state.data}>
        </DeviceList>
        </div>
    )
  }
}

export default ReservationBlock;
