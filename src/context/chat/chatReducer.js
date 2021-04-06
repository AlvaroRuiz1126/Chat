import { types } from "../../types/types";

const initialState = {
    uid: '',
    activeChat: null,
    userList: [],
    messages: [],
};

export const chatReducer = (state, action) => {
    switch (action.type) {
        case types.usersLoaded:
            return {
                ...state,
                userList: [...action.payload],
            };

        case types.activeChat:
            if(state.activeChat === action.payload) return state;

            return {
                ...state,
                activeChat: action.payload,
                messages: [],
            };

        case types.newMessage:
            if(state.activeChat === action.payload.de || state.activeChat === action.payload.para) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                };
            }else{
                return state;
            }

        case types.loadMessages:
            return {
                ...state,
                messages: [...action.payload]
            }

        case types.cleanMessages:
            return initialState;

        default:
            return state;
    }
};