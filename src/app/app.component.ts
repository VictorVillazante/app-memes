import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
//import { retry } from 'rxjs/operators';
//import { catchError } from 'rxjs/operators';
import { Meme } from "./meme";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectoAngular';
  m:Meme[]=[];
  constructor(private http:HttpClient){}
  cargarMemes():void{
    console.log("cargar memes");  
    //Es any con minuscula no con mayuscula Any sino no define un tipo de variable dinamica
    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(response=>{
      this.m=response.data.memes;
      console.log(this.m);
    });
  }
}
