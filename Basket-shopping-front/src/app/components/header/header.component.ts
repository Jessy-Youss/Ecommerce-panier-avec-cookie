import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from '../../services/basket.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basketCounter: number
  counterSubscription: Subscription
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.counterSubscription = this.basketService.nbreSubject.subscribe(
      (nbre: number) => {
        this.basketCounter = nbre;
      }
    );
    this.basketService.emitBasket()
  }


}
