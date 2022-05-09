import './App.scss'
import { Map, InputSearch, Reset } from '../components'
import { useLoadScript } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../constants/url'
import { useDispatch } from 'react-redux'
import { ADD_MARKERS } from '../redux/states'


function App() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  const dispatch = useDispatch()

  const handleOnDeleteMarkers = () => {
    dispatch({
      type: ADD_MARKERS,
      payload: []
    })
  }


  return (
    <div className="app">
      {
        isLoaded ?
          <>
            <InputSearch placeholder={'Search Google Maps'} />
            <Reset onClick={handleOnDeleteMarkers} text={'Borrar'} />
            <Map />
          </>
          :
          <h4>...Cargando</h4>
      }
    </div>
  )
}

export default App
