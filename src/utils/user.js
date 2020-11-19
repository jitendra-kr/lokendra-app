export function getUser() {
    const data = localStorage.getItem('user');
    return JSON.parse(data);
}

export function isLoggedIn() {
    return localStorage.getItem('auth') ? true : false;
}

