import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryDialogComponent, TypingComponent } from './typing.component';
import { InstructionsDialogComponent } from './instructions.dialog.component';
import { TypingRoutingModule } from './typing.routing.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TypingService } from './typing.service';


@NgModule({
  declarations: [
    TypingComponent,
    InstructionsDialogComponent,
    EntryDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    TypingRoutingModule
  ],
  providers:[TypingService]
})
export class TypingModule { }
