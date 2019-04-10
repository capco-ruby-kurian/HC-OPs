import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let pass = AC.get('pass').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
       if(confirmPassword.length <= 0)
        {
            return null;
        }
       if(confirmPassword != pass) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}