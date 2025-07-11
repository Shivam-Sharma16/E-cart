import axios from '../../api/axiosconfig'
import { loadproduct } from '../reducers/productSlice';

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/product', product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error);
    }
}


export const asyncLoadProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/product')
        dispatch(loadproduct(data))
    } catch (error) {
        console.log(error);

    }
}


export const asyncUpdateProduct = (product, id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch('/product/' + id, product)
        dispatch(asyncLoadProduct(data))
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.delete('/product/' + id)
        dispatch(asyncLoadProduct(data))
    } catch (error) {
        console.log(error);

    }
}