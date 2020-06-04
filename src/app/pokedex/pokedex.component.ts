import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemon = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: { count: number, next: string, previous: any, results: [] }) => {
      console.log('pokemon', data.results);
      this.pokemon = data.results;
    });
  }

}
