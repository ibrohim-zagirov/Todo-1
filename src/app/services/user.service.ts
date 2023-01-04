import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
