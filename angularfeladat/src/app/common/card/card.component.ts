import { Component, OnInit, Input } from '@angular/core';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() contributor: Contributor=new Contributor();
  
  constructor(
    private contributorService: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}