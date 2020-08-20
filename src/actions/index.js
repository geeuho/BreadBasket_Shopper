export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            item: item
        }
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: {
            item: item
        }
    }
}

export const updateUser = () => {
    return {
        type: 'CURRENT_USER',
        payload: {

        }
    }
}

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}