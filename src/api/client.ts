import axios from "axios";
import { Configuration } from "./configuration";
import { API_HOST } from "@/constants";
import { CalendarApiFactory, ContactApiFactory, UserApiFactory } from "./api";

class APIClientClass {
  constructor(private API_ADDRESS: string) {}
  public client = axios.create({
    withCredentials: true,
    timeout: 10000,
  });
  private readonly configuration = new Configuration();

  readonly User = UserApiFactory(
    this.configuration,
    this.API_ADDRESS,
    this.client,
  );

  readonly Contact = ContactApiFactory(
    this.configuration,
    this.API_ADDRESS,
    this.client,
  );

  readonly Calendar = CalendarApiFactory(
    this.configuration,
    this.API_ADDRESS,
    this.client,
  );
}

export const APIClient = (() => new APIClientClass(API_HOST))();
