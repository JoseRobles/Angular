import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  @Output() filter=new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {
  }

  EmitFilter(searchTerm:string){
    console.log(searchTerm);
    this.filter.emit(searchTerm);
  }  

}
