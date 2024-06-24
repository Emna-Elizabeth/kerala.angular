import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() src!: string;
  @Input() id!: number;

  constructor(private router: Router) {}

  goToDetail(id: number): void {
    if (id !== undefined && id !== null) {
      console.log('Navigating to detail with ID:', id);
      this.router.navigate(['/district-detail', id]).then(navigationResult => {
        if (navigationResult) {
          console.log('Navigation successful!');
        } else {
          console.error('Navigation has failed!');
        }
      });
    } else {
      console.error('ID is undefined or null', id);
    }
  }
}
