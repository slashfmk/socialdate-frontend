import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="h-24 bg-slate-500 w-full">header works!</div> `,
  styles: [],
})
export class HeaderComponent {}
