// buildProfileCard(user) — Template Literals ....Given { name, title, company }, return a multiline string using template literal interpolation only.
const buildProfileCard = (user) => {
    return `${user.name}\n${user.title} at ${user.company}`
}
const obj = { name: "Arif", title: "Developer", company: "Programming Hero" }
console.log(buildProfileCard(obj))
