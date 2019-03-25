import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, Subject, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { AuthUser, Token } from "./auth-user";

import { environment } from "../../../environments/environment";

const CurrentUserTokenKey = "CURRENT_USER";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private loginUrl = "";
  private registerUrl = "";
  private loginChangedSource = new Subject<boolean>();
  public onLoginChanged: Observable<
    boolean
  > = this.loginChangedSource.asObservable();
  public currentUser: AuthUser = null;
  public token: string;

  constructor(private http: HttpClient) {
    //set token and current user if saved in local storage
    this.currentUser = this.getCachedUser();
    this.token = !!this.currentUser && this.currentUser.access_token;
    this.loginUrl = this.getLoginUrl();
    this.registerUrl = 'http://localhost:57229/api/Account/Register';
  }

  public login(username: string, password: string): Observable<AuthUser> {
    const params = new HttpParams()
      .set("username", username)
      .set("password", password)
      .set("grant_type", "password");

    return this.sendRequest(params);
  }

  public logout(): void {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem(CurrentUserTokenKey);

    this.loginChangedSource.next(false);
  }

  public register(email: string, password: string): void {
    const params = {
      "Email": email,
      "Password": password,
      "ConfirmPassword": password
    }
    console.log("in register", params);
    
    this.SendRequestRegister(params);
  }

  public get isLoggedIn(): boolean {
    return !!this.token;
  }

  public getCachedUser(): AuthUser {
    return JSON.parse(localStorage.getItem(CurrentUserTokenKey)) as AuthUser;
  }

  public getCachedToken(): string {
    return this.getCachedUser().access_token;
  }

  public getAuthorizationHeader(): string {
    if (this.isLoggedIn) {
      return `Bearer ${this.token}`;
    }

    return null;
  }

  private SendRequestRegister(params: any): void {
    let body: JSON = params;
    console.log("in snedrequest", body);
    console.log("in sendrequest 2", this.registerUrl);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };

     this.http
      .post(this.registerUrl, params, httpOptions)
      .pipe(map((response) => console.log(response)),
      catchError(this.handleError('searchDiscussions', [])));
  }

  private sendRequest(params: HttpParams): Observable<AuthUser> {
    const body: string = params.toString();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "http://localhost:4200" })
    };
    return this.http
      .post(this.loginUrl, body, httpOptions)
      .pipe(map((response: Token) => this.saveToken(response)));
      
      
  }

  private saveToken(response: Token): AuthUser {
    // login successful if there's a jwt token in the response
    const token = response && response.access_token;
    if (token) {
      // set token property
      this.token = token;
      this.currentUser = new AuthUser(response.userName, response.access_token);

      // store user and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(
        CurrentUserTokenKey,
        JSON.stringify(this.currentUser)
      );
      this.loginChangedSource.next(true);
      return this.currentUser;
    } else {
      this.loginChangedSource.next(false);
      return null;
    }
  }

  private getLoginUrl(): string {
    let loginUrl = environment.apiHost.replace(/\/$/, "") + "/Token";
    if (loginUrl.indexOf("localhost") >= 0) {
      return loginUrl;
    }
    const idx = loginUrl.indexOf("//");
    return "https://" + loginUrl.substring(idx);
  }

  private getRegisterUrl(): string {
    let registerUrl = environment.apiHost.replace(/\/$/, "") + "/api/Account/Register";
    if(registerUrl.indexOf("localhost") >= 0) {
      return registerUrl;
    }
    const idx = registerUrl.indexOf("//");
    return "https://" + registerUrl.substring(idx);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}