import { useSelector } from 'react-redux'
import { GoogleMap, Marker } from '@react-google-maps/api'
import './Map.scss'


export const Map = () => {

    const initialCenter = useSelector(state => state.markersReducer.initialCenter)
    const markers = useSelector(state => state.markersReducer.markers)


    return (
        <div className="map">

            {
                <GoogleMap
                    zoom={10}
                    center={initialCenter}
                    mapContainerClassName={'map__container'}
                    options={{
                        disableDefaultUI: true,
                    }}
                >
                    {
                        markers?.map((marker, i) =>
                                <Marker
                                    key={i}
                                    position={{
                                        lat: marker.lat,
                                        lng: marker.lng
                                    }} />
                        )
                    }
                </GoogleMap>
            }
        </div>
    )
}
