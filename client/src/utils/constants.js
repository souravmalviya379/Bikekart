
const API_ROOT = `http://localhost:8000/`;

export const API_URLS = {
    //users
    create: ()=> `${API_ROOT}/users/create`,
    createSession: ()=> `${API_ROOT}/users/create-session`,
    profile: ()=> `${API_ROOT}/users/profile`,

    //products and ratings
    addProduct: ()=> `${API_ROOT}/products/add-product`,
    fetchProducts: ()=> `${API_ROOT}`,
    fetchRating: (productId)=> `${API_ROOT}/products/fetch-rating/${productId}`,
    rateProduct: ()=> `${API_ROOT}/products/rate-product`
}

export const LOCALSTORAGE_TOKEN_KEY = 'bikekart_key'