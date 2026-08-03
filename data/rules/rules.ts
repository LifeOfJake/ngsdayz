export const RULE_ICONS = [
  "swords",
  "hammer",
  "car",
  "users",
  "shield-alert",
  "life-buoy",
] as const;

export type RuleIcon = typeof RULE_ICONS[number];

export interface RuleHistoryEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface RuleStaffData {
  /**
   * Recommended evidence required before action is taken.
   * Hidden from the public website.
   */
  evidence?: string[];

  /**
   * Internal guidance to help staff interpret the rule consistently.
   * Hidden from the public website.
   */
  interpretation?: string[];

  /**
   * Staff Standard Operating Procedure.
   * Hidden from the public website.
   */
  sop?: string[];
}

export interface Rule {
  id: string;
  title: string;
  summary: string;

  rationale?: string;

  permitted?: string[];
  prohibited?: string[];

  notes?: string[];
  examples?: string[];
  penalties?: string[];

  related?: string[];
  staffNotes?: string[];

  /**
   * Public rule history.
   * Not displayed unless history entries exist.
   */
  history?: RuleHistoryEntry[];

  /**
   * Internal staff guidance.
   * Reserved for the future Staff Portal.
   */
  staff?: RuleStaffData;
}

export interface RuleCategory {
  id: string;

  title: string;
  subtitle: string;

  icon: RuleIcon;
  colour: string;

  version: string;
  lastUpdated: string;

  searchKeywords: string[];

  description: string;
  introduction: string;

  rules: Rule[];
}

