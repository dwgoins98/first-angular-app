import { Component, Input } from '@angular/core';
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  public get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
