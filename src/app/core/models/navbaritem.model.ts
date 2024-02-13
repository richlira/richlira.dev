export class NavbarItem {
    href: string;
    id: string;
    iconClass: string;
    hoverColor: string;
  
    constructor(href: string, id: string, iconClass: string, hoverColor: string) {
      this.href = href;
      this.id = id;
      this.iconClass = iconClass;
      this.hoverColor = hoverColor;
    }
  }
  