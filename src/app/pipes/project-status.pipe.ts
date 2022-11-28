import { Pipe, PipeTransform } from '@angular/core';
import { ProjectStatus } from '../enums/project-status';

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {

  enum = ProjectStatus;

  transform(value: string): any {
    if(!value) return '';

    return this.enum[value];
  }

}
