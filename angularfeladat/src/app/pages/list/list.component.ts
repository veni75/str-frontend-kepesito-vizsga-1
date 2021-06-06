import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //contributorList$: Observable<Contributor[]> = this.contributorService.getAll();
  contributor$: Observable<Contributor> = this.activatedRoute.params.pipe(
    switchMap(params => this.contributorService.get(params.id))
  ); 
  
  reposUrl:string='';

  constructor(
    private contributorService: ContributorService,
    private activatedRoute: ActivatedRoute,
    //private mytoastr: MytoastrService,
  ) { }

  ngOnInit(): void {
    
  }

      

}