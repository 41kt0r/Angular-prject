import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './posts/not-found/not-found.component';



@NgModule({
  declarations: [
    // NotFoundComponent
  ],
  imports: [
    CommonModule,
    PostsModule,
    UserModule,
    FormsModule
    
  ]
})
export class FeaturesModule { }
