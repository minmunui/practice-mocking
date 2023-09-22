import {instance} from "./index";

export const getProductById= async (id) => {
    try {
        return await instance.get(`/api/product/${id}`);
    } catch (error) {
        throw error;
    }
};

export const getProducts = async () => {
    try {
        return await instance.get(`/api/products`);
    } catch (error) {
        throw error;
    }
}