export const ruleCategories: RuleCategory[] = [
  {
    id: "general",

    title: "General",
    subtitle: "Community standards and server-wide policies.",

    icon: "shield-alert",
    colour: "#ef4444",

    version: "1.0.0",
    lastUpdated: "2026-07-24",

    searchKeywords: [
      "general",
      "community",
      "rules",
      "staff",
      "appeals",
      "conduct",
      "cheating",
      "advertising",
      "player names",
    ],

    description:
      "These rules apply across all official NGS platforms, including the game server, Discord and any other community spaces operated by NGS.",

    introduction:
      "The General chapter establishes the standards expected of every member of the NGS community. These rules protect fair gameplay, encourage respectful behaviour and provide staff with a consistent framework when resolving issues.",

    rules: [
      {
        id: "g-01",

        title: "Respect the Community",

        summary:
          "Treat other members of the NGS community with respect. Friendly competition is encouraged, but harassment, discrimination and abusive behaviour are not.",

        rationale:
          "NGS is built around competitive gameplay, not personal attacks. Players should be free to enjoy the server without being subjected to harassment, discrimination or targeted abuse.",

        permitted: [
          "Friendly banter and light-hearted jokes.",
          "Competitive rivalries between players or groups.",
          "Roleplay interactions, including hostile encounters.",
          "Criticism that remains respectful and constructive.",
        ],

        prohibited: [
          "Harassment or bullying of any player or staff member.",
          "Discrimination based on race, ethnicity, nationality, religion, disability, sex, gender identity or sexual orientation.",
          "Threats of violence or encouraging self-harm.",
          "Repeated attempts to provoke, intimidate or target another player outside normal gameplay.",
          "Posting or sharing another person's private information without their consent.",
        ],

        notes: [
          "This rule applies across all official NGS platforms, including the game server and Discord.",
          "Competitive gameplay does not excuse personal abuse.",
        ],

        penalties: [
          "Warnings, temporary suspensions or permanent bans depending on severity.",
        ],

        related: [
          "g-04",
          "g-05",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Screenshots.",
            "Video evidence.",
            "Chat logs.",
            "Discord logs.",
          ],

          interpretation: [
            "Consider context before taking action.",
            "Distinguish between consensual banter and targeted harassment.",
          ],

          sop: [
            "Issue proportionate action based on severity and history.",
          ],
        },
      },

      {
        id: "g-02",

        title: "Cheating & Unfair Advantages",

        summary:
          "The use of any software, hardware or external method that provides an unfair gameplay advantage is strictly prohibited. NGS operates a zero-tolerance policy towards confirmed cheating.",

        rationale:
          "Cheating damages the integrity of the server and negatively affects every legitimate player. Protecting fair gameplay is essential to maintaining a competitive survival environment.",

        permitted: [
          "Accessibility features provided by your console, operating system or the game itself.",
          "Cosmetic overlays that do not provide gameplay information or an unfair advantage.",
          "Screen or monitor crosshair overlays. These are permitted on NGS and are not considered cheating.",
        ],

        prohibited: [
          "Using cheats, hacks or modified game files.",
          "Using ESP, wallhacks, aimbots or similar software.",
          "Using scripts, macros or automation that provide an unfair gameplay advantage.",
          "Using hardware or peripherals to gain an unfair advantage, including devices such as Cronus, Strike Pack or XIM where used to circumvent normal gameplay.",
          "Manipulating network traffic or third-party software to gain an unfair advantage.",
        ],

        notes: [
          "This rule applies to any current or future method of obtaining an unfair gameplay advantage, even if it is not specifically listed.",
          "Players who are unsure whether a tool or device is permitted should contact the Staff Team before using it.",
        ],

        penalties: [
          "Confirmed cheating will normally result in a permanent ban from all NGS platforms.",
        ],

        related: [
          "g-03",
          "g-05",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Video evidence.",
            "Server logs where applicable.",
            "Supporting evidence from multiple staff members where appropriate.",
          ],

          interpretation: [
            "Crosshair overlays alone are not considered cheating.",
            "Focus on whether an unfair gameplay advantage exists.",
          ],

          sop: [
            "Investigate thoroughly before action is taken.",
            "Confirmed offences result in permanent removal.",
          ],
        },
      },

            {
        id: "g-03",

        title: "Exploiting Bugs & Glitches",

        summary:
          "Players must not intentionally exploit bugs, glitches or unintended game mechanics to gain an unfair advantage.",

        rationale:
          "Bugs and glitches can negatively affect gameplay, the server economy and the experience of other players. While some issues may be minor, deliberately abusing them for personal gain is not permitted.",

        permitted: [
          "Reporting bugs and unintended behaviour to the Staff Team.",
          "Accidentally encountering a bug, provided it is not repeatedly abused.",
          "Continuing normal gameplay after leaving an unintended situation where reasonably possible.",
        ],

        prohibited: [
          "Knowingly exploiting bugs or glitches for personal or group advantage.",
          "Duplicating items, currency or any other assets.",
          "Using camera abuse to gain information through walls, terrain or structures.",
          "Using clipping, animation glitches or unintended mechanics to access areas that would not normally be accessible.",
          "Deliberately abusing exploits that damage the server economy or gameplay.",
        ],

        notes: [
          "Not every exploit carries the same level of severity.",
          "Staff will consider the intent, impact and frequency of the exploit when determining the appropriate action.",
          "Players are encouraged to report newly discovered exploits instead of abusing them.",
        ],

        examples: [
          "Item duplication is considered a severe exploit.",
          "Repeated camera abuse to gain intelligence during raids is considered an exploit.",
          "Accidentally encountering a bug and immediately reporting it is not considered exploiting.",
        ],

        penalties: [
          "Minor exploit offences may result in a warning followed by escalating disciplinary action for repeated offences.",
          "Severe exploits, including item duplication or exploits that significantly damage the server economy, will normally result in a permanent ban.",
        ],

        related: [
          "g-02",
          "g-08",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Video evidence.",
            "Screenshots.",
            "Server logs where available.",
          ],

          interpretation: [
            "Consider whether the player intentionally abused the exploit.",
            "Differentiate between accidental discovery and deliberate exploitation.",
            "The greater the impact on gameplay or the economy, the more severe the response should be.",
          ],

          sop: [
            "Minor camera abuse: Warning for a first offence, escalating for repeated offences.",
            "Duplication or economy-damaging exploits: Permanent ban.",
          ],
        },
      },

      {
        id: "g-04",

        title: "Follow Staff Instructions",

        summary:
          "Players must comply with reasonable instructions issued by members of the NGS Staff Team. If you disagree with a decision, comply first and appeal afterwards.",

        rationale:
          "Staff investigations and administrative actions cannot function effectively if players refuse to cooperate. The appeals system exists to resolve disagreements without disrupting gameplay or community spaces.",

        permitted: [
          "Asking staff for clarification.",
          "Appealing a decision through the official appeals process.",
          "Respectfully questioning a decision after complying with staff instructions.",
        ],

        prohibited: [
          "Ignoring reasonable staff instructions.",
          "Arguing with staff during an active investigation.",
          "Encouraging others to ignore or interfere with staff actions.",
        ],

        notes: [
          "Comply first. Appeal later.",
          "Following a staff instruction does not remove your right to appeal the decision.",
        ],

        penalties: [
          "Failure to comply may result in warnings, temporary suspensions or further disciplinary action depending on the circumstances.",
        ],

        related: [
          "g-05",
          "g-09",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Chat logs.",
            "Discord logs.",
            "Video evidence where applicable.",
          ],

          interpretation: [
            "Only reasonable and server-related instructions are covered by this rule.",
            "Remain professional during all interactions.",
          ],

          sop: [
            "Resolve situations calmly wherever possible.",
            "Direct players towards the appeals process when required.",
          ],
        },
      },

      {
        id: "g-05",

        title: "Appeals",

        summary:
          "Appeals must be submitted through the official Discord ticket system. Public arguments regarding staff decisions are not permitted.",

        rationale:
          "A structured appeals process allows staff to review decisions fairly, consistently and with access to all available evidence.",

        permitted: [
          "Submitting appeals through Discord tickets.",
          "Providing additional evidence during an appeal.",
          "Respectfully discussing your case with the reviewing staff member.",
        ],

        prohibited: [
          "Arguing about staff decisions in public Discord channels.",
          "Attempting to pressure staff through public discussion.",
          "Creating multiple appeals for the same decision without new evidence.",
        ],

        notes: [
          "Every appeal will be reviewed on its own merits.",
          "Submitting an appeal does not guarantee that the original decision will be overturned.",
        ],

        penalties: [
          "Abuse of the appeals system may result in appeals being closed or further disciplinary action where appropriate.",
        ],

        related: [
          "g-04",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Original case evidence.",
            "Additional evidence supplied during appeal.",
          ],

          interpretation: [
            "Appeals should be reviewed impartially wherever possible.",
          ],

          sop: [
            "Review all available evidence before reaching a decision.",
          ],
        },
      },

            {
        id: "g-06",

        title: "Player Names",

        summary:
          "Player names must be appropriate and must not impersonate others, evade punishments or target members of the community.",

        rationale:
          "Clear and appropriate player names help staff identify players correctly while maintaining a welcoming community environment.",

        permitted: [
          "Original usernames.",
          "Clan or group tags.",
          "Roleplay-themed names that remain appropriate.",
        ],

        prohibited: [
          "Offensive, obscene or discriminatory names.",
          "Names intended to impersonate NGS staff, content creators or other players.",
          "Names created to evade bans or disciplinary action.",
          "Names designed to harass, mock or target another member of the community.",
        ],

        notes: [
          "Staff may require a player to change an inappropriate name before allowing them to continue playing.",
        ],

        penalties: [
          "Players may be asked to change their name.",
          "Refusing to comply may result in removal from the server until the issue is resolved.",
        ],

        related: [
          "g-01",
          "g-04",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Screenshot of the player list.",
            "Server logs where applicable.",
          ],

          interpretation: [
            "Consider whether the average player could reasonably mistake the name for another member of the community.",
          ],

          sop: [
            "Request a name change before escalating enforcement where appropriate.",
          ],
        },
      },

      {
        id: "g-07",

        title: "Advertising & Self Promotion",

        summary:
          "Advertising other communities, servers or services is not permitted without prior approval from the NGS Staff Team.",

        rationale:
          "Community spaces exist to support NGS. Unauthorised advertising distracts from discussions and encourages spam.",

        permitted: [
          "Sharing NGS content.",
          "Posting approved community creations.",
          "Advertising your own content only after receiving approval from NGS staff.",
        ],

        prohibited: [
          "Advertising other DayZ servers.",
          "Advertising Discord servers or communities.",
          "Posting referral links or unsolicited promotions.",
          "Repeated self-promotion without staff approval.",
        ],

        notes: [
          "Approval is granted at the discretion of the Staff Team and may be withdrawn at any time.",
        ],

        penalties: [
          "Unauthorised advertisements may be removed.",
          "Repeated offences may result in disciplinary action.",
        ],

        related: [
          "g-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Discord logs.",
            "Screenshots.",
          ],

          interpretation: [
            "Normal conversation mentioning another server is not automatically advertising.",
            "Look for intent to recruit or promote.",
          ],

          sop: [
            "Remove the advertisement before considering further action.",
          ],
        },
      },

      {
        id: "g-08",

        title: "Reporting Issues",

        summary:
          "Players are encouraged to report bugs, exploits, cheating and other serious issues to help maintain a fair and stable server.",

        rationale:
          "Timely reports allow staff to investigate issues before they affect larger numbers of players or damage the server economy.",

        permitted: [
          "Reporting bugs.",
          "Reporting suspected cheating.",
          "Reporting harassment or serious misconduct.",
          "Providing screenshots, videos or additional evidence.",
        ],

        prohibited: [
          "Knowingly submitting false reports.",
          "Fabricating evidence.",
          "Using the reporting system to harass another player.",
        ],

        notes: [
          "Reporting issues is encouraged but not mandatory.",
          "Providing evidence will usually allow investigations to be completed more quickly.",
        ],

        penalties: [
          "Malicious or deliberately false reports may result in disciplinary action.",
        ],

        related: [
          "g-02",
          "g-03",
          "g-05",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Original player report.",
            "Supporting screenshots or video.",
          ],

          interpretation: [
            "An inability to provide evidence should not automatically prevent an investigation.",
          ],

          sop: [
            "Gather independent evidence wherever possible before reaching a conclusion.",
          ],
        },
      },

      {
        id: "g-09",

        title: "Rule Interpretation",

        summary:
          "The rulebook is written to cover normal gameplay. Where unusual situations arise, staff will interpret the existing rules based on their intent and the principles of fair play.",

        rationale:
          "No written rulebook can anticipate every possible scenario. This rule provides a consistent framework for handling situations that are not explicitly described while avoiding loopholes.",

        permitted: [
          "Requesting clarification from staff.",
          "Suggesting improvements to the rulebook.",
          "Appealing decisions through the normal appeals process.",
        ],

        prohibited: [
          "Attempting to exploit omissions or loopholes in the wording of the rules.",
          "Claiming an action is automatically permitted simply because it is not explicitly listed.",
        ],

        notes: [
          "Where recurring situations arise, the rulebook may be updated to improve clarity.",
          "Staff decisions should always remain consistent with the intent of the published rules.",
        ],

        penalties: [
          "This rule supports the enforcement of existing rules and does not create additional punishments by itself.",
        ],

        related: [
          "g-04",
          "g-05",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "All evidence relevant to the underlying rule.",
          ],

          interpretation: [
            "Do not invent new rules during enforcement.",
            "Interpret situations using the intent of existing rules.",
            "Recommend rulebook updates where repeated ambiguity exists.",
          ],

          sop: [
            "Record unusual interpretations internally so future cases remain consistent.",
          ],
        },
      },
    ],
  },

  {
    id: "combat",

    title: "Combat",

    subtitle: "Rules governing player versus player interactions.",

    icon: "swords",

    colour: "#dc2626",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "combat",
      "kos",
      "pvp",
      "third party",
      "combat logging",
      "voip",
    ],

    description:
      "Combat rules define how hostile encounters are handled while preserving the high-risk survival experience that NGS is designed around.",

    introduction:
      "NGS is a PvP-focused survival server. Combat is expected throughout the map, and players are responsible for managing the risks that come with every encounter.",

    rules: [

          {
        id: "c-01",

        title: "Kill on Sight (KOS)",

        summary:
          "Kill on Sight (KOS) is permitted across the entire map. There are no safe zones unless explicitly announced by NGS staff during an event.",

        rationale:
          "NGS is designed as a high-risk survival experience where every encounter has the potential to become hostile. Players are responsible for assessing risks before approaching others.",

        permitted: [
          "Engaging another player without prior interaction.",
          "Ambushing players.",
          "Defending yourself or your group.",
          "Setting traps or preparing ambushes.",
        ],

        prohibited: [
          "Assuming an area is safe because another player has not acted hostile.",
          "Claiming another player broke the rules simply by killing without warning.",
        ],

        notes: [
          "There are no permanent safe zones on NGS.",
          "Players should always assume another survivor may become hostile.",
        ],

        penalties: [
          "None. Kill on Sight is an intended gameplay mechanic.",
        ],

        related: [
          "c-02",
          "c-03",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Killing another player without warning is not a rule violation.",
          ],

          sop: [
            "Close reports that are solely based on Kill on Sight.",
          ],
        },
      },

      {
        id: "c-02",

        title: "Combat Logging",

        summary:
          "Players must not disconnect to avoid the outcome of an active combat situation.",

        rationale:
          "Disconnecting during combat removes the risk that every player accepts when entering a fight and creates an unfair advantage.",

        permitted: [
          "Disconnecting after combat has clearly ended.",
          "Disconnecting after remaining out of combat for at least ten minutes.",
        ],

        prohibited: [
          "Disconnecting while exchanging gunfire.",
          "Disconnecting after hostile VOIP has initiated combat.",
          "Disconnecting while trapped inside an active raid.",
          "Disconnecting to avoid capture, death or the loss of equipment.",
        ],

        notes: [
          "Combat is considered active for ten minutes after the most recent hostile action.",
          "The timer resets whenever hostile interaction resumes.",
        ],

        examples: [
          "Two players exchange shots before one disconnects five minutes later.",
          "A defender logs out while attackers are actively raiding the base.",
          "A player disconnects after receiving hostile VOIP rather than responding or escaping.",
        ],

        penalties: [
          "Warnings or temporary bans depending on the circumstances.",
          "Repeated offences may result in more severe disciplinary action.",
        ],

        related: [
          "c-01",
          "r-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Server logs.",
            "Video evidence.",
            "Screenshots where relevant.",
          ],

          interpretation: [
            "Hostile VOIP begins combat even if shots have not yet been fired.",
            "Being trapped inside an active raid counts as combat.",
          ],

          sop: [
            "Confirm combat timing before taking action.",
          ],
        },
      },

      {
        id: "c-03",

        title: "Third Partying",

        summary:
          "Players and groups may freely involve themselves in ongoing combat.",

        rationale:
          "Unexpected encounters and changing situations are part of the DayZ survival experience. Players should never assume a fight will remain one-on-one.",

        permitted: [
          "Joining an existing firefight.",
          "Helping either side.",
          "Attacking every group involved.",
          "Waiting for an opportunity before engaging.",
        ],

        prohibited: [
          "Claiming ownership of a firefight.",
          "Demanding that other players stay out of combat.",
        ],

        notes: [
          "Every player accepts the risk that additional survivors may become involved.",
        ],

        penalties: [
          "None. Third partying is an intended gameplay mechanic.",
        ],

        related: [
          "c-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Joining an existing fight is not a rule violation.",
          ],

          sop: [
            "Reject reports based solely on third partying.",
          ],
        },
      },

      {
        id: "c-04",

        title: "Stream Sniping",

        summary:
          "Using a live stream or broadcast to locate, track or gain an advantage over another player is prohibited.",

        rationale:
          "Combat should be decided through gameplay rather than external information sources.",

        permitted: [
          "Watching content after gameplay has ended.",
          "Creating or streaming your own gameplay.",
        ],

        prohibited: [
          "Using a live stream to determine a player's position.",
          "Sharing information obtained from a live stream with another player.",
          "Monitoring multiple streams to gain a tactical advantage.",
        ],

        notes: [
          "This rule applies whether the information is used directly or passed to another player.",
        ],

        penalties: [
          "Warnings, temporary bans or permanent bans depending on severity and intent.",
        ],

        related: [
          "g-02",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          evidence: [
            "Video evidence.",
            "Streaming timestamps.",
            "Supporting logs where available.",
          ],

          interpretation: [
            "Intent and supporting evidence should be established before enforcement.",
          ],

          sop: [
            "Review stream timestamps alongside gameplay evidence.",
          ],
        },
      },
    ],
  },

  {
    id: "building",

        title: "Base Building",

    subtitle: "Rules covering construction, placement and base accessibility.",

    icon: "hammer",

    colour: "#f59e0b",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "base",
      "building",
      "construction",
      "raid",
      "boosting",
      "access",
    ],

    description:
      "Base building should provide meaningful progression without creating unfair or inaccessible structures.",

    introduction:
      "Players are free to construct and defend their bases, provided they remain within the building rules designed to preserve fair gameplay and server performance.",

    rules: [
      {
        id: "b-01",

        title: "Building Restrictions",

        summary:
          "Bases may not be constructed in restricted areas or in locations that prevent intended gameplay.",

        rationale:
          "Certain locations are intentionally left open to preserve player progression, loot balance and server flow.",

        permitted: [
          "Building in towns, forests and other unrestricted locations.",
          "Expanding an existing base within the rules.",
        ],

        prohibited: [
          "Building on the coast spawn region.",
          "Building inside military locations.",
          "Building inside contamination zones.",
          "Blocking essential map progression.",
        ],

        notes: [
          "Restricted locations may be expanded or amended by NGS as the server evolves.",
        ],

        penalties: [
          "Illegal structures may be removed without compensation.",
          "Repeated violations may result in disciplinary action.",
        ],

        related: [
          "b-02",
          "r-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Protect intended progression routes and key gameplay locations.",
          ],

          sop: [
            "Remove prohibited structures after confirming a violation.",
          ],
        },
      },

      {
        id: "b-02",

        title: "Base Accessibility",

        summary:
          "Every base must have at least one legitimate route that can be used during a raid.",

        rationale:
          "Base defence should reward preparation rather than exploiting movement mechanics or inaccessible building designs.",

        permitted: [
          "Using gates, doors and defensive structures.",
          "Creating multiple legitimate entrances.",
        ],

        prohibited: [
          "Requiring parkour to enter a base.",
          "Requiring balancing on objects.",
          "Requiring ladder exploits.",
          "Requiring forced vaulting mechanics.",
          "Requiring forced jump mechanics.",
          "Creating intentionally inaccessible bases.",
        ],

        notes: [
          "Raiders should always have a genuine path to continue a raid using intended gameplay mechanics.",
        ],

        penalties: [
          "Illegal structures may be modified or removed.",
        ],

        related: [
          "b-03",
          "r-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "If intended game mechanics cannot reasonably access the base, it is likely illegal.",
          ],

          sop: [
            "Request changes where practical before removing structures.",
          ],
        },
      },

      {
        id: "b-03",

        title: "Illegal Construction",

        summary:
          "Structures must not rely on clipping, unintended placement or impossible construction techniques.",

        rationale:
          "Construction should reflect intended gameplay rather than exploiting the building system.",

        permitted: [
          "Creative defensive layouts.",
          "Multi-layered compounds.",
        ],

        prohibited: [
          "Terrain clipping.",
          "Wall clipping.",
          "Floating structures.",
          "Sky bases.",
          "Construction that relies on glitches.",
        ],

        notes: [
          "If a structure could not reasonably exist using intended mechanics, staff may determine that it is illegal.",
        ],

        penalties: [
          "Illegal structures may be removed.",
          "Severe abuse may result in disciplinary action.",
        ],

        related: [
          "b-01",
          "g-03",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Differentiate creative building from exploitative construction.",
          ],

          sop: [
            "Inspect the structure before taking action.",
          ],
        },
      },

      {
        id: "b-04",

        title: "Boosting",

        summary:
          "Boosting is permitted within defined limits.",

        rationale:
          "Limited boosting rewards creativity without allowing players to bypass intended base design rules.",

        permitted: [
          "One player boosting another player.",
          "Using one vehicle.",
          "Using one existing structure.",
        ],

        prohibited: [
          "Chain boosting.",
          "Using multiple players to create human towers.",
          "Using unintended terrain exploits.",
          "Combining multiple boosting methods to bypass base defences.",
        ],

        notes: [
          "If a boosting method relies on an exploit rather than intended gameplay, it is prohibited.",
        ],

        penalties: [
          "Warnings or further disciplinary action depending on severity.",
        ],

        related: [
          "b-02",
          "g-03",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "One player, one vehicle or one existing object is the maximum permitted boost.",
          ],

          sop: [
            "Assess whether the boost relied on intended gameplay mechanics.",
          ],
        },
      },
    ],
  },

  {
    id: "raiding",

        title: "Raiding",

    subtitle: "Rules governing base raiding and property destruction.",

    icon: "shield-alert",

    colour: "#b91c1c",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "raid",
      "raiding",
      "offline",
      "base",
      "destruction",
      "abandoned",
    ],

    description:
      "Raiding is an integral part of progression on NGS and is permitted at all times.",

    introduction:
      "Players are responsible for designing and defending their own bases. Raiding is available 24 hours a day and may occur whether defenders are online or offline.",

    rules: [
      {
        id: "r-01",

        title: "Raiding",

        summary:
          "Bases may be raided at any time. Online and offline raiding are both permitted.",

        rationale:
          "Players should build and defend their bases with the understanding that they can be attacked at any time.",

        permitted: [
          "Online raiding.",
          "Offline raiding.",
          "Destroying structures required to gain entry.",
          "Stealing loot discovered during a raid.",
        ],

        prohibited: [
          "Reporting a raid solely because it occurred while defenders were offline.",
        ],

        notes: [
          "There are no raid windows on NGS.",
          "Base security is the responsibility of the owner.",
        ],

        penalties: [
          "None. Raiding is an intended gameplay mechanic.",
        ],

        related: [
          "b-02",
          "c-02",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Offline raiding alone is never a rule violation.",
          ],

          sop: [
            "Reject reports based solely on raid timing.",
          ],
        },
      },

      {
        id: "r-02",

        title: "Property Destruction",

        summary:
          "Only destroy structures that are reasonably necessary to complete or defend a raid.",

        rationale:
          "Raiding should focus on gaining entry and obtaining loot rather than destroying a base for the sole purpose of ruining another player's progress.",

        permitted: [
          "Destroying walls or gates required to continue a raid.",
          "Removing defensive structures that prevent further progression.",
        ],

        prohibited: [
          "Destroying structures with no gameplay purpose once the raid has concluded.",
          "Returning solely to continue unnecessary destruction.",
        ],

        notes: [
          "Reasonable destruction is expected during raids.",
          "Staff will consider whether the damage had a genuine gameplay purpose.",
        ],

        penalties: [
          "Warnings or temporary bans depending on severity.",
        ],

        related: [
          "r-01",
          "r-03",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Distinguish legitimate raid progression from griefing.",
          ],

          sop: [
            "Review the entire raid rather than isolated clips.",
          ],
        },
      },

      {
        id: "r-03",

        title: "Abandoned Bases",

        summary:
          "Abandoned bases may only be treated as abandoned after the flag has been removed or has naturally despawned.",

        rationale:
          "Players should not lose their base simply because they have been inactive for a short period.",

        permitted: [
          "Raiding an abandoned base once the flag has been removed.",
          "Salvaging remaining structures after the base has naturally expired.",
        ],

        prohibited: [
          "Claiming a base is abandoned while its flag remains active.",
          "Using 'abandoned' as justification for griefing an active base.",
        ],

        notes: [
          "The presence of an active flag indicates that the base is still maintained.",
        ],

        penalties: [
          "Warnings or further disciplinary action depending on the circumstances.",
        ],

        related: [
          "r-02",
          "b-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Use the flag state as the primary indicator of whether a base is abandoned.",
          ],

          sop: [
            "Confirm the flag status before taking enforcement action.",
          ],
        },
      },
    ],
  },

  {
    id: "vehicles",

        title: "Vehicles",

    subtitle: "Rules covering vehicle ownership, theft and limits.",

    icon: "car",

    colour: "#2563eb",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "vehicles",
      "cars",
      "helicopters",
      "ownership",
      "theft",
      "storage",
    ],

    description:
      "Vehicles are valuable assets that are intended to be used rather than permanently stockpiled.",

    introduction:
      "Vehicles play an important role in survival, logistics and raiding. Ownership is determined through gameplay rather than administrative protection.",

    rules: [
      {
        id: "v-01",

        title: "Vehicle Ownership",

        summary:
          "Vehicles belong to the player or group that currently possesses them. Ownership may change through normal gameplay.",

        rationale:
          "Vehicles are intended to create meaningful conflict and reward successful raids or thefts.",

        permitted: [
          "Claiming an unowned vehicle.",
          "Stealing an unlocked vehicle.",
          "Taking ownership of a vehicle after legitimately obtaining both the vehicle and its key.",
        ],

        prohibited: [
          "Requesting staff to return a legitimately stolen vehicle.",
          "Claiming permanent ownership after losing possession through gameplay.",
        ],

        notes: [
          "Vehicle ownership is determined by gameplay, not by who found the vehicle first.",
        ],

        penalties: [
          "None. Legitimate vehicle theft is an intended gameplay mechanic.",
        ],

        related: [
          "v-02",
          "r-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Ownership transfers through legitimate gameplay.",
          ],

          sop: [
            "Do not restore legitimately stolen vehicles.",
          ],
        },
      },

      {
        id: "v-02",

        title: "Vehicle Limits",

        summary:
          "Each base may store a maximum of two land vehicles and one helicopter.",

        rationale:
          "Vehicle limits encourage circulation across the map and prevent large groups from monopolising available vehicles.",

        permitted: [
          "Owning up to two land vehicles.",
          "Owning one helicopter.",
        ],

        prohibited: [
          "Exceeding the vehicle limit at a single base.",
        ],

        notes: [
          "Additional vehicles should be relocated or surrendered before enforcement action becomes necessary.",
        ],

        penalties: [
          "Excess vehicles may be removed.",
          "Repeated violations may result in disciplinary action.",
        ],

        related: [
          "v-03",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Count only operational vehicles located at the base.",
          ],

          sop: [
            "Warn first where practical before removing excess vehicles.",
          ],
        },
      },

      {
        id: "v-03",

        title: "Vehicle Hoarding",

        summary:
          "Vehicles must not be stored solely to deny access to other players.",

        rationale:
          "Vehicles are intended to remain in active circulation rather than being hidden indefinitely.",

        permitted: [
          "Using vehicles for transport.",
          "Using vehicles during raids or base operations.",
        ],

        prohibited: [
          "Keeping vehicles purely as storage.",
          "Keeping vehicles purely as decoys.",
          "Collecting vehicles without intending to use them.",
        ],

        notes: [
          "Unused vehicles may be removed after approximately 72 hours.",
        ],

        penalties: [
          "Inactive vehicles may be removed without compensation.",
        ],

        related: [
          "v-02",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Look for a pattern of deliberate hoarding rather than isolated inactivity.",
          ],

          sop: [
            "Confirm inactivity before removal.",
          ],
        },
      },
    ],
  },

  {
    id: "groups",

    title: "Groups",

    subtitle: "Rules governing groups, alliances and cooperation.",

    icon: "users",

    colour: "#10b981",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "groups",
      "team",
      "alliance",
      "party",
      "members",
      "limit",
    ],

    description:
      "Group limits ensure balanced gameplay while allowing diplomacy and temporary agreements.",

    introduction:
      "Players may cooperate with others, but organised combat groups are limited in size to preserve fair PvP.",

    rules: [

              {
        id: "gr-01",

        title: "Group Size",

        summary:
          "Groups are limited to a maximum of six players.",

        rationale:
          "A group limit helps maintain balanced PvP while still allowing meaningful teamwork and organised base building.",

        permitted: [
          "Playing as a solo survivor.",
          "Playing in groups of up to six players.",
          "Changing group members over time.",
        ],

        prohibited: [
          "Operating as a permanent group larger than six players.",
          "Splitting into multiple groups purely to bypass the group limit.",
        ],

        notes: [
          "The group limit applies at all times unless an official NGS event specifically states otherwise.",
        ],

        penalties: [
          "Warnings, temporary suspensions or further disciplinary action depending on the circumstances.",
        ],

        related: [
          "gr-02",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Look for evidence of an organised and persistent group rather than isolated encounters.",
          ],

          sop: [
            "Gather sufficient evidence before determining that a group exceeds the limit.",
          ],
        },
      },

      {
        id: "gr-02",

        title: "Alliances",

        summary:
          "Non-aggression agreements are permitted, but alliances must not be used to bypass the group limit.",

        rationale:
          "Diplomacy is an important part of survival, but alliances must not function as oversized combat groups.",

        permitted: [
          "Agreeing not to attack another group.",
          "Trading with other groups.",
          "Sharing information outside active combat.",
        ],

        prohibited: [
          "Combining multiple groups to exceed the six-player combat limit.",
          "Conducting raids together while exceeding the group limit.",
          "Providing combat support that causes participating players to exceed the limit.",
          "Looting together while exceeding the group limit.",
        ],

        notes: [
          "Alliances may be formed or broken at any time.",
          "Betrayal is a legitimate gameplay mechanic.",
        ],

        penalties: [
          "Warnings or temporary bans depending on severity.",
        ],

        related: [
          "gr-01",
          "c-03",
          "r-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Temporary diplomacy is acceptable.",
            "Coordinated combat, raiding or looting beyond six players is not.",
          ],

          sop: [
            "Review all available evidence before determining that an alliance exceeded the player limit.",
          ],
        },
      },
    ],
  },

  {
    id: "trading",

    title: "Trading",

    subtitle: "Rules covering player trading and the Black Market.",

    icon: "life-buoy",

    colour: "#14b8a6",

    version: "1.0.0",

    lastUpdated: "2026-07-24",

    searchKeywords: [
      "trade",
      "trading",
      "black market",
      "merchant",
      "safe zone",
    ],

    description:
      "Trading is entirely player-driven. Every transaction carries an element of risk.",

    introduction:
      "NGS does not operate traditional safe-zone traders. Trading is a player decision and should always be approached with caution.",

    rules: [
      {
        id: "t-01",

        title: "Player Trading",

        summary:
          "Players may trade with anyone, but all trades are conducted entirely at their own risk.",

        rationale:
          "Removing administrative protection keeps trading consistent with the survival-focused nature of the server.",

        permitted: [
          "Trading items with other players.",
          "Negotiating prices.",
          "Using player-created trading locations.",
        ],

        prohibited: [
          "Requesting staff compensation because a trade went wrong.",
        ],

        notes: [
          "There is no safe-zone protection during trades.",
          "Trust is part of the gameplay experience.",
        ],

        penalties: [
          "None. Failed trades are an intended gameplay outcome.",
        ],

        related: [
          "c-01",
          "t-02",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "Do not intervene in legitimate trade disputes.",
          ],

          sop: [
            "Only investigate where another rule may have been broken.",
          ],
        },
      },

      {
        id: "t-02",

        title: "Black Market",

        summary:
          "The Black Market is a gameplay location, not a safe zone.",

        rationale:
          "Travelling to the Black Market should involve meaningful risk and player interaction.",

        permitted: [
          "Buying and selling through the Black Market.",
          "Travelling to and from the Black Market.",
        ],

        prohibited: [
          "Assuming the Black Market is protected.",
          "Requesting staff intervention after legitimate PvP near the Black Market.",
        ],

        notes: [
          "Players should remain alert when visiting the Black Market.",
        ],

        penalties: [
          "None. PvP around the Black Market follows the normal combat rules.",
        ],

        related: [
          "c-01",
          "t-01",
        ],

        history: [
          {
            version: "1.0.0",
            date: "2026-07-24",
            changes: [
              "Initial release.",
            ],
          },
        ],

        staff: {
          interpretation: [
            "The Black Market has no special PvP protection unless announced for an official event.",
          ],

          sop: [
            "Handle incidents using the standard combat rules.",
          ],
        },
      },
    ],
  },
];