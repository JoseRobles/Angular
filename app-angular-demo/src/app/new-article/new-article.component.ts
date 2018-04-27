import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm} from '@angular/forms'
import { ArticlesService } from '../shared/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit() {
   
  }

  Add(newArticleForm:NgForm)
  {
      this.articleService.addArticle(newArticleForm.value.Title,newArticleForm.value.Link).subscribe(      
        result => {console.log('Done');        
                  this.router.navigate(['/']);
                  },      
        err =>    {console.log("error");}, 
        () => {        console.log(""); })  
      }

}
