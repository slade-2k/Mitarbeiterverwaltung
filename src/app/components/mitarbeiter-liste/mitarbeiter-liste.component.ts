import { Component, OnInit } from '@angular/core';
import { Mitarbeiter } from './../../models/mitarbeiter';
import { MitarbeiterService } from './../../services/mitarbeiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.css']
})
export class MitarbeiterListeComponent implements OnInit {

  private mitarbeiterListe: Mitarbeiter[] = [];

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mitarbeiterService.holeAlleMitarbeiter()
      .subscribe(objects => {
        for (let object of objects) {
          this.mitarbeiterListe.push(Object.assign(new Mitarbeiter, object));
        }
      });
  }

  public bearbeiteMitarbeiter(id: number) {
    this.router.navigateByUrl('/bearbeiten/' + id);
  }

  public zeigeMitarbeiter(id: number) {
    this.router.navigateByUrl('/anzeigen/' + id);
  }

  public loescheMitarbeiter(id: number, idx: number) {
    let mitarbeiter: Mitarbeiter = this.mitarbeiterListe[idx];
    
    if (confirm(mitarbeiter.name + ' wirklich löschen? ')) {
      this.mitarbeiterService.loescheMitarbeiter(id)
        .subscribe(res => {
          this.mitarbeiterListe.splice(idx, 1);
        });
    }
  }

}
