async function getNote(noteId: string) {
    const res = await fetch(`https://api.com/note/${noteId}`,
    {
        next: {revalidate: 10 },
    }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return(
        <div>
            <h1>Notes {note.id}</h1>
            <h3>{note.title}</h3>
            <h5>{note.content}</h5>
            <p>{note.created}</p>
        </div>
    )
}