import { EventService } from './events/event.service';
import { ImageService } from './gallery-container/image.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { HomeComponent } from './home/home.component';
import { ImageDetailComponent } from './gallery-container/image-detail/image-detail.component';
import { ImageCategoriesComponent } from './gallery-container/image-categories/image-categories.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';
import { SubmitComponent } from './submit/submit.component';
import { SubmitImageComponent } from './submit/submit-image/submit-image.component';
import { SubmitEventComponent } from './submit/submit-event/submit-event.component';
import { ImageItemComponent } from './gallery-container/image-item/image-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryContainerComponent,
    HomeComponent,
    ImageDetailComponent,
    ImageCategoriesComponent,
    DropdownDirective,
    ProfileComponent,
    EventsComponent,
    EventEditComponent,
    EventDetailComponent,
    EventsListComponent,
    EventItemComponent,
    SubmitComponent,
    SubmitImageComponent,
    SubmitEventComponent,
    ImageItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArgZ2Mj6eeHPpZrVbzgXnCAMFbSmNhLv4'
    }),
    ReactiveFormsModule
  ],
  providers: [ImageService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }