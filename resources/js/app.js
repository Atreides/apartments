import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import {Header} from './layout/Header'
import {NotFound} from './pages/NotFound'
import {Home} from './pages/Home'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Profile} from './pages/Profile'
import {AddFlat} from './pages/addFlat'
import {Apart} from './pages/Apartments'

const App = () => {
    const [loggedIn, setLoggedIn] = useState('');
    return <Router>
        <Header loggedIn={loggedIn} logOut={() => setLoggedIn(false)}/>
        <main className="wrapper">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login logIn={() => setLoggedIn(true)}/>
                </Route>
                <Route exact path='/addFlat'>
                    <AddFlat />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/apartments/:id">
                    <Apart />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>

    </Router>
}

ReactDOM.render(<App />, document.querySelector('#app'));