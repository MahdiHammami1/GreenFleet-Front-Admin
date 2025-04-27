// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface ProgressBarItem {
  value: string;
  color: string;
  percentage: number;
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
 
export class RankingComponent {
    // public method
    product_sale = [
      {
        title: 'Username'
      },
      {
        title: 'Ranking Position',
      },
      {
        title: 'Points Earned',
      },
      {
        title: 'Tasks Completed',
      },
      {
        title: 'Leaderboard Tier',
        icon: 'icon-trophy',
      }
    ];
  
    progressBar: ProgressBarItem[] = [
      {
        value: 'AlexJohnson', // Username
        color: '',
        percentage: 95
      },
      {
        value: '1', // Ranking Position
        color: '',
        percentage: 95
      },
      {
        value: '9850', // Points Earned
        color: '',
        percentage: 95
      },
      {
        value: '124', // Tasks Completed
        color: '',
        percentage: 95
      },
      {
        value: 'Diamond', // Leaderboard Tier
        color: 'primary',
        percentage: 95
      }
    ];
  
    progressBar2: ProgressBarItem[] = [
      {
        value: 'MariaGarcia', // Username
        color: 'primary',
        percentage: 85
      },
      {
        value: '2', // Ranking Position
        color: 'primary',
        percentage: 85
      },
      {
        value: '8720', // Points Earned
        color: 'primary',
        percentage: 85
      },
      {
        value: '112', // Tasks Completed
        color: 'primary',
        percentage: 85
      },
      {
        value: 'Diamond', // Leaderboard Tier
        color: 'primary',
        percentage: 85
      }
    ];
  
    progressBar3: ProgressBarItem[] = [
      {
        value: 'JamesWilson', // Username
        color: 'success',
        percentage: 75
      },
      {
        value: '3', // Ranking Position
        color: 'success',
        percentage: 75
      },
      {
        value: '7650', // Points Earned
        color: 'success',
        percentage: 75
      },
      {
        value: '98', // Tasks Completed
        color: 'success',
        percentage: 75
      },
      {
        value: 'Platinum', // Leaderboard Tier
        color: 'success',
        percentage: 75
      }
    ];
  
    progressBar4: ProgressBarItem[] = [
      {
        value: 'SarahLee', // Username
        color: 'success',
        percentage: 65
      },
      {
        value: '4', // Ranking Position
        color: 'success',
        percentage: 65
      },
      {
        value: '6540', // Points Earned
        color: 'success',
        percentage: 65
      },
      {
        value: '87', // Tasks Completed
        color: 'success',
        percentage: 65
      },
      {
        value: 'Platinum', // Leaderboard Tier
        color: 'success',
        percentage: 65
      }
    ];
  
    progressBar5: ProgressBarItem[] = [
      {
        value: 'DavidKim', // Username
        color: 'warning',
        percentage: 55
      },
      {
        value: '5', // Ranking Position
        color: 'warning',
        percentage: 55
      },
      {
        value: '5430', // Points Earned
        color: 'warning',
        percentage: 55
      },
      {
        value: '76', // Tasks Completed
        color: 'warning',
        percentage: 55
      },
      {
        value: 'Gold', // Leaderboard Tier
        color: 'warning',
        percentage: 55
      }
    ];
  
    progressBar6: ProgressBarItem[] = [
      {
        value: 'EmmaDavis', // Username
        color: 'warning',
        percentage: 45
      },
      {
        value: '6', // Ranking Position
        color: 'warning',
        percentage: 45
      },
      {
        value: '4320', // Points Earned
        color: 'warning',
        percentage: 45
      },
      {
        value: '65', // Tasks Completed
        color: 'warning',
        percentage: 45
      },
      {
        value: 'Gold', // Leaderboard Tier
        color: 'warning',
        percentage: 45
      }
    ];
  
    progressBar7: ProgressBarItem[] = [
      {
        value: 'MichaelBrown', // Username
        color: 'info',
        percentage: 35
      },
      {
        value: '7', // Ranking Position
        color: 'info',
        percentage: 35
      },
      {
        value: '3210', // Points Earned
        color: 'info',
        percentage: 35
      },
      {
        value: '54', // Tasks Completed
        color: 'info',
        percentage: 35
      },
      {
        value: 'Silver', // Leaderboard Tier
        color: 'info',
        percentage: 35
      }
    ];
  }