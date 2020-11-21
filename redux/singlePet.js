//action
export const GET_SINGLE_PET = 'GET_SINGLE_PET'

export const getSinglePet = (dog) =>{
    return {
        type: GET_SINGLE_PET,
        dog
    }
}

//thunk
export const fetchSinglePet = id => {
    return dispatch =>{
        try {
        //   const { data } = await axios.get(`${id}`)
        const dogInfo = require('../db')
          dispatch(getSinglePet(dogInfo))
        } catch (error) {
          console.log(error)
        }
    }
}

const initialState = {}

//reducer
export const singlePet = (state = initialState, action) =>{
    switch (action.type) {
        case GET_SINGLE_PET:
            return action.dog
        default: return state
    }
}