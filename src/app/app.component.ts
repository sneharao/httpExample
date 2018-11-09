import { Component ,OnInit} from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  productList: any;
  newProduct;
  public selectedItem;
  
  constructor(private dataService:UserDataService) {
    
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data=>{
      console.log("data",data);
      this.productList = data;
     },error=>{});
  }

  deleteProduct(idvalue){
    console.log("idvalue",idvalue);
    this.dataService.deleteProduct(idvalue).subscribe(data=>{
      console.log("data",data);
    },error=>{
      console.log("Error occured",error);
    })

  }
}
