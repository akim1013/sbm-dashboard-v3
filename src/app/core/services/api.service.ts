import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';

const api_url = 'http://198.11.172.117/sbm-dashboard';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor( private http: HttpClient, private cookieService: CookieService) { }

    // Admin APIs
    login(data) {
        return this.http.post(`${api_url}/auth/login`, data)
            .pipe(map(res => {
                //login successful if the status is success
                if (res['status'] == 'success') {
                    // store res details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(res['res']), 1);
                }

                return res;
            }));
    }
    logHistory(data) {
        return this.http.post(`${api_url}/auth/logHistory`, data)
            .pipe(map(res => {
                return res;
            }));
    }
    getHistory(data) {
        return this.http.post(`${api_url}/auth/getHistory`, data)
            .pipe(map(res => {
                return res;
            }));
    }
    users() {
        return this.http.post(`${api_url}/auth/users`, {})
            .pipe(map(res => {
                return res;
            }))
    }
    database() {
        return this.http.post(`${api_url}/auth/db`, {})
            .pipe(map(res => {
                return res;
            }))
    }
    shops(data) {
        return this.http.post(`${api_url}/auth/shop`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    update_user(data){
        return this.http.post(`${api_url}/auth/update`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    add_user(data){
        return this.http.post(`${api_url}/auth/register`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    remove_user(data){
        return this.http.post(`${api_url}/auth/delete`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    all_operators(data){
        return this.http.post(`${api_url}/home/all_operators`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    operators(data){
        return this.http.post(`${api_url}/home/operators`, data)
            .pipe(map(res => {
                return res;
            }))
    }

    // User APIs
    sum_data(data){
        return this.http.post(`${api_url}/home/sum_data`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    sale_data(data){
        return this.http.post(`${api_url}/home/sale_data`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    payment_data(data){
        return this.http.post(`${api_url}/home/payment_data`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    causals(data){
        return this.http.post(`${api_url}/home/causals_data`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    sale_details(data){
        return this.http.post(`${api_url}/home/sale_details`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    trans_details(data){
        return this.http.post(`${api_url}/home/trans_details`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    payment_details(data){
        return this.http.post(`${api_url}/home/payment_details`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    article_details(data){
        return this.http.post(`${api_url}/home/article_details`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    sale_compare(data){
        return this.http.post(`${api_url}/home/sale_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    other_compare(data){
        return this.http.post(`${api_url}/home/other_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    payment_compare(data){
        return this.http.post(`${api_url}/home/payment_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    sale_date_compare(data){
        return this.http.post(`${api_url}/home/sale_date_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    other_date_compare(data){
        return this.http.post(`${api_url}/home/other_date_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    payment_date_compare(data){
        return this.http.post(`${api_url}/home/payment_date_compare`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    item_history(data){
        return this.http.post(`${api_url}/kitchen/getHistory`, data)
            .pipe(map(res => {
                return res;
            }))
    }
    weekly_detail(data){
        return this.http.post(`${api_url}/home/weekly_detail`, data)
            .pipe(map(res => {
                return res;
            }))
    }
}
