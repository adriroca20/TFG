import { DomSanitizer } from "@angular/platform-browser";

export class Utils{
    constructor( private sanitizer:DomSanitizer){
    }
    public sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}

