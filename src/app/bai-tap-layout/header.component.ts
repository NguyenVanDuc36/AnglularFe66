import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div  class="text-white bg-danger p-3 text-center" >header</div>
    `
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}