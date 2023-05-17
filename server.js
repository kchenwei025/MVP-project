import pg from "pg";
import express from "express";
import dotenv from "dotenv";

console.log("before", process.env.DATABASE_URL);
dotenv.config();
console.log("after", process.env.DATABASE_URL);

const app = express();
const PORT = 4000;

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
app.use(express.json());
app.use(express.static("public"));

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students").then((result) => {
    res.send(result.rows);
  });
});
app.get("/post", (req, res) => {
  db.query("SELECT * FROM post").then((result) => {
    res.send(result.rows);
  });
});

app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM post WHERE id = $1", [id])
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send("Student not found");
      } else {
        res.send(result.rows[0]);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM students WHERE id = $1", [id])
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send("Student not found");
      } else {
        res.send(result.rows[0]);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
app.get("/entries", (req, res) => {
  const {} = req.body;
  db.query("SELECT * FROM entries")
    .then((result) => {
      console.log(result.rows);
      res.status(201).send(result.rows[0]);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.post("/students", (req, res) => {
  const {
    name,
    introduction,
    wherefrom,
    whysoftwareengineering,
    techinterest,
    Hobbies,
    favoritemovies,
    favoritequote,
    interestingfacts,
  } = req.body;
  if (!name) {
    res.status(400).send("Bad Request");
    return;
  }
  db.query(
    "INSERT INTO students(name, introduction, wherefrom, whysoftwareengineering, techinterest, Hobbies, favoritemovies, favoritequote, interestingfacts) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
    [
      name,
      introduction,
      wherefrom,
      whysoftwareengineering,
      techinterest,
      Hobbies,
      favoritemovies,
      favoritequote,
      interestingfacts,
    ]
  ).then((result) => {
    console.log(result.rows);
    res.status(201).send(result.rows[0]);
  });
});

app.post("/post", (req, res) => {
  const { post_time, post_content, students_id } = req.body;
  db.query(
    "INSERT INTO post(post_time, post_content, students_id) VALUES ($1, $2, $3) RETURNING *",
    [post_time, post_content, students_id]
  )
    .then((result) => {
      console.log(result.rows);
      res.status(201).send(result.rows[0]);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
app.post("/entries", (req, res) => {
  const { num } = req.body;
  db.query("INSERT INTO entries (num) VALUES ($1) RETURNING *", [num])
    .then((result) => {
      console.log(result.rows);
      res.status(201).send(result.rows[0]);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
app.get("/entries/latest", (req, res) => {
  db.query("SELECT id FROM entries ORDER BY id DESC LIMIT 1")
    .then((result) => {
      const latestId = result.rows[0].id;
      res.status(200).json({ id: latestId });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
app.patch("/students/:id", async (req, res) => {
  const {
    name,
    introduction,
    wherefrom,
    whysoftwareengineering,
    techinterest,
    hobbies,
    favoritemovies,
    favoritequote,
    favoritebook,
    interestingfacts,
    facebook,
    linkedin,
    github,
  } = req.body;
  const { id } = req.params;

  const query = {
    text: `UPDATE students SET
      name = COALESCE($1, name),
      introduction = COALESCE($2, introduction),
      wherefrom = COALESCE($3, wherefrom),
      whysoftwareengineering = COALESCE($4, whysoftwareengineering),
      techinterest = COALESCE($5, techinterest),
      hobbies = COALESCE($6, hobbies),
      favoritemovies = COALESCE($7, favoritemovies),
      favoritequote = COALESCE($8, favoritequote),
      favoritebook = COALESCE($9, favoritebook),
      interestingfacts = COALESCE($10, interestingfacts),
      facebook = COALESCE($11, facebook),
      linkedin = COALESCE($12, linkedin),
      github = COALESCE($13, github)
      WHERE id = $14
      RETURNING *`,
    values: [
      name,
      introduction,
      wherefrom,
      whysoftwareengineering,
      techinterest,
      hobbies,
      favoritemovies,
      favoritequote,
      favoritebook,
      interestingfacts,
      facebook,
      linkedin,
      github,
      id,
    ],
  };

  try {
    const result = await db.query(query);
    if (result.rowCount === 0) {
      res.status(404).send("Student not found");
    } else {
      res.send(result.rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/post/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM post WHERE id = $1 RETURNING *", [id])
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send("post not found");
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});
app.delete("/post", (req, res) => {
  db.query("DELETE FROM post")
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send("post not found");
      } else {
        res.status(204).send("All post deleted");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(PORT, () => {
  console.log(`Listing on port: ${PORT}`);
});
