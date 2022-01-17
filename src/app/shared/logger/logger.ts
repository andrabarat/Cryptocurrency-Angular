import * as moment from 'moment';

export class Logger {
  private name!: string;
  private startTime!: Date;
  private endTime!: Date;

  start(name: string = '') {
    this.name = name;
    this.startTime = new Date();
  }

  stop() {
    this.endTime = new Date();
    this.logDetails();
  }

  private logDetails() {
    console.log('----- Started performance logger for ' + this.name + ' -----');
    console.log(
      '----- Started at: ' +
        moment(this.startTime).format('DD-MM-yyyy HH:mm:ss:SSS') +
        ' -----'
    );
    console.log(
      '----- Ended at: ' +
        moment(this.endTime).format('DD-MM-yyyy HH:mm:ss:SSS') +
        ' -----'
    );
    const time = this.endTime.getTime() - this.startTime.getTime();
    console.log('----- Runned in: ' + time + ' miliseconds -----');
    console.log('----- Ended performance logger for ' + this.name + ' -----');
  }
}
