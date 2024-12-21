import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'show-teams', pathMatch: 'full' },
  { path: 'add-team', loadChildren: () => import('./module/team/team.module').then(m => m.TeamModule) },
  { path: 'show-teams', loadChildren: () => import('./module/team/team.module').then(m => m.TeamModule) },
  { path: 'my-teams', loadChildren: () => import('./module/team/team.module').then(m => m.TeamModule) },
  { path: '**', component:NotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
