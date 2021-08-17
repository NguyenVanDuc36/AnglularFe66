import { Component, OnInit, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ProductComponent } from '../Product/Product.component';

@Component({
    selector: 'app-productlist',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-3 mt-5" *ngFor="let product of products">
                <app-product (eventXemChiTiet)="xemChiTiet($event)" [product]  ="product" ></app-product>
            </div>
        </div>
    </div>
    <hr/>
    <input class="form-control" #idSP/>
    <button data-toggle="modal" data-target="#modelId" (click)="viewDetail(idSP.value)" class="btn btn-dark" >View detail</button>
    <button (click)="changePrice()" class="mt-5 btn btn-outline-primary">Change price</button>

    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{productDetail.name}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <img src={{productDetail.img}} class="w-75 text-center"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
       
    `
})

export class ProductListComponent implements OnInit {

    productDetail: Product = { id:1,name:'Iphone',price:1000,img:'https://picsum.photos/200/200'}

    product:Product = {
        id:1,name:'Iphone',price:1000,img:'https://picsum.photos/200/200'
    }


    products:Product[] = [
        { id:1,name:'Iphone',price:1000,img:'https://picsum.photos/200/200'},
        { id:2,name:'Iphone 5',price:1500,img:'https://picsum.photos/200/200'},
        { id:3,name:'Iphone 6',price:1600,img:'https://picsum.photos/200/200'},
        { id:4,name:'Iphone 7',price:1700,img:'https://picsum.photos/200/200'},
        { id:5,name:'Iphone X',price:2000,img:'https://picsum.photos/200/200'},
    ]

    xemChiTiet(objectEmit:any){
        this.productDetail = objectEmit;
    }

    @ViewChildren(ProductComponent) dsTagAppProduct!:QueryList<ProductComponent>

    constructor() { }

    changePrice(){
        this.dsTagAppProduct.forEach((tagProduct:ProductComponent,index)=>{
            tagProduct.product.price *= 1.05;
        })
    }

    viewDetail(idSP:string){
        let tagClick:any = this.dsTagAppProduct.find((tagProduct:ProductComponent)=>tagProduct.product.id == Number(idSP))
        if(tagClick){
            tagClick.eventXemChiTiet.emit(tagClick.product);
        }else{
            alert('The id is not require !')
        }
    }


    ngOnInit() { }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}