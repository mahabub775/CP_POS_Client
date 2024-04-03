import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MainlayoutRoutingModule } from './mainlayout-routing.module';
import { MainlayoutComponent } from './mainlayout.component';

import { NzIconModule } from 'ng-zorro-antd/icon';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition, IconModule } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { MenuFoldOutline,  MenuUnfoldOutline, UserOutline, UserAddOutline, TeamOutline } from '@ant-design/icons-angular/icons';
import { NgZorroControlsdModule  } from '../../ng.zorro.controls.module';
//import { NzDemoLayoutCustomTriggerComponent } from './app.component';
registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]) 
const childicons: IconDefinition[] = [MenuFoldOutline,  MenuUnfoldOutline, UserOutline, UserAddOutline, TeamOutline];

@NgModule({
  declarations: [
    MainlayoutComponent,
  ],
  imports: [
    
    CommonModule,
    MainlayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NgZorroControlsdModule,
    // BrowserAnimationsModule,
    //
    ScrollingModule,
    DragDropModule 
  ],
  bootstrap:[MainlayoutComponent],
  exports:[IconModule],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class MainlayoutModule { }
