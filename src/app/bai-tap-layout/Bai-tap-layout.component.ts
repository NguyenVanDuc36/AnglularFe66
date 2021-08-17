import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template : `
        <div class="container">
            <app-header></app-header>
            <div style="display: grid;">
                <app-contents class="col-8 p-0"></app-contents>
                <app-sidebar class="col-4 p-0"></app-sidebar>
            </div>
            <app-footer></app-footer>
        </div>
    `,

})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}