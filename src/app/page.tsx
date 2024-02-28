"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/esm/Navbar";

import { Player } from "./data/players";
import { computePlayerScore, weeks, Points } from "./data/weeks";
import { getTeamRankings, getPlayerRankings } from "./data/rankings";
import { teams } from "./data/teams";

const currentWeek = weeks.length;
const teamRankings = getTeamRankings();
const playerRankings = getPlayerRankings();

const styles = {
  badge: { width: "90px" },
  indicatorGreen: {
    fontSize: "10pt",
    color: "green",
  },
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "green",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "red",
  },
  cardNumber: {
    fontSize: "80pt",
  },
  bold: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  rulesList: { listStyleType: "disc", lineHeight: 2 },
  firstListItem: {
    marginTop: "10px",
  },
};

function getBadge(player: Player, weekNumber: number) {
  if (
    typeof player.eliminatedWeek !== "undefined" &&
    weekNumber >= player.eliminatedWeek
  ) {
    if (player.status === "eliminated") {
      return (
        <Badge bg="danger" style={styles.badge}>
          Eliminated
        </Badge>
      );
    } else if (player.status === "jury") {
      return (
        <Badge bg="info" style={styles.badge}>
          Jury
        </Badge>
      );
    }
  } else if (player.status === "winner" && weekNumber === 12) {
    return (
      <Badge bg="success" style={styles.badge}>
        Winner
      </Badge>
    );
  }

  return (
    <Badge bg="secondary" style={styles.badge}>
      Active
    </Badge>
  );
}

