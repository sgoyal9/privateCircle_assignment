import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { SavedListApisService } from '../../services/saved-list-apis.service';
import { ListItemViewModel } from '../../models/list-item-view.model';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDashboardComponent implements OnInit {
  //Drawer reference to control it programatically
  @ViewChild('detailsDrawer') detailsDrawer: MatSidenav;

  //Observable to send data to the mat list asynchronously
  listItems$ = new Observable<ListItemViewModel[]>(null);

  //Control the highlighted actions and details in the drawer
  focusedItem: ListItemViewModel;
  selectedItem: ListItemViewModel;

  //FormControl to get the search term from the header
  searchKeyword = new FormControl('');

  constructor(
    private apiService: SavedListApisService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.listenSearchChanges();
  }

  private fetchData() {
    this.listItems$ = this.apiService.getDummyData();
  }

  //Listen to the value changes and if needed search
  private listenSearchChanges() {
    this.searchKeyword.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((term) => this.searchList(term));
  }

  //Open the drawer based on selectedItem
  openDetails(item: ListItemViewModel) {
    if (item.id == this.selectedItem?.id) {
      this.detailsDrawer.toggle();
      this.focusedItem = this.selectedItem = null;
    } else {
      this.focusedItem = this.selectedItem = item;
      this.detailsDrawer.open();
    }
  }

  //Change focus if no item is selected
  changeFocus(item: ListItemViewModel) {
    if (this.detailsDrawer.opened) return;
    else this.focusedItem = item;
  }

  //Filter out unwanted results
  searchList(term: string) {
    this.detailsDrawer.close();
    this.listItems$ = this.apiService.getDummyData().pipe(
      map((data) => {
        return data.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );
      })
    );
    //Run change detection again
    this.changeDetector.detectChanges();
  }
}
