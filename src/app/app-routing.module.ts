import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UserlistComponent } from './component/userlist/userlist.component';

const routes: Routes = [
  {
    path:'' , component : UserlistComponent
  },
  {
    path:'userdetail/:id' , component : UserdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
