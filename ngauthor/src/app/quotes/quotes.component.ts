import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  author: any;
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute
  ) {
    // this.author = {name: ''};
  }

  ngOnInit() {
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

  vote(id: string, vote: number) {
    const quote = {'quote_id': id, 'vote': vote};
    const obsItem = this._authorService.vote(this.author._id, quote);
    obsItem.subscribe(data => {
      console.log(data);
      this.author = data['data'];
    });
  }

  onDelete(quote_id: string) {
    const obsItem = this._authorService.deleteQuote(this.author._id, quote_id);
    obsItem.subscribe(data => {
      console.log(data);
      this.author = data['data'];
    });
  }

}
