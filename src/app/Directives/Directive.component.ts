import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <!-- <h3 class="text-center">Demo directive</h3>
            <h3 class="text-danger" >+ *ngIf</h3>
            <p *ngIf="status" >Title sybersoft</p>
            <button class="btn btn-danger" (click)="anHien()" >Show hide</button>

            <div class="form-group mt-2 mb-2">
                <input class="form-control mb-2" #num/>
                <button class="btn btn-outline-success" (click)="changeNumber(num.value)">OK</button>
            </div>
            <h3>Số {{number}} </h3>
            <div *ngIf="number%2===0">Số chẵn</div>
            <div *ngIf="number%2!==0">Số lẻ</div>
            <h3>Ví dụ :</h3>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="nav-item " *ngIf="isLogin;else divLogin">
                            <a class="nav-link text-white" href="#">{{userName}}</a>
                            <a class="nav-link text-white" (click)="dangXuat()" href="#">Đăng xuất</a>
                        </div>
                    </form>
                </div>
            </nav>
            <ng-template #divLogin>
                <div class="nav-item ">
                    <a class="nav-link text-white" (click)="login()" href="#">Đăng nhập</a>
                </div>
            </ng-template>
            <hr/>
            <h3 class="text-danger">*ngSwitchCase</h3>
            <div [ngSwitch]="color" >
                <div *ngSwitchCase = "'red'" style="color:red;" >Red</div>
                <div *ngSwitchCase = "'green'" style="color:green;" >green</div>
                <div *ngSwitchCase = "'pink'" style="color:pink;" >pink</div>
                <div *ngSwitchCase = "'blue'" style="color:blue;" >blue</div>
                <div *ngSwitchDefault style="color:orange;" >Orange</div>
            </div>

            <select class="form-control" [(ngModel)]="color" >
                <option value="red">Red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
            </select>
            <hr/>
            <h3 class="text-danger" >*ngFor : Dùng để render các phần tử giống nhau trên giao diện</h3>
            <div class="row">
                <div class="col-4" *ngFor="let item of arrProduct">
                    <div class="card mt-5">
                      <img class="card-img-top" src={{item.img}} alt="">
                      <div class="card-body">
                        <h4 class="card-title">{{item.name}}</h4>
                        <p class="card-text">{{item.price.toLocaleString()}}</p>
                        <button class="btn btn-outline-success" >Đặt hàng</button>
                      </div>
                    </div>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm </th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                        <tr [ngClass]="{'text-danger':item.id%2===0,'text-primary':item.id%2!==0}" *ngFor="let item of arrProduct" >
                            <td><img height="50"  src={{item.img}}/></td>
                            <td>{{item.id}}</td>
                            <td>{{item.name}} </td>
                            <td>{{item.price}}</td>
                        </tr>   
                </tbody>
            </table>
            <hr/>
            <h3 class="text-danger">[ngStyle]</h3>
            <button (click)="tangFont()" class="btn btn-success ml-5" >+</button>
            <button (click)="giamFont()" class="btn btn-success ml-5" >-</button>
            <p [ngStyle]="{'font-size' : fontSize+'px' }" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quo ratione quam ea ut quasi ad doloremque dicta fugiat quos, et nesciunt obcaecati placeat magnam blanditiis assumenda esse! Saepe, tempore.</p>
            <hr/> -->

            <h1 class="text-danger text-center" >Bài tập 5</h1>
            <app-login></app-login>
            <h1 class="mt-5 mb-5 text-center text-danger" >Bài tập 6</h1>
            <app-qlsp></app-qlsp>

            <!-- <hr/>
            <button nz-button nzType="primary">Primary Button</button>
            <h3>Material</h3>
            <button mat-stroked-button color="primary">Primary</button>
            <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
                <mat-icon>delete</mat-icon>
            </button> -->
        </div>
    `
})

export class DirectiveComponent implements OnInit {
    constructor() { }
    color:string = 'blue';
    status:boolean = true;
    number:number = 3;
    userName:string = "Nguyen Van Duc";
    isLogin:boolean = false;
    fontSize:number = 15;
    arrProduct:any[] = [
        {id:1,name:'Iphone',price:1000,img:'https://picsum.photos/id/1/200/200'},
        {id:2,name:'Redmi',price:2000,img:'https://picsum.photos/id/2/200/200'},
        {id:3,name:'Samsung',price:1200,img:'https://picsum.photos/id/3/200/200'},
        {id:4,name:'Oppo',price:1500,img:'https://picsum.photos/id/4/200/200'},
    ]

    tangFont = ()=>{
        this.fontSize += 5;
    }
    giamFont = ()=>{
        this.fontSize -= 5;
    }
    anHien = () =>{
        this.status = !this.status;
    }


    changeNumber = (num:string) =>{
        this.number = Number(num);
    } 

    login =()=>{
        this.isLogin = true;
    }

    dangXuat =()=>{
        this.isLogin = false;
    }

    ngOnInit() { }
}