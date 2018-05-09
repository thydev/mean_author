import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  author: any;
  message = '';
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute
  ) {
    this.author = {name: ''};
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id']);
    });
  }

  getAuthor(id: string) {
    const obsItem = this._authorService.getOne(id);
      obsItem.subscribe(data => {
        if (data['message'] === 'Success') {
          this.author = data['data'][0];
        } else {
          console.log(data);
        }
      });
  }
  onSubmit() {
    const obsItem = this._authorService.update(this.author._id, this.author);
    obsItem.subscribe(data => {
      console.log(data);
      this.message = data['message'];
      // this.author = {name: ''};
    });
  }
}
