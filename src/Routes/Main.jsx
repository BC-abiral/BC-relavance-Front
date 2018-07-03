import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../Pages/App'
import Ppage from '../Pages/Ppage'
import Detail from '../Pages/Detail';

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:pname" component={Ppage} />
        <Route exact path="/:pname/:vid/view" component={Detail} />
    </Switch>
)

export default Main;