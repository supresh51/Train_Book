import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainBook';

  result: string = '';
  aval: string = '250';
  name: string = '';

  mul(inputQuantity: string, inputPrice: string) {
    this.result = (Number(inputQuantity) * Number(inputPrice)).toString();
    this.aval = (Number(this.aval) - Number(inputQuantity)).toString();
    const inputElement = <HTMLInputElement>document.getElementById('inputId');
    alert('Dear ' + this.name + 'Thank you for ticket Booking ' + '\nTotal Price: ' + this.result + '\nAvailable Tickets: ' + this.aval);
    // window.location.reload();
  }

  cancel() {
    let cancel = prompt("Enter The Number of tickets Cancel:- ");
    this.aval = (Number(this.aval) + Number(cancel)).toString();
    alert('Dear ' + this.name +'Your ticket is successfully canceled' + '\nAvailable Tickets: ' + this.aval);
    // window.location.reload();


  }






}
