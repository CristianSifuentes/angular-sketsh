import { type Routes, RouterModule } from '@angular/router';
import { Grid } from './components/grid/grid';
import { Error404 } from './errors/error-404/error-404';

// this section is created automatically
export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: Grid, 
    },{
        // comoding is used when route/path is not defined
        path: '**',
        pathMatch: 'full',
        component: Error404
    }
];
