import { createSlice } from "@reduxjs/toolkit";

import { usersData } from "../FakeData"; // array of objects

export const userSlice = createSlice({
    name: "users",
    initialState: { value: usersData },
    reducers: { //functions
        addUser: (state, action) => {
            // state.value.push(action.payload); // 1
            return { ...state, value: [...state.value, action.payload] } // 2
        },
        deleteUser: (state, action) => {
            const updatedUsersList = state.value.filter((user) => user.id !== action.payload.id);
            return { ...state, value: updatedUsersList };
        },
        updateUsername: (state, action) => {
            const updatedUsersList = state.value.map((user) => {
                if (user.id === action.payload.id) {
                    return { ...user, username: action.payload.username }
                }
                // else: 
                return user; //return the user object as it is
            });
            // Now the array is updated, return the state with the array updated:
            return { ...state, value: updatedUsersList };
        },
    }
});

export const { addUser, updateUsername, deleteUser } = userSlice.actions;
//userSlice.actions returns all actions (all reducer functions)

export default userSlice.reducer; //will be exported in index.js as: usersReducer
