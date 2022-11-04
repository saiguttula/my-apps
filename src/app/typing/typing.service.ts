import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class TypingService {

  constructor() { }

  timeEvent = new Subject()
}
