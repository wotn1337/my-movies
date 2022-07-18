import React from 'react';
import {FullPersonInfo} from "../../../../redux/persons/types";
import {Space, Typography} from "antd";
import './style.css'
import CastMoviesList from "./CastMoviesList/CastMoviesList";

type PropsType = {
    person: FullPersonInfo
}

const {Paragraph, Text, Title} = Typography

const PersonModal = ({person}: PropsType) => {
    return (
        <Space direction='vertical'>
            <Space align='start'>
                <img src={person.image} alt={person.name} className='image'/>
                <Space direction='vertical' align='start'>
                    <Title level={3} className='name'>{person.name} ({person.age} y.o)</Title>
                    <Text>{new Date(person.birthDate).toLocaleDateString('ru')}</Text>
                    <Text className='role'>{person.role}</Text>
                    <Paragraph className='sum'>{person.summary}</Paragraph>
                    <Text className='awards'>{person.awards}</Text>
                </Space>
            </Space>
            <Title level={5}>Known for</Title>
            <CastMoviesList movies={person.knownFor}/>
        </Space>
    )
}

export default PersonModal