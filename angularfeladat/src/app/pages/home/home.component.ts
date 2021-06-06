import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Contributor } from '../../model/contributor';
import { ContributorService } from '../../service/contributor.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* eventSubscription = fromEvent(window, "scroll").subscribe(e => {
    const isBottom = document.body.offsetHeight - window.scrollY - 500 < 500;
    if (isBottom) {
      this.page++;
      this.contributorList$ = this.contributorService.getAll();
    }
  });
  page: number = 1; */
  contributorList$: Observable<Contributor[]> = this.contributorService.getAll();

  constructor(
    private contributorService: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}