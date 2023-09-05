import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul class="flex flex-row gap-6">
      <li>
        <a
          class=""
          [routerLink]="['/home']"
          routerLinkActive="router-link-active"
          >Home</a
        >
      </li>
      <li>
        <a
          class=""
          [routerLink]="['/profile']"
          routerLinkActive="router-link-active"
          >Profile</a
        >
      </li>
      <li>
        <a
          class=""
          [routerLink]="['/about']"
          routerLinkActive="router-link-active"
          >About</a
        >
      </li>
    </ul>
  `,
  styles: [],
})
export class MenuComponent {}
