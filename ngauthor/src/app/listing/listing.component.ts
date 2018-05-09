import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  authors: any;
  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    const obsItem = this._authorService.getAll();
    obsItem.subscribe(data => {
      this.authors = data['data'];
    });
  }

  onDelete(id: string) {
    console.log(id);
    const obsItem = this._authorService.delete(id);
    obsItem.subscribe(data => {
      console.log(data);
      this.getAuthors();
    });
  }
}
