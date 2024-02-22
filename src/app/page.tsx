"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import { teams, computeTeamScore } from "./data/teams";
import { players, computePlayerScore } from "./data/players";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="leaderboard"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="leaderboard" title="Leaderboard">
        <Table striped>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Rank Change</th>
              <th>Team Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {...teams.map((team, i) => {
              return (
                <tr key={team.name}>
                  <td>#{i + 1}</td>
                  <td>-</td>
                  <td>{team.name}</td>
                  <td>{computeTeamScore(team)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="rosters" title="Rosters">
        {...teams.map((team, i) => {
          return (
            <Card key={team.name} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>
                  {team.players.map((p) => p.name).join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Tab>
      <Tab eventKey="scores" title="Scores">
        <Table striped>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Rank Change</th>
              <th>Player Name</th>
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
            {...players.map((player, i) => {
              return (
                <tr key={player.name}>
                  <td>#{i + 1}</td>
                  <td>-</td>
                  <td>{player.name}</td>
                  <td>{computePlayerScore(player)}</td>
                  <td>
                    {player.weeks.reduce((acc, w) => acc + w.teamImmunity, 0)}
                  </td>
                  <td>
                    {player.weeks.reduce(
                      (acc, w) => acc + w.individualImmunity,
                      0
                    )}
                  </td>
                  <td>
                    {player.weeks.reduce((acc, w) => acc + w.advantage, 0)}
                  </td>
                  <td>
                    {player.weeks.reduce((acc, w) => acc + w.idolFound, 0)}
                  </td>
                  <td>
                    {player.weeks.reduce((acc, w) => acc + w.idolUsed, 0)}
                  </td>
                  <td>
                    {player.weeks.reduce((acc, w) => acc + w.placement, 0)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
