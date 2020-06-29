import React, {Component} from 'react';
import {connect} from "react-redux";
import {decrementCounter, incrementCounter} from "./testActions";
import {Button} from "semantic-ui-react";

class TestComponent extends Component {
    render() {

        const {data, incrementCounter, decrementCounter} = this.props

        return (
            <div>
                <h1>Test Component</h1>
                <h3>the answer is {data} </h3>
                <Button onClick={decrementCounter} negative content='-'/>
                <Button onClick={incrementCounter} positive content='+'/>
            </div>
        );
    }
}

const mapState = state => ({
    data: state.test.data
})
// const mapDispatchToProps = dispatch => ({
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
// })

const actions = {
    incrementCounter,
    decrementCounter
}

export default connect(mapState, actions)(TestComponent);