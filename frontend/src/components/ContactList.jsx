import axios from "axios";

function ContactList({ contacts, fetchContacts }) {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`https://contact-app-11ig.onrender.com/api/contacts/${id}`);
      fetchContacts(); // refresh list after delete
    } catch (error) {
      console.error(error);
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="bg-gray-900 h-full p-6 rounded-xl shadow-lg animate-fade">
      <h2 className="text-xl font-semibold mb-4">Saved Contacts</h2>

      {contacts.length === 0 ? (
        <p className="text-gray-400">No contacts found</p>
      ) : (
        <div className="space-y-3 max-h-[450px] overflow-y-auto">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="bg-gray-800 p-4 rounded-lg flex justify-between items-center hover:scale-[1.02] transition-all"
            >
              <div>
                <p className="font-semibold text-lg">{c.name}</p>
                <p className="text-sm text-gray-400">{c.phone}</p>
                {c.email && (
                  <p className="text-xs text-gray-500">{c.email}</p>
                )}
              </div>

              <button
                onClick={() => handleDelete(c._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
