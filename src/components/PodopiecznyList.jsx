import React, { Component } from 'react';
import PodopiecznyService from '../services/PodopiecznyService';


class PodopiecznyList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            podopieczni: []
        }
    }

    checkPodopieczni(){
        this.props.history.push('/podopieczni');
    }

    componentDidMount(){
        PodopiecznyService.getPodopieczny().then((res) => {

            this.setState({podopieczni: res.data });

        });
    }

    render() {
        return (
            <div>
                <div>
                <h2 className="text-center">Podopieczni</h2>
                <div className="row">
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
                                this.state.podopieczni.map(
                                    podopieczny =>
                                    <tr key = {podopieczny.id}>
                                        <td>{ podopieczny.name }</td>
                                        <td>{ podopieczny.surname }</td>

                                        <td>
                                            <button style={{marginRight:"10px"}} onClick={ () => this.viewPodopieczny(podopieczny.name)} className="btn btn-success">Profil</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="row">
                    <button style={{marginBottom:"10px"}} className="btn btn-warning" onClick = {this.checkPodopieczni}>Przejście do pracodawców</button>
                </div>
            </div>
        )
    }
}

export default PodopiecznyList;