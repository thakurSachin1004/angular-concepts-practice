import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  handleSubmit(form: NgForm) {
    console.log(form.value);
  }
}
