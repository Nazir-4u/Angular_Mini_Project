import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import {FormGroup, ReactiveFormsModule,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  
  collection:any=[];
  constructor(private resto:RestoService,private router:ActivatedRoute) { }
  alert:boolean=false;
  editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      this.collection=result;
      this.editResto=new FormGroup({
        name:new FormControl(result['name']),
        address: new FormControl(result['address']),
        email:new FormControl(result['email'])        
      })
    });
  }

  updateResto()
  {
    console.warn('scs',this.editResto.value);
    this.resto.updateCurrentResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
      console.warn(result);
      this.alert=true;
    });

  }
  closeAlert()
  {
    this.alert=false;
  }
}
