import React from 'react';
import './Card.css';

const Card = (props) => {
    const { title, description } = props
    return (
        <section className="card__section">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>trash this idea</button>
        </section>
    )
}

export default Card;