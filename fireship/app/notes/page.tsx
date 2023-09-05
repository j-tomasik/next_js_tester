async function getNotes() {
    const res = await fetch('https://mydbwebsite.com/api/notes');
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();
    
    return(
        <div>

        </div>
    )
}