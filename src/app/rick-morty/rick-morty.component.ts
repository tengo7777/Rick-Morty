import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../services/get-request.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {
  allDataList: any[] = [];
  constructor(private service: GetRequestService) { }

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    this.service.getData().subscribe(response => {
      this.allDataList = response.results;
      console.log(this.allDataList);
    })
  }

}
