import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { Starship } from '../../models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: any[];

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships(): void {
    this.starshipService.getStarships()
      .subscribe(data => {this.starships = data.results;});
  }
}
