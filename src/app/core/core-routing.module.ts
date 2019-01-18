import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // {
  //   path: AppRoutes.remedy,
  //   loadChildren: '../remedy-form/remedy.module#RemedyModule',
  //   canActivate: [AuthGuard]
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
