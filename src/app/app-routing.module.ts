import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchesComponent } from './pages/matches/matches.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  { path: '', component: MatchesComponent },
  { path: 'matches', component: MatchesComponent },
  {
    path: 'messages',
    loadComponent: () =>
      import('./pages/messages/messages.component').then(
        (c) => c.MessagesComponent
      ),
  },
  {
    path: 'lists',
    loadComponent: () =>
      import('./pages/lists/lists.component').then((c) => c.ListsComponent),
  },
  { path: '**', redirectTo: 'matches' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
