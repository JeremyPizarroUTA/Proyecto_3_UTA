import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { BlankComponent } from './blank/blank.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { GerenteComponent } from './gerente/gerente.component';

const APP_ROUTES: Routes = [
    {path : 'dashboard', component: DashboardComponent },
    {path : 'profile', component: ProfileComponent },
    {path : 'error404', component:Error404Component },
    {path : 'basic-table', component:BasicTableComponent  },
    {path : 'fontawesome', component:FontawesomeComponent },
    {path : 'map-google', component:MapGoogleComponent },
    {path : 'blank', component:BlankComponent },
    {path : 'empleado', component:EmpleadoComponent},
    {path : 'gerente', component:GerenteComponent},
    {path :  '**', pathMatch:'full', redirectTo: 'error404'}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);