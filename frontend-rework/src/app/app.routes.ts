
export const appRoutes = [
    {path: '', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)},
    {path: 'passport', loadChildren: () => import('./passport/passport.module').then(m => m.PassportModule)},
]
