import { Component, OnInit,Input, Output , EventEmitter } from '@angular/core';


@Component({
    selector: 'app-ghe',
    template: `
        <button [ngClass]="{'btn-light':!ghe.TrangThai,'btn-success':ghe.TrangThai}" (click)="datGhe()" style="border: 3px solid orange;width: 45px;height: 35px; font-size: 12px;border-radius: 5px;" class="btn mr-2 mb-2 p-0">{{ghe.SoGhe}}</button>
    `
})

export class GheComponent implements OnInit {
    @Input() ghe!:ghe;
    @Output() eventDatGhe = new EventEmitter();

    datGhe(){
        this.eventDatGhe.emit(this.ghe);
    }
    constructor() { }
    ngOnInit() { }
}

interface ghe {
    SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean
}