import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const Input = (props) => (
    <div className='input-container'>
        <InputGroup size='md' className="form-input">
            <FormControl
                className='input'
                name={props.name}
                placeholder={props.placeholder}
            />
        </InputGroup>
    </div>
);

export default Input;
