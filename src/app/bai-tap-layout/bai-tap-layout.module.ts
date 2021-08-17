import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './Bai-tap-layout.component';
import { ContentsComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        HeaderComponent,
        SidebarComponent,
        ContentsComponent,
        FooterComponent,
    ],
    imports: [],
    exports: [BaiTapLayoutComponent],
})
export class BaiTapLayoutModule { }
