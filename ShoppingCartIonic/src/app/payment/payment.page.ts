import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private acivaterouter:ActivatedRoute,
    private alertController:AlertController) { }

  totalAmount;

  
    async payAmount(){
      const alert = await this.alertController.create({
        header: 'Shopping Cart App',
        subHeader: 'your order is placed',
        message: 'thanks for shopping.',
        buttons: ['OK']
      });
    
      await alert.present();
    }


  ngOnInit() {
    this.acivaterouter.params.subscribe(params => {
      const total= params['total'];
      this.totalAmount=total;
    });
  }
}
