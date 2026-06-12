import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private http = inject(HttpClient);
  
  // Signal to store our list of products
  products = signal<any[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
}