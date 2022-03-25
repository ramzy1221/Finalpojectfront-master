import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../sevices/data.service';

@Component({
  providers: [DataService] ,
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
user:any ;
  constructor(private dataService:DataService ) { }

  ngOnInit() {

    this.dataService.user().subscribe((res)=>{
      this.user = res;
      
    }, (err) =>{
      console.log(err);
    })

  }



  

}
