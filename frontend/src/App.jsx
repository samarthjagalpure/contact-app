import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("https://contact-app-11ig.onrender.com/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Page Header */}
      <div className="py-6 text-center">
        <h1 className="text-4xl font-bold">Contact Management App</h1>
        <p className="text-gray-400 mt-1">Manage your contacts easily</p>
      </div>

      {/* Content */}
      <div className="px-6 pb-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm fetchContacts={fetchContacts} />
          <ContactList contacts={contacts} fetchContacts={fetchContacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
