import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this. getContact();
  }
  getContact(){
    this.contactService.getContact().subscribe(res=>{
  
      console.log('getContact',res);
    });
  };
}
