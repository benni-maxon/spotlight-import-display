const SUPABASE_URL = 'https://eqvhbypqmflvzwpuxohs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdmhieXBxbWZsdnp3cHV4b2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzAsImV4cCI6MTk4MzY4NDAzMH0.69mAZ8sZWHEPxgHYg8wvmHJc4GleoS6fqfGdJQOWGno';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getMovies() {
    const response = await client.from('movies').select('*').order('id');
    return response.data;
}
export async function getApps() {
    const response = await client.from('apps').select('*').order('id');
    return response.data;
}
export async function getPeople() {
    const response = await client.from('people').select('*').order('id');
    return response.data;
}
export async function getPlants() {
    const response = await client.from('plants').select('*').order('id');
    return response.data;
}
