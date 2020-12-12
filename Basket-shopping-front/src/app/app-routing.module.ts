import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketComponent } from './page/basket/basket.component';



const routes: Routes = [
  { 
    path:'',
    redirectTo:'catalog',
    pathMatch: 'full'
  },
  { path:"catalog", component:CatalogComponent },
  { path:"basket", component:BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
