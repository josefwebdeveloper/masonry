import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, AfterViewInit {
  @HostListener('document:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onDocumentRemoteEvent(ev: any) {
    this.resizeAllGridItems();
  }
  constructor() {
  }

  ngAfterViewInit() {
    this.resizeAllGridItems();
    // window.addEventListener('resize', this.resizeAllGridItems.bind(this));

  }

  ngOnInit(): void {
  }

  resizeGridItem = (item: any) => {
    const grid = document.getElementsByClassName('grid')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  };

  resizeAllGridItems(): void {
    const allItems = document.getElementsByClassName('item');
    for (let x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  }

  // resizeInstance(instance){
  //    const item = instance.elements[0];
  //    this.resizeGridItem(item);
  //  }

// window.onload = resizeAllGridItems();

}
