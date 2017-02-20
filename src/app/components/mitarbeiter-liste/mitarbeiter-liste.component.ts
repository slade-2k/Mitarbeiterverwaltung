import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from './../../models/mitarbeiter';
import { MitarbeiterService } from './../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.css']
})
export class MitarbeiterListeComponent implements OnInit {

  private mitarbeiterListe: Mitarbeiter[] = [];

  constructor(private mitarbeiterService: MitarbeiterService) { }

  ngOnInit() {
    this.mitarbeiterService.holeAlleMitarbeiter()
      .subscribe(objects => {
        for (let object of objects) {
          this.mitarbeiterListe.push(Object.assign(new Mitarbeiter, object));
        }
      });
  }


}
