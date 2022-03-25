import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopComponent } from 'src/app/pop/pop.component';
import { DataService } from 'src/app/sevices/data.service';

@Component({
  providers: [DataService,MatDialog] ,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  user: any;
  

  constructor(private dataService:DataService , private dialogRef : MatDialog) { }

  ngOnInit() {

    this.dataService.user().subscribe((res)=>{
      this.user = res;
      
    }, (err) =>{
      console.log(err);
    })

  }

  openDialog(){
    this.dialogRef.open(PopComponent);
  }
  

}
