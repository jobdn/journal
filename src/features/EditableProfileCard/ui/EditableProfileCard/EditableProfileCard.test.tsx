import { renderWithProviders } from "shared/lib/tests";
import { EditableProfileCard } from "./EditableProfileCard";
import userEvent from "@testing-library/user-event";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { server } from "shared/lib/tests";
import { rest } from "msw";
import { api } from "shared/api/api";

const profileData = {
  id: "1",
  name: "Даня",
  lastname: "Writerev",
  age: 212,
  currency: "USD",
  country: "USA",
  city: "Moscow3",
  username: "",
};

const newProfileData = {
  id: "1",
  name: "Danila",
  lastname: "Pisarev",
};

beforeEach(async () => {
  server.use(
    rest.get("http://localhost:8000/profile/1", (req, res, ctx) => {
      return res(ctx.json(profileData));
    })
  );

  renderWithProviders(<EditableProfileCard id="1" />, options);
  // Wait for loader disappears from dom
  await waitForElementToBeRemoved(screen.queryByTestId("profile-loader"));
});

const options = {
  initialStore: { user: { userData: { id: "1" } } },
};

describe("EditableProfileCard.test", () => {
  test("type name and lastname and then save", async () => {
    const nameInput = screen.getByTestId("name");
    expect(nameInput).toHaveValue(profileData.name);
    const lastnameInput = screen.getByTestId("lastname");
    expect(lastnameInput).toHaveValue(profileData.lastname);

    const editButton = screen.getByTestId("Button edit");
    await userEvent.click(editButton);
    const clearButton = screen.getByTestId("Button clear");
    expect(clearButton).toBeInTheDocument();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, newProfileData.name);
    expect(nameInput).toHaveValue(newProfileData.name);

    await userEvent.clear(lastnameInput);
    await userEvent.type(lastnameInput, newProfileData.lastname);
    expect(lastnameInput).toHaveValue(newProfileData.lastname);
    const mockAxios = jest.spyOn(api, "put");

    server.use(
      rest.put("http://localhost:8000/profile/1", (req, res, ctx) => {
        return res(
          ctx.json({
            ...profileData,
            name: nameInput.nodeValue,
            lastname: lastnameInput.nodeValue,
          })
        );
      })
    );
    const saveButton = screen.getByTestId("Button save");
    expect(saveButton).toBeInTheDocument();
    await userEvent.click(saveButton);
    expect(mockAxios).toHaveBeenCalled();

    await waitFor(() =>
      expect(screen.queryByTestId("profile-loader")).not.toBeInTheDocument()
    );

    expect(nameInput).toHaveValue(newProfileData.name);
  });

  test("delete changed values when click to clear button", async () => {
    const nameInput = screen.getByTestId("name");
    const lastnameInput = screen.getByTestId("lastname");

    const editButton = screen.getByTestId("Button edit");
    await userEvent.click(editButton);
    const clearButton = screen.getByTestId("Button clear");
    expect(clearButton).toBeInTheDocument();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, newProfileData.name);
    expect(nameInput).toHaveValue(newProfileData.name);

    await userEvent.clear(lastnameInput);
    await userEvent.type(lastnameInput, newProfileData.lastname);
    expect(lastnameInput).toHaveValue(newProfileData.lastname);

    await userEvent.click(clearButton);

    expect(nameInput).toHaveValue(profileData.name);
    expect(lastnameInput).toHaveValue(profileData.lastname);
    expect(clearButton).not.toBeInTheDocument();
    expect(screen.getByTestId("Button edit")).toBeInTheDocument();
  });
});
