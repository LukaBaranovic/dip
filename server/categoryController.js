const db = require("./dbConfig");

async function getCategories(req, res) {
  try {
    const companyId = 1; // Hardcoded company ID
    const [rows] = await db.query(
      "SELECT category_id, category_name FROM category WHERE company_id = ?",
      [companyId]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getCategories,
};
