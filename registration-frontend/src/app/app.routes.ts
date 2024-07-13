import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StdhomeComponent } from './stdhome/stdhome.component';
import { stdformComponent } from './stdform/stdform.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StdaboutusComponent } from './stdaboutus/stdaboutus.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sform', component: stdformComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent},
    {
        path: 'dashboard', 
        component: DashboardComponent,
        children:[
            {path: '', component: StdhomeComponent},
            {path: 'sform', component: stdformComponent},
            {path: 'saboutus', component: StdaboutusComponent},
        ]
    }
];
