import { Component  } from '@angular/core';
import { PersonsService } from './persons.service';



@Component({
    selector:'app-persons',
    templateUrl : './persons.component.html'
})

export class PersonsComponent {
    personsList : string[];
    constructor(private prsnService : PersonsService){
        // this.personsList = prsnService.persons;
    }


    ngOnInit(){
        this.personsList = this.prsnService.persons;
        this.prsnService.personChanged.subscribe(persons=>{
             this.personsList = persons;
        });
    }

    onRemovePerson(personName:string){
        this.prsnService.removePerson(personName);
    }
}