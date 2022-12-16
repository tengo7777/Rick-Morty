import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRequestService } from 'src/app/services/get-request.service';

@Component({
  selector: 'app-rick-morty-alternative',
  templateUrl: './rick-morty-alternative.component.html',
  styleUrls: ['./rick-morty-alternative.component.css']
})
export class RickMortyAlternativeComponent implements OnInit {
  currentPerson: any;
  constructor(private service: GetRequestService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var name = params['name'];
      this.service.getRickyMortyName(name).subscribe(res => {
        this.currentPerson = res.results;
        console.log(this.currentPerson);
      })
    })
  }


}
