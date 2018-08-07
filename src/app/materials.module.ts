import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports:[
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class MaterialsModule {}