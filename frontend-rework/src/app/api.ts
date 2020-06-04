import { environment } from '../environments/environment'
let host = environment.host + ':3000';
export const api = {
    'validatesignup':{
        'username':host + '/api/users/checkusernametaken',
        'email':host + '/api/users/checkemailtaken',

    },
    'signup': host + '/api/auth/signup',
    'login': host + '/api/auth/login',
    'group': host + '/api/groups',
    'message': host + '/api/messages',
}