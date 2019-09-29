import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Header from '../Header/Header';

const App = () => (
    <BrowserRouter>
        <MainLayout>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/info' component={Info}/>
                <Route exact path='/faq' component={FAQ}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default App;