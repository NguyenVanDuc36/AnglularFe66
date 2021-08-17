import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// thư viện sử dụng 2waybinding
import { FormsModule} from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';

@NgModule({
    declarations: [DataBindingComponent],
    imports: [FormsModule , CommonModule],
    exports: [DataBindingComponent]
})
export class DataBindingModule { }
