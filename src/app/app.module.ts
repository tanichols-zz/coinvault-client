import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoinComponent } from './components/coin/coin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

const appRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:catId', component: CategoryComponent},
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinComponent,
    CategoriesComponent,
    CategoryComponent
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
