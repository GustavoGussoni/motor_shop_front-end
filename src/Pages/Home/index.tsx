import React from "react";
import { Button } from "../../Components/Button";

export const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <ul className="flex flexrow gap-2 flex-wrap">
        <Button size="big" variant="grey1" text="teste" />
        <Button size="medium" variant="grey6" text="text button" />
        <Button size="medium" variant="greyDisable" text="text button" />
        <Button size="medium" variant="brand1" text="text button" />
        <Button size="medium" variant="brand4" text="text button" />
        <Button size="medium" variant="light" text="text button" />
        <Button size="medium" variant="outline1" text="text button" />
        <Button size="big" variant="outline2" text="text button" />
        <Button size="medium" variant="outline3" text="text button" />
        <Button size="medium" variant="link" text="text button" />
        <Button size="medium" variant="alert" text="text button" />
        <Button size="medium" variant="success" text="text button" />
        <Button size="medium" variant="brandDisable" text="text button" />
      </ul>
    </React.Fragment>
  );
};
