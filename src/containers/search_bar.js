import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

/* At the top of the app we are gonna have a search bar. Is gonna be responsible for showing us the search input and
 * a search button. It's also gonna be responsible for calling an action creator in redux (whenever we type a name and
 * click on search).
 * We will also have 'Middleware'. They are functions that take an action and (depending on the action's type and payload
 * or any other number of factors) it can choose between letting the action pass through, manipulate it, log it or stop
 * it altogether BEFORE the actions reach any reducer. They are kinds of gatekeepers of sorts. THey stop any action, inspect
 * it and decide weather to manipulate it, stop it or whatever. Via intercepting actions we can do many things.
 * In summary, middlewares can modify actions (actions affect redux's state). We can have 0..n middlewares (We are gonna
 * use them for AJAX requests).
 */
class SearchBar extends Component {
    //We do this constructor thing to initiate the component-level state (not the redux state).
    //Then, we are gonna use a change handler on the input to update the state.
    constructor(props){
        super(props);

        this.state = { term: '' };
        /* By doing this, we are saying that 'this' (our instance of searchBar) has a function called onInputChange
         * bind that function to 'this' and then replace onInputChange with this new bound instance of this function
         * (Override the local method with the new method that has 'this' bind).
         */
        this.onInputChange = this.onInputChange.bind(this);

        //Remember to bind the context or else 'this' won't be what we expect it to be (will
        // error on this.props.fetchWeather(this.state.term);)
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    /* All DOM eventHandlers like onClick come along with 'event' object (Vanilla JS). */
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    /**
     * <p>This is to prevent the browser to try to submit the form when pressing 'enter' or clicking 'submit' button.
     * That behavior is the default one when dealing with a <form/>.</p>
     * <p>Also, we are gonna call the action creator whenever the user submits the form.</p>
     *
     * @param event
     */
    onFormSubmit(event) {
        event.preventDefault();

        //We go and fetch weather data.
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' }); //-> clear search form.
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

/**
 * <p>This causes the action creator (whenever it gets called and returns an action) binds
 * action creators (fetchWeather) with dispatch to make sure that that action flows down into the middleware and then
 * into the reducers inside our redux application.</p>
 * <p>So, by binding the action creator (fetchWeather) to dispatch and then mapping it to props; gives us access to
 * the function this.prop.fetchWeather inside our component. Now we can use it in onFormSubmit().</p>
 *
 * @param dispatch
 * @returns {*}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//The only reason why we are passing null here is that whenever we are passing a function, that is supposed to map
// our dispatch to the props of our container, it always goes in as the second argument. That is why we pass null as the first.
// We are saying that we don't need the state.
export default connect(null, mapDispatchToProps)(SearchBar);