export class AuthModel {
    private _isAuthenticated: boolean = false;
    private _emailAddress: string = '';
    private _token: string = '';

    constructor() {

    }

    public get isAuthenticated() {
        let val = localStorage.getItem('isAuthenticated')!;
        if (val || (val == 'true')) {
            this._isAuthenticated = true;
        } else {
            this._isAuthenticated = false;
        }
        return this._isAuthenticated;
    }

    public get emailAddress() {
        let val = localStorage.getItem('emailAddress')!;
        if (val) {
            return this._emailAddress;
        }
        return null;
    }

    public get token() {
        let val = localStorage.getItem('token')!;
        if (val) {
            return this._token;
        }
        return null
    }

    public setIsAuthenticated(isAuthenticated: boolean, username: string, token: string) {
        localStorage.setItem('isAuthenticated', String(isAuthenticated));
        localStorage.setItem('emailAddress', username);
        localStorage.setItem('token', token)
    }
}