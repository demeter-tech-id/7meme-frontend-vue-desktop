

const USER_INFO = {
    username: null,
    uuid: null
}

initUserInfoFromCookie();


export default {
    getAppName() {
        return '7Meme';
    },

    getSession() {
        return {
            username: USER_INFO.username,
            uuid: USER_INFO.uuid,
        };
    },

    setSession(username, uuid) {
        USER_INFO.username = username;
        USER_INFO.uuid = uuid;
        const expires = getSessionExpires();
        const path = '/';
        window.document.cookie = `username=${username}; expires= ${expires}; path=${path}`;
        window.document.cookie = `uuid=${uuid}; expires= ${expires}; path=${path}`;
    },

    clearSession() {
        USER_INFO.username = null;
        USER_INFO.uuid = null;
        window.document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        window.document.cookie = "uuid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    },

    hasSession() {
        return !!(USER_INFO.username && USER_INFO.uuid);
    }
};

function initUserInfoFromCookie() {
    console.log('Initializing User Info: ', savedCookie);
    let savedCookie = window.document.cookie;
    let count = 0;
    let cookies = savedCookie.split(";");
    for (let index in cookies) {
        let [key, value, _] = cookies[index].split('=');
        if (key && value) {
            key = key.trim();
            value = value.trim();
            if (key == 'username') {
                USER_INFO.username = value;
            } else if (key == 'uuid') {
                USER_INFO.uuid = value;
            }
            count++;
        }
    }
    return count > 0;
}

function getSessionExpires() {
    const now = new Date();
    now.setMonth(now.getMonth() + 2);
    return now.toUTCString();
}
