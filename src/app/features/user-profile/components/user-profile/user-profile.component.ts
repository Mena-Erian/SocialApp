import { PlatformCheckService } from './../../../../shared/services/platform-check.service';
import { AuthService } from './../../../../core/auth/services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { IUser } from '../../../../core/model/user-data.interface';
@Component({
  selector: 'app-user-profile',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  private readonly AuthService = inject(AuthService);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly platformCheckService = inject(PlatformCheckService);
  isMyProfile: boolean = false;
  myUserData: IUser = {} as IUser;
  userId: string = '';
  ngOnInit(): void {
    if (this.isMyProfile) {
      if (this.platformCheckService.isBrowser()) {
        this.AuthService.getUserData().subscribe({
          next: (res) => {
            console.log(res);
            this.myUserData = res.user;
          },
        });
      }
    }
    // this.activatedRoute.paramMap.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });
  }
}
