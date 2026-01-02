const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;

// DELETE contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
