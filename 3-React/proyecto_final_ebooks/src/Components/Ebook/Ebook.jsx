import { useContext } from "react";
import { Link } from "react-router";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button } from "../shared/FormComponents";

export default function Ebook({ ebook }) {
    const { deleteEbook } = useContext(EbookContext);
    const isUserBook = isUserAddedEbook(ebook.id);

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            deleteEbook(ebook.id);
        }
    };

    return (
        <div className="ebook-card">
            <div className="ebook-cover-wrapper">
                {ebook.cover_image ? (
                    <img src={ebook.cover_image} alt={ebook.title} />
                ) : (
                    <div className="ebook-cover-placeholder">
                        {ebook.title.substring(0, 1)}
                    </div>
                )}
            </div>
            
            <div className="ebook-info">
                <h3 className="ebook-title">{ebook.title}</h3>
                <p className="ebook-author">by {ebook.author}</p>
                
                {ebook.description && (
                    <p className="ebook-description">{ebook.description}</p>
                )}
                
                <div className="ebook-meta">
                    <div className="ebook-meta-item">
                        <span className="ebook-meta-icon">📖</span>
                        <span>{ebook.chapters?.length || 0} chapters</span>
                    </div>
                </div>
                
                <div className="ebook-actions">
                    <Link to={`/ebook/${ebook.id}`} style={{ flex: 1, textDecoration: "none" }}>
                        <Button className="full-width">Read</Button>
                    </Link>
                    {isUserBook && (
                        <Button 
                            onClick={handleDelete}
                            variant="danger"
                            className="btn-small"
                        >
                            Delete
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}