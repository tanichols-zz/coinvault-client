import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { CategoryService } from './services/category.service';
import { CoinService } from './services/coin.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CoinComponent } from './components/coin/coin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';
import { AdminCoinComponent } from './pages/admin-coin/admin-coin.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: '/admin/categories',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'admin/categories',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/categories/:catId',
    component: AdminCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/categories/:catId/coins/:coinId',
    component: AdminCoinComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesPageComponent
  },
  {
    path: 'categories/:catId',
    component: CategoryPageComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  }
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
    CallbackComponent,
    AdminCategoryComponent,
    AdminCoinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CategoryService,
    CoinService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
