import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import {Layout, PageHeader} from 'antd'
import Header from "./components/Header";
import MoviesListContainer from "./components/Content/MoviesList/MoviesListContainer";
import {Route, Routes} from "react-router";
import MoviePageContainer from "./components/Content/MoviePage/MoviePageContainer";

const {Content} = Layout

const App = () => {
    return (
        <Layout>
            <Header/>
            <Content style={{flex: '1 1 auto', display: 'flex', flexDirection: 'column'}}>
                <Routes>
                    <Route path='/' element={<>
                        <PageHeader title="Топ 250 фильмов IMDb"/>
                        <MoviesListContainer/>
                    </>}/>
                    <Route path='/:id' element={<MoviePageContainer/>}/>
                </Routes>
            </Content>
        </Layout>
    )
}

export default App
