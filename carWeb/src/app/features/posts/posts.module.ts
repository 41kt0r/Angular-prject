import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { PostsRoutingModule } from './posts-routing.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    
  ]
})
export class PostsModule { }
