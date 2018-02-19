import React, { Component } from 'react';
class Callapi extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            tick: ''
        }
        this.getApiInfo = this.getApiInfo.bind(this);
    }

    getApiInfo() {
        axios
            .post("/api/getApiInfo")
            .then(result => {
                return this.setState({})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (

            <div>
                <div className="container">

                </div>

                <input
                    onChange={event => {
                        this.setState({ location: event.target.value })
                    }} />
                <button onClick={this.getApiData}> Get Api Data </button>

                <h3> { /*     */} </h3>
            </div>
        )
    }
}
export default Callapi