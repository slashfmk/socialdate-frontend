import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      messages works!
    </p>
  `,
  styles: [
  ]
})
export class MessagesComponent {

}
