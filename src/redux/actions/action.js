import { actiontypes } from "../actiontypes/actiontypes"

export const openMenu = (newData) => {
    return {
        type: actiontypes.OPENMENU,
        payload: newData
    }
}

export const openModal = (newData) => {
    return {
        type: actiontypes.OPENMODAL,
        payload: newData
    }
}

export const gridChange = (newData) => {
    return {
        type: actiontypes.GRIDCHANGE,
        payload: newData
    }
}




