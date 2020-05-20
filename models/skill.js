const skills = [
    {id: 1230, skill: "HTML", learned: true},
    {id: 1231, skill: "CSS", learned: true},
    {id: 1232, skill: "Javascript", learned: true},
    {id: 2350, skill: "Express", learned: false}
];

function getAll() {
    return skills;
}

function getOne(id) {
    const target = skills.find(skill => skill.id === parseInt(id));
    if (target) return target;
    else return {id: id, skill: "NONE FOUND", learned: false};
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(skills.findIndex(e => e.id === parseInt(id)), 1);
}

function update(id, skill) {
    // const toUpdate = skills.find(e => e.id === parseInt(id));
    Object.assign(skills.find(e => e.id === parseInt(id)), skill);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}