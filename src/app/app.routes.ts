import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { CasesComponent } from '../components/cases/cases.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CasesDetailsComponent } from '../components/cases/cases-details/cases-details.component';

export const routes: Routes = [
    {path:'', component:AboutComponent},
    {path:'about', component:AboutComponent},
    {path:'cases', component:CasesComponent},
    { path: 'case-details/:id', component: CasesDetailsComponent },
    {path:'**',component:NotFoundComponent}
];
