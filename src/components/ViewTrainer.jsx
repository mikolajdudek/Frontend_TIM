import React, { Component } from 'react';
import TrainerService from '../services/TrainerService';

class ViewTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            trainer: {},
            wars: [],
        }
    }

    componentDidMount(){

        TrainerService.getTrainerById(this.state.id).then(res => {
            console.log(res.data)
            this.setState({trainer: res.data});
            this.setState({wars : this.state.trainer.wards})
        });
    }


    cancel () {
        this.props.history.push('/wards');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Informacje o trenerze</h3>
                    <div className="card-body">
                        <div className="row">
                            <label><b>Imie: </b>{ this.state.trainer.name } </label>
                            <label><b>Nazwisko: </b>{ this.state.trainer.surname }</label>
                        </div>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Jego podopieczni</h3>
                    <div className="card-body">
                        {this.state.empls.map((war) =>
                            <div className="row" key={war.name} style={{margin: 10}}>
                                <label><b>Imie: </b>{ war.name } </label>
                                <label><b>Nazwisko: </b>{ war.surname }</label>
                            </div>)}
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Powrót</button>
                </div>

            </div>
        )
    }
}

export default ViewTrainer;