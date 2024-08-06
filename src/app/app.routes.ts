import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { VideosComponent } from './pages/content/videos/videos.component';
import { PostsComponent } from './pages/content/posts/posts.component';
import { PlaylistsComponent } from './pages/content/playlists/playlists.component';
import { ShortsComponent } from './pages/content/videos/shorts/shorts.component';
import { LongFormComponent } from './pages/content/videos/long-form/long-form.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },

    {
        path: 'content',
        component: ContentComponent,
        children: [
            {
                path: 'videos',
                component: VideosComponent,
                children: [
                    {
                        path: 'shorts',
                        component: ShortsComponent,
                    },
                    {
                        path: 'long-form',
                        component: LongFormComponent,
                    },
                ]
            },
            {
                path: 'playlists',
                component: PlaylistsComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            }
        ]
    },

    {
        path: 'comments',
        component: CommentsComponent,
    }
];
