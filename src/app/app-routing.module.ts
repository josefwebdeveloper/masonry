import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'topic',
    component: HomeComponent,
    children: [
      {
        path: '**',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
