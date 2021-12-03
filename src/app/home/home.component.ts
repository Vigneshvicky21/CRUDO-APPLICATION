import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    var ans =confirm("sootha moodinu iruka maatiya da");
    if(ans){
      alert('nakku')
    }
  }

}
