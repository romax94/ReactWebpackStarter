import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import { Home } from './routes/home'
import { Users } from './routes/users'

export function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
            </Switch>
        </Router>
    )
}