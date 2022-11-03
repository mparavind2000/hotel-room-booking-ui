import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn : 'root'
})
export class BackendApiService {
    URL: string ='http://localhost:8080';
    URL2: string ='http://localhost:8081';
    token=  new HttpHeaders().append('accessToken',sessionStorage.getItem('accessToken') || '')
    constructor(private httpclient: HttpClient) { }
    registerUser(registerform: any) {
       return this.httpclient.post(`${this.URL}/register/${this.token}`,registerform,{
            observe: 'body'
        })
    }
    loginUser(loginDetails: any){
        return this.httpclient.post(`${this.URL}/login/${this.token}`,loginDetails,{
            observe : 'body',
            
        })
    }
    createrooms(createdroom:any){
        return this.httpclient.post(`${this.URL2}/room/${this.token}`,createdroom,{
            headers: this.token
        })
    }
    searchingrooms(searchingroomdetails:any){
        return this.httpclient.post(`${this.URL2}/rooms/search/${this.token}`,searchingroomdetails,{
            headers: this.token
        })
    }
    reservingroom(detailsOfRoomBooked:any){
        return this.httpclient.post(`${this.URL2}/reservation/${this.token}`,detailsOfRoomBooked,{
            headers: this.token
        })
    }
    reservations(){
        return this.httpclient.get(`${this.URL2}/reservations/${this.token}`,{
            headers: this.token,
            observe: 'body'
        })
    }
    deleteroom(reservationId:string){
        return this.httpclient.get(`${this.URL2}/reservation/${reservationId}/${this.token}`,{
            headers: this.token,
            observe: 'body'
        })
    }
    logout(){
        return this.httpclient.post(`${this.URL}/logout/${this.token}`,{
            observe: 'body',
            headers: this.token
        })
    }
}