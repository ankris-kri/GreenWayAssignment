import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { QuestionModel } from './question-model';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  questions: QuestionModel[];
  constructor(private httpClient: HttpClient,private _bottomSheet: MatBottomSheet) { 
    this.questions=[];
  }

  ngOnInit(): void {
    this.FetchQuestions().subscribe(result =>{
      this.questions = result.results;

      this.questions.forEach(question =>{
        //Shuffling options
        question.options = [...question.incorrect_answers,question.correct_answer].sort( ()=>Math.random()-0.5 );
      })
    })
  }

  FetchQuestions():Observable<any>{
    return this.httpClient.get("https://opentdb.com/api.php?amount=5&amp;category=11&amp;difficulty=medium&amp;type=multiple");
  }

  submit(){
    let correctAnswers = this.questions.filter(question =>{
      return question.optionSelected == question.correct_answer
    });
    this._bottomSheet.open(BottomPopup,{data: correctAnswers.length});
  }
}

@Component({
  selector: 'bottom-popup',
  template: `<div style="text-align:center;padding-top:40px;padding-bottom:40px;">
                You have answered {{ data}} questions correctly.</div>`,
})
export class BottomPopup {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}
