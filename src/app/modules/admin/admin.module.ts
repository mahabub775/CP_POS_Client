import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition, IconModule } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NgZorroControlsdModule  } from '../../ng.zorro.controls.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users.component';
import { UserregistrationComponent } from './userregistration.component';
import { UserComponent } from './user.component';
registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]) 


@NgModule({
  declarations: [
    UsersComponent,
    UserregistrationComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NgZorroControlsdModule,

    ScrollingModule,
    DragDropModule 
  ],
  exports:[IconModule],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class AdminModule { }
