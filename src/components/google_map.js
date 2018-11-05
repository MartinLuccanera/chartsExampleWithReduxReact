import React, { Component } from 'react';

class GoogleMap extends Component {
    /*
     * componentDidMount is one of our lifecycle methods that gets called automatically only after this component has
     * been rendered to the screen.
     */
    componentDidMount() {
        //Create a googleMaps map. It is gonna find the element on the screen and embed a map into it. And will get
        //rendered to this.refs.map.
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    //ref=something creates a direct reference to an HTML element that has been rendered to the page.
    //After it has been rendered to the screen I can a get a reference to ir by referring this.refs.map
    //"map" being the String I decide to put in the ref
    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;