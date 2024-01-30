import { MdSearch } from "react-icons/md";

type SearchProps = {
  searchQuery: string;
  handleSearch: (query: string) => void;
};

export const Search = ({ handleSearch, searchQuery }: SearchProps) => (
  <div className="sticky top-1/4 flex justify-center z-10">
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-72"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <MdSearch className="h-5 w-5 text-gray-400" />
      </span>
    </div>
  </div>
);
