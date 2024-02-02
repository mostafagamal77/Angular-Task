import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  upName: boolean = false;
  upAge: boolean = false;
  upEmail: boolean = false;
  upPass: boolean = false;

  nameUp(event: any) {
    event.target.value ? (this.upName = true) : (this.upName = false);
  }
  ageUp(event: any) {
    event.target.value ? (this.upAge = true) : (this.upAge = false);
  }
  emailUp(event: any) {
    event.target.value ? (this.upEmail = true) : (this.upEmail = false);
  }
  passUp(event: any) {
    event.target.value ? (this.upPass = true) : (this.upPass = false);
  }
}
