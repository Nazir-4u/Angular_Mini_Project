import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  collection:any=[];
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((rs)=>{
      console.warn(rs);
      this.collection=rs;
    })
  }

  deleteResto(item)
  {
    // console.warn(item);
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn(result);
      this.collection.splice(item-1,1);     
    })
    //return this.http.get(this.url,item.id);
  }

}
