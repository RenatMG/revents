import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import {connect} from "react-redux";
import {createEvent, deleteEvent, updateEvent} from "../eventActions";


class EventDashboard extends Component {

    handleDeleteEvent = (eventId) => {
        this.props.deleteEvent(eventId)
    }

    render() {

        const {
            handleDeleteEvent
        } = this

        const {events} = this.props

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList
                        events={events}
                        deleteEvent={handleDeleteEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                 <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapState = state => ({
    events: state.events
})

const actions = {
    createEvent,
    updateEvent,
    deleteEvent
}

export default connect(mapState, actions)(EventDashboard);