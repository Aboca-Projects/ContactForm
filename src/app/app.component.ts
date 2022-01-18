import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Basic ' + btoa('zendesk@aboca.it/token:94HmF62Ek3mvvdXk6r8LytWJVVWM0PsaeBNXZkNR'),
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ContactForm';
  form: FormGroup;
  roba: any;
  postsURL = 'https://abocasupport.zendesk.com/api/v2/tickets.json';

  constructor(public fb: FormBuilder,
              private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    });
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.http.get<any>(this.postsURL, httpOptions).subscribe(res => {
      this.roba = res;
      console.log(res);
    });
    console.log();
  }
  // tslint:disable-next-line:typedef
  submitForm(){
    console.log(this.form.value);
  }
}
