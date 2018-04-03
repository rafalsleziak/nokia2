import React, {Component} from 'react';
import Reservation from './Reservation';
import style from '../style';

class ReservationRow extends Component {
  render() {
    let reservationNameRow = this.props.data.map(reservation => {
      return (
        <Reservation
          startDate= {reservation.startDate}
          endDate={reservation.endDate}
          NumOfPeople={reservation.NumOfPeople}
          Options={reservation.Options}
          uniqueID={device['_id']}
          key={reservation.id}
        >
        </Reservation>
      )
    })
    return (

        <table style={style.deviceTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available devices</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>{reservationNameRow}</td>
            </tr>
          </tbody>
        </table>

    )
  }
}

export default DeviceRow;
