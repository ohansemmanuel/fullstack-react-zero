const PROJECTS = [
  {
    id: 1,
    client: "TESLA",
    description: "Project Lunar: Sending the first humans to Mars",
    duration: 3435,
  },
  {
    id: 2,
    client: "EU 2020",
    description:
      "Deploy COVID tracking mobile and TV applications for all of Europe",
    duration: 455,
  },
  {
    id: 3,
    client: "Tiktok",
    description:
      "Prevent US app ban and diffuse security threat claims by hacking the white house",
    duration: 441,
  },
];

module.exports = function (req, res) {
  res.send({ data: PROJECTS });
};
