import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EbookContext } from "../../Context/EbookContext";
import { Button, FormInput, FormTextarea } from "../shared/FormComponents";

export default function NewEbookForm() {
  const navigate = useNavigate();
  const { ebooks, setEbooks } = useContext(EbookContext);
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    description: "",
    cover_image: "",
    chapterContent: ""
  });

  const handleChange = (field) => (e) => {
    setFormValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  const sendNewEbookData = (e) => {
    e.preventDefault();
    
    const { title, author, description, cover_image, chapterContent } = formValues;
    
    const newEbook = {
      id: Date.now(),
      title,
      author,
      description,
      cover_image,
      chapters: [
        {
          id: 1,
          title: "Chapter 1",
          content: chapterContent
        }
      ]
    };
    
    const updatedEbooks = [...ebooks, newEbook];
    setEbooks(updatedEbooks);
    localStorage.setItem("ebooks", JSON.stringify(updatedEbooks));
    
    navigate("/");
  };

  return (
    <div>
      <h2 style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--font-size-2xl)' }}>
        Publish a New Ebook
      </h2>
      <form onSubmit={sendNewEbookData} style={{ maxWidth: '600px' }}>
        <FormInput 
          label="Title"
          placeholder="Enter ebook title"
          value={formValues.title}
          onChange={handleChange("title")}
          required
        />
        <FormInput 
          label="Author"
          placeholder="Enter author name"
          value={formValues.author}
          onChange={handleChange("author")}
          required
        />
        <FormTextarea 
          label="Description"
          placeholder="Enter ebook description"
          value={formValues.description}
          onChange={handleChange("description")}
          required
          rows={4}
        />
        <FormInput 
          label="Cover Image URL"
          type="text"
          placeholder="https://example.com/cover.jpg"
          value={formValues.cover_image}
          onChange={handleChange("cover_image")}
        />
        <FormTextarea 
          label="First Chapter Content"
          placeholder="Enter the content of your first chapter"
          value={formValues.chapterContent}
          onChange={handleChange("chapterContent")}
          required
          rows={10}
        />
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
          <Button type="submit" style={{ flex: 1 }}>
            Publish Ebook
          </Button>
          <Button 
            type="button"
            variant="secondary"
            onClick={() => navigate("/")}
            style={{ flex: 1 }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
