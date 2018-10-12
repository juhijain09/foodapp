import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FoodmenuComponent } from './component/foodmenu/foodmenu.component';
import { ROUTES } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodmenuComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
	RouterModule.forRoot(
    ROUTES,
      { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
