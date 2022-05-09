import * as actionType from "../states"

const initialState = {
    markers: [],
    initialCenter: { lat: 41.390205, lng: 2.154007 },   // Barcelona
}

const markersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_MARKERS:
            return {
                ...state,
                markers: Object.keys(payload).length > 0 ? [...state.markers, payload] : []
            }
        default:
            return state
    }
}

export default markersReducer
