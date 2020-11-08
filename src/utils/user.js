export default function getUser() {
    const data = localStorage.getItem('user');
    return JSON.parse(data);
}