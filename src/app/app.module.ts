import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CoinComponent } from './components/coin/coin.component';

const appRoutes: Routes = [
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'categories/:catId', component: CategoryPageComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesPageComponent,
    CategoryPageComponent,
    CategoryComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
