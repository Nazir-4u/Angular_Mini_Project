import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register-resto',
  templateUrl: './register-resto.component.html',
  styleUrls: ['./register-resto.component.css']
})
export class RegisterRestoComponent implements OnInit {
  constructor(private resto:RestoService) {  }
 
  alert:boolean=false;
  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })

  ngOnInit(): void {
  }

  registerResto()
  {
    this.resto.registerResto(this.register.value).subscribe((result)=>{
     this.alert=true;      
    })
  }
  closeAlert()
  {
    this.alert=false;
  }
}
