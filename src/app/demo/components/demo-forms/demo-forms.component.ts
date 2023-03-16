import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.scss']
})
export class DemoFormsComponent {

  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      'contactName': new FormControl(),
      'email': new FormControl(),
      'trustIndex': new FormControl(5,[Validators.min(1),Validators.max(10)]),
      'favorite': new FormControl()
    })
  }

  onSubmit(){
    // this.form.reset({'trustIndex': 5});
    console.log( this.form );
  }

}
