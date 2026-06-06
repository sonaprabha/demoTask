

// dashboard.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SpinnerComponent } from '../../../reusable/spinner/spinner.component';
import { AlertComponent } from '../../../reusable/alert/alert.component';
import { RouterLinkActive, RouterLink } from '@angular/router';

interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

interface RecentOrder {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'delivered' | 'pending' | 'cancelled';
}

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush // ✅ Performance optimised
    ,
    standalone: true,
    imports: [RouterLinkActive, RouterLink, AlertComponent, SpinnerComponent, NgClass]
})


export class DashboardComponent {
  // Sidebar collapsed state
  isSidebarCollapsed = false;

  // Stats cards data
  statsCards: StatCard[] = [
    { title: 'Total Revenue', value: '$54,239', change: 12.5, icon: '💰', color: '#4f46e5' },
    { title: 'Total Users', value: '2,345', change: 8.2, icon: '👥', color: '#10b981' },
    { title: 'New Orders', value: '1,234', change: -3.1, icon: '📦', color: '#f59e0b' },
    { title: 'Conversion Rate', value: '3.6%', change: 1.8, icon: '📈', color: '#ef4444' }
  ];

  // Sidebar menu items
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: '📊', route: '/dashboard', badge: undefined },
    { label: 'Analytics', icon: '📈', route: '/dashboard/analytics' },
    { label: 'Orders', icon: '🛒', route: '/dashboard/orders', badge: 12 },
    { label: 'Products', icon: '📦', route: '/products' },
    { label: 'Customers', icon: '👥', route: '/customers' },
    { label: 'Settings', icon: '⚙️', route: '/settings' }
  ];

  // Recent orders data
  recentOrders: RecentOrder[] = [
    { id: '#ORD-001', customer: 'John Doe', product: 'Wireless Headphones', amount: '$129.99', status: 'delivered' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Smart Watch', amount: '$249.99', status: 'pending' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Gaming Mouse', amount: '$59.99', status: 'delivered' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Mechanical Keyboard', amount: '$189.99', status: 'cancelled' },
    { id: '#ORD-005', customer: 'Alex Brown', product: 'USB-C Hub', amount: '$45.99', status: 'pending' }
  ];

  // User profile
  userName = 'John Doe';
  userAvatar = 'https://via.placeholder.com/32'; // Replace with real avatar

  // Toggle sidebar
  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // TrackBy functions for performance
  trackByStatCard(index: number, card: StatCard): string {
    return card.title;
  }

  trackByMenuItem(index: number, item: MenuItem): string {
    return item.label;
  }

  trackByOrder(index: number, order: RecentOrder): string {
    return order.id;
  }
}