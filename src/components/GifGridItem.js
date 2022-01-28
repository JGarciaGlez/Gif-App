import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="col-md-5 card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } className='rounded mx-auto d-block imagenes' />
            <p> { title } </p>
        </div>
    )
}
