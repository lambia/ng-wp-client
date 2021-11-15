import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ToDo: lazy loads

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, //se path è vuoto, porta in home
  // {
  //   path: "home",
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  // },
  // {
  //   path: "",
  //   component: Layout2Component,
  //   children: [

  //       {
  //           path: "**",
  //           redirectTo: "/404"
  //       }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
