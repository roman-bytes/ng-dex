import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  pokemon;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPokemon(`https://pokeapi.co/api/v2/pokemon/${this.route.snapshot.params.id}`).subscribe((data: Pokemon) => {
      console.log('data', data);
      this.pokemon = data;
    });
  }

}
