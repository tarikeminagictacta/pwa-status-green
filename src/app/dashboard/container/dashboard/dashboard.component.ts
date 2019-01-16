import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: string;
  skip = 0;
  take = 20;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks(): void {
    const params = {
      skip: this.skip,
      take: this.take
    };
    this.loading = 'loading...';
    this.taskService.getTasks(params)
      .pipe(map((x) => {
        this.loading = null;
        this.skip += x.length;
        return [...this.tasks, ...x];
      }))
      .subscribe(data => this.tasks = data);
  }

  onIntersection(event) {
    if (event.visible && this.loading !== 'loading...') {
      this.fetchTasks();
    }
  }
}
