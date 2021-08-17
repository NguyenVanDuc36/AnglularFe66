import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `
        <div class="container" >
            <h3>+ Oneway Interpolation</h3>
            <div  >{{title}}</div>
            
            <h3> + properties Binding</h3>
            <div  [innerHTML] = "title" ></div>
            <input  [value] = "title" />
            <h3> + Event Binding</h3>
            <input #inputTitle/>
            <button (click)="changeTitle(inputTitle.value)" class="btn btn-danger" >Change Title</button>

            <h2 class="text-danger" >2 / Twoway binding</h2>
            <input [(ngModel)]= "title"/>

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>totle</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of arrProduct" >
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td><input [(ngModel)] = "item.quantity"/></td>
                        <td>{{item.quantity * item.price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
// mvvm
export class DataBindingComponent implements OnInit {
    constructor() { }
    arrProduct:Product[] = [
        {id:'1',name:'iphone',price:1000,quantity:10},
        {id:'2',name:'oppo',price:1000,quantity:10},
        {id:'3',name:'xiaomi',price:1000,quantity:10}
    ]
    title:string = 'hello Nguyen Van Duc'
    changeTitle = (newTitle:string) =>{
        this.title = newTitle;
    }
    ngOnInit() { }
}

interface Product{
    id:string,
    name:string,
    price:number,
    quantity:number
}