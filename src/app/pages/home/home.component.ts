import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent]
})
export class HomeComponent {

  productName: any[] = [];
    

  
    constructor() {}
  
    ngOnInit(): void {
      this.getData();
    }
  
    async getData(): Promise<void> {
      try {
        const response = await fetch('https://615f745e6d394a72b57648f8db067298.api.mockbin.io/');
        const data = await response.json();
        this.productName = data.KeralaDistricts;
        console.log('Fetched data:', this.productName);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    logId(id: number): void {
      console.log('Product ID:', id);
    }
  
  }



