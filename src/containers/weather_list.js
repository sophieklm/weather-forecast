import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="&deg;C" /></td>
        <td><Chart data={pressure} color="purple" units="hPa" /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
      </tr>
    );
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;C)</th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%) </th>
          </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
