//-----------------------------------
  //   Fichier : jv.service.ts
  //   Par:      Alain Martel
  //   Date :    2024-10-21
  //   Modifié par: 
  //-----------------------------------

 import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tache } from './modele/tache';
import { Developpeur } from './modele/developpeur';
import { Projet } from './modele/projet';
import { urlSrv } from './util';
import { SessionTravail } from './modele/sessionTravail';

@Injectable({
  providedIn: 'root'
})
export class JvService {

  //------------------------------------------------
  //
  //------------------------------------------------
  constructor(private http:HttpClient) { }

  
  //------------------------------------------------
  //
  //------------------------------------------------
  getConnexion(pMat:string, pMdp:string)
  {
    let url = urlSrv + "getConnexion.php";
    let params:HttpParams = new HttpParams(
      {
         fromObject :
         {
           mat:pMat,
           mdp:pMdp
         }
      }
    );
    return this.http.post<Developpeur>(url, params);
  }


  getConfig()
  {
    let url = urlSrv + "getConfig.php";
    return this.http.get<string[]>(url);
  }

  getStats(dev:Developpeur)
  {
    let url = urlSrv + "getStats.php?idDev=" + dev.id;
    return this.http.get<number[]>(url);
  }

  //------------------------------------------------
  //
  //------------------------------------------------
  getProjets()
  {
    let url = urlSrv + "getProjets.php?mat";
    return this.http.get<Projet[]>(url);
  }

  //------------------------------------------------
  //
  //------------------------------------------------
  getSessTravPourUnDev(idDev:number)
  {
    let url = urlSrv + "getSessTravPourUnDev.php";
    let params:HttpParams = new HttpParams(
      {
         fromObject :
         {
           idDev :idDev
         }
      }
    );
    return this.http.post<SessionTravail[]>(url, params);
  }
  
  //------------------------------------------------
  //
  //------------------------------------------------
  getTaches(idProj:number)
  {
    let url = urlSrv + "getTaches.php?idProj=" + idProj;
    return this.http.get<Tache[]>(url);
  }

  //------------------------------------------------
  //
  //------------------------------------------------
  postCommentaire(idSess:number, idDev:number, contenu:string)
  {
    let url = urlSrv + "postCommentaire.php";
    let params:HttpParams = new HttpParams(
      {
         fromObject :
         {
           idDev:idDev,
           idSession:idSess,
           contenu:contenu
         }
      }
    );
    return this.http.post<number>(url, params);

  }

  //------------------------------------------------
  //
  //------------------------------------------------
  postSessionTravail(idDev:number, idTache:number)
  {
    let url = urlSrv + "postSessionTravail.php";
    let params:HttpParams = new HttpParams(
      {
         fromObject :
         {
           idDev:idDev,
           idTache:idTache
         }
      }
    );
    return this.http.post<number>(url, params);
  }

  //------------------------------------------------
  //
  //------------------------------------------------
  putSessionTravail(idSessTrav:number)
  {
    let url = urlSrv + "putSessionTravail.php";
    let params:HttpParams = new HttpParams(
      {
         fromObject :
         {
           idSessTrav:idSessTrav
         }
      }
    );
    return this.http.post<number>(url, params);
   
  }
}
