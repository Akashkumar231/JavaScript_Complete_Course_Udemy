const day = 'monday';

switch(day){

   case 'monday' :
    console.log('Planning for a weekend');
    console.log('Planning for a house Party');
    break;
   case 'tuesday' :
     console.log('Please provide me a valid time');
     break;
   
   case 'wednesday' :
   case 'thursday'  :
      console.log('How are you');
       break;
    case 'friday' :
      console.log(`It's black friday sale `); 
      console.log(`Ah. it's suits on you`);
      break;
    
    case 'saturday' :
        console.log(`Alway's try to be efficient`);
        break;
    
    case 'sunday' :
        console.log(`It's sunday let's play cricket`);
        break;

    default:
        console.log(`Not a valid day`);


}