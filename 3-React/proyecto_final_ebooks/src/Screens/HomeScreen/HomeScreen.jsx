import SearchEbookForm from "../../Components/SearchEbookForm/SearchEbookForm";
import EbookList from "../../Components/EbookList/EbookList";
import { Link } from "react-router";
import { Button } from "../../Components/shared/FormComponents";

export default function HomeScreen() {
  return (
    <div className="home-container">
        <header> 
            <h1>My Virtual Library</h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>Discover and explore amazing stories</p>
        </header>
        
        <SearchEbookForm />
        
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--text-color)' }}>
              📚 Your Collection
            </h2>
            <Link to="/add-ebook" style={{ textDecoration: 'none' }}>
              <Button style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--spacing-md) var(--spacing-lg)' }}>+ Add New</Button>
            </Link>
          </div>
          <EbookList />
        </div>
    </div>
  );
}