import React, { Fragment } from 'react'
import Home from './pages/home/index'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
    return (
        <Fragment>
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Redirect to={"/home"} />
                </Switch>
            </HashRouter>
        </Fragment>
    )
}

export default App
