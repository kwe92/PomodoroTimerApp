import React from "react";
import { Title } from "./TitleStyles";

export default function AppTitle({ title }: { title: string }) {
  return <Title>{title}</Title>;
}
