

// environment variable use to hide open key

async function fetchData() {
    const supabaseUrl = 'https://ztxcegujgljpxnqijsbs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eGNlZ3VqZ2xqcHhucWlqc2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzYxOTAsImV4cCI6MjA0ODIxMjE5MH0.Ri4drXjfZFuuUdlC3_dfeO0EP3A8TWF3sRNBUGNovNg';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('userid',20001);
    
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data:', data);
    }
}


fetchData();