import { Component, EventEmitter, Output } from '@angular/core';
import { Developpeur } from '../modele/developpeur';
import { CommonModule } from '@angular/common';
import { tr } from '../util';
import { JvService } from '../jv.service';

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques.component.html',
  styleUrl: './statistiques.component.css'
})
export class StatistiquesComponent {
  visible = false;
  tabStats:number[] = new Array();
  dev = new Developpeur();
  @Output() quitterStatistiques = new EventEmitter<Developpeur>();
  constructor(private jvSrv:JvService){}

  onOuvrir(dev:Developpeur)
  {
    this.visible = true;
    this.dev = dev;
    this.jvSrv.getStats(dev).subscribe(
      {
        next:
          tabStats =>{
            this.tabStats = tabStats;
            tr("recues " + tabStats.length + " infos", true);
          },
        error:
          err=>{
            tr("Erreur 33 vérifier le serveur", true);
          }
        

      }
    );
  }

  quitterStats()
  {
    this.quitterStatistiques.emit(this.dev);
    this.visible = false;
  }
}
