import React from 'react';
import {FullMovieInfoType} from "../../../redux/movies/types";
import {PageHeader, Typography, Image, Divider, Collapse} from "antd";
import PersonList from "./PersonList/PersonList";
import PersonModalContainer from "./PersonModal/PersonModalContainer";
import RatingBlock from "./Rating/RatingBlock";

const {Title, Paragraph} = Typography
const {Panel} = Collapse

type PropsType = FullMovieInfoType & {
    goBack: () => void
    personId: string
    setPersonId: (id: string) => void
    myRating: string | null
}

const textStyle = {
    fontSize: '16px'
}

const MoviePage = (props: PropsType) => {
    return (
        <>
            <PageHeader title={props.title} onBack={props.goBack}/>
            <section style={{
                padding: '0 20px 20px',
                display: 'flex',
                alignItems: 'start',
                gap: '20px'
            }}>
                <img src={props.image} alt={props.title} width={300}/>
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Title level={1}>{props.fullTitle}</Title>
                        <div style={{marginRight: 100}}>
                            <RatingBlock rating={props.myRating} title='Your rating' editable={true}
                                         movieId={props.id}/>
                        </div>
                    </div>
                    <Divider/>
                    <RatingBlock rating={props.imDbRating} marginBottom={true} movieId={props.id}/>
                    <Paragraph style={textStyle}>{props.plot}</Paragraph>
                    <PersonList
                        title={'Directors'}
                        personList={props.directorList}
                        onPersonClick={props.setPersonId}
                    />
                    <PersonList
                        title={'Actors'}
                        personList={props.starList}
                        onPersonClick={props.setPersonId}
                    />
                    <Collapse ghost style={textStyle}>
                        <Panel header="Images" key={1}>
                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                                <Image.PreviewGroup>
                                    {props.images.items.map((item, index) => (
                                        <Image
                                            src={item.image}
                                            key={index}
                                            width={100}
                                            height={100}
                                            style={{objectFit: 'cover'}}/>
                                    ))}
                                </Image.PreviewGroup>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </section>
            <PersonModalContainer id={props.personId} onCancel={() => props.setPersonId('')}/>
        </>
    )
}

export default MoviePage