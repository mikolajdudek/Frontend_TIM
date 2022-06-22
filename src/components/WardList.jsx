import React, { Component } from 'react';
import WardService from '../services/WardService';


class WardList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wards: []
        }
        this.addWard = this.addWard.bind(this);
        this.editWard = this.editWard.bind(this);
        this.deleteWard = this.deleteWard.bind(this);
        this.checkTrainer = this.checkTrainer.bind(this);
    }

    checkTrainer(){
        this.props.history.push('/trainers');
    }

    deleteWard(id){
        WardService.deleteWard(id).then(res => {
            this.setState({wards: this.state.wards.filter(ward => ward.name !== id)});
        });
    }

    viewWard(id){
        this.props.history.push(`/view-ward/${id}`);
    }

    editWard(id){
        this.props.history.push(`/update-ward/${id}`);
    }

    componentDidMount(){
        WardService.getWards().then((res) => {

            this.setState({wards: res.data });

        });
    }

    addWard(){
        this.props.history.push('/add-ward');
    }

    render() {
        return (
            <div>
                <div>
                <h2 className="text-center">Ward</h2>
                <div className="row">
                    <button style={{marginBottom:"10px"}} className="btn btn-primary" onClick = {this.addWard}>Dodaj podopiecznego</button>
                </div>
                <div className="row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th>Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.wards.map(
                                    ward =>
                                    <tr key = {ward.id}>
                                        <td>{ ward.name }</td>
                                        <td>{ ward.surname }</td>

                                        <td>
                                            <button style={{marginRight:"10px"}} onClick={ () => this.viewWard(ward.name)} className="btn btn-success">Profil</button>
                                            <button onClick={ () => this.editWard(ward.name)} className="btn btn-info">Edytuj</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteWard(ward.name)} className="btn btn-danger">Usuń</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="row">
                    <button style={{marginBottom:"10px"}}  className="btn btn-warning" onClick = {this.checkTrainer}>Przejście do trenerów</button>
                </div>
            </div>
        )
    }
}

export default WardList;