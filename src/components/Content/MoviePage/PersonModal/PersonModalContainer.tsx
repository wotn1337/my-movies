import React, {useLayoutEffect, useState} from 'react';
import {connect} from "react-redux";
import {FullPersonInfo} from "../../../../redux/persons/types";
import {getPerson} from "../../../../redux/persons/personReducer";
import Loader from "../../../common/Loader/Loader";
import EmptyBlock from "../../../common/Empty/EmptyBlock";
import PersonModal from "./PersonModal";
import {Modal} from "antd";

type PropsType = {
    id: string
    person: FullPersonInfo
    getPerson: (id: string) => Promise<any>
    onCancel: () => void
}

const PersonModalContainer = (props: PropsType) => {
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(() => {
        if (props.id) {
            props.getPerson(props.id)
                .finally(() => setIsLoading(false))
        }
        return () => setIsLoading(true)
    }, [props.id])

    return (
        <Modal
            title={props.person.name}
            visible={!!props.id}
            onCancel={props.onCancel}
            footer={null}
            style={{minWidth: 800}}
        >
            {
                isLoading
                    ? <Loader/>
                    : <>
                        {
                            !props.person.errorMessage
                                ? <PersonModal person={props.person} />
                                : <EmptyBlock />
                        }
                    </>
            }
        </Modal>

    )
}

type StateType = { person: FullPersonInfo }
const mapStateToProps = (state: StateType) => ({
    person: state.person
})

export default connect(mapStateToProps, {
    getPerson
})(PersonModalContainer)