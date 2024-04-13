import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatherHomeComponent } from './modules/wather/page/wather-home/wather-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'wather',
    pathMatch: 'full'
  },
  {
    path:'wather',
    component: WatherHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