function generateLeaderboardForWeek(weekNumber: number) {
  const thisWeekRankings = teamRankings[weekNumber] || [];
  const lastWeekRankings = teamRankings[weekNumber - 1];

  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {...thisWeekRankings.map((thisWeekScore) => {
          const lastWeekScore = lastWeekRankings?.find(
            (r) => r.team === thisWeekScore.team
          );

          function getScore() {
            if (lastWeekScore) {
              if (thisWeekScore.total > lastWeekScore.total) {
                return (
                  <td>
                    {thisWeekScore.total}{" "}
                    <span style={styles.indicatorGreen}>
                      (+{thisWeekScore.total - lastWeekScore.total})
                    </span>
                  </td>
                );
              } else {
                return <td>{thisWeekScore.total || "-"}</td>;
              }
            } else {
              return <td>{thisWeekScore.total || "-"}</td>;
            }
          }

          let rank;
          if (lastWeekScore) {
            if (thisWeekScore.rank < lastWeekScore.rank) {
              rank = (
                <td>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲ {lastWeekScore.rank - thisWeekScore.rank})
                  </span>
                </td>
              );
            } else if (thisWeekScore.rank > lastWeekScore.rank) {
              rank = (
                <td>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorRed}>
                    (▼ {thisWeekScore.rank - lastWeekScore.rank})
                  </span>
                </td>
              );
            } else {
              rank = <td>#{thisWeekScore.rank + 1}</td>;
            }
          } else {
            rank = <td>#{thisWeekScore.rank + 1}</td>;
          }

          return (
            <tr key={thisWeekScore.team.name}>
              {rank}
              <td>{thisWeekScore.team.name}</td>
              <td>{getScore()}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function generatePlayerScoresForWeek(weekNumber: number) {
  const thisWeekRankings = playerRankings[weekNumber] || [];
  const lastWeekRankings = playerRankings[weekNumber - 1];

  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player Name</th>
          <th>Total Points</th>
          <th>Teams</th>
          <th>Status</th>
          <th>Immunity (team)</th>
          <th>Immunity (indiv.)</th>
          <th>Advantage</th>
          <th>Idols Found</th>
          <th>Votes Nullified</th>
          <th>Jury Placement</th>
        </tr>
      </thead>
      <tbody>
        {...thisWeekRankings.map((thisWeekScore) => {
          const lastWeekScore = lastWeekRankings?.find(
            (p) => p.player === thisWeekScore.player
          );

          function getScore(scoreKey: keyof Points | "total") {
            const thisWeekPoints =
              (scoreKey === "total"
                ? thisWeekScore.total
                : thisWeekScore.points[scoreKey]) || 0;
            const lastWeekPoints =
              (scoreKey === "total"
                ? lastWeekScore?.total
                : lastWeekScore?.points[scoreKey]) || 0;

            if (lastWeekScore) {
              if (thisWeekPoints > lastWeekPoints) {
                return (
                  <td>
                    {thisWeekPoints}{" "}
                    <span style={styles.indicatorGreen}>
                      (+{thisWeekPoints - lastWeekPoints})
                    </span>
                  </td>
                );
              } else {
                return <td>{thisWeekPoints || "-"}</td>;
              }
            } else {
              return <td>{thisWeekPoints || "-"}</td>;
            }
          }

          let rank;

          if (lastWeekScore) {
            if (thisWeekScore.rank < lastWeekScore.rank) {
              rank = (
                <td>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲ {lastWeekScore.rank - thisWeekScore.rank})
                  </span>
                </td>
              );
            } else if (thisWeekScore.rank > lastWeekScore.rank) {
              rank = (
                <td>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorRed}>
                    (▼ {thisWeekScore.rank - lastWeekScore.rank})
                  </span>
                </td>
              );
            } else {
              rank = <td>#{thisWeekScore.rank + 1}</td>;
            }
          } else {
            rank = <td>#{thisWeekScore.rank + 1}</td>;
          }

          return (
            <tr key={thisWeekScore.player.name}>
              {rank}
              <td>{thisWeekScore.player.name}</td>
              <td>{getScore("total")}</td>
              <td>
                {teams.reduce((acc, curr) => {
                  return curr.players.includes(thisWeekScore.player)
                    ? acc + 1
                    : acc;
                }, 0)}
              </td>
              <td>{getBadge(thisWeekScore.player, weekNumber)}</td>
              <td>{getScore("teamImmunity")}</td>
              <td>{getScore("individualImmunity")}</td>
              <td>{getScore("advantage")}</td>
              <td>{getScore("idolFound")}</td>
              <td>{getScore("voteNullified")}</td>
              <td>{getScore("placement")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function UncontrolledExample() {
  const thisWeekRankings = teamRankings[currentWeek - 1] || [];

  return (
    <Row>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand>
          <img
            src="torch.webp"
            alt="survivor logo"
            width={30}
            height={30}
            style={{ display: "inline" }}
          ></img>
          Survivor Pool Season 46
        </Navbar.Brand>
      </Navbar>
      <Tabs
        defaultActiveKey="leaderboard"
        id="uncontrolled-tab-example"
        variant="underline"
        className="mb-3"
        style={{ marginLeft: "15px" }}
      >
        <Tab eventKey="leaderboard" title="Leaderboard">
          <Tabs
            defaultActiveKey={currentWeek}
            id="week-selector-leaderboard"
            className="mb-3"
          >
            <Tab eventKey="1" title="Week 1">
              {generateLeaderboardForWeek(0)}
            </Tab>
            <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
              {generateLeaderboardForWeek(1)}
            </Tab>
            <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
              {generateLeaderboardForWeek(2)}
            </Tab>
            <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
              {generateLeaderboardForWeek(3)}
            </Tab>
            <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
              {generateLeaderboardForWeek(4)}
            </Tab>
            <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
              {generateLeaderboardForWeek(5)}
            </Tab>
            <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
              {generateLeaderboardForWeek(6)}
            </Tab>
            <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
              {generateLeaderboardForWeek(7)}
            </Tab>
            <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
              {generateLeaderboardForWeek(8)}
            </Tab>
            <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
              {generateLeaderboardForWeek(9)}
            </Tab>
            <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
              {generateLeaderboardForWeek(10)}
            </Tab>
            <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
              {generateLeaderboardForWeek(11)}
            </Tab>
            <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
              {generateLeaderboardForWeek(12)}
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="teams" title="Teams">
          <Row>
            {...thisWeekRankings.map((teamScore) => {
              return (
                <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title style={styles.cardNumber}>
                        {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                      </Card.Title>
                      <Card.Title>{teamScore.team.name}</Card.Title>
                      {...[...teamScore.team.players]
                        .sort(
                          (a, b) =>
                            computePlayerScore(b, currentWeek, "total") -
                            computePlayerScore(a, currentWeek, "total")
                        )
                        .map((player, j) => {
                          return (
                            <Card.Text key={j}>
                              {player === teamScore.team.winner ? (
                                <span style={styles.indicatorGreenLarge}>
                                  [W]{" "}
                                </span>
                              ) : (
                                ""
                              )}
                              {player.name} (
                              {computePlayerScore(player, currentWeek, "total")}
                              )
                            </Card.Text>
                          );
                        })}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Tab>
        <Tab eventKey="players" title="Players">
          <Tabs
            defaultActiveKey={currentWeek}
            id="week-selector-players"
            className="mb-3"
          >
            <Tab eventKey="1" title="Week 1">
              {generatePlayerScoresForWeek(0)}
            </Tab>
            <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
              {generatePlayerScoresForWeek(1)}
            </Tab>
            <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
              {generatePlayerScoresForWeek(2)}
            </Tab>
            <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
              {generatePlayerScoresForWeek(3)}
            </Tab>
            <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
              {generatePlayerScoresForWeek(4)}
            </Tab>
            <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
              {generatePlayerScoresForWeek(5)}
            </Tab>
            <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
              {generatePlayerScoresForWeek(6)}
            </Tab>
            <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
              {generatePlayerScoresForWeek(7)}
            </Tab>
            <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
              {generatePlayerScoresForWeek(8)}
            </Tab>
            <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
              {generatePlayerScoresForWeek(9)}
            </Tab>
            <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
              {generatePlayerScoresForWeek(10)}
            </Tab>
            <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
              {generatePlayerScoresForWeek(11)}
            </Tab>
            <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
              {generatePlayerScoresForWeek(12)}
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="rules" title="Rules" className="rules">
          The score per team is the sum of the scores of all players on the team
          across all weeks of play. In the event of a tie, the team whose
          predicted winner made it farthest in the season will win the pool.
          <br />
          <br /> The scores per player are calculated according to the following
          rules:
          <ul style={styles.rulesList}>
            <li style={styles.firstListItem}>
              <span style={styles.bold}>Immunity (team):</span> If a player is
              part of a team winning immunity: they receive 1 point
            </li>
            <li>
              <span style={styles.bold}>Immunity (indiv.):</span> If a player
              wins individual immunity: they receive 2 points
            </li>
            <li>
              <span style={styles.bold}>Advantage:</span> If a player receives
              an advantage (from a journey, a random twist, etc.): they receive
              1 point
            </li>
            <li>
              <span style={styles.bold}>Idols Found:</span> If a player finds a
              hidden immunity idol: they receive 2 points
            </li>
            <li>
              <span style={styles.bold}>Votes Nullified:</span> If a player
              properly uses an idol: they receive 1 point for every vote
              nullified
            </li>
            <li>
              <span style={styles.bold}>Jury Placement:</span> Initial jury
              members will receive 2 points, the 5th and 4th runner up get 3
              points, 3rd and 2nd runner up will receive 5 points, and the
              winner will receive 7 points. The player who wins fire will
              receive 1 extra point.{" "}
            </li>
          </ul>
        </Tab>
      </Tabs>
    </Row>
  );
}

export default UncontrolledExample;
