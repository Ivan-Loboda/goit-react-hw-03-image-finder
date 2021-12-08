import axios from "axios";
import Notiflix from 'notiflix';

const baseUrl = 'https://pixabay.com/api/?';
const KEY = '23763400-56e03b3c97aa031975e4c0255';
const perPage = '12';
const filterUrl = '&image_type=photo&orientation=horizontal&safesearch=true';

// function fetchImages(searchImages, page) {
//     return fetch(
//         `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchImages}&page=${page}&per_page=${perPage}&key=${KEY}`,
//     )
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(response => {
//             return response.hits;
//         });
// }

export const fetchImages = async (inputData, page) => {
    const data = await axios.get(`${baseUrl}&key=${KEY}&q=${inputData}${filterUrl}&page=${page}&${perPage}`)

    if (data.status >= 200 && data.status < 300) {
        return data;
    }
    if (data.status === 404) {
        return Notiflix.Notify.info("Oops, there is no country with that name.")
    };
    throw new Error(data.status);
};
