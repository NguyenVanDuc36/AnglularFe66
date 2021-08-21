import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/Bai-tap-layout.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { ContentsComponent } from './bai-tap-layout/content.component';
import { FooterComponent } from './bai-tap-layout/footer.component';
import { HeaderComponent } from './bai-tap-layout/header.component';
import { SidebarComponent } from './bai-tap-layout/sidebar.component';
import { RegisterModule } from './DataBinding/BaiTapForm/Register.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { DirectiveModule } from './Directives/Directive.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PropsModule } from './Props/Props.module';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    RegisterModule,
    DirectiveModule,
    NoopAnimationsModule,
    PropsModule,
    QuanTriGheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
