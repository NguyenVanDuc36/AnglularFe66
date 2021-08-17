import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './ProductList/ProductList.component';

@Component({
    selector: 'app-props',
    template: `
        <div class="container">
            <h1 class="text-danger" >@input: </h1>
            <app-productlist #tagProductList ></app-productlist>

            <p id="theP" class="mt-5" #tagP >Ahihi</p>
            <button (click) = "viewDom()" class="btn btn-outline-warning" >DOM</button>

            <div>
                <h3>Thông tin sản phẩm</h3>
                <div class="form-group">
                    <p>ID</p>
                    <input #id class="form-control"/>
                </div>
                <div class="form-group">
                    <p>Name</p>
                    <input #name class="form-control"/>
                </div><div class="form-group">
                    <p>Price</p>
                    <input #price class="form-control"/>
                </div>
                <div class="form-group">
                    <button (click)="addProduct(id.value,name.value,price.value)" class="btn btn-outline-warning" >Add product</button>
                </div>
            </div>
        </div>
    `
})

export class PropsComponent implements OnInit {
    constructor() { }

    @ViewChild('tagP') tagP!:ElementRef;
    @ViewChild('tagProductList') tagProductList!:ProductListComponent;
    addProduct(id:string,name:string,price:string){
        let product:Product = {id:Number(id),name:name, price:Number(price),img:`https://picsum.photos/id/${id}200/200`}
        this.tagProductList.products.push(product);
    }
    viewDom(){
        console.log(this.tagProductList);
    }
    ngOnInit() { }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}