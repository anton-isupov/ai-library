import { Component, OnInit } from "@angular/core";
import {Board} from "../../models/board.model";
import {Column} from "../../models/column.model";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-main.view",
  templateUrl: "./main.view.component.html",
  styleUrls: ["./main.view.component.scss"]
})
export class MainViewComponent implements OnInit {

  constructor() { }

  grab = false;

  board: Board = new Board("Test Board", [
    new Column("Ideas", [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column("Research", [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column("Todo", [
      "Get to work",
      "Pick up groceries",
      "Go home",
      "Fall asleep"
    ]),
    new Column("Done", [
      "Get up",
      "Brush teeth",
      "Take a shower",
      "Check e-mail",
      "Walk dog"
    ])
  ]);


  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.grab = false;
    this.defaultCursor();
  }

  pointerCursor() {
    if (!this.grab) {
      document.body.style.cursor = "pointer";
    }
  }

  grabbingCursor() {
    this.grab = true;
    document.body.style.cursor = "grabbing";
  }

  defaultCursor() {
    if (!this.grab) {
      document.body.style.cursor = "default";
    }
  }


}

