import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from './services/contact-us/contact-us.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitFailed = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  latitude: 18.5260265;
  longitude: 73.84893930;
  //alertnew: boolean ;
  //messageData = '';
  //notification: NzNotificationService;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactUsService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z_]+)*$') ]],
      // lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9\\n]+\.)*$') ]]
    });
  }

  onSubmit() {
    this.addContact();
  }

  addContact() {
    const contactDetail = this.getContactInformation();
    this.contactService.addContact(contactDetail).subscribe((response: any) => {
      this.contactForm.reset();
      //alert('Data sent successfully');
      // this.alertnew = true;
      // this.messageData = 'Details sent successfully';
      this.createNotification('success', 'Success', 'Data sent successfully');

    }, (error: any) => {
      //alert('Data not sent successfully');
      // this.alertnew = false;
      // this.messageData = 'Details not sent successfully';
      this.createNotification('error', 'Error', 'Data not sent successfully');
    });
  }

  getContactInformation() {
    const data = {
      firstName: this.contactForm.get('firstName').value,
      // lastName: this.contactForm.get('lastName').value,
      email: this.contactForm.get('email').value,
      subject: this.contactForm.get('subject').value
    };
    return data;
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  // get lastName() {
  //   return this.contactForm.get('lastName');
  // }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }


  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message,
      {
        nzStyle: {
          marginTop: '60px'
        }
      }
    );
  }
}
