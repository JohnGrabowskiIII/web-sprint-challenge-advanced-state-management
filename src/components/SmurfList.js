import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux'
import { mapStateToProps } from '../reducers';

 const SmurfList = (props)=> {

    if (props.loading) {
        return <h1>Loading...</h1>;
    }

    const smurfRenderer = array => {
        return array.map(smurf => {
            return <Smurf smurf={smurf} key={smurf.id} />
        })
    }

    return(<div className="listContainer">
        {smurfRenderer(props.smurfs)}
    </div>);
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.