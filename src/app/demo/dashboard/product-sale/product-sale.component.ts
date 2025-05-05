// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import ButtonComponent from '../../ui-element/button/button.component';

interface ProgressBarItem {
  value: string;
  color: string;
  percentage: number;
}

@Component({
  selector: 'app-product-sale',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent {
  // public method
  product_sale = [
    {
      title: 'Ban User',
    },
    {
      title: 'Username',
    },
    {
      title: 'Email Address',
    },
    {
      title: 'Phone Number',
    },
    {
      title: 'Status',
    },
    {
      title: 'Last Login',
    },
    {
      title: 'Location',
    },
    {
      title: 'Completed Rides',
    },
    {
      title: 'Profile Completion',
      icon: 'icon-user-check',
    },
    
    
  ];

  progressBar: ProgressBarItem[] = [
   
    {
      value: 'Hammami Mahdi', // Username
      color: '',
      percentage: 50
    },
    {
      value: 'hammami@example.com', // Email Address
      color: '',
      percentage: 70
    },
    {
      value: '+1 555-123-4567', // Phone Number
      color: '',
      percentage: 60
    },
    {
      value: 'Active', // Status
      color: '',
      percentage: 30
    },
    {
      value: '2 hours ago', // Last Login
      color: '',
      percentage: 40
    },
    {
      value: 'New York, USA', // Location
      color: '',
      percentage: 70
    },
    {
      value: '45', // Completed Rides
      color: '',
      percentage: 40
    },
    {
      value: '75%', // Profile Completion
      color: '',
      percentage: 75
    }
  ];

  progressBar2: ProgressBarItem[] = [
   
    {
      value: 'john_doe', // Username
      color: 'primary',
      percentage: 80
    },
    {
      value: 'john@example.com', // Email Address
      color: 'warning',
      percentage: 80
    },
    {
      value: '+1 555-987-6543', // Phone Number
      color: 'success',
      percentage: 70
    },
    {
      value: 'Inactive', // Status
      color: 'info',
      percentage: 70
    },
    {
      value: '1 day ago', // Last Login
      color: 'danger',
      percentage: 44
    },
    {
      value: 'London, UK', // Location
      color: 'warning',
      percentage: 68
    },
    {
      value: '78', // Completed Rides
      color: 'success',
      percentage: 90
    },
    {
      value: '90%', // Profile Completion
      color: 'primary',
      percentage: 90
    },
    {
      value: 'Ban User', // Ban User
      color: 'danger',
      percentage: 0
    }

  ];

  progressBar3: ProgressBarItem[] = [
   
    {
      value: 'alice_smith', // Username
      color: 'primary',
      percentage: 55
    },
    {
      value: 'alice@example.com', // Email Address
      color: 'warning',
      percentage: 95
    },
    {
      value: '+44 7700 900123', // Phone Number
      color: 'success',
      percentage: 38
    },
    {
      value: 'Pending', // Status
      color: 'info',
      percentage: 38
    },
    {
      value: '3 days ago', // Last Login
      color: 'danger',
      percentage: 38
    },
    {
      value: 'Paris, France', // Location
      color: 'warning',
      percentage: 38
    },
    {
      value: '62', // Completed Rides
      color: 'success',
      percentage: 38
    },
    {
      value: '50%', // Profile Completion
      color: 'info',
      percentage: 50
    }
  ];

  progressBar4: ProgressBarItem[] = [
    
    {
      value: 'bob_johnson', // Username
      color: 'primary',
      percentage: 70
    },
    {
      value: 'bob@example.com', // Email Address
      color: 'warning',
      percentage: 75
    },
    {
      value: '+1 555-456-7890', // Phone Number
      color: 'success',
      percentage: 60
    },
    {
      value: 'Active', // Status
      color: 'info',
      percentage: 90
    },
    {
      value: '5 hours ago', // Last Login
      color: 'danger',
      percentage: 38
    },
    {
      value: 'Tokyo, Japan', // Location
      color: 'warning',
      percentage: 40
    },
    {
      value: '42', // Completed Rides
      color: 'success',
      percentage: 80
    },
    {
      value: '85%', // Profile Completion
      color: 'primary',
      percentage: 85
    }
  ];

  progressBar5: ProgressBarItem[] = [
   
    {
      value: 'emma_watson', // Username
      color: 'primary',
      percentage: 66
    },
    {
      value: 'emma@example.com', // Email Address
      color: 'warning',
      percentage: 38
    },
    {
      value: '+44 7700 123456', // Phone Number
      color: 'success',
      percentage: 38
    },
    {
      value: 'Suspended', // Status
      color: 'info',
      percentage: 32
    },
    {
      value: '1 week ago', // Last Login
      color: 'danger',
      percentage: 70
    },
    {
      value: 'Sydney, Australia', // Location
      color: 'warning',
      percentage: 71
    },
    {
      value: '76', // Completed Rides
      color: 'success',
      percentage: 38
    },
    {
      value: '60%', // Profile Completion
      color: 'warning',
      percentage: 60
    },
    
  ];

  progressBar6: ProgressBarItem[] = [
  
    {
      value: 'michael_brown', // Username
      color: 'primary',
      percentage: 70
    },
    {
      value: 'michael@example.com', // Email Address
      color: 'warning',
      percentage: 69
    },
    {
      value: '+1 555-789-0123', // Phone Number
      color: 'success',
      percentage: 90
    },
    {
      value: 'Active', // Status
      color: 'info',
      percentage: 80
    },
    {
      value: '2 days ago', // Last Login
      color: 'danger',
      percentage: 38
    },
    {
      value: 'Berlin, Germany', // Location
      color: 'warning',
      percentage: 55
    },
    {
      value: '33', // Completed Rides
      color: 'success',
      percentage: 70
    },
    {
      value: '95%', // Profile Completion
      color: 'primary',
      percentage: 95
    }
  ];

  progressBar7: ProgressBarItem[] = [
   
    {
      value: 'sarah_connor', // Username
      color: 'primary',
      percentage: 45
    },
    {
      value: 'sarah@example.com', // Email Address
      color: 'warning',
      percentage: 70
    },
    {
      value: '+1 555-321-6547', // Phone Number
      color: 'success',
      percentage: 60
    },
    {
      value: 'Pending Verification', // Status
      color: 'info',
      percentage: 38
    },
    {
      value: 'Just now', // Last Login
      color: 'danger',
      percentage: 40
    },
    {
      value: 'Toronto, Canada', // Location
      color: 'warning',
      percentage: 70
    },
    {
      value: '76', // Completed Rides
      color: 'success',
      percentage: 40
    },
    {
      value: '30%', // Profile Completion
      color: 'danger',
      percentage: 30
    }
  ];
}
