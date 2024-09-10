import Image from "next/image";
import styles from "./page.module.css";
import { Button, Paragraph, Tag, Title } from "@/components";

export default function Home() {
  return (
    <main>
      <Title tag={"h2"}>LOL</Title>
      <Button appearance={"primary"} arrow="right">
        Кнопка 1
      </Button>
      <Button appearance={"ghost"} arrow="down">
        Кнопка 2
      </Button>
      <Tag size={"small"} color="red" href="www.google.com">
        Hello
      </Tag>
      <Tag size={"medium"} color="ghost" href="www.google.com">
        Hello
      </Tag>
      <Tag size={"small"} color="primary" href="www.google.com">
        Hello
      </Tag>
    </main>
  );
}
