import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES, { useHash: true });
