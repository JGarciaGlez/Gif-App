import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit } className='text-center'>
            <div class="form-group">
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            /></div>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
