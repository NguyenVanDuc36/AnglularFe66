import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditDSGheComponent } from './edit-danh-sach-ghe/edit-danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { QuanTriGheComponent } from './quan-tri-ghe.component';

@NgModule({
    declarations: [GheComponent,DanhSachGheComponent,EditDSGheComponent,QuanTriGheComponent],
    imports: [CommonModule,FormsModule],
    exports: [DanhSachGheComponent],
})
export class QuanTriGheModule { }
