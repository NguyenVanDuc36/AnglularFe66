import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ],
})
export class MarterialModule { }
