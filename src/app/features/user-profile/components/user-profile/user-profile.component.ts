import { PostsService } from './../../../posts/service/posts.service';
import { PlatformCheckService } from './../../../../shared/services/platform-check.service';
import { AuthService } from './../../../../core/auth/services/auth.service';
import { Component, computed, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { IUser } from '../../../../core/model/user-data.interface';
import { User } from '../../../posts/model/postes.interface';
@Component({
  selector: 'app-user-profile',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  private readonly AuthService = inject(AuthService);
  private readonly postsService = inject(PostsService);
  private readonly platformCheckService = inject(PlatformCheckService);
  isMyProfile: boolean = false;
  myUserData: IUser = {} as IUser;
  userId: string = '';
  userData = computed(() => this.postsService.userDataUserPorfile());
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
  }
}
