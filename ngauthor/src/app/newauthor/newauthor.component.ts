import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  author: any;
  message = '';
  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this.author = { name: ''};
  }
  onSubmit() {
    const obsItem = this._authorService.addNew(this.author);
    obsItem.subscribe(data => {
      console.log(data);
      if (data['message'] === 'Success') {
        this.author = {name: ''};
      }
      this.message = data['message'];
    });
  }
}
