import { FormGroup, FormControl, Validators } from "@angular/forms";
export class Employee{
    employeeForm=new FormGroup({
        employeeId: new FormControl('0000', Validators.required),
        employeeName: new FormControl('No Name',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        address:new FormGroup({
            street: new FormControl('No Street', Validators.required),
            City: new FormControl('No City', Validators.required),
            zipCode: new FormControl('111111', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]),
        }),
        email:new FormControl('fake@email.com',[Validators.required, Validators.email])
    });
}