import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <div class="card">
            <img class="w-full" src="https://picsum.photos/200/200" />
            <div class="card-body">
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>
                <button (click)="xemChiTiet()" data-toggle="modal" data-target="#modelId" class="btn btn-outline-danger" >Xem chi tiet</button>
            </div>
        </div>
    `
})

export class ProductComponent implements OnInit {
    @Input() product!:Product
    //Thuộc tính này dùng để đưu dữ liệu ra component cha
    @Output() eventXemChiTiet = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    xemChiTiet(){
        this.eventXemChiTiet.emit(this.product)
    }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}