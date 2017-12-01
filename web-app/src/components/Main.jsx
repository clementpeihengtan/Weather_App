import React, {Component} from 'react';
import Nav from './Nav';
import axios from 'axios';

import {getWeatherData} from "../utils/data-api";

import "../index.css";
const BASE_URL = "http://localhost:3001/api/data";

class Main extends Component {
    constructor() {
        super();
        this.state = {data : []};
    }

    componentDidMount() {
        axios.get(BASE_URL)
        .then(({data}) => {
            this.setState({data : data});
        })
        .catch((err) => {})
    }

    render() {
        return (
            <div>
                <Nav />

                <h3 className="text-center">Weather Data</h3>
                <hr/>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Device ID</th>
                            <th>Timestamp</th>
                            <th>Temperature (°F)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((device, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td>{device.id}</td>
                                    <td>{device.time}</td>
                                    <td>{device.temperature}</td>
                                    <td>{device.humidity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Main;