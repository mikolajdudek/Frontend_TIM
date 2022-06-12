import React, { Component } from 'react';
import TrenerService from '../services/TrenerService';

class TrenerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trenerzy: []
        }
    
    }

    checkTrenerzy(){
        this.props.history.push('/trenerzy');
    }

    componentDidMount(){
        TrenerService.getTrenerzy().then((res) => {
            this.setState({ trenerzy: res.data});
        });
    }
    
    cancel () {
        this.props.history.push('/trenerzy');
    }


    render() {
        return (
            <div>
                <div>

                <h2 className="text-center">Trenerzy</h2>
                <div className="row">
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
                                this.state.trenerzy.map(
                                    trener =>
                                    <tr key = {trener.id}>
                                        <td>{ trener.name }</td>
                                        <td>{ trener.surname }</td>
                                        <td>
                                            <button style={{marginRight:"10px"}} onClick={ () => this.viewTrenerzy(trener.code)} className="btn btn-success">Info</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}

export default TrenerList;