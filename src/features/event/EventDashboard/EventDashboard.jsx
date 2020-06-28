import React, {Component} from 'react';
import {Button, Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";


const eventsDashBoard = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
]


class EventDashboard extends Component {

    state = {
        events: eventsDashBoard,
        isOpen: false,
        selectedEvent: null
    }

    // handleIsOpenToggle = () => {
    //     this.setState((prevState) => ({
    //         isOpen: !prevState.isOpen
    //     }))
    // }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    handleFormCancel = () => {
        this.setState({
            isOpen: false
        })
    }

    handleCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.jpg';
        this.setState(({events}) => ({
                events: [...events, newEvent],
                isOpen: false
            })
        )
    }

    handleDeleteEvent = (eventId) => {
        this.setState(({events}) => ({
            events: events.filter(e => e.id !== eventId)
        }))
    }
    handleSelectEvent = (event) => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    handleUpdateEvent = (updatedEvent) => {
        this.setState(({events}) => ({
                events: events.map(event => {
                    return event.id === updatedEvent.id ? {...updatedEvent} : event
                }),
                isOpen: false,
                selectedEvent: null
            })
        )
    }


    render() {

        // console.log(this.state)

        const {
            handleFormCancel,
            handleCreateEvent,
            handleSelectEvent,
            handleCreateFormOpen,
            handleUpdateEvent,
            handleDeleteEvent
        } = this
        const {events, isOpen, selectedEvent} = this.state

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList
                        events={events}
                        deleteEvent={handleDeleteEvent}
                        selectEvent={handleSelectEvent}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button
                        positive
                        content="Create Event"
                        onClick={handleCreateFormOpen}
                    />
                    {
                        isOpen && <EventForm
                            key={selectedEvent ? selectedEvent.id : 0}
                            selectedEvent={selectedEvent}
                            createEvent={handleCreateEvent}
                            updateEvent={handleUpdateEvent}
                            formCancel={handleFormCancel}/>
                    }
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;