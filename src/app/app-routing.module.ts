import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'charcc-informations',
    loadChildren: () => import('./charcc-informations/charcc-informations.module').then(m => m.CharccInformationsPageModule)
  },
  {
    path: 'charcc-informations/:id',
    loadChildren: () => import('./charcc-informations/charcc-informations.module').then(m => m.CharccInformationsPageModule)
  },
  {
    path: 'charcc-stats',
    loadChildren: () => import('./charcc-stats/charcc-stats.module').then(m => m.CharccStatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
