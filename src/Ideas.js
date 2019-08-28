import React from 'react';
import './Ideas.css';
import Card from './Card'

const Ideas = (props) => {
    const { ideas } = props;

    const ideaCards = ideas.map(idea => {
        return (
            <Card 
                title={idea.title}
                description = {idea.description}
                id = {idea.id}
                key = {idea.id}
            />
        )
    })
    return (
        <section className="ideas__section">
            {ideaCards}
        </section>
    )
}

export default Ideas;