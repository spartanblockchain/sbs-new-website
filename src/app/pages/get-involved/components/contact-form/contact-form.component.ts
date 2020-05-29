import { Component, HostListener, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactFormService} from '../../services/contact-form.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactUs : FormGroup
  disabledSubmitButton : boolean = true;

  constructor(private contactFormService: ContactFormService) { }
  
  @HostListener('input') oninput() {

    if (this.contactUs.valid) {
      this.disabledSubmitButton = false;
      }
    }

  ngOnInit(): void {
    this.contactUs = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      companyOrg: new FormControl(),
      briefDescription: new FormControl(null, Validators.required),
  
    })
  }

  submitForm() {
  }

  get inputFirst() { return this.contactUs.get('firstName'); }
  get inputLast() { return this.contactUs.get('lastName'); }
  get inputEmail() { return this.contactUs.get('email'); }
  get inputCompanyOrg() { return this.contactUs.get('companyOrg'); }
  get inputBriefDescription() { return this.contactUs.get('briefDescription'); }
}
