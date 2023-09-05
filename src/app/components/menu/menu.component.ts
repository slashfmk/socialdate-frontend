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
          [routerLink]="['/matches']"
          routerLinkActive="router-link-active"
          >Matches</a
        >
      </li>
      <li>
        <a
          class=""
          [routerLink]="['/lists']"
          routerLinkActive="router-link-active"
          >Lists</a
        >
      </li>
      <li>
        <a
          class=""
          [routerLink]="['/messages']"
          routerLinkActive="router-link-active"
          >Messages</a
        >
      </li>
    </ul>
  `,
  styles: [],
})
export class MenuComponent {}
