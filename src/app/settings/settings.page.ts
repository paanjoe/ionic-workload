import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToNotification() {
		this.route.navigate(['/notifications']);
	}
	goToReporting() {
		this.route.navigate(['/reporting']);
	}
	goToProject() {
		this.route.navigate(['/project']);
	}
	goToWorkload() {
		this.route.navigate(['/workload']);
	}
	goToProjectData() {
		this.route.navigate(['/project-data']);
	}
	goToWorkloadData() {
		this.route.navigate(['/workload-data']);
	}
	goToTeam() {
		this.route.navigate(['/team']);
	}
	goToSettings() {
		this.route.navigate(['/settings']);
	}
	goToHome() {
		this.route.navigate(['/home']);
	}
}
