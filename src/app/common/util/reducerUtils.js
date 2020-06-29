export const createReducer = (initialState, fnMap) => {

    console.log('fnMap', fnMap)

    return (state = initialState, {type, payload}) => {
        console.log('type', type)
        console.log('payload', payload)

        const handler = fnMap[type];
        return handler ? handler(state, payload) : state
    }
}