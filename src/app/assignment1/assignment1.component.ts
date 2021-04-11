import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  keyedInput = '\"GreenWayHealth123\"';
  error:string = '';
  result:string = '';
  srcResult:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculateCharOccurance(word: string){
    this.cleanUp();
    var regex = new RegExp('^\"(\\w*)\"$')
    var regexMatch = regex.exec(word);
    if(regexMatch != null){
      let map = new Map<string,number>();
      [...regexMatch[1]].forEach(char => {
        map.set(char, (map.get(char) || 0)+1)
      });
  
      map.forEach((count:number, char:string)=>{
        this.result += `${char} = ${count} | `;
      })
    }
    else{
      this.error = "Input must be an enquoted alphanumeric word (without spaces)";
    }
  }

  onFileSelected() {
    this.keyedInput = '';
    let inputNode: any = document.querySelector('#file');
    if (typeof (inputNode) !== 'undefined' && inputNode.files[0].type == "text/plain") {
      const reader = new FileReader();
      const this_ = this;
      reader.readAsText(inputNode.files[0]);

      reader.onload = function(e:any) {
        this_.calculateCharOccurance(e.target.result);
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
    let inputNode: any = document.querySelector('#file');
    if(inputNode.value) inputNode.value = '';
  }
}
