import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-4 h-44 bg-black text-gray-400 p-8">
      <div>About us</div>
      <div>Confidentiality</div>
      <div>Other rules</div>
      <div>Other rules</div>
    </div>
  `,
  styles: [],
})
export class FooterComponent {}
