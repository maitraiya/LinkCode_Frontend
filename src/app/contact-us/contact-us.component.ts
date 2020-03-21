import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from './services/contact-us/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitFailed = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactUsService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', Validators.required]
    });
  }

  onSubmit() {
    this.addContact();
  }

  addContact() {
    const contactDetail = this.getContactInformation();
    this.contactService.addContact(contactDetail).subscribe((response: any) => {
      alert('Data sent successfully');
    }, (error: any) => {
      alert('Data not sent successfully');
    });
  }

  getContactInformation() {
    const data = {
      firstName: this.contactForm.get('firstName').value,
      lastName: this.contactForm.get('lastName').value,
      email: this.contactForm.get('email').value,
      subject: this.contactForm.get('subject').value
    };
    return data;
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

}
