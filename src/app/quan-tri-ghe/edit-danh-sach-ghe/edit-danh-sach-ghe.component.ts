import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
    selector: 'app-edit-dsghe',
    template: `
        
    `
})

export class EditDSGheComponent implements OnInit {
    
    @ViewChild('tagDsGhe') tagDsGhe!:DanhSachGheComponent;
    constructor() { }


    

    ngOnInit() { }
}

interface ghe {
    SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean
}