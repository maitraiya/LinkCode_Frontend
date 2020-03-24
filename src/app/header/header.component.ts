import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    
  }
  log(data: string): void {
    console.log(data);
  }

  isCollapsed= true;
  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed
  }

  navbarOpen =false;
  isHomeactive= false;
  isServicesActive =false;
  isContactUsActive =false;
  isAboutUsActive= false;
  activate(parm){
    this.clearFlags()
    if (parm =='home') {
      console.log(parm)
      this.isHomeactive=true;
    }
      else if(parm == 'services')
    {
      console.log(parm);
      this.isServicesActive=true;
    }
      else if (parm == 'contactUs'){
      console.log(parm)
      this.isContactUsActive=true;
    }
      else if (parm == 'aboutUs'){
      console.log(parm)
      this.isAboutUsActive=true;
    }
  }
  clearFlags(){
    this.isHomeactive= false;
    this.isServicesActive =false;
    this.isContactUsActive =false;
    this.isAboutUsActive= false;
  }

  toggleNavbar(){
  this.navbarOpen =!this.navbarOpen;
  }
}
