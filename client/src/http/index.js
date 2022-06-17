import axios from 'axios'

// обычные запросы
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// Запросы с токеном (получаем через интерцептор)
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host, $authHost
}