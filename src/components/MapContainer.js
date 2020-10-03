import Axios from 'axios';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React from 'react'
import connect from 'react-redux'
import rails from '../services/Rails';
import axios from 'axios'


class MapContainer extends React.Component {
    componentDidMount (){
        this.getAddress()
    }

    getAddress = async() => {
        let location = await axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg')
        
    }


    mapStyles = {
        position: 'absolute',
        width: '100%',
        height: '100%'
    };

    // address
    // 5600%Pacific%Grove%Way%Union
    render(){
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={this.mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            > 
                <Marker
                    name={'Your position'}
                    position={{ lat: 37.762391, lng: -122.439192 }}
                    // icon={{
                    //     url: "/path/to/custom_icon.png",
                    //     anchor: new google.maps.Point(32, 32),
                    //     scaledSize: new google.maps.Size(64, 64)
                    // }} 
                    />
                 
            
            </Map>
        );
    }
}

const LoadingContainer = (props) => (
    <div>Loading</div>
)

export default GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer)