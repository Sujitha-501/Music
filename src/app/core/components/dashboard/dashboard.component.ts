import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkWindowSize();
  }

  ngOnInit(): void {
    this.checkWindowSize();
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    if (!this.isSidenavOpen) {
      // Do something when the sidenav is closed
      // For example, remove blur effect from mat-sidenav-content
    }
  }

  onSidenavClose(): void {
    // Do something when the sidenav is closed
    // For example, remove blur effect from mat-sidenav-content
  }

  checkWindowSize(): void {
    // Adjust the breakpoint as needed for your design
    const isMobile = window.innerWidth < 966; // Example breakpoint for mobile devices

    if (isMobile) {
      this.sidenav.close();
      this.isSidenavOpen = false;
    } else {
      this.sidenav.open();
      this.isSidenavOpen = true;
    }
  }

}
