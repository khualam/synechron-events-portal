"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Employee = (function () {
    function Employee() {
        this.employeeForm = new forms_1.FormGroup({
            employeeId: new forms_1.FormControl('0000', forms_1.Validators.required),
            employeeName: new forms_1.FormControl('No Name', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(15)]),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl('No Street', forms_1.Validators.required),
                City: new forms_1.FormControl('No City', forms_1.Validators.required),
                zipCode: new forms_1.FormControl('111111', [forms_1.Validators.required, forms_1.Validators.pattern('^[1-9][0-9]{5}$')]),
            }),
            email: new forms_1.FormControl('fake@email.com', [forms_1.Validators.required, forms_1.Validators.email])
        });
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map