import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.css']
})
export class NoaccessComponent {
  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
