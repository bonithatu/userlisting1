import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userId:number=0
  userDetails:any={}

  constructor(private api:ApiServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      this.userId=result['id']
      console.log(this.userId);
      
    })

    this.api.viewUser(this.userId)
      .subscribe((result: any)=>{
        console.log(result);
        
        this.userDetails =result
        console.log(this.userDetails);
        
      })
  }

}
