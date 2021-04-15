import { Injectable } from "@angular/core";
import { HelloService } from "client";

@Injectable({
  providedIn: "root",
})
export class GreetingsService {
  constructor(private helloService: HelloService) {}

  hayHello(): string {
    return this.helloService.sayHello();
  }
}
