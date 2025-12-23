import { Injectable } from '@angular/core';
import { NavbarItem } from '../models/navbaritem.model';

@Injectable({providedIn: 'root'})
export class NavbarService {
    navbarItems: NavbarItem[] = [
        new NavbarItem('https://www.linkedin.com/in/ricardolira/', 'linkedin', 'fa-brands fa-linkedin', '#0a66c2df'),
        new NavbarItem('https://twitter.com/soyrichlira', 'twitter', 'fa-brands fa-twitter', '#006effd2'),
        new NavbarItem('https://www.instagram.com/richlira/', 'instagram', 'fa-brands fa-instagram', '#f84dd0d1'),
        new NavbarItem('https://github.com/richlira', 'github', 'fa-brands fa-github', 'red'),
      ];

    constructor() { }
    
}