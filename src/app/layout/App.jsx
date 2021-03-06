import React, {Component, Fragment} from 'react';
import {Container} from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";
import {withRouter} from "react-router";


class App extends Component {

    render() {
        return (
            <Fragment>
                <Route exact path='/' component={HomePage}/>
                <Route path='/(.+)' render={() => (
                    <Fragment>
                        <NavBar/>
                        <Container className="main">
                            <Switch key={this.props.location.key}>
                                <Route exact path='/events' component={EventDashboard}/>
                                <Route path='/events/:id' component={EventDetailedPage}/>
                                <Route path='/people' component={PeopleDashboard}/>
                                <Route path='/profile/:id' component={UserDetailedPage}/>
                                <Route path='/settings' component={SettingsDashboard}/>
                                <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
                                <Route path='/test' component={TestComponent}/>
                            </Switch>
                        </Container>
                    </Fragment>
                )}/>
            </Fragment>
        )
    }
}

export default withRouter(App);


