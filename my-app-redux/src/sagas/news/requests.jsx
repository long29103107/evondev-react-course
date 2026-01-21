import axios from 'axios';

const requestGetNews = async (query) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
        params: {
            query: query,
        },
    });
    return response;
};

export default requestGetNews;