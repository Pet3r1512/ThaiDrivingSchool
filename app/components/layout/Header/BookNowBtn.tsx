import { Button } from "~/components/ui/Button";

export default function BookNowBtn({
  size = "sm",
}: {
  size?: "sm" | "md" | "lg" | undefined;
}) {
  return <Button size={size}>Book a Lesson</Button>;
}
