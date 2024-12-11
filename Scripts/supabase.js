
const supabaseUrl = 'https://ztxcegujgljpxnqijsbs.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eGNlZ3VqZ2xqcHhucWlqc2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzYxOTAsImV4cCI6MjA0ODIxMjE5MH0.Ri4drXjfZFuuUdlC3_dfeO0EP3A8TWF3sRNBUGNovNg';


const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


async function insertData(userData)

{
  console.log(userData)

  try {

      const { data, error } = await supabase
          .from('users')
          .insert([
              {
                  
                  username: userData.username,
                  email: userData.email,
                  password: userData.password,
                  phone_num: userData.phone_num,

              }
          ]);

      
      if (error) {
          console.error('Error inserting data:', error);
      } else {
          console.log('Data inserted successfully:', data);
      }
  }
  
  catch (err) {
      console.error('Unexpected error:', err);
  }
}



async function fetchLogin(email) {
 

    try {

        const { data, error } = await supabase
            .from('users')
            .select('*')

            .eq('email', email);
        
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            console.log('Data:', data);
            localStorage.setItem('userProfile',JSON.stringify(data[0]) )
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}





 async function updateUsername(username) {


    try{
        const localUser = JSON.parse(localStorage.getItem('userProfile'))

        console.log(localUser.email,username)
        
        const {data,error} = await supabase
        .from('users')
        .update({
            username
        })
        .eq('email',localUser.email )
    
    
        if(error) console.log(error)
    }
   

    catch{
        console.log('something wrong')
    }
}



 async function insertSeats(seatNumbers) {

    const userid = JSON.parse(localStorage.getItem('userProfile')).userid

    console.log(userid,seatNumbers)

    for (const seatno of seatNumbers) 
        
        {
      const { data, error } = await supabase
        .from('carts')
        .insert({ userid: userid, seatno: seatno });
  
      if (error) {
        console.log(error)
      }
       else {
        console.log('data sent')
      }
    }
  }


  async function deleteSeat(seatno) {

    const userid = JSON.parse(localStorage.getItem('userProfile')).userid
    
    console.log(userid,seatno)

    const { data, error } = await supabase
      .from('carts')
      .delete()
      .eq('userid', userid) // Match the user_id
      .eq('seatno', seatno); // Match the seat number
  
    if (error) {
      console.error('Error deleting seat:', error);
    } else {
      console.log('Deleted seat successfully:', data);
    }
  }

  window.insertSeats = insertSeats;
  window.deleteSeat = deleteSeat
  

