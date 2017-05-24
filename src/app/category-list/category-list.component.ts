import {Component, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: Category;

  constructor() {
    this.category = new Category('category', 'summary', 'content', 'author', 10, 20, 10, new Date());
  }

  ngOnInit() {
  }

}
