import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup , FormControl , FormBuilder, Validators} from '@angular/forms';
import { Product } from '../product';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'product-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.css']
})
export class EditNewComponent implements OnInit, OnChanges {
  @Input()  productValues:any;
  @Input() action:number;
  public productForm;

  

  constructor(private fb:FormBuilder, private productservice:UserDataService) {
   }

  ngOnInit() {
   
  }
  ngOnChanges(){
    console.log(this.productValues);
    this.productForm =this.fb.group({
      productname:[this.productValues?this.productValues.productname:'',Validators.required],
      category:[this.productValues?this.productValues.category:'',Validators.maxLength(20)],
      price:[this.productValues?this.productValues.price:'',[Validators.required,Validators.min(100)]],
      quantity:[this.productValues?this.productValues.quantity:'',[Validators.required,Validators.min(1),Validators.max(10)]]
     })
  }

  retrieveProductDetails(values) {
    if(this.action == 1){
      values.id = this.productValues.id;
      console.log("values",values);
      this.productservice.updateProduct(values).subscribe(data=>{console.log("data",data)});
    }
    else{
      values.id = Math.random();
      this.productservice.addProduct(values).subscribe(data=>{console.log("data");});
    }
   
  }

}
