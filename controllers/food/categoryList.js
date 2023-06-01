const getCategoryList = async (req, res) => {
  const category = [
    "Chornomorka",
    "KFC",
    "MilkBar",
    "This is Pivbar",
    "Kuhmaister",
    "Celentano",
    "Salateira",
    "Vichnozeleni",
    "The Pitz",
    "Il Molino",
    "Mafia",
    "Pesto Cafe",
    "Boboti",
  ];
  return res.status(200).json(category);
};

module.exports = getCategoryList;
