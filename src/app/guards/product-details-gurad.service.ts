import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductDetailsGuradService implements CanActivate {
  constructor(private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log("Inside Auth Guard", route);
    console.log("Inside Auth Guard", state);

    let id = +route.paramMap.get("id");
    if (!isNaN(id) && id > 0) return true;
    else this.route.navigate(["/notfound"]);
  }
}
