import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe/search/search.pipe';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const appRoutes : Routes =[
  {
  path : "",
  component : LoginComponent
  },
  {
    path:"main",
    component: MainComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
