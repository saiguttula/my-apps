import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { TypingComponent } from "./typing.component";
import { TypingService } from "./typing.service";


@Component({
  selector:'app-instructions-dialog',
  templateUrl: './instructions.dialog.component.html'
})

export class InstructionsDialogComponent{
  constructor(public dialogRef:MatDialogRef<InstructionsDialogComponent>,private typingService:TypingService){}

  onClickContinue(){
    this.dialogRef.close();
    this.typingService.timeEvent.next('true');
  }

}
