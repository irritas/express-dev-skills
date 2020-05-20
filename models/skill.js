const skills = [
    {id: 1230, skill: "HTML", learned: true},
    {id: 1231, skill: "CSS", learned: true},
    {id: 1232, skill: "Javascript", learned: true},
    {id: 2350, skill: "Express", learned: false},
    {id: 3410, skill: "Python", learned: false}
];

function getAll() {
    return skills;
}

function getOne(id) {
    const target = skills.find(skill => skill.id === parseInt(id));
    if (target) return target;
    else return {id: id, skill: "NONE FOUND", learned: false};
}

module.exports = {
    getAll,
    getOne
}