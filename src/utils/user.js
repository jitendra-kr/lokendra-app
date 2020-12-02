function getUser() {

    if (typeof window !== "undefined") {
        const data = localStorage.getItem('user');
        if (data) {
            return JSON.parse(data);
        }
        return {};
    }

}

function isLoggedIn() {
    if (typeof window !== "undefined") {

        return localStorage.getItem('auth') ? true : false;
    }
}

function isAuthorisedToPostBlog () {
    let user = getUser();
     return user && user.role === 'admin'
}

// export getUser;
module.exports = {
    getUser: getUser,
    isLoggedIn: isLoggedIn,
    isAuthorisedToPostBlog: isAuthorisedToPostBlog
}

