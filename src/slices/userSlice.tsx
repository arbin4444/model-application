import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name : "users",
    initialState: [
        {
      sn: 1,
      name: "Test 1",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 2,
      name: "Test 2",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 3,
      name: "Test 3",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 4,
      name: "Test 4",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 5,
      name: "Test 5",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 6,
      name: "Test 6",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 7,
      name: "Test 7",
      version: "V 0.0.1",
      createdBy: "Shikha Kandel",
      createdAt: "2025/04/15",
    },
    ],
    reducers :{
        deleteUser:(state,action)=>{
           return state.filter((user)=>user.sn !== deleteUserId);
        }
    }
})

export const {deleteUser}=userSlice.actions;
export default userSlice.reducer