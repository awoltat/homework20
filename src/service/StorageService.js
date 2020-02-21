const USERS_KEY = 'users';

class StorageService {
    constructor() {
        if (!this.users) {
            this.users = [];
        }
    }

    get users() {
        return this.getItemFromLocalStorage(USERS_KEY);
    }

    set users(arr) {
        this.setItemInLocalStorage(USERS_KEY, arr);
    }

    setItemInLocalStorage(key, arr) {
        localStorage.setItem(key, JSON.stringify(arr));
    };

    getItemFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    };
}

export default StorageService;
