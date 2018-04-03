import React, { Component } from "react";
import DataList from "./DataList";

import axios from "axios";

const swApiUrl = "https://swapi.co/api/";

class DataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(swApiUrl + "people")
            .then(response => {
                const { results } = response.data;
                this.setState({
                    people: results,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }
    render() {
        const { people, errMsg, loading } = this.state;
        if (loading) {
            return <div>...Loading</div>
        } else {
            if (errMsg) {
                return <p>Sorry, you're data is not available</p>
            } else {
                return (
                    <DataList people={people}></DataList>
                )
            }
        }
    }
}

export default DataContainer;