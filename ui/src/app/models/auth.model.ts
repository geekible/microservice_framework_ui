import * as CryptoJS from 'crypto-js';

export class AuthModel {
    private _isAuthenticated: boolean = false;
    private _emailAddress: string = '';
    private _token: string = '';

    constructor() {

    }

    isAuthenticatedName: string = 'isAuthenticated';
    emailAddressName: string = 'emailAddress';
    tokenName: string = 'token';

    key = CryptoJS.enc.Utf8.parse('1203199320052021');
    iv = CryptoJS.enc.Utf8.parse('1203199320052021');

    public get isAuthenticated() {
        let val = localStorage.getItem(this.encryptData(this.isAuthenticatedName))!;
        if (!val) {
            return false;
        }

        val = this.decryptData(val);
        if (val || (val == 'true')) {
            this._isAuthenticated = true;
        } else {
            this._isAuthenticated = false;
        }
        return this._isAuthenticated;
    }

    public get emailAddress() {
        let val = localStorage.getItem(this.emailAddressName)!;
        val = this.decryptData(val);
        if (val) {
            return this._emailAddress;
        }
        return null;
    }

    public get token() {
        let val = localStorage.getItem(this.tokenName)!;
        val = this.decryptData(val);
        if (val) {
            return this._token;
        }
        return null
    }

    public setIsAuthenticated(isAuthenticated: boolean, username: string, token: string) {
        
        localStorage.setItem(
            this.encryptData(this.isAuthenticatedName), 
            this.encryptData(String(isAuthenticated)
            ));
            
        localStorage.setItem(
            this.encryptData(this.emailAddressName), 
            this.encryptData(username)
            );

        localStorage.setItem(
            this.encryptData(this.tokenName), 
            this.encryptData(token)
            );
    }

    public doLogout() {
        localStorage.removeItem(
            this.encryptData(this.isAuthenticatedName)
        );

        localStorage.removeItem(
            this.encryptData(this.emailAddressName)
        );

        localStorage.removeItem(
            this.encryptData(this.tokenName)
        );
    }

    private encryptData(data: string) {
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }

    private decryptData(data: string) {
        var decrypted = CryptoJS.AES.decrypt(data, this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}