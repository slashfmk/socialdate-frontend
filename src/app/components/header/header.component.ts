import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MenuComponent } from '../menu/menu.component';
import { UserLoginService } from 'src/app/api/services/user-login.service';
import { LoginDto } from 'src/app/api/models/LoginDto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MenuComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserLoginService],
  template: `
    <header
      class="flex flex-row gap-7 items-center  content-evenly w-full h-auto bg-gray-700 text-lg text-white font-light p-2"
    >
      <h1 class="text-2xl text-center my-8">Social date</h1>
      <app-menu></app-menu>
      <form [formGroup]="form" class="flex flex-row gap-2">
        <input
          type="text"
          placeholder="username"
          class="rounded-md p-2 text-gray-600"
          formControlName="username"
        />
        <input
          type="password"
          placeholder="Password"
          class="rounded-md p-2 text-gray-600"
          formControlName="password"
        />
        <button
          (click)="submit()"
          type="submit"
          class="bg-blue-700 text-white p-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </header>

    <!-- <div *ngFor="let user of users">
      <p>{{ user.userName }}</p>
    </div> -->
  `,
})
export class HeaderComponent implements OnInit {
  // attributes
  private http = inject(HttpClient);
  private formBuilder = inject(FormBuilder);
  private loginService = inject(UserLoginService);

  // log inform handler
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(8)],
  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submit() {
    if (this.form.invalid) return;

    console.log(this.form.get('username')?.value);
    console.log(this.form.get('password')?.value);

    let loginInfo: LoginDto = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    };

    this.loginService.login(loginInfo).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Completed successfully')
    );
  }
}
