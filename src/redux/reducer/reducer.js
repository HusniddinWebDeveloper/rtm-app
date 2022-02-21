import { actiontypes } from "../actiontypes/actiontypes";

const initalStore = {
    menuMedia: false,
    modal: false,
    grid: false
};
const todoReducer = (store = initalStore, action) => {
    switch(action.type) {
        case actiontypes.OPENMENU: 
            return store = {
                        ...store,
                        menuMedia: action.payload,
                    };
        case actiontypes.OPENMODAL:
            return store = {
                ...store,
                modal: action.payload
            };
        case actiontypes.GRIDCHANGE:
            return store = {
                ...store,
                grid: action.payload
            };
        default:
            return store;
    }
}

export default todoReducer;
