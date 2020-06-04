import { DiretivaComponentComponent } from './diretiva-component/diretiva-component.component';
import { LoginComponent } from './security/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';


const routes: Routes = [
  {
    path:"",redirectTo:"index", pathMatch:"full"
  },
  {
    path:"diretiva",component:DiretivaComponentComponent
  },
/*   {
    path: '**',
   
    component: UnknownPageComponent
  }, */
  {path:"security" , loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)},
  {path:"index" , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
