import { useParams, useNavigate, Link } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { Button } from "../../Components/shared/FormComponents";

export default function ChapterReaderScreen() {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();
  const ebook = getEbookById(id);
  
  if (!ebook) {
    return <div className="chapters-container"><p>Ebook not found</p></div>;
  }

  const chapterIndex = parseInt(chapterId) - 1;
  const chapter = ebook.chapters?.[chapterIndex];
  
  if (!chapter) {
    return <div className="chapters-container"><p>Chapter not found</p></div>;
  }

  const prevChapter = chapterIndex > 0 ? ebook.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < ebook.chapters.length - 1 ? ebook.chapters[chapterIndex + 1] : null;

  return (
    <div className="chapter-reader">
      <div className="reader-header">
        <div className="reader-header-info">
          <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-sm)' }}>{ebook.title}</p>
          <h2>{chapter.title}</h2>
          <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)' }}>
            Chapter {chapterId} of {ebook.chapters.length}
          </p>
        </div>
        <div className="reader-header-actions">
          <Link to={`/ebook/${id}`} style={{ textDecoration: 'none' }}>
            <Button>← Back</Button>
          </Link>
        </div>
      </div>

      <div className="chapter-content">
        {chapter.content}
      </div>

      <div className="chapter-reader-nav">
        {prevChapter ? (
          <Link to={`/ebook/${id}/chapter/${chapterIndex}`} style={{ textDecoration: 'none' }}>
            <Button>← Previous Chapter</Button>
          </Link>
        ) : (
          <div />
        )}
        
        {nextChapter ? (
          <Link to={`/ebook/${id}/chapter/${chapterIndex + 2}`} style={{ textDecoration: 'none' }}>
            <Button>Next Chapter →</Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
