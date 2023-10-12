import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (
    <div className="app-main dark-mode">
      <div className="app-main-note-edit dark-mode">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(e) => onEditField("body", e.target.value)}
          value={activeNote.body}
        />
      </div>
      <div className="app-main-note-preview dark-mode">
        <h1 className="preview-title dark-mode">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview dark-mode">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Main;
