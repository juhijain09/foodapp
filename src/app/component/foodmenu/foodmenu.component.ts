import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';// to send data from UI
import * as _ from 'lodash';
@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
	public path;
	public foodList;
	public displayList;
	public category = ['price','rating'];
	public flagPrice = false;
	public flagRating = false;
	public checkoutList = [];
	public toggleView = false;
	public total=0;
	public discount = 0;
	public grandTotal = 0;
	public AckView = false;
	public delivery_time = 0;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: Http,) { }

  ngOnInit() {
    this.path = this.activatedRoute.snapshot.url[1].path ;
    const apiurl = "http://demo5635398.mockable.io/" + this.path;
    this.http.get(apiurl)
    .subscribe((response)=>{
    	 this.foodList = response.json()["menu-items"];
    	 this.displayList = this.foodList;
    });

  }
  public searchFood(val){
  	this.displayList = [];
  	_.forEach(this.foodList,(food)=>{
  		if(food.name.toLowerCase().indexOf(val.toLowerCase())!= -1){
  			this.displayList.push(food);
  		}
  	})
  }
  public toggleSortPrice(){
  	this.flagPrice = !this.flagPrice;
  	if(this.flagPrice){
  		this.displayList = _.sortBy(this.displayList, ['price']);
  	}
  	else{
  		this.displayList.reverse();
  	}
  }
    public toggleSortRating(){
  	this.flagRating = !this.flagRating;
  	if(this.flagRating){
  		this.displayList = _.sortBy(this.displayList, ['rating']);
  	}
  	else{
  		this.displayList.reverse();
  	}
  }
  public addFoodtoCart(item){
  	this.checkoutList.push(item);
  	this.total += item.price;
  }
  public checkoutCart(){
  	if(this.total>100){
  		this.discount = Math.round(this.total * 0.1);
  		this.grandTotal = this.total - this.discount;
  	}
  	else{
  		this.grandTotal = this.total;
  	}
  	if(this.grandTotal <= 0){
  		this.grandTotal = 0;
  		this.total = 0;
  	this.toggleView =!this.toggleView;
  	}
  	else{
  	this.toggleView = true;
  	}
  }
  public placeOrder(){
  	this.toggleView =!this.toggleView;
	this.AckView = true;
	this.delivery_time = Math.floor((Math.random() * 30) + 1);

  }
  public removeItem(item){
  	this.checkoutList.splice(this.checkoutList.indexOf(item),1);
  	this.total = this.total - item.price;
  	this.checkoutCart();
  }
}
