import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observer } from 'rxjs/Observer';
import { ListFilterComponent } from '../list-filter/list-filter.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:Article[];
  listObservable:any;

  //@Input() filter: ListFilterComponent;


  constructor(private articleService:ArticlesService) { 
  }


  ngOnInit() {
    this.loadList();
  }

  filter(searchTerm: string) {

      switch(searchTerm)
      {
        case "ByPoints":
          this.sortingByPoints(this.articles);
          break;
        case "ByTitle":
          this.sortingByTitle(this.articles);
        default:
          this.articles.sort();
      }

      
  }

  sortingByPoints(articleList:Article[]){
    articleList.sort((a:Article, b:Article)=> b.votes - a.votes);
  }

  sortingByTitle(articleList:Article[])
  {
    articleList.sort(function(a, b){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0});
  }

  loadList(){
    this.articleService.getList().subscribe(
      result=>{
        this.articles = result;
      },err=>{
        console.log("error");
      },
      ()=>{
        console.log("finished");
      }
    );
  }
  

}
