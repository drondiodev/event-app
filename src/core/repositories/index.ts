import { getKnexClient } from "../lib/knex.lib";
import { AppEventsRepository } from "./app-events.repository";
import { AttendeesRepository } from "./attendees.repository";
import { RegistrationsRepository } from "./registrations.repository";

const knexClient = getKnexClient();

export const CoreRepositoriesLive = {
  attendeesRepository: new AttendeesRepository(knexClient),
  appEventsRepository: new AppEventsRepository(knexClient),
  registrationsRepository: new RegistrationsRepository(knexClient),
};
