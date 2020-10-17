import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../../models/starship';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  @Input() starship: Starship;
  starships: any[];

  constructor(private starshipService: StarshipService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(): void {
    this.starshipService.getStarships()
      .subscribe(data => { this.starships = data.results; });
  }
}
