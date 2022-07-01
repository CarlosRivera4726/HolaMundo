import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Fgreeting = (props) => {

    // Breve introduccion a useState
    // const [variable, método para actualizarlo] = useState(valor inicial);
    const [age, setAge] = useState(29);

    const birthday = ()=>{
        // método para actualizar el valor
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
            
                ¡Hola {props.name}!
            </h1>
            <h2>
                Tu edad es: {age}
            </h2>
            <div>
                <button onClick={birthday}> Cumplir Años </button>
            </div>
        </div>
    );
};


Fgreeting.propTypes = {
    name: PropTypes.string,

};


export default Fgreeting;
