document.getElementById("searchInput").addEventListener("input", async (e) => {
  const query = e.target.value;
  const results = document.getElementById("results");
  results.innerHTML = "";
  if (query.length < 2) return;

  const notes = await searchNotes(query);
  if (notes.length === 0) {
    results.innerHTML = "<li>No results found</li>";
    return;
  }

  notes.forEach(note => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${note.title}</strong> [${note.category}]<br>${note.content}`;
    results.appendChild(li);
  });
});
