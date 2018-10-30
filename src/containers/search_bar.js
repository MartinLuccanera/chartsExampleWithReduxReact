import React, { Component } from 'react';
/* At the top of the app we are gonna have a search bar. Is gonna be responsible for showing us the search input and
 * a search button. It's also gonna be responsible for calling an action creator in redux (whenever we type a name and
 * click on search).
 * We will also have 'Middleware'. They are functions that take an action and (depending on the action's type and payload
 * or any other number of factors) it can choose between letting the action pass through, manipulate it, log it or stop
 * it altogether BEFORE the actions reach any reducer. They are kinds of gatekeepers of sorts. THey stop any action, inspect
 * it and decide weather to manipulate it, stop it or whatever. Via intercepting actions we can do many things.
 * In summary, middlewares can modify actions (actions affect redux's state). We can have 0..n middlewares.
 */
export default class SearchBar extends Component {
    //We do this constructor thing to initiate the component-level state (not the redux state).
    //Then, we are gonna use a change handler on the input to update the state.
    constructor(props){
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        /* By doing this, we are saying that 'this' (our instance of searchBar) has a function called onInputChange
         * bind that function to 'this' and then replace onInputChange with this new bound instance of this function
         * (Override the local method with the new method that has 'this' bind).
         */
    }

    /* All DOM eventHandlers like onClick come along with 'event' object (Vanilla JS). */
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    /**
     * This is to prevent the browser to try to submit the form when pressing 'enter' os clicking 'submit' button.
     * That behavior is the default one when dealing with a <form/>
     *
     * @param event
     */
    onFormSubmit(event) {
        event.preventDefault(); 
    }

    render() {
        {/*input-group is a bootstrap css*/}
        return (
            <form onSubmit={this.onFormSubmit}
                  className="input-group">
                {/*If we pass the onInputChange like this and the function onInputChange uses 'this' we have
                    the wrong context. 'this' is gonna error saying something about not having 'setState'.
                    To solve it, we can either do:
                    onChange={() => this.onInputChange()} (like we did before)
                    or we can bind the context of onInputChange calling
                    this.onInputChange = this.onInputChange.bind(this);
                    in the constructor.
                */}
                <input
                    placeholder="Get a five-day forecast in your favorite cities."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                {/*We are gonna turn this (input) into a controlled field. It's a form element where the value of the
                input is set by the state of our component (not the other way around)
                To turn in into a controlled component, we are setting 2 properties:
                value={this.state.term}
                onChange={this.onInputChange}
                */}
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>

        );
    }
}