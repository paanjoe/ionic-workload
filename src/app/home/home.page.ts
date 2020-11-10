import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

	ionite: string;

	displayedColumns: string[] = ['first_name', 'last_name', 'twitter'];

	dataSource = new MatTableDataSource<any>([
		{
			first_name: 'Max',
			last_name: 'Lynch',
			twitter: 'maxlynch'
		},
		{
			first_name: 'Matt',
			last_name: 'Netkow',
			twitter: 'dotNetkow'
		},
		{
			first_name: 'Ben',
			last_name: 'Sperry',
			twitter: 'benjsperry'
		}
	]);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	userForm: FormGroup;

	constructor(private fb: FormBuilder, private route: Router) {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.userForm = this.fb.group({
			name: ['', Validators.required],
			address: ['', Validators.required]
		});
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
