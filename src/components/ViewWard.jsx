import React, { Component } from 'react';
import WardService from '../services/WardService';

class ViewWard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ward: {}
        }
    }

    componentDidMount(){
        WardService.getWardById(this.state.id).then(res => {
            this.setState({ward: res.data});
        });
    }

    cancel () {
        this.props.history.push('/wards');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Informacje o podopiecznym</h3>
                    <div className="card-body">
                        <div className="row">
                            <label><b>Imię: </b>{ this.state.ward.name } </label>
                            <label><b>Nazwisko: </b>{ this.state.ward.surname }</label>
                            <label><b>Imię trenera: </b>{ this.state.ward.managerName }</label>
                            <label><b>Kod trenera: </b>{ this.state.ward.code }</label>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Powrót</button>
                </div>
            </div>
        )
    }
}

export default ViewWard;