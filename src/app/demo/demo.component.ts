import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', // thên thẻ
  template : `
    <button class="btn btn-primary" >Click here</button>
  `, // đường dẫn đến file chứa giao diện html
  styleUrls: ['./demo.component.scss'] // đường dẫn đến file css
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
