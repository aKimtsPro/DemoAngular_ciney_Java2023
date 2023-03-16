import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.scss']
})
export class DemoFormsComponent {

  form: FormGroup;

  contactList: Contact[] = []

  constructor(){
    this.form = new FormGroup({
      'contactName': new FormControl(''),
      'email': new FormControl(''),
      'trustIndex': new FormControl(5,[Validators.min(1),Validators.max(10)]),
      'favorite': new FormControl(false)
    })
  }

  onSubmit(){
    console.log( this.form );
    if( this.form.valid ){
      const contact: Contact = {...this.form.value}
      this.contactList.push(contact);
      this.form.reset({
        'contactName': '',
        'email': '',
        'trustIndex': 5,
        'favorite': false
      });
    }
  }

}
