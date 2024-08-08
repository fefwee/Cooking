import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter, map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evo';
  public hideHeader: boolean = false;
  public hideFooter: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data;
      }),
      map(data => ({
        hideHeader: data['hideHeaderFooter'] || false,
        hideFooter: data['hideFooter'] || false
      }))
    ).subscribe(({ hideHeader, hideFooter }) => {
      this.hideHeader = hideHeader;
      this.hideFooter = hideFooter;
    });
  }

}
