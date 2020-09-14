import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'xPay';
    public showButton = false;
    private destroy$ = new Subject<boolean>();

    constructor(private router: Router) { }

    ngOnInit() {
        this.listenForRouteChange();
    }


    private listenForRouteChange() {
        this.router.events.pipe(
            takeUntil(this.destroy$)
        ).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const { url } = event;
                this.showButton = url === '/payment' ? false : true;
            }
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
