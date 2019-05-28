import { Component, Input  } from '@angular/core'; 
import { PersonsService } from './persons.service';

@Component({
selector : 'app-person-input',
templateUrl : './person-input.component.html',
styleUrls : ['./person-input.component.css'] ,
})

export class PersonInputComponent {
    constructor(private personsService: PersonsService )
     {}
    enteredPersonsName = ''

    onClickSubmit() {
        console.log('Created a Persons dictionary '  + this.enteredPersonsName);
       this.personsService.addPerson(this.enteredPersonsName);
        this.enteredPersonsName='';
    }
}
