import { loginuser, logoutuser } from "../reducers/userSlice";
import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";

export const asyncCurrentUser = () => async (dispatch,) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loginuser(user));
            console.log("Session Restored!");
        } else {
            console.log("Login to access the resource!");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncLoginUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            `/user?email=${user.email}&password=${user.password}`
        );
        if (data[0]) {
            console.log("User logged in!");
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(asyncCurrentUser());
        } else {
            toast.error('wrong credentials!')
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncRegisterUser = (user) => async () => {
    try {
        await axios.post("/user", user);
        console.log("User Registered!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncUpdateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/user/${id}`, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asyncCurrentUser());
        console.log("User Updated!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncLogoutUser = (user) => async (dispatch) => {
    try {
        localStorage.removeItem("user");
        dispatch(logoutuser(user));
        console.log("User logged out!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncDeleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/user/${id}`);
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};









export const asyncCartHandler = (updatedUser) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/user/${updatedUser.id}`, {
            cart: updatedUser.cart,
        });

        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loginuser(data)); // Update Redux store
    } catch (error) {
        console.error("Error updating cart:", error);
    }
};






