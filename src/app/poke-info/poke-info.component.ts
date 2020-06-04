import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})

export class PokeInfoComponent implements OnInit {
  @Input() pokemon: { name: string, url: string };
  singleMon;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPokemon(this.pokemon.url).subscribe((data: Pokemon) => {
      // console.log('pokemon', data.name)=
      this.singleMon = data;
    });
  }

}

