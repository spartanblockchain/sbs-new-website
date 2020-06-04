import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  selectedOption: string;
  contactUs: FormGroup;
  disabledSubmitButton: boolean = true;
  submitted: boolean = false;
  error: {};
  messageContents = {};
  options = [
    { name: 'Project Proposal', value: 1 },
    { name: 'Become a sponsor', value: 2 },
    { name: 'Become our partner', value: 3 },
    { name: 'Join our case competition', value: 4 },
    { name: 'Become a professional advisor', value: 5 },
    { name: 'Join our newsletter', value: 6 },
    { name: 'Other (describe below)', value: 7 }
  ];

  constructor(private contactFormService: ContactFormService) {}

  @HostListener('input') oninput() {
    if (this.contactUs.valid) {
      this.disabledSubmitButton = false;
    } else {
      this.disabledSubmitButton = true;
    }
  }
  selectChangeHandler(event: any) {
    this.selectedOption = event.target.value;
  }

  ngOnInit(): void {
    this.contactUs = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      companyOrg: new FormControl(),
      briefDescription: new FormControl(null, Validators.required)
    });
  }

  submitForm() {
    this.messageContents = {
      firstName: this.contactUs.get('firstName').value,
      lastName: this.contactUs.get('lastName').value,
      email: this.contactUs.get('email').value,
      companyOrg: this.contactUs.get('companyOrg').value,
      involvedSubject: this.selectedOption,
      briefDescription: this.contactUs.get('briefDescription').value
    };
    this.contactFormService.sendEmail(this.messageContents).subscribe(
      data => (this.messageContents = data),
      error => (this.error = error)
    );
    this.submitted = true;
  }

  get inputFirst() {
    return this.contactUs.get('firstName');
  }
  get inputLast() {
    return this.contactUs.get('lastName');
  }
  get inputEmail() {
    return this.contactUs.get('email');
  }
  get inputCompanyOrg() {
    return this.contactUs.get('companyOrg');
  }
  get inputBriefDescription() {
    return this.contactUs.get('briefDescription');
  }
}
