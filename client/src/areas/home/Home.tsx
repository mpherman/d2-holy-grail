import * as React from "react";
import { LoginForm } from "./LoginForm";
import { LeaderboardButton } from "../../common/components/LeaderboardButton";
import styled from "../../TypedStyledComponents";

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <LoginForm />

        <LeftSideButtons>
          <LeaderboardButton />
        </LeftSideButtons>
      </div>
    );
  }
}

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing.unit}px;
  bottom: ${p => p.theme.spacing.unit}px;
`;
