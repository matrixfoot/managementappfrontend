import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { StateService } from '../services/state.service';
@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  public userForm: FormGroup;
  public user: User;
  
  public loading = false;
  constructor(private formBuilder: FormBuilder,
    private state: StateService,
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) {}

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('form');
  
    this.route.params.subscribe(
      (params) => {
        this.userservice.getUserById(params.id).then(
          (user: User) => {
            
            this.user = user;
            
            this.userForm = this.formBuilder.group({
              
              role: [user.role, Validators.required],
              firstname: [user.firstname, Validators.required],
              lastname: [user.lastname, Validators.required],
              fonction: [user.fonction, Validators.required],
              direction: [user.direction, Validators.required]
            });
            this.loading = false;
            
          }
        );
      }
    );




  }
  onSubmit() {
    this.loading = true;
    const user = new User();
    user._id = this.user._id;
    user.role = this.userForm.get('role').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.fonction = this.userForm.get('fonction').value;
    user.direction = this.userForm.get('direction').value;
    this.userservice.modifyUserById(this.user._id,user).then(
      () => {
        this.userForm.reset();
        this.loading = false;
        this.router.navigate(['/users-list']);
        console.log(user);
      },
      (error) => {
        this.loading = false;
        
        this.router.navigate(['/users-list']);
      
        
      }
    );
  }
}
