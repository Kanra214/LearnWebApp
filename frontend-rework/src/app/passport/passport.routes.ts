import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PassportComponent } from './passport.component';

export const passportRoutes = [
    {
        path: '', 
        component: PassportComponent,
        children: [
            {path: '', redirectTo: 'login'},
            {path: 'login', component: LoginComponent },
            {path: 'signup', component: SignupComponent},
        ]
    },
]