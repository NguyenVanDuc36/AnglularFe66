import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <div class="container">
            <!-- Button to Open the Modal -->
            

            <!-- The Modal -->
            <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <div class="form-group">
                        <p>UserName</p>
                        <input [(ngModel)]= "userLogin.username" class="form-control" />
                    </div>
                    <div class="form-group">
                        <p>Password</p>
                        <input  [(ngModel)]= "userLogin.password" class="form-control" />
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button data-dismiss="modal" class="btn btn-success" (click)="login()" >Login</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>


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
                        <li *ngIf="isLogin" class="nav-item">
                            <a class="nav-link"  data-toggle="modal" data-target="#myModal" href="#">Login</a>
                        </li>
                        <li *ngIf="!isLogin" class="nav-item">
                            <a class="nav-link"  href="#">Hello {{userName}}</a>
                        </li>
                        <li *ngIf="!isLogin" class="nav-item">
                            <a class="nav-link" (click)="signOut()" href="#">Đăng xuất</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    </form>
                </div>
            </nav>
        </div>
    `
})

export class LoginComponent implements OnInit {
    constructor() { }
    isLogin:boolean = true;
    userName:string = 'NguyenVanDuc';
    userLogin:any = {
        username : '',
        password :''
    }
    signOut =()=>{
        this.isLogin = true;
        localStorage.removeItem('userLogin')
    }
    login =() => {
        if(this.userLogin.username ==='NguyenVanDuc' && this.userLogin.password === '123123'){
            this.userName = this.userLogin.username;
            this.isLogin = false;

            localStorage.setItem('userLogin',this.userName);
        }else{
            alert('Tài khoản hoặc mật khẩu không chính xác')
        }
    }
    ngOnInit() {
        if(localStorage.getItem('userLogin')){
            this.userName = localStorage.getItem('userLogin')!;
            this.isLogin = false;
        }
    }
}