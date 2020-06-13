import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../services/state.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public mode: string;
  public part: number;
  public partString: string;
  public isAuth: boolean;
  public currentrole:string;
  private currentuser: User[]=[];
  

  private modeSub: Subscription;
  private currentrolesub: Subscription;
  private partSub: Subscription;
  private isAuthSub: Subscription;

  constructor(private state: StateService,
              private auth: AuthService,
              private router: Router,
              private authuser: UserService) { }

  ngOnInit() {
    this.modeSub = this.state.mode$.subscribe(
      (mode) => {
        this.mode = mode;
      }
    );
    this.currentrolesub = this.auth.userrole$.subscribe(
      (currentrole) => {
        this.currentrole = currentrole;
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
        switch (part) {
          
          case 3:
            this.partString = 'part-three';
            break;
          case 4:
            this.partString = 'part-four';
            break;
          default:
            break;
        }
      }
    );
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
       
      }
    );
    
    
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/' + this.partString + '/auth/login']);
  }
  
  onBackToParts() {
    this.router.navigate(['/default']);
  }

  ngOnDestroy() {
    this.modeSub.unsubscribe();
    this.partSub.unsubscribe();
    this.isAuthSub.unsubscribe();
  }

}
