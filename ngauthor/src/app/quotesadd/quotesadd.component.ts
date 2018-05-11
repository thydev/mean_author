import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-quotesadd',
  templateUrl: './quotesadd.component.html',
  styleUrls: ['./quotesadd.component.css']
})
export class QuotesaddComponent implements OnInit {
  author: any;
  quote = { content: '', vote: 0 };
  message = '';
  // myform: FormGroup;
  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.message = '';
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

  onSubmit(event) {
    console.log(event);
    // event.preventDefault();
    console.log(event.target.content.value);
    this.quote.content = event.target.content.value;
    if (this.quote.content.length < 4) {
      this.message = 'Quote should be longer than 3 characters';
    } else {
      const obsItem = this._authorService.createQuote(this.author._id, this.quote);
      obsItem.subscribe(data => {
        if (data['message'] === 'Success') {
          this._router.navigate(['/']);
          console.log(data);
        } else {
          console.log(data);
          this.message = data['message'];
        }
      });
    }

  }
}
