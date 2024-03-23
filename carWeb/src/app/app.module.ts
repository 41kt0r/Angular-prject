import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './features/home/home.component';
// import { LoginComponent } from './features/user/login/login.component';
// import { RegisterComponent } from './features/user/register/register.component';
// import { CatalogComponent } from './features/posts/catalog/catalog.component';
// import { CreateComponent } from './features/posts/create/create.component';
// import { DetailsComponent } from './features/posts/details/details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { UserModule } from './features/user/user.module';
import { PostsModule } from './features/posts/posts.module';
import { RequestInterceptor } from './core/interceptor/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // LoginComponent,
    // RegisterComponent,
    // CatalogComponent,
    // CreateComponent,
    // DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    PostsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
