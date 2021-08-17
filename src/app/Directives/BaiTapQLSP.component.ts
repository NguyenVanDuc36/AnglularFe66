import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-qlsp',
    template: `
        <div class="container">
            <div style="width: 50%;margin: 0 auto;" class="card">
                <div class="card-header text-white bg-dark" >
                    <h1 class="text-light" >Quản lý sản phẩm</h1>
                </div>
              <div class="card-body">
                <div class="form-group">
                    <p>Mã sản phẩm</p>
                    <input [(ngModel)]="sanPham.maSP" class="form-control" />
                </div>
                <div class="form-group">
                    <p>Tên sản phẩm</p>
                    <input  [(ngModel)]="sanPham.tenSP"class="form-control" />
                </div>
                <div class="form-group">
                    <p>Giá sản phẩm</p>
                    <input [(ngModel)]="sanPham.giaSP" class="form-control" />
                </div>
              </div>
              <div class="card-footer">
                <button (click)="themSP()" class="btn btn-outline-success" >Thêm</button>
            </div>
            </div>

            <table class="table mt-5">
                <thead class="bg-dark text-light" >
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let sanPham of arrSanPham;let i = index" [ngClass]="{'bg-primary':(i+1)%2===0}" >
                        <td>{{i+1}}</td>
                        <td>{{this.sanPham.maSP}}</td>
                        <td>{{this.sanPham.tenSP}}</td>
                        <td>{{this.sanPham.giaSP.toLocaleString()}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class QLSPComponent implements OnInit {
    constructor() { }

    
    sanPham:SanPham = {
        tenSP:'',
        maSP: '',
        giaSP : 0
    }

    themSP =()=>{
        this.arrSanPham.push({...this.sanPham});
    }

    arrSanPham:SanPham[] = [
        {maSP : '1', tenSP : 'Iphone', giaSP : 1000}
    ]

    ngOnInit() { }
}

interface SanPham {
    maSP:string,
    tenSP:string,
    giaSP:number
}