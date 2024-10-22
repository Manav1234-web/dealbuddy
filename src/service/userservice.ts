import { FormikValues } from "formik";
import { Service } from "./service";
import axios from "axios";

export class UserService extends Service {
  getUserData() {
    const userData: any = localStorage.getItem("userData");
    return JSON.parse(userData);
  }
  getUsers() {
    const users: any = localStorage.getItem("users");
    return JSON.parse(users);
  }
  async ifUserExits(email: string) {
    const users = (await this.getUsers()) || [];
    if (users?.length > 0 && email) {
      return users.find((user: any) => user.email == email);
    } else {
      return false;
    }
  }
  addUser(user: any) {
    const uuid = require("uuid");
    user.userId = uuid.v4();
    const existingUsers = this.getUsers() || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  }

  deleteUserData(data: any) {
    const existingData = this.getUserData() || [];
    if (data) {
      const index = existingData.findIndex(
        (user: any) => user.userId === data.userId && user?.id == data.id
      );
      if (index > -1) {
        existingData.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(existingData));
      }
    }
  }

  deleteUser(userToDelete: any) {
    const existingUsers = this.getUsers() || [];
    if (userToDelete) {
      const index = existingUsers.findIndex(
        (user: any) => user.userId === userToDelete.userId
      );
      if (index > -1) {
        existingUsers.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(existingUsers));
      }
    }
  }
  getUser() {
    const user: any = localStorage.getItem("loggedInUser");
    return JSON.parse(user);
  }
  setUser(user: any) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }
  logout() {
    localStorage.removeItem("loggedInUser");
  }
  updateUser(user?: FormikValues | null, userId?: any) {
    const userData = this.getUser();
    const existingUsers = this.getUsers() || [];
    const index = existingUsers.findIndex(
      (user: any) => user.userId === user.userId
    );
    if (index > -1) {
      existingUsers[index] = user;
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
  }
}
