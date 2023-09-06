import Link from 'next/link';
async function getNotes() {
    const res = await fetch('https://mydbwebsite.com/api/notes',
    {cache: 'no-store'}
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}/>
                })}
            </div>
        </div>
    )
}

function Note({ note }: any): any {
    const { id, title, content, created } = note || {};

    return(
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}