import { CommonModule } from '@angular/common';
// phải import common để sử dụng directives
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './BaiTapLogin.component';
import { QLSPComponent } from './BaiTapQLSP.component';
import { DirectiveComponent } from './Directive.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MarterialModule } from '../_Core/Material/MaterialModule.module';

@NgModule({
    declarations: [DirectiveComponent, LoginComponent, QLSPComponent],
    imports: [CommonModule ,FormsModule, NzButtonModule,MarterialModule],
    exports: [DirectiveComponent],

})
export class DirectiveModule { }
