import React, {Component} from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
import {Link, NavLink, withRouter} from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

import logo from '../../images/logo.png'

class NavBar extends Component {

    state = {
        authenticated: false
    }

    handleSignIn = () => this.setState({authenticated: true})
    handleSignOut = () => {
        this.setState({authenticated: false})
        this.props.history.push('/')
    }

    render() {

        const {authenticated} = this.state

        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header as={NavLink} to='/' exact>
                        <img src={logo} alt="logo"/>
                        Re-vents!
                    </Menu.Item>
                    <Menu.Item name="Events" as={NavLink} to='/events'/>
                    <Menu.Item name="People" as={NavLink} to='/people'/>
                    <Menu.Item name="Test" as={NavLink} to='/test'/>
                    <Menu.Item>
                        <Button floated="right" as={Link} to="/createEvent" positive inverted content="Create Event"/>
                    </Menu.Item>
                    {authenticated
                        ?
                        <SignedInMenu signOut={this.handleSignOut}/>
                        :
                        <SignedOutMenu signIn={this.handleSignIn}/>}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);