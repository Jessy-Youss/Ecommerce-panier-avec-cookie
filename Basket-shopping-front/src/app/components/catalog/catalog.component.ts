import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Subscription } from 'rxjs';
import { BasketService } from '../../services/basket.service'



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: any
  alertSubscription: Subscription
  alertNbreMax: boolean = false
  constructor(private basketService: BasketService) { }

  async ngOnInit() {
    await axios.get('http://localhost:8080/list').then(res => {
      this.products = res.data
    })
    this.alertSubscription = this.basketService.nbreMaxSubject.subscribe(
      (verification: boolean) => {
        this.alertNbreMax = verification;
      }
    )
  }

  addToBasket(data: any) {
    this.basketService.addProduct(data)
    if (this.alertNbreMax == true) {
      setTimeout(() => {
        this.alertNbreMax = false
      }, 2000)
    } else this.alertNbreMax = false
  }

}
