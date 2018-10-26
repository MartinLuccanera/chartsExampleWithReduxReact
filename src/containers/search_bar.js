import React, { Component } from 'react';
/* At the top of the app we are gonna have a search bar. Is gonna be responsible for showing us the search input and
 * a search button. It's also gonna be responsible for calling an action creator in redux (whenever we type a name and
 * click on search).
 */
export default class SearchBar extends Component {
    render() {
        {/*input-group is a bootstrap css*/}
        return (
            <form className="input-group">
                <input />
                {/*We are gonna turn this (input) into a controlled field. It's a form element where the value of the
                input is set by the state of our component (not the other way around)*/}
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>

        );
    }
}