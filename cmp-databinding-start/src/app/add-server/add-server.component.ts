import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  constructor() { }

  // newServerName = '';
  // newServerContent = '';

  // serverContentInput attribute given on input in html file. newServerContent will contain ref to input now
  @ViewChild('serverContentInput', {static: true}) newServerContent: ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  onAddServer(serverNameInput) {
   this.serverCreated.emit({
     serverName: serverNameInput.value,
     serverContent: this.newServerContent.nativeElement.value
   });
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    })
  }

  ngOnInit(): void {
  }

}
