import React, { Component } from 'react';
import TrainerService from '../services/TrainerService';

class ViewTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            trainer: {},
            wards: [],
        }
    }

    componentDidMount(){

        TrainerService.getTrainerById(this.state.id).then(res => {
            console.log(res.data)
            this.setState({trainer: res.data});
            this.setState({wards : this.state.trainer.ward})
        });
    }


    cancel () {
        this.props.history.push('/trainers');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Informacje o trenerze</h3>
                    <div className="card-body">
                        <div className="text-center">
                            <h1></h1>
                            <label><b>Imie: </b>{ this.state.trainer.name } </label>
                            <h1></h1>
                            <label><b>Nazwisko: </b>{ this.state.trainer.surname }</label>
                            <h1></h1>
                            <label><b>Kod trenera: </b>{ this.state.trainer.code }</label>
                        </div>
                    </div>
                </div>

                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Jego podopieczni</h3>
                    <div className="text-center">
                    {this.state.wards.map((war) =>
                            <div className="text-center" key={war.name} style={{margin: 10}}>
                                <h1></h1>
                                <label><b>Imie: </b>{ war.name } </label>
                                <h1> </h1>
                                <label><b>Nazwisko: </b>{ war.surname }</label>
                                <h1>-----------------</h1>
                            </div>)}
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Powrót</button>
                </div>

            </div>
        )
    }
}

export default ViewTrainer;