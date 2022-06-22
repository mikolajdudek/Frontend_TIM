import React, { Component } from 'react';
import WardService from '../services/WardService';

class AddWard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            code: '',

        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.saveWard = this.saveWard.bind(this);
    }

    saveWard = (e) => {
        e.preventDefault();
        let ward = {name: this.state.name, surname: this.state.surname, code: this.state.code};
        console.log ('Ward => ' + JSON.stringify(ward));

        WardService.addWard(ward).then(res => {
            this.props.history.push('/wards');
        });
    }

    cancel () {
        this.props.history.push('/wards');
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeSurnameHandler = (event) => {
        this.setState({surname: event.target.value});
    }

    changeNrTrainerHandler = (event) => {
        this.setState({code: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Dodaj Ward</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Imię: </label>
                                            <input placeholder="Imię" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nazwisko: </label>
                                            <input placeholder="Nazwisko" name="surname" className="form-control" value={this.state.surname} onChange={this.changeSurnameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Kod trenera: </label>
                                            <input placeholder="Kod trenera" name="nr_trainer" className="form-control" value={this.state.code} onChange={this.changeNrTrainerHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveWard}>Zapisz</button>
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

export default AddWard;