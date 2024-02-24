"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";

import { teams, computeTeamScore } from "./data/teams";
import { players, computePlayerScore, Player, Points } from "./data/players";
import { TabContent } from "react-bootstrap";

const currentWeek = players[0].weeks.length;

const styles = {
  badge: { width: "90px" },
  indicatorGreen: {
    fontSize: "10pt",
    color: "green",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "red",
  },
  cardNumber: {
    fontSize: "80pt",
  },
};

function getBadge(player: Player) {
  if (player.status === "active") {
    return (
      <Badge bg="secondary" style={styles.badge}>
        Active
      </Badge>
    );
  } else if (player.status === "eliminated") {
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
  } else {
    return (
      <Badge bg="success" style={styles.badge}>
        Winner
      </Badge>
    );
  }
}

function generateWeekLeaderboard(weekNumber: number) {
  const thisWeekRankings = [...teams].sort(
    (a, b) => computeTeamScore(b, weekNumber) - computeTeamScore(a, weekNumber)
  );
  const lastWeekRankings = [...teams].sort(
    (a, b) =>
      computeTeamScore(b, weekNumber - 1) - computeTeamScore(a, weekNumber - 1)
  );

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
        {...thisWeekRankings.map((team, i) => {
          function getScore() {
            const thisWeek = computeTeamScore(team, weekNumber);
            const lastWeek =
              weekNumber > 1 ? computeTeamScore(team, weekNumber - 1) : 0;

            if (weekNumber === 1) {
              return <td>{thisWeek || "-"}</td>;
            } else {
              if (thisWeek > lastWeek) {
                return (
                  <td>
                    {thisWeek}{" "}
                    <span style={styles.indicatorGreen}>
                      (+{thisWeek - lastWeek})
                    </span>
                  </td>
                );
              } else {
                return <td>{thisWeek || "-"}</td>;
              }
            }
          }

          let rank;
          if (weekNumber === 1) {
            rank = <td>#{i + 1}</td>;
          } else {
            const lastWeekIndex = lastWeekRankings.indexOf(team);
            if (i < lastWeekIndex) {
              rank = (
                <td>
                  #{i + 1}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲ {lastWeekIndex - i})
                  </span>
                </td>
              );
            } else if (i > lastWeekIndex) {
              rank = (
                <td>
                  #{i + 1}{" "}
                  <span style={styles.indicatorRed}>
                    (▼ {i - lastWeekIndex})
                  </span>
                </td>
              );
            } else {
              rank = <td>#{i + 1}</td>;
            }
          }

          return (
            <tr key={team.name}>
              {rank}
              <td>{team.name}</td>
              <td>{getScore()}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function generateWeekScores(weekNumber: number) {
  const thisWeekRankings = [...players].sort(
    (a, b) =>
      computePlayerScore(b, weekNumber, "total") -
      computePlayerScore(a, weekNumber, "total")
  );
  const lastWeekRankings = [...players].sort(
    (a, b) =>
      computePlayerScore(b, weekNumber - 1, "total") -
      computePlayerScore(a, weekNumber - 1, "total")
  );

  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player Name</th>
          <th>Status</th>
          <th>Total</th>
          <th>Team Immunity</th>
          <th>Individual Immunity</th>
          <th>Advantage</th>
          <th>Idols Found</th>
          <th>Idols Used</th>
          <th>Jury Placement</th>
        </tr>
      </thead>
      <tbody>
        {...thisWeekRankings.map((player, i) => {
          function getScore(scoreKey: keyof Points | "total") {
            const thisWeek = computePlayerScore(player, weekNumber, scoreKey);
            const lastWeek =
              weekNumber > 1
                ? computePlayerScore(player, weekNumber - 1, scoreKey)
                : 0;

            if (weekNumber === 1) {
              return <td>{thisWeek || "-"}</td>;
            } else {
              if (thisWeek > lastWeek) {
                return (
                  <td>
                    {thisWeek}{" "}
                    <span style={styles.indicatorGreen}>
                      (+{thisWeek - lastWeek})
                    </span>
                  </td>
                );
              } else {
                return <td>{thisWeek || "-"}</td>;
              }
            }
          }

          let rank;
          if (weekNumber === 1) {
            rank = <td>#{i + 1}</td>;
          } else {
            const lastWeekIndex = lastWeekRankings.indexOf(player);
            if (i < lastWeekIndex) {
              rank = (
                <td>
                  #{i + 1}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲ {lastWeekIndex - i})
                  </span>
                </td>
              );
            } else if (i > lastWeekIndex) {
              rank = (
                <td>
                  #{i + 1}{" "}
                  <span style={styles.indicatorRed}>
                    (▼ {i - lastWeekIndex})
                  </span>
                </td>
              );
            } else {
              rank = <td>#{i + 1}</td>;
            }
          }

          return (
            <tr key={player.name}>
              {rank}
              <td>{player.name}</td>
              <td>{getBadge(player)}</td>
              <td>{getScore("total")}</td>
              <td>{getScore("teamImmunity")}</td>
              <td>{getScore("individualImmunity")}</td>
              <td>{getScore("advantage")}</td>
              <td>{getScore("idolFound")}</td>
              <td>{getScore("idolUsed")}</td>
              <td>{getScore("placement")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function UncontrolledExample() {
  const thisWeekRankings = [...teams].sort(
    (a, b) => computeTeamScore(b, -1) - computeTeamScore(a, -1)
  );

  return (
    <Row>
      <Col>
        <Image
          src="https://static.wikia.nocookie.net/pokemon-survivor/images/7/74/S1_Torch.png/revision/latest?cb=20171202095656"
          alt="survivor logo"
          width={30}
          height={30}
          style={{ position: "fixed" }}
        ></Image>
        <Tabs
          defaultActiveKey="leaderboard"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ marginLeft: "40px" }}
        >
          <Tab eventKey="leaderboard" title="Leaderboard">
            <Tabs
              defaultActiveKey="overall"
              id="week-selector-leaderboard"
              className="mb-3"
            >
              <Tab eventKey="1" title="Week 1">
                {generateWeekLeaderboard(1)}
              </Tab>
              <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
                {generateWeekLeaderboard(2)}
              </Tab>
              <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
                {generateWeekLeaderboard(3)}
              </Tab>
              <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
                {generateWeekLeaderboard(4)}
              </Tab>
              <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
                {generateWeekLeaderboard(5)}
              </Tab>
              <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
                {generateWeekLeaderboard(6)}
              </Tab>
              <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
                {generateWeekLeaderboard(7)}
              </Tab>
              <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
                {generateWeekLeaderboard(8)}
              </Tab>
              <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
                {generateWeekLeaderboard(9)}
              </Tab>
              <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
                {generateWeekLeaderboard(10)}
              </Tab>
              <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
                {generateWeekLeaderboard(11)}
              </Tab>
              <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
                {generateWeekLeaderboard(12)}
              </Tab>
              <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
                {generateWeekLeaderboard(13)}
              </Tab>
              <Tab eventKey="overall" title="Overall">
                {generateWeekLeaderboard(currentWeek)}
              </Tab>
            </Tabs>
          </Tab>
          <Tab eventKey="teams" title="Teams">
            <Row>
              {...thisWeekRankings.map((team, i) => {
                return (
                  <Col key={team.name} xs={12} sm={6} md={4} lg={3}>
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title style={styles.cardNumber}>
                          {i === 0 ? "👑" : `#${i + 1}`}{" "}
                        </Card.Title>
                        <Card.Title>{team.name}</Card.Title>
                        {...[...team.players]
                          .sort(
                            (a, b) =>
                              computePlayerScore(b, currentWeek, "total") -
                              computePlayerScore(a, currentWeek, "total")
                          )
                          .map((player, i) => {
                            return (
                              <Card.Text key={i}>
                                {player.name} (
                                {computePlayerScore(
                                  player,
                                  currentWeek,
                                  "total"
                                )}
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
          <Tab eventKey="scores" title="Scores">
            <Tabs
              defaultActiveKey="overall"
              id="week-selector-scores"
              className="mb-3"
            >
              <Tab eventKey="1" title="Week 1">
                {generateWeekScores(1)}
              </Tab>
              <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
                {generateWeekScores(2)}
              </Tab>
              <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
                {generateWeekScores(3)}
              </Tab>
              <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
                {generateWeekScores(4)}
              </Tab>
              <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
                {generateWeekScores(5)}
              </Tab>
              <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
                {generateWeekScores(6)}
              </Tab>
              <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
                {generateWeekScores(7)}
              </Tab>
              <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
                {generateWeekScores(8)}
              </Tab>
              <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
                {generateWeekScores(9)}
              </Tab>
              <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
                {generateWeekScores(10)}
              </Tab>
              <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
                {generateWeekScores(11)}
              </Tab>
              <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
                {generateWeekScores(12)}
              </Tab>
              <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
                {generateWeekScores(13)}
              </Tab>
              <Tab eventKey="overall" title="Overall">
                {generateWeekScores(currentWeek)}
              </Tab>
            </Tabs>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}

export default UncontrolledExample;
