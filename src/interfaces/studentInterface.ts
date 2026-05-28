interface StudentInterface {
  name: string;
  age: number;
  course: string;
  email: string;
  isActive:boolean;
  skills:[string];
  address:{
    city: string,
    state: string,
    pincode: number
  }
}

export default StudentInterface;