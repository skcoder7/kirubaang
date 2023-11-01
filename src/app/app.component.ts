import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ismenucroll=false;

 

  isslidebarshowing=false;

 

 

 @HostListener('window:scroll',['$event'])

 scrollcheck(){

   if(window.pageYOffset>42)

    this.ismenucroll=true;

    else

         this.ismenucroll=false;

 console.log(this.ismenucroll);

 }

 

 opensidebar(){

  this.isslidebarshowing=true;

 }

 closesidebar(){

  this. isslidebarshowing=false;

 }
 scrolltotop(){
  document.body.scrollIntoView({behavior:'smooth'})
 }
}
