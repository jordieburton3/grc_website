import Sqlite from "sqlite3"

const DropQueries = [
	`DROP TABLE IF EXISTS Members`,
    `DROP TABLE IF EXISTS Board`,
    `DROP TABLE IF EXISTS BlogPosts`,
    `DROP TABLE IF EXISTS Images`,
    `DROP TABLE IF EXISTS Schedule`,
    `DROP TABLE IF EXISTS PersonalRecords`,
    `DROP TABLE IF EXISTS Users`
]

const Schemas = [
    `CREATE TABLE Images (
        id INTEGER NOT NULL,
        imageUrl TEXT NOT NULL,
        PRIMARY KEY(id)
	)`,
	`CREATE TABLE Members (
        id INTEGER NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL,
        bio TEXT NOT NULL,
        imageId INTEGER NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(imageId) REFERENCES Images(id)
    )`,
    `CREATE TABLE Board (
        id INTEGER NOT NULL,
		position TEXT NOT NULL,
		PRIMARY KEY (id),
        FOREIGN KEY (id) REFERENCES Members(id)
    )`,
    // dateCreated should be in milliseconds
    `CREATE TABLE BlogPosts (
        id INTEGER NOT NULL,
        dateCreated INTEGER NOT NULL,
        imageId INTEGER NOT NULL,
        author TEXT,
        PRIMARY KEY(id),
        FOREIGN KEY(imageId) REFERENCES Images(id)
    )`,
    `CREATE TABLE Schedule (
        id INTEGER NOT NULL,
        eventName TEXT NOT NULL,
		dateHappening INTEGER NOT NULL,
		PRIMARY KEY(id)
    )`,
    // time should be in milliseconds
    `CREATE TABLE PersonalRecords (
        athleteId INTEGER NOT NULL,
        event TEXT NOT NULL,
        time INTEGER NOT NULL,
        PRIMARY KEY(athleteId, event),
        FOREIGN KEY(athleteId) REFERENCES Members (id)
    )`,
    `CREATE TABLE Users (
        email TEXT NOT NULL,
        passwordHash TEXT NOT NULL
    )`
];
const sqlite3 = Sqlite.verbose();
var db = new sqlite3.Database('./db/grc.db', (err) => {
		if (err) {
			console.error(err.message);
		}
	}
);

const deleteTables = () => {
	DropQueries.forEach(dq => {
		db.run(dq);
	});
}

const createTables = () => {
    Schemas.forEach(s => {
        db.serialize(() => {
			db.run(s, [], (e) => {
				if (e) {
					console.log(s);
					console.log(e);
				}
			});
		});
	});
	db.close();
}

deleteTables();
createTables();