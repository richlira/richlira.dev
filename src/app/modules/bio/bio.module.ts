import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio.component';
import { BioRoutingModule } from './bio-routing.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
    declarations: [BioComponent],
    imports: [CommonModule, BioRoutingModule, NavbarModule],
    exports: [BioComponent]
})
export class BioModule { }