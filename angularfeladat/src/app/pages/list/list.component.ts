import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Repository } from 'src/app/model/repository';
import { RepositoryService } from 'src/app/service/repository.service';
import { MytoastrService } from 'src/app/service/mytoastr.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {  
  repoList$: Observable<Repository[]> = this.activatedRoute.params.pipe(
    switchMap(data => this.repositoryService.get(data.name))
  );  

  constructor(
    private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private mytoastr: MytoastrService,
  ) { }

  ngOnInit(): void {
    this.repositoryService.getAll().subscribe(
      data => {},
      error => this.mytoastr.showError()
    );
  }

}