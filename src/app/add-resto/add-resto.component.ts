import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {RestoService} from '../resto.service';
import {FormGroup, ReactiveFormsModule,FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  constructor(private resto:RestoService) { }
  alert:boolean=false;
  addResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  ngOnInit(): void {
    
  }

  collectResto()
  {
    console.warn(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
    this.alert=true;
    this.addResto.reset({});
    });
  }

  closeAlert()
  {
    this.alert=false;
  }
}
