import React, { Component } from 'react';
import TrainerService from '../services/TrainerService';

class TrainerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trainers: []
        }

        this.addTrainer = this.addTrainer.bind(this);
        this.editTrainer = this.editTrainer.bind(this);
        this.deleteTrainer = this.deleteTrainer.bind(this);
    }

    componentDidMount(){
        TrainerService.getTrainers().then((res) => {
            this.setState({ trainers: res.data});
        });
    }
    
    addTrainer(){
        this.props.history.push('/add-trainer');
    }

    deleteTrainer(name){
        TrainerService.deleteTrainer(name).then(res => {
            this.setState({trainers: this.state.trainers.filter(trainer => trainer.code !== name)});
        });
    }

    viewTrainer(id){
        this.props.history.push(`/view-trainer/${id}`)
    }

    editTrainer(id){
        this.props.history.push(`/update-trainer/${id}`);
    }

    cancel () {
        this.props.history.push('/wards');
    }


    render() {
        return (
            <div>
                <div>

                <h2 className="text-center">Trainer</h2>
                <div className="row">
                    <button style={{marginBottom:"10px"}} className="btn btn-primary" onClick = {this.addTrainer}>Add Trainer</button>
                </div>
                <div className="row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.trainers.map(
                                    trainer =>
                                    <tr key = {trainer.id}>
                                        <td>{ trainer.name }</td>
                                        <td>{ trainer.surname }</td>
                                        <td>
                                            <button style={{marginRight:"10px"}} onClick={ () => this.viewTrainer(trainer.code)} className="btn btn-success">Info</button>
                                            <button onClick={ () => this.editTrainer(trainer.code)} className="btn btn-info">Edytuj</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteTrainer(trainer.code)} className="btn btn-danger">Usuń</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="row">
                <button style={{marginBottom:"10px"}} className="btn btn-warning" onClick={this.cancel.bind(this)}>Powrót do podopiecznych</button>
                </div>
            </div>
        )
    }
}

export default TrainerList;