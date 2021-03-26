import List from '../models/Lists.js'

export async function rootGet(req, res) {
	try {
		const listsFind = await List.find().lean();
		res.render("index", { lists: listsFind });
	} catch {
		res.redirect('/');
	};

};

export async function newlistGet(req, res) {

	res.render("to-do/new-todo");

};

export async function newlistPost(req, res) {

	const author = req.body.author;
	const title = req.body.title;
	const content = req.body.content;

	const newList = {
		author: author,
		title: title,
		content: content,
	};

	try{
		await new List(newList).save();
		res.redirect("/");
	} catch (error) {
		res.redirect("/new");
		console.log(error);
	};

};

export async function listAuthorId(req, res) {
	try {
		const listObject = await List.findOne({
			_id: req.params.id,
		}).lean();
		res.render("author/list", {
			listsObjects: listObject,
		});
	} catch (error) {
		res.send(error);
	}

};