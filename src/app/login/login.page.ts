import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private fireAuth: AngularFireAuth, 
              private router: Router, 
              private toastController: ToastController) {
  this.email = ""
  this.password = ""
              }

  ngOnInit() {
  }

  async login(form:any) { 
    const { email, password } = form.value;

    try {
      const res = await this.fireAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    } catch (err:any) {
      const toast = await this.toastController.create({
        message: err.message,
        duration: 5000
      });
      toast.present();
    }
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

}
