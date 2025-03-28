import {createSlice} from "@reduxjs/toolkit"

const initialState={
    user:{}
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setAuthUser:(state,action)=>{
          state.user=action.payload
        } ,
        deletAuthUser:(state,action)=>{
         state.user=null;
        } 

    }

    
})
export const {setAuthUser,deletAuthUser} =userSlice.actions;
export default userSlice.reducer;