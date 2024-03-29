import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './ProductList/ProductList.component';
import { PropsComponent } from './Props.component';


@NgModule({
    declarations: [PropsComponent, ProductComponent,ProductListComponent],
    imports: [CommonModule],
    exports: [PropsComponent],
})
export class PropsModule { }
