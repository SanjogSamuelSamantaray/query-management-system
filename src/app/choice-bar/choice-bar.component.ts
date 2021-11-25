import { Component, OnInit } from '@angular/core';

import data from "../../assets/data.json";
import { ChoiceBar } from './Choicebar';
import Data from "../../assets/cardData.json"
import data1 from "../../assets/data1.json"
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ParameterServiceService } from '../service/parameter-service.service';


@Component({
  selector: 'choice-bar',
  templateUrl: './choice-bar.component.html',
  styleUrls: ['./choice-bar.component.scss']
})
export class ChoiceBarComponent implements OnInit {
  parameters:any=[];
  status: boolean = false;
  tstatus: boolean = false;

  customerHeader:string = "Customer"
  applicationHeader:string = "Application"
  issueCategoryHeader :string = "Issue Category"
  issueTypeHeader:string = "Issue Type"
  processStepHeader:string = "Process Steps"

  choiceBar!: ChoiceBar;

  customerVar: string = '';
  applicationVar: string = '';
  issueCategoryVar: string = '';
  issueTypeVar: string = '';
  processStepVar: string = '';

  issueType: any[] = [
    "Customer", "Transaction", "Software"
  ]
  customer: any[] = [
    "Prime", "Plus", "Normal"
  ]
  application: any[] = [
    "Web", "Android", "iOS"
  ]
  issueCategory: any[] = [
    "Normal", "Priority", "Urgent"
  ]
  processStep: any[] = [
    "3-Steps", "5-Steps", "7-Steps"
  ]




  updateData(dropDownData: string, paramType: string) {
    // this.choiceBar.issueType = issueType;

    if(paramType == 'Customer' && this.customerHeader!=dropDownData) {
      this.customerVar = dropDownData
      this.customerHeader = dropDownData
      this.issueTypeVar = '';
      this.issueCategoryVar = '';
      this.applicationVar = '';
      this.applicationHeader = "Application";
      this.status = false;
      this.tstatus = false;
    }
    else if(paramType == 'Application' && this.applicationHeader!=dropDownData) {
      this.status = false;
      this.applicationVar = dropDownData
      this.applicationHeader = dropDownData
      this.issueTypeVar = '';
      this.issueCategoryVar = '';
      this.issueCategoryHeader = "Issue Category";
      this.tstatus = false;
    }
    else if(paramType == 'IssueCategory' && this.issueCategoryHeader!=dropDownData) {
      this.issueCategoryVar = dropDownData
      this.issueCategoryHeader = dropDownData
      this.issueTypeVar = '';
      this.issueTypeHeader = "Issue Type";
      this.status = false;
      this.tstatus = false;
    }
    else if(paramType == 'IssueType' && this.issueTypeHeader!=dropDownData) {
      this.issueTypeVar = dropDownData
      this.issueTypeHeader = dropDownData
      this.processStepVar = '';
      this.processStepHeader = "Process Steps";
      this.status = false;
      this.tstatus = false;
    }
    else if(paramType == 'ProcessStep' && this.issueTypeHeader!=dropDownData) {
      this.processStepVar = dropDownData
      this.processStepHeader = dropDownData
      this.status = false;
      this.tstatus = false;
    }
  }
  SourceData:any[]=[];
  constructor(private parameterService:ParameterServiceService) {
    //this.parameter = data;
    data1.forEach(element => {
      this.SourceData.push(element);
    });
    Data.forEach(element => {
      this.SourceData.push(element);
    });
  }


  ngOnInit(): void {
    //this.getParameters();
  }


  async getParameters()
  {
    var result= await this.parameterService.getParameters();
    console.log(result);
    if(result!=null && result.Result!=null)
    {
     
      this.parameters=result.Result;
      console.log(this.parameters);
    }
  }

  onClickSubmit(formValue:any, event: Event)
  {
    // console.log("llllll")
    console.log(formValue);
    this.showData(event);
  }

  showData(event: Event) {
    event.preventDefault();
    this.status = true;
    this.tstatus = true;
  }

}