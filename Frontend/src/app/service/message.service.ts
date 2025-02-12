import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private _snackBar = inject(MatSnackBar);

  showMessage(message: string){
    this._snackBar.open(message, "OK", {duration: 5000});
  }

}
