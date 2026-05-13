const SUPABASE_URL = "https://umgutweoakzvsinzrlpr.supabase.co";
const SUPAEBASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZ3V0d2VvYWt6dnNpbnpybHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjEwMTAsImV4cCI6MjA5MjMzNzAxMH0.lwYaE1ZJXhPZTYVZQQgcls5y8ZPYUxW0FbxGSURpEfM";
const db = supabase.createClient(SUPABASE_URL, SUPAEBASE_KEY);

async function loadEntries() {


    const {data, error} = await db
        .from('guestbook')
        .select("*")
        .order("created_at", {ascending: false})


    if (error) {
        console.error(error);
        return;
    }

    let html = "";
    data.forEach(entry => {
        html += `<div class ="entry">
            <strong>${entry.name}</strong>
            <p>${entry.message}</p>
            <div class="time">${new Date(entry.created_at).toLocaleString()}</div>
        </div>
        <button class="del-btn" onclick="deleteEntry(${entry.id})">X</button>`
    });
    document.querySelector('#entries').innerHTML = html;

    async function deleteEntry(id){
        const {error} = await db
            .from('guestbook')
            .delete()
            .eq('id', id);

        if(error) {
            alert("Errir: " + error.message);
            return;
        }
        loadEntries();

    }


}

loadEntries();
