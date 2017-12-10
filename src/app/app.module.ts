import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CoinComponent } from './components/coin/coin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CallbackComponent } from './components/callback/callback.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'categories/:catId', component: CategoryPageComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesPageComponent,
    CategoryPageComponent,
    CategoryComponent,
    CoinComponent,
    AdminDashboardComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
  ],
  providers: [
    CategoryService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
