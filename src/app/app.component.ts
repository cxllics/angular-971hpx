import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="app-container">
      <mat-card>
        <mat-toolbar>
        A new website is coming soon! 
        This one is just temporary.
        </mat-toolbar><br>
        <mat-card-content>
          <p>Hey there, welcome to cxllics.dev! Our website is currently in BETA so please mind the dust. Thanks! :)</p>
        </mat-card-content>
      </mat-card><br>

      <mat-card>
        <mat-card-title>
          Projects
        </mat-card-title>
      </mat-card>

      <mat-card>
        <mat-card-title>
          Cake House Bakery
        </mat-card-title>
        <mat-card-content>
          <p>Want to check out Cake House? Here is the group
          <a href="https://web.roblox.com/groups/4875233/Cake-House#!">
          link</a>. </p>
        </mat-card-content>
        <mat-card-subtitle>
         Posted on: 3/27/2020
        </mat-card-subtitle>
      </mat-card>


      <mat-card class="example-card">
        <mat-card-title>
         Forums
        </mat-card-title>
        <mat-card-subtitle>
          Hello! The forums are currently only open to developers of this site. 
        </mat-card-subtitle>
      </mat-card>
      
            <mat-card class="example-card">
        <mat-card-title>
         Forum Post #1
        </mat-card-title>
        <mat-card-subtitle>
         Hello there! This is our first forum post! Seems like it works, doesn't it? :D
        </mat-card-subtitle>
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>cxllics</mat-card-title>
          <mat-card-subtitle>Posted on: 3/27/20202</mat-card-subtitle>
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
