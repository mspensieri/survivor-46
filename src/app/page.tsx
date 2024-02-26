"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";

import { Player } from "./data/players";
import { computePlayerScore, weeks, Points } from "./data/weeks";
import { getTeamRankings, getPlayerRankings } from "./data/rankings";
import Navbar from "react-bootstrap/esm/Navbar";
import { Container } from "react-bootstrap";

const currentWeek = weeks.length;
const teamRankings = getTeamRankings();
const playerRankings = getPlayerRankings();

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

function generateWeekScores(weekNumber: number) {
  const thisWeekRankings = playerRankings[weekNumber] || [];
  const lastWeekRankings = playerRankings[weekNumber - 1];

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
              <td>{getBadge(thisWeekScore.player)}</td>
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
  const thisWeekRankings = teamRankings[currentWeek - 1] || [];

  return (
    <Row>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand>
          <Image
            src="/torch.webp"
            alt="survivor logo"
            width={30}
            height={30}
            style={{ display: "inline" }}
          ></Image>
          Survivor Pool Season 46
        </Navbar.Brand>
      </Navbar>
      <Tabs
        defaultActiveKey="leaderboard"
        id="uncontrolled-tab-example"
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
              {generateWeekLeaderboard(0)}
            </Tab>
            <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
              {generateWeekLeaderboard(1)}
            </Tab>
            <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
              {generateWeekLeaderboard(2)}
            </Tab>
            <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
              {generateWeekLeaderboard(3)}
            </Tab>
            <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
              {generateWeekLeaderboard(4)}
            </Tab>
            <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
              {generateWeekLeaderboard(5)}
            </Tab>
            <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
              {generateWeekLeaderboard(6)}
            </Tab>
            <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
              {generateWeekLeaderboard(7)}
            </Tab>
            <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
              {generateWeekLeaderboard(8)}
            </Tab>
            <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
              {generateWeekLeaderboard(9)}
            </Tab>
            <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
              {generateWeekLeaderboard(10)}
            </Tab>
            <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
              {generateWeekLeaderboard(11)}
            </Tab>
            <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
              {generateWeekLeaderboard(12)}
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
        <Tab eventKey="scores" title="Scores">
          <Tabs
            defaultActiveKey={currentWeek}
            id="week-selector-scores"
            className="mb-3"
          >
            <Tab eventKey="1" title="Week 1">
              {generateWeekScores(0)}
            </Tab>
            <Tab eventKey="2" title="Week 2" disabled={currentWeek < 2}>
              {generateWeekScores(1)}
            </Tab>
            <Tab eventKey="3" title="Week 3" disabled={currentWeek < 3}>
              {generateWeekScores(2)}
            </Tab>
            <Tab eventKey="4" title="Week 4" disabled={currentWeek < 4}>
              {generateWeekScores(3)}
            </Tab>
            <Tab eventKey="5" title="Week 5" disabled={currentWeek < 5}>
              {generateWeekScores(4)}
            </Tab>
            <Tab eventKey="6" title="Week 6" disabled={currentWeek < 6}>
              {generateWeekScores(5)}
            </Tab>
            <Tab eventKey="7" title="Week 7" disabled={currentWeek < 7}>
              {generateWeekScores(6)}
            </Tab>
            <Tab eventKey="8" title="Week 8" disabled={currentWeek < 8}>
              {generateWeekScores(7)}
            </Tab>
            <Tab eventKey="9" title="Week 9" disabled={currentWeek < 9}>
              {generateWeekScores(8)}
            </Tab>
            <Tab eventKey="10" title="Week 10" disabled={currentWeek < 10}>
              {generateWeekScores(9)}
            </Tab>
            <Tab eventKey="11" title="Week 11" disabled={currentWeek < 11}>
              {generateWeekScores(10)}
            </Tab>
            <Tab eventKey="12" title="Week 12" disabled={currentWeek < 12}>
              {generateWeekScores(11)}
            </Tab>
            <Tab eventKey="13" title="Week 13" disabled={currentWeek < 13}>
              {generateWeekScores(12)}
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </Row>
  );
}

export default UncontrolledExample;
