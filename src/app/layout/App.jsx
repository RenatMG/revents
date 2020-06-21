import React, {Fragment} from 'react';
import NavBar from '../../features/NavBar/NavBar';
import {Container} from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";




function App() {
    return (
        <Fragment>
            <NavBar/>
            <Container className="main">
                <EventDashboard/>
            </Container>
        </Fragment>
    );
}

export default App;


