export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (credential) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
    })
        .then((res) => {
            if (res.status === 201) {
                return res.json()
            } else {
                throw new Error(`Ошибка: ${res.status} ${res.statusText} `)
            }
        })
        .then((res) => {
            return res;
        })
}

export const authorize = (credential) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error(`Ошибка: ${res.status} ${res.statusText} `)
            }
        })
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data;
            }
        })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error(`Ошибка: ${res.status} ${res.statusText}`)
            }
        })
        .then(data => data)
}