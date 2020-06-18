import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'Johnny Unitas',
                    title: 'Football',
                    age: 65,
                },
                {
                    name: 'Terry Bradshaw',
                    age: 61,
                    hairColor: 'blonde'
                },
                {
                    name: 'Jerry Rice',
                    title: 'Manager',
                }
            ],
            
            userInput: '',
            filteredEmployees: []
        }
    }

        handleChange(val) {
            this.setState({ userInput: val });
        }
        
        filteredEmployees(prop) {
            let employees = this.state.employees;
            let filteredEmployees = [];

            for ( let i = 0; i < employees.length; i++ ) {
                if ( employees[i].hasOwnProperty(prop) ) {
                    filteredEmployees.push(employees[i]);
                }
            }

            this.setState({ filteredEmployees: filteredEmployees });
        }

        render() {
            return (
                <div className="puzzleBox FilterObjectPB">
                    <h4> Filter Object </h4>
                    <span className="puzzleText"></span>
                    <input className="inputLine"/>
                    <button className="confirmationButton"> Filter </button>
                    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
                </div>
            )
        }
    }