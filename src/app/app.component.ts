import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

class Book {
  constructor(public title) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oil-analyst';
  public books: AngularFireList<Book[]>;
  constructor(db: AngularFireDatabase) {
      this.books = db.list('/books');
  }
}
