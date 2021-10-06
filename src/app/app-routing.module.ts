import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagingtestComponent } from './pagingtest/pagingtest.component';

const routes: Routes = [
 {path:"",component:PagingtestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
