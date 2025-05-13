// Replace with your Supabase details
const SUPABASE_URL = "https://your-project-id.supabase.co";
const SUPABASE_KEY = "your-anon-key";

const headers = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

async function searchNotes(query) {
  const res = await fetch(\`\${SUPABASE_URL}/rest/v1/notes?or=(title.ilike.*\${query}*,category.ilike.*\${query}*,content.ilike.*\${query}*)&select=*\`, {
    headers
  });
  return await res.json();
}

async function addNote(note) {
  const res = await fetch(\`\${SUPABASE_URL}/rest/v1/notes\`, {
    method: "POST",
    headers,
    body: JSON.stringify(note)
  });
  return res.ok;
}
