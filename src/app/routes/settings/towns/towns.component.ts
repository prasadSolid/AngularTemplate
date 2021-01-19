import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
interface Town {
  id?: number;
  towncode: string;
  townurl: string;
  active: boolean;
}

const TOWNS: Town[] = [
  {
    towncode: "Toronto",
    townurl: "https://www.toronto.ca",
    active: true,
  },
  {
    towncode: "Montreal",
    townurl: "https://www.montreal.ca",
    active: true,
  },
  {
    towncode: "Calgary",
    townurl: "https://www.calgary.ca",
    active: false,
  },
  {
    towncode: "Ottawa",
    townurl: "https://www.ottawa.ca",
    active: true,
  },
];
@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.scss']
})
export class TownsComponent implements OnInit {
  page = 1;
  pageSize = 8;
  closeResult = "";
  collectionSize = TOWNS.length;
  towns: Town[];
  constructor(private modalService: NgbModal) { 
    this.refreshWorkflows();
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  refreshWorkflows() {
    this.towns = TOWNS.map((town, i) => ({
      id: i + 1,
      ...town,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  ngOnInit() {
  }

}
