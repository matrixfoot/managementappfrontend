import { Component,  OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public user: User;
  
  public loading: boolean;
  
  

  

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private usersservice: UserService) { }
  ngOnInit() {
    this.loading = true;
    
  
    this.route.params.subscribe(
      (params: Params) => {
        this.usersservice.getUserById(params.id).then(
          (user: User) => {
            this.loading = false;
            this.user = user;
            console.log(user);
          }
        );
      }
    );
    
  }
  onGoBack() {
   
    this.router.navigate(['/all-projet']);
  
}
getNavigation(link, id){
      
  this.router.navigate([link + '/' + id]);
    
}
onDelete() {
  this.loading = true;
  this.route.params.subscribe(
    (params: Params) => {
      this.usersservice.deleteUserById(params.id).then(
        () => {
          this.loading = false;
      
      this.router.navigate(['/users-list']);
        },
        (error) => {
          this.loading = false;
          
          this.router.navigate(['/users-list']);
        }
      );
    }
  );
  
}
  }


