import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import{RestoService} from '../resto.service';
@Component({
  selector: 'app-login-resto',
  templateUrl: './login-resto.component.html',
  styleUrls: ['./login-resto.component.css']
})
export class LoginRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  login=new FormGroup({    
    email:new FormControl(''),
    password:new FormControl('')
  })

  loginResto()
  {
    console.warn(this.login.value);
    
    this.resto.loginResto(this.login.value).subscribe((result)=>{
     console.warn('ddd',result);     
    })
  }

  ngOnInit(): void {
  }

}
