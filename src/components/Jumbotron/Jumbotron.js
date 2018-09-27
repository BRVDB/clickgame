//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
	<header className = "header">
		<h1>12 Shades of Gray: A clicky game</h1>
		<h2>Click on a gray to earn a point, but don't click the same gray twice or YOU'LL LOSE</h2>
		<h2><ul>
          <li className="memory">Test Your Memory</li>
          <li className="score">Score: {props.score}</li>
        </ul>
		</h2>
	</header>
);


export default Jumbotron;