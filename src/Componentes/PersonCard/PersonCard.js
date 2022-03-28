import React from 'react';
import './PersonCard.css';

class PersonCard extends React.Component{
    constructor( props){      //aqui espera un constructor
        super( props);
        const { age } = this.props;
        this.state = {
        age: age
    }
    }

    birthday =() => {
        this.setState({age: this.state.age + 1});
    }
        render(){
            const {firstName, lastName,age, hairColor} =this.props;
            return(
                <div className='PersonCard'>
                    <h2>{lastName}, {firstName}</h2>
                    <h4> Age : {this.state.age} </h4>
                    <h5> Hair Color : {hairColor} </h5>
                    <button  onClick={ this.birthday} >Birthday Button for {firstName} {lastName}</button>
    
    
                </div>
            )
    
        }
    }
    
        


export default PersonCard;
