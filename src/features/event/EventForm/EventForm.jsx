import React, {Component} from 'react';
import {Button, Form, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";
import cuid from "cuid";

class EventForm extends Component {

    state = {...this.props.event}

    handleFormSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.id) {
            this.props.updateEvent(this.state)
            this.props.history.push(`/events/${this.state.id}`)
        } else {
            const newEvent = {
                ...this.state,
                id: cuid(),
                hostPhotoURL: '/assets/user.jpg'
            }
            this.props.createEvent(newEvent)
            this.props.history.push(`/events`)
        }
    }

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })

    }

    componentDidMount() {
        if (this.props.selectedEvent !== null) {
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }

    render() {

        const {handleInputChange, handleFormSubmit} = this
        const {title, date, city, venue, hostedBy} = this.state
        return (
            <Segment>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                            placeholder="Event Name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                            name="date"
                            value={date}
                            onChange={handleInputChange}
                            type="date"
                            placeholder="Event Date"/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            name="city"
                            value={city}
                            onChange={handleInputChange}
                            placeholder="City event is taking place"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            name="venue"
                            value={venue}
                            onChange={handleInputChange}
                            placeholder="Enter the Venue of the event"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            name="hostedBy"
                            value={hostedBy}
                            onChange={handleInputChange}
                            placeholder="Enter the name of person hosting"/>
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id
    let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }
    if (eventId && state.events.length > 0) {
        event = state.events.find(event => event.id === eventId)
    }
    return {
        event
    }
}

const actions = {
    createEvent,
    updateEvent
}

export default connect(mapState, actions)(EventForm);