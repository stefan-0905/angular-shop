import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Category} from '../../../models/main/Category.model';
import {NgForm} from '@angular/forms';
import {ProductApiService} from '../../../services/ProductApiService.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  categories: Category[] = [];
  checkedSizes: string[] = [];

  image: File = null;

  constructor(private route: ActivatedRoute, private productApi: ProductApiService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.categories = data.data;
    });
  }

  onSubmit(form: NgForm) {
    const formData: FormData = new FormData();
    formData.append('title', form.value.title);
    formData.append('price', form.value.price);
    formData.append('brand', form.value.brand);
    formData.append('categoryId', form.value.category);
    formData.append('sizes', this.checkedSizes.join(','));
    formData.append('image', this.image, this.image.name);

    this.productApi.store(formData).subscribe((event) => console.log(event));
  }

  onImageChange(files: FileList) {
    this.image = files.item(0);
  }

  onChange(size: string, isChecked: boolean) {
    if (isChecked) {
      this.checkedSizes.push(size);
    } else {
      const index = this.checkedSizes.indexOf(size);
      this.checkedSizes.splice(index, 1);
    }
  }
}
