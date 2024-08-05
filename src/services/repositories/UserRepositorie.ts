import { UserProps } from "@/types";
import { api } from "../api";

class UserRepositorie {
  static async getUsers() {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao localizar usuários:", error);
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao localizar usuário:", error);
      throw error;
    }
  }

  static async deleteUser(id: string) {
    try {
      const response = await api.delete(`/users/${id}`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      throw error;
    }
  }

  static async updateUser(id: string, bodyJson: {}) {
    try {
      const response = await api.put(`/users/${id}`, bodyJson);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao localizar usuário:", error);
      throw error;
    }
  }

  static async createUser(newUser: UserProps) {
    try {
      await api.post("/users", newUser);
      return true;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return false;
    }
  }

  static async createPdfLink(data: any) {
    try {
      const response = await api.post("/users/pdf", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.message;
    } catch (error) {
      console.error("Erro ao criar pdf link:", error);
      return false;
    }
  }

  static async deletePdf(pdfName: string) {
    try {
      const response = await api.post("/users/deletePdf", { pdfName });
      return response.data.message;
    } catch (error) {
      console.error("Erro ao deletar pdf:", error);
      throw error;
    }
  }
}

export default UserRepositorie;
