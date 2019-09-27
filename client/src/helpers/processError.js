export const processError = (errorCode) => {
  let error = '';
 
  switch (errorCode) {
      case 401:
        error = 'Incorrect password.';
        break;
      case 402:
        error = 'User already exists. Try with another name.';
        break;
      case 404:
        error = 'Sorry. We cannot find any user with this email.';
        break;
      case 421:
        error = 'Trip title is required.';
        break;   
      case 422:
        error = 'Trip destination is required.';
        break;  
      case 423:
        error = 'Trip description is required.';
        break;   
      case 424:
        error = 'Trip start date is required.';
        break;  
      case 425:
        error = 'Trip end date is required.';
        break;
      default:
        error = 'Ups. There was somthing wrong. Try it again please.';
        break;
  }
  return error;  
}