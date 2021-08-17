import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div class="css" >Hello header</div>
    `,
    styles : [`
        .css{
            color : red;
            background : green
        }
    `]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}