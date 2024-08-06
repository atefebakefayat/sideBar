import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive, MatIcon, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})

export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },

    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play_circle',
          label: 'videos',
          route: 'videos',
          subItems: [
            {
              icon: 'movie',
              label: 'Shorts',
              route: 'shorts',
            },
            {
              icon: 'tv',
              label: 'Long Form',
              route: 'long-form',
            },

          ]
        },
        {
          icon: 'playlist_play',
          label: 'playlists',
          route: 'playlists',
        },

        {
          icon: 'post_add',
          label: 'posts',
          route: 'posts',
        },
      ]
    },
    {
      icon: 'chat',
      label: 'address',
      route: 'comments',
    },


  ])

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
