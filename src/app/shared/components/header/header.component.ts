import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/sevices/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router,private auth:DataService) { }

  ngOnInit() { 
  }
  logo(){
    this.auth.logot().subscribe(
      (res:any)=>
      {localStorage.removeItem('user');

      this.auth.toggleLogin(false);
      // Redirect
      this.router.navigate(['/login']);



    },(err)=>{
      console.log(err);

    })
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
