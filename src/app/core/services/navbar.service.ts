import { Injectable } from '@angular/core';
import { NavbarItem } from '../models/navbaritem.model';

@Injectable({providedIn: 'root'})
export class NavbarService {
    navbarItems: NavbarItem[] = [
        new NavbarItem('https://www.linkedin.com/in/ricardolira/', 'linkedin', 'fa-brands fa-linkedin', '#0a66c2df'),
        new NavbarItem('https://twitter.com/soyrichlira', 'twitter', 'fa-brands fa-twitter', '#006effd2'),
        new NavbarItem('https://www.instagram.com/richlira/', 'instagram', 'fa-brands fa-instagram', '#f84dd0d1'),
        new NavbarItem('https://github.com/richlira', 'github', 'fa-brands fa-github', 'red'),
        new NavbarItem('https://dev.to/richlira', 'devto', 'fa-brands fa-dev secondLine', 'black'),
        new NavbarItem('https://richlira.medium.com', 'medium', 'fa-brands fa-medium secondLine', 'red'),
        new NavbarItem('https://stackoverflow.com/users/5848847/richlira', 'stackoverflow', 'fa-brands fa-stack-overflow secondLine', '#F48024'),
        new NavbarItem('https://developer.apple.com/augmented-reality/quick-look/', 'apple', 'fa-brands fa-apple secondLine', 'black'),
      ];

    constructor() { }
    
}