import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {TabsModule} from "ng2-bootstrap";
import { CategoryItemComponent } from './category-item/category-item.component';
import {AvatarComponent} from "./user/avatar/avatar.component";

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    CategoryListComponent,
    CategoryItemComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'category',
        component: CategoryListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
