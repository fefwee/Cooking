import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  public status: boolean = false;
  public activeBlock: boolean = false;


  public toggleActiveBlock = (): void => {
    this.activeBlock = !this.activeBlock;
  }


}
