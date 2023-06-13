import db from "../../config/index";

export const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.log("Erreur:", error);
            reject(error);
          } else {
            resolve(results);
          }
    });
  });
};

export const getUserById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
