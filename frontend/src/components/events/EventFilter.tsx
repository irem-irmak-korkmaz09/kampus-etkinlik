interface EventFilterProps {
  searchText: string;
  category: string;
  categories: string[];
  onSearchChange: (text: string) => void;
  onCategoryChange: (cat: string) => void;
}

export default function EventFilter({
  searchText,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: EventFilterProps) {
  return (
    <form className="filtre" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="arama">Etkinlik ara</label>
        <input
          type="search"
          id="arama"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Örn. atölye, kariyer..."
        />
      </div>
      <div>
        <label htmlFor="kategori-filtre">Kategori</label>
        <select
          id="kategori-filtre"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Tümü</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
