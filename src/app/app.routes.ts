import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodmenuComponent } from './component/foodmenu/foodmenu.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';


export const ROUTES:Routes =[
  { path: "", redirectTo: "app-root", pathMatch: "full" },
  { path: "foodmenu/chinese", component:FoodmenuComponent },
  { path: "foodmenu/indian", component:FoodmenuComponent },
  { path: "foodmenu/fastfood", component:FoodmenuComponent },
  { path: "landing-page", component:LandingPageComponent }
]