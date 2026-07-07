import { type Routes, RouterModule } from '@angular/router';
import { Grid } from './components/grid/grid';

// this section is created automatically
export const routes: Routes = [
    {
        path: '', component: Grid
    },
    {
        path: 'home', component: Grid, 

    }
];
