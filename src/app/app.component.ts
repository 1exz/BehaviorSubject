import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  result:number=0;
    ngOnInit() {
    let subject = new BehaviorSubject(5);
    function random(){
    const rand = Math.round(Math.random() * 1000);
     subject.next(rand);
    }
     setInterval(random,3000);
     subject.subscribe(console.log);
     subject.subscribe((result) => {
      if (result >= 300 && result <= 700) {
        this.result = result;
      }
    });
    }
  }