import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  dataSource;
  displayedColumns: string[] = [
    'index',
    '_id',
    'name',
    'picture',
    'isActive',
    'balance',
    'age',
    'eyeColor',
    'gender',
    'company',
    'email',
    'phone',
    'address',
    'about',
    'registered',
    'latitude',
    'longitude',
    'greeting',
    'favoriteFruit',
    'friends',
    'tags',
  ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    console.group('onInit')
    this.usersService.fetchUsers()
      .subscribe(data => {
        this.users = data as User[];
        this.dataSource = new MatTableDataSource(this.users);
        setTimeout(() => this.dataSource.sort = this.sort);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
