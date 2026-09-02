import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: "https://sakibbackend-1.onrender.com"
});



const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;