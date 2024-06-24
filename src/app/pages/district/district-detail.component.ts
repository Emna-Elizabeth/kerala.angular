import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CardComponent } from "../../ui/card/card.component";


@Component({
    selector: 'app-district-detail',
    standalone: true,
    templateUrl: './district-detail.component.html',
    styleUrl: './district-detail.component.scss',
    imports: [NgIf, NgFor, CardComponent]
})
export class DistrictDetailComponent {
  id!: number;
  productName: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        console.log('Detail Component ID:', this.id);  
        this.fetchDetails(this.id);
      } else {
        console.error('ID param is missing!');
      }
    });
    this.getData(); // Call this.getData() to fetch initial data
  }

  fetchDetails(id: number): void {
    // Implement the logic to fetch details based on the id
    console.log('Fetching details for ID:', id);
    // Example: You can call a service to fetch details based on the id
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
