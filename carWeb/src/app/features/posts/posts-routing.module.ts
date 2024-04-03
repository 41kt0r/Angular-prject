import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { hasUserGuard } from 'src/app/core/guards/has-user.guard';

const routes: Routes = [
  {
    path: 'catalog',
    component:CatalogComponent
  },
  {
    path: 'create',
    canActivate: [hasUserGuard],
    component: CreateComponent, 
  },
  {
    path: 'cars/details/:carId',
    component: DetailsComponent
  },
  {
      path: 'cars/edit/:postId',
      canActivate: [hasUserGuard],
      component: EditComponent 
    },
    {
      path: '**',
      component: NotFoundComponent 
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
