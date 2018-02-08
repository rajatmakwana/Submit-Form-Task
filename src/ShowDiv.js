import React, { Component } from 'react';
import { UserForm } from './UserForm'

class ShowDiv extends React.Component{
    constructor(props){
        super();
    };

    render(){
        return(
            <div>
                {this.props.showDivValue }
            </div>
        );
    };
}

export default ShowDiv;