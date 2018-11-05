import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        //temps will be an array of all the temps that come with cityData.
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        console.log(temps);
        return (
          <tr key={name}>
              <td>{name}</td>
              <td><Chart data={temps} unit="ºk" color="orange" /></td>
              <td><Chart data={pressures} unit="hPa" color="green" /></td>
              <td><Chart data={humidities} unit="%" color="black" /></td>
          </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/**
 * We are using state.weather because we assigned the WeatherReducer to a weather key in reducers.index (combinedReducers)
 *
 * @param state
 * @returns {{weather: *|Function}}
 */
function mapStateToProps({ weather }) {
    //placing { weather } instead of state in 'mapStateToProps({ weather })' is the same as receiving weather as parameter
    // and doing 'const weather = state.weather'. And if we have weather: weather as key-value pair we can do ->
    return { weather };
}

//We are exporting the connected version of WeatherList (for state's sake).
export default connect(mapStateToProps)(WeatherList);