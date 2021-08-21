import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ds-ghe',
    template: `
        <div class="container mt-5">
            <div class="row">
                <div  class="col-6 bg-info p-4 mx-auto text-center text-light " style="border-right: solid 2px white;height:600px">
                    <h1 class="text-white text-center">Đặt ghế</h1>
                    <app-ghe [ghe]="ghe" *ngFor="let ghe of arrDanhSachGhe" (eventDatGhe)="datGhe($event)" ></app-ghe>
                    <p>Số ghế đã đặt : {{soGheDaDat}} </p>
                    <p>Số ghế còn lại : {{soGheConLai}}</p>
                </div>
                <div class="col-6 bg-info p-4 mx-auto text-center text-light">\
                    <h1 class="text-light" >Danh sách ghế bạn chọn</h1>
                    <table class="table " border="2">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá tiền</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let ghe of danhSachGheDuocChon" >
                                <td>{{ghe.TenGhe}}</td>
                                <td>{{ghe.Gia}}</td>
                                <td><button (click)="huyGhe(ghe.SoGhe)" class="btn btn-danger ">x</button></td>
                            </tr>
                            <tr>
                                <th>Tổng tiền</th>
                                <th>{{tongTien}}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <div class="w-50 mx-auto" >
                <h1 class="text-center" >Thêm ghế</h1>
                <div class="form-group">
                    <p>Tên ghế</p>
                    <input [(ngModel)]="danhSachThem.TenGhe" class="form-control" />
                </div>
                <div class="form-group">
                    <p>Số ghế</p>
                    <input [(ngModel)]="danhSachThem.SoGhe" class="form-control" />
                </div>
                <div class="form-group">
                    <p>Giá</p>
                    <input [(ngModel)]="danhSachThem.Gia" class="form-control" />
                </div>
                <button (click)="themGhe()" class="btn btn-success text-center" >Thêm ghế</button>
        </div>
        </div>
    `
})

export class DanhSachGheComponent implements OnInit {
    
    arrDanhSachGhe:ghe[] = [
        {SoGhe:1,TenGhe:"số 1", Gia:100, TrangThai:false},
        {SoGhe:2,TenGhe:"số 2", Gia:100, TrangThai:false},
        {SoGhe:3,TenGhe:"số 3", Gia:100, TrangThai:false},
        {SoGhe:4,TenGhe:"số 4", Gia:100, TrangThai:false},
        {SoGhe:5,TenGhe:"số 5", Gia:100, TrangThai:false},
        {SoGhe:6,TenGhe:"số 6", Gia:100, TrangThai:false},
        {SoGhe:7,TenGhe:"số 7", Gia:100, TrangThai:false},
        {SoGhe:8,TenGhe:"số 7", Gia:100, TrangThai:false},
        {SoGhe:9,TenGhe:"số 9", Gia:100, TrangThai:false},
        {SoGhe:10,TenGhe:"số 10", Gia:100, TrangThai:false},
        {SoGhe:11,TenGhe:"số 11", Gia:100, TrangThai:false},
        {SoGhe:12,TenGhe:"số 12", Gia:100, TrangThai:false},
        {SoGhe:13,TenGhe:"số 13", Gia:100, TrangThai:false},
        {SoGhe:14,TenGhe:"số 10", Gia:100, TrangThai:false},
        {SoGhe:15,TenGhe:"số 11", Gia:100, TrangThai:false},
        {SoGhe:16,TenGhe:"số 12", Gia:100, TrangThai:false},
        {SoGhe:17,TenGhe:"số 13", Gia:100, TrangThai:false},
        {SoGhe:18,TenGhe:"số 14", Gia:100, TrangThai:false},
        {SoGhe:19,TenGhe:"số 15", Gia:100, TrangThai:false},
        {SoGhe:20,TenGhe:"số 20", Gia:100, TrangThai:false},
        {SoGhe:21,TenGhe:"số 21", Gia:100, TrangThai:false},
        {SoGhe:22,TenGhe:"số 22", Gia:100, TrangThai:false},
        {SoGhe:23,TenGhe:"số 23", Gia:100, TrangThai:false},
        {SoGhe:24,TenGhe:"số 24", Gia:100, TrangThai:false},
        {SoGhe:25,TenGhe:"số 25", Gia:100, TrangThai:false},
        {SoGhe:26,TenGhe:"số 26", Gia:100, TrangThai:false},
        {SoGhe:27,TenGhe:"số 27", Gia:100, TrangThai:false},
        {SoGhe:28,TenGhe:"số 28", Gia:100, TrangThai:false},
        {SoGhe:29,TenGhe:"số 29", Gia:100, TrangThai:false},
        {SoGhe:30,TenGhe:"số 30", Gia:100, TrangThai:false},
        {SoGhe:31,TenGhe:"số 31", Gia:100, TrangThai:false},
        {SoGhe:32,TenGhe:"số 32", Gia:100, TrangThai:false},
        {SoGhe:33,TenGhe:"số 33", Gia:100, TrangThai:false},
        {SoGhe:34,TenGhe:"số 34", Gia:100, TrangThai:false},
        {SoGhe:35,TenGhe:"số 35", Gia:100, TrangThai:false},
        {SoGhe:36,TenGhe:"số 36", Gia:100, TrangThai:false},

       

    ]
    gheChiTiet:any;
    danhSachGheDuocChon:ghe[] = [];
    tongTien:number = 0;
    soGheDaDat:number = 0;
    soGheConLai:number = 0;

