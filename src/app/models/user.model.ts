export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
  }

  export interface UserDash {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    gender: Gender;
    dateOfBirth: Date;
    rating: number;
    gamificationPoints: number;
  }

  export class UserDashModel implements UserDash {
    constructor(
      public userId: number,
      public firstname: string,
      public lastname: string,
      public email: string,
      public phoneNumber: string,
      public gender: Gender,
      public dateOfBirth: Date,
      public rating: number,
      public gamificationPoints: number
    ) {}

    get fullName(): string {
        return `${this.firstname} ${this.lastname}`;
      }
    
      // Helper method to calculate age
      get age(): number {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        return age;
      }
    }