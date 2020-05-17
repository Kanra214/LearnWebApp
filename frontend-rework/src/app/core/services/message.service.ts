import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { api } from '@api';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends ResourceService {

  constructor(http: HttpClient) { 
    super(api.message, http);
  }
}
