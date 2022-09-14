import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <img
        width="40"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />

      <span>{{ title }}</span>
      <div class="spacer"></div>
      <nav style="">
        <ul>
          <li>
            <a [routerLink]="['/home']" [routerLinkActive]="['active']" ariaCurrentWhenActive="page">Home</a>
          </li>
          <li>
            <a [routerLink]="['/get-started']" [routerLinkActive]="['active']" ariaCurrentWhenActive="page">Getting started</a>
          </li>
          <li *ngIf="isLoggedIn">
            <a [routerLink]="['/admin/users']" [routerLinkActive]="['active']" ariaCurrentWhenActive="page">Users</a>
          </li>
          <li *ngIf="isLoggedIn">
            <a [routerLink]="['/admin/posts']" [routerLinkActive]="['active']" ariaCurrentWhenActive="page">Posts</a>
          </li>
          <li *ngIf="!isLoggedIn">
            <a [routerLink]="['/login']" [routerLinkActive]="['active']" ariaCurrentWhenActive="page">Login</a>
          </li>
          <li *ngIf="isLoggedIn">
            <a (click)="logout()" class="active" ariaCurrentWhenActive="page">Logout</a>
          </li>
        </ul>
      </nav>
        <mat-icon fontIcon="person"></mat-icon>
      </mat-toolbar>
  `,
  styles: [`
      .spacer {
      flex: 1;
      }

      ul {
        list-style-type: none;
        display: flex;
        /* flex: 0.1 0 1;
        flex-direction: row;
        justify-content: space-between; */
      }
      li {
        margin-right: 1em;
      }

      .active {
        font-weight: bold;
        text-decoration: underline;
      }

      a {
        color : white;
      }
    `]
})

export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  @Input()
  title!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedInObservable.subscribe((value) => this.isLoggedIn = value);
  }


  logout() : void {
    this.authService.logout();
  }

}
