import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <div class="container">
            <h2 class="text-center" >Bài tập 4</h2>
            <div style="margin: 0 auto;" class="mt-3 card w-50 text-white text-dark">
              <div class="card-body">
                <h4 class="card-title">Register form</h4>
                    <div class="form-group">
                        <p class="text-dark" >Email :</p>
                        <!-- <input class="form-control" [(ngModel)]= "email"/> -->
                    </div>
                    <div class="form-group">
                        <p class="text-dark" >FullName :</p>
                        <input class="form-control" >
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                    <div class="form-group mt-4">
                        <h5>Email : {{email}} </h5>
                        <h5>FullName : {{fullName}} </h5>
                    </div>
              </div>
            </div>
        </div>
    `
})

export class RegisterComponent implements OnInit {
    constructor() { }
    email:string = "[{ngModel}] twoway binding"
    fullName:string = "event binding"
    ngOnInit() { }
}