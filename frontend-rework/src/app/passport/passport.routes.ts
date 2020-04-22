import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const passportRoutes = [
    {path: '', redirectTo: 'login'},
    {path: 'login', component: LoginComponent },
    {path: 'signup', component: SignupComponent},
]