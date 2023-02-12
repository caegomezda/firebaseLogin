import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private fireAuth: AngularFireAuth, ) 
  {}

  ngOnInit() {
  }
  
  async signUp(form:any) {
    const { email, password } = form.value;
    try {
      const credentials = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      console.log(credentials.user);
    } catch (e) {
      console.error(e);
    }
  }

}
