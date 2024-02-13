import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
    selector: 'navbar',
    styleUrls: ['navbar.component.scss'],
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    constructor(public navbarService: NavbarService) { }

    ngOnInit() { }
}
