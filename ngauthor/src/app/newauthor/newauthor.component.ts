import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})

export class NewauthorComponent implements OnInit {
  author: any;
  message = '';
  constructor(
    private _authorService: AuthorService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = { name: ''};
  }

  onSubmit() {
    const obsItem = this._authorService.addNew(this.author);
    obsItem.subscribe(data => {
      console.log(data);
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.author.name + ' was added!';
        this.author = {name: ''};
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
