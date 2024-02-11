import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (baseURL) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async (options) => {
        try {
            let response = await axios.get(`${baseURL}/${options}`);
            setData(cards => [...cards, { ...response.data, id: uuid() }]);
        } catch(error) {
            setError(error);
        }
    }
    return [data, fetchData, error]
}

export default useAxios;


