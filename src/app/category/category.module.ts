import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule
  ],
  exports: [
    RouterModule
]
})
export class CategoryModule { }
