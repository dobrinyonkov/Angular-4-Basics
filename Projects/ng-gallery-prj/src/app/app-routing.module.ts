import { ProfileComponent } from './profile/profile.component';
import { SubmitEventComponent } from './submit/submit-event/submit-event.component';
import { SubmitImageComponent } from './submit/submit-image/submit-image.component';
import { SubmitComponent } from './submit/submit.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';
import { EventsComponent } from './events/events.component';
import { ImageDetailComponent } from './gallery-container/image-detail/image-detail.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTabComponent } from './profile/profile-container/profile-tab/profile-tab.component';
import { ProfileGalleryComponent } from "./profile/profile-container/profile-gallery/profile-gallery.component";
import { ProfileFavouritesComponent } from "./profile/profile-container/profile-favourites/profile-favourites.component";
import { ProfileJournalComponent } from "./profile/profile-container/profile-journal/profile-journal.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'gallery', component: GalleryContainerComponent, children: [
            {
                path: ':id', component: ImageDetailComponent
            }
        ]
    },
    {
        path: 'events', component: EventsComponent, children: [
            {
                path: ':id', component: EventDetailComponent
            }
        ]
    },
    { path: 'submit', component: SubmitComponent },
    { path: 'profile', component: ProfileComponent, children: [
            { path: 'profile', component: ProfileTabComponent },
            { path: 'gallery', component: ProfileGalleryComponent },
            { path: 'favourites', component: ProfileFavouritesComponent },
            { path: 'journal', component: ProfileJournalComponent },
        ]
    },

    { path: 'submit/image', component: SubmitImageComponent },
    { path: 'submit/event', component: SubmitEventComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
