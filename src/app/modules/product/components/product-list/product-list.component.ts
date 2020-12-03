import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IProduct } from "src/app/models/product.interface";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "product-list.component.html",
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "productName",
    "description",
    "releaseDate",
    "rating",
    "price",
  ];
  dataSource: MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private isNullOrEmpty: IfNullOrEmpty,
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log("Inside On ngOnInit of ProductListComponent");
    this.loadData();
  }

  showImages: boolean = true;
  pageTitle: string = "Hello World";
  searchText: string = "";
  products: IProduct[];
  actualBikes: IProduct[];

  getTitle(): string {
    return "Hello from Method";
  }
  ngAfterViewInit() {}
  // showImage(getImage('path', 'format), 'thumbnail');

  toggleImages(): void {
    this.showImages = !this.showImages;
    if (this.showImages) {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.upperCasePipe.transform(this.pageTitle),
        "N/A"
      );
    } else {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.lowerCasePipe.transform(this.pageTitle),
        "N/A"
      );
    }
  }

  mouseEnterEvent() {}

  filterBikes() {
    console.log("Event Triggered !");

    if (this.searchText) {
      this.products = this.actualBikes.filter((x) =>
        x.productName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.products = this.actualBikes;
    }
  }

  onSuccessfullyDeleted(productName: string) {
    this.loadData();
  }
  onProductStatusChanged(product: IProduct) {
    this.loadData();
  }
  private loadData() {
    this.productService.getProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
        this.actualBikes = [...this.products];
        this.dataSource = new MatTableDataSource<IProduct>(data);
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error("An error occured", error);
      }
    );
  }
}
