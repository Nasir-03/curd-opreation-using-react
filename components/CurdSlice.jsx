import { createSlice } from "@reduxjs/toolkit";
import { example } from "./Example";

const initialState = {
    data: example
}

const CurdSlice = createSlice({
    name: 'curd',
    initialState,
    reducers: {
        create: (state, action) => {
            const{id ,name, email} = action.payload
            const tod = {
                id: id,
                email: email,
                name: name
            }
            state.data.push(tod)
        },
        deleteUsers: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id);
        },
        updateUsers: (state, action) => {
              const{id, name, email} = action.payload
              const userToUpdate = state.data.find((user) => user.id == id);

    if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
    }
        }
    }
})

export const { create, deleteUsers, updateUsers } = CurdSlice.actions;
export default CurdSlice.reducer;