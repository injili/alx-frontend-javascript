interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience: number;
  location: string;
  contract?: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}