    danhSachThem:ghe = {
        SoGhe:0,
        TenGhe:'',
        Gia:0, 
        TrangThai:false
    }
    constructor() { }

    ngOnInit() { 
        this.soGheConLai = this.arrDanhSachGhe.length;
    }

    datGhe(objectEmit:any){
        
        // this.gheChiTiet = objectEmit;

        let index:number = this.arrDanhSachGhe.findIndex(ghe =>ghe.SoGhe === objectEmit.SoGhe )

        
        if(this.arrDanhSachGhe[index].TrangThai == false){
            this.arrDanhSachGhe[index].TrangThai = true;
            this.soGheDaDat +=1;
            this.soGheConLai -= 1;
            this.danhSachGheDuocChon.push(this.arrDanhSachGhe[index])
            console.log('danh sach ghe duoc chon', this.danhSachGheDuocChon);
            this.tongTien += this.arrDanhSachGhe[index].Gia;
        }else{
            this.arrDanhSachGhe[index].TrangThai = false;
            this.soGheDaDat -=1;
            this.soGheConLai += 1;
            let i = this.danhSachGheDuocChon.findIndex(ghe => ghe.SoGhe == objectEmit.SoGhe)
            this.danhSachGheDuocChon.splice(i,1);
            this.tongTien -= this.arrDanhSachGhe[index].Gia;
        }

            

        
    }

    huyGhe(soGhe:number){
        let index = this.danhSachGheDuocChon.findIndex(ghe => ghe.SoGhe == soGhe)
        console.log(index);
        this.danhSachGheDuocChon.splice(index,1)  
        let i = this.arrDanhSachGhe.findIndex(ghe => ghe.SoGhe == soGhe)
        this.arrDanhSachGhe[i].TrangThai = false;
        this.tongTien -= this.arrDanhSachGhe[i].Gia;    
    }

    themGhe(){
        let indexSo = this.arrDanhSachGhe.findIndex(ghe=>ghe.SoGhe == this.danhSachThem.SoGhe)
        let indexTen = this.arrDanhSachGhe.findIndex(ghe=>ghe.TenGhe == this.danhSachThem.TenGhe)
        if(indexSo != -1 || indexTen !=-1){
            alert('Ghế đã có')
        }else{
            this.arrDanhSachGhe.push({...this.danhSachThem}) 
        }
        
        console.log(this.danhSachThem);
        
    }

    
}

interface ghe {
    SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean
}