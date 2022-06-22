import React, { Component } from 'react';
import WardService from '../services/WardService';

class UpdateWard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            surname: '',
            code: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.updateWard = this.updateWard.bind(this);
    }

    updateWard = (c) => {
        c.preventDefault();
        let ward = {name: this.state.name, surname: this.state.surname, code: this.state.code};
        console.log ('Ward => ' + JSON.stringify(ward));

        WardService.updateWard(ward, this.state.id).then (res => {
            const { history } = this.props;
            history.push('/wards');
        });
    }

    componentDidMount(){
        WardService.getWardById(this.state.id).then( (res) => {
            let ward = res.data;
            this.setState({
                name: ward.name,
                surname: ward.surname,
                code: ward.code
            });
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
                            <h3 className="text-center">Edytuj Ward</h3>
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
                                            <input placeholder="Nr trenera" name="nr_trainer" className="form-control" value={this.state.code} onChange={this.changeNrTrainerHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateWard}>Zapisz</button>
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

export default UpdateWard;