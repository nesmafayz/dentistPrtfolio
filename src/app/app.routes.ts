import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { CasesComponent } from '../components/cases/cases.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CasesDetailsComponent } from '../components/cases/cases-details/cases-details.component';
import { DetailsDepthComponent } from '../components/cases/details-depth/details-depth.component';

export const routes: Routes = [
    {path:'', component:AboutComponent},
    {path:'about', component:AboutComponent},
    {path:'cases', component:CasesComponent},
    {path:'cases/:id', component:CasesComponent},
    {path: 'cases-details', component: CasesDetailsComponent },
    {path: 'cases-details/:id', component: CasesDetailsComponent },
    {path:'details-depth', component: DetailsDepthComponent},
    {path:'details-depth/:id', component: DetailsDepthComponent},
    {path:'**',component:NotFoundComponent}
];
