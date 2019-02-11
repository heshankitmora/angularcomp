import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assgneeNameFull' })
export class SubtasksAssigneepipe implements PipeTransform {

  constructor() {
  }

  transform(assigneeId: string, allUsers: any) {
    if (allUsers) {
      return allUsers.filter((item) => (item.id == assigneeId))[0].fullName;
    }
  }
}
