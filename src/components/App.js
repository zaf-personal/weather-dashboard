import React from 'react';
import CurrentWeather from './CurrentWeather';
import ExtendedWeather from './ExtendedWeather';
import openWeatherMap from '../api/openWeatherMap';

class App extends React.Component {
    state = {units: 'metric'}

    componentDidMount() {
        this.onTermSubmit('Montreal');
    }

    onTermSubmit = async term => {
        const response = await openWeatherMap.get('weather', {
            params: {
                q: term,
                units: this.state.units
            }
        });

        console.log(response.data);
    };

    render() {
        return (
            <div>
                <CurrentWeather />
                <ExtendedWeather />
            </div>
        );
    }
}

export default App;