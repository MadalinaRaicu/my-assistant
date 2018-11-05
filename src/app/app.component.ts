import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { single } from '../data';

class Book {
  constructor(public title) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oil-analyst';

  public books: AngularFireList<Book[]>;

  constructor(private db: AngularFireDatabase) {
    this.books = db.list('/books');
  }


}
