import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'catalog',
    component:CatalogComponent
  },
  {
    path: 'create',
    component: CreateComponent, 
  },
  {
    path: 'cars/details/:carId',
    component: DetailsComponent
  },
  {
      path: 'cars/edit/:postId',
      // canActivate: [hasUserGuard],
      component: EditComponent 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
