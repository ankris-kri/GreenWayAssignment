import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  keyedInput = '[Apple, Apple, Avocado, Apple, Apple]';
  error:string = '';
  result:string = '';
  srcResult:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculateTotalCost(input: string){
    this.cleanUp();
    var regex = new RegExp('^\\[(Apple|Avocado)(, (Apple|Avocado))*\\]$')
    if(regex.test(input)){
      let fruitsArray = input.substring(1, input.length-1).split(', ')
      let map = new Map<string,number>();
      fruitsArray.forEach(fruit => {
        map.set(fruit, (map.get(fruit) || 0)+1)
      });

      let appleCost = 0;
      if(map.get('Apple')){
        let totalApples = map.get('Apple')!;
        appleCost = Math.floor(totalApples/3)*0.50 + (totalApples%3)*0.25
      }
      let avocadoCost = 0;
      if(map.get('Avocado')){
        let totalAvocados = map.get('Avocado')!;
        avocadoCost = totalAvocados*0.10;
      }
      this.result = `Apple Cost (including offer) - $${appleCost} | Avocado Cost - $${avocadoCost} | Total Bill Amount - $${appleCost+avocadoCost}`;
    }
    else{
      this.error = "Input must be of format [Apple, Avocado, Avocado] and accepts either Apple or Avocado";
    }
  }

  onFileSelected() {
    this.keyedInput = '';
    let inputNode: any = document.querySelector('#Assingment2file');
    if (typeof (inputNode) !== 'undefined' && inputNode.files[0].type == "text/plain") {
      const reader = new FileReader();
      const this_ = this;
      reader.readAsText(inputNode.files[0]);

      reader.onload = function(e:any) {
        this_.calculateTotalCost(e.target.result);
        inputNode = null;
      };
    
      reader.onerror = function() {
        this_.error = "please select a valid .txt file";
      };
    }
    else{
      this.error = "please select a valid .txt file";
    }
  }

  cleanUp(){
    this.result = "";
    this.error = '';
  }

  onUploadBtnClick(){
    let inputNode: any = document.querySelector('#Assingment2file');
    if(inputNode.value) inputNode.value = '';
  }
}
