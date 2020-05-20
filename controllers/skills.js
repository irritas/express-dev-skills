const Skill = require('../models/skill');

function index(req, res) {
    console.log("attempt render");
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id)
    });
}

module.exports = {
    index,
    show
};