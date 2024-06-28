import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "ProductsDatabase.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

export const init = async () => {
	try {
		const db = await SQLite.openDatabase(
			database_name,
			database_version,
			database_displayname,
			database_size,
		);
		await db.executeSql(
			"CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY NOT NULL, uri TEXT NOT NULL, name TEXT NOT NULL, code TEXT NOT NULL);",
		);
		console.log("Table created successfully");
		return db;
	} catch (error) {
		console.log("Table creation failed", error);
	}
};

export const insertProduct = async (id, uri, name, code) => {
	try {
		const db = await SQLite.openDatabase(
			database_name,
			database_version,
			database_displayname,
			database_size,
		);
		await db.executeSql(
			"INSERT INTO products (id, uri, name, code) VALUES (?, ?, ?, ?);",
			[id, uri, name, code],
		);
		console.log("Product inserted successfully");
	} catch (error) {
		console.log("Insert failed", error);
	}
};

export const updateProduct = async (id, uri, name, code) => {
	try {
		const db = await SQLite.openDatabase(
			database_name,
			database_version,
			database_displayname,
			database_size,
		);
		await db.executeSql(
			"UPDATE products SET uri = ?, name = ?, code = ? WHERE id = ?;",
			[uri, name, code, id],
		);
		console.log("Product updated successfully");
	} catch (error) {
		console.log("Update failed", error);
	}
};

export const fetchProducts = async (callback) => {
	try {
		const db = await SQLite.openDatabase(
			database_name,
			database_version,
			database_displayname,
			database_size,
		);
		const [results] = await db.executeSql("SELECT * FROM products");
		const products = results.rows.raw();
		console.log("Fetched products:", products); // Log fetched products
		callback(products);
	} catch (error) {
		console.log("Fetch failed", error);
	}
};
