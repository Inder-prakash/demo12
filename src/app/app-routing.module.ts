import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { PagingtestComponent } from './pagingtest/pagingtest.component';

const routes: Routes = [
 {path:"",component:PagingtestComponent},
 {path:"demo",component:DemoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
