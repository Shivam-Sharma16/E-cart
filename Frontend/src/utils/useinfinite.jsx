import { useDispatch, useSelector } from "react-redux";
import { loadproduct } from "../store/reducers/productSlice";
import axios from "../api/axiosconfig";
import { useEffect, useState } from "react";

const useInfinite = () => {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.productReducer);
    const [hasMore, sethasMore] = useState(true);
    const fetchlazyProducts = async () => {
        try {
            const { data } = await axios.get(
                `/products?_limit=6&_start=${product.length}`
            );
            if (data.length === 0) {
                sethasMore(false);
            } else {
                dispatch(loadproduct(data));
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchlazyProducts();
    }, []);

    return { product, hasMore, fetchlazyProducts };
};

export default useInfinite;