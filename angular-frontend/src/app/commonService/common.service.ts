import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {

    header: Headers = new Headers({'Content-Type': 'application/json'});
    url_prefix = 'http://localhost:8000/api/';
    options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions();
        this.options.headers = this.header;
    }

    get(url, data) {
    }

    post(url, data) {
        return this.http.post(this.url_prefix + url, data, this.options)
            .toPromise()
            .then(this.returnData)
            .catch(this.hendleError);
    }

    private hendleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private returnData(resp) {
        const body = resp.json();
        return body;
    }

}
