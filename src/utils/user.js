import { isEmpty } from "lodash";
import { httpGet } from "./http"

function fetchUpdatedUserFromServer(id) {
  return httpGet({
    url: `user/${id}`,
  })
}

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
        return localStorage.getItem('auth') &&  !isEmpty(getUser()) ? true : false;
    }
}

function isAuthorisedToPostBlog () {
    let user = getUser();
     return user && user.role === 'admin'
}

function isAuthorisedToPwdManager () {
    let user = getUser();
     return user && user.pmAccess === true;
}

// export getUser;
module.exports = {
    getUser: getUser,
    isLoggedIn: isLoggedIn,
    isAuthorisedToPostBlog: isAuthorisedToPostBlog,
    fetchUpdatedUserFromServer: fetchUpdatedUserFromServer,
    isAuthorisedToPwdManager
}

