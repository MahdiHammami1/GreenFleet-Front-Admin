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
  selector: 'app-vehicles',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehicleComponent {
    // public method
    vehicles = [
        
      {
        title: 'Registration Date'
      },
      {
        title: 'Make & Model',
      },
      {
        title: 'Transmission',
      },
      {
        title: 'Fuel Type',
      },
      {
        title: 'License Plate',
      },
      {
        title: 'Number of Seats',
      },
      {
        title: 'CO₂ Emissions',
      },
      {
        title: 'Carbon Footprint',
      },
      {
        title: 'Owner Name',
        icon: 'icon-user-check',
      }
    ];
  
    progressBar: ProgressBarItem[] = [
      {
        value: '2022-05-15', // Registration Date
        color: '',
        percentage: 60
      },
      {
        value: 'Toyota Camry', // Make & Model
        color: '',
        percentage: 50
      },
      {
        value: 'Automatic', // Transmission
        color: '',
        percentage: 70
      },
      {
        value: 'Hybrid', // Fuel Type
        color: '',
        percentage: 60
      },
      {
        value: 'ABC-1234', // License Plate
        color: '',
        percentage: 30
      },
      {
        value: '5', // Number of Seats
        color: '',
        percentage: 40
      },
      {
        value: '120 g/km', // CO₂ Emissions
        color: '',
        percentage: 70
      },
      {
        value: '2.1 tons/year', // Carbon Footprint
        color: '',
        percentage: 40
      },
      {
        value: 'Hammami Mahdi', // Owner Name
        color: '',
        percentage: 75
      }
    ];
  
    progressBar2: ProgressBarItem[] = [
      {
        value: '2021-08-22', // Registration Date
        color: 'danger',
        percentage: 65
      },
      {
        value: 'Ford F-150', // Make & Model
        color: 'primary',
        percentage: 80
      },
      {
        value: 'Automatic', // Transmission
        color: 'warning',
        percentage: 80
      },
      {
        value: 'Gasoline', // Fuel Type
        color: 'success',
        percentage: 70
      },
      {
        value: 'XYZ-5678', // License Plate
        color: 'info',
        percentage: 70
      },
      {
        value: '3', // Number of Seats
        color: 'danger',
        percentage: 44
      },
      {
        value: '250 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 68
      },
      {
        value: '4.5 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 90
      },
      {
        value: 'John Smith', // Owner Name
        color: 'primary',
        percentage: 90
      }
    ];
  
    progressBar3: ProgressBarItem[] = [
      {
        value: '2023-01-10', // Registration Date
        color: 'danger',
        percentage: 45
      },
      {
        value: 'Tesla Model 3', // Make & Model
        color: 'primary',
        percentage: 55
      },
      {
        value: 'Automatic', // Transmission
        color: 'warning',
        percentage: 95
      },
      {
        value: 'Electric', // Fuel Type
        color: 'success',
        percentage: 38
      },
      {
        value: 'ELEC-001', // License Plate
        color: 'info',
        percentage: 38
      },
      {
        value: '5', // Number of Seats
        color: 'danger',
        percentage: 38
      },
      {
        value: '0 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 38
      },
      {
        value: '0.8 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 38
      },
      {
        value: 'Alice Johnson', // Owner Name
        color: 'info',
        percentage: 50
      }
    ];
  
    progressBar4: ProgressBarItem[] = [
      {
        value: '2020-11-05', // Registration Date
        color: 'danger',
        percentage: 54
      },
      {
        value: 'Honda Civic', // Make & Model
        color: 'primary',
        percentage: 70
      },
      {
        value: 'Manual', // Transmission
        color: 'warning',
        percentage: 75
      },
      {
        value: 'Gasoline', // Fuel Type
        color: 'success',
        percentage: 60
      },
      {
        value: 'CIV-2020', // License Plate
        color: 'info',
        percentage: 90
      },
      {
        value: '5', // Number of Seats
        color: 'danger',
        percentage: 38
      },
      {
        value: '140 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 40
      },
      {
        value: '2.4 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 80
      },
      {
        value: 'Bob Williams', // Owner Name
        color: 'primary',
        percentage: 85
      }
    ];
  
    progressBar5: ProgressBarItem[] = [
      {
        value: '2022-07-18', // Registration Date
        color: 'danger',
        percentage: 66
      },
      {
        value: 'Volkswagen Golf', // Make & Model
        color: 'primary',
        percentage: 66
      },
      {
        value: 'Automatic', // Transmission
        color: 'warning',
        percentage: 38
      },
      {
        value: 'Diesel', // Fuel Type
        color: 'success',
        percentage: 38
      },
      {
        value: 'VW-GOLF8', // License Plate
        color: 'info',
        percentage: 32
      },
      {
        value: '5', // Number of Seats
        color: 'danger',
        percentage: 70
      },
      {
        value: '110 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 71
      },
      {
        value: '1.9 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 38
      },
      {
        value: 'Emma Davis', // Owner Name
        color: 'warning',
        percentage: 60
      }
    ];
  
    progressBar6: ProgressBarItem[] = [
      {
        value: '2021-04-30', // Registration Date
        color: 'danger',
        percentage: 43
      },
      {
        value: 'BMW X5', // Make & Model
        color: 'primary',
        percentage: 70
      },
      {
        value: 'Automatic', // Transmission
        color: 'warning',
        percentage: 69
      },
      {
        value: 'Hybrid', // Fuel Type
        color: 'success',
        percentage: 90
      },
      {
        value: 'BMW-X5-21', // License Plate
        color: 'info',
        percentage: 80
      },
      {
        value: '7', // Number of Seats
        color: 'danger',
        percentage: 38
      },
      {
        value: '150 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 55
      },
      {
        value: '2.6 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 70
      },
      {
        value: 'Michael Brown', // Owner Name
        color: 'primary',
        percentage: 95
      }
    ];
  
    progressBar7: ProgressBarItem[] = [
      {
        value: '2023-03-12', // Registration Date
        color: 'danger',
        percentage: 61
      },
      {
        value: 'Audi Q7', // Make & Model
        color: 'primary',
        percentage: 45
      },
      {
        value: 'Automatic', // Transmission
        color: 'warning',
        percentage: 70
      },
      {
        value: 'Diesel', // Fuel Type
        color: 'success',
        percentage: 60
      },
      {
        value: 'AUDI-Q7', // License Plate
        color: 'info',
        percentage: 38
      },
      {
        value: '7', // Number of Seats
        color: 'danger',
        percentage: 40
      },
      {
        value: '180 g/km', // CO₂ Emissions
        color: 'warning',
        percentage: 70
      },
      {
        value: '3.1 tons/year', // Carbon Footprint
        color: 'success',
        percentage: 40
      },
      {
        value: 'Sarah Wilson', // Owner Name
        color: 'danger',
        percentage: 30
      }
    ];
  }