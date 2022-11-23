import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList:any 
  name:any="UserList"
  searchTerm=""
  apiservices: any;

  constructor( private apiservice:ApiServiceService,private route: RouterModule) { }

  ngOnInit(): void {

    this.apiservice.getUsers()    
    .subscribe((result:any)=>{
      this.userList =result.users
    console.log(result.users);
    })
  }

}
