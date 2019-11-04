import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './config';
import { ApiService } from './api.service';
import { Complaint } from './compaint';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService extends ApiService {
  private readonly uri = Config.GetResource();

  constructor(private authService: AuthService, private http: HttpClient) {
    super();
  }

  private GetHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.authorizationHeader
      })
    };
  }

  public GetComplaints() {
    return this.http.get<Complaint[]>(this.uri + '/Complaints', this.GetHeaders())
      .pipe(
        retry(3),
        // catchError(this.HandleError)
      );
  }

  public GetComplaint(placeId: string, userId: string, timeSubmitted: Date) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted.toISOString()}`;

    return this.http.get<Complaint>(this.uri + reqparams, this.GetHeaders())
      .pipe(
        retry(3),
        // catchError(this.HandleError)
      );
  }

  public PostComplaint(complaint: Complaint) {
    return this.http.post<Complaint>(this.uri + '/Complaints', complaint ,this.GetHeaders())
      .pipe(
        retry(3),
        // catchError(this.HandleError)
      );
  }

  public PutComplaint(placeId: string, userId: string, timeSubmitted: Date, complaint: Complaint) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted.toISOString()}`;

    return this.http.put<Complaint>(this.uri + reqparams, complaint ,this.GetHeaders())
      .pipe(
        retry(3),
        // catchError(this.HandleError)
      );
  }

  public DeleteComplaint(placeId: string, userId: string, timeSubmitted: Date) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted.toISOString()}`;

    return this.http.delete<Complaint>(this.uri + reqparams ,this.GetHeaders())
      .pipe(
        retry(3),
        // catchError(this.HandleError)
      );
  }
}
