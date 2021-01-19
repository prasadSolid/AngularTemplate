import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
// import Swal from "sweetalert2";



interface WorkflowUser {
  id?: number;
  user: string;
  town: string;
  active: boolean;
}

const WORKFLOWUSERS: WorkflowUser[] = [
  {
    user: "treutel.sincere@hotmail.com",
    town: "Toronto",
    active: true,
  },
  {
    user: "yconsidine@hotmail.com",
    town: "Montreal",
    active: true,
  },
  {
    user: "garret.hintz@gmail.com",
    town: "Calgary",
    active: false,
  },
  {
    user: "ledner.monica@hotmail.com",
    town: "Ottawa",
    active: true,
  },
];
@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent implements OnInit {
  // Swal = require("sweetalert2");
  page = 1;
  pageSize = 8;
  closeResult = "";
  collectionSize = WORKFLOWUSERS.length;
  workflowusers: WorkflowUser[];
  constructor(private modalService: NgbModal) {
    this.refreshWorkflows();
  }
  refreshWorkflows() {
    this.workflowusers = WORKFLOWUSERS.map((workflowuser, i) => ({
      id: i + 1,
      ...workflowuser,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  towns = [
    { value: "1", label: "Toronto" },
    { value: "2", label: "Montreal" },
    { value: "3", label: "Calgary" },
    { value: "3", label: "Ottawa" }
  ];
  changeStatus() {
    // Swal.fire({
    //   title: "Do you want to change this?",
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: `Yes`,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Saved!", "", "success");
    //   } else if (result.isDenied) {
    //     Swal.fire("Changes are not saved", "", "info");
    //   }
    // });
    console.log("Do you want to change this?");
  }
  ngOnInit() {}
}
