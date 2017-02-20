import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mitarbeiter } from './../../models/mitarbeiter';
import { MitarbeiterService } from './../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-anzeige',
  templateUrl: './mitarbeiter-anzeige.component.html',
  styleUrls: ['./mitarbeiter-anzeige.component.css']
})
export class MitarbeiterAnzeigeComponent implements OnInit {

  private mitarbeiter: Mitarbeiter = new Mitarbeiter();
  private id: number;

  constructor(
    private mitarbeiterService: MitarbeiterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params => {
        this.id = params['id'];
        this.mitarbeiterService.holeMitarbeiterMitId(this.id)
          .subscribe(object => {
            Object.assign(this.mitarbeiter, object);
          });
      });
  }

}
