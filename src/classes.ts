import * as intefaces from "./intefaces";

export class ReferenceItem {
    //title: string;
    //year: number;
    private _publisher: string;
    constructor(public title: string, protected year: number){
        //this.title = newTitle;
        //this.year = newYear;
        console.log(`Create new ReferenceItem...`);
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string){
        this._publisher = newPublisher;
    }
    static department: string = 'IT';
}

export class UniversityLibrarian implements intefaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string){
        console.log(`${this.name} is assisting ${custName}`);
    }
}

