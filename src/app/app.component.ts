import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="app-container">
      <mat-card>
        <mat-toolbar>
          cxllics-dev
        </mat-toolbar><br>
        <mat-card-content>
          <p>Hello there!<br>
          Welcome to cxllics-dev!<br>
          This website is for cxllics's projects & more!</p>
        </mat-card-content>
      </mat-card><br>

      <mat-card>
        <mat-card-title>
          Title
        </mat-card-title>
        <mat-card-content>
          <p>Description
        </mat-card-content>
        <mat-card-subtitle>
         Posted on: _/_/____
        </mat-card-subtitle>
      </mat-card>

      <mat-card>
        <mat-card-title>
          Cake House Bakery
        </mat-card-title>
        <mat-card-content>
          <p>Want to check out Cake House? Here is the group
          <a href="https://web.roblox.com/groups/4875233/Cake-House#!">
          link</a>. <strong>main.ts</strong></p>
        </mat-card-content>
        <mat-card-subtitle>
         Posted on: 3/27/2020
        </mat-card-subtitle>
      </mat-card>

      <mat-card>
        <mat-card-title>
          Material Icons 
        </mat-card-title>
        <mat-card-content>
          <p>To add to the project in case you're gonna be using it,
          only have to add the code below (link tag) to your 
          <strong>index.html</strong> file, section head</p>
        </mat-card-content>
        <mat-card-subtitle>
          < link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </mat-card-subtitle>
      </mat-card>

      <mat-card class="example-card">
        <mat-card-title>
         Forums
        </mat-card-title>
        <mat-card-subtitle>
          Hello! The Forums are currently only open developers of this site. 
        </mat-card-subtitle>
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>cxllics</mat-card-title>
          <mat-card-subtitle>Hello there! This is our first forum post! Seems like it works, doesn't it? :D</mat-card-subtitle>
        </mat-card-header>
        <mat-card-actions>
          <button #likeBtn mat-button (click)="onLike()"></button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('likeBtn') likeBtn: ElementRef;

  onLike(): void {
    this.likeBtn._elementRef.nativeElement.innerText === '0' ?
    this.likeBtn._elementRef.nativeElement.innerText = '0' :
    this.likeBtn._elementRef.nativeElement.innerText = '0'
  }
}
