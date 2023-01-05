import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  phone_number = "236958741"

  email = "sawsenmrabet"
  domain = "gmail.com"

  github = "github.com/sawsen001"
  my_website = ""
  show_private_details = false;

  constructor() { }

  ngOnInit(): void {

    this.show_private_details =  environment.show_private_details
  }

  formEmail(): string {
    // This is purely to confuse spambots on github :)
    return this.email + '@' + this.domain
  }

}
