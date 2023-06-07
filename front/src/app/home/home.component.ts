import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingBooks:any
  popularBooks:any
  upcomingBooks:any
  


  constructor(private http:HttpClient,private router :Router) { }

  ngOnInit(): void {
    this.getTrendingBooks();
    this. getPopularBooks();
    this.getupcomingBooks();
  }
  getTrendingBooks(){
    this.http.get('http://localhost:4200/assets/trending-books.json').subscribe((books)=>{
this.trendingBooks=books
console.log(this.trendingBooks)
    })
  }

  getPopularBooks(){
    this.http.get('http://localhost:4200/assets/popular-books.json').subscribe((books)=>{
this.popularBooks=books
console.log(this.popularBooks)
    })
  }


  getupcomingBooks(){
    this.http.get('http://localhost:4200/assets/upcoming-books.json').subscribe((books)=>{
this.upcomingBooks=books
console.log(this.upcomingBooks)
    })
  }

  // gotoBook(type:string,id:string){
  //   this.router.navigateByUrl(['movie',type,id]);

  // }
  goToBook(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }


}
