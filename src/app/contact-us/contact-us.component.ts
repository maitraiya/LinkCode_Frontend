import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitFailed = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  onSubmit() {
    this.feedback();
  }

  feedback() {

    const data = {
      firstName: this.contactForm.get('firstName').value,
      lastName: this.contactForm.get('lastName').value,
      email: this.contactForm.get('email').value,
      subject: this.contactForm.get('subject').value
    };
    console.log('data : ', data);
  }

}
