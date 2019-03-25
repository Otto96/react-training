import React, { Component } from 'react';
import './Note.css';


class Note extends Component {
    
    constructor(){
        super().this.state = {
            'issues': []
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData() {
        return fetch('https://api.github.com/repos/KasperNurminen/api-testing/issues')
        .then((response) => response.json())
        .then((data) => this.setState({'issues': data}))
        .catch((error) => {
            console.error(error);
        });
    }  
    
    render() {
        return null;   
    }
         
}

export default Note;
