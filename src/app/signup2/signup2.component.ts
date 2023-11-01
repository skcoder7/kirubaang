import { Component } from '@angular/core';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component {
  fieldname={name:'',lname:'',email:'',password:''};
loading=false;
  submit=false;
onsubmit(){
  console.log(this.fieldname);
this.loading=true;
}
}
