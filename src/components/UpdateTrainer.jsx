import React, { Component } from 'react';
import TrainerService from '../services/TrainerService';

class UpdateTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            surname: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurNameHandler = this.changeSurNameHandler.bind(this);
        this.updateTrainer = this.updateTrainer.bind(this);
    }

    componentDidMount(){
        TrainerService.getTrainerById(this.state.id).then((res) => {
            let trainer = res.data;
            this.setState({name: trainer.name,
                surname: trainer.surname,
            });
        });
    }

    updateTrainer = (o) => {
        o.preventDefault();
        let trainer = {name: this.state.name, surname: this.state.surname};
        console.log ('Trainer => ' + JSON.stringify(trainer));

        TrainerService.updateTrainer(trainer, this.state.id).then (res => {
            this.props.history.push('/trainers');
        });
    }

    cancel () {
        this.props.history.push('/trainers');
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeSurNameHandler = (event) => {
        this.setState({surname: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edytuj Trainer</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Imie: </label>
                                            <input placeholder="Imie:" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nazwisko: </label>
                                            <input placeholder="Nazwisko" name="surname" className="form-control" value={this.state.surname} onChange={this.changeSurNameHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateTrainer}>Zapisz</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Anuluj</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateTrainer;