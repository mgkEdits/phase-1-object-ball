function gameObject(){
 return  {
    home:{
        teamname: " Brooklyn Nets",
        colors: " Black, White",
        players:{
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
              },
              "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
              },
              "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
              },
              "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
              },
              "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
              },
        }

    },
    away:{
        teamname: "Charlotte Hornets",
        colors: " Turquoise, Purple",
        players:{
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
              },
              "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
              },
              "DeSagna Diop	": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
              },
              "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
              },
              "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
              }
        }
    }
}
}

const game = gameObject();
// Function to get the number of points scored by a player
function numPointsScored(playerName) {
  for (const team of Object.values(game)) {
    const player = team.players[playerName];
    if (player) {
      return player.points;
      console.log(player.points)
    }
  }
  return null; // Player not found
}

// Function to get the colors of a team
function teamColors(teamName) {
  for (const team of Object.values(game)) {
    if (team.teamname === teamName) {
      return team.colors.split(", ");
    }
  }
  return null; // Team not found
}

// Function to get an array of team names
function teamNames() {
  return Object.values(game).map((team) => team.teamname);
}

// Function to get an array of player jersey numbers for a team
function playerNumbers(teamName) {
  for (const team of Object.values(game)) {
    if (team.teamname === teamName) {
      return Object.values(team.players).map((player) => player.number);
    }
  }
  return null; // Team not found
}

// Function to get player stats by name
function playerStats(playerName) {
  for (const team of Object.values(game)) {
    const player = team.players[playerName];
    if (player) {
      return player;
    }
  }
  return null; // Player not found
}

// Function to find the player with the largest shoe size and return their rebounds
function bigShoeRebounds() {
  let largestShoeSize = -1;
  let playerWithLargestShoeSize = null;

  for (const team of Object.values(game)) {
    for (const [playerName, player] of Object.entries(team.players)) {
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoeSize = playerName;
      }
    }
  }

  if (playerWithLargestShoeSize) {
    return game.home.players[playerWithLargestShoeSize].rebounds;
  }
  return null; // No player found
}

// Function to find the player with the most points
function mostPointsScored() {
  let mostPoints = -1;
  let playerWithMostPoints = null;

  for (const team of Object.values(game)) {
    for (const [playerName, player] of Object.entries(team.players)) {
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  }

  return playerWithMostPoints;
}

// Function to find the team with the most points
function winningTeam() {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  for (const [_, player] of Object.entries(game.home.players)) {
    homeTeamPoints += player.points;
  }

  for (const [_, player] of Object.entries(game.away.players)) {
    awayTeamPoints += player.points;
  }

  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamname;
  } else if (awayTeamPoints > homeTeamPoints) {
    return game.away.teamname;
  } else {
    return "It's a tie!";
  }
}

// Function to find the player with the longest name
function playerWithLongestName() {
  let longestNameLength = -1;
  let playerWithLongestName = null;

  for (const team of Object.values(game)) {
    for (const [playerName, _] of Object.entries(team.players)) {
      if (playerName.length > longestNameLength) {
        longestNameLength = playerName.length;
        playerWithLongestName = playerName;
      }
    }
  }

  return playerWithLongestName;
}
// Function to check if the player with the longest name had the most steals
function doesLongNameStealATon() {
  const playerWithLongestName = playerWithLongestName();
  const playerWithMostSteals = mostSteals();

  return playerWithLongestName === playerWithMostSteals;
}

// Function to find the player with the most steals
function mostSteals() {
  let mostStealsCount = -1;
  let playerWithMostSteals = null;

  for (const team of Object.values(game)) {
    for (const [playerName, player] of Object.entries(team.players)) {
      if (player.steals > mostStealsCount) {
        mostStealsCount = player.steals;
        playerWithMostSteals = playerName;
      }
    }
  }

  return playerWithMostSteals;
}



