import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private nbreBasket = 0
  private basket = []
  private verification = false
  private alertNbreMax = false
  basketSubject = new Subject<any[]>()
  nbreMaxSubject = new Subject<boolean>()
  nbreSubject = new Subject<number>()


  constructor(private cookieService: CookieService) { }



  //fonction qui met à jour les valeurs observé (par les subject) et les envoies aux abonnés (subscription)
  //+ gère la mise à jour de la variable nbrBasket, lors son appel
  emitBasket() {
    this.nbreBasket = 0
    //si le cookie existe
    if (this.cookieService.get('data')) {
      //pour chaque élément (produit) du cookie
      JSON.parse(this.cookieService.get('data')).forEach(element => {
        //on ajoute à la variable nbreBasket (compteur) sa quantité
        this.nbreBasket += element.quantite
      });
    }
    this.nbreSubject.next(this.nbreBasket)
    this.nbreMaxSubject.next(this.alertNbreMax)
    this.basketSubject.next(this.basket)
  }

  addProduct(data: any) {
    this.alertNbreMax = false
    //"" au cas ou 'data' n'existe pas, "[]" au cas ou 'data' existe mais qu'il est vide (crée puis vidé)
    if (this.cookieService.get('data') == "" || this.cookieService.get('data') == "[]") {
      this.basket.push({ data, quantite: 1 })
      this.cookieService.set('data', JSON.stringify(this.basket))
    } else {
      //Si data existe on parcours le tableau pour observer si il faut ajouter le produit dans le panier,
      //ou bien seulement ajouter +1 à la quantité si le produit est déja dans le pannier
      this.basket = JSON.parse(this.cookieService.get('data'))
      for (let i = 0; i < this.basket.length; i++) {
        if (this.basket[i].data.id == data.id) {
          this.verification = false
          //Max d'ajout d'un produit = 5
          if (this.basket[i].quantite == 5) {
            this.alertNbreMax = true
            break
          }
          else {
            this.basket[i].quantite += 1
            this.cookieService.set('data', JSON.stringify(this.basket))
            break
          }
        } else this.verification = true
      }
    }
    //verification == true => Le produit n'est pas dans le panier, donc on l'ajoute
    if (this.verification == true) {
      this.basket.push({ data, quantite: 1 })
      this.cookieService.set('data', JSON.stringify(this.basket))
    }
    this.emitBasket()
  }


  deleteProduct(data: any) {
    //met à jour le tableau en le filtrant => on retient seulement les éléments 
    //du cookie qui ont un id différent de l'id de l'élément selectionné (cliquer), data.id.
    //basket récupère ensuite le tableau du cookie
    this.basket = JSON.parse(this.cookieService.get('data')).filter(dataFilter => dataFilter.data.id !== data.data.id)
    //cookie prend la nouvelle valeur du tableau basket, sous format de chaîne JSON
    this.cookieService.set('data', JSON.stringify(this.basket))
    this.emitBasket()
  }

  changeQteProduct(qte: any, id: number) {
    //le panier récupère les données du panier du user en prennant la valeur du cookie
    this.basket = JSON.parse(this.cookieService.get('data'))
    //on isole (filter) le produit dont la quantité à été modifié, puis on le modifie (map)
    this.basket.filter(product => product.data.id == id).map(element => {
      //met à jour la quantité du produit dans le panier
      element.quantite = parseInt(qte)
    })
    //cookie prend la nouvelle valeur du tableau basket, sous format de chaîne JSON
    this.cookieService.set('data', JSON.stringify(this.basket))
    this.emitBasket()

  }
}
