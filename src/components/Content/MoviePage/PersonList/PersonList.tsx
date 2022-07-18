import React from 'react';
import {Person} from "../../../../redux/movies/types";
import {Typography} from "antd";
import './style.css'

const {Paragraph} = Typography

type PropsType = {
    title: string
    personList: Person[]
    onPersonClick: (id: string) => void
}

const PersonList = (props: PropsType) => {
    return (
        <Paragraph className='personList'>
            <span style={{fontWeight: 'bold'}}>{props.title}: </span>
            {props.personList.map((person, index) => (
                <span key={person.id}>
                    <span className='link' onClick={() => props.onPersonClick(person.id)}>{person.name}</span>
                    {index !== props.personList.length - 1 ? ', ' : ''}
                </span>
            ))}
        </Paragraph>
    )
}

export default PersonList