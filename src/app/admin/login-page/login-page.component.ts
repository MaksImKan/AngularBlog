import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/components/interfaces';
import { AuthService } from 'src/app/shared/components/services/auth.servise';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  message: string

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if(params['loginAgain']) {
        this.message = 'Пожалуйста введите данные'
      }
    })
    this.form = new FormGroup({
      email: new FormControl(null,
        [Validators.required,
        Validators.email]),
      password: new FormControl(null,
        [Validators.required,
          Validators.minLength(6)
        ])
    })
  }
  submit(){
    if (this.form.invalid){
      return
    }



    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    console.log(user);

    this.auth.login(user).subscribe(()=> {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
    })

  }



}
