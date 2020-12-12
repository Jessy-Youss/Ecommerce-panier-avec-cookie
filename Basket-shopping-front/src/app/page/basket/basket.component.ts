import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from '../../services/basket.service'
import { CookieService } from 'ngx-cookie-service'


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  sousTotal = 0
  livraison = 5
  total = 0
  products = []
  basketEmpty = true
  basketSubscription: Subscription
  basketEmptySubscription: Subscription
  constructor(private basketService: BasketService, private cookieService: CookieService) { }

  ngOnInit() {
    this.basketSubscription = this.basketService.basketSubject.subscribe(
      () => {
        this.products = JSON.parse(this.cookieService.get('data'))
        if (this.products.length == 0) this.basketEmpty = true
        else this.basketEmpty = false
        this.sousTotal = 0
        this.products.map(element => {
         this.sousTotal += (element.data.price * element.quantite)
        })
        this.total = this.sousTotal + this.livraison
      }
    )
    this.basketService.emitBasket()
  }

  deleteToBasket(data: any) {
    this.basketService.deleteProduct(data)
  }

  changeQte(qte: any, id: number) {
    this.basketService.changeQteProduct(qte, id)
  }
}
