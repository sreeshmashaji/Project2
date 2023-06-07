import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  type='';
  id='';
  url='';
  movies:any;
  movie:any;

  

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {

this.type=this.route.snapshot.params['type'];
this.id=this.route.snapshot.params['id'];

if(this.type=='Trending'){
  this.url='http://localhost:4200/assets/trending-books.json'
}

if(this.type=='popular'){
  this.url='http://localhost:4200/assets/popular-books.json'
}

if(this.type=='Upcoming'){
  this.url='http://localhost:4200/assets/upcoming-books.json'
}
this.getBook()


}

getBook(){

  this.http.get(this.url).subscribe((movies) => {
    this.movies = movies;
    let index = this.movies.findIndex(
      (movie: { id: string }) => movie.id == this.id
    );
    if (index > -1) {
      this.movie = this.movies[index];
    }
  });


}



}
