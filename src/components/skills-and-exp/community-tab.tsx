export default function CommunityTab() {
  const communityData = [
    {
      title: "Google Developer Student Clubs USeP Lead",
      duration: "2023-2024",
      description:
        "I became the Google DSC Lead of the University of Southeastern Philippines. This leadership role allowed me to cultivate a passion for technology and collaboration, and it played a pivotal part in my journey in tech.",
    },
    {
      title: "Department of Science and Technology START Deputy CTO",
      duration: "2024-Present",
      description:
        "In the role of Deputy CTO, contributing to the strategic planning and implementation of technology projects within the organization.",
    },
    {
      title: "DSC USeP Chief Technology Officer",
      duration: "2024-Present",
      description:
        "Serving as the Chief Technology Officer for DSC University of Southeastern Philippines, responsible for overseeing the club's technology initiatives and ensuring the implementation of innovative solutions.",
    },
    {
      title: "Postman Student Leader",
      duration: "2023-2024",
      description:
        "As a Postman Student Leader, I was able to share my knowledge and passion for API development and testing with fellow students. I also learned a lot about API development and testing, and how it can help developers build better software.",
    },
  ];
  return (
    <div>
      <h1>Community</h1>
      {communityData.map((community, index) => (
        <div key={index}>
          <h3>{community.title}</h3>
          <p>
            <strong>{community.duration}</strong>
          </p>
          <p>{community.description}</p>
        </div>
      ))}
    </div>
  );
}
