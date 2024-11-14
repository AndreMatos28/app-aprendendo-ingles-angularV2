import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit{
  @Input() public progresso: number = 50;

  constructor() {}

  ngOnInit(): void {}

}
