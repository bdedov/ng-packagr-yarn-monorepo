import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelloService {
  sayHello(): string {
    return "Hello world!";
  }
}
