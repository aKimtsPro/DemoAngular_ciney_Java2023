import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	data = {
		login: '',
		password: ''
	}

	connectedUser?: User;

	constructor(
		// Injection de mon service login
		private readonly loginService: LoginService
	){}

	connection() {
		// Si l'utilisateur n'a rien tapé dans le login, on n'appelle pas le service pour rien
		if (this.data.login.trim()) {
			this.loginService.connect(this.data.login, this.data.password);
			this.connectedUser = this.loginService.connectedUser;
			// Remise à zéro du formulaire
			if (this.connectedUser) {
				this.data.login = '';
				this.data.password = '';
			}
		}
	}

	disconnect() {
		this.loginService.disconnect();
		this.connectedUser = this.loginService.connectedUser;
	}
}
