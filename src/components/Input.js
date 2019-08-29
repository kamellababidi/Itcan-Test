import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const Input = (props) => (
    <div className='input-container'>
        <InputGroup size='md' className="form-input">
            <FormControl
                className='input'
                placeholder={props.placeholder}
            />
        </InputGroup>
    </div>
);

export default Input;
