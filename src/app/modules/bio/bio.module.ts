import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio.component';
import { BioRoutingModule } from './bio-routing.module';

@NgModule({
    declarations: [BioComponent],
    imports: [CommonModule, BioRoutingModule],
    exports: [BioComponent]
})
export class BioModule { }