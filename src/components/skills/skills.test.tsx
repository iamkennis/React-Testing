import { render, screen } from "@testing-library/react";
import Skill from "./skills";

describe("Skills", () => {
  const skills = ["React", "Vue", "Solid"];

  test("render correctly", () => {
    render(<Skill skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render lists items correctly", () => {
    render(<Skill skills={skills} />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(skills.length);
  });

  test("render login button correctly", () => {
    render(<Skill skills={skills} />);
    const loginElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginElement).toBeInTheDocument();
  });

  test("Start learning button correctly", () => {
    render(<Skill skills={skills} />);
    const startLearnElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearnElement).not.toBeInTheDocument();
  });

  test("Start learning button is eventually display", async () => {
    render(<Skill skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
