export const initialState = {
  events: {
    data: [
      {
        id: 1,
        event_title: "EuroHack",
        event_description: "the best event hack hack hack macbook",
        creator_id: 1,
        start_date: "10/09/11",
        end_date: "08/07/13",
        location: "Europe",
        guidelines: "cool hekhkdsjfhsdkjf skdjfhskdjfhkjsdfh skjdfhksjdfh",
        participation_type: "Team",
        category_id: 1,
        requirements: [
          {
            video_url:
              "https://res.cloudinary.com/ibkrice-com/video/upload/v1581259780/Harvesting_ifato8.mp4"
          }
        ],
        ProfileImage: [
          {
            image_url:
              "https://res.cloudinary.com/ibkrice-com/video/upload/v1581259780/Harvesting_ifato8.mp4"
          }
        ],
        rubrics: [
          "Presentation",
          "Product Fit",
          "Functionality",
          "Innovation",
          "Product Design",
          "Extensibility"
        ]
      },
      {
        id: 2,
        event_title: "World",
        event_description: "number one hacker event in the world",
        creator_id: 1,
        start_date: "07/09/11",
        end_date: "08/07/13",
        location: "Asia",
        guidelines: "come well prepared,no cheating,no fighting",
        participation_type: "Team",
        category_id: 2
      }
    ],
    categories: [
      { id: 2, category_name: "Summer Hackton" },
      { id: 3, category_name: "World Hackton" },
      { id: 3, category_name: "Asia Hackton" },
      { id: 3, category_name: "Gamer's Hackton" },
      { id: 3, category_name: "Advanced Hackton" }
    ]
  },

  currentUser: {
    token: 347534574536,
    userId: 1,
    fullname: "Jake Tom",
    email: "8omemail@google.com",
    username: "Jake22",
    bio: "I like coding ",
    image: ""
  },
  submissions: [
    {
      id: 1,
      project_title: "Mock Project",
      participant_or_team_name: "Mock Team",
      event_id: 7,
      video_url: "",
      git_url: "https://www.google.com/",
      project_writeups: "No mock write up",
      submitted_by: 14,
      created_at: "2020-03-02",
      updated_at: "2020-03-02",
      average_rating: 0,
      acted_judges: 0,
      number_of_judges: 0
    }
  ],

  teams: [
    { id: 1, team_name: "The A team", team_lead: 2 },
    { id: 2, team_name: "Hacking central", team_lead: 3 },
    { id: 3, team_name: "blackhats", team_lead: 4 },
    { id: 4, team_name: "Spies", team_lead: 1 }
  ],
  participant_team_members: [
    {
      team_member: 3,
      team_id: 1
    },
    {
      team_member: 4,
      team_id: 1
    },
    {
      team_member: 5,
      team_id: 1
    }
  ]
};
