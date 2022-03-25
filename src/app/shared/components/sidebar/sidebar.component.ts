import { Component, Input, OnInit } from '@angular/core';
import {User} from '../../../login/login.model';
import { DataService } from '../../../sevices/data.service';
import { SenderService } from '../../../sender.service';

declare const $: any;
declare class RouteInfo    {
    path: string;
    title: string;
    icon: string;
    class: string;
    tp:string;

}

export let ROUTES: RouteInfo[] = [

  { path: '/', title: 'Dashboard',  icon: 'task', class: '',tp:'1' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '',tp:'2' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '',tp:'2' },
  { path: '/typography', title: 'Team1',  icon:'groups', class: '' ,tp:'2'},
  { path: '/icons', title: 'Team2',  icon:'groups', class: '' ,tp:'2'},
  { path: '/maps', title: 'Team',  icon:'groups', class: '' ,tp:'1'},
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' ,tp:'2'},
  { path: '/notifications', title: 'Settings',  icon:'settings', class: '' ,tp:'2'},
  { path: '/posts', title: 'Setting',  icon:'settings', class: '' ,tp:'1'},

];

@Component({

  providers: [DataService,SenderService],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {  
  
  menuItems: any[];
  @Input() allData: [];
  latestData: any;
  msg:any;
  user:object;
  constructor(private senderservice:SenderService ,private dataService:DataService) { }
  path: string;
  title: string;
  icon: string;
  class: string;

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
    this.dataService.user().subscribe((res)=>{
      this.user = res;
      
    }, (err) =>{
      console.log(err);
    })

  }
  
  isMobileMenu() {
    
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
