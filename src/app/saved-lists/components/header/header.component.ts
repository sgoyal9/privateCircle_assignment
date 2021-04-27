import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'list-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() searchFormControl: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
