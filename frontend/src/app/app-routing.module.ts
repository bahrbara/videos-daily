import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VideoComponent } from './main/video/videos/videos.component';


const appRoutes: Routes = [
    { path: '', component: VideoComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                onSameUrlNavigation: 'reload',
                useHash: true
            }
        )],
    exports: [RouterModule],
    providers: [Location]
})
export class AppRoutingModule { }